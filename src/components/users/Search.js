import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GitContext from "../../context/git/gitContext";

const Search = ({ setAlertMsg }) => {
  const gitContext = useContext(GitContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      setAlertMsg("Please write something...", "light");
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

Search.propTypes = {
  setAlertMsg: PropTypes.func.isRequired
};
