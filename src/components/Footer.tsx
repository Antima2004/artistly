import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-white border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🎭 Artistly</h2>
          <p className="text-sm text-white/70">
            A fictional platform to connect event planners with top performing artists.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/artists" className="hover:text-accent">Browse Artists</Link></li>
            <li><Link href="/onboard" className="hover:text-accent">Onboard as Artist</Link></li>
            <li><Link href="/dashboard" className="hover:text-accent">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-white/70">
            📧 artistly.support@example.com <br />
            🌐 www.artistly.com
          </p>
        </div>
      </div>

      

      <div className="text-center text-white/50 text-sm border-t border-white/10 py-4">
        &copy; {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}
