import { type Firestore, getFirestore as getFirebaseFirestore } from 'firebase/firestore'
import { type FirebaseStorage, getStorage as getFirebaseStorage } from 'firebase/storage'
import { type Functions, getFunctions as getFirebaseFunctions } from 'firebase/functions'

import { getFirebaseApp } from '../libs/FirebaseApp'

interface IUseFirebase {
  getFirestore: () => Firestore
  getStorage: () => FirebaseStorage
  getFunctions: () => Functions
}

const useFirebase: () => IUseFirebase =
  () => {
    const getFirestore: () => Firestore =
      () => getFirebaseFirestore()

    const getStorage: () => FirebaseStorage =
      () => getFirebaseStorage()

    const getFunctions: () => Functions =
      () => {
        const app = getFirebaseApp()
        return getFirebaseFunctions(app)
      }

    return {
      getFirestore,
      getStorage,
      getFunctions
    }
  }

export default useFirebase
