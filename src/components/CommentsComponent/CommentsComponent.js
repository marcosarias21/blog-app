import { Box, Typography } from '@mui/material';
import useParseCommentsText from '../../hooks/useParseCommentsText';

const CommentsComponent = ({ comments }) => {
  const { commentsRaw } = useParseCommentsText(comments?.map(com => com.message));

  return (
    <Box>
      {
        comments?.map((comment, i) => (
        <Box key={i}>
          <Typography variant='body2' fontWeight='bold' >user/{comment.user}</Typography>
            {commentsRaw[i]}
        </Box>
        ))
      }
    </Box>
  );
};

export default CommentsComponent;
