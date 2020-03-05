import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateFormField, connectUser } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  isConnected: state.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
