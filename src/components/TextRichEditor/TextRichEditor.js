import { Box } from '@mui/material';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextRichEditor = ({ setDescription, placeholder }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    setEditorState(e);
    const contentState = e.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    setDescription(JSON.stringify(rawContentState));
  };

  return (
    <Box>
        <Editor onEditorStateChange={onEditorStateChange} toolbarClassName='toolbarClassName' wrapperClassName='wrapperClassName' editorClassName='editorClassName' placeholder={placeholder} />
    </Box>
  );
};

export default TextRichEditor;
