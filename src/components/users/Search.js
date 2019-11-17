import React, { useState, useContext } from "react";
import GitContext from "../../context/git/gitContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const gitContext = useContext(GitContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please write something...", "light");
    } else {
      gitContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search for ViacheslavSurovets or someone else..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {gitContext.users.length > 0  && (
        <button className="btn btn-light btn-block" onClick={gitContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

