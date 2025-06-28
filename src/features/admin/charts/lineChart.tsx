import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "06-01", views: 120 },
  { date: "06-02", views: 98 },
  { date: "06-03", views: 750 },
  { date: "06-04", views: 200 },
  { date: "06-05", views: 350 },
  { date: "06-06", views: 360 },
  { date: "06-07", views: 600 },
  { date: "06-08", views: 270 },
  // Add more data points
];

export default function ViewsChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
