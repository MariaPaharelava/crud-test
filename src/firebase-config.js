import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBM5WuX7xYWmTE1b9eOu8OJ4RFF1BzpRsE',
  authDomain: 'crud-test-2789c.firebaseapp.com',
  projectId: 'crud-test-2789c',
  storageBucket: 'crud-test-2789c.appspot.com',
  messagingSenderId: '310393039462',
  appId: '1:310393039462:web:be486680757aa5d21b9ba7',
  measurementId: 'G-B0Q5EXJH1N',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
