import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// ACTIONS
import { removeAlert } from '../../store/reducers/global/actions'

// TYPES
import { ApplicationState } from '../../store'

// STYLED
import { Box, Row, Column, Text, Button } from '55tec_frontend_lib/dist';

const Alert: React.FC = () => {
  
  const dispatch = useDispatch()

  const { hasAlert, alertContent } = useSelector((state: ApplicationState) => state.globalState)

  useEffect(() => {
    setup()
  },[alertContent])

  const handleExit = () => {
    dispatch(removeAlert())
  }

  const setup = () => {
    if(alertContent.timed) {
      setTimeout(() => handleExit(), alertContent.timedAmmount || 15000)
    }
  }

  return <Column justify="center" align="center" display={hasAlert ? 'flex' : 'none'} position="absolute" width="100vw" height="100vh" top="0" right="0" background="#00000060" zIndex="100">
    <Box width="300px" height="auto" background="var(--white)" >
      <Row height="18px" width="100%">
        {!alertContent.onAccept && <Button onClick={handleExit} height="18px" color="var(--darkray)" background="transparent" padding="0" margin="8px 10px 0 auto">
          X
        </Button>}
      </Row>

      <Column width="100%" height="100%" padding="6px 12px 20px">
        <Text font="bold 24px/27px Nunito" color="var(--black)" margin="0 auto 20px"> {alertContent.title} </Text>
        <Text font="normal 16px/19px Nunito" margin="0 auto"> {alertContent.text} </Text>
      </Column>

      <Row>
        {alertContent.onAccept ? <Button onClick={alertContent.onAccept}> {alertContent.acceptLabel || 'OK'} </Button> : null}
        {alertContent.onRefuse ? <Button onClick={alertContent.onRefuse} background="var(--red)"> {alertContent.refuseLabel || 'Cancelar'}</Button> : null}
      </Row>
    </Box>
  </Column>;
}

export default Alert;