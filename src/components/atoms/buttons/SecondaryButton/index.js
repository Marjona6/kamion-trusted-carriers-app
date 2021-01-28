import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.light};
  border: 5px solid ${(props) => props.theme.dark};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`

const SecondaryButton = ({ buttonText }) => {
  return <Button type='button'>{buttonText}</Button>
}

export default SecondaryButton
