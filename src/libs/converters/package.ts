import { LimePackageInfo } from '@types'
import { FirestoreDataConverter, type DocumentData } from 'firebase/firestore'

const packageInfoConveter: FirestoreDataConverter<LimePackageInfo> = {
  toFirestore: (): DocumentData => ({}),
  fromFirestore: (snapshot): LimePackageInfo => {
    const packageInfo = snapshot.data()
    return {
      title: packageInfo.title,
      description: packageInfo.description,
      items: packageInfo.items
    }
  }
}

export default packageInfoConveter
