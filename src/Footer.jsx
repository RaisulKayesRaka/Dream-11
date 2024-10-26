export default function Footer() {
  return (
    <section className="bg-black text-white">
      <div className="w-11/12 max-w-[1320px] mx-auto py-12">
        <div className="flex items-center justify-center mb-12">
          <img className="w-32" src="../src/assets/logo.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:place-items-center md:items-start">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About Us</h3>
            <p className="text-[#FFFFFF99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="text-[#FFFFFF99] space-y-3 list-disc ml-5">
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
            <h3 className="font-semibold text-lg">Subscribe</h3>
            <p className="text-[#FFFFFF99]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form action="" className="flex items-center">
              <input
                className="max-w-sm w-full rounded-s-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="bg-gradient-to-br from-red-300 via-amber-300 to-yellow-200 shadow-sm text-black rounded-e-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 font-bold"
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
        <p className="text-[#FFFFFF99] text-center py-8">
          &copy; 2024 BPL-DREAM 11. All rights reserved.
        </p>
      </div>
    </section>
  );
}
