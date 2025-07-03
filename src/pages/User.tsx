import { AddUserModal } from "../components/module/user/AddUserModal";
import UserCard from "../components/module/user/UserCard";
import { selectUser } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hooks";

const User = () => {
    const users = useAppSelector(selectUser);
    return (
        <div>
            <div className="flex justify-end m-10">
                <AddUserModal></AddUserModal>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {users.map((user) => (
                    <UserCard key={user.id} user={user}></UserCard>
                ))}
            </div>
        </div>
    );
};

export default User;
