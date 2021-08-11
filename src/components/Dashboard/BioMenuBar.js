import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatStrikethrough from '@material-ui/icons/FormatStrikethrough';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CodeIcon from '@material-ui/icons/Code';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksThreeIcon from '@material-ui/icons/Looks3';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ImageIcon from '@material-ui/icons/Image';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

import addImage from '../AddImage';

const BioMenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor__header">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`menu-item ${editor.isActive('bold') ? 'is-active' : ''}`}
      >
        <FormatBoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`menu-item ${editor.isActive('italic') ? 'is-active' : ''}`}
      >
        <FormatItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`menu-item ${editor.isActive('underline') ? 'is-active' : ''}`}
      >
        <FormatUnderlinedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`menu-item ${editor.isActive('strike') ? 'is-active' : ''}`}
      >
        <FormatStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`menu-item ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
      >
        <LooksOneIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`menu-item ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
      >
        <LooksTwoIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`menu-item ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
      >
        <LooksThreeIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`menu-item ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}
      >
        <FormatListBulletedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`menu-item ${editor.isActive('orderedList') ? 'is-active' : ''}`}
      >
        <FormatListNumberedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`menu-item ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
      >
        <CodeIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`menu-item ${editor.isActive('blockquote') ? 'is-active' : ''}`}
      >
        <FormatQuoteIcon />
      </button>
      <button onClick={addImage} className={`menu-item`}>
        <ImageIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`menu-item ${editor.isActive('hardbreak') ? 'is-active' : ''}`}
      >
        <KeyboardReturnIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={`menu-item ${editor.isActive('undo') ? 'is-active' : ''}`}
      >
        <UndoIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={`menu-item ${editor.isActive('redo') ? 'is-active' : ''}`}
      >
        <RedoIcon />
      </button>
    </div>
  );
};

export default BioMenuBar;
