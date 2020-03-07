import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateMapformField, autoComplete, closeAllModals, centerByAddress, findAddressSearch } from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  searchInput: state.map.searchInput,
  autoCompleteResults: state.map.autoCompleteResults,
  isAutocompleteOpen: state.map.isAutocompleteOpen,
});

const mapDispatchToProps = (dispatch) => ({
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  autoComplete: (value) => {
    dispatch(autoComplete(value));
  },
  centerByAddress: (position) => {
    dispatch(centerByAddress(position));
  },
  findAddressSearch: (address) => {
    dispatch(findAddressSearch(address));
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
