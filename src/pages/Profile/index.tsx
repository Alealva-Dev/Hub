import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// UTILS
import { formatCPF, formatPhone, formatBirth } from '../../utils'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { requestUserProfileUpdate } from '../../store/reducers/auth/actions'
import { closeSlider } from '../../store/reducers/global/actions'

// STYLED
import { Column, Text, Row, Button, Input, InputSelect } from '55tec_frontend_lib/dist'

export interface ErrorProps {
  type: string,
  text: string
}

const Profile: React.FC = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state: ApplicationState) => state.authState)
  const { isNavOpen, isLoading } = useSelector((state: ApplicationState) => state.globalState)

  const [userName, setUserName] = useState<string>((user && user.name) || '')
  const [userEmail, setUserEmail] = useState<string>((user && user.email) || '')
  const [userDocument, setUserDocument] = useState<string>((user && user.document) || '')
  const [userGender, setUserGender] = useState<string>((user && user.gender && user.gender === 'female' ? 'Feminino' : 'Masculino') || '')
  const [userPhone, setUserPhone] = useState<string>((user && user.mobile_phone) || '')
  const [userBirth, setUserBirth] = useState<string>((user && user.birth_date) || '')

  const [error, setError] = useState<ErrorProps>({type: '', text: ''})

  const handleBack = () => {
    dispatch(closeSlider())
  }

  const handleChange = async () => {
    if(!user) return

    user.name = userName
    user.email = userEmail
    user.document = userDocument.replace('.','').replace('.','').replace('.','').replace('-','').replace('/','')
    user.gender = userGender === 'Feminino' ? 'female' : 'male'
    user.mobile_phone = userPhone.replace('(','').replace(')','')
    user.birth_date = userBirth.replace('/', '-').replace('/', '-')

    dispatch(requestUserProfileUpdate(user._id, user))
  }

  const handleCPFChange = (e: any) => {
    console.log(e.key)

    if(e.key === 'Backspace') {
      e.preventDefault()
      e.stopPropagation()

      let value = userDocument
      value = value.substring(0, value.length - 1);



      setUserDocument(value)
    }
  }

  const handlePhoneChange = (e: any) => {
    console.log(e.key)

    if(e.key === 'Backspace') {
      e.preventDefault()
      e.stopPropagation()

      let value = userPhone
      value = value.substring(0, value.length - 1);



      setUserPhone(value)
    }
  }

  const handleBirthChange = (e: any) => {
    console.log(e.key)

    if(e.key === 'Backspace') {
      e.preventDefault()
      e.stopPropagation()

      let value = userBirth
      value = value.substring(0, value.length - 1);



      setUserBirth(value)
    }
  }

  const handleVerify = () => {
    if(!userName || userName.length < 4) {
      return setError({type: 'userName', text: 'Preencha com um nome válido.'})
    }

    if(!userEmail || userEmail.length < 5 || !userEmail.includes('@')) {
      return setError({type: 'userEmail', text: 'Preencha com um email válido.'})
    }

    if(!userDocument || userDocument.length < 13) {
      return setError({type: 'userDocument', text: 'Preencha com um documento válido.'})
    }

    handleChange()
  }

  return <Column overflowX="hidden" padding="40px 5%" justify="flex-start" align="flex-start" width="100vw" maxWidth={isNavOpen ? "calc(100% - 276px)" : "calc(100% - 53px)"} maxHeight="100%">
    
    <Row width="100%" height="auto" justify="space-between">
      <Text font="bold 24px/32px Nunito" color="#323232" margin="0 0 18px">Editar Perfil</Text>
      <Button onClick={handleBack}>
        Voltar
      </Button>
    </Row>

    <Row margin="24px 0" width="100%" height="auto" justify="flex-start">
      <Input errorText={error.text} error={error.type === 'userName'} margin="0" placeholder="Nome Completo" value={userName} onChange={(e: any) => setUserName(e.target.value)} clearError={() => setError({type: '', text: ''})} />
      <Input errorText={error.text} error={error.type === 'userEmail'} margin="0 0 0 60px" placeholder="Email" value={userEmail} onChange={(e: any) => setUserEmail(e.target.value)} clearError={() => setError({type: '', text: ''})} />
    </Row>

    <Row margin="24px 0" width="100%" height="auto" justify="flex-start">
      <Input errorText={error.text} error={error.type === 'userDocument'} maxLength={18} margin="0" placeholder="CPF / CNPJ" value={userDocument} onKeyDown={(e: any) => handleCPFChange(e)} onChange={(e: any) => setUserDocument(formatCPF(e.target.value))} clearError={() => setError({type: '', text: ''})} />
      <Column>
        <Text font="bold 14px/19px Nunito" color="var(--green)" margin="-23px 0 4px 62px">Gênero</Text>
        <InputSelect color="var(--black)" shadow="none" border={`1px solid var(--lightGray)`} options={[{label: 'Masculino', value: 'male'}, {label: 'Feminino', value: 'female'}]} margin="2px 0 0 60px" placeholder="Selecione" value={userGender} onChange={(e: any) => e.value ? setUserGender(e.label) : setUserGender('')} clearError={() => setError({type: '', text: ''})}/>
      </Column>
    </Row>

    <Row margin="24px 0" width="100%" height="auto" justify="flex-start">
      <Input errorText={error.text} error={error.type === 'userPhone'} maxLength={13} margin="0" placeholder="Telefone" value={userPhone} onKeyDown={(e: any) => handlePhoneChange(e)} onChange={(e: any) => setUserPhone(formatPhone(e.target.value))} clearError={() => setError({type: '', text: ''})} />
      <Input errorText={error.text} error={error.type === 'userBirth'} maxLength={10} margin="0 0 0 60px" placeholder="Data de Nascimento" onKeyDown={(e: any) => handleBirthChange(e)} value={userBirth} onChange={(e: any) => setUserBirth(formatBirth(e.target.value))} clearError={() => setError({type: '', text: ''})} />
    </Row>

    <Button width="76px" height="26px" isLoading={isLoading} onClick={handleVerify}>
      Alterar
    </Button>

   </Column>;
}

export default Profile;
