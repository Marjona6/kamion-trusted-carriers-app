import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => (props.active ? props.theme.light : props.theme.dark)};
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) =>
    props.active ? props.theme.dark : props.theme.light};
  border: none;
`

const TinyButton = ({ buttonText, disabled, onClick, active }) => {
  return (
    <Button type='button' disabled={disabled} onClick={onClick} active={active}>
      {buttonText}
    </Button>
  )
}

export default TinyButton
