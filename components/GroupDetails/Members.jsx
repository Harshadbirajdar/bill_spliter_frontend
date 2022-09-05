import React from "react";
import { useSelector } from "react-redux";

const Members = () => {
  const Group = useSelector((state) => state.group.details.data);
  return (
    <div className="mt-5 px-5">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              Name
            </th>
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 dark:text-gray-100">
          {Group.member?.map((data) => (
            <tr key={data._id}>
              <td className="font-normal px-3 py-2 border-b border-gray-200">
                {data.name}
              </td>
              <td className="font-normal px-3 py-2 border-b border-gray-200">
                {data.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
