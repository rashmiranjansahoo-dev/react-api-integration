import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import UsersTable from "../components/UsersTable";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users Dashboard</h2>
      <UsersTable users={users} />
    </div>
  );
}

export default UsersPage;