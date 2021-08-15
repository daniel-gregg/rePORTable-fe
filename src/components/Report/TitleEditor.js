import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { UPDATE_TITLE } from '../../api/mutations';
import { useMutation } from '@apollo/client';
import Paragraph from '@tiptap/extension-paragraph';

const TitleEditor = ({ report }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updateTitle] = useMutation(UPDATE_TITLE);
  const editor = useEditor({
    extensions: [StarterKit, Paragraph],
    content: report.title,
    onUpdate() {
      const html = this.getHTML();
      updateTitle({ variables: { id: report._id, title: html } });
    },
    editorProps: {
      attributes: {
        class: 'editor__content',
      },
    },
  });

  return (
    <div className="titleEditorContainer">
      <div className="titleEditor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TitleEditor;
