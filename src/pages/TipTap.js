import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../components/styles.scss';
import MenuBar from '../components/MenuBar';

import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';

import { useMutation } from '@apollo/client';
import { UPDATE_CONTENT } from '../api/mutations';

const TipTap = (props) => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor, Underline],
    content: '<p>Hello World! 🌎️</p>',
    onUpdate() {
      const json = this.getJSON();
      console.log(json);
      // send the content to an API here
      //const [updateReport, { data, loading, error }] = useMutation(UPDATE_CONTENT, {
      //variables: {_id: reportId}
      //})
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
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTap;
