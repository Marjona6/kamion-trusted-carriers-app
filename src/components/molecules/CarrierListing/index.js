import React from 'react'
import styled from 'styled-components'

import H2 from '../../atoms/texts/H2'
import P from '../../atoms/texts/P'
import Container from '../../atoms/containers/ListingContainer'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'
import StyledImage from '../../atoms/image'

const CarrierListing = ({
  carrierFirstName,
  carrierLastName,
  carrierEmail,
  carrierPhotoUrl,
  setShowUpdateCarrierModal
}) => {
  const carrierFullName = `${carrierFirstName} ${carrierLastName}`
  return (
    <Container>
      <H2>{carrierFullName}</H2>
      <P>{carrierEmail}</P>
      <StyledImage src={carrierPhotoUrl} altText={carrierFullName} />
      <PrimaryButton
        buttonText='Update carrier data'
        onClick={setShowUpdateCarrierModal}
      />
    </Container>
  )
}

export default CarrierListing
