import {
  Box, Container, Divider, Typography,
} from '@mui/material';

const PostContent = ({ title, description, userLoggin }) => {
  return (
    <Container sx={{ border: '1px solid gray' }}>
      <Typography fontSize={14} variant='span'>Posted by u/<Typography variant='span'>{userLoggin.username}</Typography></Typography>
      <Typography variant='h5' fontWeight='bold'>
        {title}
      </Typography>
      <Divider />
      <Box>
        <Typography>
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default PostContent;
