import {
  Box,
  Button, Divider, ListItem, ListItemIcon, ListItemText, Menu,
  MenuItem, MenuList, Paper, Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import UseDropdown from '../../hooks/UseDropdown';
import ListNavItem from '../ListNavItem/ListNavItem';

const DropdownUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleClick, handleClose } = UseDropdown(setAnchorEl);

  return (
    <Box>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" >
        <Typography variant='body2'>
          NombreUser
        </Typography>
      </Button>
      <Paper sx={{ width: '240', maxWidth: '100%' }}>
        <Menu sx={{ padding: '200px' }} id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <ListNavItem icon={<AccountBoxIcon />} text='My Stuffs'/>
        <MenuList sx={{ width: '249px' }}>
          <MenuItem>
            <ListItemText inset>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>Create Post</ListItemText>
          </MenuItem>
          <Divider />
          <ListNavItem icon={<DarkModeIcon />} text='View Options'/>
          <MenuItem>
            <ListItemText inset>Dark Mode</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log-Out</ListItemText>
          </MenuItem>
        </MenuList>
        </Menu>
      </Paper>
    </Box>
  );
};

export default DropdownUser;
