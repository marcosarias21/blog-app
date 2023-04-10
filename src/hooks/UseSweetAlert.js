import { useEffect } from 'react';
import Swal from 'sweetalert2';

const UseSweetAlert = (token) => {
  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'User not logged...',
        text: 'To enter this forum you have to create a account',
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  }, [token]);
};

export default UseSweetAlert;
