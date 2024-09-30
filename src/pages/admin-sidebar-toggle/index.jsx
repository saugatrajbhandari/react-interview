/* eslint-disable react/prop-types */
import {
  ChevronLeft,
  ChevronRight,
  Home,
  HomeIcon,
  LayoutDashboard,
  Pen,
  ServerIcon,
  Settings,
  Settings2Icon,
  User2,
} from "lucide-react";
import React, { useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

function TitleSection({ open }) {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex gap-2 items-center">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block  font-semibold">Saugat</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        id="logo-86"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ccustom"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
          fill="#007DFC"
        ></path>
        <path
          className="ccustom"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
          fill="#007DFC"
        ></path>
      </svg>
    </motion.div>
  );
}

function Option({ icon, title, selected, setSelected, open }) {
  console.log(title);

  return (
    <motion.button
      layout
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10  place-content-center text-lg"
      >
        <HomeIcon size={24} />
      </motion.div>

      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-lg"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
}

function AdminSidebarToggle() {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  //   return (
  //     <motion.nav
  //       layout
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
  //       style={{
  //         width: isOpen ? "225px" : "fit-content",
  //       }}
  //     >
  //       <TitleSection open={isOpen} />

  //       <div className="space-y-2">
  //         <Option
  //           icon={HomeIcon}
  //           title={"Dashboard"}
  //           selected={selected}
  //           setSelected={setSelected}
  //           open={isOpen}
  //         />

  //         <Option
  //           icon={Settings2Icon}
  //           title={"Setting"}
  //           selected={selected}
  //           setSelected={setSelected}
  //           open={isOpen}
  //         />

  //         <Option
  //           icon={HomeIcon}
  //           title={"Proifle"}
  //           selected={selected}
  //           setSelected={setSelected}
  //           open={isOpen}
  //         />
  //       </div>

  //       <div
  //         onClick={() => setIsOpen((prevState) => !prevState)}
  //         className="absolute flex justify-center bg-indigo-200 cursor-pointer bottom-24 p-2 w-full left-1/2 -translate-x-1/2"
  //       >
  //         {isOpen && (
  //           <motion.span
  //             layout
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ delay: 0.125 }}
  //             className="text-center block"
  //           >
  //             Hide
  //           </motion.span>
  //         )}
  //         <motion.div layout>
  //           <ChevronRight size={22} />
  //         </motion.div>
  //       </div>
  //     </motion.nav>
  //   );

  return (
    <motion.nav
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.124 }}
      className={cn(
        "bg-neutral-50 shrink-0  p-4 h-[calc(100vh-43px)] shadow-2xl flex flex-col justify-between w-fit",
        { "!w-[200px]": isOpen }
      )}
    >
      <div>
        <div className="flex gap-2 items-center">
          <Logo />
          {isOpen && (
            <motion.p
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className=" font-semibold"
            >
              Apple
            </motion.p>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <div className="flex gap-3 items-center">
            <motion.div layout>
              <Home size={28} />
            </motion.div>
            {isOpen && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                layout
                className="font-semibold text-lg"
              >
                Home
              </motion.p>
            )}
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex gap-2 items-center justify-center hover:bg-neutral-100 p-2 cursor-pointer"
      >
        {isOpen && (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold"
          >
            Hide
          </motion.p>
        )}
        {isOpen ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.125 }}
          >
            {" "}
            <ChevronLeft size={28} />{" "}
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.125 }}
          >
            <ChevronRight size={28} />
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default AdminSidebarToggle;
