import React, { useEffect } from 'react'
import styled from 'styled-components'

import CarrierListing from '../../molecules/CarrierListing'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CarrierList = ({ getCarrierList, carrierList, token, setShowModal }) => {
  useEffect(() => {
    getCarrierList({ token })
  })
  return (
    <>
      <CarrierListing />
      <CarrierListing />
      <ButtonContainer>
        <PrimaryButton
          buttonText='Add a carrier'
          onClick={() => setShowModal(true)}
        />
      </ButtonContainer>
    </>
  )
}

export default CarrierList
