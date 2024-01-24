import { Link } from "react-router-dom";

import { calculateAge } from "src/utils/calculateAge";
import { usePatientDetails } from "./hooks";

import styles from "./PatientDetails.module.css";

export function PatientDetails() {
  const { data, isLoading, error } = usePatientDetails();

  if (isLoading) return <div>loading ...</div>;
  if (error) return <div>errors occured</div>;

  return (
    <div className={styles.wrapper}>
      <span>
        <Link to="/">Patients</Link> &gt;
        {data.firstName} {data.lastName}
      </span>
      <ul>
        <li>Patient ID: {data.id}</li>
        <li>First name: {data.firstName}</li>
        <li>Last name: {data.lastName}</li>
        <li>Gender: {data.sex}</li>
        <li>
          Age: {data?.birthDate && calculateAge(data.birthDate)} years old
        </li>
      </ul>
    </div>
  );
}
