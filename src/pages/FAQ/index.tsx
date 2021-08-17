import { useSelector, useDispatch } from 'react-redux'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { closeSlider } from '../../store/reducers/global/actions'

// COMPONENTS
import FAQItem from '../../UI/FAQItem'

// STYLED
import { Column, Text, Row, Button } from '55tec_frontend_lib/dist'

const FAQ: React.FC = () => {

  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state: ApplicationState) => state.globalState)

  const handleBack = () => {
    dispatch(closeSlider())
  }

  return <Column overflowX="hidden" padding="40px 5%" justify="flex-start" align="flex-start" width="100vw" maxWidth={isNavOpen ? "calc(100% - 276px)" : "calc(100% - 53px)"} maxHeight="100%">
    <Row width="100%" height="auto" justify="space-between">
      <Text font="bold 24px/32px Nunito" color="#323232" margin="0 0 18px">Dúvidas frequentes</Text>
      <Button onClick={handleBack}>
        Voltar
      </Button>
    </Row>
    <FAQItem title="Officia non voluptate magna proident. Labore Lorem laborum ipsum ipsum exercitation. Exercitation irure aute laborum Lorem officia do in mollit sit nostrud culpa velit. Adipisicing nostrud cillum elit irure occaecat reprehenderit magna laborum veniam laboris." text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
    <FAQItem title="Titulo para testar" text="Qui sit in magna duis officia irure amet mollit nulla officia sint eu velit. Eu eiusmod est ipsum laboris voluptate sunt ut anim sit. Ullamco ea id tempor irure in eiusmod nisi excepteur reprehenderit non culpa elit eiusmod sint. Proident ex occaecat id elit dolore officia. Qui est deserunt adipisicing nostrud sint. Ad duis incididunt occaecat ea dolor cupidatat elit." />
  </Column>;
}

export default FAQ;
