import { students } from "../../data/data.ts";
import StudentsList from "../StudentsList/StudentsList.tsx";

import { useState } from "react";

import { initialDogs } from "../../data/dogs";
import DogsList from "../DogsList/DogsList";
import Button from "../Button/Button.tsx";
import { getUsers } from "../../services/api.ts";
import type { User } from "../../types/index.ts";
import UsersList from "../UsersList/UsersList.tsx";

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);
  const [isDogListVisible, setIsDogListVisible] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleToggleShowDodsClick = () => {
    setIsDogListVisible(!isDogListVisible);
  };
  const deleteDog = (id: number) => {
    const updDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updDogs);
  };

  const showUsers = async () => {
    const usersResponce = await getUsers();
    setUsers(usersResponce);
    console.log(usersResponce);
  };

  return (
    <main>
      <section>
        {users.length > 0 ? (
          <UsersList users={users} />
        ) : (
          <Button
            type="button"
            textContent="Get Users"
            handleClick={showUsers}
          />
        )}
      </section>

      <hr />

      <section>
        <Button
          type="button"
          textContent={
            isDogListVisible ? "Hide dogs list :(" : "Show dogs list :)"
          }
          handleClick={handleToggleShowDodsClick}
        />
        {isDogListVisible && (
          <DogsList dogs={dogs} handleDeleteDog={deleteDog} />
        )}
      </section>

      <hr />

      <section>
        <StudentsList students={students} />
      </section>
    </main>
  );
}
