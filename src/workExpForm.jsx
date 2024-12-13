import { useState } from "react";

export function WorkExpForm(props) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibility1, setResponsibility1] = useState("");
  const [responsibility2, setResponsibility2] = useState("");
  const [responsibility3, setResponsibility3] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.addWorkExp(
      company,
      position,
      startDate,
      endDate,
      responsibility1,
      responsibility2,
      responsibility3
    );

    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setResponsibility1("");
    setResponsibility2("");
    setResponsibility3("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Work Experience</h2>
        <label htmlFor="company">Company Name</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          id="company"
          required
        />
        <label htmlFor="position">Position Title</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          type="text"
          id="position"
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
          required
        />
        <label htmlFor="Responsibilities">Responsibilities</label>
        <input
          value={responsibility1}
          onChange={(e) => setResponsibility1(e.target.value)}
          type="text"
          id="Responsibilities"
          required
        />
        <input
          value={responsibility2}
          onChange={(e) => setResponsibility2(e.target.value)}
          type="text"
          id="Responsibilities"
        />
        <input
          value={responsibility3}
          onChange={(e) => setResponsibility3(e.target.value)}
          type="text"
          id="Responsibilities"
        />
        <button type="submit">ADD</button>
      </form>
  )
}
