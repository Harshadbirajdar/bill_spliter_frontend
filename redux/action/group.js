import { toast } from "react-toastify";
import axiosInstance from "../../helper/axiosInstance";
import {
  ADD_EXPENSE_FAILED,
  ADD_EXPENSE_START,
  ADD_EXPENSE_SUCCESS,
  ADD_NEW_GROUP_FAILED,
  ADD_NEW_GROUP_START,
  ADD_NEW_GROUP_SUCCESS,
  GET_ALL_GROUP_FAILED,
  GET_ALL_GROUP_START,
  GET_ALL_GROUP_SUCCESS,
  GET_GROUP_DETAILS_FAILED,
  GET_GROUP_DETAILS_START,
  GET_GROUP_DETAILS_SUCCESS,
} from "./action.type";
import { changeAddExpenseState } from "./popup";

const addNewGroupStart = () => ({
  type: ADD_NEW_GROUP_START,
});

const addNewGroupSuccess = (data) => ({
  type: ADD_NEW_GROUP_SUCCESS,
  payload: data,
});

const addNewGroupFailed = (err) => ({
  type: ADD_NEW_GROUP_FAILED,
  payload: err,
});

export const addNewGroup = (data, setOpen) => (dispatch) => {
  dispatch(addNewGroupStart());
  axiosInstance
    .post("/group", data)
    .then((response) => {
      if (response.data?.success) {
        toast.success(response.data.message);
        dispatch(addNewGroupSuccess(response.data));
        setOpen(false);
        dispatch(getAllGroup());
      }
    })
    .catch((err) => {
      toast.error(err.response.data?.message);
      dispatch(addNewGroupFailed(err.response.data?.message));
    });
};

const getAllGroupStart = () => ({
  type: GET_ALL_GROUP_START,
});
const getAllGroupSuccess = (data) => ({
  type: GET_ALL_GROUP_SUCCESS,
  payload: data,
});
const getAllGroupFailed = (err) => ({
  type: GET_ALL_GROUP_FAILED,
  payload: err,
});

export const getAllGroup = () => (dispatch) => {
  dispatch(getAllGroupStart());
  axiosInstance
    .get("/group")
    .then((response) => {
      dispatch(getAllGroupSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(getAllGroupFailed(err.response.data?.message));
      toast.error(err.response.data?.message);
    });
};

const getGroupDetailsStart = () => ({
  type: GET_GROUP_DETAILS_START,
});
const getGroupDetailsSuccess = (data) => ({
  type: GET_GROUP_DETAILS_SUCCESS,
  payload: data,
});

const getGroupDetailsFailed = (err) => ({
  type: GET_GROUP_DETAILS_FAILED,
  payload: err,
});

export const getGroupDetails = (groupId) => (dispatch) => {
  dispatch(getGroupDetailsStart());

  axiosInstance
    .get(`/group/details?id=${groupId}`)
    .then((response) => {
      dispatch(getGroupDetailsSuccess(response.data.group));
    })
    .catch((err) => {
      toast.error(err.response?.data?.message);
      dispatch(getGroupDetailsFailed(err.response.data));
    });
};

const addExpenseStart = () => ({
  type: ADD_EXPENSE_START,
});

const addExpenseSuccess = (data) => ({
  type: ADD_EXPENSE_SUCCESS,
  payload: data,
});

const addExpenseFailed = (err) => ({
  type: ADD_EXPENSE_FAILED,
  payload: err,
});

export const addExpense = (data) => (dispatch) => {
  dispatch(addExpenseStart());
  axiosInstance
    .post("/expense", data)
    .then((response) => {
      dispatch(addExpenseSuccess(response.data));
      toast.success(response.data?.message);
      dispatch(getGroupDetails(data.groupId));
      dispatch(changeAddExpenseState(false));
    })
    .catch((err) => {
      dispatch(addExpenseFailed(err?.response.data?.message));
      toast.error(err?.response.data?.message);
    });
};
