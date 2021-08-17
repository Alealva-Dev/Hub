import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CryptoJS from 'crypto-js'

// UTILS
import { formatCPF, formatPhone, formatBirth } from '../../utils'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { requestUserPassUpdate } from '../../store/reducers/auth/actions'
import { closeSlider } from '../../store/reducers/global/actions'

// STYLED
import { Column, Text, Row, Button, Input, InputSelect } from '55tec_frontend_lib/dist'

export interface ErrorProps {
  type: string,
  text: string
}

const PassChange: React.FC = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state: ApplicationState) => state.authState)
  const { isNavOpen, isLoading } = useSelector((state: ApplicationState) => state.globalState)

  const [userOriginalPass, setUserOriginalPass] = useState<string>('')
  const [userNewPass, setUserNewPass] = useState<string>('')
  const [userConfirmPass, setUserConfirmPass] = useState<string>('')

  const [error, setError] = useState<ErrorProps>({type: '', text: ''})

  const handleBack = () => {
    setUserOriginalPass('')
    setUserNewPass('')
    setUserConfirmPass('')
    dispatch(closeSlider())
  }

  const handleChange = async () => {
    if(!user) return

    let password = CryptoJS.SHA512(userOriginalPass).toString(CryptoJS.enc.Base64)
    let new_password = CryptoJS.SHA512(userNewPass).toString(CryptoJS.enc.Base64)
    let user_id = user._id

    dispatch(requestUserPassUpdate(password, new_password, user_id))
  }

  const handleVerify = () => {
    if(!userOriginalPass || userOriginalPass.length < 8) {
      return setError({type: 'userOriginalPass', text: 'Preencha com uma senha válida com pelo menos 8 caracteres!'})
    }

    if(!userNewPass || userNewPass.length < 8) {
      return setError({type: 'userNewPass', text: 'Preencha com uma senha válida com pelo menos 8 caracteres!'})
    }

    if(!userConfirmPass || userConfirmPass.length < 8 || userConfirmPass !== userNewPass) {
      return setError({type: 'userConfirmPass', text: 'Senhas estão diferentes!'})
    }

    handleChange()
  }

  return <Column overflowX="hidden" padding="40px 5%" justify="flex-start" align="flex-start" width="100vw" maxWidth={isNavOpen ? "calc(100% - 276px)" : "calc(100% - 53px)"} maxHeight="100%">
    
    <Row margin="0 0 28px" width="100%" height="auto" justify="space-between">
      <Text font="bold 24px/32px Nunito" color="#323232" margin="0">Editar Perfil</Text>
      <Button onClick={handleBack}>
        Voltar
      </Button>
    </Row>

    <Input type="password" errorText={error.text} error={error.type === 'userOriginalPass'} margin="10px 0 28px" placeholder="Senha Atual" value={userOriginalPass} onChange={(e: any) => setUserOriginalPass(e.target.value)} clearError={() => setError({type: '', text: ''})} />
    <Input type="password" errorText={error.text} error={error.type === 'userNewPass'} margin="0 0 28px" placeholder="Nova Senha" value={userNewPass} onChange={(e: any) => setUserNewPass(e.target.value)} clearError={() => setError({type: '', text: ''})} />
    <Input type="password" errorText={error.text} error={error.type === 'userConfirmPass'} margin="0 0 28px" placeholder="Confirmar Nova Senha" value={userConfirmPass} onChange={(e: any) => setUserConfirmPass(e.target.value)} clearError={() => setError({type: '', text: ''})} />
    

    <Button width="76px" height="26px" isLoading={isLoading} onClick={handleVerify}>
      Alterar
    </Button>

   </Column>;
}

export default PassChange;
