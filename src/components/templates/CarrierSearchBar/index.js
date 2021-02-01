import { connect } from 'react-redux'
import { registerUser } from '../../../../store/user/actions'
import CarrierSearchBar from '../../organisms/CarrierSearchBar'

const mapStateToProps = (state) => ({
  carrierList: state.carrier.carrierList
})

const mapDispatchToProps = {
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierSearchBar)
