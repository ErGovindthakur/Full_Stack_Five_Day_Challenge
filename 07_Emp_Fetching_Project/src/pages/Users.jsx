import { useEffect, useState } from "react";
import { getUser } from "../services/userService.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setErrors(null);
    setLoading(true);
    try {
      const { data } = await getUser();
      setUsers(data);
    } catch (err) {
      console.log(err);
      setErrors("Error while fetching data...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (errors) return <h1>{errors}</h1>;
  if (loading) return <h1>Data is Loading...</h1>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
