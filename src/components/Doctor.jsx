import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "../styles/Doctor.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalStates";
export default function Doctor() {
  const [data, setData] = useState([]);
  const [{ baseURL }] = useContext(GlobalContext);
  async function getData() {
    try {
      const result = await axios.get(`http://${baseURL}/api/unverified/doctor`);
      console.log(result.data.data);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  // const data = [
  //   {
  //     id: "1",
  //     user: "Arun",
  //     NMC: "1234",
  //     degree: "MBBS",
  //   },
  //   {
  //     id: "2",
  //     user: "Arun",
  //     NMC: "1234",
  //     degree: "MBBS",
  //   },
  // ];
  async function handleSubmit(e) {
    const relevant = e.target.id;
    const user = e.target.value;
    const postData = {
      is_verified: Boolean(relevant),
      userName: user,
    };

    console.log(relevant);
    console.log(e.target.value);
    const result = await axios.put(
      `http://${baseURL}/api/verify/doctor`,
      postData
    );
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
              <p>{doctor?.person?.user?.userName}</p>
              <p>{doctor.degree}</p>
              <p>{doctor.NMC}</p>

              <div className="doctorRelevancyActions">
                <button
                  id="true"
                  value={doctor?.person?.user?.userName}
                  onClick={handleSubmit}
                >
                  Accept
                </button>
                <button
                  id="false"
                  value={doctor?.person?.user?.userName}
                  onClick={handleSubmit}
                >
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
