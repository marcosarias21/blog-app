import { ListItemText, MenuItem } from '@mui/material';

const ItemMenu = ({ item, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <ListItemText inset >{item}</ListItemText>
    </MenuItem>
  );
};

export default ItemMenu;
