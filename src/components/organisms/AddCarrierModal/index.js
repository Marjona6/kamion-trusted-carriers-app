import React from 'react'

import Modal from '../../molecules/Modal'

const AddCarrierModal = ({ addCarrier, setShowModal, token }) => {
  return (
    <Modal
      modalText={'Add a New Trusted Carrier'}
      addCarrier={addCarrier}
      primaryButtonText='Add Carrier'
      secondaryButtonText='Cancel'
      primaryButtonOnClick={() => console.log('add carrier api call')}
      secondaryButtonOnClick={() => setShowModal(false)}
      token={token}
    />
  )
}

export default AddCarrierModal
