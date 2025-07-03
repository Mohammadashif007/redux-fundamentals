export type TTask = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "High" | "Medium" | "Low";
    assignTo: string | null;
};

export type TUser = {
    name: string;
    id: string;
};
