import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-white/80 backdrop-blur-md">
          Azven Realty
        </span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-xl">
          The Cove
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/85">
          Waterfront-inspired residences crafted for serenity and connection. Discover modern living with resort-style amenities in the heart of Bengaluru.
        </p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition shadow-lg">
          Enquire Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
