import { useState } from 'react';

// IMAGES
import greenCaret from '../../assets/greenCaret.svg'

// STYLED
import { Row, Column, Text, Img } from '55tec_frontend_lib/dist'

export type Props = {
  title: string;
  text: string;
}

const FAQItem: React.FC<Props> = ({ title, text }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <Column overflow="hidden" onClick={() => setIsOpen(s => !s)} hover="cursor: pointer" borderBottom="1px solid #707070" width="100%" minWidth="90%" height={isOpen ? 'auto' : '74px'} minHeight='74px' justify="flex-start" align="flex-start">
    <Row padding="0 18px" width="100%" minWidth="100%" height="74px" minHeight="74px" align="center" justify="space-between">
      <Text talign="left" font="bold 16px/21px Nunito" color="#448757" >{title}</Text>
      <Img margin="0 0 0 12px" transform={isOpen ? 'rotate(180deg)' : ''} src={greenCaret} />
    </Row>
    <Text minHeight="auto" width="90%" margin="0 18px 20px" talign="left" font="normal 14px/19px Nunito" color="#323232" >{text}</Text>
  </Column>;
}

export default FAQItem;