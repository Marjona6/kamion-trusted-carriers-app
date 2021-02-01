import { connect } from 'react-redux'
import { registerUser } from '../../../../store/user/actions'
import RegisterForm from '../../organisms/RegisterForm'

const mapStateToProps = (state) => ({
  didRegisterSuccessfully: state.user.didRegisterSuccessfully
})

const mapDispatchToProps = {
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
