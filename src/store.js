import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import clients from "./ducks/clients";
import schedules from "./ducks/schedules";
import trainers from "./ducks/trainers";
const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  clients,
  schedules,
  trainers
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.subscribe(() => {
  console.log(store.getState());
});
