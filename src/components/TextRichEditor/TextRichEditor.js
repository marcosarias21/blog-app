/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextRichEditor = ({ description, setDescription }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    setEditorState(e);
    const contentState = e.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log(rawContentState);
    const text = contentState.getPlainText();
    setDescription(text);
  };

  return (
    <Box>
        <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} toolbarClassName='toolbarClassName' wrapperClassName='wrapperClassName' editorClassName='editorClassName' value={description} placeholder='Write description post...' />
    </Box>
  );
};

export default TextRichEditor;
