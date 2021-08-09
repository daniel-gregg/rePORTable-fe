const addImage = () => {
  const url = window.prompt('URL');

  if (url) {
    // eslint-disable-next-line no-undef
    editor.chain().focus().setImage({ src: url }).run();
  }
};
