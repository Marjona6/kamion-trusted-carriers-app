import React from 'react'

import Header from '../src/components/templates/Header'
import H2 from '../src/components/atoms/texts/H2'

import CarrierList from '../src/components/templates/CarrierList'

const List = () => {
  return (
    <>
      <Header />
      <H2>My Trusted Carriers</H2>
      <CarrierList />
    </>
  )
}

export default List
