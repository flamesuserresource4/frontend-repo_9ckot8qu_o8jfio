function Features() {
  const items = [
    { title: 'Resort-style Clubhouse', desc: 'Wellness center, pool, and lounge spaces designed for everyday indulgence.' },
    { title: 'Thoughtful Architecture', desc: 'Spatial planning inspired by waterfront calm with abundant light and air.' },
    { title: 'Green Spines & Courtyards', desc: 'Landscaped pockets for community gatherings and quiet moments.' },
  ];

  return (
    <section className="relative bg-slate-900 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(700px_300px_at_90%_10%,rgba(167,139,250,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
