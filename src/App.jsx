import Banner from "./Banner";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Players from "./Players";

function App() {
  let [claimCredit, setClaimCredit] = useState(0);
  let [playerStatus, setPlayerStatus] = useState({ status: "available" });
  let [players, setPlayers] = useState([]);
  let [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("player-data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);


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

  const handlePlayerStatus = (status) => {
    if (status === "available") {
      setPlayerStatus({ status: "available" });
    }

    if (status === "selected") {
      setPlayerStatus({ status: "selected" });
    }
  };

  const handleSelectedPlayers = (id) => {
    let selected = players.find((player)=>player.id===id);
    setSelectedPlayers([...selectedPlayers, selected])
  };

  const handleRemovePlayer = (id) => {
    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== id));
  };

  return (
    <>
      <ToastContainer />
      <header className="text-[#131313]">
        <Nav claimCredit={claimCredit}></Nav>
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
      </header>
      <main>
        <Players
          players={players}
          playerStatus={playerStatus}
          handlePlayerStatus={handlePlayerStatus}
          handleSelectedPlayers={handleSelectedPlayers}
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
        ></Players>
      </main>
    </>
  );
}

export default App;

App.propTypes = {
  claimCredit: PropTypes.number,
  handleClaimCredit: PropTypes.func,
  playerStatus: PropTypes.object,
};
