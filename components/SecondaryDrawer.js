import React from "react";
import { Drawer } from "antd";
import DrawerNavItem from "./DrawerNavItem";

export default function SecondaryDrawer({
  childrenDrawer,
  setChildrenDrawer,
  title,
  secondaryItems,
}) {
  return (
    <>
      <Drawer
        // bodyStyle={{ backgroundColor: "black" }}
        title={title}
        className=" bg-green-600"
        width={280}
        closable={true}
        onClose={() => setChildrenDrawer(false)}
        open={childrenDrawer}
      >
        {secondaryItems &&
          secondaryItems.map((item, index) => (
            <DrawerNavItem key={index} arrow={false}>
              {item}
            </DrawerNavItem>
          ))}
      </Drawer>
    </>
  );
}
