import { connect } from "react-redux";
import { fetchSchedules } from "../ducks/schedules";
import Calendar from "../components/Calendar";

function mapStateToProps(state) {
  return {
    schedules: state.schedules.items,
    loading: state.schedules.loading,
    errorMsg: state.schedules.errorMsg
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchSchedules());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
