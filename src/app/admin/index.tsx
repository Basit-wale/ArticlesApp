import { BiPlus } from "react-icons/bi";
import AdminTable from "../../features/admin/table";
import { useSearch } from "../../context/searchContext";
import Img from "../../assets/img/dashboard_ill.png";
import MiniCalendar from "../../features/admin/calendar";
import Card from "../../features/admin/card";
import ViewsChart from "../../features/admin/charts/lineChart";
import TopArticlesBarChart from "../../features/admin/charts/barCharts";
import { Link, useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/adminContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../components/animations/Animation - 1749684317032.json";
import { FaLongArrowAltLeft } from "react-icons/fa";

const AdminDashboard = () => {
  const { searchText, setSearchText } = useSearch();

  const navigate = useNavigate();

  const { currentAdmin, logoutAdmin, isLoading } = useAdmin();

  const handleLogout = () => {
    logoutAdmin();
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="md:px-8 px-0 flex flex-col gap-4">
      <div className="w-full flex">
        <div className="flex flex-col gap-11 w-[70%]">
          <div className="w-full h-40 rounded-md flex justify-between bg-orange-700 pr-8 text-black">
            <div className="flex h-full pl-12 items-center justify-center">
              <div>
                <p className="font-bold text-4xl capitalize">
                  Welcome, {currentAdmin}!
                </p>
                <p className="font-bold text-sm">
                  Ready to start your day with some pitch decks?
                </p>
              </div>
            </div>

            <img src={Img} alt="" className="h-48" />
          </div>

          <div>
            <Card />
          </div>
        </div>
        <div className="w-[30%] rounded-md h-[21em] flex justify-end pl-6">
          <MiniCalendar />
        </div>
      </div>

      <div className="flex">
        <div className="text-center text-sm w-[70%] p-2 capitalize rounded-md box">
          <p className="text-xl pb-6">Views over time</p>
          <ViewsChart />
        </div>
        <div className="text-center text-sm w-[30%]">
          <p className="text-xl pb-6">Top Articles</p>
          <TopArticlesBarChart />
        </div>
      </div>

      <div className="w-full flex justify-between pt-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <Link to="/newArticle">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
            <BiPlus />
            Create New Article
          </button>
        </Link>
      </div>

      <div className="w-full">
        <AdminTable />
      </div>
      <div className="p-10">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Lottie
              animationData={loadingAnimation}
              loop
              className="w-16 h-16"
            />
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome, {currentAdmin}!</h1>
            <button
              onClick={() => handleLogout()}
              className="mt-4 bg-orange-600 text-white p-2 rounded flex items-center hover:bg-orange-700"
            >
              <FaLongArrowAltLeft />
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
