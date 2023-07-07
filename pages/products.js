import RootLayout from "@/app/layout";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useState } from "react";

const Products = () => {
  return (
    <RootLayout>
      <div className="flex">
        <SideBar />
      </div>
    </RootLayout>
  );
};

export default Products;
