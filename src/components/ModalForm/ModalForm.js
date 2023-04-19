import {
  Box, Button, Input, Modal, Typography,
} from '@mui/material';
import { useState } from 'react';
import { TextRichEditor } from '../TextRichEditor';

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

const ModalForm = ({ open, closeModal, posts }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    posts({ variables: { title, description } });
  };

  return (
    <Box>
      <Modal
        sx={{ zIndex: 100 }}
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h5' fontWeight='bold' textAlign='center' >Create Post</Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Input fullWidth id="outlined-basic" placeholder="Title" type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
              <TextRichEditor description={description} setDescription={setDescription} placeholder='Write description about post...' />
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Box sx={{ flexGrow: 1 }} >
                <Button color='error' variant='outlined' onClick={closeModal}>Cancel</Button>
              </Box>
              <Box>
                <Button color='success' variant='contained' type='submit'>Create Post</Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalForm;
