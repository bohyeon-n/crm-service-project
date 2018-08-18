import { connect } from "react-redux";
import { addClient } from "../ducks/clients";

import AddClient from "../components/AddClient";

function mapStateToProps(state) {
  return {};
}
function mapDispatchToprops(dispatch) {
  return {
    onAddClient: client => {
      dispatch(addClient(client));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(AddClient);
