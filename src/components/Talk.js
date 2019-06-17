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
  const handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);

    addResponseMessage("hello");
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
