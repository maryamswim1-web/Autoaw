import { createFileRoute, Link } from "@tanstack/react-router";

function LogoMark() {
  return (
    <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
      <div className="w-7 h-7 rounded-lg bg-background/95 ring-1 ring-white/10" />
    </div>
  );
}

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Atlas Autoware" },
      { name: "description", content: "Support Atlas Autoware — a student-led autonomous vehicle team. Donate or become a sponsor." },
      { property: "og:title", content: "Atlas Autoware" },
      { property: "og:description", content: "Help keep our autonomous vehicle team running." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const tiers = [
    { name: "Bronze", amount: "$100+", perks: "Logo on our site & thank-you on socials.", classes: "border-amber-600/30 bg-amber-600/5", text: "text-amber-600" },
    { name: "Silver", amount: "$500+", perks: "Bronze perks + logo on the car & event banners.", classes: "border-slate-300/30 bg-slate-300/5", text: "text-slate-300" },
    { name: "Gold", amount: "$1,000+", perks: "Silver perks + naming a project & lab visits.", classes: "border-yellow-400/30 bg-yellow-400/5", text: "text-yellow-400" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">← Atlas Autoware</Link>
          <a href="mailto:contact@atlasautoware.org" className="text-sm text-muted-foreground hover:text-foreground">contact@atlasautoware.org</a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-6 h-px bg-brand" />
            Support the team
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Help keep Atlas Autoware rolling.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            We're a 501(c)(3) nonprofit run by high school students. Every donation goes directly toward
            sensors, compute, spare parts, and getting to competitions. Contributions are tax-deductible
            (EIN 88-3747265).
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="mailto:contact@atlasautoware.org?subject=Donation" className="btn-donate">
              Donate now 🤍
            </a>
            <a href="mailto:contact@atlasautoware.org?subject=Sponsorship" className="btn-ghost">
              Become a sponsor
            </a>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border-2 p-6 ${t.classes}`}
            >
              <div className={`text-sm font-semibold uppercase tracking-widest ${t.text}`}>
                {t.name}
              </div>
              <div className="mt-3 text-3xl font-semibold">{t.amount}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.perks}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 p-8 text-center">
          <div className="font-semibold">Reach out</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Email{" "}
            <a href="mailto:contact@atlasautoware.org" className="text-brand-glow underline underline-offset-4">
              contact@atlasautoware.org
            </a>{" "}
            and we'll send donation instructions and a sponsorship packet.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3 flex-wrap">
              <LogoMark />
              <span className="text-lg font-semibold tracking-tight">Atlas Autoware</span>
              <span className="text-sm text-muted-foreground">· Built by students</span>
            </div>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              A student-led autonomous vehicle team based in Northern Virginia, composed of students from TJHSST. We design, build, and program our self-driving car from the ground up.
            </p>
          </div>
          <div className="flex flex-col md:items-center gap-4 text-center">
            <div className="text-foreground">
              <div className="text-lg font-semibold tracking-tight">Explore</div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-base text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span className="text-white/20">·</span>
                <Link to="/the-car" className="hover:text-foreground transition-colors">The Car</Link>
                <span className="text-white/20">·</span>
                <Link to="/sponsors" className="hover:text-foreground transition-colors">Support</Link>
              </div>
              <a href="mailto:contact@atlasautoware.org" className="mt-3 block text-base text-muted-foreground hover:text-foreground transition-colors">contact@atlasautoware.org</a>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a href="https://www.instagram.com/atlasautoware/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://github.com/AtlasAutoware" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.36 22.9c.58.1.79-.25.79-.55v-2c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.32 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.15v3.19c0 .3.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              </a>
              <a href="mailto:contact@atlasautoware.org" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-32 h-px bg-white/10" />
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Atlas Autoware · 501(c)(3) nonprofit · EIN 88-3747265
        </div>
      </div>
    </footer>
  );
}
