import { IoBookOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";

interface CardProps {
  type: "articles" | "views" | "categories" | "drafts";
}

const Card = ({ type }: CardProps) => {
  return (
    <div className="w-[25%] h-32 rounded-md bg-gray-50 border-zinc-800 border-[1px] flex-col flex items-center justify-center">
      {type === "articles" && (
        <IoBookOutline className="text-4xl text-zinc-800" />
      )}
      {type === "views" && <FaRegEye className="text-4xl text-zinc-800" />}
      {type === "categories" && (
        <BiCategoryAlt className="text-4xl text-zinc-800" />
      )}
      {type === "drafts" && <LuPencilLine className="text-4xl text-zinc-800" />}
      {type === "articles" && (
        <p className="flex flex-col items-center justify-center mt-2">
          <span className="text-base text-zinc-800">Total Articles</span>
          <span className="text-xl text-orange-500">100</span>
        </p>
      )}
      {type === "views" && (
        <p className="flex flex-col items-center justify-center mt-2">
          <span className="text-base text-zinc-800">Total Views</span>
          <span className="text-xl text-orange-500">5000</span>
        </p>
      )}
      {type === "categories" && (
        <p className="flex flex-col items-center justify-center mt-2">
          <span className="text-base text-zinc-800">Total Categories</span>
          <span className="text-xl text-orange-500">20</span>
        </p>
      )}
      {type === "drafts" && (
        <p className="flex flex-col items-center justify-center mt-2">
          <span className="text-base text-zinc-800">Total Drafts</span>
          <span className="text-xl text-orange-500">5</span>
        </p>
      )}
    </div>
  );
};
export default Card;
