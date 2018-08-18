const FETCH_CLIENTS_REQUEST = "service/clients/FETCH_CLIENTS_REQUEST";
const FETCH_CLIENTS_SUCCESS = "service/clients/FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "service/clients/FETCH_CLIENTS_FAILURE";
const ADD_CLIENTS_REQUEST = "service/clients/ADD_CLIENTS_REQUEST";
const ADD_CLIENTS_SUCCESS = "service/clients/ADD_CLIENTS_SUCCESS";
const ADD_CLIENTS_FAILURE = "service/clients/ADD_CLIENTS_FAILURE";
// mockup
let count = 2;
clients = [
  {
    id: 1,
    name: "bohyeon1",
    mobile: "01055992807",
    status: "active"
  },
  {
    id: 2,
    name: "sewoon123",
    mobile: "01055992807",
    status: "former"
  }
];
// fetchClients
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
// add clinets
export function addClientRequest() {
  return {
    type: FETCH_CLIENTS_REQUEST
  };
}
export function addClientSuccess() {
  return {
    type: ADD_CLIENTS_SUCCESS
  };
}
export function addClientFailure(errorMsg) {
  return {
    type: ADD_CLIENTS_FAILURE,
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
export function addClient(client) {
  // request
  return function(dispatch) {
    dispatch(addClientRequest());
    clients = [...clients, client];
    dispatch(addClientSuccess());
    dispatch(fetchClients());
  };
}
const initialState = {
  items: [],
  loading: false,
  errorMsg: null
};

export default function clients(state = initialState, action) {
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
    case ADD_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_CLIENTS_SUCCESS:
      return {
        loading: false,
        ...state
      };
    case ADD_CLIENTS_FAILURE:
      return {
        loading: false,
        ...state,
        errorMsg: action.errorMsg
      };
    default:
      return state;
  }
}
