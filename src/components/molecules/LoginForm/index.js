import React from 'react'
import styled from 'styled-components'

import LoginContainer from '../../atoms/containers/LoginContainer'
import TextInput from '../../atoms/inputs/TextInput'

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`

const LoginForm = () => {
  return (
    <FlexDiv>
      <LoginContainer>
        <TextInput
          type='email'
          placeholderText='Email'
          labelId='email'
          labelText='Email'
          required
        />
        <TextInput
          type='password'
          placeholderText='Password'
          labelId='password'
          labelText='Password'
          required
        />
      </LoginContainer>
    </FlexDiv>
  )
}

export default LoginForm
