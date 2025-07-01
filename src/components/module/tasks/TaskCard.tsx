/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";
import { cn } from "../../../lib/utils";

const TaskCard = ({ task }: { task: any }) => {
    const { title, description, priority } = task;
    return (
        <div className="px-5 py-4 border-2 border-amber-700 rounded-3xl m-5 flex gap-3 items-center justify-between">
            <div>
                <div className=" flex gap-3 items-center mb-5">
                    <div className={cn("w-3 h-3  rounded-full", {
                        "bg-green-500": priority === "High",
                        "bg-yellow-500": priority === "Medium",
                        "bg-red-500": priority === "Low",
                    })}></div>
                    <h1>{title}</h1>
                </div>
                <p>{description}</p>
            </div>

            <div className="flex gap-3 items-center">
                <Trash2 className="cursor-pointer"></Trash2>
                <Checkbox></Checkbox>
            </div>
        </div>
    );
};

export default TaskCard;
