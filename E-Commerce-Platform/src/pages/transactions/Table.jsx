import React from "react";
import { BiWifi0 } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";

const dataTable = [
  {
    Date: "Jan 25, 2023",
    ID: "45635",
    Value: "TZS 120,000",
    Status: "Available",
    Description: "Some short description",
  },

  {
    Date: "Jan 25, 2023",
    ID: "232453",
    Value: "TZS 120,000",
    Status: "Available",
    Description: "Some short description",
  },

  {
    Date: "Jan 25, 2023",
    ID: "45635",
    Value: "TZS 120,000",
    Status: "Available",
    Description: "Some short description",
  },
];

function Table(props) {
  return (
    <div className="divide-y devide-gray-200">
      <table className="min-w-full divide-y devide-gray-200 border-t border-gray-300">
        <thead>
          <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
            DATE
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
            ID
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
            Value
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
            Status
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
            Description
          </td>
        </thead>
        <tbody className="divide-y devide-gray-200   ">
          {dataTable.map((data) => (
            <tr key={data.ID} className="hover:bg-gray-500  ">
              <td className="px-6 py-2 whitespace-nowrap text-sm text-black">
                {data.Date}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-black">
                {data.ID}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-black  ">
                <div className="  flex items-center">
                  <div className=" text-red-500 ">
                    <BiUpArrowCircle />
                  </div>
                  <span className=""> {data.Value}</span>
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-black">
                <div className="h-6 w-[5rem] rounded-xl bg-gray-500 text-white hover:bg-black   flex">
                  <div className="">
                    <BiWifi0 />
                  </div>
                  <span className="flex items-center"> {data.Status}</span>
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                {data.Description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
