import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@mui/material';
import { SearchBar } from '../SearchBar';

const NavbarToLogin = ({ openModal }) => {
  return (
    <Box>
      <AppBar position="static" color='default'>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h5" fontWeight='bold' color='primary'>
                ArgPosting
              </Typography>
            </Box>
              <SearchBar />
            <Box>
              <Button variant='outlined' onClick={openModal}>Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavbarToLogin;
