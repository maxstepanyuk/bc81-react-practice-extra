import type { Dog } from "../../types";
import DogItem from "../DogItem/DogItem";

import css from './DogsList.module.css'

interface DogsListProps {
  dogs: Dog[];
}

export default function DogsList({ dogs }: DogsListProps) {
  return (
    <ul className={css.dogsList}>
      {dogs.map((dog) => (
        <li key={dog.id} className={css.dogItem}>
          <DogItem dog={dog} />
        </li>
      ))}
    </ul>
  );
}
