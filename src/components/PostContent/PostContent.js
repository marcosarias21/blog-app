import {
  Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { usePostBook } from '../../store/postStore';
import useParseText from '../../hooks/useParseText';

const PostContent = ({
  title, description, userLoggin, comments, id, likes,
}) => {
  const navigate = useNavigate();
  const savePost = usePostBook((state) => state.savePost);
  const descriptionRaw = useParseText(description);

  const handlePost = () => {
    savePost({
      title, descriptionRaw, userLoggin, comments, id, likes,
    });
    navigate('/post');
  };

  return (
    <Container onClick={() => handlePost()} sx={{ border: '1px solid lightgray', cursor: 'pointer', ':hover': { border: '1px solid gray' } }}>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Divider />
      <Box>
        {descriptionRaw?.[0]}
      </Box>
        <List sx={{ width: '25%', display: 'flex' }}>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>{comments.length} comments</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <ThumbUpOffAltIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>{likes.length} likes</Typography>
            </ListItemText>
          </ListItem>
        </List>
    </Container>
  );
};

export default PostContent;
