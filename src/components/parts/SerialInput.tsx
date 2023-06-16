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
      <h1>シリアルコードを入力してください</h1>
      <p>
        シリアルコードには有効期限があります。<br />
        有効期限外のコードが入力された場合、コードが正しくても「シリアルコードが間違っています」と表示されます。
      </p>
      <FormSection>
        <FormItem>
          <FormInput
            className='code'
            size={32}
            value={props.serial}
            onChange={e => props.setSerial(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && props.handleFindSerial()} />
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
