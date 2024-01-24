import { Link } from "react-router-dom";
import styles from "./PatientList.module.css";

type Patient = {
  id: string;
  firstName: string;
  lastName: string;
};

export function PatientList({ patientList }: { patientList: Patient[] }) {
  return (
    <div className={styles.wrapper}>
      <Link to="/">Patients</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>view</th>
          </tr>
        </thead>

        <tbody>
          {patientList?.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>
                <Link to={`/patients/${patient.id}`}>view</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
