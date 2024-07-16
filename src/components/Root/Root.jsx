import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ToastContainer />
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
