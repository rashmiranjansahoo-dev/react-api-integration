function UsersTable({ users }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{user.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;