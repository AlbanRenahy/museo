import { connect } from 'react-redux';

import { closeAllModals, toggleMenu, closeMenu } from 'src/actions/mapActions';
import { disconnect } from 'src/actions/userActions';
/**
 * Local import
 */
import BurgerMap from 'src/components/BurgerMap';

// Action Creators

// isConnected,
// isMenuOpen,
// disconnect,
// updateFormField,
// closeAllModals,
// toggleMenu,

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  isMenuOpen: state.map.isMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  disconnect: () => {
    dispatch(disconnect());
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerMap);
