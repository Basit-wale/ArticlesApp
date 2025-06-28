import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../calendar/index.css";

export default function MiniCalendar() {
  const publishDates = ["2025-06-10", "2025-06-15"];
  return (
    <Calendar
      className="custom-calendar w-full h-full rounded-md"
      tileClassName={({ date, view }) => {
        if (view === "month") {
          const d = date.toISOString().split("T")[0];
          return publishDates.includes(d) ? "bg-blue-400 rounded-full" : "";
        }
      }}
    />
  );
}
