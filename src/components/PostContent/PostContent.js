import {
  Box, Container, Divider, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import { convertFromRaw } from 'draft-js';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { stateToHTML } from 'draft-js-export-html';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useEffect, useState } from 'react';
import { usePostBook } from '../../store/postStore';

const PostContent = ({
  title, description, userLoggin, comments,
}) => {
  const navigate = useNavigate();
  const savePost = usePostBook((state) => state.savePost);
  const [descriptionRaw, setDescriptionRaw] = useState();

  const handlePost = () => {
    savePost({
      title, descriptionRaw, userLoggin, comments,
    });
    navigate('/post');
  };

  useEffect(() => {
    const newDescription = JSON.parse(description);
    const convertDescription = convertFromRaw(newDescription);
    const myHtml = stateToHTML(convertDescription);
    const parseHtml = parse(myHtml);
    setDescriptionRaw(parseHtml);
  }, [description]);

  return (
    <Container onClick={() => handlePost()} sx={{ border: '1px solid lightgray', cursor: 'pointer', ':hover': { border: '1px solid gray' } }}>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Divider />
      <Box>
        {descriptionRaw}
      </Box>
      <Box>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant='body2'>{comments.length} comments</Typography>
          </ListItemText>
        </ListItem>
      </Box>
    </Container>
  );
};

export default PostContent;
