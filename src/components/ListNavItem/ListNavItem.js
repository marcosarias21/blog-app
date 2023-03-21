import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const ListNavItem = ({ icon, text }) => {
  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: 30 }}>
        {icon}
      </ListItemIcon>
      <ListItemText>
        {text}
      </ListItemText>
    </ListItem>
  );
};

export default ListNavItem;
