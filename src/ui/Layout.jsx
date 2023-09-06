import { Outlet } from "react-router-dom";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import Home from "../features/Home/Home";

function Layout() {
  return (
    <div className="flex grow gap-6 px-6">
      <Sidebar />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
