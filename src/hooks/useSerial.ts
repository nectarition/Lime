import { LimePackageInfo, LimeSerial } from '@types'
import { doc, getDoc } from 'firebase/firestore'

import useFirebase from './useFirebase'

import serialConveter from '../libs/converters/serial'
import packageInfoConveter from '../libs/converters/package'

interface IUseSerial {
  getPackageInfoAsync: (packageId: string) => Promise<LimePackageInfo | null>
  findSerialAsync: (serial: string) => Promise<LimeSerial | null>
}

const useSerial: () => IUseSerial =
  () => {
    const { getFirestore } = useFirebase()

    const findSerialAsync: (serial: string) => Promise<LimeSerial | null> =
      async (serial) => {
        const db = getFirestore()

        const serialRef = doc(db, `serials/${serial}`)
          .withConverter(serialConveter)
        const serialDoc = await getDoc(serialRef)
          .catch(() => null)

        return serialDoc?.exists() ? serialDoc.data() : null
      }

    const getPackageInfoAsync: (packageId: string) => Promise<LimePackageInfo | null> =
      async (packageId) => {
        const db = getFirestore()

        const packageRef = doc(db, `packages/${packageId}`)
          .withConverter(packageInfoConveter)
        const packageDoc = await getDoc(packageRef)
          .catch(() => null)

        return packageDoc?.exists() ? packageDoc.data() : null
      }

    return {
      findSerialAsync,
      getPackageInfoAsync
    }
  }

export default useSerial
