import { connect } from 'react-redux'
import CarrierList from '../../organisms/CarrierList'
import {
  getCarrierList,
  updateCarrier
} from '../../../../store/carrier/actions'

const mapStateToProps = (state) => ({
  carrierList: state.carrier.carrierList,
  token: state.user.token,
  meta: state.carrier.meta
})

const mapDispatchToProps = {
  getCarrierList,
  updateCarrier
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierList)
