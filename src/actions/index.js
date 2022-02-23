// keys for actiontypes
export const ActionTypes = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
};

export function toggleModal() {
  return {
    type: ActionTypes.TOGGLE_MODAL,
    payload: null,
  };
}
