import React from "react";

const Group = ({ name, active, ...rest }) => {
  return (
    <div
      className={` ${
        active && "ring-2 ring-blue-500"
      } bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow cursor-pointer`}
      {...rest}
    >
      <div
        className={`flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full `}
      >
        <img
          src={`https://ui-avatars.com/api/?name=${name}`}
          className="w-7 h-7 mr-2 rounded-full"
        />
        {name}
      </div>
      <div className="flex items-center w-full">
        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
          Total Expenses
        </div>
        <div className="ml-auto text-xs text-gray-500">$1,902.00</div>
      </div>
    </div>
  );
};

export default Group;
