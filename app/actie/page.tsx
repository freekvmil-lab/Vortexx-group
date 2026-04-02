export default function ActiePage() {
  return (
    <main className="container">
      <section className="section card">
        <h1 className="section-title">Acties</h1>
        <p className="lead">Bekijk onze actuele acties en aanbiedingen. We helpen je graag met een scherp, passend voorstel.</p>
        <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
          <li>Gratis projectadvies bij eerste installatie</li>
          <li>10% korting op een volledig elektropakket bij KNX-integratie</li>
          <li>Exclusieve prijs op slimme verlichtingsautomation</li>
        </ul>
        <p className="lead">
          Neem contact op via <a className="button" href="/contact">Contact</a> om direct je actie te claimen.
        </p>
      </section>
    </main>
  );
}