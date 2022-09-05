import { Dialog, Switch, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../redux/action/group";
import { changeAddExpenseState } from "../../redux/action/popup";
import Autocomplete from "../ui/Autocomplete";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const Addexpenses = () => {
  const open = useSelector((state) => state.popup.addExpense);
  const Groups = useSelector((state) => state.group.details);
  const [enabled, setEnabled] = useState(true);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paidBy: "",
      desc: "",
      amount: "",
    },
  });
  const dispatch = useDispatch();
  //   console.log(errors);

  const onAddClick = (data) => {
    if (enabled) {
      data.member = [];
      Groups.data.member.forEach((member) => {
        data.member.push(member._id);
      });
    }
    data.groupId = Groups.data._id;
    console.log(data);
    dispatch(addExpense(data));
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch(changeAddExpenseState(false));
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
                    onClick={() => {
                      dispatch(changeAddExpenseState(false));
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="w-full mt-5">
                    <Input
                      error={errors.desc}
                      label="Description *"
                      placeholder="Train Ticket"
                      {...register("desc", {
                        required: {
                          value: true,
                          message: "Please enter a description",
                        },
                      })}
                    />
                    <Input
                      error={errors.amount}
                      label="Amount *"
                      type="number"
                      placeholder="5000"
                      {...register("amount", {
                        required: {
                          value: true,
                          message: "Please enter a amount",
                        },
                      })}
                    />

                    <Select
                      label="Paid By *"
                      error={errors.paidBy}
                      {...register("paidBy", {
                        required: {
                          value: true,
                          message: "Please select the paid by",
                        },
                      })}
                    >
                      {Groups.data?.member?.map((member) => (
                        <option key={member._id} value={member._id}>
                          {member.name}{" "}
                        </option>
                      ))}
                    </Select>
                    <div className=" flex items-center justify-between mx-2 my-3">
                      <label>Split Among Everybody</label>

                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? "bg-blue-600" : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Split Among Everybody</span>
                        <span
                          className={`${
                            enabled ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white`}
                        />
                      </Switch>
                    </div>
                    {!enabled && (
                      <div className="flex">
                        {Groups.data?.member?.map((member) => (
                          <div className="flex items-center mr-2">
                            <input
                              {...register("member")}
                              className="w-4 h-4 mr-2 "
                              type="checkbox"
                              name="member"
                              key={member._id}
                              id={member._id}
                            />
                            <label htmlFor={member._id}>{member.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button
                      className="w-full mt-5 flex justify-center items-center"
                      onClick={handleSubmit(onAddClick)}
                    >
                      <PlusCircleIcon height={20} className="mr-2" />
                      Add Expense
                    </Button>
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

export default Addexpenses;
