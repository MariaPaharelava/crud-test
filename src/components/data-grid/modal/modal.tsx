import { Box, Button, TextField, Modal as NativeModal } from '@mui/material'

import { useModal } from './modal.hook'
import { styles } from './modal.styles'
import { ReactElement } from 'react'
import { Close as CloseIcon } from '@mui/icons-material'

interface ModalProps {
  open: boolean
  handleClose: () => void
  handleShouldUpdate: () => void
}

export const Modal = ({
  open,
  handleClose,
  handleShouldUpdate,
}: ModalProps): ReactElement<ModalProps> => {
  const {
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onClickCreateButton,
    error,
  } = useModal({ handleClose, handleShouldUpdate })

  return (
    <NativeModal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        <Box sx={styles.closeIcon}>
          <CloseIcon onClick={handleClose} />
        </Box>
        <Box sx={styles.title}>Create User</Box>
        <TextField
          required
          fullWidth
          error={error}
          label="First Name"
          sx={{ flexGrow: 1 }}
          margin="normal"
          type="text"
          onChange={onChangeFirstName}
        />
        <TextField
          required
          error={error}
          fullWidth
          label="Last Name"
          margin="normal"
          type="text"
          onChange={onChangeLastName}
        />
        <TextField
          required
          fullWidth
          error={error}
          label="Age"
          type="number"
          margin="normal"
          onChange={onChangeAge}
        />
        <Button
          sx={styles.createButton}
          variant="contained"
          onClick={onClickCreateButton}
        >
          Create
        </Button>
      </Box>
    </NativeModal>
  )
}
