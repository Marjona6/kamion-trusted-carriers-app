import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.primary};
  border: 5px solid ${(props) => props.theme.secondary};
  border-radius: 30px;
  padding: 10px;
  font-size: 16px;
  min-height: 300px;
  width: 50%;
  min-width: 300px;
`

export default LoginContainer
