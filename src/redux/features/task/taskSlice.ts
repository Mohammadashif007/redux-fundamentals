import { createSlice } from "@reduxjs/toolkit";
import type { TTask } from "../../../types";
import type { RootState } from "../../store";

type IInitialState = {
    tasks: TTask[];
    filter: "all" | "High" | "Medium" | "Low";
};

const initialState: IInitialState = {
    tasks: [
        {
            id: "jsajdl",
            title: "initialize frontend",
            description: "Create homepage and routing",
            dueDate: "02-07-2025",
            isCompleted: false,
            priority: "High",
        },
    ],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export default taskSlice.reducer;
