import type { Student } from "../../types";
import StudentItem from "../StudentItem/StudentItem";

import css from './StudentsList.module.css'

interface StudentsListProps {
  students: Student[];
}

export default function StudentsList({ students }: StudentsListProps) {
  return (
    <ul className={css.studentList}>
      {students.map((stud) => (
        <li key={stud.id} className={css.studentItem}>
          {/* <h2>{stud.name}</h2> */}
          {/* <p>{stud.course}</p> */}

          <StudentItem student={stud}  />
        </li>
      ))}
    </ul>
  );
}
