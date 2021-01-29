import React from 'react'

import Header from '../src/components/organisms/Header'
import H2 from '../src/components/atoms/texts/H2'

import LoginOrRegisterForm from '../src/components/organisms/LoginOrRegisterForm'

const LoginOrRegister = () => {
  return (
    <>
      <Header />
      <H2>Please Log In or Register</H2>
      <LoginOrRegisterForm />
    </>
  )
}

export default LoginOrRegister
