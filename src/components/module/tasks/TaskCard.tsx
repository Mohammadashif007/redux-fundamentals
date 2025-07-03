/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit2Icon, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";
import { cn } from "../../../lib/utils";
import { useAppDispatch } from "../../../redux/hooks";
import {
    deleteTask,
    toggleCompleteState,
} from "../../../redux/features/task/taskSlice";
import { AddTaskModal } from "./AddTaskModal";

const TaskCard = ({ task }: { task: any }) => {
    const { id, title, description, priority, isCompleted } = task;
    const dispatch = useAppDispatch();
    return (
        <div className="px-5 py-4 border-2 border-amber-700 rounded-3xl m-5 flex gap-3 items-center justify-between">
            <div>
                <div className=" flex gap-3 items-center mb-5">
                    <div
                        className={cn("w-3 h-3  rounded-full", {
                            "bg-green-500": priority === "High",
                            "bg-yellow-500": priority === "Medium",
                            "bg-red-500": priority === "Low",
                        })}
                    ></div>
                    <h1 className={cn({ "line-through": isCompleted == true })}>
                        {title}
                    </h1>
                </div>
                <p>{description}</p>
            </div>

            <div className="flex gap-3 items-center">
                <AddTaskModal></AddTaskModal>
                <Edit2Icon className="cursor-pointer"></Edit2Icon>
                <Trash2
                    className="cursor-pointer"
                    onClick={() => dispatch(deleteTask(id))}
                ></Trash2>
                <Checkbox
                    className="cursor-pointer"
                    checked={isCompleted}
                    onClick={() => dispatch(toggleCompleteState(id))}
                ></Checkbox>
            </div>
        </div>
    );
};

export default TaskCard;
