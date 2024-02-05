"use client";
import { useState } from "react";

import Box from "./Box";
import { BiSearch, BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import Link from "next/link";

interface AsidebarProps {
  children: React.ReactNode;
}

const Asidebar: React.FC<AsidebarProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  function handleClickMenu() {
    if (openMenu === true) {
      setOpenMenu(false);
      return;
    }
    setOpenMenu(true);
  }

  return (
    <div className="flex h-full">
      <aside className="w-[300px] hidden sm:flex flex-col pl-1 pr-1 py-2 gap-y-1 h-full">
        <Box>
          <div className="flex flex-col gap-y-2">
            <Link
              className="flex gap-2 items-center hover:text-slate-400 transition duration-300"
              href={"/"}
            >
              <BiSearch size={18} /> Search
            </Link>
            <Link
              className="flex gap-2 items-center hover:text-slate-400 transition duration-300"
              href={"/"}
            >
              <FiHome size={18} /> Home
            </Link>
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">Libry Songs</Box>
      </aside>
      <div className="flex flex-col sm:hidden py-2 pl-1">
        <Box className="h-full">
          {openMenu === true ? (
            <BiMenu
              onClick={handleClickMenu}
              size={25}
              className="cursor-pointer hover:text-slate-400 transition duration-300"
            />
          ) : (
            <aside className="w-[50px] flex flex-col h-full">
              <Box>
                <div className="flex flex-col gap-y-2">
                  <IoMdClose
                    size={22}
                    onClick={handleClickMenu}
                    className="cursor-pointer hover:text-slate-400"
                  />
                  <Link
                    className="flex gap-2 items-center hover:text-slate-400 transition duration-300"
                    href={"/"}
                  >
                    <BiSearch size={22} />
                  </Link>
                  <Link
                    className="flex gap-2 items-center hover:text-slate-400 transition duration-300"
                    href={"/"}
                  >
                    <FiHome size={22} />
                  </Link>
                </div>
              </Box>
            </aside>
          )}
        </Box>
      </div>
      <main className="w-full py-2 px-1 h-full">{children}</main>
    </div>
  );
};

export default Asidebar;
