import { FaPlus } from "react-icons/fa";

const ViewTask = () => {
  return (
    <div className="text-white w-[78%] lg:w-[80%]  bg-card-bg  p-8  rounded-2xl border-2 border-card-border  overflow-hidden ">
      <div className=" lg:px-20md:px-11 gap-3 mb-4 "></div>
      <div className="h-[800px] overflow-auto">
        {/* Navbar */}
        <div className="md:mb-11 mb-14 overflow-auto flex justify-center items-center flex-col md:flex-row gap-4 md:items-start  md:justify-start flex-wrap ">
          <div className="flex justify-between items-center w-full mb-10">
            <h2 className="text-4xl flex gap-2">TaskName</h2>
            <div className="text-xl p-2 text-close-icon  border  rounded-full">
              <FaPlus className="" />
            </div>
          </div>
        </div>
        {/* Container  */}
        <form>
          <div className="flex flex-col justify-center items-center text-2xl gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="font-normal"> Task Title: </h2>
              <input
                className="lg:w-[44rem] md:w-[33rem] sm:w-[20rem] h-12 p-3 font-thin  outline-none focus:outline-outline-blue  rounded-md bg-card-border"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-normal"> Task Description: </h2>
              <textarea
                name=""
                className="lg:w-[44rem] md:w-[33rem] sm:w-[20rem]  p-3 font-thin h-64 bg-card-border outline-none focus:outline-outline-blue resize-none  rounded-md"
                id=""
              ></textarea>

              <div className="flex gap-3 ">
                <h2 className="font-normal"> Important: </h2>
                <input type="checkbox" className="h-5 w-5 mt-2  " />
              </div>
            </div>
            <button className="text-xl font-normal bg-button px-6 py-3 rounded-2xl mt-6 delay-75 hover:animate-pulse focus:animate-ping">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewTask;
