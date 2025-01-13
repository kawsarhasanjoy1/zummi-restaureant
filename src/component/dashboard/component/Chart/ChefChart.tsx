import { useGetChefStatsQuery } from "@/redux/api/orderApi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  Line,
} from "recharts";

const ChefChart = () => {
  const { data: stats } = useGetChefStatsQuery(undefined);
  const chart = stats?.data?.orderDetails?.map((order) => ({
    name: order?._id,
    quantity: order?.count,
    price: order?.totalPrice,
  }));
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 gap-16 z-[-10px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />

          {/* Right Y-axis for Quantity */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#8884d8"
            label={{
              value: "Quantity",
              angle: -90,
              position: "insideRight",
            }}
          />

          <Tooltip />
          <Legend />

          {/* Bar for Quantity */}
          <Bar yAxisId="right" dataKey="quantity" fill="#82ca9d" />

          {/* Line for Price */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="price"
            stroke="#ff7300"
            dot={false}
          />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />

          {/* Left Y-axis for Price */}

          {/* Right Y-axis for Quantity */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#8884d8"
            label={{
              value: "Quantity",
              angle: -90,
              position: "insideRight",
            }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Tooltip />

          <Area
            yAxisId="right"
            type="monotone"
            dataKey="quantity"
            stroke="#8884d8"
            fill="#8884d8"
          />

          {/* Area for Price */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChefChart;
