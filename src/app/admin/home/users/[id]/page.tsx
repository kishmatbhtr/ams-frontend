import UserDetails from "@/components/admin/UserDetails";
import { getRequest } from "@/components/auth/api/getRequest";
import { HOST } from "@/utils/constant";

async function getUserDetails(id: string) {
  const getUserDetailsUrl = `${HOST}/api/user/${id}`;

  const res = await getRequest(getUserDetailsUrl);

  return res.json();
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
      profile={userDetails["profile"]}
    />
  );
}

export default UserDetailsPage;
