import React, { useState } from 'react';

// IMAGES
import menuIcon from '../../assets/menuIcon.svg'

import helpIcon from '../../assets/helpIcon.svg'
import helpIconBlack from '../../assets/helpIconBlack.svg'

import configIcon from '../../assets/configIcon.svg'
import configIconBlack from '../../assets/configIconBlack.svg'

import notificationIcon from '../../assets/notificationIcon.svg'
import notificationIconBlack from '../../assets/notificationIconBlack.svg'

// COMPONENTS
import BadgeBtn from '../BadgeBtn'

// STYLED
import { Row, Column, Img, Text } from '55tec_frontend_lib/dist';

const Header: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = useState<string>('')
  const [appMenuIsOpen, setAppMenuIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setMenuIsOpen('')
    window.removeEventListener('click', handleClose)
  }

  return <Row mobile={`padding: 0 16px 0 54px;`} zIndex="1" shadow="0px 3px 6px #00000029" padding="0 29px" width="100%" height="67px" background="var(--white)" align="center" justify="flex-end">

    <Row height="auto" onMouseLeave={() => window.addEventListener('click', handleClose)} onMouseOver={() => window.removeEventListener('click', handleClose)} margin='28px 0 0'>
      <BadgeBtn warnings={3} close={() => setMenuIsOpen('')} menus={[{label: 'Menu 1', to: '/menu1'}]} icon={menuIsOpen === 'alert' ? notificationIconBlack : notificationIconBlack} isOpen={menuIsOpen === 'alert'} onClick={() => setMenuIsOpen(s => s === 'alert' ? '' : 'alert')} />
      <BadgeBtn warnings={3} close={() => setMenuIsOpen('')} menus={[{label: 'Dúvidas frequentes', to: '/faq'}, {label: 'Falar com o suporte', action: {type: 'newTab',link: 'https://suporte.55pbx.com/hc/pt-br'}}, {label: 'Enviar feedback', to: '/feedback'}]} icon={menuIsOpen === 'help' ? helpIconBlack : helpIconBlack} isOpen={menuIsOpen === 'help'} onClick={() => setMenuIsOpen(s => s === 'help' ? '' : 'help')} />
      <BadgeBtn warnings={3} close={() => setMenuIsOpen('')} menus={[{label: 'Editar perfil', to: '/profile'}, {label: 'Alterar senha', to: '/passChange'}, {label: 'Configurações gerais', to: '/config'}, {label: 'Sair', action: {type: 'logout'}}]} icon={menuIsOpen === 'settings' ? configIconBlack : configIconBlack} isOpen={menuIsOpen === 'settings'} onClick={() => setMenuIsOpen(s => s === 'settings' ? '' : 'settings')} />
    </Row>

    <Row align="center">
      
      <Column margin="0 10px 0 20px" align="flex-end">
        <Text talign="left" font="bold 12px/16px Nunito" color="var(--darkGray)">Guillermo Benitez</Text>
        <Text justify="flex-start" talign="left" width="100%" font="normal 9px/12px Nunito" color="var(--darkGreen)">Online agora</Text>
      </Column>

      <Img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" margin='0 0 0 0' width="40px" height="40px" radius="100%" />

    </Row>
  </Row>;
}

export default Header;