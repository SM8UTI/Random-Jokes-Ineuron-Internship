import { useContext, useState } from "react";
import { context } from "../Context/ContextApi";
import axios from "axios";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { toast } from "react-hot-toast";

const Mainbody = () => {
  const { data, setData, favData, setFavData } = useContext(context);
  const [oneData, setOneData] = useState();

  const joke = () => {
    if (oneData !== undefined) {
      setData([...data, oneData]);
    }
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setOneData(res.data);
    });
    console.log(data, "sucess");
  };

  return (
    <section className="p-4 py-8 bg-yellow-400 min-h-[300px] grid place-content-center">
      <div className="container flex flex-col text-center gap-8 max-w-[1300px] mx-auto">
        <div className="text font-medium text-base max-w-[600px] mx-auto">
          <p>
            {oneData !== undefined
              ? oneData.value
              : "Click New Joke Button for Random Joke😅"}
          </p>
        </div>
        <div className="flex flex-row gap-2 max-w-full mx-auto">
          <button
            className="px-6 py-2 bg-neutral-50 max-w-full rounded-full hover:opacity-90 transition-all ease-in-out duration-300"
            onClick={joke}
          >
            New Joke
          </button>
          {favData.includes(oneData) ? (
            <div
              className="w-[40px] aspect-square grid place-content-center bg-neutral-100 text-xl rounded-full cursor-pointer text-pink-500"
              onClick={() => {
                setFavData(favData.filter((e) => e.id !== oneData.id));
                toast.error("Removed");
              }}
            >
              <MdOutlineFavorite />
            </div>
          ) : (
            <div
              className="w-[40px] aspect-square grid place-content-center bg-neutral-100 text-xl rounded-full cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-300"
              onClick={() => {
                setFavData([...favData, oneData]);
                toast.success("Successfully Added!💙");
              }}
            >
              <MdOutlineFavoriteBorder />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mainbody;
