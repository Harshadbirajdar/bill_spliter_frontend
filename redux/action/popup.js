import {
  CHANGE_ADD_EXPENSE_STATE,
  CHANGE_ADD_GROUP_STATE,
} from "./action.type";

export const changeAddExpenseState = (state) => ({
  type: CHANGE_ADD_EXPENSE_STATE,
  payload: state,
});

export const changeAddGroupState = (state) => ({
  type: CHANGE_ADD_GROUP_STATE,
  payload: state,
});
