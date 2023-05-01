import {
  Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ADD_LIKE } from '../../posts/graphql-mutations';

const PostDetail = ({
  title, comments, descriptionRaw, userLoggin, likes, id,
}) => {
  const [likePost, results] = useMutation(ADD_LIKE);

  const addLike = () => {
    likePost({ variables: { addLikePostId: id } });
  };

  return (
    <Box>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Divider />
      <Box>
        {descriptionRaw?.[0]}
      </Box>
      <List sx={{ width: '25%', display: 'flex' }}>
          <ListItem sx={{ cursor: 'default' }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>{comments.length} comments</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => addLike()}>
              <ListItemIcon sx={{ minWidth: 0 }}>
                <ThumbUpOffAltIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>{likes.length} likes</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  );
};

export default PostDetail;
