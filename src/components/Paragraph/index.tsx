import {Paragraph as ParagraphStyle } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragraph = ({children, tipo='principal',  fontSize}: Props) => (
<ParagraphStyle fontSize={fontSize} tipo={tipo}>{children}</ParagraphStyle>)

export default Paragraph
