export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f8f8f8", color: "#111" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#111", color: "#fff", padding: "18px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.28)" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "18px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <img src="/logo.jpeg" alt="Vortexx Group logo" style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover" }} />
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ fontWeight: "900", letterSpacing: "0.06em", fontSize: "22px", color: "white" }}>Vortexx Group B.V.</span><br />
              <span style={{ color: "#ff7a00", fontSize: "13px", textTransform: "uppercase", fontWeight: "800" }}>Elektro</span>
            </div>
          </a>
          <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#wie-zijn-wij" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Wie zijn wij</a>
            <a href="#projecten" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Projecten</a>
            <a href="#acties" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Acties</a>
            <a href="#meterkast" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Meterkast</a>
            <a href="/contact" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Contact</a>
            <a href="/webshop" style={{ color: "#ff7a00", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Webshop</a>
          </nav>
        </div>
      </header>

      <section style={{ position: "relative", overflow: "hidden", margin: "22px auto 36px", maxWidth: "1140px", borderRadius: "20px", minHeight: "460px", backgroundImage: "url('/images/Keuken.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.12)" }} />
      </section>

      <section id="wie-zijn-wij" style={{ maxWidth: "1140px", margin: "0 auto 36px", padding: "0 16px" }}>
        <div style={{ background: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}>
          <h2 style={{ margin: "0 0 12px", color: "#111" }}>Wie zijn wij</h2>
          <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>
            Wij zijn Vortexx Group B.V. Als bemiddelingspartner zijn we sterk in personeel en projectteams. Daarnaast zijn we actief in elektrotechnische installaties, automatisering en maatwerkoplossingen. We houden van nette afwerking, slimme techniek en systemen die niet alleen mooi zijn, maar ook in de praktijk goed werken.
          </p>
        </div>
      </section>

      <section id="projecten" style={{ maxWidth: "1140px", margin: "0 auto 36px", padding: "0 16px" }}>
        <h2 style={{ marginBottom: "16px", color: "#111" }}>Projecten</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" }}>
          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <img src="/spotjes.jpg" alt="Project Elektro" style={{ width: "100%", height: "170px", objectFit: "cover" }} />
            <div style={{ padding: "16px" }}>
              <h3 style={{ margin: "0 0 8px", color: "#111" }}>Elektro</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>Slimme en nette elektrotechnische installaties voor woningen, bedrijven en projecten.</p>
            </div>
          </article>

          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <img src="/meterkast.jpg" alt="Project Automatisering" style={{ width: "100%", height: "170px", objectFit: "cover" }} />
            <div style={{ padding: "16px" }}>
              <h3 style={{ margin: "0 0 8px", color: "#111" }}>Automatisering</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>Verlichting, sturing en slimme oplossingen voor comfort, overzicht en controle.</p>
            </div>
          </article>

          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <img src="/images/Werktekeing.jpg" alt="Project Maatwerk" style={{ width: "100%", height: "170px", objectFit: "cover" }} />
            <div style={{ padding: "16px" }}>
              <h3 style={{ margin: "0 0 8px", color: "#111" }}>Maatwerk</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>Oplossingen die zijn afgestemd op de ruimte, de wens en de manier van gebruiken.</p>
            </div>
          </article>
        </div>
      </section>


      <section id="acties" style={{ maxWidth: "1140px", margin: "0 auto 36px", padding: "0 16px" }}>
        <h2 style={{ marginBottom: "16px", color: "#111" }}>Acties & Combi deals</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" }}>
          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 18px rgba(0,0,0,0.08)", padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px", color: "#111" }}>Actie: Gratis advies</h3>
            <p style={{ margin: 0, color: "#555" }}>Bij de eerste afspraak gratis projectadvies en offerte op maat.</p>
          </article>
          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 18px rgba(0,0,0,0.08)", padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px", color: "#111" }}>Combi deal: KNX + verlichting</h3>
            <p style={{ margin: 0, color: "#555" }}>Kies voor combinatie van KNX sturing en ledverlichting met extra korting.</p>
          </article>
          <article style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 18px rgba(0,0,0,0.08)", padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px", color: "#111" }}>Combi deal: Elektriciteit + automatiek</h3>
            <p style={{ margin: 0, color: "#555" }}>Installatie plus slimme automatisering in één pakket. Bespaar tijd en kosten.</p>
          </article>
        </div>
      </section>

      <section id="meterkast" style={{ maxWidth: "1140px", margin: "0 auto 56px", padding: "0 16px" }}>
        <div style={{ background: "white", borderRadius: "18px", padding: "24px", boxShadow: "0 10px 22px rgba(0,0,0,0.1)" }}>
          <h2 style={{ margin: "0 0 12px", color: "#111" }}>Meterkast</h2>
          <p style={{ margin: 0, color: "#444", lineHeight: 1.6 }}>
            Vanaf advies en ontwerp tot oplevering: we leveren veilige en overzichtelijke meterkast-installaties die voldoen aan NEN-standaarden en gebruiksvriendelijkheid inbouwen.
          </p>
        </div>
      </section>

      <footer style={{ background: "#111", color: "white", padding: "18px 16px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#ddd" }}>© {new Date().getFullYear()} Vortexx Group B.V. Alle rechten voorbehouden.</p>
      </footer>
    </main>
  );
}
