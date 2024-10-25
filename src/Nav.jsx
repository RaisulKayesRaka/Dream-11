import PropTypes from "prop-types";

export default function Nav({ claimCredit }) {
  return (
    <nav className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-5 lg:pb-6 sticky top-0 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-[1320px] w-11/12 flex justify-between items-center">
        <img
          className="w-12 md:w-16 lg:w-[72px]"
          src="../src/assets/logo.svg"
          alt=""
        />
        <div className="flex items-center gap-12">
          <ul className="hidden md:flex items-center gap-12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
          <div className="inline-flex gap-2 px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4 border rounded-xl">
            <p className="font-semibold">
              <span>{claimCredit}</span> Coin
            </p>
            <img src="../src/assets/coin.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  claimCredit: PropTypes.number,
};
