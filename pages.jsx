const DS2 = window.MattiuzDesignSystem_ac598e;
const { Logo, WaveElement, PatternBlock, SectionHeader, Button, Card, Badge, Stat, Tooltip } = DS2;

const WAVE_N = [1, 6, 10, 4, 2];
const PRODUCTS = [
  { name: "Plusupper H2705", cat: "fus", base: "100% poliéster", g: "45 g/m²", stock: true, img: "label.png" },
  { name: "Plusupper M1200", cat: "malha", base: "PES charmeuse", g: "38 g/m²", stock: true, img: "mock02.png" },
  { name: "Plusupper T410", cat: "tecido", base: "algodão/PES", g: "110 g/m²", stock: false, img: "mock08.png" },
  { name: "Plusupper N330", cat: "nt", base: "100% PES", g: "33 g/m²", stock: true, img: "workwear.png" },
  { name: "Plusupper H900", cat: "fus", base: "PA micropontos", g: "52 g/m²", stock: true, img: "mock05.png" },
  { name: "Plusupper T680", cat: "tecido", base: "crina/mescla", g: "160 g/m²", stock: false, img: "facade.png" },
];

function HeroVideo() {
  const [i, setI] = React.useState(0);
  const refs = [React.useRef(null), React.useRef(null)];
  const srcs = ["assets/video/galpoes-slowmo.mp4", "assets/video/galpoes-slowmo-2.mp4"];
  React.useEffect(() => {
    refs.forEach((r) => { if (r.current) r.current.playbackRate = 0.5; });
    const cur = refs[i].current;
    if (cur) { cur.currentTime = 0; cur.play().catch(() => {}); }
    const nxt = refs[(i + 1) % 2].current;
    if (nxt) nxt.load();
  }, [i]);
  const vidStyle = (on) => ({ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "grayscale(1)", opacity: on ? .5 : 0, transition: "opacity 600ms var(--ease-out)", pointerEvents: "none" });
  return (
    <React.Fragment>
      {srcs.map((s, k) => (
        <video key={k} ref={refs[k]} muted playsInline preload="auto" autoPlay={k === 0} onEnded={() => setI((i + 1) % 2)} style={vidStyle(k === i)}>
          <source src={s} type="video/mp4" />
        </video>
      ))}
    </React.Fragment>
  );
}

function Home({ go, t }) {
  return (
    <main data-screen-label="Home">
      <section style={{ background: "var(--mtz-navy)", position: "relative", overflow: "hidden" }}>
        <HeroVideo />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 96%,transparent) 30%,color-mix(in srgb,var(--mtz-navy) 40%,transparent) 100%)", pointerEvents: "none" }} />
        <div className="hero-inner" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "120px 32px 112px", position: "relative" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ font: "600 11px/1 var(--font-body)", letterSpacing: "var(--track-overline)", color: "var(--mtz-steel)", marginBottom: 22 }}>{t.hero_over}</div>
            <h1 className="hero-title" style={{ font: "300 56px/1.12 var(--font-display)", color: "var(--mtz-paper)", margin: 0, letterSpacing: ".01em" }}>{t.hero_h1a}<br />{t.hero_h1b}</h1>
            <p style={{ font: "400 16px/1.75 var(--font-body)", color: "var(--mtz-gray)", maxWidth: 460, margin: "24px 0 36px" }}>{t.hero_p}</p>
            <div className="hero-actions" style={{ display: "flex", gap: 14 }}>
              <Button variant="inverse" size="lg" onClick={() => go("portfolio")}>{t.hero_b1}</Button>
              <Button variant="outline" size="lg" style={{ borderColor: "var(--mtz-steel)", color: "var(--mtz-steel)" }} onClick={() => go("history")}>{t.hero_b2}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px" }}>
        <SectionHeader overline={t.eixos_over} title={t.eixos_t} lead={t.eixos_l} />
        <div className="axis-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginTop: 44 }}>
          {t.eixos.map((e, i) => (
            <Card key={i} pad={20}>
              <WaveElement n={WAVE_N[i]} height={40} style={{ marginBottom: 16 }} />
              <div style={{ font: "500 15px/1.3 var(--font-display)", color: "var(--text-strong)", marginBottom: 8 }}>{e[0]}</div>
              <p style={{ font: "400 12px/1.65 var(--font-body)", color: "var(--text-muted)", margin: 0 }}>{e[1]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="fabsec" style={{ position: "relative", overflow: "hidden", borderTop: "var(--line-hair)", borderBottom: "var(--line-hair)", background: "var(--surface-card)" }}>
        <div className="fabgrad" style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(270deg,var(--mtz-paper) 22%,transparent 70%)", pointerEvents: "none" }} />
        <div className="fab-layout" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "80px 32px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <SectionHeader overline={t.fab_over} title={t.fab_t} lead={t.fab_p} />
            <div style={{ marginTop: 28 }}><Button variant="outline" onClick={() => go("history")}>{t.nav_hist}</Button></div>
          </div>
          <div className="fab-images" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, height: 320 }}>
            {["producao-rolos.jpg", "acabamento-dobras.jpg", "estoque-rolos.jpg"].map((f) => (
              <div key={f} style={{ background: "var(--mtz-navy)", overflow: "hidden" }}>
                <img src={IMG + f} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1)", opacity: .42 }} />
              </div>
            ))}
          </div>
        </div>
        <image-slot id="home-fab-bg" class="fabbg" shape="rect" src={IMG + "engenharia-abstrata.jpg"} placeholder={t.fab_bg}></image-slot>
      </section>

      <section style={{ background: "var(--mtz-ink)" }}>
        <div className="stats-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 40, alignItems: "center" }}>
          <SectionHeader onDark overline={t.stats_over} title={t.stats_t} />
          <Stat onDark value={t.s1v} label={t.s1l} detail={t.s1d} />
          <Stat onDark value={t.s2v} label={t.s2l} detail={t.s2d} />
          <Stat onDark value={t.s3v} label={t.s3l} detail={t.s3d} />
        </div>
      </section>

      <section className="section-pad" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px" }}>
        <div className="product-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <SectionHeader overline={t.prod_over} title={t.prod_t} lead={t.prod_l} />
          <Button variant="outline" onClick={() => go("portfolio")}>{t.prod_all}</Button>
        </div>
        <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 44 }}>
          {PRODUCTS.slice(0, 3).map((p) => <ProductCard key={p.name} p={p} t={t} onAsk={() => go("portfolio")} />)}
        </div>
      </section>

      <PatternBlock tile={1} tileSize={110} style={{ borderTop: "var(--line-hair)" }}>
        <div className="cta-wrap" style={{ maxWidth: 760, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
          <div className="cta-card" style={{ background: "var(--surface-page)", border: "var(--line-hair)", padding: "48px 56px" }}>
            <Logo variant="icon" height={44} style={{ margin: "0 auto 20px" }} />
            <h2 style={{ font: "300 30px/1.25 var(--font-display)", color: "var(--text-strong)", margin: "0 0 12px" }}>{t.cta_t}</h2>
            <p style={{ font: "400 14px/1.7 var(--font-body)", color: "var(--text-muted)", margin: "0 0 28px" }}>{t.cta_p}</p>
            <Button size="lg" onClick={() => go("contact")}>{t.cta_b}</Button>
          </div>
        </div>
      </PatternBlock>
    </main>
  );
}

function ProductCard({ p, t, onAsk }) {
  return (
    <Card pad={0} style={{ overflow: "hidden" }}>
      <div style={{ height: 150, background: `var(--mtz-mist) url(${IMG + p.img}) center/cover` }} />
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <Badge tone={p.stock ? "navy" : "outline"}>{p.stock ? t.stock : t.consult}</Badge>
          <Badge tone="neutral">{t.cats[p.cat]}</Badge>
        </div>
        <div style={{ font: "500 17px/1.3 var(--font-display)", color: "var(--text-strong)" }}>{p.name}</div>
        <div style={{ font: "400 12.5px/1.6 var(--font-body)", color: "var(--text-muted)", margin: "6px 0 14px" }}>
          {p.base} · <Tooltip label={t.gram + p.g}><span style={{ borderBottom: "1px dotted var(--mtz-gray)", cursor: "help" }}>{p.g}</span></Tooltip>
        </div>
        <Button variant="outline" size="sm" onClick={onAsk}>{t.ask}</Button>
      </div>
    </Card>
  );
}

Object.assign(window, { Home, ProductCard, PRODUCTS });
