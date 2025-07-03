import { Button } from "../../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog";
import { Plus } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../../ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "../../ui/input";
import { useAppDispatch } from "../../../redux/hooks";
import { addUser } from "../../../redux/features/user/userSlice";
import type { TUser } from "../../../types";
import { useState } from "react";

export function AddUserModal() {
    const [open, setOpen] = useState(false);
    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        dispatch(addUser(data as TUser));
        setOpen(false);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        Add User <Plus></Plus>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input
                                                className="mb-5"
                                                placeholder="Name"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    );
}
