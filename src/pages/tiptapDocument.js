import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../components/styles.scss';
import MenuBar from '../components/MenuBar';

import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'editor__content',
      },
    },
    //can add props here to try to kill the formatting of the focused editor.
  });

  return (
    <div className="editorContainer">
      <div className="editor">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
