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
  changeFirstNameInput,
  changeLastNameInput,
} from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
  passConfirmInput: state.passConfirmInput,
  firstNameInput: state.firstNameInput,
  lastNameInput: state.lastNameInput,
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
  changeFirstName: (value) => {
    dispatch(changeFirstNameInput(value));
  },
  changeLastName: (value) => {
    dispatch(changeLastNameInput(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
