import React, { Children, useContext } from "react";
import Nav from "./Nav";
import { MyContext }   from "@/Helper/Context";

const Header = () => {
   const user = useContext(MyContext)
  return (
    <div className="bg-green-400 p-4">
      {user}
    </div>
  );
};

export default Header;
