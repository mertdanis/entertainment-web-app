import { Outlet } from "react-router-dom";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import Home from "../features/Home/Home";

function Layout() {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
