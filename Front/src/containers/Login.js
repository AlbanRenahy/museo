import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateUserformField, connectUser } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  isConnected: state.user.isConnected,
  loginMessage: state.user.loginMessage,
  loginStatus: state.user.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
