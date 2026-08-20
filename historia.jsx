const DS4 = window.MattiuzDesignSystem_ac598e;
const { SectionHeader: SH4, Button: Btn4, Divider: Dv4, PatternBlock: PB4, WaveElement: WE4, Card: Cd4, Logo: Lg4 } = DS4;

function History({ go, t }) {
  const blocks = [[t.h_b1t, t.h_b1], [t.h_b2t, t.h_b2], [t.h_b3t, t.h_b3]];
  return (
    <main data-screen-label="Nossa História">
      <section style={{ background: "var(--mtz-ink)", position: "relative", overflow: "hidden" }}>
        <PB4 tile={5} tileSize={140} bg="transparent" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 300, opacity: .35, pointerEvents: "none" }} />
        <div className="history-hero-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px", display: "grid", gridTemplateColumns: "1fr .9fr", gap: 56, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ font: "600 11px/1 var(--font-body)", letterSpacing: "var(--track-overline)", color: "var(--mtz-steel)", marginBottom: 22, textTransform: "uppercase" }}>{t.h_over}</div>
            <h1 className="page-title" style={{ font: "300 48px/1.15 var(--font-display)", color: "var(--mtz-paper)", margin: 0 }}>{t.h_t}</h1>
            <p style={{ font: "400 15.5px/1.75 var(--font-body)", color: "var(--mtz-gray)", maxWidth: 480, margin: "24px 0 0" }}>{t.h_lead}</p>
          </div>
          <figure style={{ margin: 0 }}>
            <img src={IMG + "historia-familia.png"} alt="" style={{ width: "100%", display: "block" }} />
            <figcaption style={{ font: "400 11px/1.6 var(--font-body)", color: "var(--mtz-gray)", marginTop: 10, letterSpacing: ".04em" }}>{t.h_capHero}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-pad" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px" }}>
        <div className="history-blocks" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
          {blocks.map((b, i) => (
            <div key={i} style={{ padding: "0 36px", borderLeft: i ? "var(--line-hair)" : "none" }}>
              <div style={{ font: "300 44px/1 var(--font-display)", color: "var(--mtz-steel)", marginBottom: 18 }}>{"0" + (i + 1)}</div>
              <div style={{ font: "500 19px/1.3 var(--font-display)", color: "var(--text-strong)", marginBottom: 12 }}>{b[0]}</div>
              <p style={{ font: "400 13.5px/1.75 var(--font-body)", color: "var(--text-body)", margin: 0 }}>{b[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="history-gallery-section" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 88px" }}>
        <div className="history-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 12 }}>
          <figure style={{ margin: 0 }}>
            <img src={IMG + "historia-cafe.png"} alt="" style={{ width: "100%", height: 280, objectFit: "cover", display: "block", filter: "grayscale(1)" }} />
            <figcaption style={{ font: "400 11px/1.6 var(--font-body)", color: "var(--text-muted)", marginTop: 10, letterSpacing: ".04em" }}>{t.h_cap1}</figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <img src={IMG + "historia-fiacao.png"} alt="" style={{ width: "100%", height: 280, objectFit: "cover", display: "block", filter: "grayscale(1)" }} />
            <figcaption style={{ font: "400 11px/1.6 var(--font-body)", color: "var(--text-muted)", marginTop: 10, letterSpacing: ".04em" }}>{t.h_cap2}</figcaption>
          </figure>
        </div>
      </section>

      <section style={{ background: "var(--mtz-navy)" }}>
        <div className="history-plant-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "80px 32px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
          <div className="history-plant-image" style={{ height: 380, background: "var(--mtz-ink)", overflow: "hidden" }}>
            <img src={IMG + "planta-mattiuz.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 32%", display: "block", filter: "grayscale(1)", opacity: .45 }} />
          </div>
          <div>
            <WE4 n={8} height={54} style={{ marginBottom: 24 }} />
            <h2 style={{ font: "300 32px/1.2 var(--font-display)", color: "var(--mtz-paper)", margin: "0 0 16px" }}>{t.h_dt}</h2>
            <p style={{ font: "400 14.5px/1.8 var(--font-body)", color: "var(--mtz-gray)", margin: 0 }}>{t.h_d}</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px" }}>
        <SH4 overline={t.pres_over} title={t.pres_t} />
        <div className="presence-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 44 }}>
          {t.pres.map((p, i) => (
            <Cd4 key={i} pad={28}>
              <div style={{ font: "600 10px/1 var(--font-body)", letterSpacing: ".24em", color: "var(--mtz-navy)", marginBottom: 14 }}>{t.pres_labels[i]}</div>
              <div style={{ font: "300 26px/1.1 var(--font-display)", color: "var(--text-strong)", marginBottom: 12 }}>{p[0]}</div>
              <p style={{ font: "400 13px/1.7 var(--font-body)", color: "var(--text-muted)", margin: 0 }}>{p[1]}</p>
            </Cd4>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Lg4 variant="icon" height={40} style={{ margin: "0 auto 18px" }} />
          <div><Btn4 size="lg" onClick={() => go("portfolio")}>{t.h_cta}</Btn4></div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { History });
