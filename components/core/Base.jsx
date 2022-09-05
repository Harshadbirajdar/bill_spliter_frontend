import React, { Fragment, useEffect, useState } from "react";
import Button from "../ui/Button";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AddGroup from "../popup/AddGroup";
import Group from "../card/Group";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroup, getGroupDetails } from "../../redux/action/group";
import GroupDetails from "../GroupDetails";
import Addexpenses from "../popup/Addexpenses";
import { changeAddGroupState } from "../../redux/action/popup";

const Base = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const Groups = useSelector((state) => state.group);
  const [active, setActive] = useState("");

  useEffect(() => {
    dispatch(getAllGroup());
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      {/* <Sidebar /> */}
      <AddGroup />
      <Addexpenses />
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        <Header />
        <div className="flex-grow flex overflow-x-hidden">
          <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400 tracking-wider">Groups</div>
              <Button
                className="flex items-center"
                onClick={() => {
                  dispatch(changeAddGroupState(true));
                }}
              >
                <PlusCircleIcon height={15} className="mr-1" />
                Add Group
              </Button>
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
                placeholder="Search"
              />
              <svg
                viewBox="0 0 24 24"
                className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="space-y-4 mt-3">
              {Groups.list.map((group) => (
                <Group
                  active={group._id === active}
                  name={group.name}
                  onClick={() => {
                    setActive(group._id);
                    dispatch(getGroupDetails(group._id));
                  }}
                />
              ))}
            </div>
          </div>
          {active ? <GroupDetails /> : <div>tses</div>}
        </div>
      </div>
    </div>
  );
};

export default Base;
