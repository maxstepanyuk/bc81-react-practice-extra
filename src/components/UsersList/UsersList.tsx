import type { User } from "../../types";

interface UserListProps {
  users: User[];
}

export default function UsersList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p> {user.name} </p>
            <p> {user.email} </p>
          </li>
        );
      })}
    </ul>
  );
}
