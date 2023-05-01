import {
  ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const ButtonLike = ({ likes, onClick, userLikeValidation }) => {
  console.log(likes);
  return (
    <ListItemButton onClick={onClick} sx={userLikeValidation ? { color: 'green' } : { color: 'gray' } }>
      <ListItemIcon sx={{ minWidth: 0 }}>
        <ThumbUpOffAltIcon />
      </ListItemIcon>
        <ListItemText>
          <Typography>{likes?.length} likes</Typography>
        </ListItemText>
    </ListItemButton>
  );
};

export default ButtonLike;
