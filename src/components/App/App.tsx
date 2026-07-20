import { students } from "../../data/data.ts";
import StudentsList from "../StudentsList/StudentsList.tsx";

import { useState } from "react";

import { initialDogs } from "../../data/dogs";
import DogsList from "../DogsList/DogsList";
import Button from "../Button/Button.tsx";
import { getUsers } from "../../services/api.ts";
import type { User } from "../../types/index.ts";
import UsersList from "../UsersList/UsersList.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import AddUserForm from "../AddUserForm/AddUserForm.tsx";

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);
  const [isDogListVisible, setIsDogListVisible] = useState(false);

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormShown, getIsFormShown] = useState(false);

  const handleToggleShowDodsClick = () => {
    setIsDogListVisible(!isDogListVisible);
  };
  const deleteDog = (id: number) => {
    const updDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updDogs);
  };
  const toggleFriendly = (id: number) => {
    const updDogs = dogs.map((dog) => {
      if (dog.id === id) {
        return {
          ...dog,
          isFriendly: !dog.isFriendly,
        };
      }
      return dog;
    });

    setDogs(updDogs);
  };

  const showUsers = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const showForm = () => {
    getIsFormShown(true);
  };
  const closeForm = () => {
    getIsFormShown(false);
  };

  return (
    <main>
      <section>
        {users.length > 0 ? (
          <>
            <UsersList users={users} />
            {isFormShown ? (
              <AddUserForm onClose={closeForm} />
            ) : (
              <Button
                type="button"
                textContent="Add user"
                handleClick={showForm}
              />
            )}
          </>
        ) : (
          <Button
            type="button"
            textContent="Get Users"
            handleClick={showUsers}
          />
        )}
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
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
          <DogsList
            dogs={dogs}
            handleDeleteDog={deleteDog}
            handleToggleFriendly={toggleFriendly}
          />
        )}
      </section>

      <hr />

      <section>
        <StudentsList students={students} />
      </section>
    </main>
  );
}
