
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
  getMonuments,
  setMonumentDatas,
  closeMenu,
} from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  monuments: state.map.monuments,
  isDataFormOpen: state.map.isDataFormOpen,
  center: state.map.center,
  zoom: state.map.zoom,
  userLocalized: state.map.userLocalized,
  isConnected: state.user.isConnected,
  currentCard: state.map.currentCard,
  loadingWithLoader: state.map.loadingWithLoader,
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
  getMonuments: () => {
    dispatch(getMonuments());
  },
  setMonumentDatas: (current) => {
    dispatch(setMonumentDatas(current));
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
