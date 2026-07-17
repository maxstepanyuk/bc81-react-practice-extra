import type { Address } from "../../types";

interface AddressInfoProps {
  address: Address;
}

export default function AddressInfo({ address }: AddressInfoProps) {
  return (
    <>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
      <p>Country: {address.country}</p>
    </>
  );
}
