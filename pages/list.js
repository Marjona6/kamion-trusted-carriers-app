import React, { useState } from 'react'

import Header from '../src/components/templates/Header'
import H2 from '../src/components/atoms/texts/H2'

import CarrierList from '../src/components/templates/CarrierList'
import AddCarrierModal from '../src/components/templates/AddCarrierModal'
import UpdateCarrierModal from '../src/components/templates/UpdateCarrierModal'

const List = () => {
  const [showAddCarrierModal, setShowAddCarrierModal] = useState(false)
  const [showUpdateCarrierModal, setShowUpdateCarrierModal] = useState(false)
  return (
    <>
      <Header />
      <H2>My Trusted Carriers</H2>
      <CarrierList
        showAddCarrierModal={showAddCarrierModal}
        setShowAddCarrierModal={setShowAddCarrierModal}
      />
      {showAddCarrierModal && (
        <AddCarrierModal setShowAddCarrierModal={setShowAddCarrierModal} />
      )}
      {showUpdateCarrierModal && (
        <UpdateCarrierModal
          setShowUpdateCarrierModal={setShowUpdateCarrierModal}
        />
      )}
    </>
  )
}

export default List
