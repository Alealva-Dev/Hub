import React, { useEffect, useState } from 'react';
import { Column, Row } from '55tec_frontend_lib/dist'
import { useSelector, useDispatch } from 'react-redux'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { stopLoading } from '../../store/reducers/global/actions'

// PAGES
import FAQ from '../FAQ'
import Profile from '../Profile'
import PassChange from '../PassChange'

// COMPONENTS
import Header from '../../UI/Header'
import Nav from '../../UI/Nav'

const Main: React.FC = () => {

  const dispatch = useDispatch()
  const { user, application } = useSelector((state: ApplicationState) => state.authState)
  const { slider, sliderContent, isLoading } = useSelector((state: ApplicationState) => state.globalState)

  const [frameAddress, setFrameAdress] = useState('')

  useEffect(() => {
    setUp()
  },[application])

  useEffect(() => {
    setListener()
  },[user])

  useEffect(() => {
    refreshClientOnApps()
  },[user?.selectedClient])

  const setUp = () => {
    if (!application) return

    switch (application) {
      case "admin":
        setFrameAdress("https://admin.localhost:3001/")
        break;

      case "report":
        setFrameAdress("https://report.localhost:5000/")
        break;

      case "realtime":
        setFrameAdress("https://realtime.localhost:8600/")
        break;

      case "wallboard":
        setFrameAdress("http://localhost:3002/")
        break;
    
      default:
        break;
    }
  }

  const refreshClientOnApps = () => {
    const wn: any = document.getElementById('55iframe');

    const params = {
      action: 'updateClient',
      payload: user,
      clients: user?.clients
    }

    if( wn && user?.selectedClient) {
      console.log('updating user on app', params)
      wn.contentWindow.postMessage(params, '*')
    }
  }

  const setListener = async () => {
    window.addEventListener("message", receiveMessage);
    console.log("SETTTUUPPP")
  }

  const receiveMessage = (event: any) => {
    const wn: any = document.getElementById('55iframe');

    if( wn && event.data === '55pbxHasLoggedUser') {
      console.log(user)
      wn.contentWindow.postMessage(user, '*')
    }

    if( wn && event.data === '55pbxHasFinishedLoading') {
      dispatch(stopLoading())
    }

    setTimeout(() => window.removeEventListener("message", receiveMessage), 19999)
  }

  const renderContent = () => {

    switch (sliderContent) {
      case '/faq':
        return <FAQ />

      case '/profile':
        return <Profile />

      case '/passChange':
        return <PassChange />
    
      default:
        return <></>
    }
  }

  return <Row width="100vw" maxWidth="100%" height="100vh" maxHeight="100vh" overflow="hidden">
    <Nav />
    <Column width="100%" maxWidth="100%"  height="100vh" maxHeight="100%">
      <Header />

      <Row opacity={isLoading ? '0' : '1'} width="100%" height="100%" background="transparent">
        <iframe id="55iframe" title="55PBX_hub_iframe" style={{width: "100%", height: "100%"}} src={frameAddress}/>
        <Column position="absolute" background="white" width={slider ? '100%' : '0'} maxWidth={slider ? '100%' : '0'}  height="100%" maxHeight="calc(100% - 67px)">
          {renderContent()}
        </Column>
      </Row>

    </Column>
  </Row>;
}

export default Main;