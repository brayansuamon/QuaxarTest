import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase/getData";
import styles from "./Contact.module.scss";

const { body_contact, body_form, body_input, body_conc } = styles;

const INITIAL_DATA = {
  first_name: "",
  last_name: "",
  second_last_name: "",
  email: "",
  phone: "",
  message: "",
};
const Contact = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const handler_input = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handler_submit = async (e) => {
    e.preventDefault();
    try {
      //Send Tweet with dynamic ID
      let tweetId = await addDoc(collection(db, "users"), data);
      //Add ID to tweet
      const userSelected = doc(db, "users", tweetId.id);
      await updateDoc(userSelected, { id: tweetId.id });
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
    //Set the state
    setData(INITIAL_DATA);
  };
  return (
    <div className={body_contact}>
      <h1 className={body_conc}>Contact</h1>
      <form onSubmit={handler_submit} className={body_form}>
        <input
          type="text"
          value={data.first_name}
          onChange={handler_input}
          className={body_input}
          placeholder="Name"
          maxLength={20}
          name="first_name"
        />
        <input
          type="text"
          value={data.last_name}
          onChange={handler_input}
          className={body_input}
          placeholder="Last Name"
          maxLength={20}
          name="last_name"
        />
        <input
          type="text"
          value={data.second_last_name}
          onChange={handler_input}
          className={body_input}
          placeholder="Second Last Name"
          maxLength={20}
          name="second_last_name"
        />
        <input
          type="email"
          value={data.email}
          onChange={handler_input}
          className={body_input}
          placeholder="Email"
          maxLength={20}
          name="email"
        />
        <input
          type="text"
          value={data.phone}
          onChange={handler_input}
          className={body_input}
          placeholder="Phone Number"
          maxLength={20}
          name="phone"
        />
        <textarea
          type="text"
          name="message"
          placeholder="Type Something"
          maxLength={200}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              // handler_input
            }
          }}
          value={data.message}
          onChange={handler_input}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
