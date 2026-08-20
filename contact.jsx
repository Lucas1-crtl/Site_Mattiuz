const DS3 = window.MattiuzDesignSystem_ac598e;
const { SectionHeader: SH3, Button: Btn3, Input: In3, Select: Sel3, Checkbox: Cb3, Radio: Rd3, Card: Cd3, Divider: Dv3, Tabs: Tb3, Dialog: Dlg3, Toast: Ts3 } = DS3;

const CAT_KEYS = ["all", "fus", "malha", "tecido", "nt"];

function Portfolio({ t }) {
  const [tab, setTab] = React.useState(0);
  const [ask, setAsk] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const items = [t.cat_all, t.cats.fus, t.cats.malha, t.cats.tecido, t.cats.nt];
  const list = window.PRODUCTS.filter((p) => tab === 0 || p.cat === CAT_KEYS[tab]);
  return (
    <main className="portfolio-main" data-screen-label="Portfólio" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 88px" }}>
      <SH3 overline={t.prod_over} title="Plusupper" lead={t.port_l} />
      <div className="portfolio-tabs" style={{ marginTop: 36 }}>
        <Tb3 items={items} active={tab} onChange={setTab} />
      </div>
      <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 28 }}>
        {list.map((p) => <ProductCard key={p.name} p={p} t={t} onAsk={() => setAsk(p)} />)}
      </div>
      <Dlg3 open={!!ask} onClose={() => setAsk(null)} title={t.dlg_t + (ask ? ask.name : "")}
        actions={<React.Fragment><Btn3 variant="ghost" onClick={() => setAsk(null)}>{t.cancel}</Btn3><Btn3 onClick={() => { setAsk(null); setToast(true); }}>{t.send_req}</Btn3></React.Fragment>}>
        <div style={{ display: "grid", gap: 16 }}>
          <In3 label={t.dlg_email} placeholder={t.f_email_ph} />
          <Sel3 label={t.dlg_vol} options={t.vols} />
          <Cb3 label={t.dlg_cb} defaultChecked />
        </div>
      </Dlg3>
      <Ts3 visible={toast} message={t.toast_ok} tone="success" onDismiss={() => setToast(false)} />
    </main>
  );
}

function Labeled({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ font: "600 10.5px/1 var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-strong)" }}>{label}</span>
      {children}
    </div>
  );
}

function Contact({ t }) {
  const [sent, setSent] = React.useState(false);
  const [country, setCountry] = React.useState(t.countries[0]);
  const isBR = country === t.countries[0];
  return (
    <main data-screen-label="Contato">
      <section style={{ background: "var(--mtz-navy)", position: "relative", overflow: "hidden" }}>
        <img src={IMG + "galpao-blumenau.png"} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%", filter: "grayscale(1)", opacity: .12, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 92%,transparent) 26%,transparent 75%)", pointerEvents: "none" }} />
        <div className="contact-hero-inner" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px 80px", position: "relative" }}>
          <div style={{ font: "600 11px/1 var(--font-body)", letterSpacing: "var(--track-overline)", color: "var(--mtz-steel)", marginBottom: 18, textTransform: "uppercase" }}>{t.c_over}</div>
          <h1 className="page-title" style={{ font: "300 48px/1.15 var(--font-display)", color: "var(--mtz-paper)", margin: 0, maxWidth: 560 }}>{t.c_t}</h1>
          <p style={{ font: "400 15px/1.75 var(--font-body)", color: "var(--mtz-gray)", maxWidth: 440, margin: "20px 0 0" }}>{t.c_l}</p>
          <div className="contact-meta" style={{ display: "flex", gap: 40, marginTop: 44, borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 22%,transparent)", paddingTop: 24 }}>
            <div>
              <div style={{ font: "600 9.5px/1 var(--font-body)", letterSpacing: ".24em", color: "var(--mtz-steel)", marginBottom: 8 }}>{t.foot_hq}</div>
              <div style={{ font: "400 13px/1.6 var(--font-body)", color: "var(--mtz-paper)" }}>{t.foot_addr}</div>
            </div>
            <div>
              <div style={{ font: "600 9.5px/1 var(--font-body)", letterSpacing: ".24em", color: "var(--mtz-steel)", marginBottom: 8 }}>{t.foot_contact}</div>
              <div style={{ font: "400 13px/1.6 var(--font-body)", color: "var(--mtz-paper)" }}>contato@mattiuz.com.br</div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-layout" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 88px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 64 }}>
      <div>
        <div style={{ display: "grid", gap: 18 }}>
          <Dv3 label={t.c_div} />
          <div style={{ display: "grid", gap: 0, marginTop: 6 }}>
            {t.c_steps.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ font: "300 30px/1 var(--font-display)", color: "var(--mtz-steel)" }}>{"0" + (i + 1)}</span>
                  {i < t.c_steps.length - 1 && <span style={{ flex: 1, width: 1, background: "var(--border-line)", margin: "10px 0" }}></span>}
                </div>
                <div style={{ paddingBottom: i < t.c_steps.length - 1 ? 28 : 0 }}>
                  <div style={{ font: "500 16px/1.3 var(--font-display)", color: "var(--text-strong)", marginBottom: 5 }}>{s[0]}</div>
                  <div style={{ font: "400 13px/1.7 var(--font-body)", color: "var(--text-muted)" }}>{s[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cd3 pad={32} style={{ alignSelf: "start" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ font: "300 26px/1.3 var(--font-display)", color: "var(--text-strong)", marginBottom: 10 }}>{t.sent_t}</div>
            <p style={{ font: "400 13.5px/1.7 var(--font-body)", color: "var(--text-muted)" }}>{t.sent_p}</p>
            <Btn3 variant="outline" size="sm" onClick={() => setSent(false)}>{t.sent_again}</Btn3>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 18 }}>
            <Labeled label={t.f_client}>
              <Rd3 direction="row" options={[t.f_yes, t.f_no]} defaultValue={t.f_no} />
            </Labeled>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Sel3 label={t.f_country} options={t.countries} value={country} onChange={(e) => setCountry(e.target.value)} />
              <Sel3 label={t.f_reason} options={t.reasons} />
            </div>
            <In3 label={t.f_subject} placeholder={t.f_subject_ph} />
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <In3 label={t.f_fullname} placeholder={t.f_fullname_ph} />
              <In3 label={t.f_email} placeholder={t.f_email_ph} />
            </div>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <In3 label={isBR ? t.f_doc_br : t.f_doc_intl} placeholder={t.f_doc_ph} />
              <In3 label={t.f_phone} placeholder={t.f_phone_ph} />
            </div>
            <Labeled label={t.f_msg}>
              <textarea placeholder={t.f_msg_ph} rows={4} style={{ padding: "12px 14px", font: "400 14px/1.5 var(--font-body)", color: "var(--text-strong)", background: "var(--mtz-white)", border: "var(--line-strong)", borderRadius: 0, outline: "none", resize: "vertical" }}></textarea>
            </Labeled>
            <Btn3 fullWidth size="lg" onClick={() => setSent(true)}>{t.f_send}</Btn3>
          </div>
        )}
      </Cd3>
      </div>
    </main>
  );
}

Object.assign(window, { Portfolio, Contact });
