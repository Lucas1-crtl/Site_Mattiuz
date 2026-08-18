const DS5 = window.MattiuzDesignSystem_ac598e;
const { WaveElement: WE5, Button: Btn5, Card: Cd5, Badge: Bd5, Toast: Ts5 } = DS5;

function InstHero({ t, title }) {
  return (
    <section style={{ background: "var(--mtz-navy)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 56px" }}>
        <div style={{ font: "600 11px/1 var(--font-body)", letterSpacing: "var(--track-overline)", color: "var(--mtz-steel)", marginBottom: 18, textTransform: "uppercase" }}>{t.foot_inst}</div>
        <h1 style={{ font: "300 44px/1.15 var(--font-display)", color: "var(--mtz-paper)", margin: 0 }}>{title}</h1>
      </div>
    </section>
  );
}

function InstH2({ children }) {
  return <h2 style={{ font: "500 22px/1.3 var(--font-display)", color: "var(--text-strong)", margin: "0 0 14px" }}>{children}</h2>;
}
function InstP({ children, style }) {
  return <p style={{ font: "400 14.5px/1.8 var(--font-body)", color: "var(--text-body)", margin: 0, ...style }}>{children}</p>;
}
function DocRow({ name }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "14px 2px", borderTop: "var(--line-hair)", cursor: "pointer", background: h ? "var(--mtz-navy-wash)" : "transparent", transition: "background var(--dur-fast)" }}>
      <span style={{ font: "400 13.5px/1.4 var(--font-body)", color: h ? "var(--mtz-navy)" : "var(--text-body)" }}>{name}</span>
      <Bd5 tone="outline">PDF</Bd5>
    </div>
  );
}
function MailStrip({ t, c, go }) {
  return (
    <div style={{ borderTop: "var(--line-hair)", paddingTop: 24, marginTop: 48, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
      <span style={{ font: "600 12px/1 var(--font-body)", letterSpacing: ".1em", color: "var(--mtz-navy)" }}>{c.mail}</span>
      <Btn5 variant="outline" size="sm" onClick={() => go("contact")}>{t.nav_contact}</Btn5>
    </div>
  );
}

function SustPage({ t, c, go }) {
  return (
    <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 32px 96px" }}>
      <WE5 n={6} height={44} style={{ marginBottom: 24 }} />
      <InstP style={{ maxWidth: 680 }}>{c.p1}</InstP>
      <div style={{ marginTop: 48 }}>
        <InstH2>{c.eco_t}</InstH2>
        <InstP style={{ maxWidth: 620, marginBottom: 20 }}>{c.eco_p}</InstP>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {c.eco.map((e) => (
            <Cd5 key={e[0]} pad={20}>
              <Bd5 tone="steel">ECO</Bd5>
              <div style={{ font: "500 16px/1.3 var(--font-display)", color: "var(--text-strong)", margin: "12px 0 6px" }}>{e[0]}</div>
              <div style={{ font: "400 12.5px/1.6 var(--font-body)", color: "var(--text-muted)" }}>{e[1]}</div>
            </Cd5>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48 }}>
        <div>
          <InstH2>{c.rep_t}</InstH2>
          <div>{c.reports.map((r) => <DocRow key={r} name={r} />)}</div>
        </div>
        <div>
          <InstH2>{c.pol_t}</InstH2>
          <div>{c.policies.map((r) => <DocRow key={r} name={r} />)}</div>
          <div style={{ display: "flex", gap: 8, marginTop: 18 }}>{c.isos.map((i) => <Bd5 key={i} tone="navy">{i}</Bd5>)}</div>
        </div>
      </div>
      <MailStrip t={t} c={c} go={go} />
    </section>
  );
}

function CarrPage({ t, c, go }) {
  return (
    <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 32px 96px" }}>
      <WE5 n={6} height={44} style={{ marginBottom: 24 }} />
      <InstP style={{ maxWidth: 680 }}>{c.p1}</InstP>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 40 }}>
        {c.areas.map((a, i) => (
          <Cd5 key={a[0]} pad={22}>
            <div style={{ font: "300 30px/1 var(--font-display)", color: "var(--mtz-steel)", marginBottom: 12 }}>{"0" + (i + 1)}</div>
            <div style={{ font: "500 15.5px/1.3 var(--font-display)", color: "var(--text-strong)", marginBottom: 8 }}>{a[0]}</div>
            <div style={{ font: "400 12.5px/1.65 var(--font-body)", color: "var(--text-muted)" }}>{a[1]}</div>
            {i === 5 && <div style={{ marginTop: 12 }}><Bd5 tone="outline">PDF</Bd5></div>}
          </Cd5>
        ))}
      </div>
      <MailStrip t={t} c={c} go={go} />
    </section>
  );
}

function EticaPage({ t, c, go }) {
  const [txt, setTxt] = React.useState("");
  const [ok, setOk] = React.useState(false);
  return (
    <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 32px 96px" }}>
      <WE5 n={6} height={44} style={{ marginBottom: 24 }} />
      <InstP style={{ maxWidth: 680 }}>{c.p1}</InstP>
      <div style={{ marginTop: 48 }}>
        <InstH2>{c.pillars_t}</InstH2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderTop: "var(--line-hair)", borderLeft: "var(--line-hair)" }}>
          {c.pillars.map((p, i) => (
            <div key={i} style={{ padding: "20px 22px", borderRight: "var(--line-hair)", borderBottom: "var(--line-hair)", display: "flex", gap: 14, alignItems: "baseline" }}>
              <span style={{ font: "300 26px/1 var(--font-display)", color: "var(--mtz-steel)" }}>{i + 1}</span>
              <span style={{ font: "400 13px/1.55 var(--font-body)", color: "var(--text-body)" }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48 }}>
        <div>
          <InstH2>{c.code_t}</InstH2>
          <InstP>{c.code_p}</InstP>
          <div style={{ marginTop: 16 }}><DocRow name={c.code_t} /></div>
        </div>
        <div>
          <InstH2>{c.comm_t}</InstH2>
          <InstP>{c.comm_p}</InstP>
        </div>
      </div>
      <Cd5 variant="navy" pad={32} style={{ marginTop: 48 }}>
        <div style={{ font: "500 20px/1.3 var(--font-display)", color: "var(--mtz-paper)", marginBottom: 10 }}>{c.canal_t}</div>
        <p style={{ font: "400 13.5px/1.7 var(--font-body)", color: "var(--mtz-gray)", margin: "0 0 18px", maxWidth: 560 }}>{c.canal_p}</p>
        <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
          <textarea value={txt} onChange={(e) => setTxt(e.target.value)} placeholder={c.canal_ph} rows={2}
            style={{ flex: 1, padding: "12px 14px", font: "400 13.5px/1.5 var(--font-body)", color: "var(--text-strong)", background: "var(--mtz-paper)", border: "none", borderRadius: 0, outline: "none", resize: "vertical" }}></textarea>
          <Btn5 variant="inverse" onClick={() => { setTxt(""); setOk(true); }}>{c.canal_send}</Btn5>
        </div>
      </Cd5>
      <Ts5 visible={ok} message={c.canal_ok} tone="success" onDismiss={() => setOk(false)} />
      <MailStrip t={t} c={c} go={go} />
    </section>
  );
}

function LgpdPage({ t, c, go }) {
  return (
    <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 32px 96px" }}>
      <WE5 n={6} height={44} style={{ marginBottom: 24 }} />
      <InstP style={{ maxWidth: 680, font: "400 16px/1.8 var(--font-body)" }}>{c.p1}</InstP>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 40 }}>
        {c.facts.map((f) => (
          <Cd5 key={f[0]} pad={26}>
            <div style={{ font: "500 17px/1.3 var(--font-display)", color: "var(--mtz-navy)", marginBottom: 10 }}>{f[0]}</div>
            <div style={{ font: "400 13.5px/1.7 var(--font-body)", color: "var(--text-body)" }}>{f[1]}</div>
          </Cd5>
        ))}
      </div>
      <div style={{ maxWidth: 440, marginTop: 32 }}><DocRow name={c.doc} /></div>
      <MailStrip t={t} c={c} go={go} />
    </section>
  );
}

function InstPage({ k, t, go }) {
  const c = t.inst[k];
  const Body = { sust: SustPage, carr: CarrPage, etica: EticaPage, lgpd: LgpdPage }[k];
  return (
    <main data-screen-label={c.t}>
      <InstHero t={t} title={c.t} />
      <Body t={t} c={c} go={go} />
    </main>
  );
}

Object.assign(window, { InstPage });
