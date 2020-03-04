import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import { updateFormField, signin } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
  passConfirmInput: state.passConfirmInput,
  usernameInput: state.usernameInput,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  signin: () => {
    dispatch(signin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
