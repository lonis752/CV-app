import { useState } from "react";

export function EductationForm(props) {

  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.addSchoolInfo(schoolName, studyTitle, startDate, endDate);

    setSchoolName("");
    setStudyTitle("");
    setStartDate("");
    setEndDate("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Education</h2>
      <label htmlFor="schoolName">School Name</label>
      <input
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        type="text"
        id="schoolName"
        required
      />
      <label htmlFor="studies">Title of Studies</label>
      <input
        value={studyTitle}
        onChange={(e) => setStudyTitle(e.target.value)}
        type="text"
        id="studies"
        required
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
        id="startDate"
        required
      />
      <label htmlFor="endDate">End Date</label>
      <input
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        type="date"
        id="endDate"
      />
      <button type="submit">ADD</button>
    </form>
  );
}
