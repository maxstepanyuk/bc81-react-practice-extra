import { students } from "../../data/data.ts";
import StudentsList from "../StudentsList/StudentsList.tsx";

import { useState } from "react";

import { initialDogs } from "../../data/dogs";
import DogsList from "../DogsList/DogsList";

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);

  return (
    <main>
      <section>
        <DogsList dogs={dogs} />
      </section>

      <hr />

      <section>
        <StudentsList students={students} />
      </section>
    </main>
  );
}
