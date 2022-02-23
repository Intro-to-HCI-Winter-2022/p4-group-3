import { ActionTypes } from '../actions';

const initialState = {
  modalState: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL:
      return { ...state, modalState: !state.modalState };
    default:
      return state;
  }
};

export default ModalReducer;
