import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "../pages/user";
import Task from "../pages/Task";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "user",
                element: <User></User>,
            },
            {
                index: true,
                element: <Task></Task>,
            },
            {
                path: "task",
                element: <Task></Task>,
            },
        ],
    },
]);

export default router;
