import React, { useState } from 'react'

import Modal from '../../molecules/Modal'
import TextInput from '../../atoms/inputs/TextInput'
import ImageInput from '../../atoms/inputs/ImageInput'

const AddCarrierModal = ({ addCarrier, setShowAddCarrierModal, token }) => {
  const [carrierFirstName, setCarrierFirstName] = useState('')
  const [carrierLastName, setCarrierLastName] = useState('')
  const [carrierEmail, setCarrierEmail] = useState('')
  const [carrierPhoto, setCarrierPhoto] = useState('')

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setCarrierPhoto(img)
    }
  }

  const createFormData = (values) => {
    let formData = new FormData()

    const { first_name, last_name, email, photo } = values

    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('photo', photo)

    return formData
  }

  const children = (
    <>
      <TextInput
        labelText='Carrier First Name'
        labelId='carrier-first-name'
        placeholderText='Carrier First Name'
        value={carrierFirstName}
        onChange={(e) => setCarrierFirstName(e.target.value)}
        required
      />
      <TextInput
        labelText='Carrier Last Name'
        labelId='carrier-last-name'
        placeholderText='Carrier Last Name'
        value={carrierLastName}
        onChange={(e) => setCarrierLastName(e.target.value)}
        required
      />
      <TextInput
        type='email'
        labelText='Carrier Email'
        labelId='carrier-email'
        placeholderText='Carrier Email'
        value={carrierEmail}
        onChange={(e) => setCarrierEmail(e.target.value)}
        required
      />
      <ImageInput
        type='file'
        labelText='Carrier Photo'
        labelId='carrier-photo'
        placeholderText='Carrier Photo'
        onChange={(e) => onImageChange(e)}
        required
      />
    </>
  )
  return (
    <Modal
      modalText={'Add a New Trusted Carrier'}
      primaryButtonText='Add Carrier'
      secondaryButtonText='Cancel'
      primaryButtonOnClick={() => {
        addCarrier({
          formData: createFormData({
            first_name: carrierFirstName,
            last_name: carrierLastName,
            email: carrierEmail,
            photo: carrierPhoto
          }),
          token
        })
        setShowAddCarrierModal(false)
      }}
      secondaryButtonOnClick={() => setShowAddCarrierModal(false)}
      token={token}
      children={children}
    />
  )
}

export default AddCarrierModal
