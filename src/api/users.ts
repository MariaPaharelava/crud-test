import db from '../firebase-config'
import { DocumentData, DocumentReference, addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { User } from 'src/types/entities'

export const fetchUsers = async (): Promise<User[]> => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  const users: User[] = []

  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() } as User)
  })

  return users
}

export const setUser = async ({ firstName, lastName, age }: Omit<User, 'id'>): Promise<DocumentReference<DocumentData, DocumentData>> =>
  await addDoc(collection(db, 'users'), {
    firstName,
    lastName,
    age,
  })


export const deleteUser = async ({ id }: Pick<User, 'id'>): Promise<void> =>
  await deleteDoc(doc(db, 'users', id))

