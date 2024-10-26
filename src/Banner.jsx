import PropTypes from "prop-types";

export default function Banner({ handleClaimCredit }) {
  return (
    <div className="mx-auto w-11/12 max-w-[1320px] rounded-3xl bg-black bg-[url('..\\src\\assets\\bg-shadow.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
        <img className="mb-6" src="../src/assets/banner-main.png" alt="" />
        <h1 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="mb-6 text-center md:text-lg lg:text-xl">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="rounded-2xl border border-[#E7FE29] p-1">
          <button
            onClick={handleClaimCredit}
            className="rounded-xl bg-[#E7FE29] px-3 py-2 font-bold text-black transition-transform active:scale-95 md:px-4 md:py-3 lg:px-5 lg:py-4"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  handleClaimCredit: PropTypes.func,
};
