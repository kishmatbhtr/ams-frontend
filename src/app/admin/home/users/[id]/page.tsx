import UserDetails from "@/components/admin/UserDetails";
import { getRequest } from "@/components/auth/api/getRequest";
import { putRequest } from "@/components/auth/api/putRequest";

async function getUserDetails(id: string) {
  const getUserDetailsUrl = `http://127.0.0.1:8000/api/user/${id}`;

  const res = await getRequest(getUserDetailsUrl);

  return res.json();
}

async function editUser(id: string, firstName: string, password: string) {
  const editUserUrl = `http://localhost:8000/api/user/${id}`;

  const res = await putRequest(editUserUrl, {
    "first_name": firstName,
    "password": password,
  });
}

async function UserDetailsPage({ params }: { params: { id: string } }) {
  const userDetails = await getUserDetails(params.id);

  return (
    <UserDetails
      id={userDetails["id"]}
      first_name={userDetails["first_name"]}
      last_name={userDetails["last_name"]}
      email={userDetails["email"]}
      role={userDetails["role"]}
    />
  );
}

export default UserDetailsPage;
