import styled from 'styled-components'

const SecondaryButton = styled.button`
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.light};
  border: 5px solid ${(props) => props.theme.dark};
  border-radius: 5px;
`

export default SecondaryButton
