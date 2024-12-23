import React from "react";

const dataTable = [
  {
    year: "2023",
    sellers: "20,587",
  },

  {
    year: "2022",
    sellers: "20,345",
  },
];

function ConversationRentation(props) {
  return (
    <div>
      <div className="bg-white rounded-md p-3 overflow-x-auto  lg:w-1/2 md:w-full sm:w-full  border border-gray-200 flex flex-col gap-2 ">
        <h1 className="text-base text-black font-bold">Retention rate</h1>
        <div className=" mb-2">
          <table className="min-w-full">
            <thead className="text-gray-500 text-sm ">
              <td>YEAR</td>
              <td>SELLERS</td>
            </thead>
            <tbody className="divide-y devide-gray-200">
              {dataTable.map((data, index) => (
                <tr
                  key={index}
                  className="text-base text-black font-bold odd:bg-gray-50 even:bg-white"
                >
                  <td className="px-3 py-1  whitespace-nowrap text-sm text-black">
                    {data.year}
                  </td>
                  <td className="px-3 py-1 whitespace-nowrap text-sm text-black">
                    {data.sellers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ConversationRentation;
