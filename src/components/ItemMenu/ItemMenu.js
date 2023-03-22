import { ListItemText, MenuItem } from '@mui/material';

const ItemMenu = ({ item }) => {
  return (
    <MenuItem>
      <ListItemText inset>{item}</ListItemText>
    </MenuItem>
  );
};

export default ItemMenu;
