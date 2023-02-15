import React from 'react';

import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { BtnCloseModal } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: { tablet: '650px', desktop: '687px' },
  bgcolor: 'white',
  borderRadius: '24px',
  boxShadow: 24,
  p: '23px 20px',
};

export default function ModalEl({ children, nameOfButton, open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const variantOfButton = nameOfButton => {
    switch (nameOfButton) {
      case 'Редагувати':
        return 'edit';

      case 'Всі області':
        return 'ukrstrong';

      case 'Створити новий пост':
        return 'createNewPost';

      default:
        return 'ukrstrong';
    }
  };
  return (
    <div>
      <Button variant={variantOfButton(nameOfButton)} onClick={handleOpen}>
        {nameOfButton}
        {nameOfButton === 'Редагувати' ? (
          <EditOutlinedIcon fontSize="small" sx={{ ml: '7px' }} />
        ) : nameOfButton === 'Всі області' ? (
          <KeyboardArrowDownIcon fontSize="small" sx={{ ml: '10px' }} />
        ) : null}
      </Button>
      <Modal
        open={open ?? false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          background: 'rgba(31, 31, 31, 0.68)',
          backdropFilter: 'blur(7.5px)',
        }}
      >
        <Box sx={style}>
          <BtnCloseModal onClick={handleClose}>
            <CloseIcon sx={{ color: '#748E9A' }} />
          </BtnCloseModal>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
