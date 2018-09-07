import { connect } from "react-redux";
import { addClient, editClient } from "../ducks/clients";
import { fetchTrainers } from "../ducks/trainers";
import AddClient from "../components/AddClient";

function mapStateToProps(state) {
  return {
    trainers: state.trainers.items
  };
}
function mapDispatchToprops(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchTrainers());
    },
    onAddClient: client => {
      dispatch(addClient(client));
    },
    onEditClient: (id, payload) => {
      dispatch(editClient(id, payload));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(AddClient);
