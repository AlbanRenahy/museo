import { connect } from 'react-redux';

/**
 * Local import
 */
import Liste from 'src/components/LeafletMap/Liste';

// Action Creators
import { getMonumentsListData } from 'src/actions/mapActions';

const mapStateToProps = state => ({
  monuments: state.map.monuments,
  listData: state.map.listData,
});

const mapDispatchToProps = dispatch => ({
  getMonumentsListData: (list) => {
    dispatch(getMonumentsListData(list));
  },
  // connectUser: () => {
  //   dispatch(connectUser());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Liste);
