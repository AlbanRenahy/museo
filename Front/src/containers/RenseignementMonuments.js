import { connect } from 'react-redux';

import { updateMapformField, closeAllModals, submitMonument, findAddress } from 'src/actions/mapActions';

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
  fileInput: state.map.fileInput,
  fileText: state.map.fileText,
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
  findAddress: () => {
    dispatch(findAddress());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementMonuments);
