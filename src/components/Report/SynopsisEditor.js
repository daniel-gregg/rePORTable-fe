import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { UPDATE_SYNOPSIS } from '../../api/mutations';
import { useMutation } from '@apollo/client';
import { debounce } from 'debounce';
import Paragraph from '@tiptap/extension-paragraph';

let debounced;

const SynopsisEditor = ({ report }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updateSynopsis] = useMutation(UPDATE_SYNOPSIS);
  const editor = useEditor({
    extensions: [StarterKit, Paragraph],
    content: report.singleReport.synopsis,
    onUpdate() {
      const update = () => {
        const html = this.getHTML();
        console.log(html);
        updateSynopsis({ variables: { id: report.singleReport._id, synopsis: html } });
      };
      debounced?.clear();
      debounced = debounce(() => update(), 4000);
      debounced();
    },
    editorProps: {
      attributes: {
        class: 'editor__content',
      },
    },
  });

  return (
    <div className="synopsisEditorContainer">
      <div className="synopsisEditor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default SynopsisEditor;
