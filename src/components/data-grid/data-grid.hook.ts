import { useEffect, useState } from 'react'
import { fetchUsers } from '../../api/users'
import { User } from '../../types/entities'

interface DataGridHookReturn {
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void,
  users: User[],
  getRowId: (row: User) => string,
  handleShouldUpdate: () => void,
}

export const useDataGrid = (): DataGridHookReturn => {
  const [open, setOpen] = useState(false)
  const [shouldUpdate, setShouldUpdate] = useState(true)
  const [users, setUsers] = useState<User[]>([])

  const handleOpen = (): void => setOpen(true)

  const handleClose = (): void => setOpen(false)

  const handleShouldUpdate = (): void => setShouldUpdate(true)

  const fetchAPI = async () => {
    setUsers(await fetchUsers())
  }

  useEffect(() => {
    if (shouldUpdate) {
      fetchAPI()
      setShouldUpdate(false)
    }
  }, [shouldUpdate])

  const getRowId = (row: User): string => row.id

  return { open, handleOpen, handleClose, users, getRowId, handleShouldUpdate }
}
