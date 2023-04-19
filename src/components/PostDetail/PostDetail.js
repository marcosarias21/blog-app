import {
  Box, Divider, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const PostDetail = ({
  descriptionRaw, title, comments, userLoggin,
}) => {
  return (
    <Box>
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
    </Box>
  );
};

export default PostDetail;
