import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateMapformField, autoComplete, closeAllModals, centerByAddress, findAddressSearch, toggleMenu, openDataFormButton } from 'src/actions/mapActions';
import { disconnect, updateUserformField, redirectToLogin } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  searchInput: state.map.searchInput,
  autoCompleteResults: state.map.autoCompleteResults,
  isAutocompleteOpen: state.map.isAutocompleteOpen,
  isMenuOpen: state.map.isMenuOpen,
  isConnected: state.user.isConnected,
  redirectToLogin: state.user.redirectToLogin,
});

const mapDispatchToProps = (dispatch) => ({
  updateMapformField: (fieldName, input) => {
    dispatch(updateMapformField(fieldName, input));
  },
  updateUserformField: (fieldName, input) => {
    dispatch(updateUserformField(fieldName, input));
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
  openDataForm: () => {
    dispatch(openDataFormButton());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  disconnect: () => {
    dispatch(disconnect());
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
  redirect: () => {
    dispatch(redirectToLogin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
