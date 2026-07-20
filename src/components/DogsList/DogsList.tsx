import type { Dog } from "../../types";
import DogItem from "../DogItem/DogItem";

import css from "./DogsList.module.css";

interface DogsListProps {
  dogs: Dog[];
  handleDeleteDog: (id: number) => void;
  handleToggleFriendly: (id: number) => void;
}

export default function DogsList({
  dogs,
  handleDeleteDog,
  handleToggleFriendly,
}: DogsListProps) {
  return (
    <ul className={css.dogsList}>
      {dogs.map((dog) => (
        <li key={dog.id} className={css.dogItem}>
          <DogItem
            dog={dog}
            handleDeleteDog={handleDeleteDog}
            handleToggleFriendly={handleToggleFriendly}
          />
        </li>
      ))}
    </ul>
  );
}
