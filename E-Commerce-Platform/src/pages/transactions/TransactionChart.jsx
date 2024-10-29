import React from "react";
import { MdArrowUpward } from "react-icons/md";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import HeaderTitle from "../../components/shared/HeaderTitle";

const data = [
  {
    name: "Jan",
    Profit: 7000,
    Loss: 1400,
  },
  {
    name: "Feb",
    Profit: 6000,
    Loss: 1398,
  },
  {
    name: "Mar",
    Profit: 9800,
    Loss: 2000,
  },
  {
    name: "Apr",
    Profit: 5000,
    Loss: 3908,
  },
  {
    name: "May",
    Profit: 7800,
    Loss: 4800,
  },
  {
    name: "Jun",
    Profit: 7390,
    Loss: 3800,
  },
  {
    name: "July",
    Profit: 3490,
    Loss: 4300,
  },
  {
    name: "Sept",
    Profit: 4000,
    Loss: 2600,
  },
  {
    name: "Aug",
    Profit: 9000,
    Loss: 7000,
  },
  {
    name: "Oct",
    Profit: 2398,
    Loss: 3800,
  },
  {
    name: "Dec",
    Profit: 3490,
    Loss: 4300,
  },
];

function TransactionChart(props) {
  return (
    <div className="flex flex-1 flex-col gap-3 ">
      <HeaderTitle title="Portfolio Value" />
      <div className="w-full h-[23rem] bg-white border rounded-md p-3 ">
        <div className="flex justify-end gap-7">
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-blue-500 rounded-full h-2 w-2"></div>
            <span>Profit</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-gray-500 rounded-full h-2 w-2"></div>
            <span>Loss</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4 items-center ">
          <strong className="text-xl text-gray-700 font-semibold">
            $50.4K
          </strong>
          <MdArrowUpward />
          <p className="text-green-500">5% than last month</p>
        </div>
        <div className="flex-1 mt-4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray=" 3 3 " vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Profit" fill="blue" />
              <Bar dataKey="Loss" fill="gray" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default TransactionChart;
