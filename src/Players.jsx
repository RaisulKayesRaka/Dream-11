import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";

export default function Players({
  players,
  playerStatus,
  handlePlayerStatus,
  handleSelectedPlayers,
  selectedPlayers,
  handleRemovePlayer,
}) {
  return (
    <>
      <section className="mx-auto mt-8 w-11/12 max-w-[1320px] md:mt-16 lg:mt-20">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            {playerStatus.status === "available" ? (
              <h1 className="text-xl font-bold md:text-2xl">
                Available Players
              </h1>
            ) : (
              <h1 className="text-xl font-bold md:text-2xl">
                Selected Players (<span>{selectedPlayers.length}</span>/6)
              </h1>
            )}
          </div>
          <div className="rounded-xl border">
            <button
              onClick={() => handlePlayerStatus("available")}
              className={`${
                playerStatus.status === "available"
                  ? "bg-[#E7FE29] font-bold"
                  : ""
              } rounded-s-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4`}
            >
              Available
            </button>
            <button
              onClick={() => handlePlayerStatus("selected")}
              className={`${
                playerStatus.status === "selected"
                  ? "bg-[#E7FE29] font-bold"
                  : ""
              } rounded-e-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4`}
            >
              Selected (<span>{selectedPlayers.length}</span>)
            </button>
          </div>
        </div>
        {playerStatus.status === "available" ? (
          <AvailablePlayers
            players={players}
            handleSelectedPlayers={handleSelectedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            handleRemovePlayer={handleRemovePlayer}
            handlePlayerStatus={handlePlayerStatus}
          ></SelectedPlayers>
        )}
      </section>
    </>
  );
}

Players.propTypes = {
  handlePlayerStatus: PropTypes.func,
  playerStatus: PropTypes.object,
  players: PropTypes.array,
  handleSelectedPlayers: PropTypes.func,
  selectedPlayers: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
};
