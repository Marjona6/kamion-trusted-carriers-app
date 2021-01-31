import React, { useEffect } from 'react'
import styled from 'styled-components'

import CarrierListing from '../../molecules/CarrierListing'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const transformCarrier = ({ first_name, last_name, email, image }) => ({
  carrierFirstName: first_name,
  carrierLastName: last_name,
  carrierEmail: email,
  carrierPhotoUrl: image
})

const CarrierList = ({
  getCarrierList,
  carrierList,
  updateCarrier,
  showModal,
  showAddCarrierModal,
  showUpdateCarrierModal,
  setShowUpdateCarrierModal,
  token,
  setShowModal
}) => {
  useEffect(() => {
    getCarrierList({ token })
  }, [showModal, JSON.stringify(carrierList)])
  return (
    <>
      {carrierList.map((carrier) => {
        const transformedCarrier = transformCarrier(carrier)
        return (
          <CarrierListing
            key={carrier.id}
            setShowUpdateCarrierModal={setShowUpdateCarrierModal}
            updateCarrier={updateCarrier} // TODO don't think I need to pass this here
            {...transformedCarrier}
          />
        )
      })}
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
