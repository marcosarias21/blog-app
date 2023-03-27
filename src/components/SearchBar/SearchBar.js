import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        p: '2px 0px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#f3f6f9', transitionProperty: 'all', transitionDuration: 0.15, ':hover': { backgroundColor: '#FFFFFF' },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, paddingLeft: 1 }}
        placeholder="Search Post..."
      />
      <IconButton type="button" sx={{ p: '8px' }} aria-label="search" color='primary'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
