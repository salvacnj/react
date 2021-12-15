import { combineReducers } from 'redux';

function todoApp(state = { type: "hola" }, action) {
  // Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
  return state
}

export default combineReducers({
  todoApp
});
