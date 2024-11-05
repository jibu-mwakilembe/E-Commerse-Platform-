import React from "react";

const dataTable = [
  {
    year: "2024",
    revenue: "TZS 12,893,829.99",
    customer: "20,345",
  },

  {
    year: "2023",
    revenue: "TZS 12,3443,829.99",
    customer: "20,587",
  },

  {
    year: "2022",
    revenue: "TZS 11,893,829.99",
    customer: "20,345",
  },
];

function ConversationRate(props) {
  return (
    <div className="bg-white rounded-md p-3  w-3/4  border border-gray-200 flex flex-col gap-2 ">
      <h1 className="text-base text-black font-bold">Conversion rate</h1>
      <div className=" mb-2">
        <table className="min-w-full">
          <thead className="text-gray-500 text-sm ">
            <td>YEAR</td>
            <td>CUSTOMER</td>
            <td>REVENUE</td>
          </thead>
          <tbody className="divide-y devide-gray-200">
            {dataTable.map((data, index) => (
              <tr key={index} className="text-base text-black font-bold">
                <td className="px-3 py-1  whitespace-nowrap text-sm text-black">
                  {data.year}
                </td>
                <td className="px-3 py-1 whitespace-nowrap text-sm text-black">
                  {data.customer}
                </td>
                <td className="px-3 py-1 whitespace-nowrap text-sm text-black">
                  {data.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConversationRate;
