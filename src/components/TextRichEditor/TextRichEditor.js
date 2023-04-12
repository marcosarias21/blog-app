import { Box } from '@mui/material';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextRichEditor = ({ setDescription }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  console.log(editorState);
  const onEditorStateChange = (e) => {
    setEditorState(e);
    const contentState = e.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    setDescription(JSON.stringify(rawContentState));
  };

  return (
    <Box>
        <Editor onEditorStateChange={onEditorStateChange} toolbarClassName='toolbarClassName' wrapperClassName='wrapperClassName' editorClassName='editorClassName' placeholder='Write description post...' />
    </Box>
  );
};

export default TextRichEditor;