import { Box, Typography } from '@mui/material';
import useParseCommentsText from '../../hooks/useParseCommentsText';

const CommentsComponent = ({ comments }) => {
  const { commentsRaw } = useParseCommentsText(comments);
  console.log(commentsRaw);

  return (
    <Box>
      {
        commentsRaw?.map((comment, i) => (
        <Box key={i}>
          <Typography variant='body2' fontWeight='bold' >user/{comment.user}</Typography>
            {comment.message}
        </Box>
        ))
      }
    </Box>
  );
};

export default CommentsComponent;
