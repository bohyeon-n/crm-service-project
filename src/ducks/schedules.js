import { fetchClientsSuccess } from "./clients";

const FETCH_SCHEDULES_REQUEST = "service/schedules/FETCH_SCHEDULES_REQUEST";
const FETCH_SCHEDULES_SUCCESS = "service/schedules/FETCH_SCHEDULES_SUCCESS";
const FETCH_SCHEDULES_FAILURE = "service/schedules/FETCH_SCHEDULES_FAILURE";

//mockup
const schedulesList = [
  {
    id: 0,
    title: "test",
    allDay: false,
    start: new Date(2018, 7, 10, 16, 0, 0, 0),
    end: new Date(2018, 7, 10, 18, 0, 0, 0),
    desc: "test desc"
  },
  {
    id: 1,
    title: "test2",
    allDay: true,
    start: new Date(2018, 7, 1),
    end: new Date(2018, 7, 2),
    desc: "test desc2"
  },
  {
    id: 1,
    title: "test2",
    allDay: false,
    start: new Date("Sun Aug 19 2018 02:42:13 GMT+0900"),
    end: new Date("Sun Aug 19 2018 02:42:13 GMT+0900"),
    desc: "test desc2"
  }
];

export function fetchSchedulesRequest() {
  return {
    type: FETCH_SCHEDULES_REQUEST
  };
}

export function fetchSchedulesSuccess(schedules) {
  return {
    type: FETCH_SCHEDULES_SUCCESS,
    schedules
  };
}

export function fetchClientsFailure(errorMsg) {
  return {
    type: fetchClientsFailure,
    errorMsg
  };
}

export function fetchSchedules() {
  return function(dispatch) {
    // 통신
    const res = schedulesList;
    dispatch(fetchSchedulesSuccess(res));
  };
}

const initialState = {
  items: [
    {
      id: 0,
      title: "테스트",
      allDay: true,
      start: null,
      end: null,
      desc: ""
    }
  ]
};

export default function schedules(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEDULES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SCHEDULES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.schedules
      };
    case FETCH_SCHEDULES_FAILURE:
      return {
        ...state,
        errorMsg: action.errorMsg,
        loading: false
      };
    default:
      return state;
  }
}
