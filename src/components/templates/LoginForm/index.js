import { connect } from 'react-redux'
import { loginUser } from '../../../../store/user/actions'
import LoginForm from '../../organisms/LoginForm'

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(LoginForm)
