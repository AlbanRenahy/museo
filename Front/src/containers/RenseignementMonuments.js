import { connect } from 'react-redux';

 import { updateFormField, closeDataForm } from 'src/actions/LoginActions';

 /**
 * Local import
 */
import RenseignementMonuments from '../components/LeafletMap/RenseignementMonuments';


 // Action Creators

 const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
  nameInput: state.nameInput,
  adressInput: state.adressInput,
  descriptionInput: state.descriptionInput,
});

 const mapDispatchToProps = dispatch => ({
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  addMonument: () => {

  },
});

 export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementMonuments);
