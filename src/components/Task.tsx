import { MdDelete } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import EditModal from "./EditModal copy";
import useTaskStore from "../store/store";
import ViewTaskModal from "./ViewTaskModal";
type task = {
  id: number;
  title: string;
  description: string;
  isImportant: boolean;
  isCompleted: boolean;
  date: string;
};

const Task = ({
  id,
  title,
  description,
  isImportant,
  isCompleted,
  date,
}: task) => {
  const taskImportance = useTaskStore((state) => state.taskImportance);
  const toggleTaskCompletion = useTaskStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div className="w-80 border-2  border-card-border p-4 rounded-xl bg-task-color h-60 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <ViewTaskModal
          title={title}
          description={description}
          isImportant={isImportant}
          isCompleted={isCompleted}
          date={date}
        />
        <button
          className="text-2xl -mt-2 cursor-pointer"
          onClick={() => taskImportance(id)}
        >
          {isImportant ? <MdOutlineStar /> : <MdOutlineStarBorder />}
        </button>
      </div>
      <p className="text-[17px] text-icons-color line-clamp-3 overflow-hidden ">
        {description}
      </p>
      <div>
        <h3 className="text-lg mt-3 mb-3">{date}</h3>
        <div className="flex justify-between">
          <button
            onClick={() => toggleTaskCompletion(id)}
            className={
              isCompleted
                ? "bg-success p-2 px-5 rounded-full"
                : " bg-danger p-2 px-5 rounded-full"
            }
          >
            {isCompleted ? "Completed" : "Incomplete"}
          </button>
          <div className="flex gap-4 text-2xl items-center text-icons-color">
            <h3 className=" cursor-pointer mt-[5px] ">
              <EditModal
                id={id}
                oldTitle={title}
                oldDescription={description}
                isImportant={isImportant}
              />
            </h3>

            <h3 className=" cursor-pointer">
              <MdDelete onClick={() => deleteTask(id)} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
