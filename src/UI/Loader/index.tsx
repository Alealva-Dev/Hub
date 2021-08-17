import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// IMAGES
import loader from '../../assets/loader.svg'

// ACTIONS
import { stopLoading, setAlert } from '../../store/reducers/global/actions'

// TYPES
import { ApplicationState } from '../../store'

// STYLED
import { Box, Column, Text, Img } from '55tec_frontend_lib/dist';

const Alert: React.FC = () => {

  const dispatch = useDispatch()
  const { isLoading } = useSelector((state: ApplicationState) => state.globalState)

  const [timeup, setTimeup] = useState<any>(false)

  useEffect(() => {
    timeoutLoading()
  }, [isLoading])

  const timeoutLoading = () => {
    
    if (isLoading && !timeup) {
      setTimeup(setTimeout(() => {
          dispatch(stopLoading())
          dispatch(setAlert({title: "Ops", text: "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte.", timed: true, timedAmmount: 5000}))      
      }, 20000))
    }

    if(!isLoading && timeup) {
      clearTimeout(timeup)
      setTimeup(false)

    }
  }

  return <Column justify="center" align="center" display={isLoading ? 'flex' : 'none'} position="absolute" width="100vw" height="100vh" top="0" right="0" background="#00000060" zIndex="100">
    <Box width="300px" height="auto" background="var(--white)" >     

      <Column width="100%" height="100%" padding="12px 12px 20px">
        <Text font="bold 24px/27px Nunito" color="var(--black)" margin="0 auto 20px"> Aguarde </Text>
        <Img width="80px" margin="0 auto 20px" src={loader} />
        <Text font="normal 16px/19px Nunito" margin="0 auto"> Estamos processando sua solicitação... </Text>
      </Column>
    </Box>
  </Column>;
}

export default Alert;