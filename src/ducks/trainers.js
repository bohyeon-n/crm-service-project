const FETCH_TRAINER_REQUEST = "service/Trainers/FETCH_TRAINER_REQUEST";
const FETCH_TRAINER_SUCCESS = "service/Trainers/FETCH_TRAINER_SUCCESS";
const FETCH_TRAINER_FAILURE = "service/Trainers/FETCH_TRAINER_FAILURE";
// mockup
let trainers = [
  {
    id: 1,
    name: "trainer1"
  },
  {
    id: 2,
    name: "trainer2"
  },
  {
    id: 3,
    name: "trainer3"
  }
];

export function fetchTrainerRequest() {
  return {
    type: FETCH_TRAINER_REQUEST
  };
}

export function fetchTrainerSuccess(trainers) {
  return {
    type: FETCH_TRAINER_SUCCESS,
    trainers
  };
}

export function fetchTrainerFailure() {
  return {
    type: FETCH_TRAINER_FAILURE
  };
}

export function fetchTrainers() {
  return function(dispatch) {
    dispatch(fetchTrainerRequest());
    const res = trainers;
    dispatch(fetchTrainerSuccess(res));
  };
}

const initialState = {
  items: [],
  loading: false,
  errorMsg: null
};

export default function trainers(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAINER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRAINER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.trainers
      };
    case FETCH_TRAINER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg
      };
    default:
      return {
        ...state
      };
  }
}
