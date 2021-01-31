import React from 'react'
import styled from 'styled-components'

import H2 from '../../atoms/texts/H2'
import { Overlay, Body } from '../../atoms/modal'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'
import SecondaryButton from '../../atoms/buttons/SecondaryButton'

const ButtonsContainer = styled.div`
  display: flex;
  align-self: center;
  > button {
    margin: 15px;
  }
`

const Modal = ({
  modalText,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonOnClick,
  secondaryButtonOnClick,
  children
}) => {
  return (
    <Overlay>
      <Body>
        <H2>{modalText}</H2>
        {children}
        <ButtonsContainer>
          {primaryButtonOnClick && (
            <PrimaryButton
              buttonText={primaryButtonText}
              onClick={primaryButtonOnClick}
            />
          )}
          {secondaryButtonOnClick && (
            <SecondaryButton
              buttonText={secondaryButtonText}
              onClick={secondaryButtonOnClick}
            />
          )}
        </ButtonsContainer>
      </Body>
    </Overlay>
  )
}

export default Modal
