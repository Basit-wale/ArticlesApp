import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { title: "Article A", views: 400 },
  { title: "Article B", views: 300 },
  { title: "Article C", views: 200 },
  { title: "Article D", views: 278 },
  { title: "Article E", views: 189 },
];

export default function TopArticlesBarChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="20 20" /> */}
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="views" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
