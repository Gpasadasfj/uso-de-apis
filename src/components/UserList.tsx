import type { UserListProps } from "../models/User.model";

export default function UserList({ users }: UserListProps) {
  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <span style={{ fontWeight: "bold" }}>Nombre:</span> {user.name}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Email:</span> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
