import React, { useState } from 'react'

import Modal from '../../molecules/Modal'
import TextInput from '../../atoms/inputs/TextInput'
import { getCarrierList } from '../../../../store/carrier/actions'

const UpdateCarrierModal = ({
  updateCarrier,
  setShowUpdateCarrierModal,
  token,
  carrierId,
  carrierList,
  getCarrierList
}) => {
  const selectedCarrier = carrierList.find(
    (carrier) => carrier.id === carrierId
  )
  const [carrierFirstName, setCarrierFirstName] = useState(
    selectedCarrier.first_name || ''
  )
  const [carrierLastName, setCarrierLastName] = useState(
    selectedCarrier.last_name || ''
  )
  const [carrierEmail, setCarrierEmail] = useState(selectedCarrier.email || '')

  const createFormData = (values) => {
    console.log({ values })
    let formData = new FormData()

    const { first_name, last_name, email } = values

    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)

    return formData
  }

  const children = (
    <>
      <TextInput
        labelText='Carrier First Name'
        labelId='carrier-first-name'
        placeholderText='Carrier First Name'
        value={carrierFirstName} // TODO make these inputs default to the values in carrierList state
        onChange={(e) => setCarrierFirstName(e.target.value)}
      />
      <TextInput
        labelText='Carrier Last Name'
        labelId='carrier-last-name'
        placeholderText='Carrier Last Name'
        value={carrierLastName}
        onChange={(e) => setCarrierLastName(e.target.value)}
      />
      <TextInput
        type='email'
        labelText='Carrier Email'
        labelId='carrier-email'
        placeholderText='Carrier Email'
        value={carrierEmail}
        onChange={(e) => setCarrierEmail(e.target.value)}
      />
    </>
  )
  return (
    <Modal
      modalText={'Update Carrier'}
      primaryButtonText='Update'
      secondaryButtonText='Cancel'
      primaryButtonOnClick={() => {
        updateCarrier({
          formData: createFormData({
            first_name: carrierFirstName,
            last_name: carrierLastName,
            email: carrierEmail
          }),
          token
        })
        getCarrierList(token)
        setShowUpdateCarrierModal(false)
      }}
      secondaryButtonOnClick={() => setShowUpdateCarrierModal(false)}
      token={token}
      children={children}
    />
  )
}

export default UpdateCarrierModal
