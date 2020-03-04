import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';

// Action Creators
import { updateFormField, sendMessage } from '../actions/LoginActions';

const mapStateToProps = (state) => ({
  emailInput: state.emailInput,
  messageInput: state.messageInput,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
