const DS3 = window.MattiuzDesignSystem_ac598e;
const { SectionHeader: SH3, Button: Btn3, Input: In3, Select: Sel3, Checkbox: Cb3, Radio: Rd3, Card: Cd3, Badge: Bdg3, Divider: Dv3, Dialog: Dlg3, Toast: Ts3 } = DS3;

const CONTACT_MAIL = "contato@mattiuz.com.br";
// Chave de envio (Web3Forms) — cadastre contato@mattiuz.com.br em web3forms.com e cole a chave aqui.
// Enquanto estiver vazia, o site abre o e-mail no cliente do usuário como plano B.
const FORM_KEY = "cc9b5778-282c-4c0f-aa7c-7468c84577ba";

function sendMail(subject, body) {
  const a = document.createElement("a");
  a.href = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

async function postForm(subject, fields) {
  const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n");
  if (FORM_KEY) {
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: FORM_KEY, subject, from_name: "Site Mattiuz", replyto: fields.email || CONTACT_MAIL, message: body, ...fields }),
      });
      if ((await r.json()).success) return true;
    } catch (e) { /* cai no plano B */ }
  }
  sendMail(subject, body);
  return false;
}

function LineCard({ l, i, t, onAsk }) {
  return (
    <Cd3 className="line-card" pad={0} style={{ display: "grid", gridTemplateColumns: "200px 1fr", overflow: "hidden" }}>
      <div style={{ position: "relative", background: "var(--mtz-mist)", minHeight: 300 }}>
        {window.LINE_SRC[i]
<<<<<<< HEAD
          ? <img src={IMG + "lines/" + window.LINE_SRC[i]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
=======
          ? <img src={IMG + "lines/" + window.LINE_SRC[i]} alt={`${l.t} — ${l.spec}`} loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
>>>>>>> 57863d1 (site limpo)
          : <image-slot id={"mtz-port-line-" + (i + 1)} shape="rect" placeholder={l.img} style={{ position: "absolute", inset: 0 }}></image-slot>}
      </div>
      <div style={{ padding: "26px 28px 24px", display: "flex", flexDirection: "column" }}>
        <div style={{ font: "600 10px/1 var(--font-body)", letterSpacing: ".2em", color: "var(--mtz-steel)" }}>{l.lab}</div>
        <div style={{ font: "300 27px/1.2 var(--font-display)", color: "var(--text-strong)", margin: "12px 0 8px" }}>{l.t}</div>
        <div style={{ font: "400 12px/1.6 var(--font-body)", color: "var(--text-muted)", paddingBottom: 14, borderBottom: "var(--line-hair)" }}>{l.spec}</div>
        <p style={{ font: "400 13.5px/1.75 var(--font-body)", color: "var(--text-body)", margin: "14px 0 0", textWrap: "pretty" }}>{l.txt}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {l.apps.split(" · ").map((a) => (
            <span key={a} style={{ font: "400 11.5px/1 var(--font-body)", color: "var(--text-muted)", border: "var(--line-hair)", padding: "6px 10px" }}>{a}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 22 }}>{l.seal.map((s, k) => <Bdg3 key={s} tone={k === 0 ? "neutral" : "navy"}>{s}</Bdg3>)}</div>
        <div style={{ marginTop: 14 }}><Btn3 variant="outline" size="sm" onClick={onAsk}>{t.ask}</Btn3></div>
      </div>
    </Cd3>
  );
}

function Portfolio({ t, go }) {
  const [ask, setAsk] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const [req, setReq] = React.useState({ email: "", vol: t.vols[0], cb: true });
  const [busy, setBusy] = React.useState(false);
  const openAsk = (l) => { setReq({ email: "", vol: t.vols[0], cb: true }); setAsk(l); };
  const submitAsk = async () => {
    const l = ask;
    setBusy(true);
    await postForm(t.dlg_t + l.t, {
      [t.dlg_email]: req.email,
      [t.dlg_vol]: req.vol,
      [t.dlg_cb]: req.cb ? t.f_yes : t.f_no,
      [t.prod_over]: `${l.lab} · ${l.t} — ${l.spec}`,
    });
    setBusy(false);
    setAsk(null);
    setToast(true);
  };
  return (
    <main data-screen-label="Portfólio">
      <div className="portfolio-main" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 88px" }}>
      <SH3 overline={t.port_over} title={t.port_t} lead={t.port_l} />
      <div className="portfolio-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "var(--line-hair)", borderBottom: "var(--line-hair)", marginTop: 44 }}>
        {t.port_nums.split(" · ").map((n, i) => (
          <div key={i} style={{ padding: "20px 24px", borderLeft: i ? "var(--line-hair)" : "none", font: "300 16px/1.4 var(--font-display)", color: "var(--text-strong)" }}>{n}</div>
        ))}
      </div>
      <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 40 }}>
        {t.lines.map((l, i) => <LineCard key={l.t} l={l} i={i} t={t} onAsk={() => openAsk(l)} />)}
      </div>
      </div>
      <section style={{ background: "var(--mtz-navy)" }}>
        <div className="portfolio-foot" style={{ maxWidth: 640, margin: "0 auto", padding: "72px 32px", textAlign: "center" }}>
          <h2 style={{ font: "300 32px/1.25 var(--font-display)", color: "var(--mtz-paper)", margin: "0 0 14px" }}>{t.port_foot_t}</h2>
          <p style={{ font: "400 14.5px/1.75 var(--font-body)", color: "var(--mtz-gray)", margin: "0 0 30px" }}>{t.port_foot_p}</p>
          <Btn3 variant="inverse" size="lg" onClick={() => go("contact")}>{t.port_foot_b}</Btn3>
        </div>
      </section>
      <Dlg3 open={!!ask} onClose={() => setAsk(null)} title={t.dlg_t + (ask ? ask.t : "")}
        actions={<React.Fragment><Btn3 variant="ghost" onClick={() => setAsk(null)}>{t.cancel}</Btn3><Btn3 onClick={submitAsk} disabled={busy}>{busy ? t.f_sending : t.send_req}</Btn3></React.Fragment>}>
        <div style={{ display: "grid", gap: 16 }}>
          <In3 label={t.dlg_email} placeholder={t.f_email_ph} type="email" value={req.email} onChange={(e) => setReq({ ...req, email: e.target.value })} />
          <Sel3 label={t.dlg_vol} options={t.vols} value={req.vol} onChange={(e) => setReq({ ...req, vol: e.target.value })} />
          <Cb3 label={t.dlg_cb} checked={req.cb} onChange={(c) => setReq({ ...req, cb: c })} />
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
  const [busy, setBusy] = React.useState(false);
  const [country, setCountry] = React.useState(t.countries[0]);
  const [v, setV] = React.useState({ client: t.f_no, reason: t.reasons[0], subject: "", name: "", email: "", doc: "", phone: "", msg: "" });
  const isBR = country === t.countries[0];
  const set = (k) => (e) => setV({ ...v, [k]: e && e.target ? e.target.value : e });
  const submit = async () => {
    setBusy(true);
    await postForm(v.subject.trim() || `${t.c_over} — ${v.reason}`, {
      [t.f_client]: v.client,
      [t.f_country]: country,
      [t.f_reason]: v.reason,
      [t.f_fullname]: v.name,
      email: v.email,
      [isBR ? t.f_doc_br : t.f_doc_intl]: v.doc,
      [t.f_phone]: v.phone,
      [t.f_msg]: v.msg,
    });
    setBusy(false);
    setSent(true);
  };
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
              <Rd3 direction="row" options={[t.f_yes, t.f_no]} value={v.client} onChange={set("client")} />
            </Labeled>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Sel3 label={t.f_country} options={t.countries} value={country} onChange={(e) => setCountry(e.target.value)} />
              <Sel3 label={t.f_reason} options={t.reasons} value={v.reason} onChange={set("reason")} />
            </div>
            <In3 label={t.f_subject} placeholder={t.f_subject_ph} value={v.subject} onChange={set("subject")} />
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <In3 label={t.f_fullname} placeholder={t.f_fullname_ph} value={v.name} onChange={set("name")} />
              <In3 label={t.f_email} placeholder={t.f_email_ph} type="email" value={v.email} onChange={set("email")} />
            </div>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <In3 label={isBR ? t.f_doc_br : t.f_doc_intl} placeholder={t.f_doc_ph} value={v.doc} onChange={set("doc")} />
              <In3 label={t.f_phone} placeholder={t.f_phone_ph} value={v.phone} onChange={set("phone")} />
            </div>
            <Labeled label={t.f_msg}>
              <textarea placeholder={t.f_msg_ph} rows={4} value={v.msg} onChange={set("msg")} style={{ padding: "12px 14px", font: "400 14px/1.5 var(--font-body)", color: "var(--text-strong)", background: "var(--mtz-white)", border: "var(--line-strong)", borderRadius: 0, outline: "none", resize: "vertical" }}></textarea>
            </Labeled>
            <Btn3 fullWidth size="lg" onClick={submit} disabled={busy}>{busy ? t.f_sending : t.f_send}</Btn3>
          </div>
        )}
      </Cd3>
      </div>
    </main>
  );
}

Object.assign(window, { Portfolio, Contact });
