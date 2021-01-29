import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 35px;
  border: 1px solid ${(props) => props.theme.dark};
`

const TextInput = ({
  type = 'text',
  labelText,
  labelId,
  placeholderText,
  required
}) => {
  return (
    <>
      <label htmlFor={labelId}>{labelText}</label>
      <StyledInput
        type={type}
        id={labelId}
        name={labelId}
        placeholder={placeholderText}
        required={required}
      />
    </>
  )
}

export default TextInput
