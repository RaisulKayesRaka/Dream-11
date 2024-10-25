import Banner from "./Banner";
import Nav from "./Nav";
import { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [claimCredit, setClaimCredit] = useState(0);

  const handleClaimCredit = () => {
    toast.success("Credit Added To Your Account", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setClaimCredit(claimCredit + 5000000);
  };

  return (
    <>
      <ToastContainer />
      <header className="text-[#131313]">
        <Nav claimCredit={claimCredit}></Nav>
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
      </header>
    </>
  );
}

export default App;

App.propTypes = {
  claimCredit: PropTypes.number,
  handleClaimCredit: PropTypes.func,
};
