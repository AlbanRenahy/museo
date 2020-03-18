import { connect } from 'react-redux';

import { updateMapformField, closeAllModals, submitMonument, findAddress, resetFormMonument, submitPicture } from 'src/actions/mapActions';

/**
 * Local import
 */
import RenseignementMonuments from '../components/LeafletMap/RenseignementMonuments';


// Action Creators

const mapStateToProps = (state) => ({
  isDataFormOpen: state.map.isDataFormOpen,
  name: state.map.name,
  address: state.map.address,
  description: state.map.description,
  thematics: state.map.thematics,
  periods: state.map.periods,
  regions: state.map.regions,
  targets: state.map.targets,
  fileInput: state.map.fileInput,
  fileText: state.map.fileText,
  fileSize: state.map.fileSize,
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  submitMonument: () => {
    dispatch(submitMonument());
  },
  submitPicture: () => {
    dispatch(submitPicture());
  },
  findAddress: () => {
    dispatch(findAddress());
  },
  resetFormMonument: () => {
    dispatch(resetFormMonument());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementMonuments);
