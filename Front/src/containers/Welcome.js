import { connect } from 'react-redux';

/**
 * Local import
 */
import Welcome from 'src/components/Welcome';

// Action Creators
import { updateUserformField } from 'src/actions/userActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
