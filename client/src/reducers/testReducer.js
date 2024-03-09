// just a test reducer: !!

import * as TYPES from "actions/types";

// Aktionsgeneratoren
export const increment = () => ({
  type: TYPES.INCREMENT,
});

export const decrement = () => ({
  type: TYPES.DECREMENT,
});

// reducer.js
// Anfangszustand definieren
const initialState = {
  count: 0,
};

// Reducer Funktion
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
