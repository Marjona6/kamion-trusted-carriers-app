import React, { useState } from 'react'
import styled from 'styled-components'

import LoginForm from '../../molecules/LoginForm'
import RegisterForm from '../../molecules/RegisterForm'

const LoginOrRegisterForm = () => {
  const [formToShow, setFormToShow] = useState('login')
  return formToShow === 'login' ? (
    <LoginForm setFormToShow={setFormToShow} />
  ) : (
    <RegisterForm setFormToShow={setFormToShow} />
  )
}

export default LoginOrRegisterForm
