import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateFormField, connectUser } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
