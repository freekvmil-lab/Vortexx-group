export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <h2 style={{ margin: 0, color: "#ff7a00" }}>Vortexx Group B.V.</h2>

          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
            <a
              href="/projecten"
              style={{ color: "white", textDecoration: "none" }}
            >
              Projecten
            </a>
            <a
              href="/webshop"
              style={{ color: "white", textDecoration: "none" }}
            >
              Webshop
            </a>
            <a
              href="/contact"
              style={{
                color: "#ff7a00",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              color: "#ff7a00",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Contact
          </p>

          <h1
            style={{
              fontSize: "48px",
              lineHeight: 1.1,
              margin: "0 0 20px 0",
            }}
          >
            Neem contact met ons op
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#444",
              maxWidth: "750px",
              lineHeight: 1.6,
              marginBottom: "0",
            }}
          >
            Heb je een vraag, wil je een offerte aanvragen of sparren over een
            project? Neem gerust contact op met Vortexx Group B.V. We denken
            graag met je mee over elektro, automatisering en maatwerk.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "35px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Gegevens</h2>

            <p style={{ color: "#444", lineHeight: 1.7 }}>
              <strong>Vortexx Group B.V.</strong>
              <br />
              Van Limburg Stirumlaan 41
              <br />
              1411 BM Naarden
            </p>

            <p style={{ color: "#444", lineHeight: 1.7 }}>
              <strong>E-mail:</strong>
              <br />
              <a
                href="mailto:info@fvmgroup.nl"
                style={{ color: "#ff7a00", textDecoration: "none" }}
              >
                info@fvmgroup.nl
              </a>
            </p>

            <p style={{ color: "#444", lineHeight: 1.7 }}>
              <strong>KvK:</strong>
              <br />
              64122425
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "35px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Stuur een bericht</h2>

            <form style={{ display: "grid", gap: "15px" }}>
              <input
                type="text"
                placeholder="Naam"
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />

              <input
                type="email"
                placeholder="E-mailadres"
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />

              <input
                type="text"
                placeholder="Telefoonnummer"
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />

              <textarea
                placeholder="Bericht"
                rows={6}
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#ff7a00",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}