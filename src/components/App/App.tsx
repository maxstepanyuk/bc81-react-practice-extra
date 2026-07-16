import { students } from "../../data/data.ts";
import StudentsList from "../StudentsList/StudentsList.tsx";

export default function App() {
  return (
    <>
      <StudentsList students={students} />
    </>
  );
}
