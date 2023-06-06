import { useEffect, useState } from 'react';
import { convertFromRaw } from 'draft-js';
import parse from 'html-react-parser';
import { stateToHTML } from 'draft-js-export-html';

const useParseCommentsText = (comments) => {
  const [commentsRaw, setCommentsRaw] = useState([]);

  useEffect(() => {
    if (comments && comments.length > 0) {
      const rawContentStates = comments.map((comment) => {
        const parsedComment = JSON.parse(comment);
        return convertFromRaw(parsedComment);
      });
      const htmls = rawContentStates.map((rawContentState) => {
        return stateToHTML(rawContentState);
      });
      console.log(htmls);
      const htmlsParse = htmls.map(parse);
      setCommentsRaw(htmlsParse);
    } else {
      setCommentsRaw([]);
    }
  }, []);

  return { commentsRaw };
};

export default useParseCommentsText;
