import * as TYPES from "./types";

export const setDocumentDraggedOver = (status) => (dispatch) => {
  dispatch({
    type: TYPES.SET_DOCUMENT_DRAGGED_OVER,
    payload: status,
  });
};

export const setApplicationTouched = () => (dispatch) => {
  dispatch({
    type: TYPES.SET_APP_TOUCHED,
    payload: true,
  });
};
