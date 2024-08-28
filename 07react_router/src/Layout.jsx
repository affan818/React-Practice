import { Outlet } from "react-router-dom";
import { Header } from "./components/index";
import { Footer } from "./components/index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
