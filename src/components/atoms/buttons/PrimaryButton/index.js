import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.dark};
  border: 5px solid ${(props) => props.theme.light};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`

const PrimaryButton = ({ buttonText }) => {
  return <Button type='button'>{buttonText}</Button>
}

export default PrimaryButton
