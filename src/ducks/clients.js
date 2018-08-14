const FETCH_CLIENTS_REQUEST = "service/clients/FETCH_CLIENTS_REQUEST";
const FETCH_CLIENTS_SUCCESS = "service/clients/FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "service/clients/FETCH_CLIENTS_FAILURE";
// mockup
clients = [
  {
    id: 1,
    name: "bohyeon1",
    mobile: "01055992807",
    active: true
  },
  {
    id: 2,
    name: "bohyeon2",
    mobile: "01055992807",
    active: false
  },
  {
    id: 3,
    name: "bohyeon3",
    mobile: "01055992807",
    active: true
  }
];

export function fetchClientsRequest() {
  return {
    type: FETCH_CLIENTS_REQUEST
  };
}

export function fetchClientsSuccess(clients) {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    clients
  };
}
export function fetchClientsFailure(errorMsg) {
  return {
    type: FETCH_CLIENTS_FAILURE,
    errorMsg
  };
}

export function fetchClients() {
  return function(dispatch) {
    // 통신 보내기
    const res = clients;
    dispatch(fetchClientsSuccess(res));
  };
}

const initialState = {
  items: [
    {
      id: 2,
      name: "bohyeon0",
      mobile: "01033444"
    }
  ],
  loading: false,
  errorMsg: null
};

export default function clients(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.clients
      };
    default:
      return state;
  }
}
