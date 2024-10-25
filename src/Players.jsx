import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";

export default function Players({players, playerStatus, handlePlayerStatus }) {
  return (
    <>
      <section className="mx-auto max-w-[1320px] w-11/12 mt-20">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
          <div>
            {playerStatus.status === "available" ? (
              <h1 className="text-xl md:text-2xl font-bold">
                Available Players
              </h1>
            ) : (
              <h1 className="text-xl md:text-2xl font-bold">
                Selected Players (<span>0</span>/6)
              </h1>
            )}
          </div>
          <div className="border rounded-xl">
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
              Selected (<span>0</span>)
            </button>
          </div>
        </div>
        {playerStatus.status === "available" ? (
          <AvailablePlayers players={players}></AvailablePlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </section>
    </>
  );
}

Players.propTypes = {
  handlePlayerStatus: PropTypes.func,
  playerStatus: PropTypes.object,
  players: PropTypes.array,
};
