import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';

// Action Creators
import { updateUserformField, sendMessage } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  message: state.user.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
