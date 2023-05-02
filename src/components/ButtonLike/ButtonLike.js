import {
  ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const ButtonLike = ({ likes, onClick, userLikeValidation }) => {
  console.log(likes);
  return (
    <ListItemButton onClick={onClick} sx={userLikeValidation ? { color: 'green' } : { color: 'gray' } }>
      <ListItemIcon sx={{ minWidth: 0 }}>
        {userLikeValidation ? <ThumbUpAltIcon color='primary' /> : <ThumbUpOffAltIcon /> }
      </ListItemIcon>
        <ListItemText>
          <Typography color={userLikeValidation ? 'primary' : ''} fontWeight={userLikeValidation ? 'bold' : 'normal'}>{likes?.length} likes</Typography>
        </ListItemText>
    </ListItemButton>
  );
};

export default ButtonLike;
