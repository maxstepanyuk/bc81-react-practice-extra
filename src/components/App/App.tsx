import { students } from "../../data/data.ts";
import Student from "../Student/Student.tsx";

const student = students[0];

export default function App() {
  return (
    <>
      <Student student={student} />
    </>
  );
}
