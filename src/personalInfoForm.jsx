import { useState } from "react";

export function PersonalInfoForm(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const personalInfoForm = document.getElementById("personalInfoForm");

    props.addName(name, email, tel);

    setName("");
    setEmail("");
    setTel("");

    if (personalInfoForm.style.display === "none") {
        personalInfoForm.style.display = "block";
    } else {
        personalInfoForm.style.display = "none";
    }
  }

  return (
    <form onSubmit={handleSubmit} id="personalInfoForm">
      <h2>Personal Info</h2>
      <label htmlFor="name">Full Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        required
      />
      <label htmlFor="tel">Phone Number</label>
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        type="tel"
        id="tel"
        required
      />
      <button type="submit">ADD</button>
    </form>
  );
}
