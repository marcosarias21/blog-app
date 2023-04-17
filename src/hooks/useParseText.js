import { useEffect, useState } from 'react';
import { convertFromRaw } from 'draft-js';
import parse from 'html-react-parser';
import { stateToHTML } from 'draft-js-export-html';

const useParseText = (description) => {
  const [descriptionRaw, setDescriptionRaw] = useState();

  useEffect(() => {
    const newDescription = JSON.parse(description);
    const convertDescription = convertFromRaw(newDescription);
    const myHtml = stateToHTML(convertDescription);
    const parseHtml = parse(myHtml);
    setDescriptionRaw(parseHtml);
  }, [description]);

  return descriptionRaw;
};

export default useParseText;
