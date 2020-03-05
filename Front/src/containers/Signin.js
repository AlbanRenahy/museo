import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import { updateFormField, signin } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  passConfirm: state.passConfirm,
  username: state.username,
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
