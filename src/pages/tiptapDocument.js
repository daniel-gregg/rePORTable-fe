import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../components/styles.scss';
import MenuBar from '../components/MenuBar';

import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor, Underline],
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
