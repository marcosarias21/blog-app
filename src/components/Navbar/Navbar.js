import {
  AppBar, Box, Container, Toolbar, Typography,
} from '@mui/material';
import { DropdownUser } from '../DropdownUser';
import { SearchBar } from '../SearchBar';

const Navbar = ({ userLoggin, openModal }) => {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" component="div">
                ArgPosting
              </Typography>
            </Box>
              <SearchBar />
            <Box>
              <DropdownUser userLoggin={userLoggin} openModal={openModal} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
