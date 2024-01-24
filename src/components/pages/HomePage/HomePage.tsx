import { Link } from "react-router-dom";
import { PatientList } from "./PatientList/PatientList";
import { usePatientList } from "./hooks";

export function HomePage() {
  const { isLoading, data, error } = usePatientList();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error occured</div>;
  }
  if (data && data.content) {
    return <PatientList patientList={data.content} />;
  }
}
