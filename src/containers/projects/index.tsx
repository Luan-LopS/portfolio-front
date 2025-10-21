import Title from "../../components/Title"
import Project from '../../components/Project'
import List from './styles'

const Projects = () =>(
  <section>
    <Title fontSize={16}>Projects</Title>
    <List>
      {[...Array(4)].map((_, i)=>(
        <li key={i}>
        <Project></Project>
      </li>
      ))}

    </List>
  </section>
)

export default Projects
