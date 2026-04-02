export default function Projecten() {
  return (
    <main className="container">
      <section className="section card">
        <h1 className="section-title">Onze Projecten</h1>
        <p className="lead">
          Hier vindt u een overzicht van onze recente projecten op het gebied van elektro en automatisering.
          Bekijk foto’s en video’s van actuele realisaties en word geïnspireerd.
        </p>
      </section>

      <section className="section card">
        <h2 className="section-title">Fotoportfolio</h2>
        <div className="gallery-grid">
          <img src="/images/IMG_0376.jpeg" alt="Project 1" />
          <img src="/images/IMG_1272.jpeg" alt="Project 2" />
          <img src="/images/IMG_1749.jpeg" alt="Project 3" />
          <img src="/images/IMG_4185.jpeg" alt="Project 4" />
          <img src="/images/IMG_4455.jpeg" alt="Project 5" />
          <img src="/images/IMG_4461.jpeg" alt="Project 6" />
        </div>
      </section>

      <section className="section card">
        <h2 className="section-title">Actuele video</h2>
        <p className="lead">Bekijk het werkproces in actie (wildcard .MOV-bestand indien niet afspeelbaar in alle browsers).</p>
        <video controls className="gallery-grid" style={{ maxWidth: "780px", margin: "0 auto" }}>
          <source src="/images/IMG_1229.MOV" type="video/quicktime" />
          Uw browser ondersteunt het videoformaat niet. Open de file via de download-link hieronder.
        </video>
        <p>
          <a className="button" href="/images/IMG_1229.MOV" download>
            Video downloaden (MOV)
          </a>
        </p>
      </section>

      <section className="section card">
        <h2 className="section-title">Waarom Vortexx Group</h2>
        <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
          <li>elektro</li>
          <li>automatisering</li>
          <li>maatwerkoplossingen</li>
          <li>nette afwerking</li>
          <li>slim en praktisch</li>
          <li>oranje en zwart als stijl</li>
        </ul>
      </section>

      <section className="section">
        <p className="lead">
          Ga verder met details op <a className="button-outline" href="/actie">Acties</a> of
          <a className="button-outline" href="/contact" style={{ marginLeft: "10px" }}>
            Contact
          </a> voor een offerte.
        </p>
      </section>
    </main>
  );
}