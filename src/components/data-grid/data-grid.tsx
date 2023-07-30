import { Box, Container } from '@mui/material'
import { DataGrid as NativeDataGrid } from '@mui/x-data-grid'
import { columns } from './data-grid.const'
import { Modal } from './modal'
import { Toolbar } from './toolbar'
import { useDataGrid } from './data-grid.hook'

export const DataGrid = () => {
  const { handleOpen, handleClose, open, users, getRowId, handleShouldUpdate } =
    useDataGrid()

  return (
    <Container maxWidth="md">
      <Box>
        <NativeDataGrid
          rows={users as any[]}
          getRowId={getRowId}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{
            toolbar: () => (
              <Toolbar
                handleOpen={handleOpen}
                handleShouldUpdate={handleShouldUpdate}
              />
            ),
          }}
          autoHeight
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Modal
        open={open}
        handleClose={handleClose}
        handleShouldUpdate={handleShouldUpdate}
      />
    </Container>
  )
}
