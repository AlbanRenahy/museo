import { connect } from 'react-redux';

import { closeAllModals } from 'src/actions/mapActions';
/**
 * Local import
 */
import DisplayMonument from 'src/components/LeafletMap/DisplayMonument';

// Action Creators


const mapStateToProps = (state) => ({
  isDisplayMonumentOpen: state.map.isDisplayMonumentOpen,
  monumentDisplayed: state.map.monumentDisplayed,
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayMonument);