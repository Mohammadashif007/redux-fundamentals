import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { TUser } from "../../../types";

interface initialState {
    users: TUser[];
}

const initialState: initialState = {
    users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const id = nanoid();
            const userData = { ...action.payload, id };
            console.log(userData);
            state.users.push(userData);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
            
        },
    },
});

export const selectUser = (state: { user: initialState }) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
