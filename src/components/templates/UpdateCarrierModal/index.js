import { connect } from 'react-redux'
import UpdateCarrierModal from '../../organisms/UpdateCarrierModal'
import { updateCarrier } from '../../../../store/carrier/actions'

const mapStateToProps = (state) => ({
  token: state.user.token
  // TODO pass carrierList?
})

const mapDispatchToProps = {
  updateCarrier
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCarrierModal)
