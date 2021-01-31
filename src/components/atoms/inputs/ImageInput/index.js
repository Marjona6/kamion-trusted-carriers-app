import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 35px;
  border: 1px solid ${(props) => props.theme.dark};
`

const ImageInput = ({ labelText, labelId, required, onChange }) => {
  return (
    <>
      <label htmlFor={labelId}>{labelText}</label>
      <StyledInput
        type='file'
        accept='image/*'
        id={labelId}
        name={labelId}
        required={required}
        onChange={onChange}
      />
    </>
  )
}

export default ImageInput
