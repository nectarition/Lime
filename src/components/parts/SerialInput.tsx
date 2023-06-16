import FormSection from '../form/FormSection'
import FormItem from '../form/FormItem'
import FormInput from '../form/FormInput'
import FormButton from '../form/FormButton'

interface Props {
  serial: string
  setSerial: (serial: string) => void
  handleFindSerial: () => void
}

const SerialInput: React.FC<Props> = (props) => {
  return (
    <>
      <p>シリアルコードを入力してください</p>
      <FormSection>
        <FormItem>
          <FormInput size={32} value={props.serial} onChange={e => props.setSerial(e.target.value)} />
        </FormItem>
      </FormSection>
      <FormSection>
        <FormItem>
          <FormButton onClick={props.handleFindSerial}>送信</FormButton>
        </FormItem>
      </FormSection>
    </>
  )
}

export default SerialInput
