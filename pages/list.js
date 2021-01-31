import React, { useState } from 'react'

import Header from '../src/components/templates/Header'
import H2 from '../src/components/atoms/texts/H2'

import CarrierList from '../src/components/templates/CarrierList'
import AddCarrierModal from '../src/components/organisms/AddCarrierModal'

const List = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Header />
      <H2>My Trusted Carriers</H2>
      <CarrierList setShowModal={setShowModal} />
      {showModal && <AddCarrierModal setShowModal={setShowModal} />}
    </>
  )
}

export default List
