import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex bg-background h-screen w-screen p-6 justify-between">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
