import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
      <div className="flex items-center">
        {/* <span className="text-3xl">Bill Spliter</span> */}
      </div>
      {/*  */}
      <div className="ml-auto flex items-center space-x-7">
        {/* <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500">
          Deposit
        </button> */}
        <button className="flex items-center">
          <span className="relative flex-shrink-0">
            <img
              className="w-7 h-7 rounded-full"
              src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt="profile"
            />
          </span>
          <span className="ml-2">James Smith</span>
          <ArrowRightOnRectangleIcon
            className="ml-3 cursor-pointer"
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
