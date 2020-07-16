import { connect } from 'react-redux';

/**
 * Local import
 */
import Recovery from 'src/components/Recovery';

import { updateUserformField, sendRecovery } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  recoveryMessage: state.user.recoveryMessage,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
  sendRecovery: () => {
    dispatch(sendRecovery());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recovery);
