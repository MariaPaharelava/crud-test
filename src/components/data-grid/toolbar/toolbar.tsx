import { Box, Button } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid'
import { styles } from './toolbar.styles'
import { deleteUser } from '../../../api/users'
import { ReactElement } from 'react'

interface ToolbarProps {
  handleOpen: () => void
  handleShouldUpdate: () => void
}

export const Toolbar = ({
  handleOpen,
  handleShouldUpdate,
}: ToolbarProps): ReactElement<ToolbarProps> => {
  const apiRef = useGridApiContext()

  const onClickDelete = (): void => {
    const selectedRows = apiRef.current.getSelectedRows()
    selectedRows?.forEach(({ id }) => {
      deleteUser({ id })
    })

    handleShouldUpdate()
  }

  const onClickAdd = (): void => {
    handleOpen()
  }

  return (
    <GridToolbarContainer sx={styles.container}>
      <Box sx={styles.title}>Users</Box>
      <Button startIcon={<AddIcon />} variant="contained" onClick={onClickAdd}>
        Add
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        variant="outlined"
        color="error"
        onClick={onClickDelete}
        sx={styles.deleteButton}
      >
        Delete
      </Button>
    </GridToolbarContainer>
  )
}
