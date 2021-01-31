import React from 'react'
import styled from 'styled-components'

import H2 from '../../atoms/texts/H2'
import P from '../../atoms/texts/P'
import Container from '../../atoms/containers/ListingContainer'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const CarrierListing = ({
  carrierFirstName,
  carrierLastName,
  carrierEmail,
  carrierPhotoUrl
}) => {
  return (
    <Container>
      <H2>{`${carrierFirstName} ${carrierLastName}`}</H2>
      <P>{carrierEmail}</P>
      <img src={carrierPhotoUrl} />
      <PrimaryButton buttonText='Update carrier data' />
    </Container>
  )
}

export default CarrierListing
