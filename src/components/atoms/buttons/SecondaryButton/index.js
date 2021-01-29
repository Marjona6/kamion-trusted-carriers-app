import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.light};
  border: 5px solid ${(props) => props.theme.dark};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  min-width: 125px;
`

const SecondaryButton = ({ buttonText, disabled, onClick }) => {
  return (
    <Button type='button' disabled={disabled} onClick={onClick}>
      {buttonText}
    </Button>
  )
}

export default SecondaryButton
