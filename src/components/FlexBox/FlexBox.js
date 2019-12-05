import styled from 'styled-components'
import { media } from 'theme'

const FlexBox = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  ${props => media.xs.when(props.xs)`
    display: ${props => props.xs.inline ? 'inline-flex' : 'flex'};
    flex-direction: ${props => props.xs.direction || props.direction};
    justify-content: ${props => props.xs.justify || props.justify};
  `}
`

FlexBox.defaultProps = {
  direction: 'row',
  inline: false,
  justify: 'start'
}

export default FlexBox
