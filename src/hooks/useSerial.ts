import { LimeSerial } from '@types'

interface IUseSerial {
  findSerialAsync: (serial: string) => Promise<LimeSerial | null>
}

const useSerial: () => IUseSerial =
  () => {
    const findSerialAsync: (serial: string) => Promise<LimeSerial | null> =
      async () => {
        return null
      }

    return {
      findSerialAsync
    }
  }

export default useSerial
