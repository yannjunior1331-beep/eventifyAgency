(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 434923, e => {
    "use strict";
    e.s(["Credits", 0, function() {
        return console.log("%c Engineered by https://www.edoardolunardi.dev/ ", "border:1px solid #999;padding:6px 10px;border-radius:4px;font-size:12px;"), null
    }])
}, 422414, e => {
    "use strict";
    var t = e.i(271645);
    let r = "data-keyboard-focus";
    e.s(["KeyboardFocusMode", 0, function() {
        return t.useEffect(() => {
            let e = document.documentElement,
                t = t => {
                    "Tab" === t.key && e.setAttribute(r, "")
                },
                n = () => {
                    e.removeAttribute(r)
                };
            return document.addEventListener("keydown", t), document.addEventListener("pointerdown", n), () => {
                document.removeEventListener("keydown", t), document.removeEventListener("pointerdown", n)
            }
        }, []), null
    }])
}, 966584, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        n = e.i(271645),
        i = e.i(95187);
    let a = (0, i.createServerReference)("00781c4fda6f33f349ceca6554af2e59093b35acde", i.callServer, void 0, i.findSourceMapURL, "disableDraftMode");
    async function s() {
        await a(), window.location.reload()
    }
    e.s(["DisableDraftMode", 0, function() {
        let e, i, a, u, c = (0, r.c)(6),
            [o, l] = n.useState(!0),
            [d, f] = n.useTransition();
        if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                window !== window.parent ? l(!1) : l(!0)
            }, i = [], c[0] = e, c[1] = i) : (e = c[0], i = c[1]), n.useEffect(e, i), !o) return null;
        c[2] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
            f(s)
        }, c[2] = a) : a = c[2];
        let m = d ? "Disabling draft mode..." : "Disable draft mode";
        return c[3] !== d || c[4] !== m ? (u = (0, t.jsx)("button", {
            disabled: d,
            type: "button",
            onClick: a,
            className: "fixed inset-x-0 bottom-0 z-9999 cursor-pointer bg-black p-8 text-center font-semibold text-white uppercase",
            children: m
        }), c[3] = d, c[4] = m, c[5] = u) : u = c[5], u
    }], 966584)
}, 347073, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        n = e.i(255667),
        i = e.i(271645),
        a = e.i(88771),
        s = e.i(33323);

    function u(e) {
        return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2
    }
    e.s(["Lenis", 0, function(e) {
        let c, o, l, d, f, m, b, p, h, y, v, g = (0, r.c)(20);
        g[0] !== e ? ({
            children: c,
            options: o,
            ...l
        } = e, g[0] = e, g[1] = c, g[2] = o, g[3] = l) : (c = g[1], o = g[2], l = g[3]);
        let {
            markSiteIntroComplete: _
        } = (0, s.useSiteIntro)(), j = (0, a.usePrefersReducedMotion)();
        return g[4] !== _ || g[5] !== j ? (d = () => {
            j && _()
        }, f = [j, _], g[4] = _, g[5] = j, g[6] = d, g[7] = f) : (d = g[6], f = g[7]), i.useLayoutEffect(d, f), g[8] !== _ || g[9] !== j ? (m = () => {
            if (j) return;
            let e = window.setTimeout(_, 240);
            return () => window.clearTimeout(e)
        }, b = [j, _], g[8] = _, g[9] = j, g[10] = m, g[11] = b) : (m = g[10], b = g[11]), i.useEffect(m, b), g[12] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("div", {
            "aria-hidden": "true",
            className: "pointer-events-none fixed inset-0 z-[9999] animate-site-intro-out bg-[#0e0e0e] motion-reduce:hidden"
        }), g[12] = p) : p = g[12], g[13] === Symbol.for("react.memo_cache_sentinel") ? (h = {
            duration: 1.2,
            easing: u
        }, g[13] = h) : h = g[13], g[14] !== o ? (y = {
            anchors: h,
            ...o
        }, g[14] = o, g[15] = y) : y = g[15], g[16] !== c || g[17] !== l || g[18] !== y ? (v = (0, t.jsxs)(t.Fragment, {
            children: [p, (0, t.jsx)(n.ReactLenis, {
                root: !0,
                options: y,
                ...l,
                children: c
            })]
        }), g[16] = c, g[17] = l, g[18] = y, g[19] = v) : v = g[19], v
    }])
}, 491538, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        n = e.i(271645),
        i = e.i(648070),
        a = e.i(513565);

    function s({
        children: e,
        features: r,
        strict: c = !1
    }) {
        let [, o] = (0, n.useState)(!u(r)), l = (0, n.useRef)(void 0);
        if (!u(r)) {
            let {
                renderer: e,
                ...t
            } = r;
            l.current = e, (0, a.loadFeatures)(t)
        }
        return (0, n.useEffect)(() => {
            u(r) && r().then(({
                renderer: e,
                ...t
            }) => {
                (0, a.loadFeatures)(t), l.current = e, o(!0)
            })
        }, []), (0, t.jsx)(i.LazyContext.Provider, {
            value: {
                renderer: l.current,
                strict: c
            },
            children: e
        })
    }

    function u(e) {
        return "function" == typeof e
    }
    let c = e.A(889242).then(e => e.default),
        o = () => c;
    e.s(["MotionProvider", 0, function(e) {
        let n, i = (0, r.c)(2),
            {
                children: a
            } = e;
        return i[0] !== a ? (n = (0, t.jsx)(s, {
            features: o,
            strict: !0,
            children: a
        }), i[0] = a, i[1] = n) : n = i[1], n
    }], 491538)
}, 889242, e => {
    e.v(t => Promise.all(["static/immutable/chunks/3huy59qt2xadh.js", "static/immutable/chunks/2tx5uh07-wn5t.js", "static/immutable/chunks/1-njmvei0chsh.js"].map(t => e.l(t))).then(() => t(350452)))
}, 774595, e => {
    e.v(t => Promise.all(["static/immutable/chunks/2d2_6bl1_8uie.js", "static/immutable/chunks/0ytncv634v-f8.js", "static/immutable/chunks/3bxojcu-ebrgb.js"].map(t => e.l(t))).then(() => t(895628)))
}, 896535, e => {
    e.v(t => Promise.all(["static/immutable/chunks/1emfh9pirzre8.js", "static/immutable/chunks/3d6yszf2dqpp9.js", "static/immutable/chunks/3bxojcu-ebrgb.js", "static/immutable/chunks/38p1ts7zzakt2.js", "static/immutable/chunks/1vc7ewan4wrv-.js", "static/immutable/chunks/0ze9k8o59xfwx.js", "static/immutable/chunks/1-njmvei0chsh.js", "static/immutable/chunks/3d3az5od0r_pw.js", "static/immutable/chunks/2tx5uh07-wn5t.js"].map(t => e.l(t))).then(() => t(651675)))
}, 115910, e => {
    "use strict";
    let t = (0, e.i(770703).default)(() => e.A(896535), {
        ssr: !1
    });
    e.s(["VisualEditing", 0, t])
}, 95187, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        callServer: function() {
            return a.callServer
        },
        createServerReference: function() {
            return u.createServerReference
        },
        findSourceMapURL: function() {
            return s.findSourceMapURL
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(132120),
        s = e.r(92245),
        u = e.r(235326)
}, 808341, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return s
        },
        requestIdleCallback: function() {
            return a
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        s = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 519083, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        ESCAPE_REGEX: function() {
            return s
        },
        htmlEscapeAttributeString: function() {
            return l
        },
        htmlEscapeJsonString: function() {
            return o
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        s = /[&><\u2028\u2029]/g,
        u = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;"
        },
        c = /[&"'<>]/g;

    function o(e) {
        return e.replace(s, e => a[e])
    }

    function l(e) {
        return e.replace(c, e => u[e])
    }
}, 479520, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return _
        },
        handleClientScriptLoad: function() {
            return y
        },
        initScriptLoader: function() {
            return v
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(555682),
        s = e.r(190809),
        u = e.r(843476),
        c = a._(e.r(174080)),
        o = s._(e.r(271645)),
        l = e.r(742732),
        d = e.r(922737),
        f = e.r(808341),
        m = e.r(519083),
        b = new Map,
        p = new Set,
        h = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: i = null,
                dangerouslySetInnerHTML: a,
                children: s = "",
                strategy: u = "afterInteractive",
                onError: o,
                stylesheets: l
            } = e, f = r || t;
            if (f && p.has(f)) return;
            if (b.has(t)) {
                p.add(f), b.get(t).then(n, o);
                return
            }
            let m = () => {
                    i && i(), p.add(f)
                },
                h = document.createElement("script"),
                y = new Promise((e, t) => {
                    h.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), m()
                    }), h.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    o && o(e)
                });
            a ? (h.innerHTML = a.__html || "", m()) : s ? (h.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : "", m()) : t && (h.src = t, b.set(t, y)), (0, d.setAttributesFromProps)(h, e), "worker" === u && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", u), l && (e => {
                if (c.default.preinit) return e.forEach(e => {
                    c.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(l), document.body.appendChild(h)
        };

    function y(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, f.requestIdleCallback)(() => h(e))
        }) : h(e)
    }

    function v(e) {
        e.forEach(y), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            p.add(t)
        })
    }

    function g(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: i = null,
            strategy: a = "afterInteractive",
            onError: s,
            stylesheets: d,
            ...b
        } = e, {
            updateScripts: y,
            scripts: v,
            getIsSsr: g,
            appDir: _,
            nonce: j
        } = (0, o.useContext)(l.HeadManagerContext);
        j = b.nonce || j;
        let w = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
            let e = t || r;
            w.current || (i && e && p.has(e) && i(), w.current = !0)
        }, [i, t, r]);
        let x = (0, o.useRef)(!1);
        if ((0, o.useEffect)(() => {
                if (!x.current) {
                    if ("afterInteractive" === a) h(e);
                    else "lazyOnload" === a && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                        (0, f.requestIdleCallback)(() => h(e))
                    }));
                    x.current = !0
                }
            }, [e, a]), ("beforeInteractive" === a || "worker" === a) && (y ? (v[a] = (v[a] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: i,
                onError: s,
                ...b,
                nonce: j
            }]), y(v)) : g && g() ? p.add(t || r) : g && !g() && h({ ...e,
                nonce: j
            })), _) {
            if (d && d.forEach(e => {
                    c.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === a)
                if (!r) return b.dangerouslySetInnerHTML && (b.children = b.dangerouslySetInnerHTML.__html, delete b.dangerouslySetInnerHTML), (0, u.jsx)("script", {
                    nonce: j,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([0,{...b,id:t}]))})`
                    }
                });
                else return c.default.preload(r, b.integrity ? {
                    as: "script",
                    integrity: b.integrity,
                    nonce: j,
                    crossOrigin: b.crossOrigin
                } : {
                    as: "script",
                    nonce: j,
                    crossOrigin: b.crossOrigin
                }), (0, u.jsx)("script", {
                    nonce: j,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([r,{...b,id:t}]))})`
                    }
                });
            "afterInteractive" === a && r && c.default.preload(r, b.integrity ? {
                as: "script",
                integrity: b.integrity,
                nonce: j,
                crossOrigin: b.crossOrigin
            } : {
                as: "script",
                nonce: j,
                crossOrigin: b.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(g, "__nextScript", {
        value: !0
    });
    let _ = g;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}]);