
import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import { updateFormField, openDataForm, closeDataForm } from 'src/actions/LoginActions';

const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
});

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  addMonument: () => {

  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);