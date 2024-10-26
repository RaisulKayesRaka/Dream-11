import PropTypes from "prop-types";

export default function AvailablePlayers({ players, handleSelectedPlayers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-4 sm:mb-8 md:mb-16 lg:mb-20">
      {players.map((player) => (
        <div key={player.id} className="border rounded-2xl p-4 md:-p-5 lg:-p-6">
          <img className="rounded-xl" src={player.image} alt="" />
          <div className="flex items-center gap-4 mt-6">
            <img src="../src/assets/profile.svg" alt="" />
            <h3 className="text-xl font-semibold">{player.name}</h3>
          </div>
          <div className="flex items-center justify-between my-4 gap-8 text-sm sm:text-base truncate">
            <div className="flex items-center gap-3">
              <img src="../src/assets/flag.svg" alt="" />
              <p className="opacity-50">{player.country}</p>
            </div>
            <div className="px-4 py-2 bg-[#1313130D] rounded-lg truncate">
              <p title={player.role} className="truncate">{player.role}</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-4 text-sm sm:text-base">
            <p className="font-semibold">Batting</p>
            <p>{player.batting}</p>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm sm:text-base">
            <p className="font-semibold">Bowling</p>
            <p>{player.bowling}</p>
          </div>
          <div className="flex items-center justify-between mt-3 gap-4 text-sm sm:text-base flex-wrap">
            <p className="font-semibold">Price: ${player.price}</p>
            <button onClick={()=>handleSelectedPlayers(player.id)} className="px-4 py-2 rounded-lg border hover:bg-[#1313130D] transition-transform active:scale-95">Choose Player</button>
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
