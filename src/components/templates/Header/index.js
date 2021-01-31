import { connect } from 'react-redux'
import user from '../../../../store/user/reducer'
import Header from '../../organisms/Header'
import { logoutUser } from '../../../../store/user/actions'

const mapStateToProps = (state) => {
  isUserLoggedIn: !!state.user.token
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
