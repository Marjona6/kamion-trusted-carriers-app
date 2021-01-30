import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import LoginContainer from '../../atoms/containers/LoginContainer'
import TextInput from '../../atoms/inputs/TextInput'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'
import TextButton from '../../atoms/buttons/TextButton'
import H2 from '../../atoms/texts/H2'

import { BASE_URL } from '../../../utils/constants'

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`

const LoginForm = ({ setFormToShow }) => {
  const [username, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <FlexDiv>
      <LoginContainer>
        <H2>Log In</H2>
        <TextInput
          type='text'
          placeholderText='Username'
          labelId='username'
          labelText='Username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type='password'
          placeholderText='Password'
          labelId='password'
          labelText='Password'
          required
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <ButtonsContainer>
          <PrimaryButton
            buttonText='Log In'
            disabled={username.length < 1 || userPassword.length < 1}
            onClick={() =>
              axios({
                method: 'post',
                url: `${BASE_URL}/api/shipper/login`,
                data: {
                  username: username,
                  password: userPassword
                }
              })
            }
          />
        </ButtonsContainer>
        <ButtonsContainer>
          <TextButton
            buttonText='Register'
            onClick={() => setFormToShow('register')}
          />
        </ButtonsContainer>
      </LoginContainer>
    </FlexDiv>
  )
}

export default LoginForm
