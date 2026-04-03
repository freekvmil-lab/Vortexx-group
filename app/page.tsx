import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import FlipServiceCard from "./components/FlipServiceCard";

export default function VortexxHomepage() {
  const services = [
    {
      title: "Wifi",
      text: "Stabiel draadloos netwerk door de hele woning of bedrijfsruimte. Van losse access points tot volledige mesh-oplossingen.",
    },
    {
      title: "Automatisering",
      text: "Slimme bediening van verlichting, klimaat, zonwering en andere installaties.",
    },
    {
      title: "Elektra renovatie",
      text: "Oude installaties vernieuwen, uitbreiden of opnieuw opbouwen met een nette afwerking.",
    },
    {
      title: "Verlichting",
      text: "Van basisverlichting tot slimme dimbare oplossingen met sfeer en controle.",
    },
    {
      title: "Maatwerk",
      text: "Geen standaard situatie? Dan denken we mee in een oplossing die past bij jouw woning of project.",
    },
    {
      title: "Advies en uitvoering",
      text: "Niet alleen een plan, maar ook een nette realisatie van begin tot eind.",
    },
  ];

  const reasons = [
    "Duidelijk advies",
    "Netjes afgewerkt",
    "Slimme oplossingen",
    "Korte lijnen",
    "Klaar voor later",
  ];

  const steps = [
    {
      number: "01",
      title: "Aanvraag",
      text: "Je laat weten wat je zoekt of waar je tegenaan loopt.",
    },
    {
      number: "02",
      title: "Afstemming",
      text: "We kijken samen naar de situatie en denken mee over de slimste aanpak.",
    },
    {
      number: "03",
      title: "Uitvoering",
      text: "We voeren het werk netjes, duidelijk en praktisch uit.",
    },
    {
      number: "04",
      title: "Oplevering",
      text: "Alles wordt gecontroleerd, getest en goed afgerond.",
    },
  ];

  const projects = [
    {
      title: "Slimme afwerking in huis",
      text: "Verlichting, bediening en afwerking die mooi aansluiten op de ruimte.",
      image: "/meterkast.jpg",
    },
    {
      title: "Maatwerk vanaf de basis",
      text: "Goed uitlijnen en voorbereiden zorgt voor een strakke en logische installatie.",
      image: "/images/laser.jpeg",
    },
    {
      title: "Slim geregeld achter de schermen",
      text: "Een nette technische basis zorgt voor rust, betrouwbaarheid en uitbreiding later.",
      image: "/images/Kleedkamer.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/icon.png"
              alt="Vortexx Group icoon"
              className="h-10 w-auto object-contain md:h-16"
            />
            <div className="text-sm font-black tracking-tight md:text-lg">Vortexx Group B.V.</div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#diensten" className="transition hover:text-orange-500">Diensten</a>
            <a href="#projecten" className="transition hover:text-orange-500">Projecten</a>
            <a href="#werkwijze" className="transition hover:text-orange-500">Werkwijze</a>
            <a href="#contact" className="transition hover:text-orange-500">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Offerte aanvragen
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Duidelijk advies • Netjes gewerkt • Slim geregeld
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              Elektro en automatisering,<br />Waar verduurzaming begint
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Van meterkast en verlichting tot slimme systemen en maatwerkoplossingen.
              Voor woningen en bedrijven die kiezen voor kwaliteit, duidelijkheid en betrouwbaarheid.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.02]"
              >
                Offerte aanvragen
              </a>
              <a
                href="#projecten"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-base font-bold text-slate-900 transition hover:border-slate-400"
              >
                Projecten bekijken
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Voor woningen en bedrijven",
                "Korte lijnen en duidelijke afspraken",
                "Netjes afgewerkt en klaar voor later",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-slate-300/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <img
                src="/images/Keuken.png"
                alt="Moderne keuken met strakke afwerking en slimme verlichting"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
                style={{ transform: "scale(1.28)", objectPosition: "78% 35%", transformOrigin: "78% 35%", imageRendering: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-slate-950 px-8 py-10 text-white lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Maatwerk
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Techniek die precies op de ruimte wordt uitgewerkt
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Van inmeten en uitlijnen tot een strakke voorbereiding voor spots,
              verlichting en aansluitpunten. Maatwerk begint bij goed kijken,
              slim tekenen en netjes uitvoeren.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
            <img
              src="/images/deur.jpeg"
              alt="Stalen deur met maatwerk verlichting"
              className="h-full min-h-[300px] w-full rounded-[1rem] object-cover"
              style={{ transform: "scale(1.45)", objectPosition: "60% center", transformOrigin: "60% center" }}
            />
          </div>
        </div>
      </section>

      <section id="diensten" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Onze oplossingen
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Waar we je mee kunnen helpen
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Van elektro en wifi tot slimme automatisering en maatwerk: oplossingen die passen bij jouw ruimte en gebruik.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-start">
          {services.map((service) =>
            service.title === "Wifi" || service.title === "Elektra renovatie" || service.title === "Verlichting" || service.title === "Automatisering" ? (
              <FlipServiceCard
                key={service.title}
                title={service.title}
                text={service.text}
                imageSrc={
                  service.title === "Wifi"
                    ? "/images/87d5a97055a3f8bdf3decc4ce410bd0e8a1b8ab368d74fabe7f1d3ec76fadd94.png"
                    : service.title === "Elektra renovatie"
                    ? "/images/elektra-renovatie.jpeg"
                    : service.title === "Automatisering"
                    ? "/images/Loxone.jpg"
                    : "/images/verlichting.jpeg"
                }
                imageAlt={
                  service.title === "Wifi" ? "Ubiquiti certificaat"
                  : service.title === "Elektra renovatie" ? "Elektra renovatie"
                  : service.title === "Automatisering" ? "Domotica tablet"
                  : "LED verlichting"
                }
                imageClassName={service.title === "Wifi" ? "h-full w-full object-contain p-6" : "h-full w-full object-cover"}
              />
            ) : (
            <article
              key={service.title}
              className="group h-[280px] rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg font-black text-orange-600 ml-3">
                  +
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.text}
              </p>
              <div className="mt-auto pt-4 text-sm font-bold text-orange-500">
                Meer weten →
              </div>
            </article>
            )
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="/images/Badkamer.jpeg"
              alt="Inbouwspots badkamer"
              className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Waarom Vortexx
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Niet alleen netjes gemaakt, maar ook technisch doordacht
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combineren elektrotechniek, automatisering en praktisch
              meedenken. Daardoor krijg je niet alleen een mooie installatie,
              maar ook een oplossing die logisch werkt en voorbereid is op later.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-semibold text-slate-800 shadow-sm"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projecten" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Projecten
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Een greep uit ons werk
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Van strakke afwerking in huis tot slimme techniek achter de
                schermen. Hier zie je hoe dat samenkomt.
              </p>
            </div>
            <a
              href="#contact"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-base font-bold text-slate-900 shadow-sm transition hover:border-slate-400"
            >
              Vraag een offerte aan
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Werkwijze
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Zo werken we
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Helder, praktisch en zonder gedoe. Precies zoals je het wilt.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-sm font-black tracking-[0.2em] text-orange-500">
                {step.number}
              </div>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="overflow-hidden rounded-[1.5rem] bg-white/10 p-3">
            <img
              src="/images/Meterkast kopie.jpg"
              alt="Slim opgebouwde meterkast met automatisering"
              className="h-full min-h-[320px] w-full rounded-[1rem] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Slim geregeld achter de schermen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Een sterke technische basis maakt het verschil
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Een nette opbouw en doordachte installatie vormen de basis van een
              systeem dat betrouwbaar werkt, logisch is opgebouwd en klaar is
              voor uitbreiding later.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Benieuwd wat we voor je kunnen betekenen?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Vraag vrijblijvend een offerte aan of neem direct contact op. We
              denken graag met je mee over elektra, automatisering en slimme
              oplossingen op maat.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">E-mail</div>
                <div className="mt-2 text-lg font-bold">info@vortexxgroup.nl</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Werkgebied</div>
                <div className="mt-2 text-lg font-bold">Woningen & bedrijven</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-white/10 py-6 text-center text-sm text-slate-400">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="font-semibold text-white">Vortexx Group B.V.</span>
          <span className="text-orange-500">|</span>
          <span>Naarden</span>
          <span className="text-orange-500">|</span>
          <a href="mailto:info@vortexxgroup.nl" className="hover:text-orange-400 transition">info@vortexxgroup.nl</a>
          <span className="text-orange-500">|</span>
          <a href="tel:+31617033441" className="hover:text-orange-400 transition">+31 6 17 03 34 41</a>
          <span className="text-orange-500">|</span>
          <a href="/algemene-voorwaarden" className="hover:text-orange-400 transition">Algemene Voorwaarden</a>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
