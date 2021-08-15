import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { UPDATE_CONTENT } from '../../api/mutations';
import { useMutation } from '@apollo/client';
import { debounce } from 'debounce';

import MenuBar from '../MenuBar';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

let debounced;

const ContentEditor = ({ report }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updateContent] = useMutation(UPDATE_CONTENT);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Dropcursor,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
      }),
    ],
    content: JSON.parse(report.content),
    onUpdate() {
      const update = () => {
        const json = this.getJSON();
        updateContent({ variables: { id: report._id, content: JSON.stringify(json) } });
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
    <div className="editorContainer">
      <div className="menuContainer">
        <MenuBar editor={editor} />
      </div>
      <div className="editor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ContentEditor;
