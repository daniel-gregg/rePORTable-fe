import { useMutation } from '@apollo/client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BioMenuBar from './BioMenuBar';
import { debounce } from 'debounce';

import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Underline from '@tiptap/extension-underline';
import { UPDATE_BIO } from '../../api/mutations';
import { QUERY_USER } from '../../api/queries';
import { useQuery } from '@apollo/client';

import './biostyles.scss';

let debounced;

const Bio = () => {
  const { data, loading } = useQuery(QUERY_USER);
  const user = data ? data.user : {};
  console.log(user);
  const [updateBio] = useMutation(UPDATE_BIO);
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor, Underline],
    content: user.bio,
    onUpdate() {
      const update = () => {
        const html = this.getHTML();
        updateBio({ variables: { _id: user._id, bio: html } });
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
    //can add props here to try to kill the formatting of the focused editor.
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bioEditorContainer">
      <div className="bioEditor">
        <BioMenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Bio;
