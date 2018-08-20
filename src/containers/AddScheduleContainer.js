import { connect } from "react-redux";

import { fetchClients } from "../ducks/clients";

import AddScheduleForm from "../components/AddScheduleForm";
function mapStateToProps(state) {
  return {
    clients: state.clients.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchClients());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddScheduleForm);
