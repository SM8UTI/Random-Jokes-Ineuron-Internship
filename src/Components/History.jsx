import { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { context } from "../Context/ContextApi";
import Item from "./Item";

const History = () => {
  const { data } = useContext(context);
  return (
    <section className="p-4 flex flex-col gap-4 max-w-[1300px] mx-auto">
      <div className="flex flex-row items-center gap-2">
        <FaHistory />
        <h1 className="text-xl">History</h1>
      </div>
      {data.length === 0 ? (
        <h1 className="text-2xl text-center grid place-content-center min-h-[calc(100vh_-_62px_-_400px)]">
          No data
        </h1>
      ) : (
        ""
      )}
      <div className="container w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
        {data.map((elem, index) => (
          <Item elem={elem} key={index} />
        ))}
      </div>
    </section>
  );
};

export default History;
