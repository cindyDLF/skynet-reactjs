import React, { useContext, useEffect } from "react";
//// -> lib chat
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
// -> hooks
import UserContext from "../hooks/UserContext";
import usePic from "../hooks/usePic";
//// -> img
import bot from "../assets/img/walle.jpg";
import woman from "../assets/img/woman.png";
import man from "../assets/img/man.png";

const BASE_URL = "http://localhost:3000/";

const Talk = () => {
  const { username, gender } = useContext(UserContext);
  const pic = usePic(gender === "female" ? woman : man);

  useEffect(
    () => {
      toggleWidget();
      addResponseMessage(`Hello ${username}, what do you want to know ?`);
      // Update the document title using the browser AP
    },
    [username]
  );

  const handleNewUserMessage = async newMessage => {
    console.log(`New message incomig! ${newMessage}`);

    try {
      const res = await fetch(`${BASE_URL}talk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: newMessage })
      }).then(res => res.json());

      console.log(res);
      addResponseMessage(res.res);
    } catch (err) {
      console.log(err);
    }

    // Now send the message throught the backend API
  };

  return (
    <div>
      <div class="container is-fluid">
        <div class="columns is-centered">
          <div class="columns">
            <Widget
              handleNewUserMessage={handleNewUserMessage}
              profileAvatar={bot}
              title={`Welcome to the chat ${username} !`}
              subtitle=""
              titleAvatar={pic.value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
