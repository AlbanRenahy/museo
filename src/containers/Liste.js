import { connect } from 'react-redux';

/**
 * Local import
 */
import Liste from 'src/components/LeafletMap/Liste';

// Action Creators
import { getMonumentsListData, toggleView } from 'src/actions/mapActions';

const mapStateToProps = (state) => ({
  monuments: state.map.monuments,
  listData: state.map.listData,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getMonumentsListData: (list) => {
    dispatch(getMonumentsListData(list));
  },
  toggleView: (view) => {
    dispatch(toggleView(view));
  },
  // connectUser: () => {
  //   dispatch(connectUser());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Liste);
