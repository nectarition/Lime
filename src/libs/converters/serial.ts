import { LimeSerial } from '@types'
import { FirestoreDataConverter, type DocumentData, getDoc } from 'firebase/firestore'

const serialConveter: FirestoreDataConverter<LimeSerial> = {
  toFirestore: (): DocumentData => ({}),
  fromFirestore: (snapshot): LimeSerial => {
    const serial = snapshot.data()

    return {
      expiredAt: new Date(serial.expiredAt.seconds * 1000),
      packageId: serial.package.id
    }
  }
}

export default serialConveter
