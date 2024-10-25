export default function Nav() {
  return (
    <nav className="pt-12 pb-6 sticky top-0 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-[1320px] w-11/12 flex justify-between items-center">
        <img className="w-[72px]" src="../src/assets/logo.svg" alt="" />
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
          <div className="inline-flex gap-2 px-5 py-4 border rounded-xl">
            <p className="font-semibold">
              <span>0</span> Coin
            </p>
            <img src="../src/assets/coin.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
