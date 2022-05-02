import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ tasks, setTasks, title, isDone, index }) => {
  const handleClickCheckbox = () => {
    const newTasksChecked = [...tasks];
    newTasksChecked.map(() => {
      if (newTasksChecked[index].isDone === true) {
        return (newTasksChecked[index].isDone = false);
      } else {
        return (newTasksChecked[index].isDone = true);
      }
    });
    setTasks(newTasksChecked);
  };

  const handleDelete = () => {
    const trashTab = [...tasks];
    trashTab.splice(index, 1);
    setTasks(trashTab);
  };
  return (
    <div className="task">
      <input type="checkbox" onClick={handleClickCheckbox} />
      <p className={isDone && "task-done"}>{title}</p>
      <FontAwesomeIcon className="trash" icon="trash" onClick={handleDelete} />
    </div>
  );
};
export default Task;
