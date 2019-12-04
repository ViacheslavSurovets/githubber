import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GitContext from "../../context/git/gitContext";

const Users = () => {
  const gitContext = useContext(GitContext);

  const { loading, users } = gitContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};





export default Users;
