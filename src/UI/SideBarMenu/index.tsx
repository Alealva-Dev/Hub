import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Column, Row, Button, Img, Text } from '55tec_frontend_lib/dist'

// IMAGES
import dropdown from '../../assets/dropdown.svg'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { openNav, closeNav } from '../../store/reducers/global/actions'

// UTILS
import { getMenuIcon } from '../../utils/index'

export type Props = {
  menu: any;
}

export type SubmenuProps = {
  submenu: any;
  isNavOpen: boolean;
}

const SideBarMenu: React.FC <Props> = ({ menu }) => {

  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state: ApplicationState) => state.globalState)

  const [isAppMenuOpen, setIsAppMenuOpen] = useState<boolean>(false)

  const handleAppButtonClick = () => {
    if (menu.to) {
      dispatch(closeNav())
      const wn: any = document.getElementById('55iframe');
      wn.contentWindow.postMessage({action: "changePage", value: menu.to}, '*')
    } else {
      dispatch(openNav())
      setIsAppMenuOpen(s => !s)
    }
  }

  useEffect(() => {
    handleClose()
  }, [isNavOpen])

  const handleClose = () => {
    if (isNavOpen) return;
    setIsAppMenuOpen(false)
  }

  // JSX COMPONENTS

  const ChildrenBtn: React.FC <SubmenuProps> = ({submenu, isNavOpen}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    useEffect(() => {
      handleClose()
    }, [isNavOpen])

    const handleClose = () => {
      if (isNavOpen) return;
      setIsMenuOpen(false)
    }

    const handleInnerButtonClick = () => {
      if (submenu.to) {
        const wn: any = document.getElementById('55iframe');
        wn.contentWindow.postMessage({action: "changePage", value: submenu.to}, '*')
        dispatch(closeNav())
      } else {
        setIsMenuOpen(s => !s)
      }
    }

    return <Column minHeight="27px" overflow="visible" radius="8px" padding="4px 8px" background={false ? "var(--darkenGreen)" : "transparent"} opacity={isAppMenuOpen ? "1" : "0"} width="100%" margin="6px 0" >
      <Button onClick={handleInnerButtonClick} width="100%" justify="flex-start" margin={submenu.to ? '0' : '0 0 6px'} padding="0" bgColor="transparent" align="center">
        <Text justify="flex-start" talign="left" minWidth="140px" font="normal 14px/19px Nunito" color="var(--white)" margin="0 0 0 44px">{submenu.label}</Text>
        {submenu.to ? "" : <Img src={dropdown} width="11px" custom={isMenuOpen ? 'transform: rotate(180deg);' : ''} margin="auto 0 auto auto" />}
      </Button>

      <Column overflow="visible">
        {isMenuOpen && submenu.children
        ? submenu.children.map((innermenu: {label: string, value: string,to?: string, children?: [any]}, index: number) => {
            return <ChildrenBtn key={index} isNavOpen={isNavOpen} submenu={innermenu} />
          }) 
        : null}
      </Column>
    </Column>
  }

  return <Column minHeight={isAppMenuOpen ? 'auto' : '45px'} height={isAppMenuOpen ? 'auto' : '45px'} overflow="visible" margin="24px 0 0" padding="0 0 12px" width="100%" align="center" justify="flex-start">
      
    <Row title={menu.label} width="100%" minHeight="45px" padding={isNavOpen ? "8px" : "8px 0"}>
      <Button onClick={handleAppButtonClick} width="100%" justify="flex-start" margin="0" padding="0" bgColor="transparent" align="center">
        <Img margin={isNavOpen ? "0 24px 0 0" : "0"} width="20px" minWidth="20px" height="auto" src={getMenuIcon(menu.icon)} />

        {isNavOpen ? 
          <>
          <Text justify="flex-start" talign="left" minWidth="140px" font="bold 16px/21px Nunito" color="var(--white)">{menu.label}</Text>
          {menu.to ? "" : <Img src={dropdown} width="11px" custom={isAppMenuOpen ? 'transform: rotate(180deg);' : ''} margin="auto 0 auto auto" />}
          </>
        : null}
      </Button>
    </Row>
    

    {isAppMenuOpen && menu.children ? menu.children.map((menu: {label: string, value: string,to?: string, children?: [any]}, index: number) => {return <ChildrenBtn key={index} isNavOpen={isNavOpen} submenu={menu} />}) : null}

  </Column>
}

export default SideBarMenu;