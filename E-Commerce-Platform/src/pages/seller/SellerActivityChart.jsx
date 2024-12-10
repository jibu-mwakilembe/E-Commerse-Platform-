import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useSellerStore from "../../store/SellerStore";

function SellerActivityChart({}) {
  const { fetchProfitData, sellerProfitDataChart } = useSellerStore();

  useEffect(() => {
    fetchProfitData();
  }, [fetchProfitData]);

  const data2 = sellerProfitDataChart;
  return (
    <div className="w-full h-[23rem] bg-white rounded-md border p-4 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#475BEB"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SellerActivityChart;
