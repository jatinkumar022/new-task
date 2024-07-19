import Task from "../components/Task";
import Taskbord from "../components/Taskbord";
import useTaskStore from "../store/store";

const AllTasks = () => {
  function formatDate(dateString: string | undefined) {
    if (!dateString) return ""; // Handle undefined case
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const tasks = useTaskStore((state) => state.tasks);

  // const toggleTaskCompletion = useTaskStore(
  //   (state) => state.toggleTaskCompletion
  // );
  // const deleteTask = useTaskStore((state) => state.deleteTask);
  console.log(tasks);
  return (
    <Taskbord>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isImportant={task.isImportant}
          isCompleted={task.isCompleted ?? false}
          date={formatDate(task.date)}
        />
      ))}
    </Taskbord>
  );
};

export default AllTasks;
