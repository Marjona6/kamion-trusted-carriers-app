import React, { useEffect } from 'react'

import CarrierListing from '../../molecules/CarrierListing'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const CarrierList = ({ getCarrierList, carrierList, token }) => {
  useEffect(() => {
    getCarrierList({ token })
  })
  return (
    <>
      <CarrierListing />
      <CarrierListing />
      <PrimaryButton
        buttonText='Add a carrier'
        onClick={() => console.log('add a carrier')}
      />
    </>
  )
}

export default CarrierList
