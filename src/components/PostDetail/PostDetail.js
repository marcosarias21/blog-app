import {
  Box, Divider, List, ListItem, Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ListNavItem } from '../ListNavItem';
import { ButtonLike } from '../ButtonLike';

const PostDetail = ({
  title, comments, descriptionRaw, userLoggin, likes, addLike,
}) => {
  const userLikeValidation = likes.some(like => like.user === userLoggin?.username);

  return (
    <Box>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Divider />
      <Box>
        {descriptionRaw}
      </Box>
      <List sx={{ display: 'flex', width: '30%' }}>
          <ListNavItem icon={<MailOutlineIcon />} text={`${comments?.length} comments`} />
          <ListItem>
            <ButtonLike likes={likes} onClick={addLike} userLikeValidation={userLikeValidation} />
          </ListItem>
        </List>
    </Box>
  );
};

export default PostDetail;
