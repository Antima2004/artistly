export default function Hero() {
  return (
    <section className="bg-background text-foreground text-center py-20 px-4 ">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Book Top Performing Artists, Instantly
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto text-white/80">
        Discover and connect with singers, DJs, dancers, speakers, and more — all in one place.
      </p>
      <a
        href="/artists"
        className="inline-block bg-accent text-black px-6 py-3 font-semibold rounded-lg shadow hover:opacity-90 transition"
      >
        Explore Artists
      </a>
    </section>
  );
}
