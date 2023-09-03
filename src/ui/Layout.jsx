import { Outlet } from "react-router-dom";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import Home from "../features/Home/Home";

function Layout() {
  return (
    <div className="flex grow gap-6 px-6">
      <Sidebar />

      <div className="grid grid-cols-4 gap-5	">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
