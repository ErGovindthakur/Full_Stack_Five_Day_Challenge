import { useEffect, useState } from "react";
import { getUser,createUser } from "../services/userService.js";
import UserForm from "../components/UserForm.jsx";

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


  const handleAddUser = async(user) => {
    const {data} = await createUser(user);
    setUsers((prev)=>[...prev,data])
  }
  if (errors) return <h1>{errors}</h1>;
  if (loading) return <h1>Data is Loading...</h1>;

  return (
    <div className="w-full container m-auto py-7">
    <UserForm onAdd={handleAddUser} />
      <h2>User List</h2>
      <div className="w-full flex flex-wrap gap-2">

      {users.map((user) => (
        <div key={user.id} className="w-[360px] bg-gray-500 px-2 py-1">
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Users;
