import { useAuth } from "src/context/auth-context";

const Account = () => {
  const { user } = useAuth();

  return (
    <ul>
      <h1>userdata:</h1>
      <li>{user?.username}</li>
      <li>{user?.email}</li>
    </ul>
  );
};

export default Account;
