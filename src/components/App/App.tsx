import { students } from "../../data/data.ts";
import StudentsList from "../StudentsList/StudentsList.tsx";

import { useState } from "react";

import { initialDogs } from "../../data/dogs";
import DogsList from "../DogsList/DogsList";
import Button from "../Button/Button.tsx";

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);
  const [isDogListVisible, setIsDogListVisible] = useState(false);

  const handleToggleShowDodsClick = () => {
    setIsDogListVisible(!isDogListVisible);
  };

  const deleteDog = (id: number) => {
    const updDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updDogs);
  };

  return (
    <main>
      <section>
        <Button
          type="button"
          textContent={
            isDogListVisible ? "Hide dogs list :(" : "Show dogs list :)"
          }
          handleClick={handleToggleShowDodsClick}
        />
        {isDogListVisible && <DogsList dogs={dogs} handleDeleteDog={deleteDog} />}
      </section>

      <hr />

      <section>
        <StudentsList students={students} />
      </section>
    </main>
  );
}
