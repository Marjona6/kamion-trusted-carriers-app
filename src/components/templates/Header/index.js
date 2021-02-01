import { connect } from 'react-redux'
import Header from '../../organisms/Header'
import { logoutUser } from '../../../../store/user/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
