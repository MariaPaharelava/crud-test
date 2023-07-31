import { ChangeEvent, useState } from 'react'

import { setUser } from 'src/api/users'
import { userSchema } from 'src/types/entities'

interface ModalHookProps {
  handleClose: () => void
  handleShouldUpdate: () => void
}

interface ModalHookReturns {
  onChangeFirstName: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeLastName: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAge: (event: ChangeEvent<HTMLInputElement>) => void
  onClickCreateButton: () => void
  error: boolean,
}

export const useModal = ({ handleClose, handleShouldUpdate }: ModalHookProps): ModalHookReturns => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [age, setAge] = useState<number>(-1)

  const [error, setError] = useState(false)

  const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value)
  }

  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value)
  }

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>): void => {
    setAge(Number.parseInt(event.target.value))
  }

  const onClickCreateButton = (): void => {
    const isValid = userSchema.isValidSync({
      firstName,
      lastName,
      age,
    });

    if (isValid) {
      setUser({
        firstName,
        lastName,
        age,
      })
      handleClose()
      handleShouldUpdate()
      error && setError(false)
    } else {
      setError(true)
    }
  }

  return { onChangeFirstName, onChangeLastName, onChangeAge, onClickCreateButton, error }
}
