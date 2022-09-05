import { LOGIN_START } from "../action/action.type";

const initalState = {
  loading: false,
  user: {},
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_START:

    default:
      return state;
  }
};

export default userReducer;
