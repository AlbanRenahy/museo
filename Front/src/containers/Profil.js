import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';

// Action Creators
import { updateFormField, updateUser } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
