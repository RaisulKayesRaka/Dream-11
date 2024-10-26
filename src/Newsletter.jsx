export default function Newsletter() {
  return (
    <section className="relative">
      <section className="absolute left-0 top-0 -z-10 grid h-full w-full grid-rows-2">
        <div className="row-span-1 bg-white"></div>
        <div className="row-span-1 bg-black"></div>
      </section>
      <section className="mx-auto w-11/12 max-w-[1320px] rounded-3xl border border-white p-4 md:p-5 lg:p-6">
        <div className="rounded-2xl bg-gradient-to-tr from-cyan-200 via-white to-orange-200 p-4 text-center sm:p-8 md:p-16 lg:p-20">
          <h2 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6 text-sm text-[#131313B2] sm:text-base md:text-lg">
            Get the latest updates and news right in your inbox!
          </p>
          <form
            action=""
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <input
              className="w-full max-w-sm rounded-xl border px-3 py-2 text-sm sm:text-base md:px-4 md:py-3 lg:px-5 lg:py-4"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="rounded-xl bg-gradient-to-br from-red-300 via-amber-300 to-yellow-200 px-3 py-2 text-sm font-bold text-black shadow-sm transition-transform active:scale-95 sm:text-base md:px-4 md:py-3 lg:px-5 lg:py-4"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
