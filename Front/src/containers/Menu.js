import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateMapformField } from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  searchInput: state.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
