import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex bg-background h-screen w-screen p-6 md:justify-between justify-center ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
