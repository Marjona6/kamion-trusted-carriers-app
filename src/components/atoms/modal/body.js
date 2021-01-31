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
  @media (max-width: 600px) {
    min-height: 100%;
    margin: 0;
    border-radius: 0;
  }
`
export default Body
