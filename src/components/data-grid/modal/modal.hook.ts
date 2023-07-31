import { useState } from 'react'

import { setUser } from 'src/api/users'

interface ModalHookProps {
  handleClose: () => void
  handleShouldUpdate: () => void
}

interface ModalHookReturns {
  onChangeFirstName: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeLastName: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeAge: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickCreateButton: () => void
}

export const useModal = ({ handleClose, handleShouldUpdate }: ModalHookProps): ModalHookReturns => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)

  const onChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value)
  }

  const onChangeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value)
  }

  const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAge(Number.parseInt(event.target.value))
  }

  const onClickCreateButton = (): void => {
    setUser({
      firstName,
      lastName,
      age,
    })
    handleClose()
    handleShouldUpdate()
  }

  return { onChangeFirstName, onChangeLastName, onChangeAge, onClickCreateButton }
}
