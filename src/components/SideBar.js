import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="h-screen">
      <Sidebar
        rootStyles={{
          backgroundColor: "#54B435",
          height: "100vh",
          display: "block",
        }}
      >
        <Menu>
          <SubMenu label="سنگ مرمر">
            <MenuItem component={<Link href="/categories/marble" />}>مرمر</MenuItem>
          </SubMenu>
          <SubMenu label="سنگ چینی">
            <MenuItem component={<Link href="/categories/porslain" />}>چینی</MenuItem>
          </SubMenu>
          <SubMenu label="سنگ تراورتن">
            <MenuItem component={<Link href="/categories/travertin" />}>تراورتن</MenuItem>
          </SubMenu>
          <SubMenu label="سنگ گرانیت">
            <MenuItem component={<Link href="/categories/granite" />}>گرانیت</MenuItem>
          </SubMenu>
          <SubMenu label="سنگ تراونیکس">
            <MenuItem component={<Link href="/categories/travenix" />}>تراونیکس</MenuItem>
          </SubMenu>
          <SubMenu label="سنگ بازالت">
            <MenuItem component={<Link href="/categories/bazalt" />}>بازالت</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
