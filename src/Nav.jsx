import PropTypes from "prop-types";

export default function Nav({ claimCredit }) {
  return (
    <nav className="sticky top-0 z-10 bg-white/50 pb-4 pt-4 backdrop-blur-sm sm:pt-8 md:pb-5 md:pt-10 lg:pb-6 lg:pt-12">
      <div className="mx-auto flex w-11/12 max-w-[1320px] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex w-full items-center justify-between gap-12 md:w-auto">
          <img
            className="w-12 md:w-16 lg:w-[72px]"
            src="./assets/logo.svg"
            alt=""
          />
          <button className="md:hidden">
            <img className="w-6" src="./assets/menu.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center gap-12">
          <ul className="hidden items-center gap-12 md:flex">
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
          <div className="inline-flex gap-2 rounded-xl border px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4">
            <p className="font-semibold">
              <span>{claimCredit}</span> Coin
            </p>
            <img src="./assets/coin.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  claimCredit: PropTypes.number,
};
