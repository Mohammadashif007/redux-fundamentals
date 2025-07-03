/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "../../../redux/hooks";
import { removeUser } from "../../../redux/features/user/userSlice";

const UserCard = ({ user }:{user: any}) => {
    const { name, id } = user;

    const dispatch = useAppDispatch();
    return (
        <div className="border-2 border-orange-600 m-5 p-8 flex items-center justify-between">
            <p className="text-2xl">{name}</p>
            <Trash2 onClick={()=> dispatch(removeUser(id))} className="cursor-pointer"></Trash2>
        </div>
    );
};

export default UserCard;
