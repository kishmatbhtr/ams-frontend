import ManageUsers from "@/components/admin/ManageUsers";
import { getRequest } from "@/components/auth/api/getRequest";

interface UsersType {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
}

async function getUsers() {
  const getUsersUrl = "http://127.0.0.1:8000/api/user/";

  const res = await getRequest(getUsersUrl);

  return res.json();
}

export default async function ManageUsersPage() {
  const users: UsersType[] = await getUsers();

  return (
    <div className="bg-[#ECF5FF] flex-grow">
      <ManageUsers users={users} />
    </div>
  );
}
