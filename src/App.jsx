import "./App.css";
import { useState } from "react";
import { EductationForm } from "./educationForm.jsx";
import { WorkExpForm } from "./workExpForm.jsx";
import { PersonalInfoForm } from "./personalInfoForm.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [schoolInfo, setSchoolInfo] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  function addName(name, email, tel) {
    setPersonalInfo((currentPersonalInfo) => {
      return [
        ...currentPersonalInfo,
        {
          id: crypto.randomUUID(),
          name: name,
          email: email,
          tel: tel,
        },
      ];
    });
  }

  function addSchoolInfo(schoolName, studyTitle, startDate, endDate) {
    setSchoolInfo((currentSchoolInfo) => {
      return [
        ...currentSchoolInfo,
        {
          id: crypto.randomUUID(),
          name: schoolName,
          title: studyTitle,
          start: startDate,
          end: endDate,
        },
      ];
    });
  }

  function addWorkExp(
    company,
    position,
    startDate,
    endDate,
    responsibility1,
    responsibility2,
    responsibility3
  ) {
    setWorkExp((currentWorkExp) => {
      return [
        ...currentWorkExp,
        {
          id: crypto.randomUUID(),
          company: company,
          position: position,
          start: startDate,
          end: endDate,
          responsibility1: responsibility1,
          responsibility2: responsibility2,
          responsibility3: responsibility3,
        },
      ];
    });
  }

  return (
    <>
      <h1>Resume Builder</h1>
      <PersonalInfoForm addName={addName} />
      <EductationForm addSchoolInfo={addSchoolInfo} />
      <WorkExpForm addWorkExp={addWorkExp} />
      <div className="preview">
        {personalInfo.map((info) => {
          return (
            <div key={info.id}>
              <h3>{info.name}</h3>
              <p>{info.email}</p>
              <p>{info.tel}</p>
              <button>EDIT</button>
            </div>
          );
        })}
        <div>
          <h3>eductation</h3>
          {schoolInfo.map((school) => {
            return (
              <div key={school.id}>
                <h4>{school.name}</h4>
                <p>{school.title}</p>
                <p>From: {school.start}</p>
                <p>Till: {school.end}</p>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
        <div>
          <h3>work exp</h3>
          {workExp.map((exp) => {
            return (
              <div key={exp.id}>
                <h4>{exp.company}</h4>
                <p>{exp.position}</p>
                <p>From: {exp.start}</p>
                <p>Till: {exp.end}</p>
                <ul>
                  <li>{exp.responsibility1}</li>
                  <li>{exp.responsibility2}</li>
                  <li>{exp.responsibility3}</li>
                </ul>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
