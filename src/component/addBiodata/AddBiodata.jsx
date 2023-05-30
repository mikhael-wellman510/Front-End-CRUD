import React, { useState } from "react";
import "../../css/style.css";
import { useDispatch } from "react-redux";
import { addBiodata } from "../../action/biodataActions";

const AddBiodata = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBiodata({ name: name, email: email, contact: contact }));
  };
  return (
    <div className="ad1">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Email</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>Contact</p>
          <input value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div>
          <button type="submit">Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddBiodata;
