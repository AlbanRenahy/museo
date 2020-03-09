import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';

// Action Creators
import {
  updateUserformField,
  updateUser,
  OpenConfirmDeleteUser,
  CloseConfirmDeleteUser,
} from '../actions/userActions';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
  displayConfirmDeleteUser: state.user.displayConfirmDeleteUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
  OpenConfirmDeleteUser: () => {
    dispatch(OpenConfirmDeleteUser());
  },
  CloseConfirmDeleteUser: () => {
    dispatch(CloseConfirmDeleteUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
