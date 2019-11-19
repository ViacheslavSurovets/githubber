import React, { useReducer, useEffect } from "react";
import GitReducer from "./gitReducer";
import GitContext from "./gitContext";
import {getUsers, getDefaultUsers} from '../../gitService'

import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_DEFAULT_USERS
} from "../types";



const GitHubberState = props => {
  const initialState = {
    users: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitReducer, initialState);

  //Search Users
  const searchUsers = async text => {
    setLoading();
    const res = await getUsers (text)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // default users
  useEffect(() => {
    setLoading();
    async function resData() {
      const res = await getDefaultUsers();
       dispatch({
        type: SET_DEFAULT_USERS,
        payload: res.data
      });
      
    }
    resData();
  }, []);

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set alert
/*    const setAlertMsg = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  }; */

  //{props.children} - all tags which will be included between <GitContext.Provider>here</GitContext.Provider> will wrap render in app.js

  return (
    <GitContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
      }}
    >
      {props.children}
    </GitContext.Provider>
  );
};

export default GitHubberState;
