import { connect } from 'react-redux';

 import { updateFormField, closeDataForm, submitMonument } from 'src/actions/LoginActions';

 /**
 * Local import
 */
import RenseignementMonuments from '../components/LeafletMap/RenseignementMonuments';


 // Action Creators

 const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
  name: state.name,
  adress: state.adress,
  description: state.description,
});

 const mapDispatchToProps = dispatch => ({
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  submitMonument: () => {
    dispatch(submitMonument());
  },
});

 export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementMonuments);
