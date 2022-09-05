import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewGroup } from "../../redux/action/group";
import { changeAddGroupState } from "../../redux/action/popup";
import { findUser } from "../../redux/action/user";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AddGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState([]);
  const open = useSelector((state) => state.popup.addGroup);

  const onAddClick = (data) => {
    data.member = user;
    dispatch(addNewGroup(data, setOpen));
  };

  const onSearchClick = () => {
    dispatch(findUser(userInput, setUserInput, user, setUser));
  };

  // remove user from array
  const userClick = (index) => {
    setUser(user.splice(index + 1, 1));
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch(changeAddGroupState(false));
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden rounded-lg bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => dispatch(changeAddGroupState(false))}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="w-full">
                    <Input
                      label="Group Name *"
                      placeholder="Goa Trip"
                      error={errors.name}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter a group name",
                        },
                      })}
                    />
                    <div className="mt-3">
                      <Input
                        className=""
                        label="Short Description *"
                        placeholder="Goa Trip"
                        error={errors.desc}
                        {...register("desc", {
                          required: {
                            value: true,
                            message: "Please enter a description",
                          },
                        })}
                      />
                    </div>
                    <div>
                      <div className="mb-5">
                        {user.map((data, index) => (
                          <span
                            onClick={() => userClick(index)}
                            key={data._id}
                            className="cursor-pointer py-1 px-2 bg-cyan-300 text-cyan-900 rounded-lg items-center"
                          >
                            {data.name}
                            <XMarkIcon
                              className="inline-block text-cyan-900"
                              height={15}
                            />
                          </span>
                        ))}
                      </div>
                      <Input
                        label="User"
                        onChange={(e) => {
                          setUserInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            onSearchClick();
                          }
                        }}
                        value={userInput}
                        endIcon={
                          <MagnifyingGlassIcon
                            onClick={onSearchClick}
                            className="mr-2 cursor-pointer"
                            height={25}
                          />
                        }
                      ></Input>
                    </div>
                    <Button onClick={handleSubmit(onAddClick)}>Add</Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default AddGroup;
