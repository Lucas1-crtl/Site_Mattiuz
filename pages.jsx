const DS2 = window.MattiuzDesignSystem_ac598e;
const { Logo, WaveElement, PatternBlock, SectionHeader, Button, Card, Badge, Stat, Tooltip } = DS2;

const WAVE_N = [1, 6, 10, 4, 2];
const MARK_V = "?v=4";
const LINE_SRC = ["port/woven.jpg", "port/knitted.jpg", "port/non-woven.jpg", "port/bonding.jpg", "port/specialty.jpg", "port/narrow.jpg"].map((f) => f + MARK_V);
const HOME_SRC = ["home/woven.jpg", "home/knitted.jpg", "home/non-woven.jpg"].map((f) => f + MARK_V);

const HERO_SRCS = [1, 2, 3, 4].map((n) => `assets/video/hero-${n}.mp4`);
const HERO_FADE = 900;

function HeroVideo() {
  const refs = HERO_SRCS.map(() => React.useRef(null));
  const [cur, setCur] = React.useState(0);
  const busy = React.useRef(false);
  React.useEffect(() => {
    const v = refs[cur].current;
    if (!v) return;
    v.muted = true;
    v.playbackRate = 0.5;
    const start = () => { v.playbackRate = 0.5; v.play().catch(() => {}); };
    start();
    v.addEventListener("canplay", start);
    busy.current = false;
    return () => v.removeEventListener("canplay", start);
  }, [cur]);
  const onTime = (i) => () => {
    const v = refs[i].current;
    if (i !== cur || busy.current || !v || !v.duration) return;
    if ((v.duration - v.currentTime) / 0.5 > HERO_FADE / 1000) return;
    busy.current = true;
    const n = (i + 1) % HERO_SRCS.length;
    const nv = refs[n].current;
    if (nv) { nv.muted = true; nv.currentTime = 0; nv.playbackRate = 0.5; nv.play().catch(() => {}); }
    setCur(n);
    setTimeout(() => { if (refs[i].current) refs[i].current.pause(); }, HERO_FADE);
  };
  return (
    <React.Fragment>
      {HERO_SRCS.map((s, k) => (
<<<<<<< HEAD
        <video key={s} ref={refs[k]} muted playsInline preload="auto" autoPlay={k === 0} onTimeUpdate={onTime(k)}
=======
        <video key={s} ref={refs[k]} muted playsInline preload={k === 0 ? "auto" : "metadata"} autoPlay={k === 0} onTimeUpdate={onTime(k)} aria-hidden="true"
>>>>>>> 57863d1 (site limpo)
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "grayscale(1)", opacity: k === cur ? .5 : 0, transition: `opacity ${HERO_FADE}ms linear`, pointerEvents: "none" }}>
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
<<<<<<< HEAD
            {["producao-rolos.jpg", "acabamento-dobras.jpg", "estoque-rolos.jpg"].map((f) => (
              <div key={f} style={{ background: "var(--mtz-navy)", overflow: "hidden" }}>
                <img src={IMG + f} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1)", opacity: .42 }} />
=======
            {[
              ["producao-rolos.jpg", "Produção de rolos de materiais têxteis na Mattiuz"],
              ["acabamento-dobras.jpg", "Acabamento de materiais têxteis na Mattiuz"],
              ["estoque-rolos.jpg", "Estoque de rolos de materiais têxteis da Mattiuz"]
            ].map(([f, alt]) => (
              <div key={f} style={{ background: "var(--mtz-navy)", overflow: "hidden" }}>
                <img src={IMG + f} alt={alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1)", opacity: .42 }} />
>>>>>>> 57863d1 (site limpo)
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
          {t.lines.slice(0, 3).map((l, i) => <LineTeaser key={l.t} l={l} i={i} t={t} onAsk={() => go("portfolio")} />)}
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

function LineTeaser({ l, i, t, onAsk }) {
  return (
    <Card pad={0} style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 190, overflow: "hidden", background: "var(--mtz-mist)" }}>
<<<<<<< HEAD
        <img src={IMG + "lines/" + HOME_SRC[i]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
=======
        <img src={IMG + "lines/" + HOME_SRC[i]} alt={`${l.t} — ${l.spec}`} loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
>>>>>>> 57863d1 (site limpo)
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ font: "600 10px/1 var(--font-body)", letterSpacing: ".2em", color: "var(--mtz-steel)" }}>{l.lab}</div>
        <div style={{ font: "300 22px/1.25 var(--font-display)", color: "var(--text-strong)", margin: "10px 0 6px" }}>{l.t}</div>
        <div style={{ font: "400 12.5px/1.6 var(--font-body)", color: "var(--text-muted)" }}>{l.spec}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 18 }}>
          {l.seal.map((s, k) => <Badge key={s} tone={k === 0 ? "neutral" : "navy"}>{s}</Badge>)}
        </div>
        <div style={{ marginTop: 14 }}><Button variant="outline" size="sm" onClick={onAsk}>{t.ask}</Button></div>
      </div>
    </Card>
  );
}

Object.assign(window, { Home, LineTeaser, LINE_SRC });
