import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateFormField } from 'src/actions/LoginActions';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);