import React from 'react';
import { Modal, Typography, Button } from '@mui/material';
import { StyledBox } from './styled.js'; // Importando o Box estilizado

function CustomModal({ open, handleClose, handleConfirmReset }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <StyledBox>
        <Typography variant="h6" id="parent-modal-title">
          Apagar Conversa
        </Typography>
        <Typography id="parent-modal-description" sx={{ mt: 2 }}>
          Você tem certeza que deseja apagar seu histórico? Esta ação não pode ser desfeita.
        </Typography>

        <Button
          onClick={handleConfirmReset}
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Sim
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{ mt: 2, marginLeft: 2 }}
        >
          Cancelar
        </Button>
      </StyledBox>
    </Modal>
  );
}

export default CustomModal;
