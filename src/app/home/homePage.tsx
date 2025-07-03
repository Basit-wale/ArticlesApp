// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import AdsBar from "../../features/home/components/adsBar";
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col h-fit text-[#142246]">
      <div className="w-full flex flex-col h-full items-center">
        <div className="w-full h-full md:w-[70vw]">
          <div className="md:px-8 px-0">
            <Outlet />
          </div>
        </div>
        <Footer />
        {/* <AdsBar /> */}
      </div>
    </main>
  );
};
export default HomePage;
