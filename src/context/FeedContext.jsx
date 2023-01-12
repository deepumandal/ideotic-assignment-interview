import React, { createContext, useReducer } from "react";
import { FeedAction } from "./FeedAction";

export const FeedContext = createContext();

const initialState = {
  loading: false,
  error: false,
  bread: [],
  data: [],
  current : []
};

const FeedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FeedAction, initialState);
  return (
    <FeedContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
