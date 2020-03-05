import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateUserformField, connectUser } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isConnected: state.user.isConnected,
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
