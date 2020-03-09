import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import { updateUserformField, signin } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  passConfirm: state.user.passConfirm,
  username: state.user.username,
  signinErrors: state.user.signinErrors,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  signin: () => {
    dispatch(signin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
