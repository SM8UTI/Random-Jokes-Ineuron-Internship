import { Toaster } from "react-hot-toast";
import Header from "./Components/Header";
import History from "./Components/History";
import Mainbody from "./Components/Mainbody";

const App = () => {
  return (
    <>
      <Header />
      <Mainbody />
      <History />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{ fontSize: "14px" }}
      />
    </>
  );
};

export default App;
