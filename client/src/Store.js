import { createStore } from 'redux';



function myReducer(state = {}, action) {
  if (action.type === 'SET_GAMES') {
    return {
      ...state,
      games: action.games
    };
  }
  if (action.type === 'SET_SCHOOLS') {
    return {
      ...state,
      schools: action.schools
    };
  }

  return state;
}

export default createStore(myReducer);
