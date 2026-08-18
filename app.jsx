function App() {
  const [page, setPage] = React.useState("home");
  const [lang, setLang] = React.useState(localStorage.getItem("mtz-lang") || "pt");
  const t = window.T[lang];
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };
  const pick = (l) => { setLang(l); localStorage.setItem("mtz-lang", l); };
  return (
    <React.Fragment>
      <Header page={page} go={go} t={t} lang={lang} setLang={pick} />
      {page === "home" && <Home go={go} t={t} />}
      {page === "history" && <History go={go} t={t} />}
      {page === "portfolio" && <Portfolio t={t} />}
      {page === "contact" && <Contact t={t} />}
      {["sust", "carr", "etica", "lgpd"].includes(page) && <InstPage k={page} t={t} go={go} />}
      <Footer go={go} t={t} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
