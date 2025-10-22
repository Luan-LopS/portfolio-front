import Avatar from "../../components/Avatar"
import Paragraph from "../../components/Paragraph"
import Title from "../../components/Title"
import { Description, BottomTema, SidebarContainer } from "./styles"

const Sidebar = () =>(
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Luan Lopes</Title>
      <Paragraph tipo='secundario' fontSize={16}>Luan-LopS</Paragraph>
      <Description tipo='principal' fontSize={12}>Engenheiro FullStack</Description>
      <BottomTema>Trocar tema</BottomTema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
