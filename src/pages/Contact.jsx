import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (name === "") {
      alert("Enter Name");
      return;
    }

    alert("Submitted");

  };

  return (

    <form className="container mt-5" onSubmit={submit}>

      <input
        className="form-control"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn btn-success mt-3">
        Submit
      </button>

    </form>

  );
}