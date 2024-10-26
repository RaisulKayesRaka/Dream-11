import PropTypes from "prop-types";

export default function AvailablePlayers({ players, handleSelectedPlayers }) {
  return (
    <div className="mb-4 mt-8 grid grid-cols-1 gap-6 sm:mb-8 md:mb-16 md:grid-cols-2 lg:mb-20 lg:grid-cols-3">
      {players.map((player) => (
        <div key={player.id} className="md:-p-5 lg:-p-6 rounded-2xl border p-4">
          <img className="rounded-xl" src={player.image} alt="" />
          <div className="mt-6 flex items-center gap-4">
            <img src="./assets/profile.svg" alt="" />
            <h3 className="text-xl font-semibold">{player.name}</h3>
          </div>
          <div className="my-4 flex items-center justify-between gap-8 truncate text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <img src="./assets/flag.svg" alt="" />
              <p className="opacity-50">{player.country}</p>
            </div>
            <div className="truncate rounded-lg bg-[#1313130D] px-4 py-2">
              <p title={player.role} className="truncate">
                {player.role}
              </p>
            </div>
          </div>
          <hr />
          <div className="mt-4 flex items-center justify-between text-sm sm:text-base">
            <p className="font-semibold">Ratting</p>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm sm:text-base">
            <p>{player.batting}</p>
            <p>{player.bowling}</p>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base">
            <p className="font-semibold">Price: ${player.price}</p>
            <button
              onClick={() => handleSelectedPlayers(player.id)}
              className="rounded-lg border px-4 py-2 transition-transform hover:bg-[#1313130D] active:scale-95"
            >
              Choose Player
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

AvailablePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};
