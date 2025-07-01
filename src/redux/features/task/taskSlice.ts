import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TTask } from "../../../types";
import type { RootState } from "../../store";
import { v4 as uuidv4 } from 'uuid';

type IInitialState = {
    tasks: TTask[];
    filter: "all" | "High" | "Medium" | "Low";
};

const initialState: IInitialState = {
    tasks: [],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TTask>) => {
            const taskData = {
                ...action.payload,
                id: uuidv4(),
                isCompleted: false,
            };
            state.tasks.push(taskData);
        },
    },
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
