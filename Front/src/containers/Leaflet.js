
import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import {
  updateFormField,
  openDataForm,
  closeDataForm,
  closeAllModals,
} from 'src/actions/LoginActions';

const mapStateToProps = (state) => ({
  isDataFormOpen: state.isDataFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
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
