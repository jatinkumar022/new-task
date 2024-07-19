import AVATAR from "../assets/avatar.avif";
import { TiHome } from "react-icons/ti";
import { FaTasks } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="text-white bg-card-bg w-[20%] lg:w-[18%] rounded-2xl border-2 border-card-border flex flex-col justify-between">
      <div className="flex justify-center items-center lg:px-20 md:p-8 p-5 py-8  md:px-11 gap-3 ">
        <img
          src={AVATAR}
          alt=""
          className=" lg:h-12 lg:w-12 h-7 w-7  rounded-full"
        />
        <h2 className="lg:text-xl hidden md:block">Jatin Ramani</h2>
      </div>
      <div>
        <ul className=" flex flex-col text-close-icon  ">
          <NavLink
            to={"/all-tasks"}
            className={({ isActive }) =>
              isActive
                ? "flex justify-center items-center gap-4 text-xl py-4 duration-300 bg-task-color text-icons-color"
                : "flex justify-center items-center gap-4 text-xl py-4 duration-300 hover:bg-task-color hover:text-icons-color"
            }
          >
            <TiHome className="text-2xl " />
            <h3 className=" md:block hidden">All Tasks</h3>
          </NavLink>
          <NavLink
            to={"/important"}
            className={({ isActive }) =>
              isActive
                ? "flex justify-center items-center gap-4 text-xl py-4 duration-300 bg-task-color text-icons-color"
                : "flex justify-center items-center gap-4 text-xl py-4 duration-300 hover:bg-task-color hover:text-icons-color"
            }
          >
            <FaTasks className="text-2xl" />
            <h3 className=" md:block hidden ">Important!</h3>
          </NavLink>
          <NavLink
            to={"/completed"}
            className={({ isActive }) =>
              isActive
                ? "flex justify-center items-center gap-4 text-xl py-4 duration-300 bg-task-color text-icons-color"
                : "flex justify-center items-center gap-4 text-xl py-4 duration-300 hover:bg-task-color hover:text-icons-color"
            }
          >
            <FaCheck className="text-2xl" />
            <h3 className="md:block hidden ">Completed!</h3>
          </NavLink>
          <NavLink
            to={"/do-it-now"}
            className={({ isActive }) =>
              isActive
                ? "flex justify-center items-center gap-4 text-xl py-4 duration-300 bg-task-color text-icons-color "
                : "flex justify-center items-center gap-4 text-xl py-4 duration-300 hover:bg-task-color hover:text-icons-color"
            }
          >
            <FaClipboardList className="text-2xl" />
            <h3 className=" md:block hidden">Do It Now</h3>
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4 text-xl py-10 cursor-pointer  text-icons-color">
        <MdLogout className="text-2xl " />
        <h3 className="hidden md:block">logout</h3>
      </div>
    </div>
  );
};

export default Sidebar;
