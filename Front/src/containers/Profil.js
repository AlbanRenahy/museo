import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';

// Action Creators
import { updateUserformField, updateUser } from '../actions/userActions';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
