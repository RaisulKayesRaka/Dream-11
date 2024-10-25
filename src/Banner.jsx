import PropTypes from "prop-types";

export default function Banner({ handleClaimCredit }) {
  return (
    <div
      className="mx-auto max-w-[1320px] w-11/12 bg-black rounded-3xl text-white bg-[url('..\src\assets\bg-shadow.png')]
 bg-cover bg-no-repeat bg-center"
    >
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
        <img className="mb-6" src="../src/assets/banner-main.png" alt="" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="md:text-lg lg:text-xl mb-6 text-center">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border rounded-2xl border-[#E7FE29] p-1">
          <button
            onClick={handleClaimCredit}
            className="bg-[#E7FE29] text-black rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 font-bold transition-transform active:scale-95"
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
