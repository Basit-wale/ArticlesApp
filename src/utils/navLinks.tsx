import { FaMinus, FaPlus } from "react-icons/fa";

import { useState } from "react";
import { SideBarList } from "../features/home/services/sideBarList";
import { useSearch } from "../context/searchContext";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState<number | null>();
  const [isChildOpen, setIsChildOpen] = useState<number | null>();
  const { setSearchText } = useSearch();
  return (
    <div className="px-2 flex gap-6 h-fit">
      {SideBarList.map((list, index) => (
        <div key={index}>
          <div className="gap-3 items-center w-fit h-full justify-between cursor-pointer hidden md:flex">
            <div>
              <NavLink to={list.path}>
                <p
                  className="text-base text-[#142246] calibri"
                  onClick={() => setSearchText(list.key)}
                >
                  {list.element}
                </p>
              </NavLink>
            </div>
            {isOpen !== index ? (
              <div>
                {list.hasSubRoutes === true && (
                  <FaPlus
                    className="font-light text-[#0a1533] text-[0.65em]"
                    onClick={() => setIsOpen(index)}
                  />
                )}
              </div>
            ) : (
              <div>
                {list.hasSubRoutes === true && (
                  <FaMinus
                    className="font-light text-[#0a1533] text-[0.65em]"
                    onClick={() => setIsOpen(null)}
                  />
                )}
              </div>
            )}
          </div>
          {isOpen === index ? (
            <ul className="px-3 bg-white transition-all w-fit z-30 absolute border-blue-900 border-[1px] rounded-md">
              {list.SubRoutes?.map((li, index) => (
                <div className="flex">
                  <div className="px-4 flex items-center w-full gap-3 cursor-pointer border-b-[1px] border-slate-300">
                    <li
                      key={index}
                      className="py-3 text-base text-[#142246] calibri"
                      onClick={() => setSearchText(li.key)}
                    >
                      {li.element}
                    </li>
                    {li.childHasSubRoutes === true && (
                      <div>
                        {isChildOpen !== index ? (
                          <div>
                            <FaPlus
                              onClick={() => setIsChildOpen(index)}
                              className="font-light text-[#0a1533] text-[0.65em]"
                            />
                          </div>
                        ) : (
                          <div>
                            <FaMinus
                              onClick={() => setIsChildOpen(null)}
                              className="font-light text-[#0a1533] text-[0.65em]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    {isChildOpen === index ? (
                      <ul className="px-3 bg-white transition-all pt-2 w-fit z-30 absolute border-blue-900 border-[1px] rounded-md">
                        {li.childSubRoutes?.map((childList, index) => (
                          <li
                            key={index}
                            onClick={() => setSearchText(childList.key)}
                            className="py-2 px-4 text-nowrap text-base text-[#142246] calibri border-b-[1px] border-slate-300 cursor-pointer"
                          >
                            {childList.element}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
