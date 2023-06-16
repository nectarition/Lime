import { LimePackageInfo } from '@types'

import { useState } from 'react'
import useSerial from '../hooks/useSerial'

import DefaultLayout from '../components/layouts/default/DefaultLayout'
import SerialInput from '../components/parts/SerialInput'

import FormSection from '../components/form/FormSection'
import FormItem from '../components/form/FormItem'
import FormButton from '../components/form/FormButton'

const App: React.FC = () => {
  const { findSerialAsync, getPackageInfoAsync } = useSerial()

  const [serial, setSerial] = useState('')
  const [packageInfo, setPackageInfo] = useState<LimePackageInfo | null>()

  const handleFindSerial: () => void =
    () => {
      if (!serial) {
        alert('シリアルコードを入力してください')
        return
      }

      findSerialAsync(serial)
        .then(serialData => {
          if (!serialData) {
            alert('シリアルコードが間違っています')
            setSerial('')
            return
          }

          getPackageInfoAsync(serialData.packageId)
            .then(packageData => {
              if (!packageData) {
                alert('packageData: エラーが発生しました')
                return
              }

              setPackageInfo(packageData)
            })
            .catch(() => alert('package: エラーが発生しました'))
        })
        .catch(() => alert('serial: エラーが発生しました'))
    }

  return (
    <DefaultLayout>
      {
        !packageInfo
          ? <SerialInput
            serial={serial}
            setSerial={s => setSerial(s)}
            handleFindSerial={handleFindSerial} />
          : <>
            <h1>{packageInfo.title}</h1>
            <p>{packageInfo.description}</p>
            <ul>
              {packageInfo.items.map(i => <li key={i.id}><a href={i.link} target="_blank">{i.name}</a></li>)}
            </ul>
            <FormSection>
              <FormItem>
                <FormButton
                  onClick={() => setPackageInfo(null)}
                  color='default'>シリアルコード入力ページに戻る</FormButton>
              </FormItem>
            </FormSection>
          </>
      }
    </DefaultLayout>
  )
}

export default App
