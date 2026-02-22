import { useEffect, useState } from "react";
import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../services/userService.js";
import UserForm from "../components/UserForm.jsx";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  // Holds the user currently being edited
  const [editUser, setEditUser] = useState(null);

  // 1️⃣ FETCH USERS (GET)
  const fetchUsers = async () => {
    setErrors(null);
    setLoading(true);
    try {
      const { data } = await getUser();
      setUsers(data);
    } catch (err) {
      setErrors("Error while fetching data...");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2️⃣ ADD USER (POST)
  const handleAddUser = async (user) => {
    const { data } = await createUser(user);

    // We append the newly created user to existing state
    // This avoids re-fetching all users again
    setUsers((prev) => [...prev, data]);
  };

  // 3️⃣ DELETE USER (DELETE)
  const handleDeleteUser = async (id) => {
    await deleteUser(id);

    // Remove deleted user from UI using filter
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // 4️⃣ START EDIT MODE
  const handleEditUser = (user) => {
    // Store selected user in state
    // This will prefill the form
    setEditUser(user);
  };

  // 5️⃣ UPDATE USER (PUT)
  const handleUpdateUser = async (updatedUser) => {
    const { data } = await updateUser(editUser.id, updatedUser);

    // Replace the updated user inside users list
    setUsers((prev) =>
      prev.map((u) => (u.id === editUser.id ? data : u))
    );

    // Exit edit mode
    setEditUser(null);
  };

  if (errors) return <h1>{errors}</h1>;
  if (loading) return <h1>Data is Loading...</h1>;

  return (
    <div className="w-full container m-auto py-7">
      {/* 
        UserForm handles BOTH add & update
        Behavior changes based on editUser
      */}
      <UserForm
        onAdd={handleAddUser}
        onUpdate={handleUpdateUser}
        editUser={editUser}
      />

      <h2>User List</h2>

      <div className="w-full flex flex-wrap gap-2">
        {users.map((user) => (
          <div key={user.id} className="w-[360px] bg-gray-500 px-2 py-1">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>

            <button
              onClick={() => handleEditUser(user)}
              className="bg-yellow-500 text-white px-2 py-1 rounded-md ml-2"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;