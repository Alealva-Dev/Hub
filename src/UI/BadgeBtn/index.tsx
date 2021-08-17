import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ACTIONS
import { logout } from '../../store/reducers/auth/actions'
import { openSlider, setSliderContent } from '../../store/reducers/global/actions'

// STYLED
import { Column, Img, Text, Button } from '55tec_frontend_lib/dist'

export interface Action {
  type: string, 
  link?: string
}

export interface Menu {
  label: string, 
  to?: string, 
  action?: Action
}

export interface Props {
  icon: string,
  menus: Menu[],
  warnings?: number,
  isOpen: boolean,
  onClick: () => void,
  close: () => void
}


const BadgeBtn: React.FC<Props> = ({icon, menus, warnings, isOpen, onClick, close}) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleRedirect = (to: string) => {
    close()
    dispatch(setSliderContent(to))
    dispatch(openSlider())
  }

  const handleAction = (action: any) => {
    switch (action.type) {
      case 'logout':
        dispatch(logout())
        break;

      case 'newTab':
        window.open(action.link, 'blank')
        break;
    
      default:
        break;
    }
  }

  return <Column padding="6px 0 0" width="32px" height="53px" background={isOpen ? '#EEEEEE' : 'transparent'} radius="5px" align="center" margin="0 4px">
    <Column hover="cursor: pointer" onClick={onClick} width="32px" height="53px" background="transparent" radius="5px" align="center">
      <Img width="21px" height="21px" src={icon} />
    </Column>

    <Column justify="center" align="center" overflow="hidden" position="absolute" margin="38px 194px 0 0" width="282px" height={isOpen ? "149px" : "0"} background="#EEEEEE" radius="5px">
      <Column overflow="auto" padding="10px 0" justify="flex-start" height="136px" width="270px" background="#FFFFFF" radius="5px">
        {menus.map((menu, index) => {
          return <Button background="transparent" width="100%" height="auto" padding="8px 16px" justify="flex-start" hover="cursor: pointer;background: #EEEEEE;" font="bold 13px/18px Nunito" color="#323232" key={index} onClick={() => menu.to ? handleRedirect(menu.to) : handleAction(menu.action)}>{menu.label}</Button>
        })}
      </Column>
    </Column>

    {warnings ? <Column onClick={onClick} hover="cursor: pointer" position="absolute" margin="-5px 0px 0 15px" justify="center" align="center" minWidth="14px" minHeight="14px" radius="100%" background="#EC5B5B">
        <Text font="bold 8px/11px Nunito" color="#FFF" margin="1px 1px 0 0" padding="0">{warnings}</Text>
    </Column> : null}
  </Column>;
}

export default BadgeBtn;