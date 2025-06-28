import { FaMinus, FaPlus } from "react-icons/fa";
import { SideBarList } from "../services/sideBarList";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<number | null>();
  const [isChildOpen, setIsChildOpen] = useState<number | null>();

  return (
    <div className="w-[100vw] h-[85vh] border-r-[1px] border-slate-700 bg-white sticky top-0 py-3">
      <div className="h-full overflow-y-clip px-4 flex flex-col gap-4">
        <p className="font-bold text-lg uppercase frank">Categories</p>

        <div className="px-2 flex">
          {SideBarList.map((list, index) => (
            <div key={index}>
              <div className="flex items-center w-fit justify-between cursor-pointer py-3 border-b-[1px] border-gray-400">
                <div>
                  <NavLink
                    className="text-sm text-slate-600 calibri"
                    to={list.path}
                  >
                    {list.element}
                  </NavLink>
                </div>
                {isOpen !== index ? (
                  <div>
                    {list.hasSubRoutes === true && (
                      <FaPlus
                        className="font-light text-sm"
                        onClick={() => setIsOpen(index)}
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    {list.hasSubRoutes === true && (
                      <FaMinus
                        className="font-light text-sm"
                        onClick={() => setIsOpen(null)}
                      />
                    )}
                  </div>
                )}
              </div>
              {isOpen === index ? (
                <ul className="px-2 bg-slate-100 transition-all py-1 w-28 z-30 absolute">
                  {list.SubRoutes?.map((li, index) => (
                    <>
                      <div className="flex items-center w-full justify-between cursor-pointer">
                        <NavLink to={li.path}>
                          <li
                            key={index}
                            className="text-sm py-1 text-slate-600 calibri"
                          >
                            {li.element}
                          </li>
                        </NavLink>
                        {li.childHasSubRoutes === true && (
                          <div>
                            {isChildOpen !== index ? (
                              <div>
                                <FaPlus
                                  onClick={() => setIsChildOpen(index)}
                                  className="font-light text-sm"
                                />
                              </div>
                            ) : (
                              <div>
                                <FaMinus
                                  onClick={() => setIsChildOpen(null)}
                                  className="font-light text-sm"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {isChildOpen === index ? (
                        <ul className="pl-1">
                          {li.childSubRoutes?.map((childList, index) => (
                            <NavLink to={childList.path}>
                              <li
                                key={index}
                                className="text-sm py-[0.1em] text-slate-600 calibri"
                              >
                                {childList.element}
                              </li>
                            </NavLink>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
