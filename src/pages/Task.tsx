import { AddTaskModal } from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import { selectTask } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hooks";

const Task = () => {
    const tasks = useAppSelector(selectTask);
    console.log(tasks);
    return (
        <div className="m-5">
            <div className="flex justify-between items-center">
                <p>Task</p>
                <AddTaskModal></AddTaskModal>
            </div>
            <div>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task}></TaskCard>
                ))}
            </div>
        </div>
    );
};

export default Task;
