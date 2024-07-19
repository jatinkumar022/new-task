import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation().pathname;
  const pageName = location;
  function formatPathToTitleCase(path: string): string {
    return path
      .slice(1)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  const formattedString = formatPathToTitleCase(pageName);

  return (
    <div className="flex justify-between items-center w-full mb-10">
      <h2 className="text-4xl flex gap-2">
        {/* <h2 className="underline underline-offset-8">{formattedString} </h2> */}
        {formattedString}
      </h2>
      <div className="text-xl p-2 text-close-icon  border  rounded-full">
        <FaPlus className="" />
      </div>
    </div>
  );
};

export default Navbar;
