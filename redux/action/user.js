import axiosInstance from "../../helper/axiosInstance";
import {
  FIND_USER_FAILED,
  FIND_USER_START,
  FIND_USER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "./action.type";
import { toast } from "react-toastify";
import { pushUniqueValues } from "../../utils";
const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFailed = (err) => ({
  type: LOGIN_FAILED,
  payload: err,
});

export const login = (data) => (dispatch) => {
  dispatch(loginStart());
  axiosInstance
    .post("/signin", data)
    .then((response) => {
      dispatch(loginSuccess(response?.data.user));
    })
    .catch((err) => {
      toast.error(err.response.data?.message);
      dispatch(loginFailed(err.response.data?.message));
    });
};

const findUserStart = () => ({
  type: FIND_USER_START,
});

const findUserSuccess = (user) => ({
  type: FIND_USER_SUCCESS,
  payload: user,
});

const findUserFailed = (err) => ({
  type: FIND_USER_FAILED,
  payload: err,
});

export const findUser = (email, setEmail, user, setUser) => (dispatch) => {
  dispatch(findUserStart());
  axiosInstance
    .get(`/user?email=${email}`)
    .then((response) => {
      dispatch(findUserSuccess(response.data));

      setUser(pushUniqueValues(user, response.data.user));
      setEmail("");
    })
    .catch((err) => {
      toast.error(err.response?.data?.message);
      dispatch(findUserFailed(err.response.data?.message));
    });
};
