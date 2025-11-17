function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section className="bg-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Life at The Cove</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt="The Cove" className="w-full h-56 md:h-64 object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
