import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import LoginContainer from '../../atoms/containers/LoginContainer'
import TextInput from '../../atoms/inputs/TextInput'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'
import TextButton from '../../atoms/buttons/TextButton'
import H2 from '../../atoms/texts/H2'
import ErrorText from '../../atoms/texts/ErrorText'

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

const RegisterForm = ({ setFormToShow }) => {
  const [username, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [reenteredPassword, setReenteredPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const valuesArray = [
    username,
    userPassword,
    reenteredPassword,
    firstName,
    lastName,
    phoneNumber,
    userEmail
  ]

  const doPasswordsMatch = (password1, password2) => password1 === password2
  const isValidated = (values) => !values.some((value) => value.length < 1)

  const [isSuccessful, setIsSuccessful] = useState(false)

  return (
    <FlexDiv>
      <LoginContainer>
        <H2>Register</H2>
        <TextInput
          type='text'
          placeholderText='Username'
          labelId='username'
          labelText='Username'
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextInput
          type='password'
          placeholderText='Password'
          labelId='user-password'
          labelText='Password'
          required
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
        <TextInput
          type='password'
          placeholderText='Password'
          labelId='reentered-password'
          labelText='Password'
          required
          onChange={(e) => setReenteredPassword(e.target.value)}
          value={reenteredPassword}
        />
        {!doPasswordsMatch(userPassword, reenteredPassword) && (
          <ErrorText>Passwords do not match</ErrorText>
        )}
        <TextInput
          type='text'
          placeholderText='First Name'
          labelId='firstName'
          labelText='First Name'
          required
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextInput
          type='text'
          placeholderText='Last Name'
          labelId='lastName'
          labelText='Last Name'
          required
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextInput
          type='email'
          placeholderText='Email'
          labelId='email'
          labelText='Email'
          required
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <TextInput
          type='tel'
          placeholderText='Phone Number'
          labelId='phoneNumber'
          labelText='Phone Number'
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <ButtonsContainer>
          <PrimaryButton
            buttonText='Register'
            disabled={setIsSuccessful || !isValidated([valuesArray])}
            onClick={() => {
              console.log('values to post:', {
                username,
                userPassword,
                reenteredPassword,
                firstName,
                lastName,
                userEmail,
                phoneNumber
              })
              axios({
                method: 'post',
                url: `${BASE_URL}/api/shipper/register`,
                data: {
                  username: username,
                  password: userPassword,
                  first_name: firstName,
                  last_name: lastName,
                  phone: phoneNumber,
                  email: userEmail
                }
              })
                .then(setIsSuccessful(true))
                .then(console.log({ valuesArray }))
            }}
          />
        </ButtonsContainer>
        <ButtonsContainer>
          <TextButton
            buttonText='Log In'
            onClick={() => setFormToShow('login')}
          />
        </ButtonsContainer>
      </LoginContainer>
    </FlexDiv>
  )
}

export default RegisterForm
