import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { TTask } from "../../../types";
import type { RootState } from "../../store";
import { removeUser } from "../user/userSlice";

type IInitialState = {
    tasks: TTask[];
    filter: "all" | "High" | "Medium" | "Low" | "all";
};

const initialState: IInitialState = {
    tasks: [
        {
            id: "alsdjfa",
            title: "Relativity",
            description: "Nothing is impossible. Everything is possible.",
            dueDate: "20-12-2020",
            isCompleted: false,
            priority: "High",
            assignTo: null,
        },
    ],
    filter: "all",
};

type DriftTask = Pick<
    TTask,
    "title" | "description" | "dueDate" | "priority" | "assignTo"
>;

const createTask = (taskData: DriftTask): TTask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData,
        assignTo: taskData.assignTo ? taskData.assignTo : null,
    };
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.tasks.forEach((task) =>
                task.id == id ? (task.isCompleted = !task.isCompleted) : task
            );
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        updateFilter: (
            state,
            action: PayloadAction<"High" | "Medium" | "Low" | "all">
        ) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) =>
                task.assignTo === action.payload ? (task.assignTo = null) : task
            );
        });
    },
});

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter;
    if (filter === "Low") {
        return state.todo.tasks.filter((task) => task.priority == "Low");
    } else if (filter === "Medium") {
        return state.todo.tasks.filter((task) => task.priority == "Medium");
    } else if (filter === "High") {
        return state.todo.tasks.filter((task) => task.priority == "High");
    } else {
        return state.todo.tasks;
    }
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
    taskSlice.actions;
export default taskSlice.reducer;
