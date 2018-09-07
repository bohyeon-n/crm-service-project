const FETCH_CLIENTS_REQUEST = "service/clients/FETCH_CLIENTS_REQUEST";
const FETCH_CLIENTS_SUCCESS = "service/clients/FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "service/clients/FETCH_CLIENTS_FAILURE";
const ADD_CLIENTS_REQUEST = "service/clients/ADD_CLIENTS_REQUEST";
const ADD_CLIENTS_SUCCESS = "service/clients/ADD_CLIENTS_SUCCESS";
const ADD_CLIENTS_FAILURE = "service/clients/ADD_CLIENTS_FAILURE";
const EDIT_CLIENTS_REQUEST = "service/clients/EDIT_CLIENTS_REQUEST";
const EDIT_CLIENTS_SUCCESS = "service/clients/EDIT_CLIENTS_SUCCESS";
const EDIT_CLIENTS_FAILURE = "service/clients/EDIT_CLIENTS_FAILURE";

// mockup
let count = 2;
clients = [
  {
    id: 1,
    name: "bohyeon1",
    mobile: "01055992807",
    status: "active",
    trainerId: 1,
    count: 10,
    memos: []
  },
  {
    id: 2,
    name: "jahyeon",
    mobile: "01055992807",
    status: "former",
    trainerId: 2,
    count: 10,
    memos: []
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
//edit clients
export function editClientRequest() {
  return {
    type: EDIT_CLIENTS_REQUEST
  };
}
export function editClientSuccess() {
  return {
    type: EDIT_CLIENTS_SUCCESS
  };
}
export function editClientFailure(errorMsg) {
  return {
    type: editClientFailure,
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
export function editClient(id, payload) {
  console.log(id, payload);
  return function(dispatch) {
    dispatch(addClientRequest());
    // request
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
    case EDIT_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case EDIT_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case EDIT_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg
      };
    default:
      return state;
  }
}
