import { useEffect, useState } from "react";

const UserForm = ({ onAdd, onUpdate, editUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // 🔁 Prefill form when editUser changes
  useEffect(() => {
    if (editUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser({
        name: editUser.name,
        email: editUser.email,
      });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error immediately
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newError = {};
    if (!user.name) newError.name = "Name is required";
    if (!user.email) newError.email = "Email is required";

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // If editUser exists → UPDATE
    // Otherwise → ADD
    editUser ? onUpdate(user) : onAdd(user);

    // Reset form after submit
    setUser({ name: "", email: "" });
  };

  return (
    <div className="w-[270px] bg-gray-500 rounded-md shadow-md flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 px-12 py-2">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          {editUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;