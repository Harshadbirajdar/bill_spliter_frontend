import {
  CHANGE_ADD_EXPENSE_STATE,
  CHANGE_ADD_GROUP_STATE,
} from "../action/action.type";

const initalState = {
  addGroup: false,
  addExpense: false,
};

const popupReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_ADD_EXPENSE_STATE:
      return {
        ...state,
        addExpense: action.payload,
      };
    case CHANGE_ADD_GROUP_STATE:
      return {
        ...state,
        addGroup: action.payload,
      };

    default:
      return state;
  }
};

export default popupReducer;
