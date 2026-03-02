import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";

import "./layout.styles.css";

function Layout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
