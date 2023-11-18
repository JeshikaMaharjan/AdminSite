import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "../styles/Doctor.css";
import axios from "axios";
export default function Doctor() {
  const data = [
    {
      id: "1",
      user: "Arun",
      NMC: "1234",
      degree: "MBBS",
    },
    {
      id: "2",
      user: "Arun",
      NMC: "1234",
      degree: "MBBS",
    },
  ];
  async function handleSubmit(e) {
    const relevant = e.target.id;
    console.log(relevant);
    console.log(e.target.value);
    const result = await axios.post("url", relevant);
    console.log(result);
  }
  return (
    <>
      <div className="doctorInner">
        <VerifiedUserIcon />
        <h2>Doctor Relevancy</h2>
      </div>
      <div className="doctorRelevancy">
        <h2>SN</h2>
        <h2>User</h2>
        <h2>Degree</h2>
        <h2>NMC No.</h2>
        <h2>Actions</h2>
        {data.map((doctor, key) => {
          return (
            <>
              <p>{key + 1}</p>
              <p>{doctor.user}</p>
              <p>{doctor.degree}</p>
              <p>{doctor.NMC}</p>

              <div className="doctorRelevancyActions">
                <button id="true" value={doctor.user} onClick={handleSubmit}>
                  Accept
                </button>
                <button id="false" value={doctor.user} onClick={handleSubmit}>
                  Reject
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
