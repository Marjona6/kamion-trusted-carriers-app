import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => props.theme.light};
  padding: 10px;
  font-size: 16px;
  background-color: inherit;
  border: none;
`

const TextButton = ({ buttonText, disabled, onClick }) => {
  return (
    <Button type='button' disabled={disabled} onClick={onClick}>
      {buttonText}
    </Button>
  )
}

export default TextButton
