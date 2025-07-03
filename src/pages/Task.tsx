import { AddTaskModal } from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { selectTask, updateFilter } from "../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Task = () => {
    const tasks = useAppSelector(selectTask);
    const dispatch = useAppDispatch();
    console.log(tasks);
    return (
        <div className="m-5">
            <div className="flex justify-between items-center">
                <p>Task</p>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("all"))}
                            value="all"
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("High"))}
                            value="High"
                        >
                            High
                        </TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
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
