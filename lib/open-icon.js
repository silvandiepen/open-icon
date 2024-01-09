import { defineComponent as i, openBlock as s, createElementBlock as n, normalizeClass as t, unref as o, createElementVNode as c, createStaticVNode as b } from "vue";
const l = {
  O: "o",
  X: "x",
  ABC: "abc",
  ALARM: "alarm",
  APPS_PLUS: "apps-plus",
  APPS: "apps",
  ARROW_CORNER_LEFT: "arrow-corner-left",
  ARROW_CORNER_RIGHT: "arrow-corner-right",
  ARROW_DOWN_LEFT: "arrow-down-left",
  ARROW_DOWN_RIGHT: "arrow-down-right",
  ARROW_DOWN: "arrow-down",
  ARROW_LEFT: "arrow-left",
  ARROW_RIGHT: "arrow-right",
  ARROW_ROTATE_LEFT: "arrow-rotate-left",
  ARROW_ROTATE_RIGHT: "arrow-rotate-right",
  ARROW_UP_LEFT: "arrow-up-left",
  ARROW_UP_RIGHT: "arrow-up-right",
  ARROW_UP: "arrow-up",
  BACKSPACE: "backspace",
  BAG2: "bag-2",
  BAG: "bag",
  BELL: "bell",
  BOOK: "book",
  BOOK2: "book2",
  BOOKS: "books",
  BUCKET: "bucket",
  BULB: "bulb",
  CAMERA: "camera",
  CASE: "case",
  CHECK_CIRCLE: "check-circle",
  CHECK: "check",
  CHEVRON_DOWN: "chevron-down",
  CHEVRON_LEFT: "chevron-left",
  CHEVRON_RIGHT: "chevron-right",
  CHEVRON_UP: "chevron-up",
  CITY_BUILDINGS: "city-buildings",
  CLIPBOARD: "clipboard",
  CLOCK: "clock",
  CLOSE_CIRCLE: "close-circle",
  CLOSE: "close",
  CLOUD_RAIN: "cloud-rain",
  CLOUD: "cloud",
  COLORMODE: "colormode",
  COLORMODE2: "colormode2",
  COLORMODE3: "colormode3",
  COMPASS: "compass",
  CREDITCARD: "creditcard",
  CUBE3_D: "cube-3-d",
  DESKTOP: "desktop",
  DIAMOND: "diamond",
  DOCUMENT_ADD2: "document-add-2",
  DOCUMENT_ADD: "document-add",
  DOCUMENT_CHECK2: "document-check-2",
  DOCUMENT_CHECK: "document-check",
  DOCUMENT_DELETE2: "document-delete-2",
  DOCUMENT_DELETE: "document-delete",
  DOCUMENT_EDIT: "document-edit",
  DOCUMENT_TEXT: "document-text",
  DOCUMENT: "document",
  DOCUMENTS: "documents",
  EDIT: "edit",
  ERASE: "erase",
  FACE: "face",
  FEATHER: "feather",
  FILM: "film",
  FILTER: "filter",
  FIRE: "fire",
  FISH: "fish",
  FLAG: "flag",
  FLOPPY_DISK: "floppy-disk",
  FOLDER: "folder",
  GRADUATION_CAP: "graduation-cap",
  GRID: "grid",
  HEADPHONES: "headphones",
  HEART_BROKEN: "heart-broken",
  HEART: "heart",
  HELP: "help",
  HOME: "home",
  ID_CARD: "id-card",
  ID_TAG: "id-tag",
  IMAGE: "image",
  INVISIBLE: "invisible",
  KEYBOARD: "keyboard",
  KNIFE_FORK: "knife-fork",
  LAB: "lab",
  LABEL33: "label-33",
  LABEL56: "label-56",
  LANGUAGE: "language",
  LAPTOP: "laptop",
  LAYERS: "layers",
  LAYOUT: "layout",
  LEAF: "leaf",
  LOCATION_MARKER: "location-marker",
  LOCKED: "locked",
  MAGIC_WAND: "magic-wand",
  MAP: "map",
  MINUS_CIRCLE: "minus-circle",
  MINUS: "minus",
  MOBILE: "mobile",
  MOON: "moon",
  MORE: "more",
  MUSIC: "music",
  PAPERCLIP: "paperclip",
  PATH1: "path-1",
  PATH2: "path-2",
  PATH3: "path-3",
  PATH4: "path-4",
  PLUS_CIRCLE: "plus-circle",
  PLUS: "plus",
  PRESENT: "present",
  PRINT: "print",
  PUSHPIN: "pushpin",
  PUZZLE_PIECE: "puzzle-piece",
  QUESTION_MARK: "question-mark",
  RECYCLE: "recycle",
  ROCKET: "rocket",
  ROTATE_SCREEN: "rotate-screen",
  SAD: "sad",
  SEARCH: "search",
  SECURE: "secure",
  SETTINGS: "settings",
  SETTINGS2: "settings2",
  SHIFT: "shift",
  SHOPPINGCART: "shoppingcart",
  SMILE: "smile",
  SPEAK: "speak",
  SPEECH_SQUARE_CHAT: "speech-square-chat",
  SPEECH_SQUARE_DOUBLE: "speech-square-double",
  SPEECH_SQUARE: "speech-square",
  SUITCASE: "suitcase",
  SUN: "sun",
  SYRINGE: "syringe",
  TABLET: "tablet",
  TEMPLE: "temple",
  TERMINAL: "terminal",
  TEXT_ALIGN_CENTER: "text-align-center",
  TEXT_ALIGN_JUSTIFY_CENTER: "text-align-justify-center",
  TEXT_ALIGN_JUSTIFY_LEFT: "text-align-justify-left",
  TEXT_ALIGN_JUSTIFY_RIGHT: "text-align-justify-right",
  TEXT_ALIGN_JUSTIFY: "text-align-justify",
  TEXT_ALIGN_LEFT: "text-align-left",
  TEXT_ALIGN_RIGHT: "text-align-right",
  TICKET: "ticket",
  TILE_CLOSE: "tile-close",
  TILE_EDIT: "tile-edit",
  TILE_PLUS: "tile-plus",
  TILE: "tile",
  TRASH: "trash",
  TRUCK: "truck",
  UNLOCKED: "unlocked",
  USER_ADD: "user-add",
  USER_DELETE: "user-delete",
  USER_TEAM: "user-team",
  USER: "user",
  USERS: "users",
  VIDEO_CAMERA: "video-camera",
  VISIBLE: "visible",
  VOLUME_OFF: "volume-off",
  VOLUME_ON: "volume-on",
  WATER: "water",
  WINDOW_FRAME: "window-frame",
  WINDOW_FULL: "window-full",
  WINK: "wink",
  WORLD: "world"
}, A = (a = "") => {
  if (!a)
    return "";
  const e = a.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  return e ? e.map((r) => r.toLowerCase()).join("-") : "";
}, f = (a) => typeof a == "object" && Array.isArray(a), V = (a) => {
  if (f(a)) {
    let e = !0;
    return a.forEach((r) => {
      typeof r != "string" && (e = !1);
    }), e;
  } else
    return !1;
}, $ = (a) => typeof a == "string", I = (a) => [
  ...new Set(a.map((e) => e && typeof e == "string" && e.includes(" ") ? I(e.split(" ")) : (e && typeof e == "string" ? e.trim() : null) || "").flat().filter((e) => e !== ""))
], R = (a) => a == null ? !0 : a !== void 0 ? !!a : !1, w = {
  ARRAY: "array",
  STRING: "string",
  AUTO: "auto"
}, x = {
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  NONE: "none"
}, k = (a) => $(a) ? a : "", T = (a) => $(a) || V(a) ? a : "", B = (a) => {
  if (typeof a != "object" && !Array.isArray(a) && a !== null)
    return !1;
  const e = [
    "b",
    "block",
    "e",
    "element",
    "m",
    "modifier",
    "s",
    "show"
  ];
  return ![
    ...new Set(Object.keys(a).find((_) => !e.includes(_)))
  ].length;
}, O = (a) => !!(f(a) && $(a[0]) && (V(a[1]) || $(a[1]))), N = (a) => !$(a) && a[2] !== void 0 && !a[2], D = (a, e, r = {}) => {
  const _ = [];
  return g(a, k(e[0]), T(e[1]), Object.assign(Object.assign({}, r), { return: w.ARRAY })).forEach((d) => {
    _.push(d);
  }), _;
}, U = (a, e, r = {}) => {
  const _ = {
    block: a,
    element: "",
    modifier: ""
  };
  return e.includes(":") ? (_.element = e.split(":")[0], _.modifier = e.split(":")[1]) : _.element = e, g(_.block, _.element, _.modifier, Object.assign(Object.assign({}, r), { return: w.ARRAY }));
}, P = (a, e, r = {}) => {
  if (e.show !== void 0 && !e.show || e.s !== void 0 && !e.s)
    return [];
  const _ = (e == null ? void 0 : e.block) || e.b || a, v = {
    element: e.element || e.e || "",
    modifier: e.modifier || e.m || ""
  };
  return g(_, v, "", Object.assign(Object.assign({}, r), { return: w.ARRAY }));
}, F = (a) => a == null ? x.NONE : $(a) && a !== "" ? x.STRING : V(a) && a.length < 4 || O(a) ? N(a) ? x.NONE : x.ARRAY : B(a) ? x.OBJECT : x.NONE, G = (a, e = {}) => (..._) => {
  const v = typeof a == "string" ? [a] : a;
  let d = [];
  return v.forEach((u) => {
    (_.length == 0 || _[0] == null || _[0] == "") && d.push(g(u, "", "", { return: w.STRING })), _.forEach((p) => {
      switch (F(p)) {
        case x.STRING:
          d.push(...U(u, p, e));
          break;
        case x.ARRAY:
          d.push(...D(u, p, e));
          break;
        case x.OBJECT:
          d.push(...P(u, p, e));
          break;
      }
    });
  }), S(I(d), e);
}, M = {
  ARRAY: "array",
  STRING: "string",
  AUTO: "auto"
}, K = (a, e, r) => typeof a == "string" && e == "string" ? {
  element: a,
  modifier: e,
  show: r.show
} : typeof a == "object" && (a != null && a.element) && (a != null && a.modifier) ? {
  element: a.element,
  modifier: a.modifier,
  show: a.show
} : {
  element: r.element,
  modifier: r.modifier,
  show: r.show
}, E = (a) => {
  let e = Object.assign({ modifier: "--", element: "__" }, a.prefix);
  return Object.assign(Object.assign({ toKebabCase: !0, return: M.AUTO }, a), { prefix: e });
}, S = (a, e) => {
  switch (e.return) {
    case M.STRING:
      return a.join(" ");
    case M.ARRAY:
      return a;
    default:
    case M.AUTO:
      return a.length == 1 ? a[0] : a;
  }
}, g = (a, e = "", r = "", _) => {
  var v, d;
  if (a == "")
    return "";
  const { element: u, modifier: p } = K(e, r, {
    element: typeof e == "string" || e == null ? e : e.element,
    modifier: typeof e == "string" || e == null ? r : e.modifier
  }), C = E(_), z = (m) => (C.toKebabCase && (m = A(m)), m), y = `${z(a)}${u ? `${(v = C.prefix) === null || v === void 0 ? void 0 : v.element}${z(u)}` : ""}`, L = [];
  if (typeof p == "object")
    p.forEach((m) => {
      var H;
      L.push(z(m).length ? `${y}${(H = C.prefix) === null || H === void 0 ? void 0 : H.modifier}${z(m)}` : `${y}`);
    });
  else {
    let m = `${y}${p ? `${(d = C.prefix) === null || d === void 0 ? void 0 : d.modifier}${z(p)}` : ""}`;
    L.push(m);
  }
  return S(L, C);
}, h = (a, e = {}) => {
  const r = (_ = "", v = "", d = {}) => {
    const u = E(Object.assign(Object.assign({}, e), d));
    if (typeof _ != "string" && _ !== null && !R(_.show))
      return "";
    let p = [];
    switch (typeof a == "string" ? p = g(a, _, v, Object.assign(Object.assign({}, u), { return: "array" })) : a.forEach((C) => {
      p = [
        ...p,
        ...g(C, _, v, Object.assign(Object.assign({}, u), { return: "array" }))
      ];
    }), u.return) {
      case M.STRING:
        return p.join(" ");
      case M.ARRAY:
        return p;
      default:
      case M.AUTO:
        return p.length == 1 ? p[0] : p;
    }
  };
  return r.bemm = r, r.classes = G(a, e), r;
}, W = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, j = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` })
], -1), Y = [
  j
], X = /* @__PURE__ */ i({
  __name: "o",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", W, Y))
      ], 2)
    ], 2));
  }
}), q = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, J = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M15.62,11.38c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L31.76,36L11.38,56.38c-1.17,1.17-1.17,3.07,0,4.24
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88L36,40.24l20.38,20.38c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L40.24,36l20.38-20.38c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L36,31.76L15.62,11.38z` })
], -1), Q = [
  J
], Z = /* @__PURE__ */ i({
  __name: "x",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", q, Q))
      ], 2)
    ], 2));
  }
}), c0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, e0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57.57,30c1.6,0,3.11,0.62,4.24,1.76c1.17,1.17,3.07,1.17,4.24,0c1.17-1.17,1.17-3.07,0-4.24
		C63.79,25.25,60.77,24,57.57,24s-6.22,1.25-8.48,3.51c-2.27,2.27-3.52,5.28-3.52,8.49c0,0.01,0,0.01,0,0.02
		c-0.36-0.48-0.77-0.92-1.23-1.3c0.47-0.98,0.73-2.07,0.73-3.22c0-4.14-3.36-7.5-7.5-7.5h-7c-1.66,0-3,1.34-3,3v14.29l-7.82-15.63
		C19.24,24.64,18.2,24,17.07,24s-2.18,0.64-2.68,1.66l-9,18c-0.74,1.48-0.14,3.28,1.34,4.02c1.48,0.74,3.28,0.14,4.02-1.34
		l1.42-2.84h9.79l1.42,2.84c0.53,1.05,1.58,1.66,2.69,1.66c0.45,0,0.91-0.1,1.34-0.32c0.36-0.18,0.67-0.42,0.91-0.71
		C28.87,47.6,29.67,48,30.57,48h9c3.75,0,6.85-2.76,7.4-6.36c0.55,1.03,1.26,1.99,2.11,2.84c2.27,2.27,5.28,3.52,8.49,3.52
		s6.22-1.25,8.49-3.52c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0C60.68,41.38,59.17,42,57.57,42s-3.11-0.62-4.24-1.76
		c-1.13-1.13-1.76-2.64-1.76-4.24s0.62-3.11,1.76-4.24C54.46,30.62,55.97,30,57.57,30z M15.17,37.5l1.9-3.79l1.9,3.79H15.17z
		 M37.57,30c0.83,0,1.5,0.67,1.5,1.5S38.4,33,37.57,33h-4v-3H37.57z M39.57,42h-6v-3h4h2c0.83,0,1.5,0.67,1.5,1.5S40.4,42,39.57,42z
		` })
], -1), s0 = [
  e0
], n0 = /* @__PURE__ */ i({
  __name: "abc",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", c0, s0))
      ], 2)
    ], 2));
  }
}), t0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, o0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M61.5,36c0-13.05-9.85-23.83-22.5-25.32V9c0-1.66-1.34-3-3-3s-3,1.34-3,3v1.68C20.35,12.17,10.5,22.95,10.5,36
		c0,8.24,3.93,15.58,10.02,20.24l-4.64,4.64c-1.17,1.17-1.17,3.07,0,4.24C16.46,65.71,17.23,66,18,66s1.54-0.29,2.12-0.88l5.73-5.73
		C28.96,60.74,32.4,61.5,36,61.5c3.6,0,7.04-0.76,10.15-2.11l5.73,5.73C52.46,65.71,53.23,66,54,66s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24l-4.64-4.64C57.57,51.58,61.5,44.24,61.5,36z M16.5,36c0-10.75,8.75-19.5,19.5-19.5S55.5,25.25,55.5,36
		S46.75,55.5,36,55.5S16.5,46.75,16.5,36z` }),
  /* @__PURE__ */ c("path", { d: "M7,18c0,1.1,0.9,2,2,2s2-0.9,2-2c0-3.86,3.14-7,7-7c1.1,0,2-0.9,2-2s-0.9-2-2-2C11.93,7,7,11.93,7,18z" }),
  /* @__PURE__ */ c("path", { d: "M63,20c1.1,0,2-0.9,2-2c0-6.07-4.93-11-11-11c-1.1,0-2,0.9-2,2s0.9,2,2,2c3.86,0,7,3.14,7,7C61,19.1,61.9,20,63,20z" }),
  /* @__PURE__ */ c("path", { d: `M38,35.78V22.34c0-1.1-0.9-2-2-2s-2,0.9-2,2V36c0,0.11,0.02,0.21,0.03,0.31c-0.11,0.64,0.09,1.33,0.61,1.81l9,8.35
		C44.03,46.82,44.51,47,45,47c0.54,0,1.07-0.22,1.47-0.64c0.75-0.81,0.7-2.08-0.11-2.83L38,35.78z` })
], -1), a0 = [
  o0
], _0 = /* @__PURE__ */ i({
  __name: "alarm",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", t0, a0))
      ], 2)
    ], 2));
  }
}), r0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, l0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M19.5,34.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,30.46,14.54,34.5,19.5,34.5z
		 M16.5,19.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V19.5z` }),
  /* @__PURE__ */ c("path", { d: `M46.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C37.5,57.46,41.54,61.5,46.5,61.5z
		 M43.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z` }),
  /* @__PURE__ */ c("path", { d: `M19.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,57.46,14.54,61.5,19.5,61.5z
		 M16.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z` }),
  /* @__PURE__ */ c("path", { d: `M40.5,24.5h7v7c0,1.1,0.9,2,2,2s2-0.9,2-2v-7h7c1.1,0,2-0.9,2-2s-0.9-2-2-2h-7v-7c0-1.1-0.9-2-2-2s-2,0.9-2,2v7h-7
		c-1.1,0-2,0.9-2,2S39.4,24.5,40.5,24.5z` })
], -1), i0 = [
  l0
], h0 = /* @__PURE__ */ i({
  __name: "apps-plus",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", r0, i0))
      ], 2)
    ], 2));
  }
}), p0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, d0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M19.5,34.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,30.46,14.54,34.5,19.5,34.5z
		 M16.5,19.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V19.5z` }),
  /* @__PURE__ */ c("path", { d: `M46.5,34.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C37.5,30.46,41.54,34.5,46.5,34.5z
		 M43.5,19.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V19.5z` }),
  /* @__PURE__ */ c("path", { d: `M46.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C37.5,57.46,41.54,61.5,46.5,61.5z
		 M43.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z` }),
  /* @__PURE__ */ c("path", { d: `M19.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,57.46,14.54,61.5,19.5,61.5z
		 M16.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z` })
], -1), v0 = [
  d0
], u0 = /* @__PURE__ */ i({
  __name: "apps",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", p0, v0))
      ], 2)
    ], 2));
  }
}), x0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, m0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M38,33H25.24l3.88-3.88c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-9,9c-0.14,0.14-0.27,0.29-0.38,0.46
		c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26
		c-0.08,0.39-0.08,0.79,0,1.18c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29
		c0.04,0.07,0.07,0.15,0.12,0.22c0.11,0.17,0.24,0.32,0.38,0.46l9,9C25.46,47.71,26.23,48,27,48s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L25.24,39H38c7.17,0,13,5.83,13,13v2c0,1.66,1.34,3,3,3s3-1.34,3-3v-2C57,41.52,48.48,33,38,33z` })
], -1), C0 = [
  m0
], M0 = /* @__PURE__ */ i({
  __name: "arrow-corner-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", x0, C0))
      ], 2)
    ], 2));
  }
}), $0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, g0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M56.77,37.15c0.04-0.1,0.06-0.2,0.09-0.3c0.03-0.09,0.06-0.17,0.08-0.26c0.08-0.39,0.08-0.79,0-1.18
		c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.21-0.09-0.3c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22
		c-0.11-0.17-0.24-0.32-0.38-0.46l-9-9c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L46.76,33H34
		c-10.48,0-19,8.52-19,19v2c0,1.66,1.34,3,3,3s3-1.34,3-3v-2c0-7.17,5.83-13,13-13h12.76l-3.88,3.88c-1.17,1.17-1.17,3.07,0,4.24
		C43.46,47.71,44.23,48,45,48s1.54-0.29,2.12-0.88l9-9c0.14-0.14,0.27-0.29,0.38-0.46c0.05-0.07,0.08-0.15,0.12-0.22
		C56.67,37.34,56.73,37.25,56.77,37.15z` })
], -1), z0 = [
  g0
], b0 = /* @__PURE__ */ i({
  __name: "arrow-corner-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $0, z0))
      ], 2)
    ], 2));
  }
}), w0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, y0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M50.85,21.15c-1.17-1.17-3.07-1.17-4.24,0L26.27,41.49V28.36c0-1.66-1.34-3-3-3s-3,1.34-3,3v20.36
		c0,0.2,0.02,0.39,0.06,0.59c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29
		c0.04,0.07,0.07,0.15,0.12,0.22c0.22,0.33,0.5,0.61,0.83,0.83c0.07,0.05,0.15,0.08,0.23,0.12c0.1,0.05,0.19,0.11,0.29,0.15
		c0.1,0.04,0.2,0.06,0.3,0.09c0.09,0.03,0.17,0.06,0.26,0.08c0.19,0.04,0.39,0.06,0.59,0.06h20.36c1.66,0,3-1.34,3-3s-1.34-3-3-3
		H30.51l20.33-20.33C52.02,24.22,52.02,22.32,50.85,21.15z` })
], -1), L0 = [
  y0
], H0 = /* @__PURE__ */ i({
  __name: "arrow-down-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", w0, L0))
      ], 2)
    ], 2));
  }
}), V0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, f0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M25.36,48.73c0,1.66,1.34,3,3,3h20.36c0.2,0,0.39-0.02,0.59-0.06c0.09-0.02,0.17-0.05,0.26-0.08
		c0.1-0.03,0.21-0.05,0.3-0.09c0.1-0.04,0.19-0.1,0.29-0.15c0.08-0.04,0.16-0.08,0.23-0.12c0.33-0.22,0.61-0.5,0.83-0.83
		c0.05-0.07,0.08-0.15,0.12-0.22c0.05-0.1,0.11-0.19,0.15-0.29c0.04-0.1,0.06-0.2,0.09-0.3c0.03-0.09,0.06-0.17,0.08-0.26
		c0.04-0.19,0.06-0.39,0.06-0.59V28.36c0-1.66-1.34-3-3-3s-3,1.34-3,3v13.12L25.39,21.15c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l20.33,20.33H28.36C26.71,45.73,25.36,47.07,25.36,48.73z` })
], -1), I0 = [
  f0
], E0 = /* @__PURE__ */ i({
  __name: "arrow-down-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", V0, I0))
      ], 2)
    ], 2));
  }
}), S0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, A0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M33.88,56.12c0.14,0.14,0.29,0.27,0.46,0.38c0.07,0.05,0.15,0.08,0.23,0.12c0.1,0.05,0.19,0.11,0.29,0.15
		c0.1,0.04,0.2,0.06,0.3,0.09c0.09,0.03,0.17,0.06,0.26,0.08C35.61,56.98,35.8,57,36,57s0.39-0.02,0.59-0.06
		c0.09-0.02,0.17-0.05,0.26-0.08c0.1-0.03,0.21-0.05,0.3-0.09c0.1-0.04,0.19-0.1,0.29-0.15c0.08-0.04,0.16-0.08,0.23-0.12
		c0.17-0.11,0.32-0.24,0.46-0.38l14.4-14.4c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L39,46.76V18c0-1.66-1.34-3-3-3
		s-3,1.34-3,3v28.76l-9.28-9.28c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L33.88,56.12z` })
], -1), R0 = [
  A0
], k0 = /* @__PURE__ */ i({
  __name: "arrow-down",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", S0, R0))
      ], 2)
    ], 2));
  }
}), T0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, B0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M54,33H25.24l9.28-9.28c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-14.4,14.4
		c-0.14,0.14-0.27,0.29-0.38,0.46c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3
		c-0.03,0.09-0.06,0.17-0.08,0.26c-0.08,0.39-0.08,0.79,0,1.18c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3
		c0.04,0.1,0.1,0.19,0.15,0.29c0.04,0.07,0.07,0.15,0.12,0.22c0.11,0.17,0.24,0.32,0.38,0.46l14.4,14.4
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L25.24,39H54c1.66,0,3-1.34,3-3S55.66,33,54,33z` })
], -1), O0 = [
  B0
], N0 = /* @__PURE__ */ i({
  __name: "arrow-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", T0, O0))
      ], 2)
    ], 2));
  }
}), D0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, U0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M18,39h28.76l-9.28,9.28c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l14.4-14.4
		c0.14-0.14,0.27-0.29,0.38-0.46c0.05-0.07,0.08-0.15,0.12-0.22c0.05-0.1,0.11-0.19,0.15-0.29c0.04-0.1,0.06-0.2,0.09-0.3
		c0.03-0.09,0.06-0.17,0.08-0.26c0.08-0.39,0.08-0.79,0-1.18c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.21-0.09-0.3
		c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22c-0.11-0.17-0.24-0.32-0.38-0.46l-14.4-14.4
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L46.76,33H18c-1.66,0-3,1.34-3,3S16.34,39,18,39z` })
], -1), P0 = [
  U0
], F0 = /* @__PURE__ */ i({
  __name: "arrow-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", D0, P0))
      ], 2)
    ], 2));
  }
}), G0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, K0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,15c-11.58,0-21,9.42-21,21v1.76l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L18,49.24
		l11.12-11.12c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L21,37.76V36c0-8.27,6.73-15,15-15s15,6.73,15,15
		s-6.73,15-15,15c-1.66,0-3,1.34-3,3s1.34,3,3,3c11.58,0,21-9.42,21-21S47.58,15,36,15z` })
], -1), W0 = [
  K0
], j0 = /* @__PURE__ */ i({
  __name: "arrow-rotate-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", G0, W0))
      ], 2)
    ], 2));
  }
}), Y0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, X0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M60.88,33.88L57,37.76V36c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21c1.66,0,3-1.34,3-3s-1.34-3-3-3
		c-8.27,0-15-6.73-15-15s6.73-15,15-15s15,6.73,15,15v1.76l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L54,49.24l11.12-11.12c1.17-1.17,1.17-3.07,0-4.24C63.95,32.71,62.05,32.71,60.88,33.88z` })
], -1), q0 = [
  X0
], J0 = /* @__PURE__ */ i({
  __name: "arrow-rotate-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Y0, q0))
      ], 2)
    ], 2));
  }
}), Q0 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Z0 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M46.64,23.27c0-1.66-1.34-3-3-3H23.27c-0.2,0-0.39,0.02-0.59,0.06c-0.09,0.02-0.17,0.05-0.25,0.08
		c-0.1,0.03-0.21,0.05-0.31,0.1c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.12c-0.33,0.22-0.61,0.5-0.83,0.83
		c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26
		c-0.04,0.19-0.06,0.39-0.06,0.59v20.36c0,1.66,1.34,3,3,3s3-1.34,3-3V30.51l20.33,20.33c0.59,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L30.51,26.27h13.12C45.29,26.27,46.64,24.93,46.64,23.27z` })
], -1), c1 = [
  Z0
], e1 = /* @__PURE__ */ i({
  __name: "arrow-up-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Q0, c1))
      ], 2)
    ], 2));
  }
}), s1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, n1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M48.73,46.64c1.66,0,3-1.34,3-3V23.27c0-0.2-0.02-0.39-0.06-0.59c-0.02-0.09-0.05-0.17-0.08-0.26
		c-0.03-0.1-0.05-0.21-0.09-0.3c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22c-0.22-0.33-0.5-0.61-0.83-0.83
		c-0.07-0.05-0.15-0.08-0.23-0.12c-0.09-0.05-0.19-0.11-0.29-0.15c-0.1-0.04-0.2-0.07-0.31-0.1c-0.08-0.02-0.17-0.06-0.25-0.08
		c-0.19-0.04-0.39-0.06-0.59-0.06H28.36c-1.66,0-3,1.34-3,3s1.34,3,3,3h13.12L21.15,46.61c-1.17,1.17-1.17,3.07,0,4.24
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l20.33-20.33v13.12C45.73,45.29,47.07,46.64,48.73,46.64z` })
], -1), t1 = [
  n1
], o1 = /* @__PURE__ */ i({
  __name: "arrow-up-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", s1, t1))
      ], 2)
    ], 2));
  }
}), a1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M23.72,34.52L33,25.24V54c0,1.66,1.34,3,3,3s3-1.34,3-3V25.24l9.28,9.28c0.59,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-14.4-14.4c-0.14-0.14-0.29-0.27-0.46-0.38c-0.07-0.05-0.15-0.08-0.23-0.12
		c-0.09-0.05-0.19-0.11-0.29-0.15c-0.1-0.04-0.2-0.07-0.31-0.1c-0.08-0.02-0.17-0.06-0.25-0.08c-0.39-0.08-0.79-0.08-1.18,0
		c-0.09,0.02-0.17,0.05-0.25,0.08c-0.1,0.03-0.21,0.05-0.31,0.1c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.12
		c-0.17,0.11-0.32,0.24-0.46,0.38l-14.4,14.4c-1.17,1.17-1.17,3.07,0,4.24C20.65,35.69,22.55,35.69,23.72,34.52z` })
], -1), r1 = [
  _1
], l1 = /* @__PURE__ */ i({
  __name: "arrow-up",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", a1, r1))
      ], 2)
    ], 2));
  }
}), i1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, h1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M66,22c0-3.86-3.14-7-7-7H28.66c-1.87,0-3.63,0.73-4.95,2.05L6.88,33.88c-1.17,1.17-1.17,3.07,0,4.24l16.83,16.83
		c1.32,1.32,3.08,2.05,4.95,2.05H59c3.86,0,7-3.14,7-7V22z M60,50c0,0.55-0.45,1-1,1H28.66c-0.26,0-0.52-0.11-0.71-0.29L13.24,36
		l14.71-14.71c0.19-0.19,0.44-0.29,0.71-0.29H59c0.55,0,1,0.45,1,1V50z` }),
  /* @__PURE__ */ c("path", { d: `M55.41,25.59c-0.78-0.78-2.05-0.78-2.83,0L45,33.17l-7.59-7.59c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		L42.17,36l-7.59,7.59c-0.78,0.78-0.78,2.05,0,2.83C34.98,46.8,35.49,47,36,47s1.02-0.2,1.41-0.59L45,38.83l7.59,7.59
		C52.98,46.8,53.49,47,54,47s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83L47.83,36l7.59-7.59C56.2,27.63,56.2,26.37,55.41,25.59z
		` })
], -1), p1 = [
  h1
], d1 = /* @__PURE__ */ i({
  __name: "backspace",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", i1, p1))
      ], 2)
    ], 2));
  }
}), v1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, u1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,19.5H48V18c0-6.62-5.38-12-12-12s-12,5.38-12,12v1.5H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7
		v-28C66,22.64,62.86,19.5,59,19.5z M30,18c0-3.31,2.69-6,6-6s6,2.69,6,6v1.5H30V18z M60,54.5c0,0.55-0.45,1-1,1H13
		c-0.55,0-1-0.45-1-1v-28c0-0.55,0.45-1,1-1h11v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h12v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h11
		c0.55,0,1,0.45,1,1V54.5z` })
], -1), x1 = [
  u1
], m1 = /* @__PURE__ */ i({
  __name: "bag-2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", v1, x1))
      ], 2)
    ], 2));
  }
}), C1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, M1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,7c-6.07,0-11,4.93-11,11v1.5h-6.75c-1.58,0-2.88,1.22-2.99,2.79l-2.5,36c-0.06,0.83,0.23,1.65,0.8,2.25
		c0.57,0.61,1.36,0.95,2.19,0.95h40.5c0.83,0,1.63-0.35,2.19-0.95c0.57-0.61,0.86-1.42,0.8-2.25l-2.5-36
		c-0.11-1.57-1.42-2.79-2.99-2.79H47V18C47,11.93,42.07,7,36,7z M29,18c0-3.86,3.14-7,7-7s7,3.14,7,7v1.5H29V18z M50.95,25.5
		l2.08,30H18.97l2.08-30H25V27c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.5h14V27c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.5H50.95z` })
], -1), $1 = [
  M1
], g1 = /* @__PURE__ */ i({
  __name: "bag",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", C1, $1))
      ], 2)
    ], 2));
  }
}), z1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, b1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57,36c0-10.56-7.84-19.3-18-20.76V9c0-1.66-1.34-3-3-3s-3,1.34-3,3v6.24C22.84,16.7,15,25.44,15,36v18c0,1.66,1.34,3,3,3
		h6.39c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H54c1.66,0,3-1.34,3-3V36z M36,60c-2.22,0-4.15-1.21-5.19-3h10.38
		C40.15,58.79,38.22,60,36,60z M51,51H21V36c0-8.27,6.73-15,15-15s15,6.73,15,15V51z` })
], -1), w1 = [
  b1
], y1 = /* @__PURE__ */ i({
  __name: "bell",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", z1, w1))
      ], 2)
    ], 2));
  }
}), L1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, H1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M62.06,13.57C57.8,11.52,47.04,7.66,36,13.97c-11.04-6.31-21.8-2.45-26.05-0.41C7.55,14.72,6,17.19,6,19.87v36.37
		c0,2.26,1.1,4.4,2.94,5.71c1.84,1.31,4.2,1.65,6.33,0.91c4.76-1.65,11.93-2.61,19.06,2.14L36,66.11L37.66,65
		c7.14-4.76,14.31-3.79,19.06-2.14c2.13,0.74,4.49,0.4,6.33-0.91C64.9,60.63,66,58.5,66,56.24V19.87
		C66,17.19,64.45,14.72,62.06,13.57z M13.31,57.18c-0.41,0.14-0.73-0.02-0.89-0.13C12.26,56.94,12,56.69,12,56.24V19.87
		c0-0.38,0.21-0.73,0.54-0.89c4.34-2.08,12.86-4.7,21.46,0.82v38.15c-3.81-1.79-7.53-2.46-10.96-2.46
		C19.36,55.48,16.02,56.24,13.31,57.18z M60,56.24c0,0.45-0.26,0.71-0.42,0.82c-0.15,0.11-0.48,0.27-0.89,0.13
		C53.45,55.37,45.9,54.23,38,57.94V19.79c8.6-5.52,17.12-2.9,21.46-0.82c0.33,0.16,0.54,0.51,0.54,0.89V56.24z` })
], -1), V1 = [
  H1
], f1 = /* @__PURE__ */ i({
  __name: "book",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", L1, V1))
      ], 2)
    ], 2));
  }
}), I1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, E1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M10,57h15.14c3.3,0,6.41,1.29,8.74,3.62L36,62.74l2.12-2.12c2.33-2.33,5.44-3.62,8.74-3.62H62c2.21,0,4-1.79,4-4V14.5
		c0-2.21-1.79-4-4-4H46.86c-3.96,0-7.73,1.25-10.86,3.55c-3.13-2.31-6.9-3.55-10.86-3.55H10c-2.21,0-4,1.79-4,4V53
		C6,55.21,7.79,57,10,57z M46.86,16.5H60V51H46.86c-3.15,0-6.18,0.8-8.86,2.29V20.24l0.12-0.12C40.46,17.79,43.56,16.5,46.86,16.5z
		 M12,16.5h13.14c3.3,0,6.41,1.29,8.74,3.62L34,20.24v33.04C31.32,51.8,28.29,51,25.14,51H12V16.5z` })
], -1), S1 = [
  E1
], A1 = /* @__PURE__ */ i({
  __name: "book2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", I1, S1))
      ], 2)
    ], 2));
  }
}), R1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, k1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,61.5H23c1.49,0,2.86-0.47,4-1.26c1.14,0.79,2.51,1.26,4,1.26h5.5c3.86,0,7-3.14,7-7V39.39l3.23,16.63
		c0.36,1.84,1.41,3.42,2.96,4.47c1.17,0.79,2.52,1.2,3.9,1.2c0.45,0,0.9-0.04,1.35-0.13l5.4-1.05c3.79-0.74,6.27-4.42,5.54-8.21
		l-7.05-36.32c-0.36-1.84-1.41-3.42-2.96-4.47c-1.55-1.05-3.41-1.43-5.25-1.07l-5.4,1.05c-1.24,0.24-2.35,0.8-3.27,1.61
		c-1.28-1.59-3.24-2.6-5.44-2.6H31c-1.49,0-2.86,0.47-4,1.26c-1.14-0.79-2.51-1.26-4-1.26h-5.5c-3.86,0-7,3.14-7,7v37
		C10.5,58.36,13.64,61.5,17.5,61.5z M37.5,47.5H30v-23h7.5V47.5z M24,47.5h-7.5v-23H24V47.5z M23,55.5h-5.5c-0.55,0-1-0.45-1-1v-3
		H24v3C24,55.05,23.55,55.5,23,55.5z M36.5,55.5H31c-0.55,0-1-0.45-1-1v-3h7.5v3C37.5,55.05,37.05,55.5,36.5,55.5z M58.65,46.57
		L51.28,48L46.9,25.43L54.26,24L58.65,46.57z M59.19,54.62l-5.4,1.05c-0.36,0.07-0.62-0.07-0.75-0.15s-0.35-0.28-0.42-0.64
		l-0.57-2.95l7.36-1.43l0.57,2.94C60.09,53.99,59.73,54.51,59.19,54.62z M45.72,17.8c0.09-0.13,0.28-0.35,0.64-0.42l5.4-1.05
		c0.54-0.1,1.07,0.25,1.17,0.79l0.57,2.95l-7.36,1.43l-0.57-2.95C45.5,18.2,45.63,17.93,45.72,17.8z M31,16.5h5.5c0.55,0,1,0.45,1,1
		v3H30v-3C30,16.95,30.45,16.5,31,16.5z M17.5,16.5H23c0.55,0,1,0.45,1,1v3h-7.5v-3C16.5,16.95,16.95,16.5,17.5,16.5z` })
], -1), T1 = [
  k1
], B1 = /* @__PURE__ */ i({
  __name: "books",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", R1, T1))
      ], 2)
    ], 2));
  }
}), O1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, N1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M26.73,62.29c1.7,1.7,3.96,2.64,6.36,2.64c2.4,0,4.66-0.94,6.36-2.64l19.17-19.17c0.47,0.28,0.99,0.42,1.52,0.42
		c0.77,0,1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-1.59-1.59c0,0,0,0,0,0s0,0,0,0L36.81,12.97c0,0,0,0,0,0s0,0,0,0
		l-1.59-1.59c-1.17-1.17-3.07-1.17-4.24,0c-0.99,0.99-1.13,2.49-0.46,3.64l-2.9,2.9l-4.24-4.24c-0.78-0.78-2.05-0.78-2.83,0
		c-0.78,0.78-0.78,2.05,0,2.83l4.24,4.24L11.35,34.18c-3.51,3.51-3.51,9.22,0,12.73L26.73,62.29z M15.59,38.43l13.44-13.44
		l4.24,4.24c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-4.24-4.24l2.83-2.83L54.3,38.96
		L35.21,58.05c-1.13,1.13-3.11,1.13-4.24,0L15.59,42.67c-0.57-0.57-0.88-1.32-0.88-2.12S15.02,38.99,15.59,38.43z` }),
  /* @__PURE__ */ c("path", { d: `M57.09,48.09C56.88,48.29,52,53.23,52,58.5c0,3.58,2.92,6.5,6.5,6.5s6.5-2.92,6.5-6.5c0-5.27-4.88-10.21-5.09-10.41
		C59.13,47.3,57.87,47.3,57.09,48.09z M58.5,61c-1.38,0-2.5-1.12-2.5-2.5c0-2.04,1.32-4.32,2.5-5.91c1.18,1.59,2.5,3.87,2.5,5.91
		C61,59.88,59.88,61,58.5,61z` })
], -1), D1 = [
  N1
], U1 = /* @__PURE__ */ i({
  __name: "bucket",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", O1, D1))
      ], 2)
    ], 2));
  }
}), P1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, F1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M45.75,45.88v-0.69c0-3.35,1.18-6.68,3.42-9.63c2.18-2.88,3.33-6.31,3.33-9.93c0-4.69-2-9.17-5.5-12.3
		c-3.49-3.12-8.18-4.62-12.87-4.1c-7.83,0.87-13.96,7.21-14.58,15.08c-0.33,4.19,0.93,8.29,3.53,11.56
		c2.05,2.57,3.17,5.88,3.17,9.31v0.69c0,1.66,1.34,3,3,3h13.5C44.41,48.88,45.75,47.53,45.75,45.88z M39.88,42.88h-7.76
		c-0.42-3.95-1.93-7.7-4.35-10.74c-1.65-2.08-2.45-4.69-2.24-7.36c0.38-4.92,4.36-9.04,9.26-9.59c3.04-0.34,5.96,0.59,8.21,2.61
		c2.22,1.99,3.5,4.84,3.5,7.83c0,2.3-0.73,4.48-2.12,6.31C41.85,35.27,40.32,39.02,39.88,42.88z` }),
  /* @__PURE__ */ c("path", { d: "M44.8,52.88c0-1.1-0.9-2-2-2H29.2c-1.1,0-2,0.9-2,2s0.9,2,2,2H42.8C43.91,54.88,44.8,53.98,44.8,52.88z" }),
  /* @__PURE__ */ c("path", { d: "M31.5,57.88c-1.1,0-2,0.9-2,2s0.9,2,2,2h9c1.1,0,2-0.9,2-2s-0.9-2-2-2H31.5z" })
], -1), G1 = [
  F1
], K1 = /* @__PURE__ */ i({
  __name: "bulb",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", P1, G1))
      ], 2)
    ], 2));
  }
}), W1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, j1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57,15H47v-2c0-3.31-2.69-6-6-6H31c-3.31,0-6,2.69-6,6v2H15c-4.96,0-9,4.04-9,9v24c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9
		V24C66,19.04,61.96,15,57,15z M29,13c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v2H29V13z M60,48c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3
		V24c0-1.65,1.35-3,3-3h42c1.65,0,3,1.35,3,3V48z` }),
  /* @__PURE__ */ c("path", { d: `M36,25c-6.07,0-11,4.93-11,11s4.93,11,11,11s11-4.93,11-11S42.07,25,36,25z M36,43c-3.86,0-7-3.14-7-7s3.14-7,7-7
		s7,3.14,7,7S39.86,43,36,43z` })
], -1), Y1 = [
  j1
], X1 = /* @__PURE__ */ i({
  __name: "camera",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", W1, Y1))
      ], 2)
    ], 2));
  }
}), q1 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, J1 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,19.5H48v-6c0-1.66-1.34-3-3-3H27c-1.66,0-3,1.34-3,3v6H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46
		c3.86,0,7-3.14,7-7v-28C66,22.64,62.86,19.5,59,19.5z M30,16.5h12v3H30V16.5z M13,25.5h46c0.55,0,1,0.45,1,1V34H12v-7.5
		C12,25.95,12.45,25.5,13,25.5z M59,55.5H13c-0.55,0-1-0.45-1-1V38h48v16.5C60,55.05,59.55,55.5,59,55.5z` }),
  /* @__PURE__ */ c("path", { d: `M38.77,43.85c-0.07-0.18-0.17-0.35-0.28-0.51c-0.1-0.17-0.23-0.32-0.37-0.46c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.46c-0.11,0.16-0.2,0.33-0.28,0.51
		c-0.07,0.18-0.13,0.37-0.17,0.56C33.02,44.61,33,44.8,33,45c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.1,0.38,0.17,0.56
		c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45C34.44,47.68,35.21,48,36,48c0.2,0,0.39-0.02,0.59-0.06
		c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37c0.14-0.14,0.27-0.29,0.37-0.45
		c0.11-0.17,0.21-0.34,0.28-0.52c0.08-0.18,0.13-0.37,0.17-0.56C38.98,45.39,39,45.2,39,45c0-0.2-0.02-0.39-0.06-0.59
		C38.9,44.22,38.85,44.03,38.77,43.85z` })
], -1), Q1 = [
  J1
], Z1 = /* @__PURE__ */ i({
  __name: "case",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", q1, Q1))
      ], 2)
    ], 2));
  }
}), c2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, e2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M46.34,24.32c-1.48-0.74-3.28-0.14-4.03,1.34l-7.14,14.28l-6.06-6.06c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l11.94,11.94l10.86-21.72C48.42,26.86,47.82,25.06,46.34,24.32z` })
], -1), s2 = [
  e2
], n2 = /* @__PURE__ */ i({
  __name: "check-circle",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", c2, s2))
      ], 2)
    ], 2));
  }
}), t2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, o2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M51.28,16.74L38.93,43.46L27.49,26.33c-0.92-1.38-2.78-1.75-4.16-0.83c-1.38,0.92-1.75,2.78-0.83,4.16l17.38,26.03
		l16.84-36.44c0.7-1.5,0.04-3.29-1.46-3.98C53.76,14.58,51.97,15.24,51.28,16.74z` })
], -1), a2 = [
  o2
], _2 = /* @__PURE__ */ i({
  __name: "check",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", t2, a2))
      ], 2)
    ], 2));
  }
}), r2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, l2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M33.88,47.12C34.46,47.71,35.23,48,36,48s1.54-0.29,2.12-0.88l18-18c1.17-1.17,1.17-3.07,0-4.24
		c-1.17-1.17-3.07-1.17-4.24,0L36,40.76L20.12,24.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L33.88,47.12z` })
], -1), i2 = [
  l2
], h2 = /* @__PURE__ */ i({
  __name: "chevron-down",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", r2, i2))
      ], 2)
    ], 2));
  }
}), p2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, d2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M42.88,56.12C43.46,56.71,44.23,57,45,57s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L31.24,36l15.88-15.88
		c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-18,18c-1.17,1.17-1.17,3.07,0,4.24L42.88,56.12z` })
], -1), v2 = [
  d2
], u2 = /* @__PURE__ */ i({
  __name: "chevron-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", p2, v2))
      ], 2)
    ], 2));
  }
}), x2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, m2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M24.88,56.12C25.46,56.71,26.23,57,27,57s1.54-0.29,2.12-0.88l18-18c1.17-1.17,1.17-3.07,0-4.24l-18-18
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L40.76,36L24.88,51.88C23.71,53.05,23.71,54.95,24.88,56.12z` })
], -1), C2 = [
  m2
], M2 = /* @__PURE__ */ i({
  __name: "chevron-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", x2, C2))
      ], 2)
    ], 2));
  }
}), $2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, g2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M54,48c0.77,0,1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-18-18c-1.17-1.17-3.07-1.17-4.24,0l-18,18
		c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0L36,31.24l15.88,15.88C52.46,47.71,53.23,48,54,48z` })
], -1), z2 = [
  g2
], b2 = /* @__PURE__ */ i({
  __name: "chevron-up",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $2, z2))
      ], 2)
    ], 2));
  }
}), w2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, y2 = /* @__PURE__ */ b(`<g><path d="M15.88,15.88C15.32,16.44,15,17.21,15,18s0.32,1.56,0.88,2.12C16.44,20.68,17.21,21,18,21s1.56-0.32,2.12-0.88
		C20.68,19.56,21,18.79,21,18s-0.32-1.56-0.88-2.12C19.01,14.76,17,14.76,15.88,15.88z"></path><path d="M29.77,16.85c-0.07-0.18-0.17-0.35-0.28-0.52c-0.1-0.16-0.23-0.31-0.37-0.45c-1.11-1.12-3.12-1.12-4.24,0
		c-0.14,0.14-0.26,0.29-0.37,0.45c-0.11,0.17-0.2,0.34-0.28,0.52c-0.08,0.18-0.13,0.37-0.17,0.56C24.02,17.61,24,17.81,24,18
		c0,0.79,0.32,1.56,0.88,2.12C25.44,20.68,26.21,21,27,21s1.56-0.32,2.12-0.88C29.68,19.56,30,18.79,30,18
		c0-0.19-0.02-0.39-0.06-0.59C29.9,17.22,29.85,17.03,29.77,16.85z"></path><path d="M15.88,24.88C15.32,25.44,15,26.21,15,27s0.32,1.56,0.88,2.12C16.44,29.68,17.21,30,18,30s1.56-0.32,2.12-0.88
		C20.68,28.56,21,27.79,21,27s-0.32-1.56-0.88-2.12C19.01,23.76,17,23.76,15.88,24.88z"></path><path d="M24.88,24.88C24.32,25.44,24,26.21,24,27c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45C25.44,29.68,26.21,30,27,30s1.56-0.32,2.12-0.88
		c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52c0.08-0.18,0.13-0.37,0.17-0.56C29.98,27.39,30,27.2,30,27
		c0-0.79-0.32-1.56-0.88-2.12C28.01,23.76,26,23.76,24.88,24.88z"></path><path d="M15.88,33.88C15.32,34.44,15,35.21,15,36s0.32,1.56,0.88,2.12c0.14,0.14,0.29,0.27,0.45,0.37
		c0.17,0.11,0.34,0.21,0.52,0.28c0.18,0.08,0.37,0.13,0.56,0.17C17.61,38.98,17.8,39,18,39c0.79,0,1.56-0.32,2.12-0.88
		C20.68,37.56,21,36.79,21,36s-0.32-1.56-0.88-2.12C19,32.76,17,32.76,15.88,33.88z"></path><path d="M28.67,33.51c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.08-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0
		c-0.19,0.04-0.38,0.09-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37C24.32,34.44,24,35.21,24,36
		c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45
		C25.44,38.68,26.21,39,27,39s1.56-0.32,2.12-0.88c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C29.98,36.39,30,36.2,30,36c0-0.79-0.32-1.56-0.88-2.12C28.98,33.74,28.83,33.62,28.67,33.51z"></path><path d="M15.88,42.88C15.32,43.44,15,44.21,15,45s0.32,1.56,0.88,2.12C16.44,47.68,17.21,48,18,48s1.56-0.32,2.12-0.88
		C20.68,46.56,21,45.79,21,45s-0.32-1.56-0.88-2.12C19.01,41.76,17,41.76,15.88,42.88z"></path><path d="M24.88,42.88C24.32,43.44,24,44.21,24,45s0.32,1.56,0.88,2.12C25.44,47.68,26.21,48,27,48s1.56-0.32,2.12-0.88
		C29.68,46.56,30,45.79,30,45s-0.32-1.56-0.88-2.12C28.01,41.76,25.99,41.76,24.88,42.88z"></path><path d="M15.88,51.88C15.32,52.44,15,53.21,15,54s0.32,1.56,0.88,2.12C16.44,56.68,17.21,57,18,57s1.56-0.32,2.12-0.88
		C20.68,55.56,21,54.79,21,54s-0.32-1.56-0.88-2.12C19.01,50.76,17,50.76,15.88,51.88z"></path><path d="M29.77,52.85c-0.07-0.18-0.17-0.35-0.28-0.51c-0.1-0.17-0.23-0.32-0.37-0.46c-1.11-1.12-3.12-1.12-4.24,0
		c-0.14,0.14-0.26,0.29-0.37,0.46c-0.11,0.16-0.2,0.33-0.28,0.51c-0.08,0.18-0.13,0.37-0.17,0.56C24.02,53.61,24,53.81,24,54
		c0,0.79,0.32,1.57,0.88,2.12C25.44,56.68,26.21,57,27,57s1.56-0.32,2.12-0.88C29.68,55.57,30,54.79,30,54
		c0-0.19-0.02-0.39-0.06-0.59C29.9,53.22,29.85,53.03,29.77,52.85z"></path><path d="M44.41,51.06c-0.19,0.04-0.38,0.09-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37
		C42.32,52.44,42,53.21,42,54c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56c0.07,0.18,0.17,0.35,0.28,0.52
		c0.1,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.38c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.56,0.17
		C44.61,56.98,44.81,57,45,57c0.79,0,1.56-0.32,2.12-0.88c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C47.98,54.39,48,54.2,48,54c0-0.79-0.32-1.56-0.88-2.12C46.42,51.18,45.39,50.86,44.41,51.06z"></path><path d="M56.77,52.85c-0.07-0.18-0.17-0.35-0.28-0.51c-0.1-0.17-0.23-0.32-0.37-0.46c-0.69-0.7-1.73-1.02-2.71-0.82
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.1-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.46
		c-0.11,0.16-0.2,0.33-0.28,0.51c-0.08,0.18-0.13,0.37-0.17,0.56C51.02,53.61,51,53.8,51,54c0,0.2,0.02,0.39,0.06,0.59
		c0.04,0.19,0.09,0.38,0.17,0.56c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.38
		c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.56,0.17C53.61,56.98,53.81,57,54,57c0.79,0,1.57-0.32,2.12-0.88
		c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52c0.08-0.18,0.13-0.37,0.17-0.56C56.98,54.39,57,54.2,57,54
		c0-0.2-0.02-0.39-0.06-0.59C56.9,53.22,56.85,53.03,56.77,52.85z"></path><path d="M44.41,42.06c-0.19,0.04-0.38,0.09-0.56,0.17c-0.18,0.07-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37
		C42.32,43.44,42,44.21,42,45s0.32,1.56,0.88,2.12c0.14,0.14,0.29,0.27,0.46,0.38c0.16,0.1,0.33,0.2,0.51,0.27
		c0.18,0.08,0.37,0.13,0.56,0.17C44.61,47.98,44.81,48,45,48c0.79,0,1.56-0.32,2.12-0.88C47.68,46.56,48,45.79,48,45
		s-0.32-1.56-0.88-2.12C46.42,42.18,45.39,41.86,44.41,42.06z"></path><path d="M56.77,43.85c-0.07-0.18-0.17-0.35-0.28-0.51c-0.1-0.17-0.23-0.32-0.37-0.46c-0.69-0.7-1.73-1.02-2.71-0.82
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.1-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.46
		c-0.11,0.16-0.2,0.33-0.28,0.51c-0.08,0.18-0.13,0.37-0.17,0.56C51.02,44.61,51,44.81,51,45c0,0.2,0.02,0.39,0.06,0.59
		c0.04,0.19,0.09,0.38,0.17,0.56c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.37
		c0.16,0.11,0.33,0.21,0.51,0.28c0.18,0.08,0.37,0.13,0.56,0.17C53.61,47.98,53.81,48,54,48c0.79,0,1.57-0.32,2.12-0.88
		c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52c0.08-0.18,0.13-0.37,0.17-0.56C56.98,45.39,57,45.2,57,45
		c0-0.19-0.02-0.39-0.06-0.59C56.9,44.22,56.85,44.03,56.77,43.85z"></path><path d="M47.77,34.85c-0.07-0.18-0.17-0.35-0.28-0.52c-0.1-0.16-0.23-0.31-0.37-0.45c-0.69-0.7-1.73-1.01-2.71-0.82
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.1-0.32,0.23-0.46,0.37s-0.27,0.29-0.37,0.45
		c-0.11,0.17-0.21,0.34-0.28,0.52c-0.08,0.18-0.13,0.37-0.17,0.56C42.02,35.61,42,35.81,42,36c0,0.79,0.32,1.56,0.88,2.12
		c0.14,0.14,0.29,0.27,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28c0.18,0.08,0.37,0.13,0.56,0.17C44.61,38.98,44.81,39,45,39
		c0.79,0,1.56-0.32,2.12-0.88C47.68,37.56,48,36.79,48,36c0-0.19-0.02-0.39-0.06-0.59C47.9,35.22,47.85,35.03,47.77,34.85z"></path><path d="M56.77,34.85c-0.07-0.18-0.17-0.35-0.28-0.52c-0.1-0.16-0.23-0.31-0.37-0.45c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.45c-0.11,0.17-0.2,0.34-0.28,0.52
		c-0.08,0.18-0.13,0.37-0.17,0.56C51.02,35.61,51,35.81,51,36c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28
		c0.18,0.08,0.37,0.13,0.56,0.17C53.61,38.98,53.81,39,54,39c0.79,0,1.57-0.32,2.12-0.88C56.68,37.56,57,36.79,57,36
		c0-0.19-0.02-0.39-0.06-0.59C56.9,35.22,56.85,35.03,56.77,34.85z"></path><path d="M47.77,25.85c-0.07-0.18-0.17-0.35-0.28-0.52c-0.1-0.16-0.23-0.31-0.37-0.45c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.98-0.2-2.01,0.12-2.71,0.82c-0.14,0.14-0.27,0.29-0.37,0.45
		c-0.11,0.17-0.21,0.34-0.28,0.52c-0.08,0.18-0.13,0.37-0.17,0.56C42.02,26.61,42,26.8,42,27c0,0.79,0.32,1.56,0.88,2.12
		c0.14,0.14,0.29,0.26,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28c0.18,0.08,0.37,0.13,0.56,0.17C44.61,29.98,44.81,30,45,30
		c0.79,0,1.56-0.32,2.12-0.88C47.68,28.56,48,27.79,48,27c0-0.2-0.02-0.39-0.06-0.59C47.9,26.22,47.85,26.03,47.77,25.85z"></path><path d="M56.77,25.85c-0.07-0.18-0.17-0.35-0.28-0.52c-0.1-0.16-0.23-0.31-0.37-0.45c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.45c-0.11,0.17-0.2,0.34-0.28,0.52
		c-0.08,0.18-0.13,0.37-0.17,0.56C51.02,26.61,51,26.81,51,27c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28
		c0.18,0.08,0.37,0.13,0.56,0.17C53.61,29.98,53.81,30,54,30c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17
		c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C56.98,27.39,57,27.2,57,27c0-0.19-0.02-0.39-0.06-0.59C56.9,26.22,56.85,26.03,56.77,25.85z"></path><path d="M59,15H39v-2c0-3.86-3.14-7-7-7H13c-3.86,0-7,3.14-7,7v50c0,1.66,1.34,3,3,3h27h27c1.66,0,3-1.34,3-3V22
		C66,18.14,62.86,15,59,15z M12,13c0-0.55,0.45-1,1-1h19c0.55,0,1,0.45,1,1v5v42H12V13z M60,60H39V21h20c0.55,0,1,0.45,1,1V60z"></path></g>`, 1), L2 = [
  y2
], H2 = /* @__PURE__ */ i({
  __name: "city-buildings",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", w2, L2))
      ], 2)
    ], 2));
  }
}), V2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, f2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M22,66h28c3.86,0,7-3.14,7-7V17.5c0-3.86-3.14-7-7-7h-7.5V9c0-1.1-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2v1.5H22
		c-3.86,0-7,3.14-7,7V59C15,62.86,18.14,66,22,66z M33.5,11h5v5h-5V11z M21,17.5c0-0.55,0.45-1,1-1h7.5V18c0,1.1,0.9,2,2,2h9
		c1.1,0,2-0.9,2-2v-1.5H50c0.55,0,1,0.45,1,1V59c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V17.5z` })
], -1), I2 = [
  f2
], E2 = /* @__PURE__ */ i({
  __name: "clipboard",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", V2, I2))
      ], 2)
    ], 2));
  }
}), S2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, A2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M38,35.17V18c0-1.1-0.9-2-2-2s-2,0.9-2,2v18c0,0.53,0.21,1.04,0.59,1.41l9,9C43.98,46.8,44.49,47,45,47s1.02-0.2,1.41-0.59
		c0.78-0.78,0.78-2.05,0-2.83L38,35.17z` })
], -1), R2 = [
  A2
], k2 = /* @__PURE__ */ i({
  __name: "clock",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", S2, R2))
      ], 2)
    ], 2));
  }
}), T2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, B2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M47.12,24.88c-1.17-1.17-3.07-1.17-4.24,0L36,31.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L31.76,36l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C25.46,47.71,26.23,48,27,48s1.54-0.29,2.12-0.88L36,40.24l6.88,6.88
		C43.46,47.71,44.23,48,45,48s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L40.24,36l6.88-6.88
		C48.29,27.95,48.29,26.05,47.12,24.88z` }),
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` })
], -1), O2 = [
  B2
], N2 = /* @__PURE__ */ i({
  __name: "close-circle",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", T2, O2))
      ], 2)
    ], 2));
  }
}), D2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, U2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M56.12,15.88c-1.17-1.17-3.07-1.17-4.24,0L36,31.76L20.12,15.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L31.76,36L15.88,51.88c-1.17,1.17-1.17,3.07,0,4.24C16.46,56.71,17.23,57,18,57s1.54-0.29,2.12-0.88L36,40.24l15.88,15.88
		C52.46,56.71,53.23,57,54,57s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L40.24,36l15.88-15.88
		C57.29,18.95,57.29,17.05,56.12,15.88z` })
], -1), P2 = [
  U2
], F2 = /* @__PURE__ */ i({
  __name: "close",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", D2, P2))
      ], 2)
    ], 2));
  }
}), G2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, K2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M66,36c0-6.06-4.52-11.09-10.36-11.89C52.6,16,44.82,10.5,36,10.5S19.4,16,16.36,24.11C10.52,24.91,6,29.94,6,36
		c0,6.62,5.38,12,12,12c1.42,0,2.82-0.25,4.15-0.74C25.96,50.61,30.9,52.5,36,52.5s10.04-1.89,13.85-5.24
		C51.18,47.75,52.58,48,54,48C60.62,48,66,42.62,66,36z M54,42c-1.11,0-2.2-0.31-3.15-0.91l-2.11-1.31l-1.68,1.84
		C44.16,44.77,40.24,46.5,36,46.5s-8.16-1.73-11.05-4.89l-1.68-1.84l-2.11,1.31C20.2,41.69,19.11,42,18,42c-3.31,0-6-2.69-6-6
		s2.69-6,6-6c0.08,0,0.17,0.01,0.25,0.01l2.62,0.17l0.62-2.41C23.19,21.14,29.16,16.5,36,16.5s12.81,4.64,14.51,11.27l0.62,2.41
		l2.62-0.17C53.83,30.01,53.92,30,54,30c3.31,0,6,2.69,6,6S57.31,42,54,42z` }),
  /* @__PURE__ */ c("path", { d: `M20.49,52.34c-0.1-0.17-0.23-0.32-0.37-0.46c-0.69-0.7-1.73-1.02-2.71-0.82c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.1-0.32,0.23-0.46,0.37s-0.27,0.29-0.37,0.46c-0.11,0.16-0.21,0.33-0.28,0.51
		c-0.08,0.18-0.13,0.37-0.17,0.56C15.02,53.61,15,53.8,15,54c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.07,0.18,0.17,0.35,0.28,0.52c0.1,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.38c0.16,0.1,0.33,0.2,0.51,0.27
		c0.18,0.08,0.37,0.13,0.56,0.17C17.61,56.98,17.81,57,18,57c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17
		c0.18-0.07,0.35-0.17,0.52-0.27c0.16-0.11,0.31-0.24,0.45-0.38c0.14-0.14,0.27-0.29,0.37-0.45c0.11-0.17,0.21-0.34,0.28-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C20.98,54.39,21,54.2,21,54c0-0.2-0.02-0.39-0.06-0.59c-0.04-0.19-0.09-0.38-0.17-0.56
		C20.7,52.67,20.6,52.5,20.49,52.34z` }),
  /* @__PURE__ */ c("path", { d: `M37.15,55.73c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37C33.32,56.94,33,57.71,33,58.5c0,0.2,0.02,0.39,0.06,0.59
		c0.04,0.19,0.1,0.38,0.17,0.56c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.38
		c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.56,0.17c0.2,0.04,0.39,0.06,0.59,0.06s0.39-0.02,0.59-0.06
		c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.35-0.17,0.52-0.27c0.16-0.11,0.31-0.24,0.45-0.38c0.14-0.14,0.27-0.29,0.37-0.45
		c0.11-0.17,0.21-0.34,0.28-0.52c0.08-0.18,0.13-0.37,0.17-0.56C38.98,58.89,39,58.7,39,58.5c0-0.79-0.32-1.56-0.88-2.12
		c-0.14-0.14-0.29-0.26-0.45-0.37C37.5,55.9,37.33,55.81,37.15,55.73z` }),
  /* @__PURE__ */ c("path", { d: `M56.5,52.33c-0.11-0.16-0.24-0.31-0.38-0.45c-1.11-1.12-3.12-1.12-4.24,0c-0.14,0.14-0.26,0.29-0.37,0.45
		c-0.11,0.17-0.2,0.34-0.28,0.52c-0.07,0.18-0.13,0.37-0.17,0.57C51.02,53.61,51,53.81,51,54c0,0.79,0.32,1.56,0.88,2.12
		C52.44,56.68,53.21,57,54,57s1.56-0.32,2.12-0.88C56.68,55.56,57,54.79,57,54c0-0.19-0.02-0.39-0.06-0.58
		c-0.04-0.2-0.09-0.39-0.17-0.57C56.7,52.67,56.6,52.5,56.5,52.33z` })
], -1), W2 = [
  K2
], j2 = /* @__PURE__ */ i({
  __name: "cloud-rain",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", G2, W2))
      ], 2)
    ], 2));
  }
}), Y2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, X2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M55.64,28.61C52.6,20.5,44.82,15,36,15s-16.6,5.5-19.64,13.61C10.52,29.41,6,34.44,6,40.5c0,6.62,5.38,12,12,12
		c1.42,0,2.82-0.25,4.15-0.74C25.96,55.11,30.9,57,36,57s10.04-1.89,13.85-5.24c1.32,0.49,2.73,0.74,4.15,0.74c6.62,0,12-5.38,12-12
		C66,34.44,61.48,29.41,55.64,28.61z M54,46.5c-1.11,0-2.2-0.31-3.15-0.91l-2.11-1.31l-1.68,1.84C44.16,49.27,40.24,51,36,51
		s-8.16-1.73-11.05-4.89l-1.68-1.84l-2.11,1.31C20.2,46.19,19.11,46.5,18,46.5c-3.31,0-6-2.69-6-6s2.69-6,6-6
		c0.08,0,0.17,0.01,0.25,0.01l2.62,0.17l0.62-2.41C23.19,25.64,29.16,21,36,21s12.81,4.64,14.51,11.27l0.62,2.41l2.62-0.17
		c0.08-0.01,0.16-0.01,0.25-0.01c3.31,0,6,2.69,6,6S57.31,46.5,54,46.5z` })
], -1), q2 = [
  X2
], J2 = /* @__PURE__ */ i({
  __name: "cloud",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Y2, q2))
      ], 2)
    ], 2));
  }
}), Q2 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Z2 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M19.5,36c0,8.42,6.34,15.37,14.5,16.37V63c0,1.1,0.9,2,2,2s2-0.9,2-2v-9.71c2.65,1.32,5.58,2.03,8.56,2.03
		c2.91,0,5.71-0.63,8.32-1.89c1.2-0.57,2-1.75,2.1-3.07c0.1-1.32-0.52-2.61-1.61-3.37c-3.64-2.49-5.81-6.6-5.81-11
		c0-4.4,2.17-8.51,5.81-11c1.1-0.75,1.71-2.04,1.61-3.36c-0.1-1.32-0.91-2.5-2.1-3.07c-3.37-1.61-7.13-2.21-10.88-1.72
		c-2.1,0.27-4.12,0.9-6,1.84V9c0-1.1-0.9-2-2-2s-2,0.9-2,2v10.63C25.84,20.63,19.5,27.58,19.5,36z M44.78,22.8
		c1.33-0.17,2.66-0.15,3.95,0.06c-3.28,3.54-5.16,8.21-5.16,13.14c0,4.93,1.88,9.61,5.17,13.14c-0.71,0.12-1.43,0.17-2.17,0.17
		c-3.12,0-6.16-1.12-8.56-3.14V25.81C39.95,24.16,42.29,23.12,44.78,22.8z M34,25.7V46.3c-4.84-0.94-8.5-5.2-8.5-10.3
		S29.16,26.63,34,25.7z` }),
  /* @__PURE__ */ c("path", { d: "M9,39h4.5c1.66,0,3-1.34,3-3s-1.34-3-3-3H9c-1.66,0-3,1.34-3,3S7.34,39,9,39z" }),
  /* @__PURE__ */ c("path", { d: `M17.97,22.21c0.58,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-3.18-3.18
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L17.97,22.21z` }),
  /* @__PURE__ */ c("path", { d: `M17.97,49.79l-3.18,3.18c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l3.18-3.18
		c1.17-1.17,1.17-3.07,0-4.24C21.04,48.62,19.14,48.62,17.97,49.79z` })
], -1), c3 = [
  Z2
], e3 = /* @__PURE__ */ i({
  __name: "colormode",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Q2, c3))
      ], 2)
    ], 2));
  }
}), s3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, n3 = /* @__PURE__ */ b(`<g><path d="M20.38,50.04C24.36,54.46,30.05,57,36,57c3.02,0,5.94-0.64,8.69-1.89c1.29-0.59,2.17-1.83,2.3-3.24
		c0.14-1.42-0.5-2.82-1.67-3.66C41.36,45.4,39,40.83,39,36c0-4.83,2.36-9.4,6.32-12.21c1.17-0.83,1.81-2.23,1.67-3.66
		c-0.13-1.41-1.02-2.65-2.31-3.24c-3.57-1.63-7.53-2.22-11.45-1.71c-9.48,1.24-17.1,9.03-18.11,18.53
		C14.49,39.66,16.41,45.62,20.38,50.04z M21.09,34.34c0.72-6.77,6.15-12.33,12.92-13.21c0.66-0.09,1.32-0.13,1.97-0.13
		c1.02,0,2.04,0.1,3.04,0.31C35.2,25.2,33,30.48,33,36c0,5.53,2.2,10.8,6.02,14.69C38.03,50.9,37.02,51,36,51
		c-4.25,0-8.32-1.81-11.16-4.97C21.96,42.82,20.63,38.67,21.09,34.34z"></path><path d="M36,12c1.66,0,3-1.34,3-3V4.5c0-1.66-1.34-3-3-3s-3,1.34-3,3V9C33,10.66,34.34,12,36,12z"></path><path d="M39,67.5V63c0-1.66-1.34-3-3-3s-3,1.34-3,3v4.5c0,1.66,1.34,3,3,3S39,69.16,39,67.5z"></path><path d="M4.5,39H9c1.66,0,3-1.34,3-3s-1.34-3-3-3H4.5c-1.66,0-3,1.34-3,3S2.84,39,4.5,39z"></path><path d="M14.79,19.03c0.58,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-3.18-3.18
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L14.79,19.03z"></path><path d="M19.03,57.21c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-3.18,3.18c-1.17,1.17-1.17,3.07,0,4.24
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88L19.03,57.21z"></path></g>`, 1), t3 = [
  n3
], o3 = /* @__PURE__ */ i({
  __name: "colormode2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", s3, t3))
      ], 2)
    ], 2));
  }
}), a3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M10.54,34.54c0,0.05-0.01,0.11-0.01,0.16c-0.02,0.43-0.03,0.86-0.03,1.3s0.01,0.87,0.03,1.3c0,0.05,0.01,0.11,0.01,0.16
		c0.02,0.38,0.05,0.76,0.09,1.13c0,0.02,0,0.03,0.01,0.05c1.18,11.51,9.98,20.77,21.39,22.54c0.04,0.01,0.08,0.01,0.11,0.02
		c0.32,0.05,0.65,0.09,0.98,0.12c0.11,0.01,0.22,0.03,0.33,0.04c0.27,0.03,0.54,0.04,0.82,0.06c0.16,0.01,0.32,0.03,0.48,0.03
		c0.03,0,0.05,0,0.08,0.01c0.06,0,0.12,0,0.18,0c0.01,0,0.02,0,0.03,0c0.32,0.01,0.64,0.02,0.96,0.02c14.06,0,25.5-11.44,25.5-25.5
		S50.06,10.5,36,10.5c-0.38,0-0.75,0.01-1.12,0.03c-0.01,0-0.03,0-0.04,0c-0.03,0-0.05,0-0.08,0.01c-0.17,0.01-0.33,0.02-0.5,0.03
		c-0.27,0.02-0.54,0.04-0.81,0.06c-0.12,0.01-0.23,0.03-0.35,0.04c-0.32,0.04-0.64,0.07-0.96,0.12c-0.04,0.01-0.09,0.02-0.13,0.02
		c-11.41,1.78-20.2,11.03-21.38,22.54c0,0.02,0,0.03-0.01,0.05C10.59,33.78,10.57,34.16,10.54,34.54z M55.5,36
		c0,10.75-8.75,19.5-19.5,19.5c-0.5,0-0.99-0.04-1.47-0.07c-0.01,0-0.02,0-0.03,0V16.58c0.01,0,0.02,0,0.03,0
		c0.49-0.04,0.97-0.07,1.47-0.07C46.75,16.5,55.5,25.25,55.5,36z` })
], -1), r3 = [
  _3
], l3 = /* @__PURE__ */ i({
  __name: "colormode3",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", a3, r3))
      ], 2)
    ], 2));
  }
}), i3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, h3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M45.88,21.06l-18.62,6.21l-6.21,18.62c-0.48,1.45-0.11,3.01,0.96,4.09c0.77,0.77,1.78,1.18,2.82,1.18
		c0.42,0,0.85-0.07,1.27-0.21l18.62-6.21l6.21-18.62c0.48-1.45,0.11-3.01-0.96-4.09C48.9,20.95,47.33,20.58,45.88,21.06z
		 M39.99,39.99l-11.98,3.99l3.99-11.98l11.98-3.99L39.99,39.99z` })
], -1), p3 = [
  h3
], d3 = /* @__PURE__ */ i({
  __name: "compass",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", i3, p3))
      ], 2)
    ], 2));
  }
}), v3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, u3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57,15H15c-4.96,0-9,4.04-9,9v24c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V24C66,19.04,61.96,15,57,15z M15,21h42
		c1.65,0,3,1.35,3,3v5.5H12V24C12,22.35,13.35,21,15,21z M57,51H15c-1.65,0-3-1.35-3-3V33.5h48V48C60,49.65,58.65,51,57,51z` }),
  /* @__PURE__ */ c("path", { d: `M20.77,43.85c-0.07-0.18-0.17-0.35-0.27-0.52c-0.11-0.16-0.24-0.31-0.38-0.45c-0.14-0.14-0.29-0.27-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.52,0.28c-0.16,0.1-0.31,0.23-0.45,0.37s-0.27,0.29-0.37,0.45c-0.11,0.17-0.21,0.34-0.28,0.52
		c-0.08,0.18-0.13,0.37-0.17,0.56C15.02,44.61,15,44.8,15,45c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.07,0.18,0.17,0.35,0.28,0.52c0.1,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.45,0.37c0.17,0.11,0.34,0.21,0.52,0.28
		c0.18,0.08,0.37,0.13,0.56,0.17C17.61,47.98,17.8,48,18,48c0.19,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17
		c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37c0.14-0.14,0.27-0.29,0.38-0.45c0.1-0.17,0.2-0.34,0.27-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C20.98,45.39,21,45.2,21,45c0-0.2-0.02-0.39-0.06-0.59C20.9,44.22,20.85,44.03,20.77,43.85z` }),
  /* @__PURE__ */ c("path", { d: `M28.67,42.51c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37C24.32,43.44,24,44.21,24,45
		s0.32,1.56,0.88,2.12c0.14,0.14,0.29,0.27,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28c0.18,0.08,0.37,0.13,0.56,0.17
		C26.61,47.98,26.81,48,27,48c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.35-0.17,0.52-0.28
		c0.16-0.1,0.31-0.23,0.45-0.37C29.68,46.56,30,45.79,30,45s-0.32-1.56-0.88-2.12C28.98,42.74,28.83,42.62,28.67,42.51z` })
], -1), x3 = [
  u3
], m3 = /* @__PURE__ */ i({
  __name: "creditcard",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", v3, x3))
      ], 2)
    ], 2));
  }
}), C3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, M3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M10.5,22.5v25c0,1.14,0.64,2.18,1.66,2.68l22.5,11.25c0.42,0.21,0.88,0.32,1.34,0.32s0.92-0.11,1.34-0.32l22.5-11.25
		c1.02-0.51,1.66-1.55,1.66-2.68v-25c0-1.14-0.64-2.18-1.66-2.68L37.34,8.57c-0.85-0.42-1.84-0.42-2.68,0l-22.5,11.25
		C11.14,20.32,10.5,21.36,10.5,22.5z M16.5,26.24L34,34.99V54.4l-17.5-8.75V26.24z M38,54.4V34.99l17.5-8.75v19.41L38,54.4z
		 M36,14.6l16.91,8.45L36,31.51l-16.91-8.45L36,14.6z` })
], -1), $3 = [
  M3
], g3 = /* @__PURE__ */ i({
  __name: "cube-3-d",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", C3, $3))
      ], 2)
    ], 2));
  }
}), z3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, b3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,6H13c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h20v3h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h18c1.66,0,3-1.34,3-3
		s-1.34-3-3-3h-6v-3h20c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M13,12h46c0.55,0,1,0.45,1,1v30H12V13C12,12.45,12.45,12,13,12z
		 M59,51H13c-0.55,0-1-0.45-1-1v-3h48v3C60,50.55,59.55,51,59,51z` })
], -1), w3 = [
  b3
], y3 = /* @__PURE__ */ i({
  __name: "desktop",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", z3, w3))
      ], 2)
    ], 2));
  }
}), L3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, H3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M39.07,59.5l23.17-27.8l-9.95-14.92C51.55,15.67,50.31,15,48.96,15H23.04c-1.34,0-2.58,0.67-3.33,1.78L9.76,31.7
		l23.17,27.8c0.76,0.91,1.88,1.44,3.07,1.44S38.31,60.41,39.07,59.5z M25.56,33.5l4.32,12.97L19.07,33.5H25.56z M52.93,33.5
		L42.12,46.47l4.32-12.97H52.93z M42.22,33.5L36,52.18L29.78,33.5H42.22z M29.78,29.5l2.83-8.5h6.78l2.83,8.5H29.78z M53.56,29.5
		h-7.12L43.61,21h4.29L53.56,29.5z M24.11,21h4.29l-2.83,8.5h-7.12L24.11,21z` })
], -1), V3 = [
  H3
], f3 = /* @__PURE__ */ i({
  __name: "diamond",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", L3, V3))
      ], 2)
    ], 2));
  }
}), I3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, E3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z` }),
  /* @__PURE__ */ c("path", { d: `M45,42h-6v-6c0-1.66-1.34-3-3-3s-3,1.34-3,3v6h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6
		c1.66,0,3-1.34,3-3S46.66,42,45,42z` })
], -1), S3 = [
  E3
], A3 = /* @__PURE__ */ i({
  __name: "document-add-2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", I3, S3))
      ], 2)
    ], 2));
  }
}), R3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, k3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v27.5c0,1.66,1.34,3,3,3s3-1.34,3-3V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		c0,0.55-0.45,1-1,1H36c-1.66,0-3,1.34-3,3s1.34,3,3,3h18.5c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5
		C43.4,25,42.5,24.1,42.5,23z` }),
  /* @__PURE__ */ c("path", { d: `M22.5,42c-1.66,0-3,1.34-3,3v6h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3
		s-1.34-3-3-3h-6v-6C25.5,43.34,24.16,42,22.5,42z` })
], -1), T3 = [
  k3
], B3 = /* @__PURE__ */ i({
  __name: "document-add",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", R3, T3))
      ], 2)
    ], 2));
  }
}), O3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, N3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z` }),
  /* @__PURE__ */ c("path", { d: `M46.34,33.32c-1.48-0.74-3.28-0.14-4.02,1.34l-7.14,14.28l-6.06-6.06c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l11.94,11.94l10.86-21.72C48.42,35.86,47.82,34.06,46.34,33.32z` })
], -1), D3 = [
  N3
], U3 = /* @__PURE__ */ i({
  __name: "document-check-2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", O3, D3))
      ], 2)
    ], 2));
  }
}), P3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, F3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v27.5c0,1.66,1.34,3,3,3s3-1.34,3-3V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		c0,0.55-0.45,1-1,1H36c-1.66,0-3,1.34-3,3s1.34,3,3,3h18.5c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5
		C43.4,25,42.5,24.1,42.5,23z` }),
  /* @__PURE__ */ c("path", { d: `M34.18,46.34c0.74-1.48,0.14-3.28-1.34-4.03c-1.48-0.74-3.28-0.14-4.02,1.34l-7.14,14.28l-6.06-6.06
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l11.94,11.94L34.18,46.34z` })
], -1), G3 = [
  F3
], K3 = /* @__PURE__ */ i({
  __name: "document-check",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", P3, G3))
      ], 2)
    ], 2));
  }
}), W3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, j3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z` }),
  /* @__PURE__ */ c("path", { d: `M47.12,33.88c-1.17-1.17-3.07-1.17-4.24,0L36,40.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L31.76,45l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C25.46,56.71,26.23,57,27,57s1.54-0.29,2.12-0.88L36,49.24l6.88,6.88
		C43.46,56.71,44.23,57,45,57s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L40.24,45l6.88-6.88
		C48.29,36.95,48.29,35.05,47.12,33.88z` })
], -1), Y3 = [
  j3
], X3 = /* @__PURE__ */ i({
  __name: "document-delete-2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", W3, Y3))
      ], 2)
    ], 2));
  }
}), q3 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, J3 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v27.5c0,1.66,1.34,3,3,3s3-1.34,3-3V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		c0,0.55-0.45,1-1,1H36c-1.66,0-3,1.34-3,3s1.34,3,3,3h18.5c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5
		C43.4,25,42.5,24.1,42.5,23z` }),
  /* @__PURE__ */ c("path", { d: `M29.12,47.38c-1.17-1.17-3.07-1.17-4.24,0l-4.63,4.63l-4.63-4.63c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		l4.63,4.63l-4.63,4.63c-1.17,1.17-1.17,3.07,0,4.24C11.96,65.71,12.73,66,13.5,66s1.54-0.29,2.12-0.88l4.63-4.63l4.63,4.63
		C25.46,65.71,26.23,66,27,66s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-4.63-4.63l4.63-4.63
		C30.29,50.45,30.29,48.55,29.12,47.38z` })
], -1), Q3 = [
  J3
], Z3 = /* @__PURE__ */ i({
  __name: "document-delete",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", q3, Q3))
      ], 2)
    ], 2));
  }
}), c5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, e5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v27.5c0,1.66,1.34,3,3,3s3-1.34,3-3V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		c0,0.55-0.45,1-1,1H36c-1.66,0-3,1.34-3,3s1.34,3,3,3h18.5c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5
		C43.4,25,42.5,24.1,42.5,23z` }),
  /* @__PURE__ */ c("path", { d: `M22.5,66c0.8,0,1.56-0.32,2.12-0.88l18-18c1.17-1.17,1.17-3.07,0-4.24l-9-9c-1.17-1.17-3.07-1.17-4.24,0l-18,18
		C10.82,52.44,10.5,53.2,10.5,54v9c0,1.66,1.34,3,3,3H22.5z M16.5,56.69c1.45,0.69,2.62,1.86,3.32,3.31H16.5V56.69z M31.5,40.24
		L36.26,45L23.28,57.98c-1.05-2.04-2.72-3.71-4.76-4.76L31.5,40.24z` })
], -1), s5 = [
  e5
], n5 = /* @__PURE__ */ i({
  __name: "document-edit",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", c5, s5))
      ], 2)
    ], 2));
  }
}), t5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, o5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z` }),
  /* @__PURE__ */ c("path", { d: "M45,34H27c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S46.1,34,45,34z" }),
  /* @__PURE__ */ c("path", { d: "M45,43H27c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S46.1,43,45,43z" }),
  /* @__PURE__ */ c("path", { d: "M45,52H27c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S46.1,52,45,52z" })
], -1), a5 = [
  o5
], _5 = /* @__PURE__ */ i({
  __name: "document-text",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", t5, a5))
      ], 2)
    ], 2));
  }
}), r5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, l5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z` })
], -1), i5 = [
  l5
], h5 = /* @__PURE__ */ i({
  __name: "document",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", r5, i5))
      ], 2)
    ], 2));
  }
}), p5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, d5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M26.5,6c-3.86,0-7,3.14-7,7v2h-2c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7v-2h2c3.86,0,7-3.14,7-7
		V25.76L41.74,6H26.5z M42.5,15.24L52.26,25H44.5c-1.1,0-2-0.9-2-2V15.24z M46.5,59c0,0.55-0.45,1-1,1h-28c-0.55,0-1-0.45-1-1V22
		c0-0.55,0.45-1,1-1h2v29c0,3.86,3.14,7,7,7h20V59z M54.5,51h-28c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h12v11c0,3.31,2.69,6,6,6
		h11v21C55.5,50.55,55.05,51,54.5,51z` })
], -1), v5 = [
  d5
], u5 = /* @__PURE__ */ i({
  __name: "documents",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", p5, v5))
      ], 2)
    ], 2));
  }
}), x5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, m5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M49.56,12.54L49.56,12.54c-1.95-1.95-5.12-1.95-7.07,0L11.58,43.45L6.26,59.42c-0.6,1.81-0.14,3.77,1.21,5.12
		C8.42,65.49,9.69,66,10.99,66c0.53,0,1.07-0.09,1.59-0.26l15.97-5.32l30.91-30.91c0.94-0.94,1.46-2.2,1.46-3.54
		s-0.52-2.59-1.46-3.54L49.56,12.54z M18.45,45.07l21.21-21.21l8.49,8.49L26.93,53.55L18.45,45.07z M15.52,50.62l5.86,5.86
		l-8.79,2.93L15.52,50.62z M52.39,28.1l-8.49-8.49l2.12-2.12l8.49,8.49L52.39,28.1z` })
], -1), C5 = [
  m5
], M5 = /* @__PURE__ */ i({
  __name: "edit",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", x5, C5))
      ], 2)
    ], 2));
  }
}), $5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, g5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M37.09,61.03H66v-6H44.33l14.65-14.65c2.73-2.73,2.73-7.17,0-9.9L45.55,17.05c-2.73-2.73-7.17-2.73-9.9,0L13.02,39.68
		c-1.32,1.32-2.05,3.08-2.05,4.95c0,1.87,0.73,3.63,2.05,4.95l5.45,5.45H6v6h19.72H37.09z M39.89,21.29c0.39-0.39,1.02-0.39,1.42,0
		l13.44,13.44c0.39,0.39,0.39,1.02,0,1.41l-14.5,14.5L25.39,35.79L39.89,21.29z M17.26,45.33c-0.25-0.26-0.29-0.55-0.29-0.71
		c0-0.15,0.04-0.45,0.29-0.71l5.3-5.3l14.85,14.85l-1.57,1.57h-8.89L17.26,45.33z` })
], -1), z5 = [
  g5
], b5 = /* @__PURE__ */ i({
  __name: "erase",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $5, z5))
      ], 2)
    ], 2));
  }
}), w5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, y5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M43.42,42.88c-0.9,0.9-1.94,1.61-3.07,2.12h-8.72c-1.12-0.51-2.17-1.22-3.07-2.12c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24c3.12,3.12,7.26,4.83,11.67,4.83s8.55-1.72,11.67-4.83c1.17-1.17,1.17-3.07,0-4.24
		C46.5,41.71,44.6,41.71,43.42,42.88z` }),
  /* @__PURE__ */ c("path", { d: "M45,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C42,33.66,43.34,35,45,35z" }),
  /* @__PURE__ */ c("path", { d: "M24,32c0,1.66,1.34,3,3,3s3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3V32z" })
], -1), L5 = [
  y5
], H5 = /* @__PURE__ */ i({
  __name: "face",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", w5, L5))
      ], 2)
    ], 2));
  }
}), V5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, f5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M22.28,53.96l14.34,2.87c0.2,0.04,0.39,0.06,0.59,0.06c0.79,0,1.55-0.31,2.12-0.88l19.09-19.09
		c6.43-6.43,6.43-16.9,0-23.33c-6.43-6.43-16.9-6.43-23.33,0L15.99,32.67c-0.71,0.71-1.02,1.73-0.82,2.71l2.87,14.34l-8.41,8.41
		c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88L22.28,53.96z M36.22,50.63l-10.02-2l5.3-5.3
		l10.02,2L36.22,50.63z M54.18,32.67l-9.26,9.26l-10.02-2l20.55-20.55C58.21,23.46,57.79,29.06,54.18,32.67z M39.33,17.82
		c3.61-3.61,9.21-4.03,13.3-1.28L29.44,39.73c0,0-0.01,0.01-0.01,0.01l-6.05,6.05l-2-10.02L39.33,17.82z` })
], -1), I5 = [
  f5
], E5 = /* @__PURE__ */ i({
  __name: "feather",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", V5, I5))
      ], 2)
    ], 2));
  }
}), S5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, A5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M9,66h54c1.66,0,3-1.34,3-3V9c0-1.66-1.34-3-3-3H9C7.34,6,6,7.34,6,9v54C6,64.66,7.34,66,9,66z M16,34h-4v-5h4V34z M16,43
		h-4v-5h4V43z M12,47h4v5h-4V47z M20,38h32v22H20V38z M56,29h4v5h-4V29z M60,38v5h-4v-5H60z M56,47h4v5h-4V47z M60,25h-4v-5h4V25z
		 M52,34H20V12h32V34z M16,25h-4v-5h4V25z M12,56h4v4h-4V56z M56,60v-4h4v4H56z M60,16h-4v-4h4V16z M16,12v4h-4v-4H16z` })
], -1), R5 = [
  A5
], k5 = /* @__PURE__ */ i({
  __name: "film",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", S5, R5))
      ], 2)
    ], 2));
  }
}), T5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, B5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M26.38,41.31v21.35l19.5-6.5V41.31l14.49-24.85l0.09-0.17c0.62-1.25,0.56-2.7-0.18-3.89c-0.73-1.19-2.01-1.9-3.4-1.9H15.37
		c-1.48,0-2.83,0.81-3.53,2.11c-0.68,1.27-0.63,2.79,0.13,4.01L26.38,41.31z M53.4,16.5L39.88,39.69v12.15l-7.5,2.5V39.69
		L18.85,16.5H53.4z` })
], -1), O5 = [
  B5
], N5 = /* @__PURE__ */ i({
  __name: "filter",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", T5, O5))
      ], 2)
    ], 2));
  }
}), D5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, U5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M35.5,58.24c7.2,0,13.06-6.16,13.06-13.73c0-12.39-11.17-18.49-11.65-18.75c-0.88-0.47-1.94-0.47-2.82,0
		c-0.48,0.25-11.65,6.36-11.65,18.75C22.44,52.08,28.3,58.24,35.5,58.24z M35.5,31.97c2.41,1.74,7.07,5.96,7.07,12.54
		c0,4.26-3.17,7.73-7.06,7.73s-7.06-3.47-7.06-7.73C28.44,37.9,33.08,33.7,35.5,31.97z` }),
  /* @__PURE__ */ c("path", { d: `M36,66c14.42,0,26.14-11.73,26.14-26.14c0-16.48-15.64-32.31-16.31-32.98c-0.91-0.91-2.31-1.14-3.46-0.56
		c-0.31,0.15-7.27,3.66-14.68,9.03c-3.83-1.03-6.41-1.55-6.54-1.58c-0.99-0.2-2,0.11-2.71,0.82c-0.35,0.35-8.59,8.78-8.59,25.26
		C9.86,54.27,21.58,66,36,66z M21.7,20.03c1.34,0.31,3.38,0.81,5.79,1.48c0.9,0.25,1.86,0.07,2.61-0.49
		c5.1-3.82,10.25-6.81,12.98-8.3c3.71,4.18,13.06,15.83,13.06,27.13C56.14,50.96,47.11,60,36,60s-20.14-9.04-20.14-20.14
		C15.86,29.13,19.79,22.58,21.7,20.03z` })
], -1), P5 = [
  U5
], F5 = /* @__PURE__ */ i({
  __name: "fire",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", D5, P5))
      ], 2)
    ], 2));
  }
}), G5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, K5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M18.11,50.43c-0.16-0.11-0.33-0.2-0.51-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0
		c-0.19,0.04-0.38,0.1-0.56,0.17s-0.35,0.17-0.52,0.28c-0.16,0.1-0.31,0.23-0.45,0.37c-0.56,0.56-0.88,1.33-0.88,2.12
		c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56c0.07,0.18,0.17,0.35,0.28,0.52c0.1,0.16,0.23,0.31,0.37,0.45
		c0.14,0.14,0.29,0.27,0.45,0.37c0.17,0.11,0.34,0.21,0.52,0.28c0.18,0.08,0.37,0.13,0.56,0.17c0.2,0.04,0.39,0.06,0.59,0.06
		c0.79,0,1.56-0.32,2.12-0.88c0.14-0.14,0.26-0.29,0.37-0.45c0.11-0.17,0.2-0.34,0.28-0.52c0.07-0.18,0.13-0.37,0.17-0.56
		c0.04-0.2,0.06-0.39,0.06-0.59c0-0.79-0.32-1.56-0.88-2.12C18.43,50.66,18.28,50.53,18.11,50.43z` }),
  /* @__PURE__ */ c("path", { d: `M61.79,15.75l-4.08-1.36c-0.05-0.02-0.08-0.05-0.1-0.1l-1.36-4.08C55.4,7.67,53.12,6.02,50.44,6c-0.02,0-0.03,0-0.04,0
		c-2.65,0-4.91,1.6-5.78,4.1c-1.34,3.85-1.37,7.69-1.07,10.58c-2.96-0.49-7.03-0.82-11.45-0.22c-0.94-2.5-2.87-4.94-5.54-6.05
		c-1.93-0.8-5.83-1.49-10.2,2.89c-3.99,3.99-5.67,13.86-6.31,19.21c-1.28,2.55-2.33,5.32-3.05,8.1c-1.97,7.67-1,13.94,2.73,17.67
		C12.19,64.74,15.77,66,20.13,66c2.23,0,4.67-0.33,7.26-1c6.25-1.6,12.45-4.92,16.18-8.65c0.34-0.34,0.65-0.68,0.97-1.03l6.56-2.14
		c1.81-0.59,3.22-2.03,3.79-3.85s0.21-3.8-0.95-5.31l-2.51-3.28c0.77-4.74,0.43-9.14-0.09-12.29c0.9,0.1,1.9,0.16,2.96,0.16
		c2.33,0,4.97-0.3,7.62-1.23c2.51-0.87,4.11-3.16,4.1-5.82C65.98,18.88,64.33,16.59,61.79,15.75z M19.18,20.12
		c2.08-2.08,4.05-2.76,5.84-2.02c1.34,0.56,2.43,1.82,3.07,3.16c-4.25,1.15-8.61,3.32-12.45,7.16c-0.04,0.04-0.09,0.09-0.13,0.14
		C16.38,25.02,17.58,21.72,19.18,20.12z M13.96,58.04c-2.37-2.37-2.41-7.02-1.17-11.84c3.97,0.04,7.16,1.22,9.48,3.54
		c2.51,2.51,3.99,5.81,4.25,9.29C21.45,60.45,16.45,60.53,13.96,58.04z M30.42,57.66c-0.54-4.04-2.39-7.83-5.33-10.76
		c-2.84-2.84-6.55-4.39-11.03-4.67c1.48-3.8,3.6-7.35,5.81-9.56c5.2-5.2,11.83-6.5,17.16-6.5c3.38,0,6.23,0.52,7.88,0.9
		c0.99,4.25,2.89,16.55-5.59,25.04C37.24,54.2,33.97,56.2,30.42,57.66z M50.75,46.46c0.38,0.49,0.49,1.11,0.3,1.69
		c-0.18,0.59-0.62,1.04-1.21,1.23l-1.46,0.48c0.73-1.37,1.32-2.76,1.79-4.14L50.75,46.46z M59.99,21.69c0,0-0.02,0.01-0.06,0.03
		c-3.91,1.36-7.96,0.87-10.09,0.44c-0.43-2.14-0.92-6.19,0.46-10.14c0.02-0.02,0.11-0.03,0.19,0c0.03,0.01,0.05,0.02,0.07,0.09
		l1.36,4.08c0.61,1.83,2.06,3.28,3.89,3.89l4.08,1.36c0.08,0.03,0.08,0.04,0.09,0.07C60.01,21.59,60,21.68,59.99,21.69z` })
], -1), W5 = [
  K5
], j5 = /* @__PURE__ */ i({
  __name: "fish",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", G5, W5))
      ], 2)
    ], 2));
  }
}), Y5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, X5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M54,24h-2.64c-3.3,0-6.41-1.29-8.74-3.62C39.15,16.91,34.54,15,29.64,15H18c-1.66,0-3,1.34-3,3v27v18c0,1.66,1.34,3,3,3
		s3-1.34,3-3V48.02c3.17,0.09,6.13,1.35,8.38,3.6C32.85,55.09,37.46,57,42.36,57H54c1.66,0,3-1.34,3-3V27C57,25.34,55.66,24,54,24z
		 M51,51h-8.64c-3.3,0-6.41-1.29-8.74-3.62C30.24,44,25.77,42.1,21,42V21h8.64c3.3,0,6.41,1.29,8.74,3.62C41.76,28,46.23,29.9,51,30
		V51z` })
], -1), q5 = [
  X5
], J5 = /* @__PURE__ */ i({
  __name: "flag",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Y5, q5))
      ], 2)
    ], 2));
  }
}), Q5 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Z5 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M9,66h54c1.66,0,3-1.34,3-3V18c0-0.8-0.32-1.56-0.88-2.12l-9-9C55.56,6.32,54.8,6,54,6H9C7.34,6,6,7.34,6,9v54
		C6,64.66,7.34,66,9,66z M52,60H20V47h32V60z M20,12h23v13H20V12z M12,12h4v15c0,1.1,0.9,2,2,2h27c1.1,0,2-0.9,2-2V12h5.76L60,19.24
		V60h-4V45c0-1.1-0.9-2-2-2H18c-1.1,0-2,0.9-2,2v15h-4V12z` }),
  /* @__PURE__ */ c("path", { d: `M38.77,16.85c-0.07-0.18-0.17-0.35-0.27-0.51c-0.11-0.17-0.24-0.32-0.38-0.46c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.21-0.52-0.28c-0.18-0.08-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.09-0.56,0.17
		c-0.18,0.07-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37s-0.26,0.29-0.37,0.46c-0.11,0.16-0.2,0.33-0.28,0.51
		c-0.08,0.19-0.13,0.37-0.17,0.57C33.02,17.61,33,17.81,33,18c0,0.79,0.32,1.56,0.88,2.12C34.44,20.68,35.21,21,36,21
		c0.19,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37
		C38.68,19.56,39,18.79,39,18c0-0.19-0.02-0.39-0.06-0.58C38.9,17.22,38.85,17.03,38.77,16.85z` })
], -1), c4 = [
  Z5
], e4 = /* @__PURE__ */ i({
  __name: "floppy-disk",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Q5, c4))
      ], 2)
    ], 2));
  }
}), s4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, n4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M54.5,19.5H38.35l-2.56-5.13c-1.19-2.39-3.59-3.87-6.26-3.87H18c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h36.5
		c3.86,0,7-3.14,7-7v-28C61.5,22.64,58.36,19.5,54.5,19.5z M18,16.5h11.53c0.38,0,0.72,0.21,0.89,0.55l4.22,8.45H54.5
		c0.55,0,1,0.45,1,1v3H17v-12C17,16.95,17.45,16.5,18,16.5z M54.5,55.5H18c-0.55,0-1-0.45-1-1v-21h38.5v21
		C55.5,55.05,55.05,55.5,54.5,55.5z` })
], -1), t4 = [
  n4
], o4 = /* @__PURE__ */ i({
  __name: "folder",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", s4, t4))
      ], 2)
    ], 2));
  }
}), a4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M34.66,15.32l-22.5,11.25c-1.02,0.51-1.66,1.55-1.66,2.68s0.64,2.18,1.66,2.68l7.34,3.67v13.9c0,0.8,0.32,1.56,0.88,2.12
		C20.6,51.84,25.87,57,36,57s15.4-5.16,15.62-5.38c0.56-0.56,0.88-1.33,0.88-2.12V35.6l4-2V45c0,1.1,0.9,2,2,2s2-0.9,2-2V31.5
		c0-0.01,0-0.01,0-0.02c0.63-0.56,1-1.37,1-2.23c0-1.14-0.64-2.18-1.66-2.68l-22.5-11.25C36.5,14.89,35.5,14.89,34.66,15.32z
		 M46.5,48.07C44.97,49.13,41.5,51,36,51c-5.51,0-8.98-1.88-10.5-2.93V38.6l9.16,4.58c0.42,0.21,0.88,0.32,1.34,0.32
		s0.92-0.11,1.34-0.32l9.16-4.58V48.07z M36,37.15l-15.79-7.9L36,21.35l15.79,7.9L36,37.15z` })
], -1), r4 = [
  _4
], l4 = /* @__PURE__ */ i({
  __name: "graduation-cap",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", a4, r4))
      ], 2)
    ], 2));
  }
}), i4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, h4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M66,59V13c0-3.86-3.14-7-7-7H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46C62.86,66,66,62.86,66,59z M59,60H47V47h13v12
		C60,59.55,59.55,60,59,60z M29,29h14v14H29V29z M25,43H12V29h13V43z M29,25V12h14v13H29z M47,29h13v14H47V29z M43,47v13H29V47H43z
		 M60,13v12H47V12h12C59.55,12,60,12.45,60,13z M13,12h12v13H12V13C12,12.45,12.45,12,13,12z M12,59V47h13v13H13
		C12.45,60,12,59.55,12,59z` })
], -1), p4 = [
  h4
], d4 = /* @__PURE__ */ i({
  __name: "grid",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", i4, p4))
      ], 2)
    ], 2));
  }
}), v4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, u4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,15.5c-11.58,0-21,7.4-21,16.5v1.83c-2.55,1.44-4.5,4.43-4.5,10.67c0,12,7.22,12,12,12c1.66,0,3-1.34,3-3v-18
		c0-1.66-1.34-3-3-3c-0.48,0-0.98,0-1.5,0.01V32c0-5.69,6.87-10.5,15-10.5S51,26.31,51,32v0.51c-0.52-0.01-1.02-0.01-1.5-0.01
		c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3c4.78,0,12,0,12-12c0-6.24-1.95-9.23-4.5-10.67V32C57,22.9,47.58,15.5,36,15.5z
		 M19.5,50.41c-2.41-0.27-3-1.39-3-5.91s0.59-5.64,3-5.91V50.41z M52.5,50.41V38.59c2.41,0.27,3,1.39,3,5.91S54.91,50.14,52.5,50.41
		z` })
], -1), x4 = [
  u4
], m4 = /* @__PURE__ */ i({
  __name: "headphones",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", v4, x4))
      ], 2)
    ], 2));
  }
}), C4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, M4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M65.95,24.87c-0.46-6.43-4.11-11.61-9.55-13.54c-3.09-1.1-10.95-2.51-20.4,6.22c-9.45-8.73-17.32-7.31-20.4-6.22
		c-5.43,1.93-9.09,7.12-9.55,13.54c-0.34,4.83,0.71,21.71,28.56,36.29L36,61.89l1.39-0.73C65.24,46.58,66.29,29.69,65.95,24.87z
		 M12.04,25.29c0.29-4.07,2.37-7.18,5.57-8.31c0.92-0.32,1.89-0.48,2.9-0.48c4.09,0,8.86,2.58,13.3,7.33l1.12,1.19l3.15,9.96
		l-8.91,4.45l3.43,13.71C16.78,43.51,11.51,32.65,12.04,25.29z M37.06,54.5l-3.23-12.93l9.09-4.55l-4.31-13.63
		c5.43-5.6,11.3-8.01,15.79-6.41c3.2,1.14,5.28,4.24,5.57,8.31C60.51,33,54.7,44.55,37.06,54.5z` })
], -1), $4 = [
  M4
], g4 = /* @__PURE__ */ i({
  __name: "heart-broken",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", C4, $4))
      ], 2)
    ], 2));
  }
}), z4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, b4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M56.4,11.33c-3.09-1.1-10.95-2.51-20.4,6.22c-9.45-8.73-17.32-7.31-20.4-6.22c-5.43,1.93-9.09,7.12-9.55,13.54
		c-0.34,4.83,0.71,21.71,28.56,36.29L36,61.89l1.39-0.73c27.85-14.58,28.9-31.46,28.56-36.29C65.5,18.44,61.84,13.25,56.4,11.33z
		 M36,55.1C17.52,45.01,11.48,33.15,12.04,25.29c0.29-4.07,2.37-7.18,5.57-8.31c0.92-0.32,1.89-0.48,2.9-0.48
		c4.09,0,8.86,2.58,13.3,7.33L36,26.16l2.19-2.34c5.54-5.92,11.6-8.48,16.21-6.84c3.2,1.14,5.28,4.24,5.57,8.31
		C60.52,33.15,54.48,45.01,36,55.1z` })
], -1), w4 = [
  b4
], y4 = /* @__PURE__ */ i({
  __name: "heart",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", z4, w4))
      ], 2)
    ], 2));
  }
}), L4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, H4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57.21,14.79C51.55,9.12,44.01,6,36,6c-8.01,0-15.55,3.12-21.21,8.79C9.12,20.45,6,27.99,6,36s3.12,15.55,8.79,21.21
		C20.45,62.88,27.99,66,36,66s15.55-3.12,21.21-8.79C62.88,51.55,66,44.01,66,36S62.88,20.45,57.21,14.79
		C57.21,14.79,57.21,14.79,57.21,14.79z M51.49,17.68l-5.34,5.34c-5.95-4.66-14.37-4.66-20.32,0l-5.34-5.34
		C24.83,14.01,30.26,12,36,12S47.17,14.01,51.49,17.68z M28.58,28.58c2.05-2.05,4.74-3.07,7.42-3.07s5.38,1.02,7.42,3.07
		c4.09,4.09,4.09,10.76,0,14.85c-4.09,4.09-10.75,4.09-14.85,0C24.48,39.33,24.48,32.67,28.58,28.58z M12,36
		c0-5.74,2.01-11.17,5.68-15.49l5.34,5.34c-4.66,5.95-4.66,14.37,0,20.32l-5.34,5.34C14.01,47.17,12,41.74,12,36z M20.51,54.32
		l5.34-5.34c2.97,2.33,6.56,3.51,10.16,3.51s7.18-1.18,10.16-3.51l5.34,5.34C47.17,57.99,41.74,60,36,60
		C30.26,60,24.83,57.99,20.51,54.32z M54.32,51.49l-5.34-5.34c4.66-5.95,4.66-14.37,0-20.32l5.34-5.34C57.99,24.83,60,30.26,60,36
		C60,41.74,57.99,47.17,54.32,51.49z` })
], -1), V4 = [
  H4
], f4 = /* @__PURE__ */ i({
  __name: "help",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", L4, V4))
      ], 2)
    ], 2));
  }
}), I4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, E4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M26,59h20c6.07,0,11-4.93,11-11V34c0-0.8-0.32-1.56-0.88-2.12l-18-18c-1.17-1.17-3.07-1.17-4.24,0l-18,18
		C15.32,32.44,15,33.2,15,34v14C15,54.07,19.93,59,26,59z M21,35.24l15-15l15,15V48c0,2.76-2.24,5-5,5H26c-2.76,0-5-2.24-5-5V35.24z
		` })
], -1), S4 = [
  E4
], A4 = /* @__PURE__ */ i({
  __name: "home",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", I4, S4))
      ], 2)
    ], 2));
  }
}), R4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, k4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,15H42.5v-1.5c0-1.1-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2V15H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46
		c3.86,0,7-3.14,7-7V22C66,18.14,62.86,15,59,15z M33.5,15.5h5v5h-5V15.5z M60,50c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22
		c0-0.55,0.45-1,1-1h16.5v1.5c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V21H59c0.55,0,1,0.45,1,1V50z` }),
  /* @__PURE__ */ c("path", { d: `M31.5,25H18c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h13.5c1.1,0,2-0.9,2-2V27C33.5,25.9,32.6,25,31.5,25z M29.5,43H20V29h9.5
		V43z` }),
  /* @__PURE__ */ c("path", { d: "M54,34H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,34,54,34z" }),
  /* @__PURE__ */ c("path", { d: "M54,43H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,43,54,43z" })
], -1), T4 = [
  k4
], B4 = /* @__PURE__ */ i({
  __name: "id-card",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", R4, T4))
      ], 2)
    ], 2));
  }
}), O4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, N4 = /* @__PURE__ */ b(`<g><path d="M59,15H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22C66,18.14,62.86,15,59,15z M60,50
		c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V50z"></path><path d="M31.5,25H18c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h13.5c1.1,0,2-0.9,2-2V27C33.5,25.9,32.6,25,31.5,25z M29.5,43H20V29h9.5
		V43z"></path><path d="M54,34H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,34,54,34z"></path><path d="M40.5,29h9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2S39.4,29,40.5,29z"></path><path d="M54,43H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,43,54,43z"></path></g>`, 1), D4 = [
  N4
], U4 = /* @__PURE__ */ i({
  __name: "id-tag",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", O4, D4))
      ], 2)
    ], 2));
  }
}), P4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, F4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M55,6H17C10.93,6,6,10.93,6,17v38c0,6.07,4.93,11,11,11h38c6.07,0,11-4.93,11-11V17C66,10.93,61.07,6,55,6z M12,55V44.83
		l10.01-10.01c1.22-1.22,2.91-1.86,4.62-1.75c1.72,0.11,3.31,0.95,4.36,2.3L50.13,60H17C14.24,60,12,57.76,12,55z M60,55
		c0,2.69-2.15,4.88-4.81,4.98L34.14,32.93c-1.76-2.26-4.41-3.66-7.27-3.84c-2.85-0.17-5.67,0.88-7.69,2.91L12,39.17V17
		c0-2.76,2.24-5,5-5h38c2.76,0,5,2.24,5,5V55z` }),
  /* @__PURE__ */ c("path", { d: `M49.5,16c-3.58,0-6.5,2.92-6.5,6.5s2.92,6.5,6.5,6.5s6.5-2.92,6.5-6.5S53.08,16,49.5,16z M49.5,25
		c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S50.88,25,49.5,25z` })
], -1), G4 = [
  F4
], K4 = /* @__PURE__ */ i({
  __name: "image",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", P4, G4))
      ], 2)
    ], 2));
  }
}), W4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, j4 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,21c1.77,0,3.56,0.21,5.3,0.62c1.61,0.38,3.23-0.62,3.61-2.23c0.38-1.61-0.62-3.23-2.23-3.61
		C40.48,15.26,38.24,15,36,15C16.37,15,6.72,33.86,6.32,34.66c-0.42,0.84-0.42,1.84,0,2.68c0.1,0.2,2.51,4.97,7.28,9.74
		c0.59,0.59,1.35,0.88,2.12,0.88c0.77,0,1.53-0.29,2.12-0.88c1.17-1.17,1.18-3.07,0.01-4.24c-2.64-2.64-4.44-5.3-5.39-6.85
		C14.86,32.09,22.85,21,36,21z` }),
  /* @__PURE__ */ c("path", { d: `M65.68,37.34c0.42-0.84,0.42-1.84,0-2.68c-0.1-0.2-2.51-4.97-7.28-9.74c-1.17-1.17-3.07-1.18-4.24-0.01
		c-1.17,1.17-1.17,3.07,0,4.24c2.64,2.64,4.44,5.3,5.39,6.85C57.14,39.91,49.15,51,36,51c-1.78,0-3.56-0.21-5.3-0.62
		C29.09,50,27.47,51,27.09,52.61c-0.38,1.61,0.62,3.23,2.23,3.61C31.51,56.74,33.76,57,36,57C55.63,57,65.28,38.14,65.68,37.34z` }),
  /* @__PURE__ */ c("path", { d: `M9,65c0.51,0,1.02-0.2,1.41-0.59l54-54c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0l-54,54
		c-0.78,0.78-0.78,2.05,0,2.83C7.98,64.8,8.49,65,9,65z` })
], -1), Y4 = [
  j4
], X4 = /* @__PURE__ */ i({
  __name: "invisible",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", W4, Y4))
      ], 2)
    ], 2));
  }
}), q4 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, J4 = /* @__PURE__ */ b(`<g><path d="M59,15H13c-3.86,0-7,3.14-7,7v30.57c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22C66,18.14,62.86,15,59,15z M60,52.57
		c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V52.57z"></path><path d="M24.43,23.71h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C26.43,24.61,25.53,23.71,24.43,23.71z M22.43,31.43h-3.71v-3.71h3.71V31.43z"></path><path d="M24.43,39.14h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C26.43,40.04,25.53,39.14,24.43,39.14z M22.43,46.86h-3.71v-3.71h3.71V46.86z"></path><path d="M39.86,39.14h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C41.86,40.04,40.96,39.14,39.86,39.14z M37.86,46.86h-3.71v-3.71h3.71V46.86z"></path><path d="M39.86,23.71h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C41.86,24.61,40.96,23.71,39.86,23.71z M37.86,31.43h-3.71v-3.71h3.71V31.43z"></path><path d="M55.29,23.71h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C57.29,24.61,56.39,23.71,55.29,23.71z M53.29,31.43h-3.71v-3.71h3.71V31.43z"></path><path d="M55.29,39.14h-7.71c-1.1,0-2,0.9-2,2v7.71c0,1.1,0.9,2,2,2h7.71c1.1,0,2-0.9,2-2v-7.71
		C57.29,40.04,56.39,39.14,55.29,39.14z M53.29,46.86h-3.71v-3.71h3.71V46.86z"></path></g>`, 1), Q4 = [
  J4
], Z4 = /* @__PURE__ */ i({
  __name: "keyboard",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", q4, Q4))
      ], 2)
    ], 2));
  }
}), c6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, e6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57,63V10.35c0-1.29-0.63-2.51-1.68-3.26c-1.05-0.75-2.4-0.94-3.62-0.52c-2.92,1.01-9.7,4.8-9.7,18.19
		c0,10.81,5.82,15.72,9,17.6V63H57z M48,24.75c0-5.76,1.5-8.91,3-10.63v20.41C49.43,32.55,48,29.46,48,24.75z` }),
  /* @__PURE__ */ c("path", { d: `M16,7.77v14c0,3.31,2.69,6,6,6h2V63h6V27.77h2c3.31,0,6-2.69,6-6v-14h-4v14c0,1.1-0.9,2-2,2v-16h-4v16h-2v-16h-4v16
		c-1.1,0-2-0.9-2-2v-14H16z` })
], -1), s6 = [
  e6
], n6 = /* @__PURE__ */ i({
  __name: "knife-fork",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", c6, s6))
      ], 2)
    ], 2));
  }
}), t6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, o6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M21.59,66h28.82c3.25,0,6.16-1.68,7.78-4.48c1.63-2.81,1.64-6.17,0.03-8.98L45.75,30.7V16.39C47.04,16.06,48,14.9,48,13.5
		c0-1.66-1.34-3-3-3h-2.25h-13.5H27c-1.66,0-3,1.34-3,3c0,1.4,0.96,2.56,2.25,2.89V30.7L13.77,52.53c-1.61,2.82-1.6,6.18,0.03,8.98
		C15.43,64.32,18.34,66,21.59,66z M39.75,16.5v15c0,0.52,0.14,1.04,0.4,1.49l6.58,11.52c-2.15,0.6-5.56,0.83-9.84-1.3
		c-3.76-1.88-7.04-2.29-9.69-2.09l4.65-8.13c0.26-0.45,0.4-0.97,0.4-1.49v-15H39.75z M18.98,55.51l5.6-9.81
		c2.07-0.73,5.75-1.29,10.52,1.09c3.21,1.6,6.08,2.14,8.5,2.14c2.08,0,3.83-0.4,5.15-0.87l4.26,7.45c0.77,1.35,0.25,2.55-0.01,2.99
		S51.97,60,50.41,60H21.59c-1.56,0-2.33-1.04-2.59-1.49S18.21,56.87,18.98,55.51z` })
], -1), a6 = [
  o6
], _6 = /* @__PURE__ */ i({
  __name: "lab",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", t6, a6))
      ], 2)
    ], 2));
  }
}), r6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, l6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M46,6H26c-6.07,0-11,4.93-11,11v46c0,1.04,0.54,2.01,1.42,2.55c0.88,0.55,1.99,0.6,2.92,0.13L36,57.35l16.66,8.33
		C53.08,65.9,53.54,66,54,66c0.55,0,1.1-0.15,1.58-0.45C56.46,65.01,57,64.04,57,63V17C57,10.93,52.07,6,46,6z M51,58.15
		l-13.66-6.83C36.92,51.11,36.46,51,36,51s-0.92,0.11-1.34,0.32L21,58.15V17c0-2.76,2.24-5,5-5h20c2.76,0,5,2.24,5,5V58.15z` })
], -1), i6 = [
  l6
], h6 = /* @__PURE__ */ i({
  __name: "label-33",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", r6, i6))
      ], 2)
    ], 2));
  }
}), p6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, d6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M34.06,63.76c1.7,1.7,3.96,2.64,6.36,2.64s4.66-0.94,6.36-2.64l16.97-16.97c1.7-1.7,2.64-3.96,2.64-6.36
		c0-2.4-0.94-4.66-2.64-6.36L36.18,6.48c-0.8-0.8-1.99-1.08-3.07-0.73l-19.09,6.36c-0.9,0.3-1.6,1-1.9,1.9L5.76,33.11
		c-0.36,1.08-0.08,2.27,0.72,3.07L34.06,63.76z M17.34,17.34l15.91-5.3L59.52,38.3c0.57,0.57,0.88,1.32,0.88,2.12
		s-0.31,1.55-0.88,2.12L42.55,59.52c0,0,0,0,0,0c-1.13,1.13-3.11,1.13-4.24,0L12.04,33.25L17.34,17.34z` }),
  /* @__PURE__ */ c("path", { d: `M25.83,21.67c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.17,0
		c-0.2,0.04-0.39,0.1-0.57,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37c-0.14,0.14-0.26,0.29-0.37,0.46
		c-0.11,0.16-0.2,0.33-0.28,0.51c-0.07,0.18-0.13,0.37-0.17,0.57c-0.04,0.19-0.06,0.39-0.06,0.58c0,0.2,0.02,0.39,0.06,0.59
		c0.04,0.19,0.1,0.38,0.17,0.56c0.08,0.18,0.17,0.35,0.28,0.52c0.11,0.16,0.23,0.32,0.37,0.45c0.14,0.14,0.29,0.27,0.46,0.38
		c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.57,0.17c0.19,0.04,0.39,0.06,0.58,0.06c0.79,0,1.56-0.32,2.12-0.88
		c0.56-0.56,0.88-1.33,0.88-2.12s-0.32-1.56-0.88-2.12C26.15,21.9,25.99,21.78,25.83,21.67z` })
], -1), v6 = [
  d6
], u6 = /* @__PURE__ */ i({
  __name: "label-56",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", p6, v6))
      ], 2)
    ], 2));
  }
}), x6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, m6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M45,24c-0.34,0-0.67,0.03-1,0.04C40.39,19.09,33.99,16,27,16C15.97,16,7,23.63,7,33c0,4.58,2.17,8.96,6,12.15V54
		c0,0.81,0.49,1.54,1.23,1.85C14.48,55.95,14.74,56,15,56c0.52,0,1.03-0.2,1.41-0.59l5.89-5.89c1.27,0.26,2.58,0.39,3.9,0.43
		C29.63,55.9,36.76,60,45,60c1.47,0,2.94-0.13,4.37-0.39l5.51,5.51C55.45,65.7,56.22,66,57,66c0.39,0,0.78-0.07,1.15-0.23
		C59.27,65.31,60,64.21,60,63v-8.39c3.83-3.35,6-7.87,6-12.61C66,32.07,56.58,24,45,24z M22.17,45.39
		c-0.69-0.18-1.41,0.02-1.91,0.52L17,49.17v-4.99c0-0.63-0.3-1.23-0.8-1.6C12.89,40.11,11,36.62,11,33c0-7.17,7.18-13,16-13
		c4.84,0,9.31,1.76,12.3,4.69C30.48,26.83,24,33.77,24,42c0,1.31,0.17,2.59,0.49,3.82C23.7,45.72,22.92,45.59,22.17,45.39z
		 M55.21,50.77c-0.76,0.57-1.21,1.46-1.21,2.4v2.58l-1.55-1.55c-0.57-0.57-1.34-0.88-2.12-0.88c-0.25,0-0.5,0.03-0.75,0.1
		C48.11,53.81,46.56,54,45,54c-8.27,0-15-5.38-15-12s6.73-12,15-12s15,5.38,15,12C60,45.3,58.25,48.5,55.21,50.77z` })
], -1), C6 = [
  m6
], M6 = /* @__PURE__ */ i({
  __name: "language",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", x6, C6))
      ], 2)
    ], 2));
  }
}), $6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, g6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M63,44h-1.5V20c0-3.86-3.14-7-7-7h-37c-3.86,0-7,3.14-7,7v24H9c-1.66,0-3,1.34-3,3v3c0,4.96,4.04,9,9,9h42
		c4.96,0,9-4.04,9-9v-3C66,45.34,64.66,44,63,44z M16.5,20c0-0.55,0.45-1,1-1h37c0.55,0,1,0.45,1,1v24h-39V20z M57,53H15
		c-1.65,0-3-1.35-3-3h1.5h45H60C60,51.65,58.65,53,57,53z` })
], -1), z6 = [
  g6
], b6 = /* @__PURE__ */ i({
  __name: "laptop",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $6, z6))
      ], 2)
    ], 2));
  }
}), w6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, y6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M39.88,10.58c-2.36-1.57-5.41-1.57-7.77,0L9.83,25.44c-1.39,0.93-2.23,2.48-2.23,4.16s0.83,3.23,2.23,4.16l22.29,14.86
		c1.18,0.79,2.53,1.18,3.88,1.18s2.7-0.39,3.88-1.18l22.29-14.86c1.39-0.93,2.23-2.48,2.23-4.16s-0.83-3.23-2.23-4.16L39.88,10.58z
		 M36.56,43.62c-0.34,0.22-0.77,0.23-1.11,0L14.41,29.6l21.04-14.02c0.34-0.22,0.77-0.22,1.11,0L57.59,29.6L36.56,43.62z` }),
  /* @__PURE__ */ c("path", { d: `M61.34,39.91L36.55,56.43c-0.34,0.22-0.77,0.22-1.11,0L10.66,39.91c-1.38-0.92-3.24-0.55-4.16,0.83
		c-0.92,1.38-0.55,3.24,0.83,4.16l24.78,16.52c1.18,0.79,2.53,1.18,3.88,1.18c1.35,0,2.7-0.39,3.88-1.18L64.66,44.9
		c1.38-0.92,1.75-2.78,0.83-4.16C64.58,39.36,62.72,38.99,61.34,39.91z` })
], -1), L6 = [
  y6
], H6 = /* @__PURE__ */ i({
  __name: "layers",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", w6, L6))
      ], 2)
    ], 2));
  }
}), V6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, f6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M9,34.5h18c1.66,0,3-1.34,3-3v-18c0-1.66-1.34-3-3-3H9c-1.66,0-3,1.34-3,3v18C6,33.16,7.34,34.5,9,34.5z M12,16.5h12v12H12
		V16.5z` }),
  /* @__PURE__ */ c("path", { d: `M66,13.5c0-1.66-1.34-3-3-3H36c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h27c1.66,0,3-1.34,3-3V13.5z M60,28.5H39v-12h21
		V28.5z` }),
  /* @__PURE__ */ c("path", { d: `M9,61.5h36c1.66,0,3-1.34,3-3v-18c0-1.66-1.34-3-3-3H9c-1.66,0-3,1.34-3,3v18C6,60.16,7.34,61.5,9,61.5z M12,43.5h30v12H12
		V43.5z` }),
  /* @__PURE__ */ c("path", { d: `M63,37.5h-9c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3v-18C66,38.84,64.66,37.5,63,37.5z M60,55.5h-3
		v-12h3V55.5z` })
], -1), I6 = [
  f6
], E6 = /* @__PURE__ */ i({
  __name: "layout",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", V6, I6))
      ], 2)
    ], 2));
  }
}), S6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, A6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M11.41,63.41l10.68-10.68c3.75,3.11,8.43,4.81,13.37,4.81c5.61,0,10.88-2.18,14.85-6.15c0,0,0,0,0,0
		C63.93,37.76,60.84,14.82,60.7,13.85l-0.32-2.23l-2.23-0.32c-0.97-0.14-23.92-3.24-37.55,10.39c-7.71,7.71-8.15,19.97-1.34,28.21
		L8.59,60.59L11.41,63.41z M20.46,36.54c0-4.01,1.56-7.77,4.39-10.61c7.73-7.73,19.66-9.01,26.7-9.01c1.34,0,2.5,0.05,3.42,0.1
		c0.36,5.78,0.29,20.92-8.91,30.12v0c-2.83,2.83-6.6,4.39-10.61,4.39c-3.33,0-6.49-1.09-9.09-3.08l16.87-16.87l-2.83-2.83
		L23.54,45.63C21.55,43.03,20.46,39.88,20.46,36.54z` })
], -1), R6 = [
  A6
], k6 = /* @__PURE__ */ i({
  __name: "leaf",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", S6, R6))
      ], 2)
    ], 2));
  }
}), T6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, B6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M34.66,56.68C35.08,56.89,35.54,57,36,57s0.92-0.11,1.34-0.32C38.14,56.28,57,46.63,57,27c0-11.58-9.42-21-21-21
		s-21,9.42-21,21C15,46.63,33.86,56.28,34.66,56.68z M36,12c8.27,0,15,6.73,15,15c0,13.15-11.09,21.14-15,23.54
		C32.09,48.13,21,40.14,21,27C21,18.73,27.73,12,36,12z` }),
  /* @__PURE__ */ c("path", { d: `M47,27c0-6.07-4.93-11-11-11s-11,4.93-11,11s4.93,11,11,11S47,33.07,47,27z M29,27c0-3.86,3.14-7,7-7s7,3.14,7,7
		s-3.14,7-7,7S29,30.86,29,27z` })
], -1), O6 = [
  B6
], N6 = /* @__PURE__ */ i({
  __name: "location-marker",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", T6, O6))
      ], 2)
    ], 2));
  }
}), D6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, U6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,7c-8.55,0-15.5,6.95-15.5,15.5V33h-7c-1.66,0-3,1.34-3,3v19c0,6.07,4.93,11,11,11h29c6.07,0,11-4.93,11-11V36
		c0-1.66-1.34-3-3-3h-7V22.5C51.5,13.95,44.55,7,36,7z M24.5,22.5C24.5,16.16,29.66,11,36,11s11.5,5.16,11.5,11.5V33h-23V22.5z
		 M55.5,55c0,2.76-2.24,5-5,5h-29c-2.76,0-5-2.24-5-5V39h39V55z` }),
  /* @__PURE__ */ c("path", { d: "M36,57c1.66,0,3-1.34,3-3v-9c0-1.66-1.34-3-3-3s-3,1.34-3,3v9C33,55.66,34.34,57,36,57z" })
], -1), P6 = [
  U6
], F6 = /* @__PURE__ */ i({
  __name: "locked",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", D6, P6))
      ], 2)
    ], 2));
  }
}), G6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, K6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M55.02,19.95l-1.97-1.97c-1.32-1.32-3.08-2.05-4.95-2.05s-3.63,0.73-4.95,2.05L4.25,56.87c-2.73,2.73-2.73,7.17,0,9.9
		l1.97,1.97v0c1.36,1.36,3.16,2.05,4.95,2.05c1.79,0,3.59-0.68,4.95-2.05l38.89-38.89C57.75,27.12,57.75,22.68,55.02,19.95z
		 M39.26,30.36l3.39,3.39L20.02,56.37l-3.39-3.39L39.26,30.36z M11.88,64.5c-0.39,0.39-1.02,0.39-1.42,0L8.5,62.53
		c-0.39-0.39-0.39-1.02,0-1.41l5.3-5.3l3.39,3.39L11.88,64.5z M50.77,25.61l-5.3,5.3l-3.39-3.39l5.3-5.3
		c0.25-0.25,0.55-0.29,0.71-0.29s0.45,0.04,0.71,0.29l1.97,1.97c0.25,0.26,0.29,0.55,0.29,0.71S51.03,25.36,50.77,25.61z` }),
  /* @__PURE__ */ c("path", { d: `M33.29,12.37c-0.78-0.78-2.05-0.78-2.83,0l-1.77,1.77l-1.77-1.77c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		l1.77,1.77l-1.77,1.77c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l1.77-1.77l1.77,1.77
		c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-1.77-1.77l1.77-1.77
		C34.07,14.42,34.07,13.15,33.29,12.37z` }),
  /* @__PURE__ */ c("path", { d: `M66.05,6.95c-0.78-0.78-2.05-0.78-2.83,0l-1.77,1.77l-1.77-1.77c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		l1.77,1.77l-1.77,1.77c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l1.77-1.77l1.77,1.77
		c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-1.77-1.77l1.77-1.77C66.83,9,66.83,7.73,66.05,6.95
		z` }),
  /* @__PURE__ */ c("path", { d: `M60.63,39.71c-0.78-0.78-2.05-0.78-2.83,0l-1.77,1.77l-1.77-1.77c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		l1.77,1.77l-1.77,1.77c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l1.77-1.77l1.77,1.77
		c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-1.77-1.77l1.77-1.77
		C61.41,41.75,61.41,40.49,60.63,39.71z` })
], -1), W6 = [
  K6
], j6 = /* @__PURE__ */ i({
  __name: "magic-wand",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", G6, W6))
      ], 2)
    ], 2));
  }
}), Y6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, X6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M11.3,57.67L27,61.59l18-4.5l12.3,3.08c2.1,0.53,4.29,0.06,6-1.27c1.71-1.34,2.69-3.35,2.69-5.52V21.12
		c0-3.22-2.18-6.01-5.3-6.79L45,10.41l-18,4.5l-12.3-3.08c-2.11-0.53-4.29-0.06-6.01,1.27C6.98,14.44,6,16.45,6,18.62v32.25
		C6,54.1,8.18,56.89,11.3,57.67z M43,51.41l-14,3.5V20.59l14-3.5V51.41z M60,21.12v32.25c0,0.42-0.24,0.68-0.38,0.79
		c-0.14,0.11-0.44,0.29-0.86,0.18L47,51.41V17.09l12.24,3.06C59.69,20.26,60,20.66,60,21.12z M12,18.62c0-0.42,0.24-0.68,0.38-0.79
		c0.11-0.09,0.32-0.21,0.61-0.21c0.08,0,0.16,0.01,0.25,0.03L25,20.59v34.32l-12.24-3.06C12.31,51.74,12,51.34,12,50.88V18.62z` })
], -1), q6 = [
  X6
], J6 = /* @__PURE__ */ i({
  __name: "map",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Y6, q6))
      ], 2)
    ], 2));
  }
}), Q6 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Z6 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: "M45,33H27c-1.66,0-3,1.34-3,3s1.34,3,3,3h18c1.66,0,3-1.34,3-3S46.66,33,45,33z" }),
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` })
], -1), cc = [
  Z6
], ec = /* @__PURE__ */ i({
  __name: "minus-circle",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Q6, cc))
      ], 2)
    ], 2));
  }
}), sc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, nc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: "M18,39h36c1.66,0,3-1.34,3-3s-1.34-3-3-3H18c-1.66,0-3,1.34-3,3S16.34,39,18,39z" })
], -1), tc = [
  nc
], oc = /* @__PURE__ */ i({
  __name: "minus",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", sc, tc))
      ], 2)
    ], 2));
  }
}), ac = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _c = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M22,66h28c3.86,0,7-3.14,7-7V13c0-3.86-3.14-7-7-7H22c-3.86,0-7,3.14-7,7v46C15,62.86,18.14,66,22,66z M21,13
		c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1v46c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V13z` }),
  /* @__PURE__ */ c("path", { d: `M34.34,56.5c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.56,0.17C35.61,56.98,35.81,57,36,57
		c0.79,0,1.56-0.32,2.12-0.88C38.68,55.56,39,54.79,39,54s-0.32-1.56-0.88-2.12c-0.69-0.7-1.74-1.02-2.71-0.82
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37C33.32,52.44,33,53.21,33,54
		s0.32,1.56,0.88,2.12C34.02,56.26,34.17,56.39,34.34,56.5z` })
], -1), rc = [
  _c
], lc = /* @__PURE__ */ i({
  __name: "mobile",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ac, rc))
      ], 2)
    ], 2));
  }
}), ic = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, hc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,61.5c3.84,0,7.54-0.84,10.99-2.49c1.28-0.61,2.15-1.88,2.25-3.29c0.11-1.42-0.55-2.81-1.73-3.61
		C42.18,48.46,39,42.44,39,36s3.18-12.46,8.51-16.1c1.18-0.81,1.84-2.19,1.73-3.61c-0.11-1.42-0.97-2.68-2.25-3.29
		c-4.45-2.13-9.42-2.91-14.37-2.27C21.14,12.21,11.9,21.65,10.65,33.16c-0.79,7.24,1.53,14.48,6.36,19.87
		C21.85,58.41,28.77,61.5,36,61.5z M16.62,33.81c0.95-8.79,8.01-16,16.77-17.14c0.87-0.11,1.73-0.17,2.59-0.17
		c1.79,0,3.57,0.24,5.27,0.72C36.03,22.02,33,28.81,33,36c0,7.19,3.03,13.99,8.26,18.78c-1.7,0.48-3.46,0.72-5.26,0.72
		c-5.53,0-10.82-2.36-14.52-6.48C17.73,44.84,16.01,39.44,16.62,33.81z` })
], -1), pc = [
  hc
], dc = /* @__PURE__ */ i({
  __name: "moon",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ic, pc))
      ], 2)
    ], 2));
  }
}), vc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, uc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M40.24,40.24C41.36,39.13,42,37.58,42,36c0-1.58-0.64-3.12-1.76-4.24C39.13,30.64,37.58,30,36,30s-3.12,0.64-4.24,1.76
		c-0.28,0.27-0.53,0.58-0.75,0.91c-0.21,0.33-0.4,0.67-0.55,1.04c-0.15,0.36-0.27,0.74-0.34,1.12C30.04,35.22,30,35.61,30,36
		c0,1.58,0.64,3.13,1.76,4.24C32.88,41.36,34.42,42,36,42S39.13,41.36,40.24,40.24z` }),
  /* @__PURE__ */ c("path", { d: `M16.83,41.88C17.22,41.96,17.61,42,18,42c0.39,0,0.79-0.04,1.17-0.12c0.39-0.07,0.76-0.19,1.13-0.34
		c0.36-0.15,0.71-0.33,1.03-0.55c0.33-0.22,0.64-0.47,0.91-0.75c0.28-0.27,0.53-0.58,0.75-0.91c0.22-0.32,0.4-0.67,0.55-1.04
		c0.15-0.36,0.27-0.73,0.34-1.12C23.96,36.79,24,36.39,24,36c0-0.39-0.04-0.78-0.12-1.17c-0.07-0.38-0.19-0.76-0.34-1.12
		c-0.15-0.37-0.33-0.71-0.55-1.04c-0.22-0.33-0.47-0.64-0.75-0.91c-0.27-0.28-0.58-0.53-0.91-0.75c-0.32-0.21-0.67-0.4-1.03-0.55
		c-0.37-0.15-0.74-0.27-1.13-0.34c-0.77-0.16-1.57-0.16-2.34,0c-0.38,0.07-0.76,0.19-1.12,0.34c-0.37,0.15-0.71,0.34-1.04,0.55
		c-0.33,0.22-0.64,0.47-0.91,0.75c-0.28,0.27-0.53,0.58-0.75,0.91c-0.21,0.33-0.4,0.67-0.55,1.04c-0.15,0.36-0.27,0.74-0.34,1.12
		C12.04,35.22,12,35.61,12,36c0,0.39,0.04,0.79,0.12,1.17c0.07,0.39,0.19,0.76,0.34,1.12c0.15,0.37,0.34,0.72,0.55,1.04
		c0.22,0.33,0.47,0.64,0.75,0.91c0.27,0.28,0.58,0.53,0.91,0.75c0.33,0.22,0.67,0.4,1.04,0.55C16.07,41.69,16.45,41.81,16.83,41.88z
		` }),
  /* @__PURE__ */ c("path", { d: `M59.54,33.71c-0.15-0.37-0.33-0.72-0.55-1.04c-0.22-0.33-0.47-0.64-0.75-0.91c-0.27-0.28-0.58-0.53-0.91-0.75
		c-0.32-0.21-0.67-0.4-1.03-0.55c-0.37-0.15-0.74-0.26-1.13-0.34c-0.77-0.16-1.57-0.16-2.34,0c-0.38,0.08-0.76,0.19-1.12,0.34
		c-0.37,0.15-0.71,0.34-1.04,0.55c-0.33,0.22-0.64,0.47-0.91,0.75c-0.28,0.27-0.53,0.58-0.75,0.91c-0.21,0.32-0.4,0.67-0.55,1.04
		c-0.15,0.36-0.27,0.74-0.34,1.12C48.04,35.22,48,35.61,48,36c0,0.39,0.04,0.79,0.12,1.17c0.07,0.39,0.19,0.76,0.34,1.13
		c0.15,0.36,0.34,0.71,0.55,1.03c0.22,0.33,0.47,0.64,0.75,0.91c0.27,0.28,0.58,0.53,0.91,0.75c0.33,0.21,0.67,0.4,1.04,0.55
		c0.36,0.15,0.74,0.27,1.12,0.34C53.22,41.96,53.61,42,54,42c0.39,0,0.79-0.04,1.17-0.12c0.39-0.07,0.76-0.19,1.13-0.34
		c0.36-0.15,0.71-0.34,1.03-0.55c0.33-0.22,0.64-0.47,0.91-0.75c0.28-0.27,0.53-0.58,0.75-0.91c0.22-0.32,0.4-0.67,0.55-1.03
		c0.15-0.37,0.27-0.74,0.34-1.13C59.96,36.79,60,36.39,60,36c0-0.39-0.04-0.78-0.12-1.17C59.81,34.45,59.69,34.07,59.54,33.71z` })
], -1), xc = [
  uc
], mc = /* @__PURE__ */ i({
  __name: "more",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", vc, xc))
      ], 2)
    ], 2));
  }
}), Cc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Mc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M18,66c6.62,0,12-5.38,12-12V20.16l21-7v21.46C49.23,33.6,47.19,33,45,33c-6.62,0-12,5.38-12,12s5.38,12,12,12
		s12-5.38,12-12V9c0-0.96-0.46-1.87-1.25-2.43c-0.78-0.56-1.79-0.72-2.7-0.41l-27,9C24.83,15.56,24,16.71,24,18v25.62
		C22.23,42.6,20.19,42,18,42c-6.62,0-12,5.38-12,12S11.38,66,18,66z M45,51c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6
		S48.31,51,45,51z M18,48c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S14.69,48,18,48z` })
], -1), $c = [
  Mc
], gc = /* @__PURE__ */ i({
  __name: "music",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Cc, $c))
      ], 2)
    ], 2));
  }
}), zc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, bc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M49.5,4.36c-4.41,0-8.55,1.72-11.67,4.83L18.74,28.29c-4.68,4.68-4.68,12.29,0,16.97c4.68,4.68,12.29,4.68,16.97,0
		l15.91-15.91c2.92-2.92,2.92-7.68,0-10.61c-2.92-2.92-7.68-2.92-10.61,0L25.1,34.65c-1.17,1.17-1.17,3.07,0,4.24s3.07,1.17,4.24,0
		l15.91-15.91c0.59-0.58,1.54-0.58,2.12,0c0.38,0.38,0.44,0.83,0.44,1.06c0,0.23-0.06,0.68-0.44,1.06L31.47,41.01
		c-2.34,2.34-6.15,2.34-8.49,0c-2.34-2.34-2.34-6.15,0-8.49l19.09-19.09c1.98-1.98,4.62-3.08,7.42-3.08s5.44,1.09,7.42,3.08
		c4.09,4.09,4.09,10.76,0,14.85L28.29,56.92c-4.09,4.09-10.75,4.09-14.85,0c-1.98-1.98-3.08-4.62-3.08-7.42s1.09-5.44,3.08-7.42
		c1.17-1.17,1.17-3.07,0-4.24s-3.07-1.17-4.24,0c-3.12,3.12-4.83,7.26-4.83,11.67s1.72,8.55,4.83,11.67
		C12.31,64.28,16.46,66,20.86,66s8.55-1.72,11.67-4.83l28.64-28.64C64.28,29.41,66,25.27,66,20.86s-1.72-8.55-4.83-11.67
		C58.05,6.08,53.91,4.36,49.5,4.36z` })
], -1), wc = [
  bc
], yc = /* @__PURE__ */ i({
  __name: "paperclip",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", zc, wc))
      ], 2)
    ], 2));
  }
}), Lc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Hc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M60.5,31.5c0-3.58-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5c0,2.5,1.42,4.67,3.5,5.76V45c0,3.31-2.69,6-6,6h-0.7
		c-0.84-2.53-2.81-4.54-5.3-5.46V23.76c2.08-1.09,3.5-3.26,3.5-5.76c0-3.58-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5
		c0,2.5,1.42,4.67,3.5,5.76v21.78c-2.5,0.92-4.46,2.93-5.3,5.46H27c-3.31,0-6-2.69-6-6v-7.74c2.08-1.09,3.5-3.26,3.5-5.76
		c0-3.58-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5c0,2.5,1.42,4.67,3.5,5.76V45c0,6.62,5.38,12,12,12h0.88c1.29,3.22,4.44,5.5,8.12,5.5
		s6.82-2.28,8.12-5.5H45c6.62,0,12-5.38,12-12v-7.74C59.08,36.17,60.5,34,60.5,31.5z M18,29c1.38,0,2.5,1.12,2.5,2.5S19.38,34,18,34
		s-2.5-1.12-2.5-2.5S16.62,29,18,29z M36,15.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5S34.62,15.5,36,15.5z
		 M36,58.5c-2.62,0-4.75-2.13-4.75-4.75S33.38,49,36,49s4.75,2.13,4.75,4.75S38.62,58.5,36,58.5z M54,29c1.38,0,2.5,1.12,2.5,2.5
		S55.38,34,54,34s-2.5-1.12-2.5-2.5S52.62,29,54,29z` })
], -1), Vc = [
  Hc
], fc = /* @__PURE__ */ i({
  __name: "path-1",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Lc, Vc))
      ], 2)
    ], 2));
  }
}), Ic = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Ec = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M56.93,37.29c2.11-1.07,3.57-3.26,3.57-5.79c0-3.58-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5c0,2.48,1.39,4.63,3.44,5.73
		C50.31,44.93,43.86,51,36,51h-5.2c-0.84-2.53-2.81-4.54-5.3-5.46V23.76C27.58,22.67,29,20.5,29,18c0-3.58-2.92-6.5-6.5-6.5
		S16,14.42,16,18c0,2.5,1.42,4.67,3.5,5.76v21.78c-3.35,1.23-5.75,4.44-5.75,8.21c0,4.82,3.93,8.75,8.75,8.75
		c3.68,0,6.82-2.28,8.12-5.5H36C47.14,57,56.26,48.27,56.93,37.29z M54,29c1.38,0,2.5,1.12,2.5,2.5S55.38,34,54,34
		s-2.5-1.12-2.5-2.5S52.62,29,54,29z M22.5,15.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S20,19.38,20,18S21.12,15.5,22.5,15.5z
		 M22.5,58.5c-2.62,0-4.75-2.13-4.75-4.75S19.88,49,22.5,49s4.75,2.13,4.75,4.75S25.12,58.5,22.5,58.5z` })
], -1), Sc = [
  Ec
], Ac = /* @__PURE__ */ i({
  __name: "path-2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ic, Sc))
      ], 2)
    ], 2));
  }
}), Rc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, kc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M48.04,59.25C49.27,62.6,52.48,65,56.25,65c4.82,0,8.75-3.93,8.75-8.75c0-3.77-2.4-6.98-5.75-8.21V23.96
		C62.6,22.73,65,19.52,65,15.75C65,10.93,61.07,7,56.25,7c-3.77,0-6.98,2.4-8.21,5.75H23.96C22.73,9.4,19.52,7,15.75,7
		C10.93,7,7,10.93,7,15.75c0,3.77,2.4,6.98,5.75,8.21v24.08C9.4,49.27,7,52.48,7,56.25C7,61.07,10.93,65,15.75,65
		c3.77,0,6.98-2.4,8.21-5.75H48.04z M61,56.25c0,2.62-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75s2.13-4.75,4.75-4.75
		S61,53.63,61,56.25z M56.25,11c2.62,0,4.75,2.13,4.75,4.75s-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75S53.63,11,56.25,11z
		 M11,15.75c0-2.62,2.13-4.75,4.75-4.75s4.75,2.13,4.75,4.75s-2.13,4.75-4.75,4.75S11,18.37,11,15.75z M15.75,61
		C13.13,61,11,58.87,11,56.25s2.13-4.75,4.75-4.75s4.75,2.13,4.75,4.75S18.37,61,15.75,61z M18.75,48.04V23.96
		c2.41-0.88,4.32-2.8,5.21-5.21h24.08c0.88,2.41,2.8,4.32,5.21,5.21v24.08c-2.41,0.88-4.32,2.8-5.21,5.21H23.96
		C23.07,50.84,21.16,48.93,18.75,48.04z` })
], -1), Tc = [
  kc
], Bc = /* @__PURE__ */ i({
  __name: "path-3",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Rc, Tc))
      ], 2)
    ], 2));
  }
}), Oc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Nc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M48.04,59.25C49.27,62.6,52.48,65,56.25,65c4.82,0,8.75-3.93,8.75-8.75s-3.93-8.75-8.75-8.75c-1.32,0-2.56,0.3-3.68,0.82
		l-8.64-8.64c0.52-1.12,0.82-2.37,0.82-3.68s-0.3-2.56-0.82-3.68l8.64-8.64c1.12,0.52,2.37,0.82,3.68,0.82
		c4.82,0,8.75-3.93,8.75-8.75S61.07,7,56.25,7c-3.77,0-6.98,2.4-8.21,5.75H23.96C22.73,9.4,19.52,7,15.75,7C10.93,7,7,10.93,7,15.75
		c0,3.77,2.4,6.98,5.75,8.21v24.08C9.4,49.27,7,52.48,7,56.25C7,61.07,10.93,65,15.75,65c3.77,0,6.98-2.4,8.21-5.75H48.04z
		 M61,56.25c0,2.62-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75s2.13-4.75,4.75-4.75S61,53.63,61,56.25z M40.75,36
		c0,2.62-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75s2.13-4.75,4.75-4.75S40.75,33.38,40.75,36z M56.25,11
		c2.62,0,4.75,2.13,4.75,4.75s-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75S53.63,11,56.25,11z M11,15.75c0-2.62,2.13-4.75,4.75-4.75
		s4.75,2.13,4.75,4.75s-2.13,4.75-4.75,4.75S11,18.37,11,15.75z M15.75,61C13.13,61,11,58.87,11,56.25s2.13-4.75,4.75-4.75
		s4.75,2.13,4.75,4.75S18.37,61,15.75,61z M18.75,48.04V23.96c2.41-0.88,4.32-2.8,5.21-5.21h24.08c0.09,0.23,0.18,0.46,0.28,0.68
		l-8.64,8.64c-1.12-0.52-2.37-0.82-3.68-0.82c-4.82,0-8.75,3.93-8.75,8.75s3.93,8.75,8.75,8.75c1.32,0,2.56-0.3,3.68-0.82l8.64,8.64
		c-0.1,0.22-0.2,0.45-0.28,0.68H23.96C23.07,50.84,21.16,48.93,18.75,48.04z` })
], -1), Dc = [
  Nc
], Uc = /* @__PURE__ */ i({
  __name: "path-4",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Oc, Dc))
      ], 2)
    ], 2));
  }
}), Pc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Fc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M27,39h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3s-1.34-3-3-3h-6v-6c0-1.66-1.34-3-3-3s-3,1.34-3,3v6h-6
		c-1.66,0-3,1.34-3,3S25.34,39,27,39z` }),
  /* @__PURE__ */ c("path", { d: `M36,66c16.54,0,30-13.46,30-30S52.54,6,36,6S6,19.46,6,36S19.46,66,36,66z M36,12c13.23,0,24,10.77,24,24S49.23,60,36,60
		S12,49.23,12,36S22.77,12,36,12z` })
], -1), Gc = [
  Fc
], Kc = /* @__PURE__ */ i({
  __name: "plus-circle",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Pc, Gc))
      ], 2)
    ], 2));
  }
}), Wc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, jc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,15c-1.66,0-3,1.34-3,3v15H18c-1.66,0-3,1.34-3,3s1.34,3,3,3h15v15c0,1.66,1.34,3,3,3s3-1.34,3-3V39h15
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H39V18C39,16.34,37.66,15,36,15z` })
], -1), Yc = [
  jc
], Xc = /* @__PURE__ */ i({
  __name: "plus",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Wc, Yc))
      ], 2)
    ], 2));
  }
}), qc = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Jc = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M57,24h-4.72c1.5-1.02,2.91-2.18,4.22-3.49c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0
		c-3.02,3.02-6.67,5.16-10.65,6.32h-2.13c1.58-2.46,3.11-5.68,3.11-9c0-4.41-3.59-8-8-8s-8,3.59-8,8c0,3.32,1.52,6.54,3.11,9h-2.13
		c-3.99-1.16-7.64-3.31-10.65-6.32c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83c1.31,1.31,2.72,2.47,4.22,3.49H15
		c-4.96,0-9,4.04-9,9v6h4.5v18c0,4.96,4.04,9,9,9h33c4.96,0,9-4.04,9-9V39H66v-6C66,28.04,61.96,24,57,24z M36,11c2.21,0,4,1.79,4,4
		c0,3.4-2.4,6.96-4,8.96c-1.6-2-4-5.56-4-8.96C32,12.79,33.79,11,36,11z M60,33H38v-3h19C58.65,30,60,31.35,60,33z M15,30h19v3H12
		C12,31.35,13.35,30,15,30z M16.5,57V39H34v21H19.5C17.85,60,16.5,58.65,16.5,57z M55.5,57c0,1.65-1.35,3-3,3H38V39h17.5V57z` })
], -1), Qc = [
  Jc
], Zc = /* @__PURE__ */ i({
  __name: "present",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", qc, Qc))
      ], 2)
    ], 2));
  }
}), c7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, e7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M63,24h-6V9c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v15H9c-1.66,0-3,1.34-3,3v27c0,1.66,1.34,3,3,3h6v6c0,1.66,1.34,3,3,3
		h36c1.66,0,3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3V27C66,25.34,64.66,24,63,24z M21,12h30v12H21V12z M51,60H21v-6v-6h30v6V60z M60,51
		h-3v-6c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v6h-3V30h6h36h6V51z` }),
  /* @__PURE__ */ c("path", { d: `M51.88,33.88C51.32,34.44,51,35.21,51,36s0.32,1.56,0.88,2.12C52.44,38.68,53.21,39,54,39s1.56-0.32,2.12-0.88
		C56.68,37.56,57,36.79,57,36s-0.32-1.56-0.88-2.12C55,32.76,53,32.76,51.88,33.88z` }),
  /* @__PURE__ */ c("path", { d: "M45,52H27c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S46.1,52,45,52z" })
], -1), s7 = [
  e7
], n7 = /* @__PURE__ */ i({
  __name: "print",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", c7, s7))
      ], 2)
    ], 2));
  }
}), t7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, o7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M15.49,56.51c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59L28.93,45.9l8.13,8.13c0.57,0.57,1.34,0.88,2.12,0.88
		c0.39,0,0.78-0.07,1.15-0.23c1.12-0.46,1.85-1.56,1.85-2.77V40.42l7.79-7.79h5.12c1.21,0,2.31-0.73,2.77-1.85
		c0.46-1.12,0.21-2.41-0.65-3.27L44.49,14.79c-0.86-0.86-2.15-1.12-3.27-0.65c-1.12,0.46-1.85,1.56-1.85,2.77v5.12l-7.79,7.79H20.09
		c-1.21,0-2.31,0.73-2.77,1.85c-0.46,1.12-0.21,2.41,0.65,3.27l8.13,8.13L15.49,53.68C14.71,54.46,14.71,55.73,15.49,56.51z
		 M32.82,35.82c0.8,0,1.56-0.32,2.12-0.88l9.55-9.55c0.38-0.38,0.64-0.84,0.78-1.34l2.69,2.69c-0.5,0.14-0.97,0.4-1.34,0.78
		l-9.55,9.55c-0.56,0.56-0.88,1.33-0.88,2.12v5.48l-8.85-8.85H32.82z` })
], -1), a7 = [
  o7
], _7 = /* @__PURE__ */ i({
  __name: "pushpin",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", t7, a7))
      ], 2)
    ], 2));
  }
}), r7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, l7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M58.5,31.5c-1.57,0-3.77,0.41-6,1.12V22.5c0-1.66-1.34-3-3-3H39.38c0.7-2.22,1.12-4.43,1.12-6c0-4.96-4.04-9-9-9
		s-9,4.04-9,9c0,1.57,0.41,3.78,1.12,6H13.5c-1.66,0-3,1.34-3,3v36c0,1.66,1.34,3,3,3h10.81c1.77,0,3.45-0.86,4.48-2.31
		c1.03-1.44,1.3-3.29,0.73-4.95c-0.7-2.04-1.02-3.89-1.02-4.74c0-1.65,1.35-3,3-3s3,1.35,3,3c0,0.85-0.32,2.7-1.02,4.74
		c-0.57,1.66-0.3,3.51,0.73,4.95c1.03,1.44,2.71,2.31,4.48,2.31H49.5c1.66,0,3-1.34,3-3V48.38c2.22,0.7,4.43,1.12,6,1.12
		c4.96,0,9-4.04,9-9S63.46,31.5,58.5,31.5z M58.5,43.5c-0.85,0-2.7-0.32-4.74-1.02c-1.66-0.57-3.51-0.3-4.95,0.73
		c-1.45,1.03-2.31,2.71-2.31,4.48v7.81h-7.12c0.7-2.22,1.12-4.43,1.12-6c0-4.96-4.04-9-9-9s-9,4.04-9,9c0,1.57,0.41,3.78,1.12,6
		H16.5v-30h7.81c1.77,0,3.45-0.86,4.48-2.31c1.03-1.44,1.3-3.29,0.73-4.95c-0.7-2.04-1.02-3.89-1.02-4.74c0-1.65,1.35-3,3-3
		s3,1.35,3,3c0,0.85-0.32,2.7-1.02,4.74c-0.57,1.66-0.3,3.51,0.73,4.95c1.03,1.44,2.71,2.31,4.48,2.31h7.81v7.81
		c0,1.77,0.86,3.45,2.31,4.48c1.44,1.03,3.29,1.3,4.95,0.73c2.04-0.7,3.89-1.02,4.74-1.02c1.65,0,3,1.35,3,3S60.15,43.5,58.5,43.5z` })
], -1), i7 = [
  l7
], h7 = /* @__PURE__ */ i({
  __name: "puzzle-piece",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", r7, i7))
      ], 2)
    ], 2));
  }
}), p7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, d7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M44.75,18.35c-2.78-2.49-6.51-3.68-10.24-3.26c-6.05,0.67-10.91,5.54-11.56,11.59c-0.22,2,0.01,3.96,0.67,5.83
		c0.55,1.56,2.27,2.38,3.83,1.83c1.56-0.55,2.38-2.27,1.83-3.83c-0.36-1.01-0.48-2.08-0.36-3.18c0.35-3.27,2.99-5.91,6.26-6.27
		c2.07-0.23,4.05,0.4,5.57,1.77c1.51,1.35,2.37,3.29,2.37,5.31c0,2.65-1.46,5.07-3.81,6.31C35.42,36.48,33,40.53,33,45
		c0,1.66,1.34,3,3,3s3-1.34,3-3c0-2.23,1.19-4.25,3.11-5.25c4.33-2.28,7.02-6.73,7.02-11.62C49.12,24.4,47.53,20.83,44.75,18.35z` }),
  /* @__PURE__ */ c("path", { d: `M35.41,51.06c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.52,0.28c-0.16,0.1-0.31,0.23-0.45,0.37
		C33.32,52.44,33,53.21,33,54s0.32,1.56,0.88,2.12C34.44,56.68,35.21,57,36,57s1.56-0.32,2.12-0.88C38.68,55.56,39,54.79,39,54
		s-0.32-1.56-0.88-2.12C37.43,51.18,36.39,50.86,35.41,51.06z` })
], -1), v7 = [
  d7
], u7 = /* @__PURE__ */ i({
  __name: "question-mark",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", p7, v7))
      ], 2)
    ], 2));
  }
}), x7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, m7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M10.38,53.21c1.23,2.13,3.43,3.4,5.89,3.4h6.58c1.66,0,3-1.34,3-3s-1.34-3-3-3h-6.58c-0.38,0-0.59-0.22-0.69-0.4
		c-0.11-0.18-0.19-0.47,0-0.8l6.26-10.84l0.54,1.99c0.36,1.34,1.57,2.22,2.89,2.22c0.26,0,0.52-0.03,0.78-0.1
		c1.6-0.43,2.55-2.08,2.11-3.68l-2.42-8.95c0,0,0,0,0,0l-0.78-2.9l-11.86,3.2c-1.6,0.43-2.55,2.08-2.11,3.68
		c0.43,1.6,2.08,2.55,3.68,2.11l1.95-0.53l-6.24,10.8C9.15,48.54,9.15,51.08,10.38,53.21z` }),
  /* @__PURE__ */ c("path", { d: `M58.33,40.71c-0.83-1.43-2.66-1.93-4.1-1.1c-1.43,0.83-1.93,2.66-1.1,4.1l3.29,5.7c0.19,0.33,0.1,0.62,0,0.8
		c-0.1,0.18-0.31,0.4-0.69,0.4H43.24l1.44-1.44c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-6.56,6.56
		c0,0,0,0-0.01,0.01l-2.12,2.12l2.12,2.12c0,0,0,0,0.01,0.01l6.56,6.56c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24l-1.44-1.44h12.49c2.46,0,4.66-1.27,5.89-3.4c1.23-2.13,1.23-4.67,0-6.8L58.33,40.71z` }),
  /* @__PURE__ */ c("path", { d: `M52.82,19.56c-1.6-0.44-3.25,0.51-3.68,2.11l-0.57,2.12l-6.68-11.57c-1.23-2.13-3.43-3.4-5.89-3.4s-4.66,1.27-5.89,3.4
		l-3.29,5.7c-0.83,1.43-0.34,3.27,1.1,4.1c1.44,0.83,3.27,0.34,4.1-1.1l3.29-5.7c0.19-0.33,0.48-0.4,0.69-0.4s0.5,0.07,0.69,0.4
		l6.56,11.37l-1.82-0.49c-1.6-0.43-3.25,0.51-3.68,2.11c-0.43,1.6,0.51,3.25,2.11,3.68l11.86,3.2l3.2-11.86
		C55.37,21.64,54.42,20,52.82,19.56z` })
], -1), C7 = [
  m7
], M7 = /* @__PURE__ */ i({
  __name: "recycle",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", x7, C7))
      ], 2)
    ], 2));
  }
}), $7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, g7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M19.98,62.63L19.98,62.63c2.92-2.92,2.92-7.68,0-10.61c-2.92-2.92-7.68-2.92-10.61,0c-3.95,3.95-4.06,10.89-4.06,11.67v3h3
		C9.09,66.69,16.03,66.57,19.98,62.63z M13.62,56.26c0.29-0.29,0.68-0.44,1.06-0.44c0.38,0,0.77,0.15,1.06,0.44
		c0.58,0.58,0.58,1.54,0,2.12c-0.95,0.95-2.51,1.53-3.99,1.87C12.08,58.77,12.66,57.22,13.62,56.26z` }),
  /* @__PURE__ */ c("path", { d: `M56.33,5.06c-6.91,1.49-16.35,5.45-26.68,15.22h-14.8c-3.81,0-7.23,2.12-8.93,5.52c-1.45,2.9-1.4,6.34,0.14,9.19
		c1.54,2.86,4.38,4.79,7.59,5.18l2.34,0.28c0.52,2.73,1.84,7.09,5.15,10.4c3.31,3.31,7.67,4.62,10.4,5.15l0.28,2.34
		c0.39,3.22,2.33,6.06,5.18,7.59c1.47,0.79,3.1,1.19,4.73,1.19c1.53,0,3.06-0.35,4.46-1.05c3.4-1.7,5.52-5.12,5.52-8.93v-14.8
		c9.77-10.33,13.73-19.77,15.22-26.68c0.64-2.98-0.26-6.05-2.41-8.2C62.38,5.32,59.31,4.42,56.33,5.06z M11.34,32.16
		c-0.62-1.16-0.64-2.49-0.05-3.67c0.68-1.36,2.04-2.2,3.56-2.2h9.02c-1.65,1.87-3.32,3.9-5,6.1c-0.01,0.01-0.02,0.02-0.02,0.03
		c-0.49,0.64-0.98,1.3-1.47,1.97c-0.05,0.06-0.09,0.13-0.14,0.19l-2.88-0.35C13.07,34.07,11.96,33.31,11.34,32.16z M43.51,60.72
		c-1.17,0.59-2.51,0.57-3.67-0.06c-1.16-0.62-1.91-1.73-2.07-3.03l-0.35-2.88c0.07-0.05,0.14-0.1,0.21-0.15
		c0.62-0.45,1.23-0.91,1.83-1.36c0.06-0.04,0.12-0.09,0.17-0.13c2.19-1.67,4.21-3.33,6.08-4.98v9.02
		C45.72,58.67,44.87,60.04,43.51,60.72z M61.07,14.41c-3.24,15.03-16.31,27.28-25.55,34.29c-0.2,0.15-0.39,0.3-0.59,0.44
		c-0.2,0.15-0.41,0.31-0.61,0.45c-0.3,0.22-0.6,0.44-0.91,0.65c-1.75-0.26-5.49-1.09-8.03-3.63c-2.54-2.54-3.37-6.29-3.63-8.03
		c0.21-0.28,0.41-0.57,0.62-0.85c0.18-0.24,0.37-0.49,0.55-0.75c0.11-0.14,0.21-0.28,0.32-0.42c7-9.24,19.28-22.39,34.35-25.64
		c0.99-0.22,1.97,0.07,2.69,0.79C61,12.43,61.29,13.41,61.07,14.41z` }),
  /* @__PURE__ */ c("path", { d: `M47.77,25.85c-0.07-0.18-0.17-0.35-0.27-0.51c-0.11-0.17-0.24-0.32-0.38-0.46c-0.14-0.14-0.29-0.26-0.45-0.37
		c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0c-0.19,0.04-0.38,0.1-0.56,0.17
		c-0.18,0.08-0.35,0.17-0.52,0.28c-0.16,0.11-0.31,0.23-0.45,0.37s-0.27,0.29-0.37,0.46c-0.11,0.16-0.21,0.33-0.28,0.51
		c-0.08,0.18-0.13,0.37-0.17,0.56C42.02,26.61,42,26.81,42,27c0,0.2,0.02,0.39,0.06,0.59c0.04,0.19,0.09,0.38,0.17,0.56
		c0.07,0.18,0.17,0.35,0.28,0.52c0.1,0.16,0.23,0.31,0.37,0.45c0.14,0.14,0.29,0.27,0.45,0.37c0.17,0.11,0.34,0.21,0.52,0.28
		c0.18,0.08,0.37,0.13,0.56,0.17C44.61,29.98,44.81,30,45,30c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17
		c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37c0.14-0.14,0.27-0.29,0.38-0.45c0.1-0.17,0.2-0.34,0.27-0.52
		c0.08-0.18,0.13-0.37,0.17-0.56C47.98,27.39,48,27.2,48,27c0-0.19-0.02-0.39-0.06-0.59C47.9,26.22,47.85,26.03,47.77,25.85z` })
], -1), z7 = [
  g7
], b7 = /* @__PURE__ */ i({
  __name: "rocket",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $7, z7))
      ], 2)
    ], 2));
  }
}), w7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, y7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M63.58,27.52L44.48,8.42c-1.17-1.17-3.07-1.17-4.24,0L8.42,40.24c-1.17,1.17-1.17,3.07,0,4.24l19.09,19.09
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l31.82-31.82C64.75,30.59,64.75,28.69,63.58,27.52z M29.64,57.21L14.79,42.36
		l27.58-27.58l14.85,14.85L29.64,57.21z` }),
  /* @__PURE__ */ c("path", { d: `M63,41.32l-6.77,6.77c-0.78,0.78-0.78,2.05,0,2.83c0.78,0.78,2.05,0.78,2.83,0L61,48.98V54c0,3.86-3.14,7-7,7
		c-1.1,0-2,0.9-2,2s0.9,2,2,2c6.07,0,11-4.93,11-11v-5.02l1.94,1.94c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59
		c0.78-0.78,0.78-2.05,0-2.83L63,41.32z` }),
  /* @__PURE__ */ c("path", { d: `M15.77,23.06c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0L11,22.17V18c0-3.86,3.14-7,7-7c1.1,0,2-0.9,2-2
		s-0.9-2-2-2C11.93,7,7,11.93,7,18v4.17l-1.94-1.94c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83L9,29.83L15.77,23.06z` })
], -1), L7 = [
  y7
], H7 = /* @__PURE__ */ i({
  __name: "rotate-screen",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", w7, L7))
      ], 2)
    ], 2));
  }
}), V7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, f7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M36,42c-4.41,0-8.55,1.72-11.67,4.83c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0c0.9-0.9,1.94-1.61,3.07-2.12
		h8.72c1.12,0.51,2.17,1.22,3.07,2.12c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24
		C44.55,43.72,40.41,42,36,42z` }),
  /* @__PURE__ */ c("path", { d: "M45,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C42,33.66,43.34,35,45,35z" }),
  /* @__PURE__ */ c("path", { d: "M27,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C24,33.66,25.34,35,27,35z" })
], -1), I7 = [
  f7
], E7 = /* @__PURE__ */ i({
  __name: "sad",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", V7, I7))
      ], 2)
    ], 2));
  }
}), S7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, A7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M32.27,53.27c4.71,0,9.05-1.58,12.55-4.2l11.55,11.55c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L49.07,44.83c2.63-3.51,4.21-7.84,4.21-12.55c0-11.58-9.42-21-21-21s-21,9.42-21,21
		S20.69,53.27,32.27,53.27z M32.27,17.27c8.27,0,15,6.73,15,15s-6.73,15-15,15s-15-6.73-15-15S24,17.27,32.27,17.27z` })
], -1), R7 = [
  A7
], k7 = /* @__PURE__ */ i({
  __name: "search",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", S7, R7))
      ], 2)
    ], 2));
  }
}), T7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, B7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M25.24,55.66c4.7,3.4,9.34,5.49,9.53,5.58c0.39,0.17,0.81,0.26,1.23,0.26s0.84-0.09,1.23-0.26
		c0.2-0.09,4.84-2.18,9.53-5.58C53.55,50.74,57,45.64,57,40.5v-27c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v27
		C15,45.64,18.45,50.74,25.24,55.66z M51,40.5c0,5.23-7.77,10.69-13,13.62V16.5h13V40.5z M21,16.5h13v37.62
		c-5.23-2.92-13-8.39-13-13.62V16.5z` })
], -1), O7 = [
  B7
], N7 = /* @__PURE__ */ i({
  __name: "secure",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", T7, O7))
      ], 2)
    ], 2));
  }
}), D7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, U7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M49.03,27.21l1.81-1.81c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-1.81,1.81c-1.72-1.16-3.68-1.99-5.79-2.4
		V18c0-1.66-1.34-3-3-3s-3,1.34-3,3v2.57c-2.11,0.41-4.07,1.24-5.79,2.4l-1.81-1.81c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l1.81,1.81c-1.16,1.72-1.99,3.68-2.4,5.79H18c-1.66,0-3,1.34-3,3s1.34,3,3,3h2.57
		c0.41,2.11,1.24,4.07,2.4,5.79l-1.81,1.81c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
		l1.81-1.81c1.72,1.16,3.68,1.99,5.79,2.4V54c0,1.66,1.34,3,3,3s3-1.34,3-3v-2.57c2.11-0.41,4.07-1.24,5.79-2.4l1.81,1.81
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-1.81-1.81c1.16-1.72,1.99-3.68,2.4-5.79H54
		c1.66,0,3-1.34,3-3s-1.34-3-3-3h-2.57C51.02,30.89,50.2,28.93,49.03,27.21z M36,45.73c-5.36,0-9.73-4.36-9.73-9.73
		s4.36-9.73,9.73-9.73s9.73,4.36,9.73,9.73S41.36,45.73,36,45.73z` })
], -1), P7 = [
  U7
], F7 = /* @__PURE__ */ i({
  __name: "settings",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", D7, P7))
      ], 2)
    ], 2));
  }
}), G7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, K7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M63,19.5H38.61c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H9c-1.66,0-3,1.34-3,3s1.34,3,3,3h6.39
		c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H63c1.66,0,3-1.34,3-3S64.66,19.5,63,19.5z M27,28.5c-3.31,0-6-2.69-6-6s2.69-6,6-6
		s6,2.69,6,6S30.31,28.5,27,28.5z` }),
  /* @__PURE__ */ c("path", { d: `M63,46.5h-6.39c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H9c-1.66,0-3,1.34-3,3s1.34,3,3,3h24.39
		c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H63c1.66,0,3-1.34,3-3S64.66,46.5,63,46.5z M45,55.5c-3.31,0-6-2.69-6-6s2.69-6,6-6
		s6,2.69,6,6S48.31,55.5,45,55.5z` })
], -1), W7 = [
  K7
], j7 = /* @__PURE__ */ i({
  __name: "settings2",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", G7, W7))
      ], 2)
    ], 2));
  }
}), Y7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, X7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M9,41.7h7.8v9.2c0,3.86,3.14,7,7,7h24.4c3.86,0,7-3.14,7-7v-9.2H63c1.27,0,2.41-0.8,2.83-2.01
		c0.42-1.2,0.04-2.54-0.96-3.34l-27-21.6c-1.1-0.88-2.65-0.88-3.75,0l-27,21.6c-1,0.8-1.38,2.13-0.96,3.34
		C6.59,40.9,7.73,41.7,9,41.7z M36,20.94L54.45,35.7H52.2c-1.66,0-3,1.34-3,3v12.2c0,0.55-0.45,1-1,1H23.8c-0.55,0-1-0.45-1-1V38.7
		c0-1.66-1.34-3-3-3h-2.25L36,20.94z` })
], -1), q7 = [
  X7
], J7 = /* @__PURE__ */ i({
  __name: "shift",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Y7, q7))
      ], 2)
    ], 2));
  }
}), Q7 = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Z7 = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M46.1,57.02c-0.18-0.07-0.37-0.13-0.56-0.17c-0.98-0.19-2.01,0.12-2.71,0.82c-0.55,0.56-0.88,1.33-0.88,2.12
		c0,0.2,0.03,0.39,0.06,0.59c0.04,0.19,0.1,0.38,0.18,0.56c0.07,0.18,0.16,0.35,0.27,0.52c0.11,0.16,0.24,0.31,0.37,0.45
		c0.56,0.56,1.33,0.88,2.12,0.88c0.2,0,0.4-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.36-0.17,0.52-0.27
		c0.17-0.11,0.32-0.24,0.46-0.38c0.14-0.14,0.26-0.29,0.37-0.45c0.11-0.17,0.2-0.34,0.28-0.52c0.07-0.18,0.13-0.37,0.17-0.56
		c0.04-0.2,0.06-0.39,0.06-0.59c0-0.79-0.32-1.56-0.88-2.12c-0.14-0.14-0.29-0.26-0.46-0.37C46.46,57.19,46.28,57.1,46.1,57.02z` }),
  /* @__PURE__ */ c("path", { d: `M29.45,58.13c-0.11-0.17-0.23-0.32-0.37-0.46c-0.14-0.14-0.3-0.26-0.46-0.37s-0.34-0.21-0.52-0.28
		c-0.18-0.08-0.37-0.13-0.56-0.17c-0.38-0.08-0.78-0.08-1.17,0c-0.19,0.04-0.38,0.09-0.56,0.17c-0.18,0.07-0.36,0.17-0.52,0.28
		s-0.32,0.23-0.46,0.37c-0.14,0.14-0.26,0.29-0.37,0.46c-0.11,0.16-0.2,0.33-0.27,0.51c-0.08,0.18-0.14,0.37-0.18,0.56
		c-0.04,0.2-0.06,0.39-0.06,0.59c0,0.79,0.32,1.56,0.88,2.12c0.14,0.14,0.3,0.27,0.46,0.38c0.16,0.1,0.34,0.2,0.52,0.27
		c0.18,0.08,0.37,0.13,0.56,0.17c0.19,0.04,0.39,0.06,0.59,0.06c0.19,0,0.39-0.02,0.58-0.06c0.19-0.04,0.38-0.09,0.56-0.17
		c0.18-0.07,0.36-0.17,0.52-0.27c0.16-0.11,0.32-0.24,0.46-0.38c0.14-0.14,0.26-0.29,0.37-0.45c0.11-0.17,0.2-0.34,0.28-0.52
		c0.07-0.18,0.13-0.37,0.17-0.56c0.04-0.2,0.06-0.39,0.06-0.59c0-0.2-0.02-0.39-0.06-0.59c-0.04-0.19-0.1-0.38-0.17-0.56
		C29.65,58.46,29.56,58.29,29.45,58.13z` }),
  /* @__PURE__ */ c("path", { d: `M6.76,14.53l6.65,5.43l3.74,18.71c0.01,0.05,0.02,0.09,0.03,0.14l2.16,10.79c0.55,2.77,3,4.77,5.82,4.77H49.2
		c1.66,0,3-1.34,3-3s-1.34-3-3-3l-23.97,0.05l-1.45-7.27h26.56c2.92,0,5.45-2.18,5.87-5.07l2.07-13.95
		c0.25-1.71-0.25-3.44-1.38-4.75c-1.13-1.31-2.77-2.06-4.5-2.06H17.21l-6.66-5.43c-1.29-1.05-3.17-0.86-4.22,0.43
		C5.29,11.6,5.48,13.49,6.76,14.53z M52.34,21.25l-2,13.9H22.57L19.8,21.31L52.34,21.25z` })
], -1), ce = [
  Z7
], ee = /* @__PURE__ */ i({
  __name: "shoppingcart",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Q7, ce))
      ], 2)
    ], 2));
  }
}), se = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ne = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M43.42,42.88c-0.9,0.9-1.94,1.61-3.07,2.12h-8.72c-1.12-0.51-2.17-1.22-3.07-2.12c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24c3.12,3.12,7.26,4.83,11.67,4.83s8.55-1.72,11.67-4.83c1.17-1.17,1.17-3.07,0-4.24
		C46.5,41.71,44.6,41.71,43.42,42.88z` }),
  /* @__PURE__ */ c("path", { d: "M45,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C42,33.66,43.34,35,45,35z" }),
  /* @__PURE__ */ c("path", { d: "M27,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C24,33.66,25.34,35,27,35z" })
], -1), te = [
  ne
], oe = /* @__PURE__ */ i({
  __name: "smile",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", se, te))
      ], 2)
    ], 2));
  }
}), ae = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _e = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,17.44,6,31.5S19.46,57,36,57c2.39,0,4.75-0.24,7.05-0.71l8.83,8.83C52.45,65.7,53.22,66,54,66
		c0.39,0,0.78-0.07,1.15-0.23C56.27,65.31,57,64.21,57,63V49.72c5.74-4.78,9-11.34,9-18.22C66,17.44,52.54,6,36,6z M52.21,45.86
		c-0.76,0.57-1.21,1.46-1.21,2.4v7.49l-4.88-4.88C45.55,50.31,44.78,50,44,50c-0.25,0-0.5,0.03-0.75,0.1C40.91,50.69,38.47,51,36,51
		c-13.23,0-24-8.75-24-19.5S22.77,12,36,12s24,8.75,24,19.5C60,36.93,57.16,42.17,52.21,45.86z` })
], -1), re = [
  _e
], le = /* @__PURE__ */ i({
  __name: "speak",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ae, re))
      ], 2)
    ], 2));
  }
}), ie = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, he = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,6H31.5c-3.86,0-7,3.14-7,7v11H13c-3.86,0-7,3.14-7,7v18.5c0,3.86,3.14,7,7,7h2v11.61L32.41,56.5H41c3.86,0,7-3.14,7-7
		v-8.39l13.5,9V38.04c2.63-1.01,4.5-3.56,4.5-6.54V13C66,9.14,62.86,6,59,6z M42,49.5c0,0.55-0.45,1-1,1H30.59L21,56.89V50.5h-8
		c-0.55,0-1-0.45-1-1V31c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1V49.5z M60,31.5c0,0.55-0.45,1-1,1h-3.5v6.39l-7.5-5V31
		c0-3.86-3.14-7-7-7H30.5V13c0-0.55,0.45-1,1-1H59c0.55,0,1,0.45,1,1V31.5z` })
], -1), pe = [
  he
], de = /* @__PURE__ */ i({
  __name: "speech-square-chat",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ie, pe))
      ], 2)
    ], 2));
  }
}), ve = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ue = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36.91,56.5H50c3.86,0,7-3.14,7-7V47h2c3.31,0,6-2.69,6-6V18c0-3.31-2.69-6-6-6H22c-3.31,0-6,2.69-6,6v1.5h-3
		c-3.86,0-7,3.14-7,7v23c0,3.86,3.14,7,7,7h6.5v11.61L36.91,56.5z M20,18c0-1.1,0.9-2,2-2h37c1.1,0,2,0.9,2,2v23c0,1.1-0.9,2-2,2h-2
		V26.5c0-3.86-3.14-7-7-7H20V18z M13,50.5c-0.55,0-1-0.45-1-1v-23c0-0.55,0.45-1,1-1h37c0.55,0,1,0.45,1,1v23c0,0.55-0.45,1-1,1
		H35.09l-9.59,6.39V50.5H13z` })
], -1), xe = [
  ue
], me = /* @__PURE__ */ i({
  __name: "speech-square-double",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ve, xe))
      ], 2)
    ], 2));
  }
}), Ce = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Me = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,11H13c-3.86,0-7,3.14-7,7v27.5c0,3.86,3.14,7,7,7h22.09L52.5,64.11V52.5H59c3.86,0,7-3.14,7-7V18
		C66,14.14,62.86,11,59,11z M60,45.5c0,0.55-0.45,1-1,1H46.5v6.39l-9.59-6.39H13c-0.55,0-1-0.45-1-1V18c0-0.55,0.45-1,1-1h46
		c0.55,0,1,0.45,1,1V45.5z` })
], -1), $e = [
  Me
], ge = /* @__PURE__ */ i({
  __name: "speech-square",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ce, $e))
      ], 2)
    ], 2));
  }
}), ze = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, be = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,19.5H48v-6c0-1.66-1.34-3-3-3H27c-1.66,0-3,1.34-3,3v6H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46
		c3.86,0,7-3.14,7-7v-28C66,22.64,62.86,19.5,59,19.5z M29,25.5h14v30H29V25.5z M30,16.5h12v3H30V16.5z M12,54.5v-28
		c0-0.55,0.45-1,1-1h12v30H13C12.45,55.5,12,55.05,12,54.5z M60,54.5c0,0.55-0.45,1-1,1H47v-30h12c0.55,0,1,0.45,1,1V54.5z` })
], -1), we = [
  be
], ye = /* @__PURE__ */ i({
  __name: "suitcase",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ze, we))
      ], 2)
    ], 2));
  }
}), Le = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, He = /* @__PURE__ */ b(`<g><path d="M36,57c11.58,0,21-9.42,21-21s-9.42-21-21-21s-21,9.42-21,21S24.42,57,36,57z M36,21c8.27,0,15,6.73,15,15s-6.73,15-15,15
		s-15-6.73-15-15S27.73,21,36,21z"></path><path d="M36,12c1.66,0,3-1.34,3-3V4.5c0-1.66-1.34-3-3-3s-3,1.34-3,3V9C33,10.66,34.34,12,36,12z"></path><path d="M39,67.5V63c0-1.66-1.34-3-3-3s-3,1.34-3,3v4.5c0,1.66,1.34,3,3,3S39,69.16,39,67.5z"></path><path d="M12,36c0-1.66-1.34-3-3-3H4.5c-1.66,0-3,1.34-3,3s1.34,3,3,3H9C10.66,39,12,37.66,12,36z"></path><path d="M67.5,33H63c-1.66,0-3,1.34-3,3s1.34,3,3,3h4.5c1.66,0,3-1.34,3-3S69.16,33,67.5,33z"></path><path d="M14.79,19.03c0.58,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-3.18-3.18
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L14.79,19.03z"></path><path d="M57.21,52.97c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l3.18,3.18c0.58,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L57.21,52.97z"></path><path d="M15.85,60.4l3.18-3.18c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-3.18,3.18c-1.17,1.17-1.17,3.07,0,4.24
		c0.59,0.59,1.35,0.88,2.12,0.88S15.26,60.98,15.85,60.4z"></path><path d="M55.09,19.91c0.77,0,1.54-0.29,2.12-0.88l3.18-3.18c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-3.18,3.18
		c-1.17,1.17-1.17,3.07,0,4.24C53.56,19.62,54.32,19.91,55.09,19.91z"></path></g>`, 1), Ve = [
  He
], fe = /* @__PURE__ */ i({
  __name: "sun",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Le, Ve))
      ], 2)
    ], 2));
  }
}), Ie = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Ee = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M61.38,21.62c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-11-11
		c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L53.76,14L47,20.76l-3.38-3.38c-1.17-1.17-3.07-1.17-4.24,0l-27.5,27.5
		c-1.17,1.17-1.17,3.07,0,4.24l4.09,4.09l-8.88,8.88c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59
		l8.88-8.88l4.09,4.09C23.46,60.71,24.23,61,25,61s1.54-0.29,2.12-0.88l27.5-27.5c1.17-1.17,1.17-3.07,0-4.24L51.24,25L58,18.24
		L61.38,21.62z M18.24,47L41.5,23.74l6.76,6.76l-1.96,1.96l-3.38-3.38c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		l3.38,3.38l-2.67,2.67l-3.38-3.38c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l3.38,3.38l-2.67,2.67l-3.38-3.38
		c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l3.38,3.38l-2.67,2.67l-3.38-3.38c-0.78-0.78-2.05-0.78-2.83,0
		c-0.78,0.78-0.78,2.05,0,2.83l3.38,3.38L25,53.76L18.24,47z` })
], -1), Se = [
  Ee
], Ae = /* @__PURE__ */ i({
  __name: "syringe",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ie, Se))
      ], 2)
    ], 2));
  }
}), Re = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ke = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M19.67,33.51c-0.17-0.11-0.34-0.2-0.52-0.28c-0.18-0.07-0.37-0.13-0.56-0.17c-0.39-0.08-0.79-0.08-1.18,0
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.52,0.28c-0.16,0.11-0.31,0.23-0.45,0.37s-0.27,0.29-0.37,0.45
		c-0.11,0.17-0.2,0.34-0.28,0.52c-0.08,0.18-0.13,0.37-0.17,0.57C15.02,35.61,15,35.81,15,36c0,0.79,0.32,1.56,0.88,2.12
		c0.14,0.14,0.29,0.27,0.45,0.37c0.17,0.11,0.34,0.21,0.52,0.28c0.18,0.08,0.37,0.13,0.56,0.17C17.61,38.98,17.81,39,18,39
		c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.38-0.09,0.56-0.17c0.18-0.07,0.35-0.17,0.52-0.28c0.16-0.1,0.31-0.23,0.45-0.37
		c0.14-0.14,0.27-0.29,0.38-0.45c0.1-0.17,0.2-0.34,0.27-0.52c0.08-0.18,0.13-0.37,0.17-0.56C20.98,36.39,21,36.2,21,36
		c0-0.79-0.32-1.56-0.88-2.12C19.98,33.74,19.83,33.62,19.67,33.51z` }),
  /* @__PURE__ */ c("path", { d: `M59,15H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22C66,18.14,62.86,15,59,15z M60,50
		c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V50z` })
], -1), Te = [
  ke
], Be = /* @__PURE__ */ i({
  __name: "tablet",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Re, Te))
      ], 2)
    ], 2));
  }
}), Oe = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Ne = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M7.88,30h6v21h-1.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h45c1.66,0,3-1.34,3-3s-1.34-3-3-3h-1.5V30h6c1.32,0,2.49-0.87,2.87-2.13
		c0.38-1.27-0.11-2.63-1.21-3.37l-27-18c-1.01-0.67-2.32-0.67-3.33,0l-27,18c-1.1,0.73-1.59,2.1-1.21,3.37
		C5.39,29.13,6.55,30,7.88,30z M19.88,30h3v21h-3V30z M40.88,30v21h-12V30H40.88z M49.88,51h-3V30h3V51z M34.88,12.61L51.97,24
		H17.78L34.88,12.61z` }),
  /* @__PURE__ */ c("path", { d: "M7.88,66h54c1.66,0,3-1.34,3-3s-1.34-3-3-3h-54c-1.66,0-3,1.34-3,3S6.22,66,7.88,66z" })
], -1), De = [
  Ne
], Ue = /* @__PURE__ */ i({
  __name: "temple",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Oe, De))
      ], 2)
    ], 2));
  }
}), Pe = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Fe = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M59,6H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M60,59
		c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V59z` }),
  /* @__PURE__ */ c("path", { d: `M19.41,16.59c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l5.34,5.34l-5.34,5.34c-0.78,0.78-0.78,2.05,0,2.83
		c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l6.75-6.75c0.78-0.78,0.78-2.05,0-2.83L19.41,16.59z` }),
  /* @__PURE__ */ c("path", { d: "M40.5,29.5h-9c-1.1,0-2,0.9-2,2s0.9,2,2,2h9c1.1,0,2-0.9,2-2S41.6,29.5,40.5,29.5z" })
], -1), Ge = [
  Fe
], Ke = /* @__PURE__ */ i({
  __name: "terminal",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Pe, Ge))
      ], 2)
    ], 2));
  }
}), We = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, je = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "24",
    y: "27",
    width: "24",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "19.5",
    y: "39",
    width: "33",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "22.67",
    y: "51",
    width: "26.65",
    height: "6"
  })
], -1), Ye = [
  je
], Xe = /* @__PURE__ */ i({
  __name: "text-align-center",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", We, Ye))
      ], 2)
    ], 2));
  }
}), qe = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Je = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "27",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "39",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "24",
    y: "51",
    width: "24",
    height: "6"
  })
], -1), Qe = [
  Je
], Ze = /* @__PURE__ */ i({
  __name: "text-align-justify-center",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", qe, Qe))
      ], 2)
    ], 2));
  }
}), cs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, es = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "27",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "39",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "51",
    width: "24",
    height: "6"
  })
], -1), ss = [
  es
], ns = /* @__PURE__ */ i({
  __name: "text-align-justify-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", cs, ss))
      ], 2)
    ], 2));
  }
}), ts = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, os = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "27",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "39",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "33",
    y: "51",
    width: "24",
    height: "6"
  })
], -1), as = [
  os
], _s = /* @__PURE__ */ i({
  __name: "text-align-justify-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ts, as))
      ], 2)
    ], 2));
  }
}), rs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ls = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "27",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "39",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "51",
    width: "42",
    height: "6"
  })
], -1), is = [
  ls
], hs = /* @__PURE__ */ i({
  __name: "text-align-justify",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", rs, is))
      ], 2)
    ], 2));
  }
}), ps = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ds = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "27",
    width: "24",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "39",
    width: "33",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "51",
    width: "26.65",
    height: "6"
  })
], -1), vs = [
  ds
], us = /* @__PURE__ */ i({
  __name: "text-align-left",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ps, vs))
      ], 2)
    ], 2));
  }
}), xs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ms = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("rect", {
    x: "15",
    y: "15",
    width: "42",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "33",
    y: "27",
    width: "24",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "24",
    y: "39",
    width: "33",
    height: "6"
  }),
  /* @__PURE__ */ c("rect", {
    x: "30.35",
    y: "51",
    width: "26.65",
    height: "6"
  })
], -1), Cs = [
  ms
], Ms = /* @__PURE__ */ i({
  __name: "text-align-right",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", xs, Cs))
      ], 2)
    ], 2));
  }
}), $s = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, gs = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M27,66c1.66,0,3-1.34,3-3c0-3.31,2.69-6,6-6s6,2.69,6,6c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3V9c0-1.66-1.34-3-3-3h-9
		c-1.66,0-3,1.34-3,3c0,3.31-2.69,6-6,6s-6-2.69-6-6c0-1.66-1.34-3-3-3h-9c-1.66,0-3,1.34-3,3v54c0,1.66,1.34,3,3,3H27z M24.38,12
		c1.33,5.17,6.04,9,11.62,9s10.29-3.83,11.62-9H51v31h-1.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H51v13h-3.38c-1.33-5.17-6.04-9-11.62-9
		s-10.29,3.83-11.62,9H21V47h1.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H21V12H24.38z` }),
  /* @__PURE__ */ c("path", { d: "M31.5,47h9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2S30.4,47,31.5,47z" })
], -1), zs = [
  gs
], bs = /* @__PURE__ */ i({
  __name: "ticket",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", $s, zs))
      ], 2)
    ], 2));
  }
}), ws = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, ys = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M65.12,6.88c-1.17-1.17-3.07-1.17-4.24,0L54,13.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L49.76,18l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C43.46,29.71,44.23,30,45,30s1.54-0.29,2.12-0.88L54,22.24l6.88,6.88
		C61.46,29.71,62.23,30,63,30s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L58.24,18l6.88-6.88C66.29,9.95,66.29,8.05,65.12,6.88
		z` }),
  /* @__PURE__ */ c("path", { d: `M63,42c-1.66,0-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V45C66,43.34,64.66,42,63,42z
		 M57,60H15c-1.65,0-3-1.35-3-3v-1.52c0.93,0.33,1.94,0.52,3,0.52h42c1.06,0,2.07-0.19,3-0.52V57C60,58.65,58.65,60,57,60z` })
], -1), Ls = [
  ys
], Hs = /* @__PURE__ */ i({
  __name: "tile-close",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", ws, Ls))
      ], 2)
    ], 2));
  }
}), Vs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, fs = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M54.83,7.27c-0.94-0.95-2.2-1.47-3.54-1.47c-1.33,0-2.59,0.52-3.54,1.46L29.58,25.45l-5.32,15.97
		c-0.6,1.81-0.14,3.77,1.21,5.12c0.96,0.96,2.22,1.47,3.52,1.47c0.53,0,1.07-0.09,1.59-0.26l15.97-5.32l18.18-18.18
		c0.94-0.94,1.46-2.2,1.46-3.54c0-1.34-0.52-2.59-1.46-3.54L54.83,7.27z M36.45,27.07l8.49-8.49l8.49,8.49l-8.49,8.49L36.45,27.07z
		 M33.52,32.62l5.86,5.86l-8.79,2.93L33.52,32.62z M57.66,22.82l-8.49-8.49l2.12-2.12l8.49,8.49L57.66,22.82z` }),
  /* @__PURE__ */ c("path", { d: `M63,42c-1.66,0-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V45C66,43.34,64.66,42,63,42z
		 M57,60H15c-1.65,0-3-1.35-3-3v-1.52c0.93,0.33,1.94,0.52,3,0.52h42c1.06,0,2.07-0.19,3-0.52V57C60,58.65,58.65,60,57,60z` })
], -1), Is = [
  fs
], Es = /* @__PURE__ */ i({
  __name: "tile-edit",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Vs, Is))
      ], 2)
    ], 2));
  }
}), Ss = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, As = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M15,66h42c4.96,0,9-4.04,9-9V45c0-1.66-1.34-3-3-3s-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15
		c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42
		C6,61.96,10.04,66,15,66z M15,56h42c1.06,0,2.07-0.19,3-0.52V57c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3v-1.52
		C12.93,55.81,13.94,56,15,56z` }),
  /* @__PURE__ */ c("path", { d: `M49.5,39c1.66,0,3-1.34,3-3V25.5H63c1.66,0,3-1.34,3-3s-1.34-3-3-3H52.5V9c0-1.66-1.34-3-3-3s-3,1.34-3,3v10.5H36
		c-1.66,0-3,1.34-3,3s1.34,3,3,3h10.5V36C46.5,37.66,47.84,39,49.5,39z` })
], -1), Rs = [
  As
], ks = /* @__PURE__ */ i({
  __name: "tile-plus",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ss, Rs))
      ], 2)
    ], 2));
  }
}), Ts = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Bs = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M15,66h42c4.96,0,9-4.04,9-9V15c0-4.96-4.04-9-9-9H15c-4.96,0-9,4.04-9,9v42C6,61.96,10.04,66,15,66z M12,15
		c0-1.65,1.35-3,3-3h42c1.65,0,3,1.35,3,3v35.62C59.27,51.46,58.2,52,57,52H15c-1.2,0-2.27-0.54-3-1.38V15z M57,60H15
		c-1.65,0-3-1.35-3-3v-1.59c0.93,0.38,1.94,0.59,3,0.59h42c1.06,0,2.07-0.21,3-0.59V57C60,58.65,58.65,60,57,60z` })
], -1), Os = [
  Bs
], Ns = /* @__PURE__ */ i({
  __name: "tile",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ts, Os))
      ], 2)
    ], 2));
  }
}), Ds = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Us = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: "M38.5,31.5v18c0,1.1,0.9,2,2,2s2-0.9,2-2v-18c0-1.1-0.9-2-2-2S38.5,30.4,38.5,31.5z" }),
  /* @__PURE__ */ c("path", { d: "M31.5,29.5c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2s2-0.9,2-2v-18C33.5,30.4,32.6,29.5,31.5,29.5z" }),
  /* @__PURE__ */ c("path", { d: `M40.5,10.5h-9c-1.66,0-3,1.34-3,3v6h-6h-9c-1.66,0-3,1.34-3,3s1.34,3,3,3h6v25c0,6.07,4.93,11,11,11h11
		c6.07,0,11-4.93,11-11v-25h6c1.66,0,3-1.34,3-3s-1.34-3-3-3h-9h-6v-6C43.5,11.84,42.16,10.5,40.5,10.5z M34.5,16.5h3v3h-3V16.5z
		 M46.5,50.5c0,2.76-2.24,5-5,5h-11c-2.76,0-5-2.24-5-5v-25h21V50.5z` })
], -1), Ps = [
  Us
], Fs = /* @__PURE__ */ i({
  __name: "trash",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ds, Ps))
      ], 2)
    ], 2));
  }
}), Gs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Ks = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M66,33c0-4.96-4.04-9-9-9h-9c0-4.96-4.04-9-9-9H15c-4.96,0-9,4.04-9,9v33h9.15c-0.1,0.48-0.15,0.99-0.15,1.5
		c0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5c0-0.51-0.05-1.02-0.15-1.5H42h0.15c-0.1,0.48-0.15,0.99-0.15,1.5
		c0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5c0-0.51-0.05-1.02-0.15-1.5H66V33z M48,51v-4h12v4H48z M57,30c1.65,0,3,1.35,3,3v10H48
		V30H57z M24,58.5c0,0.83-0.67,1.5-1.5,1.5S21,59.33,21,58.5s0.67-1.5,1.5-1.5S24,57.67,24,58.5z M42,51H12V24c0-1.65,1.35-3,3-3h24
		c1.65,0,3,1.35,3,3V51z M51,58.5c0,0.83-0.67,1.5-1.5,1.5S48,59.33,48,58.5s0.67-1.5,1.5-1.5S51,57.67,51,58.5z` })
], -1), Ws = [
  Ks
], js = /* @__PURE__ */ i({
  __name: "truck",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Gs, Ws))
      ], 2)
    ], 2));
  }
}), Ys = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Xs = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M61.5,36c0-1.66-1.34-3-3-3h-34V22.5C24.5,16.16,29.66,11,36,11s11.5,5.16,11.5,11.5c0,1.1,0.9,2,2,2s2-0.9,2-2
		C51.5,13.95,44.55,7,36,7s-15.5,6.95-15.5,15.5V33h-7c-1.66,0-3,1.34-3,3v19c0,6.07,4.93,11,11,11h29c6.07,0,11-4.93,11-11V36z
		 M55.5,55c0,2.76-2.24,5-5,5h-29c-2.76,0-5-2.24-5-5V39h39V55z` }),
  /* @__PURE__ */ c("path", { d: "M36,57c1.66,0,3-1.34,3-3v-9c0-1.66-1.34-3-3-3s-3,1.34-3,3v9C33,55.66,34.34,57,36,57z" })
], -1), qs = [
  Xs
], Js = /* @__PURE__ */ i({
  __name: "unlocked",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Ys, qs))
      ], 2)
    ], 2));
  }
}), Qs = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Zs = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,65c2.18,0,21.29-0.27,21.29-9.71c0-9-5.63-16.7-13.54-19.81c3.33-2.41,5.51-6.32,5.51-10.73
		c0-7.31-5.94-13.25-13.25-13.25s-13.25,5.94-13.25,13.25c0,4.41,2.18,8.32,5.51,10.73c-7.91,3.11-13.54,10.8-13.54,19.81
		C14.71,64.73,33.82,65,36,65z M26.75,24.75c0-5.1,4.15-9.25,9.25-9.25s9.25,4.15,9.25,9.25S41.1,34,36,34S26.75,29.85,26.75,24.75z
		 M36,38c9.53,0,17.29,7.75,17.29,17.29C53.29,59.18,42.97,61,36,61c-6.97,0-17.29-1.82-17.29-5.71C18.71,45.75,26.47,38,36,38z` }),
  /* @__PURE__ */ c("path", { d: `M30.31,52.69H34v3.69c0,1.1,0.9,2,2,2s2-0.9,2-2v-3.69h3.69c1.1,0,2-0.9,2-2s-0.9-2-2-2H38V45c0-1.1-0.9-2-2-2s-2,0.9-2,2
		v3.69h-3.69c-1.1,0-2,0.9-2,2S29.2,52.69,30.31,52.69z` })
], -1), cn = [
  Zs
], en = /* @__PURE__ */ i({
  __name: "user-add",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Qs, cn))
      ], 2)
    ], 2));
  }
}), sn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, nn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,65c2.18,0,21.29-0.27,21.29-9.71c0-9-5.63-16.7-13.54-19.81c3.33-2.41,5.51-6.32,5.51-10.73
		c0-7.31-5.94-13.25-13.25-13.25s-13.25,5.94-13.25,13.25c0,4.41,2.18,8.32,5.51,10.73c-7.91,3.11-13.54,10.8-13.54,19.81
		C14.71,64.73,33.82,65,36,65z M26.75,24.75c0-5.1,4.15-9.25,9.25-9.25s9.25,4.15,9.25,9.25S41.1,34,36,34S26.75,29.85,26.75,24.75z
		 M36,38c9.53,0,17.29,7.75,17.29,17.29C53.29,59.18,42.97,61,36,61c-6.97,0-17.29-1.82-17.29-5.71C18.71,45.75,26.47,38,36,38z` }),
  /* @__PURE__ */ c("path", { d: `M29.41,57.35c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59L36,53.59l3.76,3.76c0.39,0.39,0.9,0.59,1.41,0.59
		s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83l-3.76-3.76L42.59,47c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0
		L36,47.93l-3.76-3.76c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l3.76,3.76l-3.76,3.76
		C28.63,55.3,28.63,56.57,29.41,57.35z` })
], -1), tn = [
  nn
], on = /* @__PURE__ */ i({
  __name: "user-delete",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", sn, tn))
      ], 2)
    ], 2));
  }
}), an = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, _n = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M26,16.08C25.57,16.03,25.14,16,24.72,16c-6.18,0-11.2,5.03-11.2,11.2c0,3.5,1.61,6.62,4.13,8.68
		c-6.29,2.74-10.71,9.01-10.71,16.3c0,2.57,1.69,5.91,9.54,7.48C21.26,64.82,34.23,65,36,65s14.74-0.18,19.52-5.33
		c7.84-1.57,9.54-4.91,9.54-7.48c0-7.29-4.41-13.56-10.71-16.3c2.52-2.06,4.13-5.18,4.13-8.68c0-6.18-5.03-11.2-11.2-11.2
		c-0.42,0-0.85,0.03-1.28,0.08c-2.43-2.8-6.01-4.58-10-4.58S28.44,13.28,26,16.08z M17.52,27.2c0-3.59,2.65-6.57,6.09-7.11
		c-0.55,1.45-0.86,3.02-0.86,4.66c0,3.66,1.49,6.97,3.9,9.37c-0.62,0.17-1.26,0.28-1.93,0.28C20.75,34.41,17.52,31.18,17.52,27.2z
		 M10.94,52.19c0-6.98,5.22-12.77,11.97-13.66c-0.04,0.03-0.08,0.06-0.12,0.1c-0.22,0.18-0.44,0.35-0.65,0.54
		c-0.28,0.24-0.56,0.5-0.83,0.75c-0.25,0.24-0.5,0.49-0.74,0.74c-0.2,0.21-0.4,0.43-0.59,0.65c-0.27,0.31-0.53,0.63-0.79,0.96
		c-0.18,0.24-0.36,0.47-0.54,0.72c-0.17,0.24-0.34,0.49-0.51,0.74c-0.24,0.36-0.46,0.73-0.67,1.11c-0.15,0.26-0.28,0.52-0.42,0.78
		c-0.15,0.28-0.28,0.57-0.42,0.86c-0.16,0.35-0.31,0.69-0.45,1.05c-0.13,0.32-0.25,0.65-0.36,0.98c-0.08,0.23-0.16,0.46-0.23,0.69
		c-0.15,0.49-0.27,0.99-0.38,1.49c-0.04,0.18-0.08,0.37-0.12,0.55c-0.11,0.56-0.2,1.13-0.26,1.7c-0.01,0.13-0.03,0.26-0.04,0.39
		c-0.05,0.59-0.09,1.18-0.1,1.78C12.31,54.33,10.94,53.3,10.94,52.19z M36,61c-6.97,0-17.29-1.82-17.29-5.71
		c0-0.53,0.03-1.06,0.08-1.58c0.02-0.19,0.04-0.38,0.07-0.56c0.04-0.32,0.09-0.64,0.15-0.95c0.04-0.23,0.08-0.46,0.14-0.68
		c0.06-0.26,0.13-0.51,0.2-0.77c0.27-0.99,0.63-1.95,1.07-2.87c0.06-0.13,0.12-0.27,0.19-0.4c0.15-0.3,0.31-0.59,0.48-0.88
		c0.07-0.12,0.14-0.23,0.21-0.34c0.18-0.3,0.37-0.6,0.58-0.89c0.01-0.02,0.03-0.03,0.04-0.05c0.46-0.65,0.98-1.27,1.53-1.86
		c0.04-0.04,0.08-0.09,0.12-0.13c0.24-0.25,0.5-0.49,0.75-0.73c0.1-0.09,0.2-0.18,0.3-0.27c0.26-0.23,0.52-0.45,0.8-0.66
		c0.09-0.07,0.18-0.14,0.28-0.21c1.33-0.99,2.82-1.81,4.43-2.4C31.95,38.39,33.93,38,36,38s4.05,0.39,5.89,1.06
		c1.61,0.59,3.1,1.4,4.43,2.4c0.09,0.07,0.19,0.14,0.28,0.21c0.27,0.21,0.54,0.43,0.8,0.66c0.1,0.09,0.2,0.18,0.3,0.27
		c0.26,0.24,0.51,0.48,0.75,0.73c0.04,0.04,0.08,0.09,0.12,0.13c0.55,0.58,1.06,1.2,1.53,1.86c0.01,0.02,0.03,0.03,0.04,0.05
		c0.2,0.29,0.39,0.59,0.58,0.89c0.07,0.11,0.14,0.23,0.21,0.34c0.17,0.29,0.33,0.58,0.48,0.88c0.07,0.13,0.13,0.26,0.19,0.4
		c0.44,0.92,0.79,1.88,1.07,2.87c0.07,0.26,0.14,0.51,0.2,0.77c0.05,0.22,0.09,0.45,0.13,0.68c0.06,0.32,0.11,0.64,0.15,0.96
		c0.02,0.19,0.05,0.37,0.07,0.56c0.05,0.52,0.08,1.04,0.08,1.58C53.29,59.18,42.97,61,36,61z M61.06,52.19
		c0,1.11-1.37,2.15-3.77,2.92c0-0.6-0.04-1.19-0.1-1.78c-0.01-0.13-0.02-0.26-0.04-0.39c-0.06-0.57-0.15-1.14-0.26-1.7
		c-0.04-0.19-0.08-0.37-0.12-0.55c-0.11-0.5-0.24-1-0.38-1.49c-0.07-0.23-0.15-0.46-0.23-0.69c-0.11-0.33-0.23-0.66-0.36-0.98
		c-0.14-0.35-0.29-0.7-0.45-1.05c-0.13-0.29-0.27-0.58-0.42-0.86c-0.14-0.26-0.27-0.53-0.42-0.78c-0.21-0.38-0.44-0.74-0.67-1.11
		c-0.16-0.25-0.33-0.49-0.51-0.74c-0.17-0.24-0.35-0.48-0.54-0.72c-0.25-0.33-0.52-0.65-0.79-0.96c-0.19-0.22-0.39-0.43-0.59-0.65
		c-0.24-0.25-0.49-0.5-0.74-0.74c-0.27-0.26-0.55-0.51-0.83-0.75c-0.21-0.18-0.43-0.36-0.65-0.54c-0.04-0.03-0.08-0.06-0.12-0.1
		C55.84,39.42,61.06,45.2,61.06,52.19z M54.48,27.2c0,3.97-3.23,7.2-7.2,7.2c-0.66,0-1.3-0.11-1.93-0.28c2.41-2.4,3.9-5.72,3.9-9.37
		c0-1.64-0.31-3.2-0.86-4.66C51.84,20.63,54.48,23.61,54.48,27.2z M36,15.5c5.1,0,9.25,4.15,9.25,9.25S41.1,34,36,34
		s-9.25-4.15-9.25-9.25S30.9,15.5,36,15.5z` })
], -1), rn = [
  _n
], ln = /* @__PURE__ */ i({
  __name: "user-team",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", an, rn))
      ], 2)
    ], 2));
  }
}), hn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, pn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,65c2.18,0,21.29-0.27,21.29-9.71c0-9-5.63-16.7-13.54-19.81c3.33-2.41,5.51-6.32,5.51-10.73
		c0-7.31-5.94-13.25-13.25-13.25s-13.25,5.94-13.25,13.25c0,4.41,2.18,8.32,5.51,10.73c-7.91,3.11-13.54,10.8-13.54,19.81
		C14.71,64.73,33.82,65,36,65z M26.75,24.75c0-5.1,4.15-9.25,9.25-9.25s9.25,4.15,9.25,9.25S41.1,34,36,34S26.75,29.85,26.75,24.75z
		 M36,38c9.53,0,17.29,7.75,17.29,17.29C53.29,59.18,42.97,61,36,61c-6.97,0-17.29-1.82-17.29-5.71C18.71,45.75,26.47,38,36,38z` })
], -1), dn = [
  pn
], vn = /* @__PURE__ */ i({
  __name: "user",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", hn, dn))
      ], 2)
    ], 2));
  }
}), un = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, xn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M28.29,65c0.82,0,4.06-0.04,7.78-0.6c4.05,0.59,7.5,0.6,7.65,0.6C45.89,65,65,64.73,65,55.29c0-9-5.63-16.7-13.54-19.81
		c3.33-2.41,5.51-6.32,5.51-10.73c0-7.31-5.94-13.25-13.25-13.25c-2.79,0-5.47,0.89-7.71,2.5c-2.18-1.57-4.84-2.5-7.72-2.5
		c-7.31,0-13.25,5.94-13.25,13.25c0,4.41,2.18,8.32,5.51,10.73C12.63,38.59,7,46.28,7,55.29C7,64.73,26.11,65,28.29,65z M61,55.29
		c0,3.42-7.98,5.24-14.64,5.63c1.93-1.37,3.21-3.19,3.21-5.63c0-6.98-3.39-13.16-8.59-17.05c0.9-0.14,1.81-0.24,2.73-0.24
		C53.25,38,61,45.75,61,55.29z M52.96,24.75c0,5.1-4.15,9.25-9.25,9.25c-1.71,0-3.37-0.48-4.81-1.36c1.64-2.21,2.63-4.93,2.63-7.89
		s-0.99-5.68-2.63-7.89c1.44-0.88,3.09-1.36,4.81-1.36C48.81,15.5,52.96,19.65,52.96,24.75z M19.04,24.75c0-5.1,4.15-9.25,9.25-9.25
		s9.25,4.15,9.25,9.25S33.39,34,28.29,34S19.04,29.85,19.04,24.75z M28.29,38c9.53,0,17.29,7.75,17.29,17.29
		c0,2.61-4.64,4.29-9.8,5.11c-0.09,0.01-0.18,0.02-0.27,0.04c-2.45,0.38-5,0.56-7.21,0.56C21.31,61,11,59.18,11,55.29
		C11,45.75,18.75,38,28.29,38z` })
], -1), mn = [
  xn
], Cn = /* @__PURE__ */ i({
  __name: "users",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", un, mn))
      ], 2)
    ], 2));
  }
}), Mn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, $n = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M64.42,24.35c-0.98-0.52-2.16-0.46-3.08,0.15l-8.9,5.94c-0.47-3.99-3.56-7.18-7.49-7.81c0.52-1.19,0.81-2.5,0.81-3.88
		C45.75,13.37,41.38,9,36,9c-2.62,0-5,1.04-6.75,2.73C27.5,10.04,25.12,9,22.5,9c-5.38,0-9.75,4.37-9.75,9.75
		c0,1.38,0.29,2.69,0.81,3.88C9.28,23.32,6,27.03,6,31.5V48c0,4.96,4.04,9,9,9h28.5c4.14,0,7.62-2.81,8.67-6.62l9.17,6.11
		c0.5,0.33,1.08,0.5,1.66,0.5c0.49,0,0.97-0.12,1.42-0.35C65.39,56.12,66,55.11,66,54V27C66,25.89,65.39,24.88,64.42,24.35z M36,15
		c2.07,0,3.75,1.68,3.75,3.75S38.07,22.5,36,22.5s-3.75-1.68-3.75-3.75S33.93,15,36,15z M22.5,15c2.07,0,3.75,1.68,3.75,3.75
		s-1.68,3.75-3.75,3.75s-3.75-1.68-3.75-3.75S20.43,15,22.5,15z M46.5,48c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3V31.5
		c0-1.65,1.35-3,3-3h28.5c1.65,0,3,1.35,3,3V36v9V48z M60,48.39l-7.5-5v-5.79l7.5-5V48.39z` })
], -1), gn = [
  $n
], zn = /* @__PURE__ */ i({
  __name: "video-camera",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Mn, gn))
      ], 2)
    ], 2));
  }
}), bn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, wn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M65.68,34.66C65.28,33.86,55.63,15,36,15C16.37,15,6.72,33.86,6.32,34.66c-0.42,0.84-0.42,1.84,0,2.68
		C6.72,38.14,16.37,57,36,57c19.63,0,29.28-18.86,29.68-19.66C66.11,36.5,66.11,35.5,65.68,34.66z M36,51
		c-13.15,0-21.14-11.09-23.54-15c2.41-3.91,10.4-15,23.54-15c13.14,0,21.13,11.09,23.54,15C57.13,39.91,49.14,51,36,51z` }),
  /* @__PURE__ */ c("path", { d: `M36,25c-6.07,0-11,4.93-11,11s4.93,11,11,11s11-4.93,11-11S42.07,25,36,25z M36,43c-3.86,0-7-3.14-7-7s3.14-7,7-7
		s7,3.14,7,7S39.86,43,36,43z` })
], -1), yn = [
  wn
], Ln = /* @__PURE__ */ i({
  __name: "visible",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", bn, yn))
      ], 2)
    ], 2));
  }
}), Hn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Vn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M46.88,6.88L29.76,24H22c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h7.76l17.12,17.12C47.45,65.7,48.22,66,49,66
		c0.39,0,0.78-0.07,1.15-0.23C51.27,65.31,52,64.21,52,63V9c0-1.21-0.73-2.31-1.85-2.77S47.74,6.02,46.88,6.88z M46,55.76
		L33.12,42.88C32.56,42.32,31.8,42,31,42h-6V30h6c0.8,0,1.56-0.32,2.12-0.88L46,16.24V55.76z` })
], -1), fn = [
  Vn
], In = /* @__PURE__ */ i({
  __name: "volume-off",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Hn, fn))
      ], 2)
    ], 2));
  }
}), En = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Sn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M16.76,48l17.12,17.12C34.45,65.7,35.22,66,36,66c0.39,0,0.78-0.07,1.15-0.23C38.27,65.31,39,64.21,39,63V9
		c0-1.21-0.73-2.31-1.85-2.77c-1.12-0.46-2.41-0.21-3.27,0.65L16.76,24H9c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3H16.76z M12,30h6
		c0.8,0,1.56-0.32,2.12-0.88L33,16.24v39.51L20.12,42.88C19.56,42.32,18.8,42,18,42h-6V30z` }),
  /* @__PURE__ */ c("path", { d: `M45,40.15c-1.1,0-2,0.9-2,2s0.9,2,2,2c4.49,0,8.15-3.66,8.15-8.15s-3.66-8.15-8.15-8.15c-1.1,0-2,0.9-2,2s0.9,2,2,2
		c2.29,0,4.15,1.86,4.15,4.15S47.29,40.15,45,40.15z` }),
  /* @__PURE__ */ c("path", { d: `M45,56c11.03,0,20-8.97,20-20s-8.97-20-20-20c-1.1,0-2,0.9-2,2s0.9,2,2,2c8.82,0,16,7.18,16,16s-7.18,16-16,16
		c-1.1,0-2,0.9-2,2S43.9,56,45,56z` })
], -1), An = [
  Sn
], Rn = /* @__PURE__ */ i({
  __name: "volume-on",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", En, An))
      ], 2)
    ], 2));
  }
}), kn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Tn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,66c11.58,0,21-9.42,21-21C57,25.98,38.89,7.65,38.12,6.88c-1.17-1.17-3.07-1.17-4.24,0C33.11,7.65,15,25.98,15,45
		C15,56.58,24.42,66,36,66z M36,13.44C40.58,18.69,51,32.05,51,45c0,8.27-6.73,15-15,15s-15-6.73-15-15
		C21,32.05,31.42,18.69,36,13.44z` })
], -1), Bn = [
  Tn
], On = /* @__PURE__ */ i({
  __name: "water",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", kn, Bn))
      ], 2)
    ], 2));
  }
}), Nn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Dn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: "M22.5,10.5h-9c-1.66,0-3,1.34-3,3v9c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3S24.16,10.5,22.5,10.5z" }),
  /* @__PURE__ */ c("path", { d: `M58.5,46.5c-1.66,0-3,1.34-3,3v6h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h9c1.66,0,3-1.34,3-3v-9
		C61.5,47.84,60.16,46.5,58.5,46.5z` }),
  /* @__PURE__ */ c("path", { d: "M22.5,55.5h-6v-6c0-1.66-1.34-3-3-3s-3,1.34-3,3v9c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3S24.16,55.5,22.5,55.5z" }),
  /* @__PURE__ */ c("path", { d: "M58.5,10.5h-9c-1.66,0-3,1.34-3,3s1.34,3,3,3h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-9C61.5,11.84,60.16,10.5,58.5,10.5z" })
], -1), Un = [
  Dn
], Pn = /* @__PURE__ */ i({
  __name: "window-frame",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Nn, Un))
      ], 2)
    ], 2));
  }
}), Fn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Gn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M58.5,46.5c-1.66,0-3,1.34-3,3v1.76l-8.38-8.38c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l8.38,8.38H49.5
		c-1.66,0-3,1.34-3,3s1.34,3,3,3h9c0.2,0,0.39-0.02,0.59-0.06c0.09-0.02,0.17-0.05,0.26-0.08c0.1-0.03,0.21-0.05,0.3-0.09
		c0.1-0.04,0.19-0.1,0.29-0.15c0.08-0.04,0.16-0.08,0.23-0.12c0.33-0.22,0.61-0.5,0.83-0.83c0.05-0.07,0.08-0.15,0.12-0.22
		c0.05-0.1,0.11-0.19,0.15-0.29c0.04-0.1,0.06-0.2,0.09-0.3c0.03-0.09,0.06-0.17,0.08-0.26c0.04-0.19,0.06-0.39,0.06-0.59v-9
		C61.5,47.84,60.16,46.5,58.5,46.5z` }),
  /* @__PURE__ */ c("path", { d: `M61.36,12.66c-0.03-0.1-0.05-0.21-0.09-0.3c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22
		c-0.22-0.33-0.5-0.61-0.83-0.83c-0.07-0.05-0.15-0.08-0.23-0.12c-0.09-0.05-0.19-0.11-0.29-0.15c-0.1-0.04-0.2-0.07-0.31-0.1
		c-0.08-0.02-0.17-0.06-0.25-0.08c-0.19-0.04-0.39-0.06-0.59-0.06h-9c-1.66,0-3,1.34-3,3s1.34,3,3,3h1.76l-8.38,8.38
		c-1.17,1.17-1.17,3.07,0,4.24C43.46,29.71,44.23,30,45,30s1.54-0.29,2.12-0.88l8.38-8.38v1.76c0,1.66,1.34,3,3,3s3-1.34,3-3v-9
		c0-0.2-0.02-0.39-0.06-0.59C61.42,12.82,61.39,12.74,61.36,12.66z` }),
  /* @__PURE__ */ c("path", { d: `M20.74,16.5h1.76c1.66,0,3-1.34,3-3s-1.34-3-3-3h-9c-0.2,0-0.39,0.02-0.59,0.06c-0.09,0.02-0.17,0.05-0.25,0.08
		c-0.1,0.03-0.21,0.05-0.31,0.1c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.12c-0.33,0.22-0.61,0.5-0.83,0.83
		c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26
		c-0.04,0.19-0.06,0.39-0.06,0.59v9c0,1.66,1.34,3,3,3s3-1.34,3-3v-1.76l8.38,8.38C25.46,29.71,26.23,30,27,30s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L20.74,16.5z` }),
  /* @__PURE__ */ c("path", { d: `M24.88,42.88l-8.38,8.38V49.5c0-1.66-1.34-3-3-3s-3,1.34-3,3v9c0,0.2,0.02,0.39,0.06,0.59c0.02,0.09,0.05,0.17,0.08,0.26
		c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29c0.04,0.07,0.07,0.15,0.12,0.22c0.22,0.33,0.5,0.61,0.83,0.83
		c0.07,0.05,0.15,0.08,0.23,0.12c0.1,0.05,0.19,0.11,0.29,0.15c0.1,0.04,0.2,0.06,0.3,0.09c0.09,0.03,0.17,0.06,0.26,0.08
		c0.19,0.04,0.39,0.06,0.59,0.06h9c1.66,0,3-1.34,3-3s-1.34-3-3-3h-1.76l8.38-8.38c1.17-1.17,1.17-3.07,0-4.24
		C27.95,41.71,26.05,41.71,24.88,42.88z` })
], -1), Kn = [
  Gn
], Wn = /* @__PURE__ */ i({
  __name: "window-full",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Fn, Kn))
      ], 2)
    ], 2));
  }
}), jn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Yn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z` }),
  /* @__PURE__ */ c("path", { d: `M43.42,42.88c-0.9,0.9-1.94,1.61-3.07,2.12h-8.72c-1.12-0.51-2.17-1.22-3.07-2.12c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24c3.12,3.12,7.26,4.83,11.67,4.83c4.41,0,8.55-1.72,11.67-4.83c1.17-1.17,1.17-3.07,0-4.24
		S44.6,41.71,43.42,42.88z` }),
  /* @__PURE__ */ c("path", { d: "M49.5,27.58h-8.12c-1.66,0-3,1.34-3,3s1.34,3,3,3h8.12c1.66,0,3-1.34,3-3S51.16,27.58,49.5,27.58z" }),
  /* @__PURE__ */ c("path", { d: "M27,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C24,33.66,25.34,35,27,35z" })
], -1), Xn = [
  Yn
], qn = /* @__PURE__ */ i({
  __name: "wink",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", jn, Xn))
      ], 2)
    ], 2));
  }
}), Jn = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 72 72",
  style: { "enable-background": "new 0 0 96 96" },
  "xml:space": "preserve"
}, Qn = /* @__PURE__ */ c("g", null, [
  /* @__PURE__ */ c("path", { d: `M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M59.91,34h-8.44c-0.24-9.23-2.08-15.3-4.43-19.3
		C54.17,18.41,59.21,25.6,59.91,34z M39.5,59.74C39,59.81,38.5,59.87,38,59.91V38h9.47C47.1,52.28,42.73,57.69,39.5,59.74z
		 M24.53,38H34v21.91c-0.5-0.04-0.99-0.09-1.48-0.17C29.27,57.69,24.9,52.28,24.53,38z M32.5,12.26c0.49-0.07,0.99-0.13,1.5-0.17V34
		h-9.47C24.9,19.72,29.27,14.31,32.5,12.26z M38,34V12.09c0.5,0.04,0.99,0.09,1.48,0.17c3.25,2.05,7.62,7.46,7.99,21.74H38z
		 M24.96,14.7c-2.35,4-4.19,10.07-4.43,19.3h-8.44C12.79,25.6,17.83,18.41,24.96,14.7z M12.09,38h8.44
		c0.24,9.23,2.08,15.3,4.43,19.3C17.83,53.59,12.79,46.4,12.09,38z M47.04,57.3c2.35-4,4.19-10.07,4.43-19.3h8.44
		C59.21,46.4,54.17,53.59,47.04,57.3z` })
], -1), Zn = [
  Qn
], c8 = /* @__PURE__ */ i({
  __name: "world",
  setup(a) {
    const e = h("icon");
    return (r, _) => (s(), n("div", {
      class: t(o(e)())
    }, [
      c("div", {
        class: t(o(e)("container"))
      }, [
        (s(), n("svg", Jn, Zn))
      ], 2)
    ], 2));
  }
}), s8 = (a) => {
  switch (a) {
    case l.O:
      return X;
    case l.X:
      return Z;
    case l.ABC:
      return n0;
    case l.ALARM:
      return _0;
    case l.APPS_PLUS:
      return h0;
    case l.APPS:
      return u0;
    case l.ARROW_CORNER_LEFT:
      return M0;
    case l.ARROW_CORNER_RIGHT:
      return b0;
    case l.ARROW_DOWN_LEFT:
      return H0;
    case l.ARROW_DOWN_RIGHT:
      return E0;
    case l.ARROW_DOWN:
      return k0;
    case l.ARROW_LEFT:
      return N0;
    case l.ARROW_RIGHT:
      return F0;
    case l.ARROW_ROTATE_LEFT:
      return j0;
    case l.ARROW_ROTATE_RIGHT:
      return J0;
    case l.ARROW_UP_LEFT:
      return e1;
    case l.ARROW_UP_RIGHT:
      return o1;
    case l.ARROW_UP:
      return l1;
    case l.BACKSPACE:
      return d1;
    case l.BAG2:
      return m1;
    case l.BAG:
      return g1;
    case l.BELL:
      return y1;
    case l.BOOK:
      return f1;
    case l.BOOK2:
      return A1;
    case l.BOOKS:
      return B1;
    case l.BUCKET:
      return U1;
    case l.BULB:
      return K1;
    case l.CAMERA:
      return X1;
    case l.CASE:
      return Z1;
    case l.CHECK_CIRCLE:
      return n2;
    case l.CHECK:
      return _2;
    case l.CHEVRON_DOWN:
      return h2;
    case l.CHEVRON_LEFT:
      return u2;
    case l.CHEVRON_RIGHT:
      return M2;
    case l.CHEVRON_UP:
      return b2;
    case l.CITY_BUILDINGS:
      return H2;
    case l.CLIPBOARD:
      return E2;
    case l.CLOCK:
      return k2;
    case l.CLOSE_CIRCLE:
      return N2;
    case l.CLOSE:
      return F2;
    case l.CLOUD_RAIN:
      return j2;
    case l.CLOUD:
      return J2;
    case l.COLORMODE:
      return e3;
    case l.COLORMODE2:
      return o3;
    case l.COLORMODE3:
      return l3;
    case l.COMPASS:
      return d3;
    case l.CREDITCARD:
      return m3;
    case l.CUBE3_D:
      return g3;
    case l.DESKTOP:
      return y3;
    case l.DIAMOND:
      return f3;
    case l.DOCUMENT_ADD2:
      return A3;
    case l.DOCUMENT_ADD:
      return B3;
    case l.DOCUMENT_CHECK2:
      return U3;
    case l.DOCUMENT_CHECK:
      return K3;
    case l.DOCUMENT_DELETE2:
      return X3;
    case l.DOCUMENT_DELETE:
      return Z3;
    case l.DOCUMENT_EDIT:
      return n5;
    case l.DOCUMENT_TEXT:
      return _5;
    case l.DOCUMENT:
      return h5;
    case l.DOCUMENTS:
      return u5;
    case l.EDIT:
      return M5;
    case l.ERASE:
      return b5;
    case l.FACE:
      return H5;
    case l.FEATHER:
      return E5;
    case l.FILM:
      return k5;
    case l.FILTER:
      return N5;
    case l.FIRE:
      return F5;
    case l.FISH:
      return j5;
    case l.FLAG:
      return J5;
    case l.FLOPPY_DISK:
      return e4;
    case l.FOLDER:
      return o4;
    case l.GRADUATION_CAP:
      return l4;
    case l.GRID:
      return d4;
    case l.HEADPHONES:
      return m4;
    case l.HEART_BROKEN:
      return g4;
    case l.HEART:
      return y4;
    case l.HELP:
      return f4;
    case l.HOME:
      return A4;
    case l.ID_CARD:
      return B4;
    case l.ID_TAG:
      return U4;
    case l.IMAGE:
      return K4;
    case l.INVISIBLE:
      return X4;
    case l.KEYBOARD:
      return Z4;
    case l.KNIFE_FORK:
      return n6;
    case l.LAB:
      return _6;
    case l.LABEL33:
      return h6;
    case l.LABEL56:
      return u6;
    case l.LANGUAGE:
      return M6;
    case l.LAPTOP:
      return b6;
    case l.LAYERS:
      return H6;
    case l.LAYOUT:
      return E6;
    case l.LEAF:
      return k6;
    case l.LOCATION_MARKER:
      return N6;
    case l.LOCKED:
      return F6;
    case l.MAGIC_WAND:
      return j6;
    case l.MAP:
      return J6;
    case l.MINUS_CIRCLE:
      return ec;
    case l.MINUS:
      return oc;
    case l.MOBILE:
      return lc;
    case l.MOON:
      return dc;
    case l.MORE:
      return mc;
    case l.MUSIC:
      return gc;
    case l.PAPERCLIP:
      return yc;
    case l.PATH1:
      return fc;
    case l.PATH2:
      return Ac;
    case l.PATH3:
      return Bc;
    case l.PATH4:
      return Uc;
    case l.PLUS_CIRCLE:
      return Kc;
    case l.PLUS:
      return Xc;
    case l.PRESENT:
      return Zc;
    case l.PRINT:
      return n7;
    case l.PUSHPIN:
      return _7;
    case l.PUZZLE_PIECE:
      return h7;
    case l.QUESTION_MARK:
      return u7;
    case l.RECYCLE:
      return M7;
    case l.ROCKET:
      return b7;
    case l.ROTATE_SCREEN:
      return H7;
    case l.SAD:
      return E7;
    case l.SEARCH:
      return k7;
    case l.SECURE:
      return N7;
    case l.SETTINGS:
      return F7;
    case l.SETTINGS2:
      return j7;
    case l.SHIFT:
      return J7;
    case l.SHOPPINGCART:
      return ee;
    case l.SMILE:
      return oe;
    case l.SPEAK:
      return le;
    case l.SPEECH_SQUARE_CHAT:
      return de;
    case l.SPEECH_SQUARE_DOUBLE:
      return me;
    case l.SPEECH_SQUARE:
      return ge;
    case l.SUITCASE:
      return ye;
    case l.SUN:
      return fe;
    case l.SYRINGE:
      return Ae;
    case l.TABLET:
      return Be;
    case l.TEMPLE:
      return Ue;
    case l.TERMINAL:
      return Ke;
    case l.TEXT_ALIGN_CENTER:
      return Xe;
    case l.TEXT_ALIGN_JUSTIFY_CENTER:
      return Ze;
    case l.TEXT_ALIGN_JUSTIFY_LEFT:
      return ns;
    case l.TEXT_ALIGN_JUSTIFY_RIGHT:
      return _s;
    case l.TEXT_ALIGN_JUSTIFY:
      return hs;
    case l.TEXT_ALIGN_LEFT:
      return us;
    case l.TEXT_ALIGN_RIGHT:
      return Ms;
    case l.TICKET:
      return bs;
    case l.TILE_CLOSE:
      return Hs;
    case l.TILE_EDIT:
      return Es;
    case l.TILE_PLUS:
      return ks;
    case l.TILE:
      return Ns;
    case l.TRASH:
      return Fs;
    case l.TRUCK:
      return js;
    case l.UNLOCKED:
      return Js;
    case l.USER_ADD:
      return en;
    case l.USER_DELETE:
      return on;
    case l.USER_TEAM:
      return ln;
    case l.USER:
      return vn;
    case l.USERS:
      return Cn;
    case l.VIDEO_CAMERA:
      return zn;
    case l.VISIBLE:
      return Ln;
    case l.VOLUME_OFF:
      return In;
    case l.VOLUME_ON:
      return Rn;
    case l.WATER:
      return On;
    case l.WINDOW_FRAME:
      return Pn;
    case l.WINDOW_FULL:
      return Wn;
    case l.WINK:
      return qn;
    case l.WORLD:
      return c8;
    default:
      return null;
  }
}, n8 = (a) => Object.values(l).find((e) => e === a.toLowerCase());
export {
  n0 as IconAbc,
  _0 as IconAlarm,
  u0 as IconApps,
  h0 as IconAppsPlus,
  M0 as IconArrowCornerLeft,
  b0 as IconArrowCornerRight,
  k0 as IconArrowDown,
  H0 as IconArrowDownLeft,
  E0 as IconArrowDownRight,
  N0 as IconArrowLeft,
  F0 as IconArrowRight,
  j0 as IconArrowRotateLeft,
  J0 as IconArrowRotateRight,
  l1 as IconArrowUp,
  e1 as IconArrowUpLeft,
  o1 as IconArrowUpRight,
  d1 as IconBackspace,
  g1 as IconBag,
  m1 as IconBag2,
  y1 as IconBell,
  f1 as IconBook,
  A1 as IconBook2,
  B1 as IconBooks,
  U1 as IconBucket,
  K1 as IconBulb,
  X1 as IconCamera,
  Z1 as IconCase,
  _2 as IconCheck,
  n2 as IconCheckCircle,
  h2 as IconChevronDown,
  u2 as IconChevronLeft,
  M2 as IconChevronRight,
  b2 as IconChevronUp,
  H2 as IconCityBuildings,
  E2 as IconClipboard,
  k2 as IconClock,
  F2 as IconClose,
  N2 as IconCloseCircle,
  J2 as IconCloud,
  j2 as IconCloudRain,
  e3 as IconColormode,
  o3 as IconColormode2,
  l3 as IconColormode3,
  d3 as IconCompass,
  m3 as IconCreditcard,
  g3 as IconCube3D,
  y3 as IconDesktop,
  f3 as IconDiamond,
  h5 as IconDocument,
  B3 as IconDocumentAdd,
  A3 as IconDocumentAdd2,
  K3 as IconDocumentCheck,
  U3 as IconDocumentCheck2,
  Z3 as IconDocumentDelete,
  X3 as IconDocumentDelete2,
  n5 as IconDocumentEdit,
  _5 as IconDocumentText,
  u5 as IconDocuments,
  M5 as IconEdit,
  b5 as IconErase,
  H5 as IconFace,
  E5 as IconFeather,
  k5 as IconFilm,
  N5 as IconFilter,
  F5 as IconFire,
  j5 as IconFish,
  J5 as IconFlag,
  e4 as IconFloppyDisk,
  o4 as IconFolder,
  l4 as IconGraduationCap,
  d4 as IconGrid,
  m4 as IconHeadphones,
  y4 as IconHeart,
  g4 as IconHeartBroken,
  f4 as IconHelp,
  A4 as IconHome,
  B4 as IconIdCard,
  U4 as IconIdTag,
  K4 as IconImage,
  X4 as IconInvisible,
  Z4 as IconKeyboard,
  n6 as IconKnifeFork,
  _6 as IconLab,
  h6 as IconLabel33,
  u6 as IconLabel56,
  M6 as IconLanguage,
  b6 as IconLaptop,
  H6 as IconLayers,
  E6 as IconLayout,
  k6 as IconLeaf,
  N6 as IconLocationMarker,
  F6 as IconLocked,
  j6 as IconMagicWand,
  J6 as IconMap,
  oc as IconMinus,
  ec as IconMinusCircle,
  lc as IconMobile,
  dc as IconMoon,
  mc as IconMore,
  gc as IconMusic,
  X as IconO,
  yc as IconPaperclip,
  fc as IconPath1,
  Ac as IconPath2,
  Bc as IconPath3,
  Uc as IconPath4,
  Xc as IconPlus,
  Kc as IconPlusCircle,
  Zc as IconPresent,
  n7 as IconPrint,
  _7 as IconPushpin,
  h7 as IconPuzzlePiece,
  u7 as IconQuestionMark,
  M7 as IconRecycle,
  b7 as IconRocket,
  H7 as IconRotateScreen,
  E7 as IconSad,
  k7 as IconSearch,
  N7 as IconSecure,
  F7 as IconSettings,
  j7 as IconSettings2,
  J7 as IconShift,
  ee as IconShoppingcart,
  oe as IconSmile,
  le as IconSpeak,
  ge as IconSpeechSquare,
  de as IconSpeechSquareChat,
  me as IconSpeechSquareDouble,
  ye as IconSuitcase,
  fe as IconSun,
  Ae as IconSyringe,
  Be as IconTablet,
  Ue as IconTemple,
  Ke as IconTerminal,
  Xe as IconTextAlignCenter,
  hs as IconTextAlignJustify,
  Ze as IconTextAlignJustifyCenter,
  ns as IconTextAlignJustifyLeft,
  _s as IconTextAlignJustifyRight,
  us as IconTextAlignLeft,
  Ms as IconTextAlignRight,
  bs as IconTicket,
  Ns as IconTile,
  Hs as IconTileClose,
  Es as IconTileEdit,
  ks as IconTilePlus,
  Fs as IconTrash,
  js as IconTruck,
  Js as IconUnlocked,
  vn as IconUser,
  en as IconUserAdd,
  on as IconUserDelete,
  ln as IconUserTeam,
  Cn as IconUsers,
  zn as IconVideoCamera,
  Ln as IconVisible,
  In as IconVolumeOff,
  Rn as IconVolumeOn,
  On as IconWater,
  Pn as IconWindowFrame,
  Wn as IconWindowFull,
  qn as IconWink,
  c8 as IconWorld,
  Z as IconX,
  l as Icons,
  s8 as getIcon,
  n8 as getIconName
};
