import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';

// Action Creators
import {
  updateUserformField,
  updateUser,
  deleteUser,
  OpenConfirmDeleteUser,
  CloseConfirmDeleteUser,
} from '../actions/userActions';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
  token: state.user.token,
  isConnected: state.user.isConnected,
  displayConfirmDeleteUser: state.user.displayConfirmDeleteUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
  deleteUser: () => {
    dispatch(deleteUser());
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
