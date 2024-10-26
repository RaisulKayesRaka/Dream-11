import PropTypes from "prop-types";

export default function SelectedPlayers({
  selectedPlayers,
  handleRemovePlayer,
  handlePlayerStatus,
}) {
  return (
    <div className="mb-4 mt-8 space-y-6 sm:mb-8 md:mb-16 lg:mb-20">
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="md:-p-5 lg:-p-6 flex items-center justify-between rounded-2xl border p-4"
        >
          <div className="flex flex-wrap items-center gap-6">
            <img
              className="h-20 w-20 rounded-xl object-cover"
              src={player.image}
              alt=""
            />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                {player.name}
              </h3>
              <p className="text-sm opacity-50 sm:text-base">{player.role}</p>
              <p className="text-sm sm:text-base">Price: ${player.price}</p>
            </div>
          </div>
          <button
            onClick={() => handleRemovePlayer(player.id)}
            className="transition-transform active:scale-95"
          >
            <img src="../src/assets/trash.svg" alt="" />
          </button>
        </div>
      ))}

      <div className="inline-block rounded-2xl border p-1">
        <button
          onClick={() => handlePlayerStatus("available")}
          className="rounded-xl bg-[#E7FE29] px-3 py-2 font-bold text-black transition-transform active:scale-95 md:px-4 md:py-3 lg:px-5 lg:py-4"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
  handlePlayerStatus: PropTypes.func,
};
