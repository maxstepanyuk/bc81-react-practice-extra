import { useId } from "react";

interface AddUserFormProps {
  onClose: () => void;
}

export default function AddUserForm({ onClose }: AddUserFormProps) {
  const formId = useId();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("userName") as string;
    const email = formData.get("userEmail") as string;
    console.log({ name, email });
    onClose();
  };

  return (
    <form action={handleSubmit}>
      <label htmlFor={"userName" + formId}>User name:</label>
      <input type="text" name="userName" id={"userName" + formId} />

      <label htmlFor={"userEmail" + formId}>User Email:</label>
      <input type="email" name="userEmail" id={"userEmail" + formId} />

      <button type="submit">Submit user</button>
    </form>
  );
}
