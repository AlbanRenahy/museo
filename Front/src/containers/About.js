import { connect } from 'react-redux';

import About from 'src/components/About';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
