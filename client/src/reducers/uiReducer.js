import * as TYPES from "actions/types";

const initialState = {
  documnetDraggedOver: false,
  appTouched: false,
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_DOCUMENT_DRAGGED_OVER:
      return {
        ...state,
        documnetDraggedOver: action.payload,
      };
    case TYPES.SET_APP_TOUCHED:
      return {
        ...state,
        appTouched: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
