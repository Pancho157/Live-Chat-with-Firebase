import React, { useEffect, useState } from "react";
import { db, auth } from "../../../bbddConnection/BBDDConnection";
import firebase from "firebase/compat/app";
import "./styles/SendMessage.css";
import { BiSend } from "react-icons/bi";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("chatMessages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  return (
    <form onSubmit={sendMessage} className="sendMessage--bar">
      <input
        placeholder="Message..."
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="sendMessage--input"
      />
      <button type="submit" className="sendMessage--sendButton">
        <BiSend />
      </button>
    </form>
  );
}

export default SendMessage;
