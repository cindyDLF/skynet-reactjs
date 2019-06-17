import React, { useContext } from "react";

/// -> hooks
import UserContext from "../hooks/UserContext";

const Form = () => {
  const GENDER = {
    male: "Male",
    female: "Female"
  };

  const { username, setUsername, isUser, gender, setGender } = useContext(
    UserContext
  );
  return (
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-two-fifths form is-centered">
          <div class="field">
            <div class="control">
              <label class="label">Username</label>
              <input
                onChange={e => setUsername(e.target.value)}
                class="input is-medium"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label">Gender</label>
              <div class="select is-medium is-fullwidth">
                <select onChange={e => setGender(e.target.value)}>
                  {Object.keys(GENDER).map((k, index) => (
                    <option
                      key={index}
                      value={GENDER[k]}
                      selected={gender === k}
                    >
                      {GENDER[k]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={
              username !== ""
                ? isUser.onClick
                : () => alert("Please enter a username")
            }
            class="button button-form is-medium is-fullwidth"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
