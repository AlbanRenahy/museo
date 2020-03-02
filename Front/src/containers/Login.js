import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changeLoginInput, changePasswordInput, connectUser } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (value) => {
    dispatch(changeLoginInput(value));
  },
  changePassword: (value) => {
    dispatch(changePasswordInput(value));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
