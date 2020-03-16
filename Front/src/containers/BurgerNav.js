import { connect } from 'react-redux';

import BurgerNav from 'src/components/BurgerNav';

import { disconnect } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    dispatch(disconnect());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerNav);
