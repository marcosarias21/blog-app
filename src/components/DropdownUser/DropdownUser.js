import {
  Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useDropdown from '../../hooks/useDropdown';
import { ListNavItem } from '../ListNavItem';
import { ItemMenu } from '../ItemMenu';
import useLogout from '../../hooks/useLogout';

const DropdownUser = ({ userLoggin, openModal }) => {
  const { handleClick, handleClose, anchorEl } = useDropdown();
  const { handleLogout } = useLogout();

  return (
    <Box>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" >
        <Typography variant='body2'>
          {userLoggin?.username ? userLoggin?.username : 'Register'}
        </Typography>
      </Button>
        <Menu sx={{ padding: '200px', zIndex: 1 }} id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <ListNavItem icon={<AccountBoxIcon />} text='My Stuffs'/>
          <MenuList sx={{ width: '249px' }}>
            <ItemMenu item='Profile' />
            <ItemMenu item='Create Post' onClick={openModal} />
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
              <ListItemText onClick={handleLogout}>Log-Out</ListItemText>
            </MenuItem>
          </MenuList>
        </Menu>
    </Box>
  );
};

export default DropdownUser;
