import { connect } from 'react-redux';

import { updateMapformField, closeDataForm, submitMonument } from 'src/actions/mapActions';

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
});

const mapDispatchToProps = (dispatch) => ({
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  submitMonument: () => {
    dispatch(submitMonument());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementMonuments);