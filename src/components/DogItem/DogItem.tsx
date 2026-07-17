import { useState } from "react";
import type { Dog } from "../../types";
import Button from "../Button/Button";
import AddressInfo from "../AddressInfo/AddressInfo";

interface DogItemProps {
  dog: Dog;
  handleDeleteDog: (id: number) => void;
}

export default function DogItem({ dog, handleDeleteDog }: DogItemProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const showAddress = () => {
    setIsAddressVisible(true);
  };

  const onDelte = () => {
    handleDeleteDog(dog.id);
  };

  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>

      <Button type="button" textContent="Delete dog" handleClick={onDelte} />

      {isAddressVisible ? (
        <AddressInfo address={dog.address} />
      ) : (
        <Button
          type="button"
          textContent="Show address"
          handleClick={showAddress}
        />
      )}
    </>
  );
}
