import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import Header from '../src/components/templates/Header'
import H2 from '../src/components/atoms/texts/H2'

import CarrierList from '../src/components/templates/CarrierList'
import AddCarrierModal from '../src/components/templates/AddCarrierModal'
import UpdateCarrierModal from '../src/components/templates/UpdateCarrierModal'

const List = () => {
  const isUserLoggedIn = useSelector((state) => !!get(state, 'user.token'))
  if (!isUserLoggedIn)
    return (
      <>
        <Header />
        <H2>Please log in to see this page!</H2>
      </>
    )

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
