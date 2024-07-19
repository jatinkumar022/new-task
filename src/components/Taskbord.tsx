import InputTask from "./InputModal";
import Navbar from "./Navbar";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const Taskbord = ({ children }: Props) => {
  return (
    <div className="text-white  md:w-[78%] lg:w-[80%]  bg-card-bg  md:p-8 p-5   w-full  rounded-2xl border-2 border-card-border  overflow-hidden md:mb-0 mb-16">
      <div className=" lg:px-20 md:px-11 gap-3 mb-4 ">
        <Navbar />
      </div>
      <div className="h-[500px] overflow-auto ">
        <div className="md:mb-11 mb-14 overflow-auto flex justify-center items-center flex-col md:flex-row gap-4 md:items-start  md:justify-start flex-wrap ">
          {children}
          <InputTask />
        </div>
      </div>
    </div>
  );
};

export default Taskbord;
