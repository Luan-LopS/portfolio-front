import Title from '../Title'
import Paragraph from '../Paragraph';
import { Card, LinkButton } from './style'

const Project = () => (
  <Card>
    <Title>Projetos Lista de Tarefas</Title>
    <Paragraph tipo='secundario'>
      Lista de tarefas feita com VueJS
    </Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
