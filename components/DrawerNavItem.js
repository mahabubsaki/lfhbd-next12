import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function DrawerNavItem({
  handleSecondaryDrawer,
  children,
  arrow = true,
}) {
  return (
    <div
      className=" font-bold border-b-[1px] border-icon-hover pb-2 mb-5 flex justify-between items-center relative cursor-pointer"
      onClick={handleSecondaryDrawer}
    >
      <p className=" w-full z-10">{children}</p>
      {arrow && <FaArrowRight className=" absolute right-0 z-0" />}
    </div>
  );
}
