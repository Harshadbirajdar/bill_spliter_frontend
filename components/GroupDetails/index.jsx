import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAddExpenseState } from "../../redux/action/popup";
import Button from "../ui/Button";
import Expenses from "./Expenses";
import Members from "./Members";
import Settle from "./Settle";

const GroupDetails = () => {
  const Groups = useSelector((state) => state.group.details);
  const dispatch = useDispatch();
  const { name, desc, member } = Groups.data;
  const [activeTab, setActiveTab] = useState("expense");

  const handleChange = (type) => {
    setActiveTab(type);
  };
  return (
    <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
        <div className="flex w-full items-center">
          <div className="flex items-center text-3xl text-gray-900 dark:text-white">
            <img
              src={`https://ui-avatars.com/api/?name=${name}`}
              className="w-12 mr-4 rounded-full"
              alt="profile"
            />

            {name}
          </div>

          <div className="ml-auto sm:flex hidden items-center justify-end">
            <div className="text-right">
              <div className="text-xs text-gray-400 dark:text-gray-400">
                Account balance:
              </div>
              <div className="text-gray-900 text-lg dark:text-white">
                $2,794.00
              </div>
            </div>
            <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <svg
                viewBox="0 0 24 24"
                className="w-4"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <span
              onClick={() => {
                handleChange("expense");
              }}
              className={`${
                activeTab === "expense"
                  ? "border-blue-500 text-blue-500 "
                  : "border-transparent text-gray-500"
              } px-3 border-b-2 cursor-pointer dark:text-white dark:border-white pb-1.5`}
            >
              Expenses
            </span>

            <span
              onClick={() => {
                handleChange("member");
              }}
              className={`${
                activeTab === "member"
                  ? "border-blue-500 text-blue-500 "
                  : "border-transparent text-gray-500"
              } px-3 border-b-2 cursor-pointer dark:text-white dark:border-white pb-1.5`}
            >
              Members
            </span>
            <span
              onClick={() => {
                handleChange("settleUp");
              }}
              className={`${
                activeTab === "settleUp"
                  ? "border-blue-500 text-blue-500 "
                  : "border-transparent text-gray-500"
              } px-3 border-b-2 cursor-pointer dark:text-white dark:border-white pb-1.5`}
            >
              Settle Up
            </span>
          </div>
          <div>
            <Button
              className="flex items-center"
              onClick={() => {
                dispatch(changeAddExpenseState(true));
              }}
            >
              <PlusCircleIcon height={15} className="mr-1" />
              Add Expenses
            </Button>
          </div>
        </div>
      </div>
      {activeTab === "expense" && <Expenses />}
      {activeTab === "member" && <Members />}
      {activeTab === "settleUp" && <Settle />}
    </div>
  );
};

export default GroupDetails;
