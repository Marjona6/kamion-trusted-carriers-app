import React, { useEffect, useState } from 'react'
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
  showAddCarrierModal,
  showUpdateCarrierModal,
  setShowUpdateCarrierModal,
  token,
  setShowAddCarrierModal,
  searchText
}) => {
  useEffect(() => {
    getCarrierList({ token })
  }, [showAddCarrierModal, showUpdateCarrierModal, JSON.stringify(carrierList)])

  const filteredCarrierList = !!searchText
    ? carrierList.filter(
        (carrier) =>
          carrier.first_name.toUpperCase().includes(searchText.toUpperCase()) ||
          carrier.last_name.toUpperCase().includes(searchText.toUpperCase())
      )
    : carrierList
  return (
    <>
      {filteredCarrierList.map((carrier) => {
        const transformedCarrier = transformCarrier(carrier)
        return (
          <CarrierListing
            key={carrier.id}
            carrierId={carrier.id}
            setShowUpdateCarrierModal={setShowUpdateCarrierModal}
            updateCarrier={updateCarrier}
            {...transformedCarrier}
          />
        )
      })}
      <ButtonContainer>
        <PrimaryButton
          buttonText='Add a carrier'
          onClick={() => setShowAddCarrierModal(true)}
        />
      </ButtonContainer>
    </>
  )
}

export default CarrierList
