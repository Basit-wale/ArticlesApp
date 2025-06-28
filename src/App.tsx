import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col justify-between font-poppins text-zinc-800">
      <div className="flex flex-col bg-black h-fit shadow-md">
        <NavBar />
      </div>

      <div className="h-[85vh] overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
