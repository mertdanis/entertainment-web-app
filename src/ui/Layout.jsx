import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

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
