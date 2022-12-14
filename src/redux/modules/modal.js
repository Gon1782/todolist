const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (payload) => {
  return {
    type: SHOW_MODAL,
    payload,
  };
};

export const hideModal = (payload) => {
  return {
    type: HIDE_MODAL,
    payload,
  };
};

const initialState = {
  show: false,
  modalId: 0,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        modalId: action.payload,
      };
    case HIDE_MODAL:
      return {
        show: false,
        modalId: 0,
      };
    default:
      return state;
  }
};

export default modal;
