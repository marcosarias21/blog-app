const UseLogout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '';
  };
  return { handleLogout };
};

export default UseLogout;
