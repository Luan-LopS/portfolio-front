import styled from "styled-components";
import {Paragraph} from "../../components/Paragraph/styles";

export const Description = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BottomTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eeee;
  font-size:10px;
  font-weight: bold;
  background-color: #282a35;
  cursor:pointer;
`

export const SidebarContainer = styled.div`
  position:sticky;
  left: 0;
  top:80px;
`
