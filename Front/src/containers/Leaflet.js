
import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import {
  updateMapformField,
  openDataForm,
  closeDataForm,
  closeAllModals,
} from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  isDataFormOpen: state.map.isDataFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  addMonument: () => {

  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
