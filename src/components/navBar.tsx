import TextInput from "./ui/textInput";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/icon/IMG-20250530-WA0003.jpg";
import NavLinks from "../utils/navLinks";
import Button from "./ui/button";
import { useSearch } from "../context/searchContext";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const { searchText, setSearchText } = useSearch();

  return (
    <nav className="bg-white h-[12vh] max-w-full w-full mx-auto px-1 md:px-4 sm:px-6 lg:px-4 flex items-center justify-between">
      <div className="h-14 flex items-center">
        <img src={logo} alt="" className="h-full" />

        <p className="text-xl">PREMIER STUDIO</p>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center pr-3">
        <div className="h-10 w-fit border-blue-900 border-[1px] rounded-full flex items-center gap-1 px-2">
          <CiSearch className="text-2xl" />
          <TextInput
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            value={searchText}
          />
        </div>
        <NavLink to={"/contact"} className={"hidden md:block"}>
          <Button value="Contact" onClick={() => ""} />
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
