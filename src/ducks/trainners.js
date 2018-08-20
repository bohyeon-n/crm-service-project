const FETCH_TRAINNER_REQUEST = "service/trainners/FETCH_TRAINNER_REQUEST";
const FETCH_TRAINNER_SUCCESS = "service/trainners/FETCH_TRAINNER_SUCCESS";
const FETCH_TRAINNER_FAILURE = "service/trainners/FETCH_TRAINNER_FAILURE";
// mockup
let trainners = [
  {
    id: 1,
    name: "trainner1"
  },
  {
    id: 2,
    name: "trainner2"
  },
  {
    id: 3,
    name: "trainner3"
  }
];

export function fetchTrainnerRequest() {
  return {
    type: FETCH_TRAINNER_REQUEST
  };
}

export function fetchTrainnerSuccess(trainners) {
  return {
    type: FETCH_TRAINNER_SUCCESS,
    trainners
  };
}

export function fetchTrainnerFailure() {
  return {
    type: FETCH_TRAINNER_FAILURE
  };
}

export function fetchTrainners() {
  return function(dispatch) {
    dispatch(fetchTrainnerRequest());
    const res = trainners;
    dispatch(fetchTrainnerSuccess(res));
  };
}

const initialState = {
  items: [],
  loading: false,
  errorMsg: null
};

export default function trainners(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAINNER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRAINNER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.trainners
      };
    case FETCH_TRAINNER_FAILURE:
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
