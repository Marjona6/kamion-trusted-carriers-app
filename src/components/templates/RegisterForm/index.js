import { connect } from 'react-redux'
import { registerUser } from '../../../../store/user/actions'
import RegisterForm from '../../organisms/RegisterForm'

const mapDispatchToProps = {
  registerUser
}

export default connect(null, mapDispatchToProps)(RegisterForm)
