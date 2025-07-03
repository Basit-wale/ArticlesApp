// import { IoBookOutline } from "react-icons/io5";
// import { FaRegEye } from "react-icons/fa";
// import { BiCategoryAlt } from "react-icons/bi";
// import { LuPencilLine } from "react-icons/lu";

import { FiBookOpen, FiEye, FiGrid, FiEdit2 } from "react-icons/fi";

const Card = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { icon: <FiBookOpen />, title: "Total Articles", value: 100 },
        { icon: <FiEye />, title: "Total Views", value: 5000 },
        { icon: <FiGrid />, title: "Total Categories", value: 20 },
        { icon: <FiEdit2 />, title: "Total Drafts", value: 5 },
      ].map(({ icon, title, value }) => (
        <div
          key={title}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center"
        >
          <div className="text-3xl mb-2">{icon}</div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-bold text-orange-500">{value}</div>
        </div>
      ))}
    </div>
  );
};
export default Card;
