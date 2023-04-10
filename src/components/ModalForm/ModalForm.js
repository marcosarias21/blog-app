import {
  Box, Button, Modal, OutlinedInput, Typography,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalForm = ({ open, closeModal }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h5' fontWeight='bold' textAlign='center' >Create Post</Typography>
          <form>
            <Box sx={{ display: 'grid', gap: 1 }}>
              <OutlinedInput fullWidth id="outlined-basic" placeholder="Title post"/>
              <OutlinedInput fullWidth id="outlined-basic" placeholder="Description..."/>
            </Box>
          </form>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <Box sx={{ flexGrow: 1 }} >
              <Button color='error' variant='outlined' onClick={closeModal}>Cancel</Button>
            </Box>
            <Box>
              <Button color='success' variant='contained'>Post</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
