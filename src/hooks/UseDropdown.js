import React, { useState } from 'react';

const UseDropdown = (setAnchorEl) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return { handleClick, handleClose };
};

export default UseDropdown;
