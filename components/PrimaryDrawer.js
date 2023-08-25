import React, { useState } from "react";
import { Drawer } from "antd";
import SecondaryDrawer from "./SecondaryDrawer";
import DrawerNavItem from "./DrawerNavItem";

const PrimaryDrawer = ({ open, setOpen }) => {
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [title, setTitle] = useState();
  const [secondaryItems, setSecondaryItems] = useState([]);

  function handleSecondaryDrawer(e, items) {
    setChildrenDrawer(true);
    setTitle(e.target.innerText);
    setSecondaryItems(items);
  }
  return (
    <>
      <Drawer
        // bodyStyle={{ backgroundColor: "black" }}
        // headerStyle={{ backgroundColor: "white" }}
        // rootClassName=" bg-red-200"
        // closeIcon="+"
        title="LFHBD"
        width={280}
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
      >
        {childrenDrawer && (
          <SecondaryDrawer
            secondaryItems={secondaryItems}
            title={title}
            childrenDrawer={childrenDrawer}
            setChildrenDrawer={setChildrenDrawer}
          />
        )}
        <DrawerNavItem
          handleSecondaryDrawer={(e) =>
            handleSecondaryDrawer(e, ["home1", "home2", "home3"])
          }
        >
          Home
        </DrawerNavItem>
        <DrawerNavItem arrow={false}>About</DrawerNavItem>
        <DrawerNavItem
          handleSecondaryDrawer={(e) =>
            handleSecondaryDrawer(e, ["Donation", "Donation2", "Donation3"])
          }
        >
          Donation
        </DrawerNavItem>
        <DrawerNavItem
          handleSecondaryDrawer={(e) =>
            handleSecondaryDrawer(e, ["Events1", "Events2", "Events3"])
          }
        >
          Events
        </DrawerNavItem>
        <DrawerNavItem
          handleSecondaryDrawer={(e) =>
            handleSecondaryDrawer(e, ["home1", "home2", "home3"])
          }
        >
          Pages
        </DrawerNavItem>
        <DrawerNavItem
          handleSecondaryDrawer={(e) =>
            handleSecondaryDrawer(e, ["Pages1", "Pages2", "Pages3"])
          }
        >
          Blogs
        </DrawerNavItem>

        <DrawerNavItem arrow={false}>Contact</DrawerNavItem>
      </Drawer>
    </>
  );
};

export default PrimaryDrawer;
