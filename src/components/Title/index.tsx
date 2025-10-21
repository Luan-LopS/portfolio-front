import {Title as TItleStyle } from './styles'

export type Props = {
  children: string;
  fontSize?: number
}

const Title = (props: Props) => (
<TItleStyle fontSize={props.fontSize}>{props.children}</TItleStyle>)

export default Title
