import { connect } from "react-redux";
import { fetchTrainers } from "../ducks/trainers";
import { fetchClients } from "../ducks/clients";
import { addSchedule } from "../ducks/schedules";
import AddScheduleForm from "../components/AddScheduleForm";
function mapStateToProps(state) {
  return {
    clients: state.clients.items,
    trainers: state.trainers.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchClients());
      dispatch(fetchTrainers());
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
