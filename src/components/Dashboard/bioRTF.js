import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './biostyles.scss';
import BioMenuBar from './BioMenuBar';

import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor, Underline],
    content: '<p>Your Bio Here!</p>',
    onUpdate() {
      const json = this.getJSON();
      console.log(json);
      // send the content to an API here
      //const { json } = useMutation(UPDATE_CONTENT, {
      // pass URL parameter
      //  variables: { _id: profileId },
      //});
    },
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
        <BioMenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
