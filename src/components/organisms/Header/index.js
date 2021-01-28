import React from 'react'
import styled from 'styled-components'
import H1 from '../../atoms/texts/H1'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.light};
`

const Header = () => {
  return (
    <HeaderDiv>
      <H1>Kamion Trusted Carriers App</H1>
      <PrimaryButton buttonText='Log in or register' />
    </HeaderDiv>
  )
}

export default Header
