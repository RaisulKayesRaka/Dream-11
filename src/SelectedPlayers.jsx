import PropTypes from "prop-types";

export default function SelectedPlayers({
  selectedPlayers,
  handleRemovePlayer,
  handlePlayerStatus
}) {
  return (
    <div className="space-y-6 mt-8 mb-20">
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="border rounded-2xl p-6 flex justify-between items-center"
        >
          <div className="flex items-center gap-6">
            <img
              className="w-20 h-20 object-cover rounded-xl"
              src={player.image}
              alt=""
            />
            <div>
              <h3 className="text-xl font-semibold">{player.name}</h3>
              <p className="opacity-50">{player.role}</p>
              <p>Price: ${player.price}</p>
            </div>
          </div>
          <button onClick={() => handleRemovePlayer(player.id)} className="transition-transform active:scale-95">
            <img src="../src/assets/trash.svg" alt="" />
          </button>
        </div>
      ))}

      <div className="inline-block border rounded-2xl p-1">
        <button onClick={() => handlePlayerStatus("available")} className="bg-[#E7FE29] text-black rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 font-bold transition-transform active:scale-95">
        Add More Player
        </button>
      </div>
    </div>
  );
}

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
  handlePlayerStatus: PropTypes.func
};
