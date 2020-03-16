import { connect } from 'react-redux';
/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators


const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
