import { useState } from 'react';

const UseDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return { handleClick, handleClose, anchorEl };
};

export default UseDropdown;
