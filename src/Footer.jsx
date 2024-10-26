export default function Footer() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-11/12 max-w-[1320px] py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="mb-6 flex items-center justify-center sm:mb-8 md:mb-10 lg:mb-12">
          <img className="w-32" src="./assets/logo.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:place-items-center md:items-start md:gap-10 lg:grid-cols-3 lg:gap-20">
          <div className="space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">About Us</h3>
            <p className="text-sm text-[#FFFFFF99] sm:text-base">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">Quick Links</h3>
            <ul className="ml-5 list-disc space-y-3 text-sm text-[#FFFFFF99] sm:text-base">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">Subscribe</h3>
            <p className="text-sm text-[#FFFFFF99] sm:text-base">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form action="" className="flex items-center">
              <input
                className="w-full max-w-sm rounded-s-xl px-3 py-2 text-sm sm:text-base md:px-4 md:py-3 lg:px-5 lg:py-4"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="rounded-e-xl bg-gradient-to-br from-red-300 via-amber-300 to-yellow-200 px-3 py-2 text-sm font-bold text-black shadow-sm sm:text-base md:px-4 md:py-3 lg:px-5 lg:py-4"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="border border-gray-800" />
      <div>
        <p className="py-4 text-center text-sm text-[#FFFFFF99] sm:text-base md:py-6 lg:py-8">
          &copy; 2024 BPL-DREAM 11. All rights reserved.
        </p>
      </div>
    </section>
  );
}
