import { connect } from "react-redux";
import { fetchTrainners } from "../ducks/trainners";
import { fetchClients } from "../ducks/clients";
import { addSchedule } from "../ducks/schedules";
import AddScheduleForm from "../components/AddScheduleForm";
function mapStateToProps(state) {
  return {
    clients: state.clients.items,
    trainners: state.trainners.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchClients());
      dispatch(fetchTrainners());
    },
    onAddSchedule: schedule => {
      dispatch(addSchedule(schedule));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddScheduleForm);
