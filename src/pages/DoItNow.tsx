import Task from "../components/Task";
import Taskbord from "../components/Taskbord";

import useTaskStore from "../store/store";
const DoItNow = () => {
  function formatDate(dateString: string | undefined) {
    if (!dateString) return ""; // Handle undefined case
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  const getRemainingTasks = useTaskStore((state) => state.getRemainingTasks);
  const completedTasks = getRemainingTasks();
  return (
    <Taskbord>
      {completedTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isImportant={task.isImportant}
          isCompleted={task.isCompleted ?? false} // Provide a default value
          date={formatDate(task.date)}
        />
      ))}
    </Taskbord>
  );
};

export default DoItNow;
