import {
  Box, Button, Modal, OutlinedInput, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TextRichEditor } from '../TextRichEditor';
import { CREATE_POST } from '../../posts/graphql-mutations';

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
  const [posts, results] = useMutation(CREATE_POST);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    posts({ variables: { title, description } });
  };

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
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 1 }}>
              <OutlinedInput fullWidth id="outlined-basic" placeholder="Title" type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
              <TextRichEditor description={description} setDescription={setDescription} />
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
    </div>
  );
};

export default ModalForm;
