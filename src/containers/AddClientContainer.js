import { connect } from "react-redux";
import { addClient } from "../ducks/clients";
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(AddClient);
