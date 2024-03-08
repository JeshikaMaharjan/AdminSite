import { createContext, useState } from "react";

export const GlobalContext = createContext([{ state: {}, actions: {} }]);

const useStatesAndActions = () => {
  const baseURL = "192.168.101.18:5000";
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const state = {
    baseURL,
    token,
    userName,
    userId,
  };
  const actions = {
    setToken,
    setUserName,
    setUserId,
  };
  return [state, actions];
};

const GlobalContextProvider = ({ children }) => (
  <GlobalContext.Provider value={useStatesAndActions()}>
    {children}
  </GlobalContext.Provider>
);
export default GlobalContextProvider;
