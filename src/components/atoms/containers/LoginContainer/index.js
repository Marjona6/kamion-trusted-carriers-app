import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.primary};
  border: 5px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  height: 300px;
  width: 50%;
`

export default LoginContainer
