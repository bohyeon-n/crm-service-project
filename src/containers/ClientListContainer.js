import { connect } from "react-redux";
import { fetchClients } from "../ducks/clients";

import ClientList from "../components/ClientList";

function mapStateToProps(state) {
  return {
    clients: state.clients.items,
    loading: state.clients.loading,
    errorMsg: state.clients.errorMsg
  };
}
function mapDispatchToprops(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchClients());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ClientList);
