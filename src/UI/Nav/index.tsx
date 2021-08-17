import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Column, Row, Button, Img, BurguerEffect, Text } from '55tec_frontend_lib/dist'

// IMAGES
import dropdown from '../../assets/dropdown.svg'
import menuIcon from '../../assets/menuIcon.svg'
import openLocker from '../../assets/openLocker.png'

// TYPES
import { ApplicationState } from '../../store'
import { Client } from '../../store/reducers/auth/types'

// ACTIONS
import { requestChangeApp, requestChangeClient } from '../../store/reducers/auth/actions'
import { openNav, closeNav } from '../../store/reducers/global/actions'

// CONSTANTS
import appMenu from '../../constants/appsMenu'
import adminMenu from '../../constants/adminMenu'
import reportMenu from '../../constants/reportMenu'
import realtimeMenu from '../../constants/realtimeMenu'
import wallboardMenu from '../../constants/wallboardMenu'

// UI
import SideBarMenu from '../SideBarMenu'
import MFAModal from '../MFAModal'

// UTILS
import { getAppName, getAppIcon, formatCPF } from '../../utils'

const Nav: React.FC = () => {

  const dispatch = useDispatch()

  const [isAppMenuOpen, setIsAppMenuOpen] = useState<boolean>(false)
  const [isClientMenuOpen, setIsClientMenuOpen] = useState<boolean>(false)
  const [isMFAModalOpen, setIsMFAModalOpen] = useState<boolean>(false)

  const { application, user } = useSelector((state: ApplicationState) => state.authState)
  const { isNavOpen } = useSelector((state: ApplicationState) => state.globalState)

  useEffect(() => {
    getAppMenu(application)
  }, [application])

  // DATA
  const getAppMenu = (app: string) => {
    switch (app) {
      case "admin":
        return adminMenu

      case "report":
        return reportMenu

      case "realtime":
        return realtimeMenu

      case "wallboard":
        return wallboardMenu
    
      default:
        return adminMenu
    }
  }

  // HANDLERS
  const handleMainButtonClick = () => {
    isNavOpen ? dispatch(closeNav()) : dispatch(openNav())
    setIsAppMenuOpen(false)
    setIsClientMenuOpen(false)
  }

  const handleAppButtonClick = () => {
    dispatch(openNav())
    setIsAppMenuOpen(s => !s)
  }

  const handleClientButtonClick = () => {
    dispatch(openNav())
    setIsClientMenuOpen(s => !s)
  }

  const handleChangeApp = (app: string) => {
    if(!user) return

    dispatch(requestChangeApp(user, app))
  }

  const handleChangeClient = (client: Client) => {
    if(!user) return

    dispatch(requestChangeClient(user, client))
  }

  return <Column mobile={`position: absolute;min-width: ${isNavOpen ? '100vw' : '53px'};z-index: 2`} padding="26px 16px" background="transparent linear-gradient(360deg, #448757 0%, #22442C 100%) 0% 0% no-repeat padding-box" minWidth={isNavOpen ? '276px' : '53px'} width={isNavOpen ? '276px' : '53px'} minHeight="100vh" height="100%" maxHeight="100vh" overflow="scroll">
    <Button onClick={handleMainButtonClick} bgColor="transparent" align="flex-start" justify="center" height="12px" minHeight="12px" padding={isNavOpen ? '8px 0' : '0 0'} margin={isNavOpen ? '0 0 0 8px' : '0 0'}>
      <BurguerEffect margin={isAppMenuOpen ? '0 0 0 8px' : '0px'} isOpen={isNavOpen}/>
    </Button>
    
    {user?.twofa ? <Row margin="16px 0 -10px" width="100%" align="flex-start" minHeight="45px" padding={isNavOpen ? "8px" : "8px 0"}>
      <Button title="Você está sem autenticação MFA!" align="center" onClick={() => isNavOpen ? setIsMFAModalOpen(true) : handleClientButtonClick()} width="auto" height="auto" radius="100%" justify="center" margin="0" padding="0" bgColor="transparent">
        <Img src={openLocker} width="22px" height="auto" margin="0 24px 0 0" />
        {isNavOpen ? 
        <Text justify="flex-start" talign="left" minWidth="174px" font="bold 14px/21px Nunito" color="var(--red)">SEM AUTENTICAÇÃO MFA</Text>
        : null}
      </Button>
    </Row> : null}

    {/* CHANGE CLIENT MENU */}
    {isAppMenuOpen ? null : <Column title={user?.selectedClient.name} height={isClientMenuOpen ? '383px' : '45px'} minHeight="45px" overflow="hidden" margin="24px 0 0" padding="0 0 12px" width="100%" align="center" justify="flex-start">
      
      <Row width="100%" align="flex-start" minHeight="45px" padding={isNavOpen ? "8px" : "8px 0"}>
        <Button align="flex-start" onClick={handleClientButtonClick} width="100%" justify="flex-start" margin="0" padding="0" bgColor="transparent">
          <Text radius="100%" bgColor="var(--white)" margin="0 24px 0 0" color="var(--green)" padding="2px 0 0" minWidth="20px" minHeight="20px" font="bold 14px/14px Nunito">{user?.selectedClient.name[0].toUpperCase()}</Text>

          {isNavOpen ? 
            <>
            <Text justify="flex-start" talign="left" minWidth="168px" font="bold 16px/21px Nunito" color="var(--white)">{isClientMenuOpen ? "Clientes" : user?.selectedClient.name}</Text>
            <Img src={dropdown} width="11px" custom={isClientMenuOpen ? 'transform: rotate(180deg);' : ''} margin="auto 0 auto auto" />
            </>
          : null}
        </Button>
      </Row>
      

      {user?.clients.map((client, index) => <Row title={client.name} key={index} radius="8px" padding="4px 8px" background={client._id === user.selectedClient._id ? "var(--darkenGreen)" : "transparent"} opacity={isClientMenuOpen ? "1" : "0"} width="100%" margin="12px 0" >
        <Button title={client.name} onClick={() => handleChangeClient(client)} width="100%" justify="flex-start" margin="0" padding="0" bgColor="transparent" align="center">
          {isNavOpen ? 
            <Column>
              <Text justify="flex-start" talign="left" minWidth="140px" font="bold 16px/21px Nunito" color="var(--white)">{client.name}</Text>
              <Text justify="flex-start" talign="left" minWidth="140px" font="normal 10px/14px Nunito" color="var(--white)">{formatCPF(client.document, true)}</Text>
            </Column>
          : null}
        </Button>
      </Row>)}

    </Column>}

    {/* CHANGE APP MENU */}
    {isClientMenuOpen ? null : <Column title={getAppName(application)} height={isAppMenuOpen ? '383px' : '45px'} minHeight="45px" overflow="hidden" margin="24px 0 0" padding="0 0 12px" borderBottom="1px solid var(--white)" width="100%" align="center" justify="flex-start">
      
      <Row width="100%" minHeight="45px" padding={isNavOpen ? "8px" : "8px 0"}>
        <Button onClick={handleAppButtonClick} width="100%" justify="flex-start" margin="0" padding="0" bgColor="transparent" align="center">
          <Img margin="0 24px 0 0" width="20px" height="auto" src={menuIcon} />

          {isNavOpen ? 
            <>
            <Text justify="flex-start" talign="left" minWidth="140px" font="bold 16px/21px Nunito" color="var(--white)">{isAppMenuOpen ? "Sistemas 55PBX" : getAppName(application)}</Text>
            <Img src={dropdown} width="11px" custom={isAppMenuOpen ? 'transform: rotate(180deg);' : ''} margin="auto 0 auto auto" />
            </>
          : null}
        </Button>
      </Row>
      

      {appMenu.map((menu: {label: string, value: string, text: string}, index) => <Row title={menu.label} key={index} radius="8px" padding="4px 8px" background={application === menu.value ? "var(--darkenGreen)" : "transparent"} opacity={isAppMenuOpen ? "1" : "0"} width="100%" margin="12px 0" >
        <Button title={menu.label} onClick={() => handleChangeApp(menu.value)} width="100%" justify="flex-start" margin="0" padding="0" bgColor="transparent" align="center">
          <Img margin="0 24px 0 0" width="20px" height="auto" src={getAppIcon(menu.value)} />

          {isNavOpen ? 
            <Column>
              <Text justify="flex-start" talign="left" minWidth="140px" font="bold 16px/21px Nunito" color="var(--white)">{menu.label}</Text>
              <Text justify="flex-start" talign="left" minWidth="140px" font="normal 10px/14px Nunito" color="var(--white)">{menu.text}</Text>
            </Column>
          : null}
        </Button>
      </Row>)}

    </Column>}
    
    {/* SELECTED APP MENU */}
    {isAppMenuOpen || isClientMenuOpen ? '' : 
      getAppMenu(application).map((menu: any, index: any) => <SideBarMenu key={index} menu={menu} />)
    }

    <MFAModal isOpen={isMFAModalOpen} setIsOpen={setIsMFAModalOpen} />

  </Column>;
}

export default Nav;