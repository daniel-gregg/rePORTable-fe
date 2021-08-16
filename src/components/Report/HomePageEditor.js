import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';

import MenuBar from '../MenuBar';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

const HomePageEditor = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    content: '<p> Try out the editor!',
    editorProps: {
      attributes: {
        class: 'editor__content',
      },
    },
  });

  return (
    <div className="HomeEditorContainer">
      <div className="HomeEditor">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default HomePageEditor;
