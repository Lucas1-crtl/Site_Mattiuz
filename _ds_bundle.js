/* @ds-bundle: {"format":4,"namespace":"MattiuzDesignSystem_ac598e","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PatternBlock","sourcePath":"components/brand/PatternBlock.jsx"},{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"WaveElement","sourcePath":"components/brand/WaveElement.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"chrome.jsx":"9b9a30729e16","components/brand/Logo.jsx":"7008770909ad","components/brand/PatternBlock.jsx":"c3da46d0f832","components/brand/SectionHeader.jsx":"2abb4d8146b5","components/brand/WaveElement.jsx":"390bbe046cc0","components/display/Badge.jsx":"f070cea5bf58","components/display/Card.jsx":"fdfdb9e40e38","components/display/Divider.jsx":"38a001cbfe8e","components/display/Stat.jsx":"a8215ba74d1d","components/display/Tag.jsx":"517ece38ac28","components/feedback/Dialog.jsx":"5009c69e721e","components/feedback/Toast.jsx":"39d4213d1b9e","components/feedback/Tooltip.jsx":"a432b7add78b","components/forms/Button.jsx":"5227789e263f","components/forms/Checkbox.jsx":"c301e11940e3","components/forms/Input.jsx":"7f98839cc88d","components/forms/Radio.jsx":"84477febcb9c","components/forms/Select.jsx":"7a8499a1e547","components/forms/Switch.jsx":"8cfb2c99a52b","components/navigation/Tabs.jsx":"7af26ffbf67e","export/mattiuz-site/app.jsx":"9f5f222aa4a8","export/mattiuz-site/chrome.jsx":"0797b05046e3","export/mattiuz-site/contact.jsx":"1098c3528d93","export/mattiuz-site/historia.jsx":"2e89ffbbdb77","export/mattiuz-site/i18n.jsx":"1cc483b3031b","export/mattiuz-site/image-slot.js":"fff26d081c8d","export/mattiuz-site/institucional.jsx":"9954457caf32","export/mattiuz-site/pages.jsx":"4caaf772a4d1","institucional.jsx":"6a94e9f69341","pages.jsx":"5053fb49739c","ui_kits/website/app.jsx":"9f5f222aa4a8","ui_kits/website/chrome.jsx":"c51409ff24b6","ui_kits/website/contact.jsx":"2f8b108f2de2","ui_kits/website/historia.jsx":"2e89ffbbdb77","ui_kits/website/i18n.jsx":"f670551e0760","ui_kits/website/image-slot.js":"fff26d081c8d","ui_kits/website/institucional.jsx":"9954457caf32","ui_kits/website/pages.jsx":"c03a6cc65ed6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MattiuzDesignSystem_ac598e = window.MattiuzDesignSystem_ac598e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// chrome.jsx
try { (() => {
const DS = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  Button
} = DS;
const IMG = "../../assets/imagery/";
function NavLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 2px",
      font: "600 11px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: active || h ? "var(--mtz-navy)" : "var(--text-muted)",
      borderBottom: active ? "2px solid var(--mtz-navy)" : "2px solid transparent",
      transition: "color var(--dur-fast)"
    }
  }, label);
}
function LangSwitch({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      border: "var(--line-hair)",
      padding: 2
    }
  }, ["pt", "en", "it"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: lang === l ? "var(--mtz-navy)" : "transparent",
      color: lang === l ? "var(--mtz-paper)" : "var(--text-muted)",
      border: "none",
      cursor: "pointer",
      padding: "5px 8px",
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".12em",
      transition: "background var(--dur-fast)"
    }
  }, l.toUpperCase())));
}
function Header({
  page,
  go,
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "color-mix(in srgb,var(--mtz-paper) 92%,transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-2",
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_home,
    active: page === "home",
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_hist,
    active: page === "history",
    onClick: () => go("history")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_port,
    active: page === "portfolio",
    onClick: () => go("portfolio")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_contact,
    active: page === "contact",
    onClick: () => go("contact")
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact"),
    "data-comment-anchor": "56905b6049-button-38-11"
  }, t.nav_cta), /*#__PURE__*/React.createElement(LangSwitch, {
    lang: lang,
    setLang: setLang
  }))));
}
function Footer({
  go,
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--mtz-ink)",
      color: "var(--mtz-gray)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    color: "white",
    height: 54
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12.5px/1.7 var(--font-body)",
      maxWidth: 320,
      marginTop: 18
    }
  }, t.foot_desc), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".2em",
      color: "var(--mtz-steel)",
      marginTop: 16
    }
  }, "LATAM \xB7 CHINA \xB7 ITALIA")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".22em",
      color: "var(--mtz-steel)",
      marginBottom: 14
    }
  }, t.foot_nav), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: {
      display: "block",
      color: "var(--mtz-gray)",
      cursor: "pointer"
    }
  }, t.nav_home), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("history"),
    style: {
      display: "block",
      color: "var(--mtz-gray)",
      cursor: "pointer"
    }
  }, t.nav_hist), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("portfolio"),
    style: {
      display: "block",
      color: "var(--mtz-gray)",
      cursor: "pointer"
    }
  }, t.nav_port), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("contact"),
    style: {
      display: "block",
      color: "var(--mtz-gray)",
      cursor: "pointer"
    }
  }, t.nav_contact)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".22em",
      color: "var(--mtz-steel)",
      marginBottom: 14
    }
  }, t.foot_contact), /*#__PURE__*/React.createElement("div", null, "comercial@mattiuz.com.br"), /*#__PURE__*/React.createElement("div", null, "+55 47 0000 0000"), /*#__PURE__*/React.createElement("div", null, "Blumenau, Santa Catarina \u2014 Brasil"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 15%,transparent)",
      marginTop: 40,
      paddingTop: 20,
      display: "flex",
      justifyContent: "space-between",
      font: "400 11px/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, t.foot_rights), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: ".2em"
    }
  }, t.foot_tag))));
}
Object.assign(window, {
  Header,
  Footer,
  NavLink,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "chrome.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dsBase = (() => {
  const s = document.querySelector('script[src*="_ds_bundle"]');
  return s ? s.src.slice(0, s.src.lastIndexOf("/") + 1) : "";
})();
const FILES = ["horizontal-blue", "horizontal-steel", "horizontal-white", "horizontal-black", "horizontal-2-blue", "vertical-blue", "vertical-white", "icon-blue", "icon-steel", "icon-white", "icon-black", "submark-blue", "submark-white", "wordmark-blue", "wordmark-white", "wordmark-2-blue"];
/** Official Mattiuz logo SVGs from assets/logo/. Falls back to the blue colorway when a combo isn't shipped. */
function Logo({
  variant = "horizontal",
  color = "blue",
  height = 48,
  style,
  ...rest
}) {
  const want = `${variant}-${color}`;
  const file = FILES.includes(want) ? want : FILES.includes(`${variant}-blue`) ? `${variant}-blue` : "horizontal-blue";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${dsBase}assets/logo/${file}.svg`,
    alt: "Mattiuz",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dsBase = (() => {
  const s = document.querySelector('script[src*="_ds_bundle"]');
  return s ? s.src.slice(0, s.src.lastIndexOf("/") + 1) : "";
})();
const BG = {
  1: "var(--mtz-paper)",
  2: "var(--mtz-navy)",
  3: "var(--mtz-navy)",
  4: "var(--mtz-paper)",
  5: "var(--mtz-gray)"
};
/** Estampa texture block — the brand weave pattern tiled as a background. */
function PatternBlock({
  tile = 1,
  bg,
  tileSize = 130,
  style,
  children,
  ...rest
}) {
  const t = Math.min(5, Math.max(1, tile));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: `${bg || BG[t]} url(${dsBase}assets/pattern/estampa-${t}.svg)`,
      backgroundSize: `${tileSize}px`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PatternBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeader.jsx
try { (() => {
/** Canonical Mattiuz section header: tracked overline + light Fahkwang title + optional lead. */
function SectionHeader({
  overline,
  title,
  lead,
  onDark = false,
  align = "left",
  style
}) {
  const c = onDark ? "var(--text-on-dark)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth: 720,
      margin: align === "center" ? "0 auto" : 0,
      ...style
    }
  }, overline && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 var(--text-overline)/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: onDark ? "var(--mtz-steel)" : "var(--mtz-navy)",
      marginBottom: 14,
      textTransform: "uppercase"
    }
  }, overline), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 var(--text-h2)/var(--leading-heading) var(--font-display)",
      letterSpacing: "var(--track-heading)",
      color: c,
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 var(--text-body-md)/var(--leading-body) var(--font-body)",
      color: onDark ? "var(--mtz-gray)" : "var(--text-muted)",
      margin: "14px 0 0"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/WaveElement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dsBase = (() => {
  const s = document.querySelector('script[src*="_ds_bundle"]');
  return s ? s.src.slice(0, s.src.lastIndexOf("/") + 1) : "";
})();
/** Brand support element — wave-glyph composition (assets/icons/, 11 variants). Decorative accent, not a functional icon. */
function WaveElement({
  n = 1,
  height = 96,
  style,
  ...rest
}) {
  const i = String(Math.min(11, Math.max(1, n))).padStart(2, "0");
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${dsBase}assets/icons/icon-${i}.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { WaveElement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WaveElement.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  navy: {
    bg: "var(--mtz-navy)",
    c: "var(--mtz-paper)"
  },
  steel: {
    bg: "var(--mtz-steel)",
    c: "var(--mtz-ink)"
  },
  neutral: {
    bg: "var(--surface-sunken)",
    c: "var(--text-body)"
  },
  outline: {
    bg: "transparent",
    c: "var(--mtz-navy)",
    bd: "1px solid var(--mtz-navy)"
  },
  success: {
    bg: "var(--success)",
    c: "var(--mtz-paper)"
  },
  danger: {
    bg: "var(--danger)",
    c: "var(--mtz-paper)"
  }
};
/** Status badge — tracked uppercase micro label. */
function Badge({
  tone = "navy",
  children,
  style
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "5px 10px",
      background: t.bg,
      color: t.c,
      border: t.bd || "1px solid transparent",
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Content card — white, hairline, square. variant filled = paper; navy/ink = brand fields. */
function Card({
  variant = "line",
  pad = 24,
  children,
  style,
  ...rest
}) {
  const v = {
    line: {
      background: "var(--surface-card)",
      border: "var(--line-hair)",
      color: "var(--text-body)"
    },
    filled: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      color: "var(--text-body)"
    },
    navy: {
      background: "var(--surface-brand)",
      border: "1px solid transparent",
      color: "var(--text-on-dark)"
    },
    ink: {
      background: "var(--surface-inverse)",
      border: "1px solid transparent",
      color: "var(--text-on-dark)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...v,
      borderRadius: "var(--radius-0)",
      padding: pad,
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/** Hairline rule, optional tracked label. */
function Divider({
  label,
  onDark = false,
  style
}) {
  const line = {
    flex: 1,
    height: 1,
    background: onDark ? "color-mix(in srgb,var(--mtz-paper) 25%,transparent)" : "var(--border-line)"
  };
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: {
      ...line,
      flex: "none",
      width: "100%",
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: onDark ? "var(--mtz-gray)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/** Big-number stat — "força em números" content pillar. Light Fahkwang figure + tracked label. */
function Stat({
  value,
  label,
  detail,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 46px/1.05 var(--font-display)",
      color: onDark ? "var(--text-on-dark)" : "var(--mtz-navy)",
      letterSpacing: ".01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10.5px/1.4 var(--font-body)",
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: onDark ? "var(--mtz-steel)" : "var(--text-strong)",
      marginTop: 10
    }
  }, label), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: onDark ? "var(--mtz-gray)" : "var(--text-muted)",
      marginTop: 6
    }
  }, detail));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Removable filter tag/chip — 2px radius (the one softened corner). */
function Tag({
  children,
  onRemove,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      background: active ? "var(--mtz-navy)" : "var(--mtz-white)",
      color: active ? "var(--mtz-paper)" : "var(--text-body)",
      border: active ? "1px solid var(--mtz-navy)" : "var(--line-strong)",
      borderRadius: "var(--radius-tag)",
      font: "500 12px/1.2 var(--font-body)",
      cursor: onClick || onRemove ? "pointer" : "default",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      fontSize: 13,
      lineHeight: 1,
      opacity: 0.6
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog — square panel, overlay shadow (the brand's one shadow). */
function Dialog({
  open = false,
  onClose,
  title,
  children,
  actions,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "color-mix(in srgb,var(--mtz-ink) 55%,transparent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-overlay)",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "500 22px/1.25 var(--font-display)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      fontSize: 20,
      lineHeight: 1,
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 2
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.7 var(--font-body)",
      color: "var(--text-body)"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 28
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: "var(--mtz-navy)",
  success: "var(--success)",
  danger: "var(--danger)"
};
/** Toast — ink bar with tone edge. `inline` renders in flow (for specimens); default fixed bottom-left. */
function Toast({
  message,
  tone = "info",
  visible = true,
  inline = false,
  onDismiss
}) {
  if (!visible) return null;
  const pos = inline ? {} : {
    position: "fixed",
    left: 24,
    bottom: 24,
    zIndex: 110
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...pos,
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      padding: "14px 18px",
      borderLeft: `3px solid ${TONES[tone]}`,
      boxShadow: "var(--shadow-overlay)",
      font: "400 13.5px/1.5 var(--font-body)",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("span", null, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--mtz-gray)",
      fontSize: 16,
      cursor: "pointer",
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — ink capsule on hover/focus. */
function Tooltip({
  label,
  side = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      padding: "7px 12px",
      font: "400 12px/1.4 var(--font-body)",
      whiteSpace: "nowrap",
      zIndex: 120,
      boxShadow: "var(--shadow-overlay)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: "8px 16px",
  md: "12px 24px",
  lg: "16px 32px"
};
const FS = {
  sm: 11,
  md: 12,
  lg: 13
};
/** Mattiuz button — square corners, tracked uppercase Montserrat label, darkens on hover. */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [state, setState] = React.useState("rest");
  const base = {
    primary: {
      bg: "var(--btn-primary-bg)",
      hov: "var(--btn-primary-bg-hover)",
      act: "var(--btn-primary-bg-active)",
      color: "var(--mtz-paper)",
      border: "1px solid transparent"
    },
    outline: {
      bg: "transparent",
      hov: "var(--mtz-navy-wash)",
      act: "color-mix(in oklab,var(--mtz-navy),var(--mtz-paper) 84%)",
      color: "var(--mtz-navy)",
      border: "1px solid var(--mtz-navy)"
    },
    ghost: {
      bg: "transparent",
      hov: "var(--mtz-navy-wash)",
      act: "color-mix(in oklab,var(--mtz-navy),var(--mtz-paper) 84%)",
      color: "var(--mtz-navy)",
      border: "1px solid transparent"
    },
    inverse: {
      bg: "var(--mtz-paper)",
      hov: "var(--mtz-white)",
      act: "var(--mtz-gray)",
      color: "var(--mtz-navy)",
      border: "1px solid transparent"
    }
  }[variant];
  const bg = state === "active" ? base.act : state === "hover" ? base.hov : base.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("rest"),
    onMouseDown: () => setState("active"),
    onMouseUp: () => setState("hover"),
    style: {
      display: "inline-block",
      width: fullWidth ? "100%" : undefined,
      padding: PAD[size],
      background: bg,
      color: base.color,
      border: base.border,
      borderRadius: "var(--radius-0)",
      font: `600 ${FS[size]}px/1.2 var(--font-body)`,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square checkbox — navy fill when checked. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [own, setOwn] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : own;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setOwn(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    },
    onClick: e => {
      e.preventDefault();
      toggle();
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      border: isOn ? "1px solid var(--mtz-navy)" : "var(--line-strong)",
      background: isOn ? "var(--mtz-navy)" : "var(--mtz-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast)"
    }
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4l2.7 2.7L9 1",
    stroke: "var(--mtz-paper)",
    strokeWidth: "1.6"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1.4 var(--font-body)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let uid = 0;
/** Text input with tracked uppercase label — square, hairline, navy focus. */
function Input({
  label,
  hint,
  error,
  type = "text",
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useRef(`mtz-in-${++uid}`).current;
  const border = error ? "1px solid var(--danger)" : focus ? "1px solid var(--mtz-navy)" : "var(--line-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "600 10.5px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      padding: "12px 14px",
      font: "400 14px/1.4 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-white)",
      border,
      borderRadius: 0,
      outline: "none",
      boxShadow: focus ? "0 0 0 3px color-mix(in srgb,var(--focus-ring) 30%,transparent)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...inputStyle
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px/1.5 var(--font-body)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. options: string[] or {value,label}[]. Controlled or uncontrolled. */
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = "column",
  style
}) {
  const [own, setOwn] = React.useState(defaultValue);
  const cur = value !== undefined ? value : own;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const pick = v => {
    if (value === undefined) setOwn(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "column" ? 10 : 20,
      ...style
    }
  }, opts.map(o => {
    const on = cur === o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer"
      },
      onClick: () => pick(o.value)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: "none",
        borderRadius: "50%",
        border: on ? "1px solid var(--mtz-navy)" : "var(--line-strong)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--mtz-navy)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 14px/1.4 var(--font-body)",
        color: "var(--text-body)"
      }
    }, o.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let uid = 0;
/** Native select styled to match Input. options: string[] or {value,label}[]. */
function Select({
  label,
  hint,
  options = [],
  style,
  selectStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useRef(`mtz-sel-${++uid}`).current;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "600 10.5px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      padding: "12px 38px 12px 14px",
      font: "400 14px/1.4 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-white)",
      border: focus ? "1px solid var(--mtz-navy)" : "var(--line-strong)",
      borderRadius: 0,
      outline: "none",
      boxShadow: focus ? "0 0 0 3px color-mix(in srgb,var(--focus-ring) 30%,transparent)" : "none",
      cursor: "pointer",
      ...selectStyle
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--mtz-navy)",
      fontSize: 10
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — square track, navy when on. Controlled or uncontrolled. */
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [own, setOwn] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : own;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setOwn(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    },
    onClick: e => {
      e.preventDefault();
      toggle();
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flex: "none",
      background: on ? "var(--mtz-navy)" : "var(--mtz-gray)",
      position: "relative",
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 16,
      height: 16,
      background: "var(--mtz-white)",
      transition: "left var(--dur-fast) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1.4 var(--font-body)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs — navy indicator, tracked caps labels. Controlled or uncontrolled. */
function Tabs({
  items = [],
  active,
  defaultActive = 0,
  onChange,
  onDark = false,
  style
}) {
  const [own, setOwn] = React.useState(defaultActive);
  const cur = active !== undefined ? active : own;
  const pick = i => {
    if (active === undefined) setOwn(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 32,
      borderBottom: onDark ? "1px solid color-mix(in srgb,var(--mtz-paper) 25%,transparent)" : "var(--line-hair)",
      ...style
    }
  }, items.map((it, i) => {
    const on = i === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(i),
      style: {
        background: "none",
        border: "none",
        padding: "12px 2px",
        marginBottom: -1,
        cursor: "pointer",
        font: "600 11.5px/1 var(--font-body)",
        letterSpacing: ".16em",
        textTransform: "uppercase",
        color: on ? onDark ? "var(--mtz-paper)" : "var(--mtz-navy)" : onDark ? "var(--mtz-gray)" : "var(--text-muted)",
        borderBottom: on ? `2px solid ${onDark ? "var(--mtz-steel)" : "var(--mtz-navy)"}` : "2px solid transparent",
        transition: "color var(--dur-fast)"
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/app.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState("home");
  const [lang, setLang] = React.useState(localStorage.getItem("mtz-lang") || "pt");
  const t = window.T[lang];
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const pick = l => {
    setLang(l);
    localStorage.setItem("mtz-lang", l);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    page: page,
    go: go,
    t: t,
    lang: lang,
    setLang: pick
  }), page === "home" && /*#__PURE__*/React.createElement(Home, {
    go: go,
    t: t
  }), page === "history" && /*#__PURE__*/React.createElement(History, {
    go: go,
    t: t
  }), page === "portfolio" && /*#__PURE__*/React.createElement(Portfolio, {
    t: t
  }), page === "contact" && /*#__PURE__*/React.createElement(Contact, {
    t: t
  }), ["sust", "carr", "etica", "lgpd"].includes(page) && /*#__PURE__*/React.createElement(InstPage, {
    k: page,
    t: t,
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    go: go,
    t: t
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/app.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/chrome.jsx
try { (() => {
const DS = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  Button
} = DS;
const IMG = "assets/imagery/";
function NavLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 2px",
      font: "600 11px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: active || h ? "var(--mtz-navy)" : "var(--text-muted)",
      borderBottom: active ? "2px solid var(--mtz-navy)" : "2px solid transparent",
      transition: "color var(--dur-fast)"
    }
  }, label);
}
function UtilLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      font: "500 9.5px/1 var(--font-body)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: active || h ? "var(--mtz-paper)" : "var(--mtz-gray)",
      transition: "color var(--dur-fast)"
    }
  }, label);
}
function LangSwitch({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, ["pt", "en", "it"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: lang === l ? "var(--mtz-paper)" : "transparent",
      color: lang === l ? "var(--mtz-navy)" : "var(--mtz-gray)",
      border: "none",
      cursor: "pointer",
      padding: "4px 7px",
      font: "600 9px/1 var(--font-body)",
      letterSpacing: ".12em",
      transition: "background var(--dur-fast)"
    }
  }, l.toUpperCase())));
}
function Header({
  page,
  go,
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mtz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_sust,
    active: page === "sust",
    onClick: () => go("sust")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_carr,
    active: page === "carr",
    onClick: () => go("carr")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_etica,
    active: page === "etica",
    onClick: () => go("etica")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_lgpd,
    active: page === "lgpd",
    onClick: () => go("lgpd")
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 14,
      background: "color-mix(in srgb,var(--mtz-paper) 25%,transparent)"
    }
  }), /*#__PURE__*/React.createElement(LangSwitch, {
    lang: lang,
    setLang: setLang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "color-mix(in srgb,var(--mtz-paper) 92%,transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-2",
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_home,
    active: page === "home",
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_hist,
    active: page === "history",
    onClick: () => go("history")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_port,
    active: page === "portfolio",
    onClick: () => go("portfolio")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_contact,
    active: page === "contact",
    onClick: () => go("contact")
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("portfolio")
  }, t.nav_cta)))));
}
function Footer({
  go,
  t
}) {
  const link = {
    display: "block",
    color: "var(--mtz-gray)",
    cursor: "pointer"
  };
  const colTitle = {
    font: "600 10px/1 var(--font-body)",
    letterSpacing: ".22em",
    color: "var(--mtz-steel)",
    marginBottom: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--mtz-ink)",
      color: "var(--mtz-gray)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.8fr 1fr 1.1fr 1.1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    color: "white",
    height: 54
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12.5px/1.7 var(--font-body)",
      maxWidth: 300,
      marginTop: 18
    }
  }, t.foot_desc), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".2em",
      color: "var(--mtz-steel)",
      marginTop: 16
    }
  }, t.foot_regions)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_nav), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: link
  }, t.nav_home), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("history"),
    style: link
  }, t.nav_hist), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("portfolio"),
    style: link
  }, t.nav_port), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("contact"),
    style: link
  }, t.nav_contact)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_inst), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("sust"),
    style: link
  }, t.u_sust), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("carr"),
    style: link
  }, t.u_carr), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("etica"),
    style: link
  }, t.u_etica), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("lgpd"),
    style: link
  }, t.u_lgpd)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_contact), /*#__PURE__*/React.createElement("div", null, "comercial@mattiuz.com.br"), /*#__PURE__*/React.createElement("div", null, "+55 47 0000 0000"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".2em",
      color: "var(--mtz-steel)",
      margin: "16px 0 6px"
    }
  }, t.foot_hq), /*#__PURE__*/React.createElement("div", null, t.foot_addr))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 15%,transparent)",
      marginTop: 40,
      paddingTop: 20,
      display: "flex",
      justifyContent: "space-between",
      font: "400 11px/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, t.foot_rights), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: ".2em"
    }
  }, t.foot_tag))));
}
Object.assign(window, {
  Header,
  Footer,
  NavLink,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/chrome.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/contact.jsx
try { (() => {
const DS3 = window.MattiuzDesignSystem_ac598e;
const {
  SectionHeader: SH3,
  Button: Btn3,
  Input: In3,
  Select: Sel3,
  Checkbox: Cb3,
  Radio: Rd3,
  Card: Cd3,
  Divider: Dv3,
  Tabs: Tb3,
  Dialog: Dlg3,
  Toast: Ts3
} = DS3;
const CAT_KEYS = ["all", "fus", "malha", "tecido", "nt"];
function Portfolio({
  t
}) {
  const [tab, setTab] = React.useState(0);
  const [ask, setAsk] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const items = [t.cat_all, t.cats.fus, t.cats.malha, t.cats.tecido, t.cats.nt];
  const list = window.PRODUCTS.filter(p => tab === 0 || p.cat === CAT_KEYS[tab]);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Portf\xF3lio",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 88px"
    }
  }, /*#__PURE__*/React.createElement(SH3, {
    overline: t.prod_over,
    title: "Plusupper",
    lead: t.port_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Tb3, {
    items: items,
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 28
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    p: p,
    t: t,
    onAsk: () => setAsk(p)
  }))), /*#__PURE__*/React.createElement(Dlg3, {
    open: !!ask,
    onClose: () => setAsk(null),
    title: t.dlg_t + (ask ? ask.name : ""),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn3, {
      variant: "ghost",
      onClick: () => setAsk(null)
    }, t.cancel), /*#__PURE__*/React.createElement(Btn3, {
      onClick: () => {
        setAsk(null);
        setToast(true);
      }
    }, t.send_req))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: t.dlg_email,
    placeholder: t.f_email_ph
  }), /*#__PURE__*/React.createElement(Sel3, {
    label: t.dlg_vol,
    options: t.vols
  }), /*#__PURE__*/React.createElement(Cb3, {
    label: t.dlg_cb,
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement(Ts3, {
    visible: toast,
    message: t.toast_ok,
    tone: "success",
    onDismiss: () => setToast(false)
  }));
}
function Labeled({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 10.5px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), children);
}
function Contact({
  t
}) {
  const [sent, setSent] = React.useState(false);
  const [country, setCountry] = React.useState(t.countries[0]);
  const isBR = country === t.countries[0];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Contato",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 88px",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SH3, {
    overline: t.c_over,
    title: t.c_t,
    lead: t.c_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Dv3, {
    label: t.c_div
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.75 var(--font-body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, t.c_steps[0], /*#__PURE__*/React.createElement("br", null), t.c_steps[1], /*#__PURE__*/React.createElement("br", null), t.c_steps[2]), /*#__PURE__*/React.createElement("img", {
    src: IMG + "workwear.png",
    alt: "Mattiuz",
    style: {
      width: "100%",
      display: "block",
      marginTop: 8
    }
  }))), /*#__PURE__*/React.createElement(Cd3, {
    pad: 32,
    style: {
      alignSelf: "start"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 26px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 10
    }
  }, t.sent_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, t.sent_p), /*#__PURE__*/React.createElement(Btn3, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, t.sent_again)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Labeled, {
    label: t.f_client
  }, /*#__PURE__*/React.createElement(Rd3, {
    direction: "row",
    options: [t.f_yes, t.f_no],
    defaultValue: t.f_no
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Sel3, {
    label: t.f_country,
    options: t.countries,
    value: country,
    onChange: e => setCountry(e.target.value)
  }), /*#__PURE__*/React.createElement(Sel3, {
    label: t.f_reason,
    options: t.reasons
  })), /*#__PURE__*/React.createElement(In3, {
    label: t.f_subject,
    placeholder: t.f_subject_ph
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: t.f_fullname,
    placeholder: t.f_fullname_ph
  }), /*#__PURE__*/React.createElement(In3, {
    label: t.f_email,
    placeholder: t.f_email_ph
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: isBR ? t.f_doc_br : t.f_doc_intl,
    placeholder: t.f_doc_ph
  }), /*#__PURE__*/React.createElement(In3, {
    label: t.f_phone,
    placeholder: t.f_phone_ph
  })), /*#__PURE__*/React.createElement(Labeled, {
    label: t.f_msg
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: t.f_msg_ph,
    rows: 4,
    style: {
      padding: "12px 14px",
      font: "400 14px/1.5 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-white)",
      border: "var(--line-strong)",
      borderRadius: 0,
      outline: "none",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(Btn3, {
    fullWidth: true,
    size: "lg",
    onClick: () => setSent(true)
  }, t.f_send))));
}
Object.assign(window, {
  Portfolio,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/contact.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/historia.jsx
try { (() => {
const DS4 = window.MattiuzDesignSystem_ac598e;
const {
  SectionHeader: SH4,
  Button: Btn4,
  Divider: Dv4,
  PatternBlock: PB4,
  WaveElement: WE4,
  Card: Cd4,
  Logo: Lg4
} = DS4;
function History({
  go,
  t
}) {
  const blocks = [[t.h_b1t, t.h_b1], [t.h_b2t, t.h_b2], [t.h_b3t, t.h_b3]];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Nossa Hist\xF3ria"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-ink)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PB4, {
    tile: 5,
    tileSize: 140,
    bg: "transparent",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 300,
      opacity: .35,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px",
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: 56,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 22,
      textTransform: "uppercase"
    }
  }, t.h_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 48px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0
    }
  }, t.h_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15.5px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 480,
      margin: "24px 0 0"
    }
  }, t.h_lead)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-familia.png",
    alt: "",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--mtz-gray)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_capHero)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 0
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "0 36px",
      borderLeft: i ? "var(--line-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 44px/1 var(--font-display)",
      color: "var(--mtz-steel)",
      marginBottom: 18
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 19px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, b[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.75 var(--font-body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, b[1]))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-cafe.png",
    alt: "",
    style: {
      width: "100%",
      height: 280,
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_cap1)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-fiacao.png",
    alt: "",
    style: {
      width: "100%",
      height: 280,
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_cap2)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      background: "var(--mtz-ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "planta-mattiuz.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 32%",
      display: "block",
      filter: "grayscale(1)",
      opacity: .45
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WE4, {
    n: 8,
    height: 54,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 32px/1.2 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: "0 0 16px"
    }
  }, t.h_dt), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14.5px/1.8 var(--font-body)",
      color: "var(--mtz-gray)",
      margin: 0
    }
  }, t.h_d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(SH4, {
    overline: t.pres_over,
    title: t.pres_t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, t.pres.map((p, i) => /*#__PURE__*/React.createElement(Cd4, {
    key: i,
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".24em",
      color: "var(--mtz-navy)",
      marginBottom: 14
    }
  }, t.pres_labels[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 26px/1.1 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, p[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13px/1.7 var(--font-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, p[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Lg4, {
    variant: "icon",
    height: 40,
    style: {
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn4, {
    size: "lg",
    onClick: () => go("portfolio")
  }, t.h_cta)))));
}
Object.assign(window, {
  History
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/historia.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/i18n.jsx
try { (() => {
const T = {
  pt: {
    nav_home: "Início",
    nav_hist: "Nossa História",
    nav_port: "Portfólio",
    nav_contact: "Contato",
    nav_cta: "Conhecer soluções",
    u_sust: "Sustentabilidade",
    u_carr: "Carreiras",
    u_etica: "Canal de Ética",
    u_lgpd: "LGPD",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Inovação em",
    hero_h1b: "cada fibra",
    hero_p: "Engenharia e fabricação de materiais têxteis de alta performance, sob medida para cada mercado. Conheça o que há de mais moderno na indústria têxtil mundial.",
    hero_b1: "Conheça nossas soluções",
    hero_b2: "Nossa história",
    eixos_over: "Nossos pilares",
    eixos_t: "O que nos coloca entre os melhores do mundo",
    eixos_l: "Qualidade de insumo, engenharia própria e logística de fornecimento — os fundamentos de cada rolo entregue.",
    eixos: [["Consultores dedicados", "Times de consultoria dedicados à seleção de portfólio, conforme a demanda de cada mercado."], ["Engenharia própria", "Laboratório e corpo técnico próprios, do desenvolvimento do adesivo ao teste de aplicação."], ["Insumos selecionados", "Bases e resinas das melhores origens do mundo, qualificadas lote a lote."], ["Produção para estoque", "Fabricação para estoque com +40 dias de inventário — fornecimento sem ruptura."], ["Inovação contínua", "Portfólio em evolução permanente, com o que há de mais moderno no têxtil mundial."]],
    fab_over: "Fabricação",
    fab_t: "Da fibra ao rolo",
    fab_p: "Linhas de cobertura adesiva, ressinagem e acabamento entre as mais modernas do mundo — a mesma disciplina em cada lote.",
    fab_bg: "Solte aqui a imagem de engenharia (abstrato geométrico/celular) — vira fundo em transparência",
    stats_over: "Força em números",
    stats_t: "Fabricação com garantia",
    s1v: "250 km",
    s1l: "Capacidade diária",
    s1d: "de produção de entretela",
    s2v: "+40",
    s2l: "Dias de inventário",
    s2d: "para EUR e LATAM",
    s3v: "3",
    s3l: "Continentes",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Presença global",
    pres_t: "Três continentes, um padrão",
    pres_labels: ["AMÉRICA LATINA", "EUROPA", "ÁSIA"],
    pres: [["Brasil", "Fabricação, distribuição, estoque e apoio técnico a partir do Brasil — atendendo Paraguai, Chile, Argentina, Colômbia e México."], ["Itália", "Herança, identidade e desenvolvimento de produto com a qualidade do berço do design têxtil."], ["China", "Operação industrial e engenharia de processo nas plantas operacionais."]],
    prod_over: "Portfólio",
    prod_t: "Performance Materials",
    prod_l: "Têxteis técnicos e materiais inovadores para alfaiataria, camisaria e moda estruturada — linhas Plusupper.",
    prod_all: "Portfólio completo",
    cta_t: "Fale com a Mattiuz",
    cta_p: "Clientes e novos parceiros: nossa equipe direciona cada mensagem ao time certo.",
    cta_b: "Entrar em contato",
    stock: "Em estoque",
    consult: "Sob consulta",
    gram: "Gramatura ",
    ask: "Solicitar amostra",
    cats: {
      fus: "Fusível",
      malha: "Malha",
      tecido: "Tecido",
      nt: "Não tecido"
    },
    cat_all: "Todas",
    port_l: "Consultores dedicados especificam com sua equipe o material certo para cada coleção e maquinário.",
    dlg_t: "Solicitar amostra — ",
    dlg_email: "E-mail comercial",
    dlg_vol: "Volume mensal estimado",
    vols: ["Até 1.000 m", "1.000–10.000 m", "Acima de 10.000 m"],
    dlg_cb: "Desejo acompanhamento técnico na aplicação",
    cancel: "Cancelar",
    send_req: "Enviar solicitação",
    toast_ok: "Amostra solicitada. Nossa equipe técnica retorna em 1 dia útil.",
    c_over: "Contato",
    c_t: "Fale com a Mattiuz",
    c_l: "Direcionamos sua mensagem ao time certo — comercial, técnico ou institucional.",
    c_div: "Experiência consultiva",
    c_steps: ["Pré-venda: análise da coleção e testes de fusão.", "Durante: acompanhamento de lote e padronização.", "Pós-venda: suporte de aplicação e reposição garantida."],
    f_client: "Você já é cliente Mattiuz?",
    f_yes: "Sim",
    f_no: "Não",
    f_country: "País",
    countries: ["Brasil", "Argentina", "Chile", "Colômbia", "México", "Peru", "Estados Unidos", "Itália", "Outro"],
    f_reason: "Motivo do contato",
    reasons: ["Comercial", "Suporte técnico", "Logística e fornecimento", "Fornecedores", "Imprensa", "Outro"],
    f_subject: "Assunto",
    f_subject_ph: "Ex.: cotação linha Plusupper",
    f_fullname: "Nome completo",
    f_fullname_ph: "Seu nome",
    f_email: "E-mail comercial",
    f_email_ph: "nome@empresa.com.br",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Documento de identificação (Tax ID)",
    f_doc_ph: "Somente números",
    f_phone: "Telefone",
    f_phone_ph: "+55 (47) 90000-0000",
    f_msg: "Deixe sua mensagem",
    f_msg_ph: "Escreva sua mensagem",
    f_send: "Enviar",
    sent_t: "Recebido.",
    sent_p: "Retornamos em até 1 dia útil.",
    sent_again: "Nova mensagem",
    h_over: "Nossa história",
    h_t: "Herança italiana, tecida no Brasil",
    h_lead: "O nome Mattiuz carrega o sobrenome da família italiana que atravessou o oceano e fez do sul do Brasil a sua casa — e do têxtil, o seu ofício.",
    h_b1t: "A travessia",
    h_b1: "Como tantas famílias do Vêneto, os Mattiuz chegaram ao Brasil trazendo pouco além do próprio nome e de uma tradição de trabalho. A relação com o tecido começa aí: no rigor artesanal que a imigração italiana plantou na indústria do sul do país.",
    h_b2t: "O ofício",
    h_b2: "Foi a imigração que abriu a industrialização do sul do Brasil — e ela começou pelo têxtil, ainda no século XIX. Décadas de chão de fábrica formaram a base da empresa: conhecimento de fibra, de máquina e de gente.",
    h_b3t: "A marca",
    h_b3: "Mattiuz é a assinatura desse percurso — um nome italiano em um mercado de nomes alemães, unindo a herança do design italiano à disciplina industrial europeia.",
    h_dt: "Design italiano, padrão europeu",
    h_d: "A Itália é referência mundial em moda e design; a Europa, em padronização industrial. A Mattiuz traduz as duas tradições para o mercado global: desenho preciso de produto, processo auditado por lote e a elegância de quem fabrica para a alta costura.",
    h_capHero: "Família de imigrantes no sul do Brasil, início do século XX",
    h_cap1: "Das lavouras do interior…",
    h_cap2: "…às primeiras fiações: o têxtil abriu a industrialização do sul",
    h_cta: "Conheça nosso portfólio",
    foot_desc: "Fabricação e engenharia de materiais têxteis de alta performance para a cadeia global.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVEGAÇÃO",
    foot_inst: "INSTITUCIONAL",
    foot_contact: "CONTATO",
    foot_hq: "MATRIZ",
    foot_addr: "89000-000 · Blumenau/SC · Brasil",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INOVAÇÃO EM CADA FIBRA",
    inst: {
      sust: {
        t: "Sustentabilidade",
        p1: "Operamos com processos auditados, eficiência de água e energia e rastreabilidade de insumos em toda a cadeia — do fornecedor de base ao rolo entregue.",
        eco_t: "Produtos ecofriendly",
        eco_p: "Linhas desenvolvidas para reduzir o impacto da confecção — bases recicladas, adesivos de base biológica e processos de baixa emissão.",
        eco: [["Plusupper Eco R", "Base reciclada pós-consumo"], ["Plusupper Bio", "Adesivo de base biológica"], ["Plusupper Zero", "Processo de baixa emissão"]],
        rep_t: "Relatórios de sustentabilidade",
        reports: ["Relatório de Sustentabilidade 2025", "Relatório de Sustentabilidade 2024", "Inventário de Emissões 2025"],
        pol_t: "Políticas e certificações",
        policies: ["Política de Sustentabilidade", "Política de Diversidade, Equidade e Inclusão"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Carreiras",
        p1: "Engenharia, operações, logística e comercial: crescemos com gente que entende de fibra, de máquina e de mercado.",
        areas: [["Cultura", "Como pensamos e trabalhamos — da fibra ao mercado."], ["Clima Organizacional", "Pesquisas periódicas e planos de ação por área."], ["Qualidade de vida", "Saúde, segurança e bem-estar no chão de fábrica e no escritório."], ["Desenvolvimento", "Formação técnica contínua e programas de liderança."], ["Carreira", "Trilhas claras de crescimento e mobilidade interna."], ["Relatório de Equidade Salarial", "Publicação periódica, disponível para consulta."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Programa de Integridade",
        p1: "O Programa de Integridade da Mattiuz promove a ética, a integridade e a transparência em nossos negócios. Cumprimos as leis, regulamentos e políticas aplicáveis à nossa operação.",
        pillars_t: "Estrutura do programa",
        pillars: ["Compromisso e apoio da alta direção", "Gestão de risco de conformidade", "Formação e sensibilização", "Políticas e controles", "Código e Canal de Ética", "Continuidade e sustentabilidade"],
        code_t: "Código de Ética e Conduta",
        code_p: "À disposição de todos os públicos — profissionais, clientes, fornecedores e comunidade. Seu propósito é ser um guia, ajudando em momentos de dúvida.",
        comm_t: "Comitê de Ética e Conformidade",
        comm_p: "Avalia a elaboração, implantação e adequação do Programa de Integridade, com caráter consultivo, e supervisiona o programa e a equipe de conformidade.",
        canal_t: "Canal de Ética",
        canal_p: "Canal confidencial para relatos de condutas em desacordo com o nosso código. Os relatos podem ser anônimos e são apurados com independência.",
        canal_ph: "Descreva o relato (opcionalmente anônimo)",
        canal_send: "Enviar relato",
        canal_ok: "Relato registrado e encaminhado ao comitê.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "LGPD — Privacidade de Dados",
        p1: "Tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com transparência sobre finalidade, retenção e compartilhamento.",
        facts: [["Dados que tratamos", "Dados cadastrais e de contato de clientes, fornecedores e candidatos — somente o necessário para cada finalidade."], ["Seus direitos", "Confirmação, acesso, correção, portabilidade, eliminação e revogação de consentimento, a qualquer momento."], ["Segurança", "Controles técnicos e organizacionais de acesso, registro e retenção."], ["Encarregado (DPO)", "Canal dedicado para solicitações de titulares e autoridades."]],
        doc: "Política de Privacidade",
        mail: "dpo@mattiuz.com.br"
      }
    }
  },
  en: {
    nav_home: "Home",
    nav_hist: "Our History",
    nav_port: "Portfolio",
    nav_contact: "Contact",
    nav_cta: "Explore solutions",
    u_sust: "Sustainability",
    u_carr: "Careers",
    u_etica: "Ethics Line",
    u_lgpd: "Privacy",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Innovation in",
    hero_h1b: "every fiber",
    hero_p: "Engineering and manufacturing of high-performance textile materials, tailored to each market. Meet the most advanced in the world's textile industry.",
    hero_b1: "Explore our solutions",
    hero_b2: "Our history",
    eixos_over: "Our pillars",
    eixos_t: "What places us among the world's best",
    eixos_l: "Input quality, in-house engineering and supply logistics — the foundations of every roll delivered.",
    eixos: [["Dedicated consultants", "Consulting teams dedicated to portfolio selection, matched to each market's demand."], ["In-house engineering", "Our own laboratory and technical staff, from adhesive development to application testing."], ["Selected inputs", "Bases and resins from the world's best origins, qualified batch by batch."], ["Make-to-stock", "Production to stock with +40 days of inventory — supply without disruption."], ["Continuous innovation", "A portfolio in permanent evolution, with the most advanced in world textiles."]],
    fab_over: "Manufacturing",
    fab_t: "From fiber to roll",
    fab_p: "Adhesive coating and finishing lines among the world's most modern — the same discipline in every batch.",
    fab_bg: "Drop the engineering image here (geometric/cellular abstract) — becomes a translucent background",
    stats_over: "Strength in numbers",
    stats_t: "Manufacturing, guaranteed",
    s1v: "250 km",
    s1l: "Daily capacity",
    s1d: "of interlining production",
    s2v: "+40",
    s2l: "Days of inventory",
    s2d: "for EUR and LATAM",
    s3v: "3",
    s3l: "Continents",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Global presence",
    pres_t: "Three continents, one standard",
    pres_labels: ["LATIN AMERICA", "EUROPE", "ASIA"],
    pres: [["Brazil", "Manufacturing, distribution, inventory and technical support from Brazil — serving Paraguay, Chile, Argentina, Colombia and Mexico."], ["Italy", "Heritage, identity and product development with the quality of textile design's cradle."], ["China", "Industrial operations and process engineering at our operating plants."]],
    prod_over: "Portfolio",
    prod_t: "Performance Materials",
    prod_l: "Technical textiles and innovative materials for tailoring, shirting and structured fashion — the Plusupper lines.",
    prod_all: "Full portfolio",
    cta_t: "Talk to Mattiuz",
    cta_p: "Clients and new partners: our team routes every message to the right desk.",
    cta_b: "Get in touch",
    stock: "In stock",
    consult: "On request",
    gram: "Weight ",
    ask: "Request sample",
    cats: {
      fus: "Fusible",
      malha: "Knit",
      tecido: "Woven",
      nt: "Non-woven"
    },
    cat_all: "All",
    port_l: "Dedicated consultants specify with your team the right material for each collection and machinery.",
    dlg_t: "Request sample — ",
    dlg_email: "Business e-mail",
    dlg_vol: "Estimated monthly volume",
    vols: ["Up to 1,000 m", "1,000–10,000 m", "Above 10,000 m"],
    dlg_cb: "I want technical support during application",
    cancel: "Cancel",
    send_req: "Send request",
    toast_ok: "Sample requested. Our technical team replies within 1 business day.",
    c_over: "Contact",
    c_t: "Talk to Mattiuz",
    c_l: "We route your message to the right team — commercial, technical or corporate.",
    c_div: "Consultative experience",
    c_steps: ["Pre-sale: collection analysis and fusing tests.", "During: batch tracking and standardization.", "After-sale: application support and guaranteed replenishment."],
    f_client: "Are you already a Mattiuz client?",
    f_yes: "Yes",
    f_no: "No",
    f_country: "Country",
    countries: ["Brazil", "Argentina", "Chile", "Colombia", "Mexico", "Peru", "United States", "Italy", "Other"],
    f_reason: "Reason for contact",
    reasons: ["Commercial", "Technical support", "Logistics & supply", "Suppliers", "Press", "Other"],
    f_subject: "Subject",
    f_subject_ph: "E.g.: Plusupper line quotation",
    f_fullname: "Full name",
    f_fullname_ph: "Your name",
    f_email: "Business e-mail",
    f_email_ph: "name@company.com",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Identification document (Tax ID)",
    f_doc_ph: "Numbers only",
    f_phone: "Phone",
    f_phone_ph: "+1 (555) 000-0000",
    f_msg: "Leave your message",
    f_msg_ph: "Write your message",
    f_send: "Send",
    sent_t: "Received.",
    sent_p: "We reply within 1 business day.",
    sent_again: "New message",
    h_over: "Our history",
    h_t: "Italian heritage, woven in Brazil",
    h_lead: "The Mattiuz name carries the surname of the Italian family that crossed the ocean and made southern Brazil its home — and textiles, its craft.",
    h_b1t: "The crossing",
    h_b1: "Like so many families from Veneto, the Mattiuz arrived in Brazil carrying little beyond their own name and a tradition of work. The relationship with fabric begins there: in the artisanal rigor Italian immigration planted in the industry of southern Brazil.",
    h_b2t: "The craft",
    h_b2: "Immigration opened southern Brazil's industrialization — and it began with textiles, back in the 19th century. Decades on factory floors built the company's foundation: knowledge of fiber, machine and people.",
    h_b3t: "The brand",
    h_b3: "Mattiuz is the signature of that journey — an Italian name in a market of German names, joining Italian design heritage with European industrial discipline.",
    h_dt: "Italian design, European standard",
    h_d: "Italy is the world reference in fashion and design; Europe, in industrial standardization. Mattiuz translates both traditions for the global market: precise product design, batch-audited process, and the elegance of those who manufacture for high tailoring.",
    h_capHero: "Immigrant family in southern Brazil, early 20th century",
    h_cap1: "From the fields of the interior…",
    h_cap2: "…to the first spinning mills: textiles opened the south's industrialization",
    h_cta: "Explore our portfolio",
    foot_desc: "Manufacturing and engineering of high-performance textile materials for the global chain.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVIGATION",
    foot_inst: "CORPORATE",
    foot_contact: "CONTACT",
    foot_hq: "HEADQUARTERS",
    foot_addr: "89000-000 · Blumenau/SC · Brazil",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INNOVATION IN EVERY FIBER",
    inst: {
      sust: {
        t: "Sustainability",
        p1: "We operate with audited processes, water and energy efficiency and input traceability across the chain — from base supplier to delivered roll.",
        eco_t: "Ecofriendly products",
        eco_p: "Lines developed to reduce apparel's footprint — recycled bases, bio-based adhesives and low-emission processes.",
        eco: [["Plusupper Eco R", "Post-consumer recycled base"], ["Plusupper Bio", "Bio-based adhesive"], ["Plusupper Zero", "Low-emission process"]],
        rep_t: "Sustainability reports",
        reports: ["Sustainability Report 2025", "Sustainability Report 2024", "Emissions Inventory 2025"],
        pol_t: "Policies & certifications",
        policies: ["Sustainability Policy", "Diversity, Equity & Inclusion Policy"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Careers",
        p1: "Engineering, operations, logistics and commercial: we grow with people who understand fiber, machine and market.",
        areas: [["Culture", "How we think and work — from fiber to market."], ["Organizational Climate", "Periodic surveys and action plans per area."], ["Quality of Life", "Health, safety and well-being on the factory floor and in the office."], ["Development", "Continuous technical training and leadership programs."], ["Career", "Clear growth tracks and internal mobility."], ["Pay Equity Report", "Published periodically, available on request."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Integrity Program",
        p1: "Mattiuz's Integrity Program promotes ethics, integrity and transparency in our business. We comply with the laws, regulations and policies applicable to our operation.",
        pillars_t: "Program structure",
        pillars: ["Commitment and support from senior leadership", "Compliance risk management", "Training and awareness", "Policies and controls", "Code and Ethics Line", "Continuity and sustainability"],
        code_t: "Code of Ethics and Conduct",
        code_p: "Available to all audiences — professionals, clients, suppliers and the community. Its purpose is to be a guide, helping in moments of doubt.",
        comm_t: "Ethics and Compliance Committee",
        comm_p: "Evaluates the design, implementation and adequacy of the Integrity Program, in an advisory capacity, and oversees the program and the compliance team.",
        canal_t: "Ethics Line",
        canal_p: "A confidential channel for reporting conduct at odds with our code. Reports may be anonymous and are investigated independently.",
        canal_ph: "Describe the report (optionally anonymous)",
        canal_send: "Submit report",
        canal_ok: "Report filed and forwarded to the committee.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "Privacy (LGPD)",
        p1: "We process personal data in accordance with Brazil's General Data Protection Law (LGPD, Law 13,709/2018), with transparency about purpose, retention and sharing.",
        facts: [["Data we process", "Registration and contact data of clients, suppliers and candidates — only what each purpose requires."], ["Your rights", "Confirmation, access, correction, portability, deletion and consent withdrawal, at any time."], ["Security", "Technical and organizational controls for access, logging and retention."], ["Data Protection Officer", "A dedicated channel for data-subject and authority requests."]],
        doc: "Privacy Policy",
        mail: "dpo@mattiuz.com.br"
      }
    }
  },
  it: {
    nav_home: "Home",
    nav_hist: "La Nostra Storia",
    nav_port: "Portfolio",
    nav_contact: "Contatti",
    nav_cta: "Scopri le soluzioni",
    u_sust: "Sostenibilità",
    u_carr: "Carriere",
    u_etica: "Canale Etico",
    u_lgpd: "Privacy",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Innovazione in",
    hero_h1b: "ogni fibra",
    hero_p: "Ingegneria e produzione di materiali tessili ad alte prestazioni, su misura per ogni mercato. Scoprite il più moderno dell'industria tessile mondiale.",
    hero_b1: "Scopri le nostre soluzioni",
    hero_b2: "La nostra storia",
    eixos_over: "I nostri pilastri",
    eixos_t: "Ciò che ci colloca tra i migliori al mondo",
    eixos_l: "Qualità dei materiali, ingegneria interna e logistica di fornitura — le fondamenta di ogni rotolo consegnato.",
    eixos: [["Consulenti dedicati", "Team di consulenza dedicati alla selezione del portfolio, secondo la domanda di ogni mercato."], ["Ingegneria interna", "Laboratorio e corpo tecnico propri, dallo sviluppo dell'adesivo al test di applicazione."], ["Materiali selezionati", "Basi e resine dalle migliori origini del mondo, qualificate lotto per lotto."], ["Produzione a scorta", "Produzione a magazzino con +40 giorni di scorta — fornitura senza interruzioni."], ["Innovazione continua", "Un portfolio in evoluzione permanente, con il più moderno del tessile mondiale."]],
    fab_over: "Produzione",
    fab_t: "Dalla fibra al rotolo",
    fab_p: "Linee di spalmatura adesiva e finissaggio tra le più moderne al mondo — la stessa disciplina in ogni lotto.",
    fab_bg: "Trascini qui l'immagine di ingegneria (astratto geometrico/cellulare) — diventa sfondo in trasparenza",
    stats_over: "La forza dei numeri",
    stats_t: "Produzione garantita",
    s1v: "250 km",
    s1l: "Capacità giornaliera",
    s1d: "di produzione di interfodera",
    s2v: "+40",
    s2l: "Giorni di scorta",
    s2d: "per EUR e LATAM",
    s3v: "3",
    s3l: "Continenti",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Presenza globale",
    pres_t: "Tre continenti, uno standard",
    pres_labels: ["AMERICA LATINA", "EUROPA", "ASIA"],
    pres: [["Brasile", "Produzione, distribuzione, scorte e supporto tecnico dal Brasile — al servizio di Paraguay, Cile, Argentina, Colombia e Messico."], ["Italia", "Eredità, identità e sviluppo prodotto con la qualità della culla del design tessile."], ["Cina", "Operazioni industriali e ingegneria di processo negli stabilimenti operativi."]],
    prod_over: "Portfolio",
    prod_t: "Performance Materials",
    prod_l: "Tessili tecnici e materiali innovativi per sartoria, camiceria e moda strutturata — le linee Plusupper.",
    prod_all: "Portfolio completo",
    cta_t: "Parla con Mattiuz",
    cta_p: "Clienti e nuovi partner: il nostro team indirizza ogni messaggio al reparto giusto.",
    cta_b: "Contattaci",
    stock: "Disponibile",
    consult: "Su richiesta",
    gram: "Grammatura ",
    ask: "Richiedi campione",
    cats: {
      fus: "Termoadesiva",
      malha: "Maglia",
      tecido: "Tessuto",
      nt: "Non tessuto"
    },
    cat_all: "Tutte",
    port_l: "Consulenti dedicati specificano con il vostro team il materiale giusto per ogni collezione e macchinario.",
    dlg_t: "Richiedi campione — ",
    dlg_email: "E-mail aziendale",
    dlg_vol: "Volume mensile stimato",
    vols: ["Fino a 1.000 m", "1.000–10.000 m", "Oltre 10.000 m"],
    dlg_cb: "Desidero supporto tecnico in applicazione",
    cancel: "Annulla",
    send_req: "Invia richiesta",
    toast_ok: "Campione richiesto. Il nostro team tecnico risponde entro 1 giorno lavorativo.",
    c_over: "Contatti",
    c_t: "Parla con Mattiuz",
    c_l: "Indirizziamo il suo messaggio al team giusto — commerciale, tecnico o istituzionale.",
    c_div: "Esperienza consulenziale",
    c_steps: ["Pre-vendita: analisi della collezione e test di termoadesione.", "Durante: monitoraggio del lotto e standardizzazione.", "Post-vendita: supporto applicativo e riassortimento garantito."],
    f_client: "È già cliente Mattiuz?",
    f_yes: "Sì",
    f_no: "No",
    f_country: "Paese",
    countries: ["Brasile", "Argentina", "Cile", "Colombia", "Messico", "Perù", "Stati Uniti", "Italia", "Altro"],
    f_reason: "Motivo del contatto",
    reasons: ["Commerciale", "Supporto tecnico", "Logistica e fornitura", "Fornitori", "Stampa", "Altro"],
    f_subject: "Oggetto",
    f_subject_ph: "Es.: preventivo linea Plusupper",
    f_fullname: "Nome e cognome",
    f_fullname_ph: "Il suo nome",
    f_email: "E-mail aziendale",
    f_email_ph: "nome@azienda.it",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Documento d'identificazione (Partita IVA / Tax ID)",
    f_doc_ph: "Solo numeri",
    f_phone: "Telefono",
    f_phone_ph: "+39 000 000 0000",
    f_msg: "Lasci il suo messaggio",
    f_msg_ph: "Scriva il suo messaggio",
    f_send: "Invia",
    sent_t: "Ricevuto.",
    sent_p: "Rispondiamo entro 1 giorno lavorativo.",
    sent_again: "Nuovo messaggio",
    h_over: "La nostra storia",
    h_t: "Eredità italiana, tessuta in Brasile",
    h_lead: "Il nome Mattiuz porta il cognome della famiglia italiana che attraversò l'oceano e fece del sud del Brasile la propria casa — e del tessile, il proprio mestiere.",
    h_b1t: "La traversata",
    h_b1: "Come tante famiglie del Veneto, i Mattiuz arrivarono in Brasile portando poco oltre il proprio nome e una tradizione di lavoro. Il legame con il tessuto comincia lì: nel rigore artigianale che l'immigrazione italiana ha piantato nell'industria del sud del paese.",
    h_b2t: "Il mestiere",
    h_b2: "Fu l'immigrazione ad aprire l'industrializzazione del sud del Brasile — e cominciò dal tessile, già nel XIX secolo. Decenni di stabilimento hanno costruito la base dell'azienda: conoscenza della fibra, della macchina e delle persone.",
    h_b3t: "Il marchio",
    h_b3: "Mattiuz è la firma di questo percorso — un nome italiano in un mercato di nomi tedeschi, che unisce l'eredità del design italiano alla disciplina industriale europea.",
    h_dt: "Design italiano, standard europeo",
    h_d: "L'Italia è il riferimento mondiale della moda e del design; l'Europa, della standardizzazione industriale. Mattiuz traduce entrambe le tradizioni per il mercato globale: disegno preciso del prodotto, processo certificato per lotto e l'eleganza di chi produce per l'alta sartoria.",
    h_capHero: "Famiglia di immigrati nel sud del Brasile, inizio del XX secolo",
    h_cap1: "Dai campi dell'interno…",
    h_cap2: "…alle prime filature: il tessile aprì l'industrializzazione del sud",
    h_cta: "Scopri il nostro portfolio",
    foot_desc: "Produzione e ingegneria di materiali tessili ad alte prestazioni per la filiera globale.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVIGAZIONE",
    foot_inst: "ISTITUZIONALE",
    foot_contact: "CONTATTI",
    foot_hq: "SEDE",
    foot_addr: "89000-000 · Blumenau/SC · Brasile",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INNOVAZIONE IN OGNI FIBRA",
    inst: {
      sust: {
        t: "Sostenibilità",
        p1: "Operiamo con processi certificati, efficienza idrica ed energetica e tracciabilità dei materiali lungo tutta la filiera — dal fornitore di base al rotolo consegnato.",
        eco_t: "Prodotti ecofriendly",
        eco_p: "Linee sviluppate per ridurre l'impatto della confezione — basi riciclate, adesivi di origine biologica e processi a basse emissioni.",
        eco: [["Plusupper Eco R", "Base riciclata post-consumo"], ["Plusupper Bio", "Adesivo di origine biologica"], ["Plusupper Zero", "Processo a basse emissioni"]],
        rep_t: "Report di sostenibilità",
        reports: ["Report di Sostenibilità 2025", "Report di Sostenibilità 2024", "Inventario delle Emissioni 2025"],
        pol_t: "Politiche e certificazioni",
        policies: ["Politica di Sostenibilità", "Politica di Diversità, Equità e Inclusione"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Carriere",
        p1: "Ingegneria, operazioni, logistica e commerciale: cresciamo con persone che capiscono di fibra, di macchina e di mercato.",
        areas: [["Cultura", "Come pensiamo e lavoriamo — dalla fibra al mercato."], ["Clima Organizzativo", "Indagini periodiche e piani d'azione per area."], ["Qualità della vita", "Salute, sicurezza e benessere in stabilimento e in ufficio."], ["Sviluppo", "Formazione tecnica continua e programmi di leadership."], ["Carriera", "Percorsi di crescita chiari e mobilità interna."], ["Report di Equità Salariale", "Pubblicazione periodica, disponibile su richiesta."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Programma di Integrità",
        p1: "Il Programma di Integrità di Mattiuz promuove l'etica, l'integrità e la trasparenza nei nostri affari. Rispettiamo le leggi, i regolamenti e le politiche applicabili alla nostra operazione.",
        pillars_t: "Struttura del programma",
        pillars: ["Impegno e sostegno dell'alta direzione", "Gestione del rischio di conformità", "Formazione e sensibilizzazione", "Politiche e controlli", "Codice e Canale Etico", "Continuità e sostenibilità"],
        code_t: "Codice di Etica e Condotta",
        code_p: "A disposizione di tutti i pubblici — professionisti, clienti, fornitori e comunità. Il suo scopo è essere una guida, aiutando nei momenti di dubbio.",
        comm_t: "Comitato di Etica e Conformità",
        comm_p: "Valuta l'elaborazione, l'attuazione e l'adeguatezza del Programma di Integrità, con carattere consultivo, e supervisiona il programma e il team di conformità.",
        canal_t: "Canale Etico",
        canal_p: "Canale riservato per segnalare condotte in contrasto con il nostro codice. Le segnalazioni possono essere anonime e sono esaminate con indipendenza.",
        canal_ph: "Descriva la segnalazione (facoltativamente anonima)",
        canal_send: "Invia segnalazione",
        canal_ok: "Segnalazione registrata e inoltrata al comitato.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "Privacy (LGPD)",
        p1: "Trattiamo i dati personali in conformità con la Legge Generale brasiliana sulla Protezione dei Dati (LGPD, Legge 13.709/2018), con trasparenza su finalità, conservazione e condivisione.",
        facts: [["Dati trattati", "Dati anagrafici e di contatto di clienti, fornitori e candidati — solo quanto necessario per ogni finalità."], ["I suoi diritti", "Conferma, accesso, correzione, portabilità, cancellazione e revoca del consenso, in qualsiasi momento."], ["Sicurezza", "Controlli tecnici e organizzativi di accesso, registrazione e conservazione."], ["Responsabile (DPO)", "Canale dedicato alle richieste degli interessati e delle autorità."]],
        doc: "Politica sulla Privacy",
        mail: "dpo@mattiuz.com.br"
      }
    }
  }
};
Object.assign(window, {
  T
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/i18n.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/image-slot.js", error: String((e && e.message) || e) }); }

// export/mattiuz-site/institucional.jsx
try { (() => {
const DS5 = window.MattiuzDesignSystem_ac598e;
const {
  WaveElement: WE5,
  Button: Btn5,
  Card: Cd5,
  Badge: Bd5,
  Toast: Ts5
} = DS5;
function InstHero({
  t,
  title
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 18,
      textTransform: "uppercase"
    }
  }, t.foot_inst), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 44px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0
    }
  }, title)));
}
function InstH2({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "500 22px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, children);
}
function InstP({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14.5px/1.8 var(--font-body)",
      color: "var(--text-body)",
      margin: 0,
      ...style
    }
  }, children);
}
function DocRow({
  name
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "14px 2px",
      borderTop: "var(--line-hair)",
      cursor: "pointer",
      background: h ? "var(--mtz-navy-wash)" : "transparent",
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13.5px/1.4 var(--font-body)",
      color: h ? "var(--mtz-navy)" : "var(--text-body)"
    }
  }, name), /*#__PURE__*/React.createElement(Bd5, {
    tone: "outline"
  }, "PDF"));
}
function MailStrip({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--line-hair)",
      paddingTop: 24,
      marginTop: 48,
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 12px/1 var(--font-body)",
      letterSpacing: ".1em",
      color: "var(--mtz-navy)"
    }
  }, c.mail), /*#__PURE__*/React.createElement(Btn5, {
    variant: "outline",
    size: "sm",
    onClick: () => go("contact")
  }, t.nav_contact));
}
function SustPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(InstH2, null, c.eco_t), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 620,
      marginBottom: 20
    }
  }, c.eco_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, c.eco.map(e => /*#__PURE__*/React.createElement(Cd5, {
    key: e[0],
    pad: 20
  }, /*#__PURE__*/React.createElement(Bd5, {
    tone: "steel"
  }, "ECO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 16px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      margin: "12px 0 6px"
    }
  }, e[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, e[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.rep_t), /*#__PURE__*/React.createElement("div", null, c.reports.map(r => /*#__PURE__*/React.createElement(DocRow, {
    key: r,
    name: r
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.pol_t), /*#__PURE__*/React.createElement("div", null, c.policies.map(r => /*#__PURE__*/React.createElement(DocRow, {
    key: r,
    name: r
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 18
    }
  }, c.isos.map(i => /*#__PURE__*/React.createElement(Bd5, {
    key: i,
    tone: "navy"
  }, i))))), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function CarrPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 40
    }
  }, c.areas.map((a, i) => /*#__PURE__*/React.createElement(Cd5, {
    key: a[0],
    pad: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 30px/1 var(--font-display)",
      color: "var(--mtz-steel)",
      marginBottom: 12
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15.5px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, a[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.65 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, a[1]), i === 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Bd5, {
    tone: "outline"
  }, "PDF"))))), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function EticaPage({
  t,
  c,
  go
}) {
  const [txt, setTxt] = React.useState("");
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(InstH2, null, c.pillars_t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 0,
      borderTop: "var(--line-hair)",
      borderLeft: "var(--line-hair)"
    }
  }, c.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "20px 22px",
      borderRight: "var(--line-hair)",
      borderBottom: "var(--line-hair)",
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 26px/1 var(--font-display)",
      color: "var(--mtz-steel)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.55 var(--font-body)",
      color: "var(--text-body)"
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.code_t), /*#__PURE__*/React.createElement(InstP, null, c.code_p), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: c.code_t
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.comm_t), /*#__PURE__*/React.createElement(InstP, null, c.comm_p))), /*#__PURE__*/React.createElement(Cd5, {
    variant: "navy",
    pad: 32,
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 20px/1.3 var(--font-display)",
      color: "var(--mtz-paper)",
      marginBottom: 10
    }
  }, c.canal_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--mtz-gray)",
      margin: "0 0 18px",
      maxWidth: 560
    }
  }, c.canal_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: txt,
    onChange: e => setTxt(e.target.value),
    placeholder: c.canal_ph,
    rows: 2,
    style: {
      flex: 1,
      padding: "12px 14px",
      font: "400 13.5px/1.5 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-paper)",
      border: "none",
      borderRadius: 0,
      outline: "none",
      resize: "vertical"
    }
  }), /*#__PURE__*/React.createElement(Btn5, {
    variant: "inverse",
    onClick: () => {
      setTxt("");
      setOk(true);
    }
  }, c.canal_send))), /*#__PURE__*/React.createElement(Ts5, {
    visible: ok,
    message: c.canal_ok,
    tone: "success",
    onDismiss: () => setOk(false)
  }), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function LgpdPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680,
      font: "400 16px/1.8 var(--font-body)"
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginTop: 40
    }
  }, c.facts.map(f => /*#__PURE__*/React.createElement(Cd5, {
    key: f[0],
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 17px/1.3 var(--font-display)",
      color: "var(--mtz-navy)",
      marginBottom: 10
    }
  }, f[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--text-body)"
    }
  }, f[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: c.doc
  })), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function InstPage({
  k,
  t,
  go
}) {
  const c = t.inst[k];
  const Body = {
    sust: SustPage,
    carr: CarrPage,
    etica: EticaPage,
    lgpd: LgpdPage
  }[k];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": c.t
  }, /*#__PURE__*/React.createElement(InstHero, {
    t: t,
    title: c.t
  }), /*#__PURE__*/React.createElement(Body, {
    t: t,
    c: c,
    go: go
  }));
}
Object.assign(window, {
  InstPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/institucional.jsx", error: String((e && e.message) || e) }); }

// export/mattiuz-site/pages.jsx
try { (() => {
const DS2 = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  WaveElement,
  PatternBlock,
  SectionHeader,
  Button,
  Card,
  Badge,
  Stat,
  Tooltip
} = DS2;
const WAVE_N = [1, 6, 10, 4, 2];
const PRODUCTS = [{
  name: "Plusupper H2705",
  cat: "fus",
  base: "100% poliéster",
  g: "45 g/m²",
  stock: true,
  img: "label.png"
}, {
  name: "Plusupper M1200",
  cat: "malha",
  base: "PES charmeuse",
  g: "38 g/m²",
  stock: true,
  img: "mock02.png"
}, {
  name: "Plusupper T410",
  cat: "tecido",
  base: "algodão/PES",
  g: "110 g/m²",
  stock: false,
  img: "mock08.png"
}, {
  name: "Plusupper N330",
  cat: "nt",
  base: "100% PES",
  g: "33 g/m²",
  stock: true,
  img: "workwear.png"
}, {
  name: "Plusupper H900",
  cat: "fus",
  base: "PA micropontos",
  g: "52 g/m²",
  stock: true,
  img: "mock05.png"
}, {
  name: "Plusupper T680",
  cat: "tecido",
  base: "crina/mescla",
  g: "160 g/m²",
  stock: false,
  img: "facade.png"
}];
function Home({
  go,
  t
}) {
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "galpao-blumenau.png",
    alt: "Galp\xE3o Mattiuz \u2014 Blumenau, SC",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 30%",
      filter: "grayscale(1)",
      opacity: .5,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 96%,transparent) 30%,color-mix(in srgb,var(--mtz-navy) 40%,transparent) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "120px 32px 112px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 22
    }
  }, t.hero_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 56px/1.12 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0,
      letterSpacing: ".01em"
    }
  }, t.hero_h1a, /*#__PURE__*/React.createElement("br", null), t.hero_h1b), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 460,
      margin: "24px 0 36px"
    }
  }, t.hero_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("portfolio")
  }, t.hero_b1), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: "var(--mtz-steel)",
      color: "var(--mtz-steel)"
    },
    onClick: () => go("history")
  }, t.hero_b2))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.eixos_over,
    title: t.eixos_t,
    lead: t.eixos_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, t.eixos.map((e, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    pad: 20
  }, /*#__PURE__*/React.createElement(WaveElement, {
    n: WAVE_N[i],
    height: 40,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, e[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12px/1.65 var(--font-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, e[1]))))), /*#__PURE__*/React.createElement("section", {
    className: "fabsec",
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "var(--line-hair)",
      borderBottom: "var(--line-hair)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fabgrad",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: "linear-gradient(270deg,var(--mtz-paper) 22%,transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 48,
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.fab_over,
    title: t.fab_t,
    lead: t.fab_p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("history")
  }, t.nav_hist))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      height: 320
    }
  }, ["producao-rolos.jpg", "acabamento-dobras.jpg", "estoque-rolos.jpg"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      background: "var(--mtz-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + f,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)",
      opacity: .42
    }
  }))))), /*#__PURE__*/React.createElement("image-slot", {
    id: "home-fab-bg",
    class: "fabbg",
    shape: "rect",
    src: IMG + "engenharia-abstrata.jpg",
    placeholder: t.fab_bg
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onDark: true,
    overline: t.stats_over,
    title: t.stats_t
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s1v,
    label: t.s1l,
    detail: t.s1d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s2v,
    label: t.s2l,
    detail: t.s2d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s3v,
    label: t.s3l,
    detail: t.s3d
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.prod_over,
    title: t.prod_t,
    lead: t.prod_l
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("portfolio")
  }, t.prod_all)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, PRODUCTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    p: p,
    t: t,
    onAsk: () => go("portfolio")
  })))), /*#__PURE__*/React.createElement(PatternBlock, {
    tile: 1,
    tileSize: 110,
    style: {
      borderTop: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "80px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      border: "var(--line-hair)",
      padding: "48px 56px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 44,
    style: {
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 30px/1.25 var(--font-display)",
      color: "var(--text-strong)",
      margin: "0 0 12px"
    }
  }, t.cta_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.7 var(--font-body)",
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, t.cta_p), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, t.cta_b)))));
}
function ProductCard({
  p,
  t,
  onAsk
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: `var(--mtz-mist) url(${IMG + p.img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock ? "navy" : "outline"
  }, p.stock ? t.stock : t.consult), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, t.cats[p.cat])), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 17px/1.3 var(--font-display)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      margin: "6px 0 14px"
    }
  }, p.base, " \xB7 ", /*#__PURE__*/React.createElement(Tooltip, {
    label: t.gram + p.g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px dotted var(--mtz-gray)",
      cursor: "help"
    }
  }, p.g))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onAsk
  }, t.ask)));
}
Object.assign(window, {
  Home,
  ProductCard,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/mattiuz-site/pages.jsx", error: String((e && e.message) || e) }); }

// institucional.jsx
try { (() => {
const DS5 = window.MattiuzDesignSystem_ac598e;
const {
  WaveElement: WE5,
  Button: Btn5
} = DS5;
function InstPage({
  k,
  t,
  go
}) {
  const c = t.inst[k];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": c.t
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 18,
      textTransform: "uppercase"
    }
  }, t.foot_inst), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 44px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0
    },
    "data-comment-anchor": "c72db4e89a-h1-11-11"
  }, c.t))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 820,
      margin: "0 auto",
      padding: "72px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15.5px/1.85 var(--font-body)",
      color: "var(--text-body)",
      margin: "0 0 18px"
    }
  }, c.p1), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15.5px/1.85 var(--font-body)",
      color: "var(--text-body)",
      margin: "0 0 36px"
    }
  }, c.p2), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--line-hair)",
      paddingTop: 24,
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 12px/1 var(--font-body)",
      letterSpacing: ".1em",
      color: "var(--mtz-navy)"
    }
  }, c.mail), /*#__PURE__*/React.createElement(Btn5, {
    variant: "outline",
    size: "sm",
    onClick: () => go("contact")
  }, t.nav_contact))));
}
Object.assign(window, {
  InstPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "institucional.jsx", error: String((e && e.message) || e) }); }

// pages.jsx
try { (() => {
const DS2 = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  WaveElement,
  PatternBlock,
  SectionHeader,
  Button,
  Card,
  Badge,
  Stat,
  Tooltip
} = DS2;
const WAVE_N = [1, 6, 10, 4, 2];
const PRODUCTS = [{
  name: "Plusupper H2705",
  cat: "fus",
  base: "100% poliéster",
  g: "45 g/m²",
  stock: true,
  img: "label.png"
}, {
  name: "Plusupper M1200",
  cat: "malha",
  base: "PES charmeuse",
  g: "38 g/m²",
  stock: true,
  img: "mock02.png"
}, {
  name: "Plusupper T410",
  cat: "tecido",
  base: "algodão/PES",
  g: "110 g/m²",
  stock: false,
  img: "mock08.png"
}, {
  name: "Plusupper N330",
  cat: "nt",
  base: "100% PES",
  g: "33 g/m²",
  stock: true,
  img: "workwear.png"
}, {
  name: "Plusupper H900",
  cat: "fus",
  base: "PA micropontos",
  g: "52 g/m²",
  stock: true,
  img: "mock05.png"
}, {
  name: "Plusupper T680",
  cat: "tecido",
  base: "crina/mescla",
  g: "160 g/m²",
  stock: false,
  img: "facade.png"
}];
function Home({
  go,
  t
}) {
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "galpao-blumenau.png",
    alt: "Galp\xE3o Mattiuz \u2014 Blumenau, SC",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 30%",
      filter: "grayscale(1)",
      opacity: .5,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 96%,transparent) 30%,color-mix(in srgb,var(--mtz-navy) 40%,transparent) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "120px 32px 112px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 22
    },
    "data-comment-anchor": "6c7255c929-div-22-13"
  }, t.hero_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 56px/1.12 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0,
      letterSpacing: ".01em"
    }
  }, t.hero_h1a, /*#__PURE__*/React.createElement("br", null), t.hero_h1b), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 460,
      margin: "24px 0 36px"
    }
  }, t.hero_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("portfolio")
  }, t.hero_b1), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: "var(--mtz-steel)",
      color: "var(--mtz-steel)"
    },
    onClick: () => go("contact")
  }, t.hero_b2))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.eixos_over,
    title: t.eixos_t,
    lead: t.eixos_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, t.eixos.map((e, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    pad: 20
  }, /*#__PURE__*/React.createElement(WaveElement, {
    n: WAVE_N[i],
    height: 40,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, e[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12px/1.65 var(--font-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, e[1]))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "var(--line-hair)",
      borderBottom: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "galpao-blumenau.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(1)",
      opacity: .13,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,var(--mtz-paper) 22%,transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 48,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.fab_over,
    title: t.fab_t,
    lead: t.fab_p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("history")
  }, t.nav_hist))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      height: 320
    }
  }, ["producao-rolos.jpg", "acabamento-dobras.jpg", "estoque-rolos.jpg"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      background: "var(--mtz-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + f,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)",
      opacity: .42
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onDark: true,
    overline: t.stats_over,
    title: t.stats_t
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s1v,
    label: t.s1l,
    detail: t.s1d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s2v,
    label: t.s2l,
    detail: t.s2d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s3v,
    label: t.s3l,
    detail: t.s3d
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.prod_over,
    title: t.prod_t,
    lead: t.prod_l
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("portfolio")
  }, t.prod_all)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, PRODUCTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    p: p,
    t: t,
    onAsk: () => go("portfolio")
  })))), /*#__PURE__*/React.createElement(PatternBlock, {
    tile: 1,
    tileSize: 110,
    style: {
      borderTop: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "80px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      border: "var(--line-hair)",
      padding: "48px 56px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 44,
    style: {
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 30px/1.25 var(--font-display)",
      color: "var(--text-strong)",
      margin: "0 0 12px"
    }
  }, t.cta_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.7 var(--font-body)",
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, t.cta_p), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, t.cta_b)))));
}
function ProductCard({
  p,
  t,
  onAsk
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: `var(--mtz-mist) url(${IMG + p.img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock ? "navy" : "outline"
  }, p.stock ? t.stock : t.consult), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, t.cats[p.cat])), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 17px/1.3 var(--font-display)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      margin: "6px 0 14px"
    }
  }, p.base, " \xB7 ", /*#__PURE__*/React.createElement(Tooltip, {
    label: t.gram + p.g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px dotted var(--mtz-gray)",
      cursor: "help"
    }
  }, p.g))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onAsk
  }, t.ask)));
}
Object.assign(window, {
  Home,
  ProductCard,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState("home");
  const [lang, setLang] = React.useState(localStorage.getItem("mtz-lang") || "pt");
  const t = window.T[lang];
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const pick = l => {
    setLang(l);
    localStorage.setItem("mtz-lang", l);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    page: page,
    go: go,
    t: t,
    lang: lang,
    setLang: pick
  }), page === "home" && /*#__PURE__*/React.createElement(Home, {
    go: go,
    t: t
  }), page === "history" && /*#__PURE__*/React.createElement(History, {
    go: go,
    t: t
  }), page === "portfolio" && /*#__PURE__*/React.createElement(Portfolio, {
    t: t
  }), page === "contact" && /*#__PURE__*/React.createElement(Contact, {
    t: t
  }), ["sust", "carr", "etica", "lgpd"].includes(page) && /*#__PURE__*/React.createElement(InstPage, {
    k: page,
    t: t,
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    go: go,
    t: t
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
const DS = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  Button
} = DS;
const IMG = "../../assets/imagery/";
function NavLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 2px",
      font: "600 11px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: active || h ? "var(--mtz-navy)" : "var(--text-muted)",
      borderBottom: active ? "2px solid var(--mtz-navy)" : "2px solid transparent",
      transition: "color var(--dur-fast)"
    }
  }, label);
}
function UtilLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      font: "500 9.5px/1 var(--font-body)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: active || h ? "var(--mtz-paper)" : "var(--mtz-gray)",
      transition: "color var(--dur-fast)"
    }
  }, label);
}
function LangSwitch({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, ["pt", "en", "it"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: lang === l ? "var(--mtz-paper)" : "transparent",
      color: lang === l ? "var(--mtz-navy)" : "var(--mtz-gray)",
      border: "none",
      cursor: "pointer",
      padding: "4px 7px",
      font: "600 9px/1 var(--font-body)",
      letterSpacing: ".12em",
      transition: "background var(--dur-fast)"
    }
  }, l.toUpperCase())));
}
function Header({
  page,
  go,
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mtz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_sust,
    active: page === "sust",
    onClick: () => go("sust")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_carr,
    active: page === "carr",
    onClick: () => go("carr")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_etica,
    active: page === "etica",
    onClick: () => go("etica")
  }), /*#__PURE__*/React.createElement(UtilLink, {
    label: t.u_lgpd,
    active: page === "lgpd",
    onClick: () => go("lgpd")
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 14,
      background: "color-mix(in srgb,var(--mtz-paper) 25%,transparent)"
    }
  }), /*#__PURE__*/React.createElement(LangSwitch, {
    lang: lang,
    setLang: setLang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "color-mix(in srgb,var(--mtz-paper) 92%,transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-2",
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_home,
    active: page === "home",
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_hist,
    active: page === "history",
    onClick: () => go("history")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_port,
    active: page === "portfolio",
    onClick: () => go("portfolio")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: t.nav_contact,
    active: page === "contact",
    onClick: () => go("contact")
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("portfolio")
  }, t.nav_cta)))));
}
function Footer({
  go,
  t
}) {
  const link = {
    display: "block",
    color: "var(--mtz-gray)",
    cursor: "pointer"
  };
  const colTitle = {
    font: "600 10px/1 var(--font-body)",
    letterSpacing: ".22em",
    color: "var(--mtz-steel)",
    marginBottom: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--mtz-ink)",
      color: "var(--mtz-gray)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.8fr 1fr 1.1fr 1.1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    color: "white",
    height: 54
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12.5px/1.7 var(--font-body)",
      maxWidth: 300,
      marginTop: 18
    }
  }, t.foot_desc), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".2em",
      color: "var(--mtz-steel)",
      marginTop: 16
    }
  }, t.foot_regions)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_nav), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: link
  }, t.nav_home), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("history"),
    style: link
  }, t.nav_hist), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("portfolio"),
    style: link
  }, t.nav_port), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("contact"),
    style: link
  }, t.nav_contact)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2.2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_inst), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("sust"),
    style: link
  }, t.u_sust), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("carr"),
    style: link
  }, t.u_carr), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("etica"),
    style: link
  }, t.u_etica), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("lgpd"),
    style: link
  }, t.u_lgpd)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/2 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, t.foot_contact), /*#__PURE__*/React.createElement("div", null, "contato@mattiuz.com.br"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".2em",
      color: "var(--mtz-steel)",
      margin: "16px 0 6px"
    }
  }, t.foot_hq), /*#__PURE__*/React.createElement("div", null, t.foot_addr))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 15%,transparent)",
      marginTop: 40,
      paddingTop: 20,
      display: "flex",
      justifyContent: "space-between",
      font: "400 11px/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, t.foot_rights), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: ".2em"
    }
  }, t.foot_tag))));
}
Object.assign(window, {
  Header,
  Footer,
  NavLink,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.jsx
try { (() => {
const DS3 = window.MattiuzDesignSystem_ac598e;
const {
  SectionHeader: SH3,
  Button: Btn3,
  Input: In3,
  Select: Sel3,
  Checkbox: Cb3,
  Radio: Rd3,
  Card: Cd3,
  Divider: Dv3,
  Tabs: Tb3,
  Dialog: Dlg3,
  Toast: Ts3
} = DS3;
const CAT_KEYS = ["all", "fus", "malha", "tecido", "nt"];
function Portfolio({
  t
}) {
  const [tab, setTab] = React.useState(0);
  const [ask, setAsk] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const items = [t.cat_all, t.cats.fus, t.cats.malha, t.cats.tecido, t.cats.nt];
  const list = window.PRODUCTS.filter(p => tab === 0 || p.cat === CAT_KEYS[tab]);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Portf\xF3lio",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 88px"
    }
  }, /*#__PURE__*/React.createElement(SH3, {
    overline: t.prod_over,
    title: "Plusupper",
    lead: t.port_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Tb3, {
    items: items,
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 28
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    p: p,
    t: t,
    onAsk: () => setAsk(p)
  }))), /*#__PURE__*/React.createElement(Dlg3, {
    open: !!ask,
    onClose: () => setAsk(null),
    title: t.dlg_t + (ask ? ask.name : ""),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn3, {
      variant: "ghost",
      onClick: () => setAsk(null)
    }, t.cancel), /*#__PURE__*/React.createElement(Btn3, {
      onClick: () => {
        setAsk(null);
        setToast(true);
      }
    }, t.send_req))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: t.dlg_email,
    placeholder: t.f_email_ph
  }), /*#__PURE__*/React.createElement(Sel3, {
    label: t.dlg_vol,
    options: t.vols
  }), /*#__PURE__*/React.createElement(Cb3, {
    label: t.dlg_cb,
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement(Ts3, {
    visible: toast,
    message: t.toast_ok,
    tone: "success",
    onDismiss: () => setToast(false)
  }));
}
function Labeled({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 10.5px/1 var(--font-body)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), children);
}
function Contact({
  t
}) {
  const [sent, setSent] = React.useState(false);
  const [country, setCountry] = React.useState(t.countries[0]);
  const isBR = country === t.countries[0];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Contato"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "galpao-blumenau.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 55%",
      filter: "grayscale(1)",
      opacity: .12,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 92%,transparent) 26%,transparent 75%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px 80px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 18,
      textTransform: "uppercase"
    }
  }, t.c_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 48px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0,
      maxWidth: 560
    }
  }, t.c_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 440,
      margin: "20px 0 0"
    }
  }, t.c_l), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 44,
      borderTop: "1px solid color-mix(in srgb,var(--mtz-paper) 22%,transparent)",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".24em",
      color: "var(--mtz-steel)",
      marginBottom: 8
    }
  }, t.foot_hq), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.6 var(--font-body)",
      color: "var(--mtz-paper)"
    }
  }, t.foot_addr)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9.5px/1 var(--font-body)",
      letterSpacing: ".24em",
      color: "var(--mtz-steel)",
      marginBottom: 8
    }
  }, t.foot_contact), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.6 var(--font-body)",
      color: "var(--mtz-paper)"
    }
  }, "contato@mattiuz.com.br"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 88px",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Dv3, {
    label: t.c_div
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 0,
      marginTop: 6
    }
  }, t.c_steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "56px 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 30px/1 var(--font-display)",
      color: "var(--mtz-steel)"
    }
  }, "0" + (i + 1)), i < t.c_steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: "var(--border-line)",
      margin: "10px 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < t.c_steps.length - 1 ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 16px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 5
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.7 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, s[1]))))))), /*#__PURE__*/React.createElement(Cd3, {
    pad: 32,
    style: {
      alignSelf: "start"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 26px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 10
    }
  }, t.sent_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, t.sent_p), /*#__PURE__*/React.createElement(Btn3, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, t.sent_again)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Labeled, {
    label: t.f_client
  }, /*#__PURE__*/React.createElement(Rd3, {
    direction: "row",
    options: [t.f_yes, t.f_no],
    defaultValue: t.f_no
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Sel3, {
    label: t.f_country,
    options: t.countries,
    value: country,
    onChange: e => setCountry(e.target.value)
  }), /*#__PURE__*/React.createElement(Sel3, {
    label: t.f_reason,
    options: t.reasons
  })), /*#__PURE__*/React.createElement(In3, {
    label: t.f_subject,
    placeholder: t.f_subject_ph
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: t.f_fullname,
    placeholder: t.f_fullname_ph
  }), /*#__PURE__*/React.createElement(In3, {
    label: t.f_email,
    placeholder: t.f_email_ph
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(In3, {
    label: isBR ? t.f_doc_br : t.f_doc_intl,
    placeholder: t.f_doc_ph
  }), /*#__PURE__*/React.createElement(In3, {
    label: t.f_phone,
    placeholder: t.f_phone_ph
  })), /*#__PURE__*/React.createElement(Labeled, {
    label: t.f_msg
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: t.f_msg_ph,
    rows: 4,
    style: {
      padding: "12px 14px",
      font: "400 14px/1.5 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-white)",
      border: "var(--line-strong)",
      borderRadius: 0,
      outline: "none",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(Btn3, {
    fullWidth: true,
    size: "lg",
    onClick: () => setSent(true)
  }, t.f_send)))));
}
Object.assign(window, {
  Portfolio,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/historia.jsx
try { (() => {
const DS4 = window.MattiuzDesignSystem_ac598e;
const {
  SectionHeader: SH4,
  Button: Btn4,
  Divider: Dv4,
  PatternBlock: PB4,
  WaveElement: WE4,
  Card: Cd4,
  Logo: Lg4
} = DS4;
function History({
  go,
  t
}) {
  const blocks = [[t.h_b1t, t.h_b1], [t.h_b2t, t.h_b2], [t.h_b3t, t.h_b3]];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Nossa Hist\xF3ria"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-ink)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PB4, {
    tile: 5,
    tileSize: 140,
    bg: "transparent",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 300,
      opacity: .35,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px",
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: 56,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 22,
      textTransform: "uppercase"
    }
  }, t.h_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 48px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0
    }
  }, t.h_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15.5px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 480,
      margin: "24px 0 0"
    }
  }, t.h_lead)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-familia.png",
    alt: "",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--mtz-gray)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_capHero)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 0
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "0 36px",
      borderLeft: i ? "var(--line-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 44px/1 var(--font-display)",
      color: "var(--mtz-steel)",
      marginBottom: 18
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 19px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, b[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.75 var(--font-body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, b[1]))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-cafe.png",
    alt: "",
    style: {
      width: "100%",
      height: 280,
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_cap1)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "historia-fiacao.png",
    alt: "",
    style: {
      width: "100%",
      height: 280,
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "400 11px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      marginTop: 10,
      letterSpacing: ".04em"
    }
  }, t.h_cap2)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      background: "var(--mtz-ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "planta-mattiuz.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 32%",
      display: "block",
      filter: "grayscale(1)",
      opacity: .45
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WE4, {
    n: 8,
    height: 54,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 32px/1.2 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: "0 0 16px"
    }
  }, t.h_dt), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14.5px/1.8 var(--font-body)",
      color: "var(--mtz-gray)",
      margin: 0
    }
  }, t.h_d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(SH4, {
    overline: t.pres_over,
    title: t.pres_t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, t.pres.map((p, i) => /*#__PURE__*/React.createElement(Cd4, {
    key: i,
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 var(--font-body)",
      letterSpacing: ".24em",
      color: "var(--mtz-navy)",
      marginBottom: 14
    }
  }, t.pres_labels[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 26px/1.1 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, p[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13px/1.7 var(--font-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, p[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Lg4, {
    variant: "icon",
    height: 40,
    style: {
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn4, {
    size: "lg",
    onClick: () => go("portfolio")
  }, t.h_cta)))));
}
Object.assign(window, {
  History
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/historia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/i18n.jsx
try { (() => {
const T = {
  pt: {
    nav_home: "Início",
    nav_hist: "Nossa História",
    nav_port: "Portfólio",
    nav_contact: "Contato",
    nav_cta: "Conhecer soluções",
    u_sust: "Sustentabilidade",
    u_carr: "Carreiras",
    u_etica: "Canal de Ética",
    u_lgpd: "LGPD",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Inovação em",
    hero_h1b: "cada fibra",
    hero_p: "Engenharia e fabricação de materiais têxteis de alta performance, sob medida para cada mercado. Conheça o que há de mais moderno na indústria têxtil mundial.",
    hero_b1: "Conheça nossas soluções",
    hero_b2: "Nossa história",
    eixos_over: "Nossos pilares",
    eixos_t: "O que nos coloca entre os melhores do mundo",
    eixos_l: "Qualidade de insumo, engenharia própria e logística de fornecimento — os fundamentos de cada rolo entregue.",
    eixos: [["Consultores dedicados", "Times de consultoria dedicados à seleção de portfólio, conforme a demanda de cada mercado."], ["Engenharia própria", "Laboratório e corpo técnico próprios, do desenvolvimento do adesivo ao teste de aplicação."], ["Insumos selecionados", "Bases e resinas das melhores origens do mundo, qualificadas lote a lote."], ["Produção para estoque", "Fabricação para estoque com +40 dias de inventário — fornecimento sem ruptura."], ["Inovação contínua", "Portfólio em evolução permanente, com o que há de mais moderno no têxtil mundial."]],
    fab_over: "Fabricação",
    fab_t: "Da fibra ao rolo",
    fab_p: "Linhas de cobertura adesiva, ressinagem e acabamento entre as mais modernas do mundo — a mesma disciplina em cada lote.",
    fab_bg: "Solte aqui a imagem de engenharia (abstrato geométrico/celular) — vira fundo em transparência",
    stats_over: "Força em números",
    stats_t: "Fabricação com garantia",
    s1v: "250 km",
    s1l: "Capacidade diária",
    s1d: "de produção de entretela",
    s2v: "+40",
    s2l: "Dias de inventário",
    s2d: "para EUR e LATAM",
    s3v: "3",
    s3l: "Continentes",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Presença global",
    pres_t: "Três continentes, um padrão",
    pres_labels: ["AMÉRICA LATINA", "EUROPA", "ÁSIA"],
    pres: [["Brasil", "Fabricação, distribuição, estoque e apoio técnico a partir do Brasil — atendendo Paraguai, Chile, Argentina, Colômbia e México."], ["Itália", "Herança, identidade e desenvolvimento de produto com a qualidade do berço do design têxtil."], ["China", "Operação industrial e engenharia de processo nas plantas operacionais."]],
    prod_over: "Portfólio",
    prod_t: "Performance Materials",
    prod_l: "Têxteis técnicos e materiais inovadores para alfaiataria, camisaria e moda estruturada — linhas Plusupper.",
    prod_all: "Portfólio completo",
    cta_t: "Fale com a Mattiuz",
    cta_p: "Clientes e novos parceiros: nossa equipe direciona cada mensagem ao time certo.",
    cta_b: "Entrar em contato",
    stock: "Em estoque",
    consult: "Sob consulta",
    gram: "Gramatura ",
    ask: "Solicitar amostra",
    cats: {
      fus: "Fusível",
      malha: "Malha",
      tecido: "Tecido",
      nt: "Não tecido"
    },
    cat_all: "Todas",
    port_l: "Consultores dedicados especificam com sua equipe o material certo para cada coleção e maquinário.",
    dlg_t: "Solicitar amostra — ",
    dlg_email: "E-mail comercial",
    dlg_vol: "Volume mensal estimado",
    vols: ["Até 1.000 m", "1.000–10.000 m", "Acima de 10.000 m"],
    dlg_cb: "Desejo acompanhamento técnico na aplicação",
    cancel: "Cancelar",
    send_req: "Enviar solicitação",
    toast_ok: "Amostra solicitada. Nossa equipe técnica retorna em 1 dia útil.",
    c_over: "Contato",
    c_t: "Fale com a Mattiuz",
    c_l: "Direcionamos sua mensagem ao time certo — comercial, técnico ou institucional.",
    c_div: "Experiência consultiva",
    c_steps: [["Pré-venda", "Análise da coleção e testes de fusão."], ["Durante", "Acompanhamento de lote e padronização."], ["Pós-venda", "Suporte de aplicação e reposição garantida."]],
    f_client: "Você já é cliente Mattiuz?",
    f_yes: "Sim",
    f_no: "Não",
    f_country: "País",
    countries: ["Brasil", "Argentina", "Chile", "Colômbia", "México", "Peru", "Estados Unidos", "Itália", "Outro"],
    f_reason: "Motivo do contato",
    reasons: ["Comercial", "Suporte técnico", "Logística e fornecimento", "Fornecedores", "Imprensa", "Outro"],
    f_subject: "Assunto",
    f_subject_ph: "Ex.: cotação linha Plusupper",
    f_fullname: "Nome completo",
    f_fullname_ph: "Seu nome",
    f_email: "E-mail comercial",
    f_email_ph: "nome@empresa.com.br",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Documento de identificação (Tax ID)",
    f_doc_ph: "Somente números",
    f_phone: "Telefone",
    f_phone_ph: "+55 (47) 90000-0000",
    f_msg: "Deixe sua mensagem",
    f_msg_ph: "Escreva sua mensagem",
    f_send: "Enviar",
    sent_t: "Recebido.",
    sent_p: "Retornamos em até 1 dia útil.",
    sent_again: "Nova mensagem",
    h_over: "Nossa história",
    h_t: "Herança italiana, tecida no Brasil",
    h_lead: "O nome Mattiuz carrega o sobrenome da família italiana que atravessou o oceano e fez do sul do Brasil a sua casa — e do têxtil, o seu ofício.",
    h_b1t: "A travessia",
    h_b1: "Como tantas famílias do Vêneto, os Mattiuz chegaram ao Brasil trazendo pouco além do próprio nome e de uma tradição de trabalho. A relação com o tecido começa aí: no rigor artesanal que a imigração italiana plantou na indústria do sul do país.",
    h_b2t: "O ofício",
    h_b2: "Foi a imigração que abriu a industrialização do sul do Brasil — e ela começou pelo têxtil, ainda no século XIX. Décadas de chão de fábrica formaram a base da empresa: conhecimento de fibra, de máquina e de gente.",
    h_b3t: "A marca",
    h_b3: "Mattiuz é a assinatura desse percurso — um nome italiano em um mercado de nomes alemães, unindo a herança do design italiano à disciplina industrial europeia.",
    h_dt: "Design italiano, padrão europeu",
    h_d: "A Itália é referência mundial em moda e design; a Europa, em padronização industrial. A Mattiuz traduz as duas tradições para o mercado global: desenho preciso de produto, processo auditado por lote e a elegância de quem fabrica para a alta costura.",
    h_capHero: "Família de imigrantes no sul do Brasil, início do século XX",
    h_cap1: "Das lavouras do interior…",
    h_cap2: "…às primeiras fiações: o têxtil abriu a industrialização do sul",
    h_cta: "Conheça nosso portfólio",
    foot_desc: "Fabricação e engenharia de materiais têxteis de alta performance para a cadeia global.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVEGAÇÃO",
    foot_inst: "INSTITUCIONAL",
    foot_contact: "CONTATO",
    foot_hq: "MATRIZ",
    foot_addr: "89069-004 · Blumenau/SC · Brasil",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INOVAÇÃO EM CADA FIBRA",
    inst: {
      sust: {
        t: "Sustentabilidade",
        p1: "Operamos com processos auditados, eficiência de água e energia e rastreabilidade de insumos em toda a cadeia — do fornecedor de base ao rolo entregue.",
        eco_t: "Produtos ecofriendly",
        eco_p: "Linhas desenvolvidas para reduzir o impacto da confecção — bases recicladas, adesivos de base biológica e processos de baixa emissão.",
        eco: [["Plusupper Eco R", "Base reciclada pós-consumo"], ["Plusupper Bio", "Adesivo de base biológica"], ["Plusupper Zero", "Processo de baixa emissão"]],
        rep_t: "Relatórios de sustentabilidade",
        reports: ["Relatório de Sustentabilidade 2025", "Relatório de Sustentabilidade 2024", "Inventário de Emissões 2025"],
        pol_t: "Políticas e certificações",
        policies: ["Política de Sustentabilidade", "Política de Diversidade, Equidade e Inclusão"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Carreiras",
        p1: "Engenharia, operações, logística e comercial: crescemos com gente que entende de fibra, de máquina e de mercado.",
        areas: [["Cultura", "Como pensamos e trabalhamos — da fibra ao mercado."], ["Clima Organizacional", "Pesquisas periódicas e planos de ação por área."], ["Qualidade de vida", "Saúde, segurança e bem-estar no chão de fábrica e no escritório."], ["Desenvolvimento", "Formação técnica contínua e programas de liderança."], ["Carreira", "Trilhas claras de crescimento e mobilidade interna."], ["Relatório de Equidade Salarial", "Publicação periódica, disponível para consulta."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Programa de Integridade",
        p1: "O Programa de Integridade da Mattiuz promove a ética, a integridade e a transparência em nossos negócios. Cumprimos as leis, regulamentos e políticas aplicáveis à nossa operação.",
        pillars_t: "Estrutura do programa",
        pillars: ["Compromisso e apoio da alta direção", "Gestão de risco de conformidade", "Formação e sensibilização", "Políticas e controles", "Código e Canal de Ética", "Continuidade e sustentabilidade"],
        code_t: "Código de Ética e Conduta",
        code_p: "À disposição de todos os públicos — profissionais, clientes, fornecedores e comunidade. Seu propósito é ser um guia, ajudando em momentos de dúvida.",
        comm_t: "Comitê de Ética e Conformidade",
        comm_p: "Avalia a elaboração, implantação e adequação do Programa de Integridade, com caráter consultivo, e supervisiona o programa e a equipe de conformidade.",
        canal_t: "Canal de Ética",
        canal_p: "Canal confidencial para relatos de condutas em desacordo com o nosso código. Os relatos podem ser anônimos e são apurados com independência.",
        canal_ph: "Descreva o relato (opcionalmente anônimo)",
        canal_send: "Enviar relato",
        canal_ok: "Relato registrado e encaminhado ao comitê.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "LGPD — Privacidade de Dados",
        p1: "Tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com transparência sobre finalidade, retenção e compartilhamento.",
        facts: [["Dados que tratamos", "Dados cadastrais e de contato de clientes, fornecedores e candidatos — somente o necessário para cada finalidade."], ["Seus direitos", "Confirmação, acesso, correção, portabilidade, eliminação e revogação de consentimento, a qualquer momento."], ["Segurança", "Controles técnicos e organizacionais de acesso, registro e retenção."], ["Encarregado (DPO)", "Canal dedicado para solicitações de titulares e autoridades."]],
        doc: "Política de Privacidade",
        mail: "dpo@mattiuz.com.br"
      }
    }
  },
  en: {
    nav_home: "Home",
    nav_hist: "Our History",
    nav_port: "Portfolio",
    nav_contact: "Contact",
    nav_cta: "Explore solutions",
    u_sust: "Sustainability",
    u_carr: "Careers",
    u_etica: "Ethics Line",
    u_lgpd: "Privacy",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Innovation in",
    hero_h1b: "every fiber",
    hero_p: "Engineering and manufacturing of high-performance textile materials, tailored to each market. Meet the most advanced in the world's textile industry.",
    hero_b1: "Explore our solutions",
    hero_b2: "Our history",
    eixos_over: "Our pillars",
    eixos_t: "What places us among the world's best",
    eixos_l: "Input quality, in-house engineering and supply logistics — the foundations of every roll delivered.",
    eixos: [["Dedicated consultants", "Consulting teams dedicated to portfolio selection, matched to each market's demand."], ["In-house engineering", "Our own laboratory and technical staff, from adhesive development to application testing."], ["Selected inputs", "Bases and resins from the world's best origins, qualified batch by batch."], ["Make-to-stock", "Production to stock with +40 days of inventory — supply without disruption."], ["Continuous innovation", "A portfolio in permanent evolution, with the most advanced in world textiles."]],
    fab_over: "Manufacturing",
    fab_t: "From fiber to roll",
    fab_p: "Adhesive coating and finishing lines among the world's most modern — the same discipline in every batch.",
    fab_bg: "Drop the engineering image here (geometric/cellular abstract) — becomes a translucent background",
    stats_over: "Strength in numbers",
    stats_t: "Manufacturing, guaranteed",
    s1v: "250 km",
    s1l: "Daily capacity",
    s1d: "of interlining production",
    s2v: "+40",
    s2l: "Days of inventory",
    s2d: "for EUR and LATAM",
    s3v: "3",
    s3l: "Continents",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Global presence",
    pres_t: "Three continents, one standard",
    pres_labels: ["LATIN AMERICA", "EUROPE", "ASIA"],
    pres: [["Brazil", "Manufacturing, distribution, inventory and technical support from Brazil — serving Paraguay, Chile, Argentina, Colombia and Mexico."], ["Italy", "Heritage, identity and product development with the quality of textile design's cradle."], ["China", "Industrial operations and process engineering at our operating plants."]],
    prod_over: "Portfolio",
    prod_t: "Performance Materials",
    prod_l: "Technical textiles and innovative materials for tailoring, shirting and structured fashion — the Plusupper lines.",
    prod_all: "Full portfolio",
    cta_t: "Talk to Mattiuz",
    cta_p: "Clients and new partners: our team routes every message to the right desk.",
    cta_b: "Get in touch",
    stock: "In stock",
    consult: "On request",
    gram: "Weight ",
    ask: "Request sample",
    cats: {
      fus: "Fusible",
      malha: "Knit",
      tecido: "Woven",
      nt: "Non-woven"
    },
    cat_all: "All",
    port_l: "Dedicated consultants specify with your team the right material for each collection and machinery.",
    dlg_t: "Request sample — ",
    dlg_email: "Business e-mail",
    dlg_vol: "Estimated monthly volume",
    vols: ["Up to 1,000 m", "1,000–10,000 m", "Above 10,000 m"],
    dlg_cb: "I want technical support during application",
    cancel: "Cancel",
    send_req: "Send request",
    toast_ok: "Sample requested. Our technical team replies within 1 business day.",
    c_over: "Contact",
    c_t: "Talk to Mattiuz",
    c_l: "We route your message to the right team — commercial, technical or corporate.",
    c_div: "Consultative experience",
    c_steps: [["Pre-sale", "Collection analysis and fusing tests."], ["During", "Batch tracking and standardization."], ["After-sale", "Application support and guaranteed replenishment."]],
    f_client: "Are you already a Mattiuz client?",
    f_yes: "Yes",
    f_no: "No",
    f_country: "Country",
    countries: ["Brazil", "Argentina", "Chile", "Colombia", "Mexico", "Peru", "United States", "Italy", "Other"],
    f_reason: "Reason for contact",
    reasons: ["Commercial", "Technical support", "Logistics & supply", "Suppliers", "Press", "Other"],
    f_subject: "Subject",
    f_subject_ph: "E.g.: Plusupper line quotation",
    f_fullname: "Full name",
    f_fullname_ph: "Your name",
    f_email: "Business e-mail",
    f_email_ph: "name@company.com",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Identification document (Tax ID)",
    f_doc_ph: "Numbers only",
    f_phone: "Phone",
    f_phone_ph: "+1 (555) 000-0000",
    f_msg: "Leave your message",
    f_msg_ph: "Write your message",
    f_send: "Send",
    sent_t: "Received.",
    sent_p: "We reply within 1 business day.",
    sent_again: "New message",
    h_over: "Our history",
    h_t: "Italian heritage, woven in Brazil",
    h_lead: "The Mattiuz name carries the surname of the Italian family that crossed the ocean and made southern Brazil its home — and textiles, its craft.",
    h_b1t: "The crossing",
    h_b1: "Like so many families from Veneto, the Mattiuz arrived in Brazil carrying little beyond their own name and a tradition of work. The relationship with fabric begins there: in the artisanal rigor Italian immigration planted in the industry of southern Brazil.",
    h_b2t: "The craft",
    h_b2: "Immigration opened southern Brazil's industrialization — and it began with textiles, back in the 19th century. Decades on factory floors built the company's foundation: knowledge of fiber, machine and people.",
    h_b3t: "The brand",
    h_b3: "Mattiuz is the signature of that journey — an Italian name in a market of German names, joining Italian design heritage with European industrial discipline.",
    h_dt: "Italian design, European standard",
    h_d: "Italy is the world reference in fashion and design; Europe, in industrial standardization. Mattiuz translates both traditions for the global market: precise product design, batch-audited process, and the elegance of those who manufacture for high tailoring.",
    h_capHero: "Immigrant family in southern Brazil, early 20th century",
    h_cap1: "From the fields of the interior…",
    h_cap2: "…to the first spinning mills: textiles opened the south's industrialization",
    h_cta: "Explore our portfolio",
    foot_desc: "Manufacturing and engineering of high-performance textile materials for the global chain.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVIGATION",
    foot_inst: "CORPORATE",
    foot_contact: "CONTACT",
    foot_hq: "HEADQUARTERS",
    foot_addr: "89069-004 · Blumenau/SC · Brazil",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INNOVATION IN EVERY FIBER",
    inst: {
      sust: {
        t: "Sustainability",
        p1: "We operate with audited processes, water and energy efficiency and input traceability across the chain — from base supplier to delivered roll.",
        eco_t: "Ecofriendly products",
        eco_p: "Lines developed to reduce apparel's footprint — recycled bases, bio-based adhesives and low-emission processes.",
        eco: [["Plusupper Eco R", "Post-consumer recycled base"], ["Plusupper Bio", "Bio-based adhesive"], ["Plusupper Zero", "Low-emission process"]],
        rep_t: "Sustainability reports",
        reports: ["Sustainability Report 2025", "Sustainability Report 2024", "Emissions Inventory 2025"],
        pol_t: "Policies & certifications",
        policies: ["Sustainability Policy", "Diversity, Equity & Inclusion Policy"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Careers",
        p1: "Engineering, operations, logistics and commercial: we grow with people who understand fiber, machine and market.",
        areas: [["Culture", "How we think and work — from fiber to market."], ["Organizational Climate", "Periodic surveys and action plans per area."], ["Quality of Life", "Health, safety and well-being on the factory floor and in the office."], ["Development", "Continuous technical training and leadership programs."], ["Career", "Clear growth tracks and internal mobility."], ["Pay Equity Report", "Published periodically, available on request."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Integrity Program",
        p1: "Mattiuz's Integrity Program promotes ethics, integrity and transparency in our business. We comply with the laws, regulations and policies applicable to our operation.",
        pillars_t: "Program structure",
        pillars: ["Commitment and support from senior leadership", "Compliance risk management", "Training and awareness", "Policies and controls", "Code and Ethics Line", "Continuity and sustainability"],
        code_t: "Code of Ethics and Conduct",
        code_p: "Available to all audiences — professionals, clients, suppliers and the community. Its purpose is to be a guide, helping in moments of doubt.",
        comm_t: "Ethics and Compliance Committee",
        comm_p: "Evaluates the design, implementation and adequacy of the Integrity Program, in an advisory capacity, and oversees the program and the compliance team.",
        canal_t: "Ethics Line",
        canal_p: "A confidential channel for reporting conduct at odds with our code. Reports may be anonymous and are investigated independently.",
        canal_ph: "Describe the report (optionally anonymous)",
        canal_send: "Submit report",
        canal_ok: "Report filed and forwarded to the committee.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "Privacy (LGPD)",
        p1: "We process personal data in accordance with Brazil's General Data Protection Law (LGPD, Law 13,709/2018), with transparency about purpose, retention and sharing.",
        facts: [["Data we process", "Registration and contact data of clients, suppliers and candidates — only what each purpose requires."], ["Your rights", "Confirmation, access, correction, portability, deletion and consent withdrawal, at any time."], ["Security", "Technical and organizational controls for access, logging and retention."], ["Data Protection Officer", "A dedicated channel for data-subject and authority requests."]],
        doc: "Privacy Policy",
        mail: "dpo@mattiuz.com.br"
      }
    }
  },
  it: {
    nav_home: "Home",
    nav_hist: "La Nostra Storia",
    nav_port: "Portfolio",
    nav_contact: "Contatti",
    nav_cta: "Scopri le soluzioni",
    u_sust: "Sostenibilità",
    u_carr: "Carriere",
    u_etica: "Canale Etico",
    u_lgpd: "Privacy",
    hero_over: "PERFORMANCE MATERIALS",
    hero_h1a: "Innovazione in",
    hero_h1b: "ogni fibra",
    hero_p: "Ingegneria e produzione di materiali tessili ad alte prestazioni, su misura per ogni mercato. Scoprite il più moderno dell'industria tessile mondiale.",
    hero_b1: "Scopri le nostre soluzioni",
    hero_b2: "La nostra storia",
    eixos_over: "I nostri pilastri",
    eixos_t: "Ciò che ci colloca tra i migliori al mondo",
    eixos_l: "Qualità dei materiali, ingegneria interna e logistica di fornitura — le fondamenta di ogni rotolo consegnato.",
    eixos: [["Consulenti dedicati", "Team di consulenza dedicati alla selezione del portfolio, secondo la domanda di ogni mercato."], ["Ingegneria interna", "Laboratorio e corpo tecnico propri, dallo sviluppo dell'adesivo al test di applicazione."], ["Materiali selezionati", "Basi e resine dalle migliori origini del mondo, qualificate lotto per lotto."], ["Produzione a scorta", "Produzione a magazzino con +40 giorni di scorta — fornitura senza interruzioni."], ["Innovazione continua", "Un portfolio in evoluzione permanente, con il più moderno del tessile mondiale."]],
    fab_over: "Produzione",
    fab_t: "Dalla fibra al rotolo",
    fab_p: "Linee di spalmatura adesiva e finissaggio tra le più moderne al mondo — la stessa disciplina in ogni lotto.",
    fab_bg: "Trascini qui l'immagine di ingegneria (astratto geometrico/cellulare) — diventa sfondo in trasparenza",
    stats_over: "La forza dei numeri",
    stats_t: "Produzione garantita",
    s1v: "250 km",
    s1l: "Capacità giornaliera",
    s1d: "di produzione di interfodera",
    s2v: "+40",
    s2l: "Giorni di scorta",
    s2d: "per EUR e LATAM",
    s3v: "3",
    s3l: "Continenti",
    s3d: "LATAM · EUR · ASIA",
    pres_over: "Presenza globale",
    pres_t: "Tre continenti, uno standard",
    pres_labels: ["AMERICA LATINA", "EUROPA", "ASIA"],
    pres: [["Brasile", "Produzione, distribuzione, scorte e supporto tecnico dal Brasile — al servizio di Paraguay, Cile, Argentina, Colombia e Messico."], ["Italia", "Eredità, identità e sviluppo prodotto con la qualità della culla del design tessile."], ["Cina", "Operazioni industriali e ingegneria di processo negli stabilimenti operativi."]],
    prod_over: "Portfolio",
    prod_t: "Performance Materials",
    prod_l: "Tessili tecnici e materiali innovativi per sartoria, camiceria e moda strutturata — le linee Plusupper.",
    prod_all: "Portfolio completo",
    cta_t: "Parla con Mattiuz",
    cta_p: "Clienti e nuovi partner: il nostro team indirizza ogni messaggio al reparto giusto.",
    cta_b: "Contattaci",
    stock: "Disponibile",
    consult: "Su richiesta",
    gram: "Grammatura ",
    ask: "Richiedi campione",
    cats: {
      fus: "Termoadesiva",
      malha: "Maglia",
      tecido: "Tessuto",
      nt: "Non tessuto"
    },
    cat_all: "Tutte",
    port_l: "Consulenti dedicati specificano con il vostro team il materiale giusto per ogni collezione e macchinario.",
    dlg_t: "Richiedi campione — ",
    dlg_email: "E-mail aziendale",
    dlg_vol: "Volume mensile stimato",
    vols: ["Fino a 1.000 m", "1.000–10.000 m", "Oltre 10.000 m"],
    dlg_cb: "Desidero supporto tecnico in applicazione",
    cancel: "Annulla",
    send_req: "Invia richiesta",
    toast_ok: "Campione richiesto. Il nostro team tecnico risponde entro 1 giorno lavorativo.",
    c_over: "Contatti",
    c_t: "Parla con Mattiuz",
    c_l: "Indirizziamo il suo messaggio al team giusto — commerciale, tecnico o istituzionale.",
    c_div: "Esperienza consulenziale",
    c_steps: [["Pre-vendita", "Analisi della collezione e test di termoadesione."], ["Durante", "Monitoraggio del lotto e standardizzazione."], ["Post-vendita", "Supporto applicativo e riassortimento garantito."]],
    f_client: "È già cliente Mattiuz?",
    f_yes: "Sì",
    f_no: "No",
    f_country: "Paese",
    countries: ["Brasile", "Argentina", "Cile", "Colombia", "Messico", "Perù", "Stati Uniti", "Italia", "Altro"],
    f_reason: "Motivo del contatto",
    reasons: ["Commerciale", "Supporto tecnico", "Logistica e fornitura", "Fornitori", "Stampa", "Altro"],
    f_subject: "Oggetto",
    f_subject_ph: "Es.: preventivo linea Plusupper",
    f_fullname: "Nome e cognome",
    f_fullname_ph: "Il suo nome",
    f_email: "E-mail aziendale",
    f_email_ph: "nome@azienda.it",
    f_doc_br: "CPF / CNPJ",
    f_doc_intl: "Documento d'identificazione (Partita IVA / Tax ID)",
    f_doc_ph: "Solo numeri",
    f_phone: "Telefono",
    f_phone_ph: "+39 000 000 0000",
    f_msg: "Lasci il suo messaggio",
    f_msg_ph: "Scriva il suo messaggio",
    f_send: "Invia",
    sent_t: "Ricevuto.",
    sent_p: "Rispondiamo entro 1 giorno lavorativo.",
    sent_again: "Nuovo messaggio",
    h_over: "La nostra storia",
    h_t: "Eredità italiana, tessuta in Brasile",
    h_lead: "Il nome Mattiuz porta il cognome della famiglia italiana che attraversò l'oceano e fece del sud del Brasile la propria casa — e del tessile, il proprio mestiere.",
    h_b1t: "La traversata",
    h_b1: "Come tante famiglie del Veneto, i Mattiuz arrivarono in Brasile portando poco oltre il proprio nome e una tradizione di lavoro. Il legame con il tessuto comincia lì: nel rigore artigianale che l'immigrazione italiana ha piantato nell'industria del sud del paese.",
    h_b2t: "Il mestiere",
    h_b2: "Fu l'immigrazione ad aprire l'industrializzazione del sud del Brasile — e cominciò dal tessile, già nel XIX secolo. Decenni di stabilimento hanno costruito la base dell'azienda: conoscenza della fibra, della macchina e delle persone.",
    h_b3t: "Il marchio",
    h_b3: "Mattiuz è la firma di questo percorso — un nome italiano in un mercato di nomi tedeschi, che unisce l'eredità del design italiano alla disciplina industriale europea.",
    h_dt: "Design italiano, standard europeo",
    h_d: "L'Italia è il riferimento mondiale della moda e del design; l'Europa, della standardizzazione industriale. Mattiuz traduce entrambe le tradizioni per il mercato globale: disegno preciso del prodotto, processo certificato per lotto e l'eleganza di chi produce per l'alta sartoria.",
    h_capHero: "Famiglia di immigrati nel sud del Brasile, inizio del XX secolo",
    h_cap1: "Dai campi dell'interno…",
    h_cap2: "…alle prime filature: il tessile aprì l'industrializzazione del sud",
    h_cta: "Scopri il nostro portfolio",
    foot_desc: "Produzione e ingegneria di materiali tessili ad alte prestazioni per la filiera globale.",
    foot_regions: "LATAM · EUR · ASIA",
    foot_nav: "NAVIGAZIONE",
    foot_inst: "ISTITUZIONALE",
    foot_contact: "CONTATTI",
    foot_hq: "SEDE",
    foot_addr: "89069-004 · Blumenau/SC · Brasile",
    foot_rights: "© 2026 Mattiuz Textil",
    foot_tag: "INNOVAZIONE IN OGNI FIBRA",
    inst: {
      sust: {
        t: "Sostenibilità",
        p1: "Operiamo con processi certificati, efficienza idrica ed energetica e tracciabilità dei materiali lungo tutta la filiera — dal fornitore di base al rotolo consegnato.",
        eco_t: "Prodotti ecofriendly",
        eco_p: "Linee sviluppate per ridurre l'impatto della confezione — basi riciclate, adesivi di origine biologica e processi a basse emissioni.",
        eco: [["Plusupper Eco R", "Base riciclata post-consumo"], ["Plusupper Bio", "Adesivo di origine biologica"], ["Plusupper Zero", "Processo a basse emissioni"]],
        rep_t: "Report di sostenibilità",
        reports: ["Report di Sostenibilità 2025", "Report di Sostenibilità 2024", "Inventario delle Emissioni 2025"],
        pol_t: "Politiche e certificazioni",
        policies: ["Politica di Sostenibilità", "Politica di Diversità, Equità e Inclusione"],
        isos: ["ISO 9001", "ISO 14001"],
        mail: "sustentabilidade@mattiuz.com.br"
      },
      carr: {
        t: "Carriere",
        p1: "Ingegneria, operazioni, logistica e commerciale: cresciamo con persone che capiscono di fibra, di macchina e di mercato.",
        areas: [["Cultura", "Come pensiamo e lavoriamo — dalla fibra al mercato."], ["Clima Organizzativo", "Indagini periodiche e piani d'azione per area."], ["Qualità della vita", "Salute, sicurezza e benessere in stabilimento e in ufficio."], ["Sviluppo", "Formazione tecnica continua e programmi di leadership."], ["Carriera", "Percorsi di crescita chiari e mobilità interna."], ["Report di Equità Salariale", "Pubblicazione periodica, disponibile su richiesta."]],
        mail: "carreiras@mattiuz.com.br"
      },
      etica: {
        t: "Programma di Integrità",
        p1: "Il Programma di Integrità di Mattiuz promuove l'etica, l'integrità e la trasparenza nei nostri affari. Rispettiamo le leggi, i regolamenti e le politiche applicabili alla nostra operazione.",
        pillars_t: "Struttura del programma",
        pillars: ["Impegno e sostegno dell'alta direzione", "Gestione del rischio di conformità", "Formazione e sensibilizzazione", "Politiche e controlli", "Codice e Canale Etico", "Continuità e sostenibilità"],
        code_t: "Codice di Etica e Condotta",
        code_p: "A disposizione di tutti i pubblici — professionisti, clienti, fornitori e comunità. Il suo scopo è essere una guida, aiutando nei momenti di dubbio.",
        comm_t: "Comitato di Etica e Conformità",
        comm_p: "Valuta l'elaborazione, l'attuazione e l'adeguatezza del Programma di Integrità, con carattere consultivo, e supervisiona il programma e il team di conformità.",
        canal_t: "Canale Etico",
        canal_p: "Canale riservato per segnalare condotte in contrasto con il nostro codice. Le segnalazioni possono essere anonime e sono esaminate con indipendenza.",
        canal_ph: "Descriva la segnalazione (facoltativamente anonima)",
        canal_send: "Invia segnalazione",
        canal_ok: "Segnalazione registrata e inoltrata al comitato.",
        mail: "etica@mattiuz.com.br"
      },
      lgpd: {
        t: "Privacy (LGPD)",
        p1: "Trattiamo i dati personali in conformità con la Legge Generale brasiliana sulla Protezione dei Dati (LGPD, Legge 13.709/2018), con trasparenza su finalità, conservazione e condivisione.",
        facts: [["Dati trattati", "Dati anagrafici e di contatto di clienti, fornitori e candidati — solo quanto necessario per ogni finalità."], ["I suoi diritti", "Conferma, accesso, correzione, portabilità, cancellazione e revoca del consenso, in qualsiasi momento."], ["Sicurezza", "Controlli tecnici e organizzativi di accesso, registrazione e conservazione."], ["Responsabile (DPO)", "Canale dedicato alle richieste degli interessati e delle autorità."]],
        doc: "Politica sulla Privacy",
        mail: "dpo@mattiuz.com.br"
      }
    }
  }
};
Object.assign(window, {
  T
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/i18n.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/institucional.jsx
try { (() => {
const DS5 = window.MattiuzDesignSystem_ac598e;
const {
  WaveElement: WE5,
  Button: Btn5,
  Card: Cd5,
  Badge: Bd5,
  Toast: Ts5
} = DS5;
function InstHero({
  t,
  title
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 18,
      textTransform: "uppercase"
    }
  }, t.foot_inst), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 44px/1.15 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0
    }
  }, title)));
}
function InstH2({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "500 22px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, children);
}
function InstP({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14.5px/1.8 var(--font-body)",
      color: "var(--text-body)",
      margin: 0,
      ...style
    }
  }, children);
}
function DocRow({
  name
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "14px 2px",
      borderTop: "var(--line-hair)",
      cursor: "pointer",
      background: h ? "var(--mtz-navy-wash)" : "transparent",
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13.5px/1.4 var(--font-body)",
      color: h ? "var(--mtz-navy)" : "var(--text-body)"
    }
  }, name), /*#__PURE__*/React.createElement(Bd5, {
    tone: "outline"
  }, "PDF"));
}
function MailStrip({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--line-hair)",
      paddingTop: 24,
      marginTop: 48,
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 12px/1 var(--font-body)",
      letterSpacing: ".1em",
      color: "var(--mtz-navy)"
    }
  }, c.mail), /*#__PURE__*/React.createElement(Btn5, {
    variant: "outline",
    size: "sm",
    onClick: () => go("contact")
  }, t.nav_contact));
}
function SustPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(InstH2, null, c.eco_t), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 620,
      marginBottom: 20
    }
  }, c.eco_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, c.eco.map(e => /*#__PURE__*/React.createElement(Cd5, {
    key: e[0],
    pad: 20
  }, /*#__PURE__*/React.createElement(Bd5, {
    tone: "steel"
  }, "ECO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 16px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      margin: "12px 0 6px"
    }
  }, e[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, e[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.rep_t), /*#__PURE__*/React.createElement("div", null, c.reports.map(r => /*#__PURE__*/React.createElement(DocRow, {
    key: r,
    name: r
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.pol_t), /*#__PURE__*/React.createElement("div", null, c.policies.map(r => /*#__PURE__*/React.createElement(DocRow, {
    key: r,
    name: r
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 18
    }
  }, c.isos.map(i => /*#__PURE__*/React.createElement(Bd5, {
    key: i,
    tone: "navy"
  }, i))))), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function CarrPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 40
    }
  }, c.areas.map((a, i) => /*#__PURE__*/React.createElement(Cd5, {
    key: a[0],
    pad: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "300 30px/1 var(--font-display)",
      color: "var(--mtz-steel)",
      marginBottom: 12
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15.5px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, a[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.65 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, a[1]), i === 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Bd5, {
    tone: "outline"
  }, "PDF"))))), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function EticaPage({
  t,
  c,
  go
}) {
  const [txt, setTxt] = React.useState("");
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(InstH2, null, c.pillars_t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 0,
      borderTop: "var(--line-hair)",
      borderLeft: "var(--line-hair)"
    }
  }, c.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "20px 22px",
      borderRight: "var(--line-hair)",
      borderBottom: "var(--line-hair)",
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 26px/1 var(--font-display)",
      color: "var(--mtz-steel)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.55 var(--font-body)",
      color: "var(--text-body)"
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.code_t), /*#__PURE__*/React.createElement(InstP, null, c.code_p), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: c.code_t
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InstH2, null, c.comm_t), /*#__PURE__*/React.createElement(InstP, null, c.comm_p))), /*#__PURE__*/React.createElement(Cd5, {
    variant: "navy",
    pad: 32,
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 20px/1.3 var(--font-display)",
      color: "var(--mtz-paper)",
      marginBottom: 10
    }
  }, c.canal_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--mtz-gray)",
      margin: "0 0 18px",
      maxWidth: 560
    }
  }, c.canal_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: txt,
    onChange: e => setTxt(e.target.value),
    placeholder: c.canal_ph,
    rows: 2,
    style: {
      flex: 1,
      padding: "12px 14px",
      font: "400 13.5px/1.5 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--mtz-paper)",
      border: "none",
      borderRadius: 0,
      outline: "none",
      resize: "vertical"
    }
  }), /*#__PURE__*/React.createElement(Btn5, {
    variant: "inverse",
    onClick: () => {
      setTxt("");
      setOk(true);
    }
  }, c.canal_send))), /*#__PURE__*/React.createElement(Ts5, {
    visible: ok,
    message: c.canal_ok,
    tone: "success",
    onDismiss: () => setOk(false)
  }), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function LgpdPage({
  t,
  c,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement(WE5, {
    n: 6,
    height: 44,
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement(InstP, {
    style: {
      maxWidth: 680,
      font: "400 16px/1.8 var(--font-body)"
    }
  }, c.p1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginTop: 40
    }
  }, c.facts.map(f => /*#__PURE__*/React.createElement(Cd5, {
    key: f[0],
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 17px/1.3 var(--font-display)",
      color: "var(--mtz-navy)",
      marginBottom: 10
    }
  }, f[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13.5px/1.7 var(--font-body)",
      color: "var(--text-body)"
    }
  }, f[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: c.doc
  })), /*#__PURE__*/React.createElement(MailStrip, {
    t: t,
    c: c,
    go: go
  }));
}
function InstPage({
  k,
  t,
  go
}) {
  const c = t.inst[k];
  const Body = {
    sust: SustPage,
    carr: CarrPage,
    etica: EticaPage,
    lgpd: LgpdPage
  }[k];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": c.t
  }, /*#__PURE__*/React.createElement(InstHero, {
    t: t,
    title: c.t
  }), /*#__PURE__*/React.createElement(Body, {
    t: t,
    c: c,
    go: go
  }));
}
Object.assign(window, {
  InstPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/institucional.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
const DS2 = window.MattiuzDesignSystem_ac598e;
const {
  Logo,
  WaveElement,
  PatternBlock,
  SectionHeader,
  Button,
  Card,
  Badge,
  Stat,
  Tooltip
} = DS2;
const WAVE_N = [1, 6, 10, 4, 2];
const PRODUCTS = [{
  name: "Plusupper H2705",
  cat: "fus",
  base: "100% poliéster",
  g: "45 g/m²",
  stock: true,
  img: "label.png"
}, {
  name: "Plusupper M1200",
  cat: "malha",
  base: "PES charmeuse",
  g: "38 g/m²",
  stock: true,
  img: "mock02.png"
}, {
  name: "Plusupper T410",
  cat: "tecido",
  base: "algodão/PES",
  g: "110 g/m²",
  stock: false,
  img: "mock08.png"
}, {
  name: "Plusupper N330",
  cat: "nt",
  base: "100% PES",
  g: "33 g/m²",
  stock: true,
  img: "workwear.png"
}, {
  name: "Plusupper H900",
  cat: "fus",
  base: "PA micropontos",
  g: "52 g/m²",
  stock: true,
  img: "mock05.png"
}, {
  name: "Plusupper T680",
  cat: "tecido",
  base: "crina/mescla",
  g: "160 g/m²",
  stock: false,
  img: "facade.png"
}];
function HeroVideo() {
  const [i, setI] = React.useState(0);
  const refs = [React.useRef(null), React.useRef(null)];
  const srcs = ["../../assets/video/galpoes-slowmo.mp4", "../../assets/video/galpoes-slowmo-2.mp4"];
  React.useEffect(() => {
    refs.forEach(r => {
      if (r.current) r.current.playbackRate = 0.5;
    });
    const cur = refs[i].current;
    if (cur) {
      cur.currentTime = 0;
      cur.play().catch(() => {});
    }
    const nxt = refs[(i + 1) % 2].current;
    if (nxt) nxt.load();
  }, [i]);
  const vidStyle = on => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 30%",
    filter: "grayscale(1)",
    opacity: on ? .5 : 0,
    transition: "opacity 600ms var(--ease-out)",
    pointerEvents: "none"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, srcs.map((s, k) => /*#__PURE__*/React.createElement("video", {
    key: k,
    ref: refs[k],
    muted: true,
    playsInline: true,
    preload: "auto",
    autoPlay: k === 0,
    onEnded: () => setI((i + 1) % 2),
    style: vidStyle(k === i)
  }, /*#__PURE__*/React.createElement("source", {
    src: s,
    type: "video/mp4"
  }))));
}
function Home({
  go,
  t
}) {
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-navy)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(HeroVideo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,color-mix(in srgb,var(--mtz-navy) 96%,transparent) 30%,color-mix(in srgb,var(--mtz-navy) 40%,transparent) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "120px 32px 112px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 var(--font-body)",
      letterSpacing: "var(--track-overline)",
      color: "var(--mtz-steel)",
      marginBottom: 22
    }
  }, t.hero_over), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "300 56px/1.12 var(--font-display)",
      color: "var(--mtz-paper)",
      margin: 0,
      letterSpacing: ".01em"
    }
  }, t.hero_h1a, /*#__PURE__*/React.createElement("br", null), t.hero_h1b), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.75 var(--font-body)",
      color: "var(--mtz-gray)",
      maxWidth: 460,
      margin: "24px 0 36px"
    }
  }, t.hero_p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("portfolio")
  }, t.hero_b1), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: "var(--mtz-steel)",
      color: "var(--mtz-steel)"
    },
    onClick: () => go("history")
  }, t.hero_b2))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.eixos_over,
    title: t.eixos_t,
    lead: t.eixos_l
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, t.eixos.map((e, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    pad: 20
  }, /*#__PURE__*/React.createElement(WaveElement, {
    n: WAVE_N[i],
    height: 40,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15px/1.3 var(--font-display)",
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, e[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12px/1.65 var(--font-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, e[1]))))), /*#__PURE__*/React.createElement("section", {
    className: "fabsec",
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "var(--line-hair)",
      borderBottom: "var(--line-hair)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fabgrad",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: "linear-gradient(270deg,var(--mtz-paper) 22%,transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 48,
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.fab_over,
    title: t.fab_t,
    lead: t.fab_p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("history")
  }, t.nav_hist))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      height: 320
    }
  }, ["producao-rolos.jpg", "acabamento-dobras.jpg", "estoque-rolos.jpg"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      background: "var(--mtz-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + f,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1)",
      opacity: .42
    }
  }))))), /*#__PURE__*/React.createElement("image-slot", {
    id: "home-fab-bg",
    class: "fabbg",
    shape: "rect",
    src: IMG + "engenharia-abstrata.jpg",
    placeholder: t.fab_bg
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mtz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onDark: true,
    overline: t.stats_over,
    title: t.stats_t
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s1v,
    label: t.s1l,
    detail: t.s1d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s2v,
    label: t.s2l,
    detail: t.s2d
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: t.s3v,
    label: t.s3l,
    detail: t.s3d
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: t.prod_over,
    title: t.prod_t,
    lead: t.prod_l
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("portfolio")
  }, t.prod_all)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 44
    }
  }, PRODUCTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    p: p,
    t: t,
    onAsk: () => go("portfolio")
  })))), /*#__PURE__*/React.createElement(PatternBlock, {
    tile: 1,
    tileSize: 110,
    style: {
      borderTop: "var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "80px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      border: "var(--line-hair)",
      padding: "48px 56px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 44,
    style: {
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "300 30px/1.25 var(--font-display)",
      color: "var(--text-strong)",
      margin: "0 0 12px"
    }
  }, t.cta_t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.7 var(--font-body)",
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, t.cta_p), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, t.cta_b)))));
}
function ProductCard({
  p,
  t,
  onAsk
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: `var(--mtz-mist) url(${IMG + p.img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock ? "navy" : "outline"
  }, p.stock ? t.stock : t.consult), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, t.cats[p.cat])), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 17px/1.3 var(--font-display)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px/1.6 var(--font-body)",
      color: "var(--text-muted)",
      margin: "6px 0 14px"
    }
  }, p.base, " \xB7 ", /*#__PURE__*/React.createElement(Tooltip, {
    label: t.gram + p.g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px dotted var(--mtz-gray)",
      cursor: "help"
    }
  }, p.g))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onAsk
  }, t.ask)));
}
Object.assign(window, {
  Home,
  ProductCard,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PatternBlock = __ds_scope.PatternBlock;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.WaveElement = __ds_scope.WaveElement;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
