import PropTypes from "prop-types";

export default function SelectedPlayers({
  selectedPlayers,
  handleRemovePlayer,
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
          <button onClick={() => handleRemovePlayer(player.id)}>
            <img src="../src/assets/trash.svg" alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
};
