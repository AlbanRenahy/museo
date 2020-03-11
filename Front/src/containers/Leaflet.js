
import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import {
  updateMapformField,
  openDataForm,
  closeAllModals,
  openDisplayMonument,
  getThematics,
  getRegions,
  getPeriods,
  getTargets,
} from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  isDataFormOpen: state.map.isDataFormOpen,
  center: state.map.center,
  zoom: state.map.zoom,
  userLocalized: state.map.userLocalized,
});

const mapDispatchToProps = (dispatch) => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  addMonument: () => {
  },
  openDisplayMonument: () => {
    dispatch(openDisplayMonument());
  },
  getThematics: () => {
    dispatch(getThematics());
  },
  getRegions: () => {
    dispatch(getRegions());
  },
  getPeriods: () => {
    dispatch(getPeriods());
  },
  getTargets: () => {
    dispatch(getTargets());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
