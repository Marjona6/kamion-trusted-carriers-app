import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import CarrierListing from '../../molecules/CarrierListing'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'
import PageNavigation from '../../molecules/PageNavigation'

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
  searchText,
  meta = {}
}) => {
  const { current_page, last_page } = meta
  const [activePage, setActivePage] = useState(current_page || 1)
  useEffect(() => {
    getCarrierList({ token, page: activePage })
  }, [activePage])

  useEffect(() => {
    getCarrierList({ token, page: activePage })
  }, [showAddCarrierModal, showUpdateCarrierModal, JSON.stringify(carrierList)])

  const getCarrierFullName = (first, last) => `${first} ${last}`
  const filteredCarrierList = !!searchText
    ? carrierList.filter((carrier) =>
        getCarrierFullName(carrier.first_name, carrier.last_name)
          .toUpperCase()
          .includes(searchText.toUpperCase())
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
      <PageNavigation
        activePage={activePage}
        onClick={(e) => setActivePage(parseInt(e.target.textContent), 10)}
        lastPage={last_page}
      />
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
