import {
  Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { usePostBook } from '../../store/postStore';
import useParseText from '../../hooks/useParseText';
import { ListNavItem } from '../ListNavItem';

const PostContent = ({
  title, description, userLoggin, comments, id, likes,
}) => {
  const navigate = useNavigate();
  const saveId = usePostBook((state) => state.saveId);
  const descriptionRaw = useParseText(description);

  const handlePost = () => {
    saveId(id);
    navigate('/post');
  };

  return (
    <Container onClick={() => handlePost()} sx={{
      backgroundColor: '#FFF', border: '1px solid lightgray', cursor: 'pointer', ':hover': { border: '1px solid gray' },
    }}>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Divider />
      <Box>
        {descriptionRaw}
      </Box>
        <List sx={{ width: '35%', display: 'flex' }}>
          <ListNavItem icon={<MailOutlineIcon />} text={`${comments?.length} comments`} />
          <ListItem>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <ThumbUpOffAltIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>{likes?.length} likes</Typography>
            </ListItemText>
          </ListItem>
        </List>
    </Container>
  );
};

export default PostContent;
