import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import { convertFromRaw } from 'draft-js';
import parse from 'html-react-parser';
import { stateToHTML } from 'draft-js-export-html';
import { useEffect, useState } from 'react';

const PostContent = ({ title, description, userLoggin }) => {
  const [descriptionRaw, setDescriptionRaw] = useState();

  useEffect(() => {
    const newDescription = JSON.parse(description);
    const convertDescription = convertFromRaw(newDescription);
    const myHtml = stateToHTML(convertDescription);
    const parseHtml = parse(myHtml);
    setDescriptionRaw(parseHtml);
  }, [description]);

  return (
    <Container sx={{ border: '1px solid gray' }}>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>
        {title}
      </Typography>
      <Divider />
      <Box>
        {descriptionRaw}
      </Box>
    </Container>
  );
};

export default PostContent;
