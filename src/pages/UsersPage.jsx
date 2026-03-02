import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import UsersTable from "../components/UsersTable";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  async function loadUsers() {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [users]);

  function handleSelectUser(user) {
    setSelectedUser(user);
  }

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users Dashboard</h2>
      <UsersTable users={users} onSelectUser={handleSelectUser} />
      {selectedUser && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "2px solid black",
            borderRadius: "8px",
          }}
        >
          <h3>User Details</h3>
          <p>
            <strong>Name:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Company:</strong> {selectedUser.company}
          </p>
          <p>
            <strong>City:</strong> {selectedUser.city}
          </p>
          <p>
            <strong>Website:</strong> {selectedUser.website}
          </p>

          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default UsersPage;
