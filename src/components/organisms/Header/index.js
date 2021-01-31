import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import H1 from '../../atoms/texts/H1'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.light};
  border-bottom: 5px solid ${(props) => props.theme.dark};
`

const Header = ({ isUserLoggedIn }) => {
  return (
    <HeaderDiv>
      <H1>Kamion Trusted Carriers App</H1>
      {isUserLoggedIn ? (
        <Link href='/'>
          <a styled={{ textDecoration: 'none' }}>
            <PrimaryButton buttonText='Log out' onClick={log} />
          </a>
        </Link>
      ) : (
        <Link href='/login'>
          <a style={{ textDecoration: 'none' }}>
            <PrimaryButton buttonText='Log in or register' />
          </a>
        </Link>
      )}
    </HeaderDiv>
  )
}

export default Header
