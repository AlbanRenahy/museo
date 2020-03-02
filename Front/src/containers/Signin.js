import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import {
  changeLoginInput,
  changePasswordInput,
  changePassConfirmInput,
  changeUsernameInput,
} from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
  passConfirmInput: state.passConfirmInput,
  usernameInput: state.usernameInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (value) => {
    dispatch(changeLoginInput(value));
  },
  changePassword: (value) => {
    dispatch(changePasswordInput(value));
  },
  changePassConfirm: (value) => {
    dispatch(changePassConfirmInput(value));
  },
  changeUsername: (value) => {
    dispatch(changeUsernameInput(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
