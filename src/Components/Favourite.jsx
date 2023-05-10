import { useContext } from "react";
import Header from "./Header";
import { context } from "../Context/ContextApi";
import Item from "./Item";
import { Toaster } from "react-hot-toast";

const Favourite = () => {
  const { favData } = useContext(context);
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />

      {favData.length === 0 ? (
        <h1 className="text-xl w-full min-h-[calc(100vh_-_63px)] grid place-content-center">
          No Favourite List
        </h1>
      ) : (
        <div className="container p-4 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favData.map((elem, index) => (
            <Item elem={elem} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Favourite;
