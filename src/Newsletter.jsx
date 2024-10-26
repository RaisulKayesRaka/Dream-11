export default function Newsletter() {
  return (
      <section className="relative">
        <section className="absolute top-0 left-0 w-full grid grid-rows-2 h-full -z-10">
            <div className="bg-white row-span-1"></div>
            <div className="bg-black row-span-1"></div>
        </section>
        <section className="max-w-[1320px] mx-auto w-11/12 border border-white rounded-3xl p-6">
        <div className="bg-gradient-to-tr from-cyan-200 via-white to-orange-200 rounded-2xl text-center p-20">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-lg text-[#131313B2] mb-6">Get the latest updates and news right in your inbox!</p>
            <form action="" className="flex items-center justify-center gap-4">
                <input className="max-w-sm w-full border rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4" type="email" placeholder="Enter your email" />
                <button className="bg-gradient-to-br from-red-300 via-amber-300 to-yellow-200 shadow-sm text-black rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 font-bold transition-transform active:scale-95" type="submit">Subscribe</button>
            </form>
        </div>
        </section>
        
      </section>
  );
}
