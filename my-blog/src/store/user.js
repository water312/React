import React, { createContext, useState, useReducer } from "react";
// import { create} from 'redux'
export const UserContext = createContext();

const initialUser = {
  name: "cho",
  job: "FE-developer",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text }
      
    default:
      break;
  }
};

export default function UserStore(props) {

  const [user, dispatch] = useReducer(userReducer, initialUser);
  
  console.log(user)

  return <UserContext.Provider value={dispatch}>{props.children}</UserContext.Provider>
}

