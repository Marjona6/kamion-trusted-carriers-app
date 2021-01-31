import styled from 'styled-components'

const Body = styled.div`
  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.dark};
  min-height: 300px;
  min-width: 300px;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: static;
  border: 5px solid ${(props) => props.theme.secondary};
  border-radius: 15px;
`
export default Body
