import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateTable } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTable: (number, newStatus) => dispatch(updateTable({
    id: number,
    status: newStatus,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
