const DS = window.MattiuzDesignSystem_ac598e;
const { Logo, Button } = DS;
const IMG = "assets/imagery/";

function NavLink({ label, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 2px", font: "600 11px/1 var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: active || h ? "var(--mtz-navy)" : "var(--text-muted)", borderBottom: active ? "2px solid var(--mtz-navy)" : "2px solid transparent", transition: "color var(--dur-fast)" }}>
      {label}
    </button>
  );
}

function UtilLink({ label, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "500 9.5px/1 var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: active || h ? "var(--mtz-paper)" : "var(--mtz-gray)", transition: "color var(--dur-fast)" }}>
      {label}
    </button>
  );
}

function LangSwitch({ lang, setLang }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {["pt", "en", "it"].map((l) => (
        <button key={l} onClick={() => setLang(l)}
          style={{ background: lang === l ? "var(--mtz-paper)" : "transparent", color: lang === l ? "var(--mtz-navy)" : "var(--mtz-gray)", border: "none", cursor: "pointer", padding: "4px 7px", font: "600 9px/1 var(--font-body)", letterSpacing: ".12em", transition: "background var(--dur-fast)" }}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Header({ page, go, t, lang, setLang }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ background: "var(--mtz-ink)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 34, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 22 }}>
          <UtilLink label={t.u_sust} active={page === "sust"} onClick={() => go("sust")} />
          <UtilLink label={t.u_carr} active={page === "carr"} onClick={() => go("carr")} />
          <UtilLink label={t.u_etica} active={page === "etica"} onClick={() => go("etica")} />
          <UtilLink label={t.u_lgpd} active={page === "lgpd"} onClick={() => go("lgpd")} />
          <span style={{ width: 1, height: 14, background: "color-mix(in srgb,var(--mtz-paper) 25%,transparent)" }}></span>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
      <div style={{ background: "color-mix(in srgb,var(--mtz-paper) 92%,transparent)", backdropFilter: "blur(8px)", borderBottom: "var(--line-hair)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}><Logo variant="horizontal-2" height={30} /></button>
          <nav style={{ display: "flex", gap: 26, alignItems: "center" }}>
            <NavLink label={t.nav_home} active={page === "home"} onClick={() => go("home")} />
            <NavLink label={t.nav_hist} active={page === "history"} onClick={() => go("history")} />
            <NavLink label={t.nav_port} active={page === "portfolio"} onClick={() => go("portfolio")} />
            <NavLink label={t.nav_contact} active={page === "contact"} onClick={() => go("contact")} />
            <Button size="sm" onClick={() => go("portfolio")}>{t.nav_cta}</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer({ go, t }) {
  const link = { display: "block", color: "var(--mtz-gray)", cursor: "pointer" };
  const colTitle = { font: "600 10px/1 var(--font-body)", letterSpacing: ".22em", color: "var(--mtz-steel)", marginBottom: 14 };
  return (
    <footer style={{ background: "var(--mtz-ink)", color: "var(--mtz-gray)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "56px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1.1fr 1.1fr", gap: 40 }}>
          <div>
            <Logo variant="wordmark" color="white" height={54} />
            <p style={{ font: "400 12.5px/1.7 var(--font-body)", maxWidth: 300, marginTop: 18 }}>{t.foot_desc}</p>
            <div style={{ font: "600 9.5px/1 var(--font-body)", letterSpacing: ".2em", color: "var(--mtz-steel)", marginTop: 16 }}>{t.foot_regions}</div>
          </div>
          <div style={{ font: "400 13px/2.2 var(--font-body)" }}>
            <div style={colTitle}>{t.foot_nav}</div>
            <a onClick={() => go("home")} style={link}>{t.nav_home}</a>
            <a onClick={() => go("history")} style={link}>{t.nav_hist}</a>
            <a onClick={() => go("portfolio")} style={link}>{t.nav_port}</a>
            <a onClick={() => go("contact")} style={link}>{t.nav_contact}</a>
          </div>
          <div style={{ font: "400 13px/2.2 var(--font-body)" }}>
            <div style={colTitle}>{t.foot_inst}</div>
            <a onClick={() => go("sust")} style={link}>{t.u_sust}</a>
            <a onClick={() => go("carr")} style={link}>{t.u_carr}</a>
            <a onClick={() => go("etica")} style={link}>{t.u_etica}</a>
            <a onClick={() => go("lgpd")} style={link}>{t.u_lgpd}</a>
          </div>
          <div style={{ font: "400 13px/2 var(--font-body)" }}>
            <div style={colTitle}>{t.foot_contact}</div>
            <div>contato@mattiuz.com.br</div>
            <div style={{ font: "600 9.5px/1 var(--font-body)", letterSpacing: ".2em", color: "var(--mtz-steel)", margin: "16px 0 6px" }}>{t.foot_hq}</div>
            <div>{t.foot_addr}</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 15%,transparent)", marginTop: 40, paddingTop: 20, display: "flex", justifyContent: "space-between", font: "400 11px/1 var(--font-body)" }}>
          <span>{t.foot_rights}</span>
          <span style={{ letterSpacing: ".2em" }}>{t.foot_tag}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer, NavLink, IMG });
