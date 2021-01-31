import { connect } from 'react-redux'
import CarrierList from '../../organisms/CarrierList'
import { getCarrierList } from '../../../../store/carrier/actions'

const mapStateToProps = (state) => ({
  carrierList: state.carrier,
  token: state.user.token
})

const mapDispatchToProps = {
  getCarrierList
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierList)
