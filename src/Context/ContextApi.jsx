import { createContext, useEffect, useState } from "react";

export const context = createContext();

const favLocal = () => {
  let list = localStorage.getItem("fav");
  if (list) {
    return JSON.parse(localStorage.getItem("fav"));
  } else {
    return [];
  }
};
const dataLocal = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [data, setData] = useState(dataLocal());
  const [favData, setFavData] = useState(favLocal());

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favData));
    localStorage.setItem("data", JSON.stringify(data));
  }, [favData, data]);
  return (
    <context.Provider
      value={{
        data,
        setData,
        favData,
        setFavData,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default AppProvider;
