import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/auth";

const Users = () => {
  const { data: users =[], isLoading } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: ["users"],
  });

  return (
    <div>
      <p className="text-3xl font-bold">All Users</p>
      {users.map(user => <div key={user._id}>
        <p>{user.email}</p>
        <p>{user.role}</p>
        <p>{user.status}</p>
      </div>)}
    </div>
  );
};

export default Users;
