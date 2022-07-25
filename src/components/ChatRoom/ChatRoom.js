import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../../bbddConnection/BBDDConnection";
import SendMessage from "../SendMessage/SendMessage";
import SignOut from "../SignOut/SignOut";
import "./styles/ChatRoom.css";

function ChatRoom() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("chatMessages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        // Trae los mensajes de la BBDD, Los ordena por su fecha de creación, Limita la cantidad que trae, Actualiza cuando hay cambios en la colección de la BBDD, Guarda la información en varios objetos
      });
  }, []);

  return (
    <div className="chat--mainContainer">
      <div className="chat--header">
        <div></div>
        <div></div>
        <h2>Chat Grupal</h2>
        <SignOut />
      </div>
      <div className="messages">
        {messages.map(
          ({ id, text, photoURL, uid, displayName, creationTime }) => (
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <p>
                <strong>{displayName}</strong>
              </p>
              <img className="msg--img" src={photoURL} alt="User" />
              <p className="msg--text">{text}</p>
              <p>{creationTime}</p>
            </div>
          )
        )}
        <div ref={scroll}></div>
      </div>
      <SendMessage scroll={scroll} />
    </div>
  );
}

export default ChatRoom;
