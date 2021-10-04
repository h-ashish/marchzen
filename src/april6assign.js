import { useState, useEffect } from "react";
import axios from "axios";
import hero from "./hero.jpg";
import loaderr from "./loader.gif";
function UserInfo() {
  let [userInfo, setUserInfo] = useState({
    name: "",
    location: "",
    hobbies: [],
    personalInfo: {
      age: "",
      bankacc: "",
      pan: "",
    },
  });
  let [loader, loaderFx] = useState(false);
  let [flag, flagFx] = useState(false);
  let [flag1, flagFx1] = useState(false);
  let [imgFlag, imgFlagFx] = useState(true);

  useEffect(() => {
    loaderFx(true);
    flagFx(false);
    flagFx1(false);
    imgFlagFx(false);
    setTimeout(() => {
      axios
        .get("./userInfo.json")
        .then((res) => {
          //   console.log(res.data);
          setUserInfo(res.data);
          console.log(userInfo);
        })
        .catch((err) => {
          alert("unable to fetch api");
        })
        .finally(() => {
          loaderFx(false);
          flagFx(false);
          flagFx1(false);
          imgFlagFx(true);
        });
    }, 3000);
  }, []);
  let headerArr = ["Age", "Account No.", "Pan No."];
  let bodyArr = [
    userInfo.personalInfo.age,
    userInfo.personalInfo.bankacc,
    userInfo.personalInfo.pan,
  ];

  let hobbiesArr = userInfo.hobbies;

  return (
    <div>
      {loader ? <img src={loaderr} /> : ""}
      <button
        onClick={() => {
          flagFx(true);
        }}
      >
        Show Personal Info
      </button>
      <br />
      <button
        onClick={() => {
          flagFx(false);
        }}
      >
        Hide Personal Details
      </button>
      <br />
      <table>
        {flag
          ? headerArr.map((val, i) => {
              return (
                <div>
                  <th>{val}</th>
                </div>
              );
            })
          : ""}
        <br />
        <hr />
        {flag
          ? bodyArr.map((val, i) => {
              return (
                <div>
                  <td>{val}</td>
                </div>
              );
            })
          : ""}
      </table>
      <button
        onClick={() => {
          flagFx1(true);
        }}
      >
        Show Hobbies
      </button>
      <button
        onClick={() => {
          flagFx1(false);
        }}
      >
        Hide Hobbies
      </button>
      <br />
      <ol>
        {flag1
          ? hobbiesArr.map((val, i) => {
              return <li>{val}</li>;
            })
          : ""}
      </ol>

      <button
        onClick={() => {
          imgFlagFx(true);
        }}
      >
        Show Image
      </button>

      <button
        onClick={() => {
          imgFlagFx(false);
        }}
      >
        Hide Image
      </button>
      <br />

      {imgFlag ? <img src={hero} /> : ""}
    </div>
  );
}
export { UserInfo };