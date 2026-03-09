 

export default function Dream() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center text-center text-white bg-[url('https://bengaliimages.timesnownews.com/photo/msid-153417927/thumbsize=1054269,153417927.jpg')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Let’s Turn <span className="italic font-serif">Your Dream Trip</span> Into a{" "}
          <span className="italic font-serif">Real Adventure</span>
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          Whether you are planning a solo escape, a romantic getaway, or a group
          expedition — well make sure every detail is effortless and unforgettable.
        </p>

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition flex items-center gap-2 mx-auto">
          Plan My Trip ↗
        </button>
      </div>

    </section>
  );
}