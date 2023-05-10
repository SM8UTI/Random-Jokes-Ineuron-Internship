import { useContext } from "react";
import { context } from "../Context/ContextApi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { toast } from "react-hot-toast";

import { motion as m } from "framer-motion";

const Item = ({ elem }) => {
  const { favData, setFavData } = useContext(context);
  return (
    <m.div
      initial={{ opacity: 0, translateY: "30px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="item text-sm font-medium p-4 rounded-lg bg-blue-200 flex flex-col gap-6 w-full justify-between min-h-[250px]"
    >
      <p>{elem.value}</p>
      <div className="flex flex-row items-center justify-between">
        {favData.includes(elem) ? (
          <div
            className="w-[40px] aspect-square grid place-content-center bg-neutral-100 text-xl rounded-full cursor-pointer text-pink-500"
            onClick={() => {
              setFavData(favData.filter((e) => e.id !== elem.id));
              toast.error("Removed");
            }}
          >
            <MdOutlineFavorite />
          </div>
        ) : (
          <div
            className="w-[40px] aspect-square grid place-content-center bg-neutral-100 text-xl rounded-full cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-300"
            onClick={() => {
              setFavData([...favData, elem]);
              toast.success("Successfully Added!💙");
            }}
          >
            <MdOutlineFavoriteBorder />
          </div>
        )}

        <span>Created Date : {elem.created_at.slice(0, 10)}</span>
      </div>
    </m.div>
  );
};

export default Item;
