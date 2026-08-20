const DS = window.MattiuzDesignSystem_ac598e;
const { Logo, Button } = DS;
const IMG = "assets/imagery/";

function NavLink({ label, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button className="nav-link" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 2px", font: "600 11px/1 var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: active || h ? "var(--mtz-navy)" : "var(--text-muted)", borderBottom: active ? "2px solid var(--mtz-navy)" : "2px solid transparent", transition: "color var(--dur-fast)" }}>
      {label}
    </button>
  );
}

function UtilLink({ label, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button className="util-link" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
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
  const [menuOpen, setMenuOpen] = React.useState(false);
  const goMobile = (p) => { setMenuOpen(false); go(p); };

  return (
    <header className="site-header" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="desktop-only" style={{ background: "var(--mtz-ink)" }}>
        <div className="header-util-inner" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 34, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 22 }}>
          <UtilLink label={t.u_sust} active={page === "sust"} onClick={() => go("sust")} />
          <UtilLink label={t.u_carr} active={page === "carr"} onClick={() => go("carr")} />
          <UtilLink label={t.u_etica} active={page === "etica"} onClick={() => go("etica")} />
          <UtilLink label={t.u_lgpd} active={page === "lgpd"} onClick={() => go("lgpd")} />
          <span style={{ width: 1, height: 14, background: "color-mix(in srgb,var(--mtz-paper) 25%,transparent)" }}></span>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
      <div style={{ background: "color-mix(in srgb,var(--mtz-paper) 92%,transparent)", backdropFilter: "blur(8px)", borderBottom: "var(--line-hair)" }}>
        <div className="site-header-main" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <button className="site-logo" onClick={() => goMobile("home")} aria-label="Mattiuz - Início" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}><Logo variant="horizontal-2" height={30} /></button>
          <nav className="desktop-nav desktop-only" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            <NavLink label={t.nav_home} active={page === "home"} onClick={() => go("home")} />
            <NavLink label={t.nav_hist} active={page === "history"} onClick={() => go("history")} />
            <NavLink label={t.nav_port} active={page === "portfolio"} onClick={() => go("portfolio")} />
            <NavLink label={t.nav_contact} active={page === "contact"} onClick={() => go("contact")} />
            <Button size="sm" onClick={() => go("portfolio")}>{t.nav_cta}</Button>
          </nav>
          <button className="mobile-menu-button mobile-only" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu mobile-only">
          <nav className="mobile-menu-nav">
            <NavLink label={t.nav_home} active={page === "home"} onClick={() => goMobile("home")} />
            <NavLink label={t.nav_hist} active={page === "history"} onClick={() => goMobile("history")} />
            <NavLink label={t.nav_port} active={page === "portfolio"} onClick={() => goMobile("portfolio")} />
            <NavLink label={t.nav_contact} active={page === "contact"} onClick={() => goMobile("contact")} />
          </nav>
          <div className="mobile-menu-divider"></div>
          <div className="mobile-util-grid">
            <button onClick={() => goMobile("sust")}>{t.u_sust}</button>
            <button onClick={() => goMobile("carr")}>{t.u_carr}</button>
            <button onClick={() => goMobile("etica")}>{t.u_etica}</button>
            <button onClick={() => goMobile("lgpd")}>{t.u_lgpd}</button>
          </div>
          <div className="mobile-lang"><LangSwitch lang={lang} setLang={setLang} /></div>
          <Button fullWidth onClick={() => goMobile("portfolio")}>{t.nav_cta}</Button>
        </div>
      )}
    </header>
  );
}

function Footer({ go, t }) {
  const link = { display: "block", color: "var(--mtz-gray)", cursor: "pointer" };
  const colTitle = { font: "600 10px/1 var(--font-body)", letterSpacing: ".22em", color: "var(--mtz-steel)", marginBottom: 14 };
  return (
    <footer className="site-footer" style={{ background: "var(--mtz-ink)", color: "var(--mtz-gray)" }}>
      <div className="footer-inner" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "56px 32px 40px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1.1fr 1.1fr", gap: 40 }}>
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
        <div className="footer-bottom" style={{ borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 15%,transparent)", marginTop: 40, paddingTop: 20, display: "flex", justifyContent: "space-between", font: "400 11px/1 var(--font-body)" }}>
          <span>{t.foot_rights}</span>
          <span style={{ letterSpacing: ".2em" }}>{t.foot_tag}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer, NavLink, IMG });
