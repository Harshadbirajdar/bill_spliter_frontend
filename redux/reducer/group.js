import {
  GET_ALL_GROUP_FAILED,
  GET_ALL_GROUP_START,
  GET_ALL_GROUP_SUCCESS,
  GET_GROUP_DETAILS_FAILED,
  GET_GROUP_DETAILS_START,
  GET_GROUP_DETAILS_SUCCESS,
} from "../action/action.type";

const initalState = {
  loading: false,
  list: [],
  details: {
    loading: false,
    data: {},
  },
  error: false,
};

const groupReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_GROUP_START:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload?.groups,
      };

    case GET_ALL_GROUP_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_GROUP_DETAILS_START:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
        },
      };

    case GET_GROUP_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          data: action.payload,
        },
      };

    case GET_GROUP_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
        details: {
          ...state.details,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default groupReducer;
