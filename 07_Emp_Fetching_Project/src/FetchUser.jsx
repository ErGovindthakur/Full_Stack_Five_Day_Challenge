import { useEffect, useState } from "react";
import axios from "axios";

const FetchUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setError(null);
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (err) {
      setError("Error while fetching data...");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <p>Data is loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full flex flex-wrap gap-5 container mx-auto my-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-80 px-2 py-2 rounded-md shadow-md shadow-gray-300"
        >
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchUser;