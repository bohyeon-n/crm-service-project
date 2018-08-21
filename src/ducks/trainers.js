const FETCH_trainer_REQUEST = "service/trainers/FETCH_trainer_REQUEST";
const FETCH_trainer_SUCCESS = "service/trainers/FETCH_trainer_SUCCESS";
const FETCH_trainer_FAILURE = "service/trainers/FETCH_trainer_FAILURE";
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

export function fetchtrainerRequest() {
  return {
    type: FETCH_trainer_REQUEST
  };
}

export function fetchtrainerSuccess(trainers) {
  return {
    type: FETCH_trainer_SUCCESS,
    trainers
  };
}

export function fetchtrainerFailure() {
  return {
    type: FETCH_trainer_FAILURE
  };
}

export function fetchtrainers() {
  return function(dispatch) {
    dispatch(fetchtrainerRequest());
    const res = trainers;
    dispatch(fetchtrainerSuccess(res));
  };
}

const initialState = {
  items: [],
  loading: false,
  errorMsg: null
};

export default function trainers(state = initialState, action) {
  switch (action.type) {
    case FETCH_trainer_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_trainer_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.trainers
      };
    case FETCH_trainer_FAILURE:
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
