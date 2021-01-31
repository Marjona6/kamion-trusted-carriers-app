import { connect } from 'react-redux'
import AddCarrierModal from '../../organisms/AddCarrierModal'
import { addCarrier } from '../../../../store/carrier/actions'

const mapStateToProps = (state) => ({
  token: state.user.token
})

const mapDispatchToProps = {
  addCarrier
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCarrierModal)
