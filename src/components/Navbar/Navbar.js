import {
  AppBar, Box, Container, Paper, Toolbar, Typography,
} from '@mui/material';
import { DropdownUser } from '../DropdownUser';
import { SearchBar } from '../SearchBar';

const Navbar = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" component="div">
                ArgPosting
              </Typography>
            </Box>
              <SearchBar />
            <Box>
              <DropdownUser />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
