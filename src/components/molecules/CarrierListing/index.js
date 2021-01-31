import React from 'react'
import styled from 'styled-components'

import H2 from '../../atoms/texts/H2'
import Container from '../../atoms/containers/ListingContainer'
import PrimaryButton from '../../atoms/buttons/PrimaryButton'

const CarrierListing = ({}) => {
  return (
    <Container>
      <H2>Test Carrier</H2>
      <PrimaryButton buttonText='Update carrier data' />
    </Container>
  )
}

export default CarrierListing
