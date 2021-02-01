import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import Header from '../src/components/templates/Header'
import H2 from '../src/components/atoms/texts/H2'

import CarrierList from '../src/components/templates/CarrierList'
import AddCarrierModal from '../src/components/templates/AddCarrierModal'
import UpdateCarrierModal from '../src/components/templates/UpdateCarrierModal'
import CarrierSearchBar from '../src/components/templates/CarrierSearchBar'

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
  const [showUpdateCarrierModal, setShowUpdateCarrierModal] = useState(null) // updated with carrierId to show modal for a specific carrier
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <Header />
      <H2>My Trusted Carriers</H2>
      <CarrierSearchBar searchText={searchText} setSearchText={setSearchText} />
      <CarrierList
        showAddCarrierModal={showAddCarrierModal}
        setShowAddCarrierModal={setShowAddCarrierModal}
        showUpdateCarrierModal={showUpdateCarrierModal}
        setShowUpdateCarrierModal={setShowUpdateCarrierModal}
        searchText={searchText}
      />
      {showAddCarrierModal && (
        <AddCarrierModal setShowAddCarrierModal={setShowAddCarrierModal} />
      )}
      {showUpdateCarrierModal && (
        <UpdateCarrierModal
          setShowUpdateCarrierModal={setShowUpdateCarrierModal}
          carrierId={showUpdateCarrierModal}
        />
      )}
    </>
  )
}

export default List
