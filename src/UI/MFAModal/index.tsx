import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// SERVICES
import { validateMFA } from '../../services/plataform'

// ACTIONS
import { setToken, setMFATrue } from '../../store/reducers/auth/actions'
import { setAlert } from '../../store/reducers/global/actions'

// TYPES
import { ApplicationState } from '../../store'

// STYLED
import { Box, Row, Column, Text, Button, Input } from '55tec_frontend_lib/dist';

export interface CompProps {
  isOpen: boolean;
  setIsOpen: (e:boolean) => void;
}

export interface PageError {
  type: string;
  text: string;
}

const MFAModal: React.FC<CompProps> = ({isOpen, setIsOpen}) => {
  
  const dispatch = useDispatch()

  const { user } = useSelector((state: ApplicationState) => state.authState)

  const [doingMFA, setDoingMFA] = useState<boolean>(false)
  const [MFACode, setMFACode] = useState<string>('')
  const [pageError, setPageError] = useState<PageError>({type: '', text: ''})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleExit = () => {
    setIsOpen(false)
    setDoingMFA(false)
  }

  // REQ
  const sendMFA = async () => {
    if(!user) return

    if(!MFACode) {
      return setPageError({type: 'MFACode', text: 'Insira o código MFA'})
    }

    setIsLoading(true)

    try {
      let res = await validateMFA(user, user?.selectedClient, MFACode)

      dispatch(setToken(res?.data.token))
      dispatch(setMFATrue())
      handleExit()
      dispatch(setAlert({title: 'Sucesso', text: 'Autenticação MFA feita com sucesso!'}))
    } catch (error) {
      setPageError({type: 'MFACode', text: 'Não foi possivel realizar sua autenticação, por favor tente novamente.'})
      console.log(error)
    }

    setIsLoading(false)
  }

  return <Column justify="center" align="center" display={isOpen ? 'flex' : 'none'} position="absolute" width="100vw" height="100vh" top="0" right="0" background="#00000060" zIndex="100">
    {doingMFA ? <Box width="500px" height="auto" background="var(--white)" >
      <Row height="18px" width="100%">
        <Button onClick={handleExit} height="18px" color="var(--darkray)" background="transparent" padding="0" margin="8px 10px 0 auto">
          X
        </Button>
      </Row>

      <Column width="100%" height="100%" padding="6px 12px 20px">
        <Text font="bold 24px/27px Nunito" color="var(--black)" margin="0 auto 20px"> VOCÊ ESTA SEM MFA </Text>
        <Input error={pageError.type === 'MFACode'} errorText={pageError.type === 'MFACode' ? pageError.text : ''} margin="20px auto 0" placeholder="Código MFA" value={MFACode} onChange={(e: any) => setMFACode(e.target.value)} clearError={() => setPageError({type: '', text: ''})}  />
      </Column>

      <Row margin="12px 0 24px">
        <Button onClick={handleExit} background="transparent" color="var(--red)" margin="0 40px 0 0">Prosseguir sem MFA</Button>
        <Button width="100px" height="26px" isLoading={isLoading} onClick={sendMFA}>VALIDAR</Button>
      </Row>
    </Box> 

    : <Box width="500px" height="auto" background="var(--white)" >
      <Row height="18px" width="100%">
        <Button onClick={handleExit} height="18px" color="var(--darkray)" background="transparent" padding="0" margin="8px 10px 0 auto">
          X
        </Button>
      </Row>

      <Column width="100%" height="100%" padding="6px 12px 20px">
        <Text font="bold 24px/27px Nunito" color="var(--black)" margin="0 auto 20px"> VOCÊ ESTA SEM MFA </Text>
        <Text font="normal 16px/19px Nunito" margin="0 auto" padding="0 50px">Parece que você não realizou a autenticação MFA ao fazer seu login. Sem essa autenticação você pode ver as informações mas não pode alterar nada!</Text>
      </Column>

      <Row margin="12px 0 24px">
        <Button onClick={handleExit} background="transparent" color="var(--red)" margin="0 40px 0 0">Prosseguir sem MFA</Button>
        <Button onClick={() => setDoingMFA(true)}>Realizar MFA</Button>
      </Row>
    </Box>}
  </Column>;
}

export default MFAModal;