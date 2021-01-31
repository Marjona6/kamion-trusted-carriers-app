import React, { useState } from 'react'

import Header from '../src/components/organisms/Header'
import H2 from '../src/components/atoms/texts/H2'

import LoginForm from '../src/components/templates/LoginForm'
import RegisterForm from '../src/components/templates/RegisterForm'

const LoginOrRegister = () => {
  const [formToShow, setFormToShow] = useState('login')
  return (
    <>
      <Header />
      <H2>Please Log In or Register</H2>
      {formToShow === 'login' ? (
        <LoginForm setFormToShow={setFormToShow} />
      ) : (
        <RegisterForm setFormToShow={setFormToShow} />
      )}
    </>
  )
}

export default LoginOrRegister
