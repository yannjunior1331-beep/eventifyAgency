(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 506585, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(174080),
        i = e.i(601247);

    function n(e) {
        let t = "100vw",
            r = Object.entries((0, i.parseResponsiveValues)(e)).map(([e, {
                value: r,
                resolvedWidth: i
            }]) => "DEFAULT" === e ? (t = r, null) : `(min-width: ${i}) ${r}`).filter(Boolean);
        return r.length ? `${r.join(", ")}, ${t}` : t
    }
    e.s(["Image", 0, function({
        sizes: e,
        src: i,
        srcSet: o,
        priority: l,
        alt: a = "",
        loading: s = l ? "eager" : "lazy",
        decoding: u = "lazy" === s ? "async" : "auto",
        fetchPriority: c,
        ...f
    }) {
        let d = e ? n(e) : void 0;
        return l && (0, r.preload)(i, {
            as: "image",
            fetchPriority: "high",
            imageSrcSet: o,
            imageSizes: o ? d : void 0
        }), (0, t.jsx)("img", {
            loading: s,
            draggable: !1,
            decoding: u,
            alt: a,
            src: i,
            srcSet: o,
            sizes: d,
            ...f,
            fetchPriority: l ? "high" : c
        })
    }, "createResponsiveSizes", 0, n])
}, 610053, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        i = e.i(820783),
        n = e.i(560140),
        o = e.i(930551),
        l = e.i(486427),
        a = e.i(965566),
        s = e.i(271645),
        u = e.i(260830),
        c = e.i(287022);

    function f(e, t) {
        let r, i = () => {
            let {
                currentTime: i
            } = t, n = (null === i ? 0 : i.value) / 100;
            r !== n && e(n), r = n
        };
        return c.frame.preUpdate(i, !0), () => (0, c.cancelFrame)(i)
    }

    function d(e) {
        return !("u" < typeof window) && (e ? (0, o.supportsViewTimeline)() : (0, o.supportsScrollTimeline)())
    }
    var h = e.i(661327),
        m = e.i(783920),
        g = e.i(325791);
    let p = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        v = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function x(e, t, r, i) {
        let n = r[t],
            {
                length: o,
                position: l
            } = v[t],
            a = n.current,
            s = r.time;
        n.current = Math.abs(e[`scroll${l}`]), n.scrollLength = e[`scroll${o}`] - e[`client${o}`], n.offset.length = 0, n.offset[0] = 0, n.offset[1] = n.scrollLength, n.progress = (0, m.progress)(0, n.scrollLength, n.current);
        let u = i - s;
        n.velocity = u > 50 ? 0 : (0, g.velocityPerSecond)(n.current - a, u)
    }
    var w = e.i(344230),
        y = e.i(515923),
        E = e.i(476959),
        b = e.i(772846);
    let T = {
        start: 0,
        center: .5,
        end: 1
    };

    function S(e, t, r = 0) {
        let i = 0;
        if (e in T && (e = T[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? i = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? i = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? i = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (i = t * e), r + i
    }
    let A = [0, 0],
        R = [
            [0, 0],
            [1, 1]
        ],
        _ = {
            x: 0,
            y: 0
        },
        L = new WeakMap,
        M = new WeakMap,
        D = new WeakMap,
        W = new WeakMap,
        $ = new WeakMap,
        U = e => e === document.scrollingElement ? window : e;

    function P(e, {
        container: t = document.scrollingElement,
        trackContentSize: r = !1,
        ...i
    } = {}) {
        if (!t) return u.noop;
        let n = D.get(t);
        n || (n = new Set, D.set(t, n));
        let o = function(e, t, r, i = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let i = t;
                            for (; i && i !== e;) r.x.targetOffset += i.offsetLeft, r.y.targetOffset += i.offsetTop, i = i.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, i.target, r), x(e, "x", r, t), x(e, "y", r, t), r.time = t, (i.offset || i.target) && function(e, t, r) {
                        let {
                            offset: i = R
                        } = r, {
                            target: n = e,
                            axis: o = "y"
                        } = r, l = "y" === o ? "height" : "width", a = n !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                i = e;
                            for (; i && i !== t;)
                                if ((0, b.isHTMLElement)(i)) r.x += i.offsetLeft, r.y += i.offsetTop, i = i.offsetParent;
                                else if ("svg" === i.tagName) {
                                let e = i.getBoundingClientRect(),
                                    t = (i = i.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (i instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = i.getBBox();
                                r.x += e, r.y += t;
                                let n = null,
                                    o = i.parentNode;
                                for (; !n;) "svg" === o.tagName && (n = o), o = i.parentNode;
                                i = n
                            } else break;
                            return r
                        }(n, e) : _, s = n === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in n && "svg" !== n.tagName ? n.getBBox() : {
                            width: n.clientWidth,
                            height: n.clientHeight
                        }, u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let c = !t[o].interpolate,
                            f = i.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, i) {
                                let n = Array.isArray(e) ? e : A,
                                    o = 0;
                                return "number" == typeof e ? n = [e, e] : "string" == typeof e && (n = (e = e.trim()).includes(" ") ? e.split(" ") : [e, T[e] ? e : "0"]), (o = S(n[0], r, i)) - S(n[1], t)
                            }(i[e], u[l], s[l], a[o]);
                            c || r === t[o].interpolatorOffsets[e] || (c = !0), t[o].offset[e] = r
                        }
                        c && (t[o].interpolate = (0, w.interpolate)(t[o].offset, (0, y.defaultOffset)(i), {
                            clamp: !1
                        }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, E.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, r, i)
                },
                notify: () => t(r)
            }
        }(t, e, {
            time: 0,
            x: p(),
            y: p()
        }, i);
        if (n.add(o), !L.has(t)) {
            let e = () => {
                    for (let e of n) e.measure(c.frameData.timestamp);
                    c.frame.preUpdate(r)
                },
                r = () => {
                    for (let e of n) e.notify()
                },
                i = () => c.frame.read(e);
            L.set(t, i);
            let o = U(t);
            window.addEventListener("resize", i), t !== document.documentElement && M.set(t, (0, h.resize)(t, i)), o.addEventListener("scroll", i), i()
        }
        if (r && !$.has(t)) {
            let e = L.get(t),
                r = {
                    width: t.scrollWidth,
                    height: t.scrollHeight
                };
            W.set(t, r);
            let i = c.frame.read(() => {
                let i = t.scrollWidth,
                    n = t.scrollHeight;
                (r.width !== i || r.height !== n) && (e(), r.width = i, r.height = n)
            }, !0);
            $.set(t, i)
        }
        let l = L.get(t);
        return c.frame.read(l, !1, !0), () => {
            (0, c.cancelFrame)(l);
            let e = D.get(t);
            if (!e || (e.delete(o), e.size)) return;
            let r = L.get(t);
            L.delete(t), r && (U(t).removeEventListener("scroll", r), M.get(t) ? .(), window.removeEventListener("resize", r));
            let i = $.get(t);
            i && ((0, c.cancelFrame)(i), $.delete(t)), W.delete(t)
        }
    }
    let k = [
            [
                [
                    [0, 1],
                    [1, 1]
                ], "entry"
            ],
            [
                [
                    [0, 0],
                    [1, 0]
                ], "exit"
            ],
            [
                [
                    [1, 0],
                    [0, 1]
                ], "cover"
            ],
            [R, "contain"]
        ],
        j = {
            start: 0,
            end: 1
        };

    function F(e) {
        if (!e) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [t, r] of k)
            if (function(e, t) {
                    let r = function(e) {
                        if (2 !== e.length) return;
                        let t = [];
                        for (let r of e)
                            if (Array.isArray(r)) t.push(r);
                            else {
                                if ("string" != typeof r) return;
                                let e = function(e) {
                                    let t = e.trim().split(/\s+/);
                                    if (2 !== t.length) return;
                                    let r = j[t[0]],
                                        i = j[t[1]];
                                    if (void 0 !== r && void 0 !== i) return [r, i]
                                }(r);
                                if (!e) return;
                                t.push(e)
                            }
                        return t
                    }(e);
                    if (!r) return !1;
                    for (let e = 0; e < 2; e++) {
                        let i = r[e],
                            n = t[e];
                        if (i[0] !== n[0] || i[1] !== n[1]) return !1
                    }
                    return !0
                }(e, t)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let O = new Map;

    function I(e) {
        let t = {
                value: 0
            },
            r = P(r => {
                t.value = 100 * r[e.axis].progress
            }, e);
        return {
            currentTime: t,
            cancel: r
        }
    }

    function H({
        source: e,
        container: t,
        ...r
    }) {
        let {
            axis: i
        } = r;
        e && (t = e);
        let n = O.get(t);
        n || (n = new Map, O.set(t, n));
        let o = r.target ? ? "self",
            l = n.get(o);
        l || (l = {}, n.set(o, l));
        let a = i + (r.offset ? ? []).join(",");
        return l[a] || (r.target && d(r.target) ? F(r.offset) ? l[a] = new ViewTimeline({
            subject: r.target,
            axis: i
        }) : l[a] = I({
            container: t,
            ...r
        }) : d() ? l[a] = new ScrollTimeline({
            source: t,
            axis: i
        }) : l[a] = I({
            container: t,
            ...r
        })), l[a]
    }

    function N(e, {
        axis: t = "y",
        container: r = document.scrollingElement,
        ...i
    } = {}) {
        let n, o, l;
        if (!r) return u.noop;
        let a = {
            axis: t,
            container: r,
            ...i
        };
        return "function" == typeof e ? function(e, t) {
            return 2 === e.length || t && (t.target || t.offset) ? P(r => {
                e(r[t.axis].progress, r)
            }, t) : f(e, H(t))
        }(e, a) : (n = H(a), o = a.target ? F(a.offset) : void 0, l = a.target ? d(a.target) && !!o : d(), e.attachTimeline({
            timeline: l ? n : void 0,
            ...o && l && {
                rangeStart: o.rangeStart,
                rangeEnd: o.rangeEnd
            },
            observe: e => (e.pause(), f(t => {
                e.time = e.iterationDuration * t
            }, n))
        }))
    }
    var V = e.i(947414),
        z = e.i(674008);
    let C = () => ({
            scrollX: (0, l.motionValue)(0),
            scrollY: (0, l.motionValue)(0),
            scrollXProgress: (0, l.motionValue)(0),
            scrollYProgress: (0, l.motionValue)(0)
        }),
        X = e => !!e && !e.current;

    function B(e, t, r, i) {
        return {
            factory: o => {
                let l, a = () => {
                    X(r) || X(i) ? n.microtask.read(a) : l = N(o, { ...t,
                        axis: e,
                        container: r ? .current || void 0,
                        target: i ? .current || void 0
                    })
                };
                return n.microtask.read(a), () => {
                    (0, n.cancelMicrotask)(a), l ? .()
                }
            },
            times: [0, 1],
            keyframes: [0, 1],
            ease: e => e,
            duration: 1
        }
    }
    var G = e.i(895420),
        Y = e.i(642623),
        q = e.i(801335),
        K = e.i(112726),
        J = e.i(601247);

    function Q(e) {
        let t = e.trim();
        return /^\d+(\.\d+)?$/.test(t) ? `${t}px` : t
    }

    function Z(e) {
        return `calc(var(--parallax-overflow) * ${2*e-1})`
    }
    e.s(["InnerParallax", 0, function(e) {
        let l, u, c, f, d, h, m, g, p, v, x, w, y, E = (0, r.c)(26);
        E[0] !== e ? ({
            overflow: f,
            direction: m,
            className: u,
            ref: c,
            children: l,
            style: h,
            ...d
        } = e, E[0] = e, E[1] = l, E[2] = u, E[3] = c, E[4] = f, E[5] = d, E[6] = h, E[7] = m) : (l = E[1], u = E[2], c = E[3], f = E[4], d = E[5], h = E[6], m = E[7]);
        let b = void 0 === m ? "y" : m,
            T = s.useRef(null),
            {
                styles: S,
                className: A
            } = function(e) {
                let t = "number" == typeof e ? `${e}px` : e,
                    r = (0, J.parseResponsiveValues)(t),
                    i = Object.keys(K.screens),
                    n = {},
                    o = Q(r.DEFAULT ? .value ? ? t);
                n["--parallax-overflow-DEFAULT"] = o;
                let l = o;
                for (let e of i) {
                    let t = Q(r[e] ? .value || l);
                    n[`--parallax-overflow-${e}`] = t, l = t
                }
                return {
                    styles: n,
                    className: ["[--parallax-overflow:var(--parallax-overflow-DEFAULT)]", "sm:[--parallax-overflow:var(--parallax-overflow-sm)]", "md:[--parallax-overflow:var(--parallax-overflow-md)]", "lg:[--parallax-overflow:var(--parallax-overflow-lg)]", "xl:[--parallax-overflow:var(--parallax-overflow-xl)]", "2xl:[--parallax-overflow:var(--parallax-overflow-2xl)]"]
                }
            }(f);
        E[8] === Symbol.for("react.memo_cache_sentinel") ? (g = {
            target: T,
            offset: ["start end", "end start"]
        }, E[8] = g) : g = E[8];
        let {
            scrollYProgress: R
        } = function({
            container: e,
            target: t,
            ...r
        } = {}) {
            var i;
            let l = (0, V.useConstant)(C);
            i = r.offset, !("u" < typeof window) && (t ? (0, o.supportsViewTimeline)() && !!F(i) : (0, o.supportsScrollTimeline)()) && (l.scrollXProgress.accelerate = B("x", r, e, t), l.scrollYProgress.accelerate = B("y", r, e, t));
            let u = (0, s.useRef)(null),
                c = (0, s.useRef)(!1),
                f = (0, s.useCallback)(() => (u.current = N((e, {
                    x: t,
                    y: r
                }) => {
                    l.scrollX.set(t.current), l.scrollXProgress.set(t.progress), l.scrollY.set(r.current), l.scrollYProgress.set(r.progress)
                }, { ...r,
                    container: e ? .current || void 0,
                    target: t ? .current || void 0
                }), () => {
                    u.current ? .()
                }), [e, t, JSON.stringify(r.offset)]);
            return (0, z.useIsomorphicLayoutEffect)(() => {
                if (c.current = !1, !(X(e) || X(t))) return f();
                c.current = !0
            }, [f]), (0, s.useEffect)(() => {
                let r;
                if (!c.current) return;
                let i = () => {
                    let i = X(e),
                        n = X(t);
                    (0, a.invariant)(!i, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, a.invariant)(!n, "Target ref is defined but not hydrated", "use-scroll-ref"), i || n || (r = f())
                };
                return n.microtask.read(i), () => {
                    (0, n.cancelMicrotask)(i), r ? .()
                }
            }, [f]), l
        }(g), _ = (0, G.useTransform)(R, Z);
        E[9] !== b || E[10] !== _ ? (p = "x" === b ? {
            width: "calc(100% + (2 * var(--parallax-overflow)))",
            left: "calc(-1 * var(--parallax-overflow))",
            x: _
        } : {
            height: "calc(100% + (2 * var(--parallax-overflow)))",
            top: "calc(-1 * var(--parallax-overflow))",
            y: _
        }, E[9] = b, E[10] = _, E[11] = p) : p = E[11];
        let L = p;
        E[12] !== c ? (v = (0, i.composeRefs)(c, T), E[12] = c, E[13] = v) : v = E[13];
        let M = (0, q.cx)(["relative overflow-hidden", u, ...A]);
        return E[14] !== S || E[15] !== h ? (x = { ...S,
            ...h
        }, E[14] = S, E[15] = h, E[16] = x) : x = E[16], E[17] !== l || E[18] !== L ? (w = (0, t.jsx)(Y.div, {
            style: L,
            className: "absolute inset-0",
            children: l
        }), E[17] = l, E[18] = L, E[19] = w) : w = E[19], E[20] !== d || E[21] !== v || E[22] !== M || E[23] !== x || E[24] !== w ? (y = (0, t.jsx)("div", {
            ref: v,
            className: M,
            style: x,
            ...d,
            children: w
        }), E[20] = d, E[21] = v, E[22] = M, E[23] = x, E[24] = w, E[25] = y) : y = E[25], y
    }], 610053)
}, 601247, e => {
    "use strict";
    var t = e.i(112726);

    function r(e) {
        return Number.parseFloat(e.replace("rem", ""))
    }
    e.s(["parseResponsiveValues", 0, function(e) {
        let i = {},
            n = Object.keys(t.screens).join("|"),
            o = RegExp(`^(${n}):(.+)$`);
        for (let r of e.split(/\s+/)) {
            let e = r.match(o);
            if (e) {
                let [, r, n] = e;
                n && r && (i[r] = {
                    value: n,
                    resolvedWidth: t.screens[r]
                })
            } else i.DEFAULT = {
                value: r
            }
        }
        return Object.fromEntries(Object.entries(i).sort(([, {
            resolvedWidth: e
        }], [, {
            resolvedWidth: t
        }]) => e || t ? e ? t ? r(t) - r(e) : -1 : 1 : 0))
    }])
}, 181028, 2379, e => {
    "use strict";
    e.s(["DEFAULT_MAX_HEIGHT", 0, 2048, "DEFAULT_MAX_WIDTH", 0, 2048, "DEFAULT_SOURCE_WIDTHS", 0, [600, 1024, 1440, 2048], "POSTER_PLAYER_MAX_EDGE", 0, 960, "POSTER_PREVIEW_MAX_EDGE", 0, 160], 181028);
    var t = e.i(112726),
        r = e.i(601247);

    function i(e) {
        if ("number" == typeof e) return e;
        let [t = 1, r = 1] = e.split(/[:/]/).map(Number);
        return t / r
    }
    e.s(["createResponsiveRatios", 0, function(e) {
        let n = (0, r.parseResponsiveValues)(String(e)),
            o = Object.keys(t.screens),
            l = {},
            a = i(n.DEFAULT ? .value);
        l["--mx-ratio-DEFAULT"] = String(a);
        let s = a;
        for (let e of o) {
            let t = i(n[e] ? .value || s);
            l[`--mx-ratio-${e}`] = String(t), s = t
        }
        return {
            styles: l,
            className: ["aspect-[var(--mx-ratio)]", "[--mx-ratio:var(--mx-ratio-DEFAULT)]", "sm:[--mx-ratio:var(--mx-ratio-sm)]", "md:[--mx-ratio:var(--mx-ratio-md)]", "lg:[--mx-ratio:var(--mx-ratio-lg)]", "xl:[--mx-ratio:var(--mx-ratio-xl)]", "2xl:[--mx-ratio:var(--mx-ratio-2xl)]"]
        }
    }, "parseAspectRatio", 0, i], 2379)
}, 919848, 574660, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        i = e.i(820783),
        n = e.i(271645),
        o = e.i(506585),
        l = e.i(601247),
        a = e.i(273299),
        s = e.i(46995),
        u = e.i(181028);
    let c = (0, a.createImageUrlBuilder)({
            projectId: "h1ekyplu",
            dataset: "production"
        }),
        f = {
            auto: "format",
            quality: 85,
            maxWidth: u.DEFAULT_MAX_WIDTH,
            maxHeight: u.DEFAULT_MAX_HEIGHT,
            sourceWidths: u.DEFAULT_SOURCE_WIDTHS
        };

    function d({
        lqip: e
    }) {
        return e ? {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover"
        } : null
    }

    function h(e, t = {}) {
        let {
            width: r,
            height: i,
            aspectRatio: n,
            maxWidth: o,
            maxHeight: l
        } = t;
        return function(e, t = {}) {
            let {
                maxWidth: r = u.DEFAULT_MAX_WIDTH,
                maxHeight: i = u.DEFAULT_MAX_HEIGHT
            } = t, n = e.width, o = e.height;
            if (r && n > r) {
                let e = r / n;
                n = r, o = Math.round(o * e)
            }
            if (i && o > i) {
                let e = i / o;
                o = i, n = Math.round(n * e)
            }
            return {
                width: n,
                height: o
            }
        }(function(e, t = {}) {
            let {
                crop: r,
                aspectRatio: i,
                height: n,
                width: o
            } = t, l = function(e, t = {}) {
                if (!e.dimensions) throw Error("Dimensions are missing");
                let {
                    width: r,
                    height: i
                } = function(e, t = {}) {
                    let {
                        crop: r
                    } = t, {
                        width: i,
                        height: n
                    } = e;
                    if (!i || !n) return {
                        width: void 0,
                        height: void 0
                    };
                    if (!r) return {
                        width: i,
                        height: n
                    };
                    let {
                        left: o = 0,
                        top: l = 0,
                        right: a = 0,
                        bottom: s = 0
                    } = r, u = i - o * i - a * i, c = n - l * n - s * n;
                    return {
                        width: u > 0 ? u : i,
                        height: c > 0 ? c : n
                    }
                }(e.dimensions, t);
                return r && i ? r / i : void 0
            }(e, {
                crop: r
            }), a = e.dimensions ? .width ? ? 1 / 0;
            return function e({
                width: t,
                height: r
            }, i, n) {
                if (t && r) return {
                    width: t,
                    height: r
                };
                if (t && !r) return i ? {
                    width: t,
                    height: Math.round(t / i)
                } : {
                    width: t,
                    height: t
                };
                if (r && !t) return i ? {
                    width: Math.round(r * i),
                    height: r
                } : {
                    width: r,
                    height: r
                };
                if (!n) throw Error("Unable to calculate dimensions. Provide a fallbackSize.");
                return e(n, i)
            }({
                width: o,
                height: n
            }, i ? ? l, {
                width: Math.min(u.DEFAULT_SOURCE_WIDTHS[u.DEFAULT_SOURCE_WIDTHS.length - 1], a)
            })
        }(e, {
            width: r,
            height: i,
            aspectRatio: n,
            crop: e.crop
        }), {
            maxWidth: o,
            maxHeight: l
        })
    }

    function m(e, t = {}) {
        let {
            width: r,
            height: i,
            aspectRatio: n,
            ...o
        } = t, l = (0, s.run)(() => e ? .crop ? "crop" : t.fit ? t.fit : r && i || n ? "crop" : void 0), a = h(e, {
            width: r,
            height: i,
            aspectRatio: n
        });
        return function(e, t = {}) {
            return c.withOptions({ ...f,
                ...t
            }).image(e).url()
        }(e, { ...o,
            fit: l,
            width: a.width,
            height: a.height
        })
    }

    function g(e, t = {}) {
        let {
            sourceWidths: r = u.DEFAULT_SOURCE_WIDTHS,
            ...i
        } = t, n = e.dimensions ? .width;
        return (0, s.run)(() => i.width || i.height || n && n < r[0] ? [2, 3].map(t => {
            let r = m(e, { ...i,
                dpr: t
            });
            return `${r} ${t}x`
        }) : (function(e, t) {
            if (!t) return e;
            let r = Math.min(t, e.at(-1) ? ? t);
            return [...e.filter(e => e < r), r]
        })(r, n).map(t => {
            let r = m(e, { ...i,
                height: void 0,
                width: t
            });
            return `${r} ${t}w`
        })).join(", ")
    }
    e.s(["getImageDimensions", 0, h, "getImageSrc", 0, m, "getImageSrcSet", 0, g, "getLqipBackgroundStyle", 0, d], 574660);
    var p = e.i(2379),
        v = e.i(801335);

    function x(e) {
        let {
            bp: r,
            ...i
        } = e;
        return (0, t.jsx)("source", { ...i
        }, r)
    }

    function w(e) {
        return !!e
    }
    e.s(["SanityImage", 0, function(e) {
        let a, u, c, f, y, E, b, T, S, A, R, _, L, M, D, W, $, U, P, k, j, F, O, I, H, N = (0, r.c)(81);
        N[0] !== e ? ({
            image: b,
            aspectRatio: c,
            builderOptions: f,
            style: _,
            alt: u,
            sizes: R,
            onLoad: S,
            width: L,
            height: E,
            noPlaceholder: T,
            className: y,
            ref: a,
            ...A
        } = e, N[0] = e, N[1] = a, N[2] = u, N[3] = c, N[4] = f, N[5] = y, N[6] = E, N[7] = b, N[8] = T, N[9] = S, N[10] = A, N[11] = R, N[12] = _, N[13] = L) : (a = N[1], u = N[2], c = N[3], f = N[4], y = N[5], E = N[6], b = N[7], T = N[8], S = N[9], A = N[10], R = N[11], _ = N[12], L = N[13]);
        let [V, z, C] = function() {
            let e, t, i, o, l = (0, r.c)(5),
                [a, s] = n.useState(!1),
                u = n.useRef(null);
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                s(!0)
            }, l[0] = e) : e = l[0];
            let c = e;
            return l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                u.current ? .complete && c()
            }, i = [c], l[1] = t, l[2] = i) : (t = l[1], i = l[2]), n.useEffect(t, i), l[3] !== a ? (o = [u, a, c], l[3] = a, l[4] = o) : o = l[4], o
        }();
        N[14] !== a || N[15] !== V ? (M = (0, i.composeRefs)(V, a), N[14] = a, N[15] = V, N[16] = M) : M = N[16];
        let X = M;
        N[17] !== C || N[18] !== S ? (D = e => {
            C(), S ? .(e)
        }, N[17] = C, N[18] = S, N[19] = D) : D = N[19];
        let B = D;
        if (!b ? ._id) return null;
        if (N[20] !== u || N[21] !== c || N[22] !== f || N[23] !== z || N[24] !== E || N[25] !== b || N[26] !== T || N[27] !== R || N[28] !== _ || N[29] !== L) {
            let e, t, r, i;
            N[37] !== c || N[38] !== f || N[39] !== E || N[40] !== b || N[41] !== R || N[42] !== L ? (e = () => {
                if (c) return Object.entries((0, l.parseResponsiveValues)(String(c))).map(e => {
                    let [t, r] = e, {
                        value: i,
                        resolvedWidth: n
                    } = r;
                    if (!n) return null;
                    let l = {
                            width: L ? Number(L) : void 0,
                            height: E ? Number(E) : void 0,
                            aspectRatio: i ? (0, p.parseAspectRatio)(i) : void 0,
                            ...f
                        },
                        a = h(b, l);
                    return {
                        bp: t,
                        srcSet: g(b, l),
                        sizes: R ? (0, o.createResponsiveSizes)(R) : void 0,
                        width: a.width,
                        height: a.height,
                        media: `(min-width: ${n})`
                    }
                }).filter(w)
            }, N[37] = c, N[38] = f, N[39] = E, N[40] = b, N[41] = R, N[42] = L, N[43] = e) : e = N[43];
            let n = (0, s.run)(e);
            if (N[44] !== c || N[45] !== f || N[46] !== E || N[47] !== b || N[48] !== L) {
                let e;
                N[52] !== c ? (e = () => {
                    if (c) {
                        let e = (0, l.parseResponsiveValues)(String(c)).DEFAULT.value;
                        return e ? (0, p.parseAspectRatio)(e) : void 0
                    }
                }, N[52] = c, N[53] = e) : e = N[53];
                let r = (0, s.run)(e),
                    i = {
                        width: L ? Number(L) : void 0,
                        height: E ? Number(E) : void 0,
                        aspectRatio: r,
                        ...f
                    };
                $ = h(b, i), P = m(b, i), t = g(b, i), N[44] = c, N[45] = f, N[46] = E, N[47] = b, N[48] = L, N[49] = $, N[50] = P, N[51] = t
            } else $ = N[49], P = N[50], t = N[51];
            k = t, N[54] !== z || N[55] !== b || N[56] !== T ? (r = z || T ? void 0 : d(b), N[54] = z, N[55] = b, N[56] = T, N[57] = r) : r = N[57];
            let a = r;
            W = u ? ? b.altText ? ? b.description ? ? b.title ? ? "";
            let v = L ? `${L}px` : "auto",
                y = E ? `${E}px` : "auto";
            N[58] !== a || N[59] !== _ || N[60] !== v || N[61] !== y ? (i = {
                "--desired-width": v,
                "--desired-height": y,
                ...a,
                ..._
            }, N[58] = a, N[59] = _, N[60] = v, N[61] = y, N[62] = i) : i = N[62], U = i, j = "contents", F = n ? .map(x), N[20] = u, N[21] = c, N[22] = f, N[23] = z, N[24] = E, N[25] = b, N[26] = T, N[27] = R, N[28] = _, N[29] = L, N[30] = W, N[31] = $, N[32] = U, N[33] = P, N[34] = k, N[35] = j, N[36] = F
        } else W = N[30], $ = N[31], U = N[32], P = N[33], k = N[34], j = N[35], F = N[36];
        let G = $.width,
            Y = $.height;
        return N[63] !== y ? (O = (0, v.cx)("h-(--desired-height,auto) w-(--desired-width,auto) max-w-full", y), N[63] = y, N[64] = O) : O = N[64], N[65] !== W || N[66] !== $.height || N[67] !== $.width || N[68] !== B || N[69] !== U || N[70] !== X || N[71] !== A || N[72] !== R || N[73] !== P || N[74] !== k || N[75] !== O ? (I = (0, t.jsx)(o.Image, { ...A,
            ref: X,
            onLoad: B,
            src: P,
            sizes: R,
            srcSet: k,
            alt: W,
            width: G,
            height: Y,
            style: U,
            className: O
        }), N[65] = W, N[66] = $.height, N[67] = $.width, N[68] = B, N[69] = U, N[70] = X, N[71] = A, N[72] = R, N[73] = P, N[74] = k, N[75] = O, N[76] = I) : I = N[76], N[77] !== j || N[78] !== F || N[79] !== I ? (H = (0, t.jsxs)("picture", {
            className: j,
            children: [F, I]
        }), N[77] = j, N[78] = F, N[79] = I, N[80] = H) : H = N[80], H
    }], 919848)
}, 700481, 627590, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        i = e.i(770703),
        n = e.i(271645);

    function o(e, t) {
        if (e >= 1) {
            let r = Math.max(1, Math.round(t / e));
            return {
                width: t,
                height: r
            }
        }
        return {
            width: Math.max(1, Math.round(t * e)),
            height: t
        }
    }

    function l({
        playbackId: e,
        width: t,
        height: r,
        animated: i,
        time: n = 1,
        fitMode: o = "preserve"
    }) {
        let a = `https://image.mux.com/${e}/${i?"animated.gif":"thumbnail.webp"}?time=${n}&fit_mode=${o}`;
        return t && (a += `&width=${t}`), r && (a += `&height=${r}`), a
    }
    e.s(["buildPosterUrl", 0, l, "muxPosterDimensionsForPreview", 0, o], 627590);
    var a = e.i(181028),
        s = e.i(2379),
        u = e.i(801335),
        c = e.i(46995);
    let f = (0, i.default)(() => e.A(974273).then(e => e.MuxPlayer), {
        loadableGenerated: {
            modules: [490090]
        }
    });
    e.s(["SanityVideo", 0, function(e) {
        let i, d, h, m, g, p, v, x, w, y, E, b, T, S, A, R, _, L, M, D, W, $, U, P, k = (0, r.c)(53);
        if (k[0] !== e) {
            let {
                video: t,
                aspectRatio: r,
                width: n,
                height: o,
                style: l,
                className: a,
                thumbnailTime: s,
                poster: u,
                animatedPoster: c,
                disablePoster: f,
                objectFit: T,
                objectPosition: S,
                ...A
            } = e;
            E = t, d = r, b = n, m = o, v = l, h = a, g = u, i = c, x = f, w = T, y = S, p = A, k[0] = e, k[1] = i, k[2] = d, k[3] = h, k[4] = m, k[5] = g, k[6] = p, k[7] = v, k[8] = x, k[9] = w, k[10] = y, k[11] = E, k[12] = b
        } else i = k[1], d = k[2], h = k[3], m = k[4], g = k[5], p = k[6], v = k[7], x = k[8], w = k[9], y = k[10], E = k[11], b = k[12];
        let j = void 0 !== x && x,
            F = void 0 === w ? "cover" : w,
            O = void 0 === y ? "center" : y;
        if (k[13] !== i || k[14] !== d || k[15] !== h || k[16] !== j || k[17] !== m || k[18] !== F || k[19] !== O || k[20] !== g || k[21] !== v || k[22] !== E || k[23] !== b) {
            M = Symbol.for("react.early_return_sentinel");
            e: {
                let e, {
                    playbackId: t,
                    dimensions: r,
                    thumbTime: n
                } = E ? ? {};
                if (T = t, D = n, !T) {
                    M = null;
                    break e
                }
                let f = b ? ? r ? .width,
                    p = (b && m ? b / m : void 0) ? ? d ? ? r ? .aspectRatio ? ? 1.7777777777777777,
                    x = (0, s.parseAspectRatio)(p),
                    w = (0, s.createResponsiveRatios)(p);R = (0, c.run)(() => j || !T ? null : l({
                    playbackId: T,
                    time: D,
                    animated: i,
                    ...o(x, a.POSTER_PREVIEW_MAX_EDGE)
                })),
                S = (0, c.run)(() => {
                    if (!j && T) return g || l({
                        playbackId: T,
                        time: D,
                        animated: i,
                        ...o(x, a.POSTER_PLAYER_MAX_EDGE)
                    })
                });
                let y = { ...w.styles,
                        "--desired-width": m ? "auto" : `${f}px`,
                        "--desired-height": m ? `${m}px` : "auto",
                        ...v
                    },
                    W = R ? `url(${R})` : void 0;k[32] !== F || k[33] !== O || k[34] !== W ? (e = {
                    filter: "blur(20px)",
                    backgroundImage: W,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: F,
                    backgroundPosition: O
                }, k[32] = F, k[33] = O, k[34] = W, k[35] = e) : e = k[35],
                A = e,
                _ = y,
                L = (0, u.cx)("relative isolate h-(--desired-height,auto) w-(--desired-width,auto) max-w-full overflow-hidden", w.className, h)
            }
            k[13] = i, k[14] = d, k[15] = h, k[16] = j, k[17] = m, k[18] = F, k[19] = O, k[20] = g, k[21] = v, k[22] = E, k[23] = b, k[24] = T, k[25] = S, k[26] = A, k[27] = R, k[28] = _, k[29] = L, k[30] = M, k[31] = D
        } else T = k[24], S = k[25], A = k[26], R = k[27], _ = k[28], L = k[29], M = k[30], D = k[31];
        return M !== Symbol.for("react.early_return_sentinel") ? M : (k[36] !== A || k[37] !== R ? (W = R ? (0, t.jsx)("div", {
            style: A,
            className: "pointer-events-none absolute inset-0 -z-1 size-full"
        }) : null, k[36] = A, k[37] = R, k[38] = W) : W = k[38], k[39] !== F || k[40] !== O || k[41] !== T || k[42] !== S || k[43] !== p || k[44] !== D ? ($ = (0, t.jsx)(f, {
            playbackId: T,
            thumbnailTime: D,
            objectFit: F,
            objectPosition: O,
            poster: S,
            placeholder: S,
            className: "absolute inset-0 z-10 size-full",
            ...p
        }), k[39] = F, k[40] = O, k[41] = T, k[42] = S, k[43] = p, k[44] = D, k[45] = $) : $ = k[45], k[46] !== W || k[47] !== $ ? (U = (0, t.jsx)(n.Suspense, {
            fallback: W,
            children: $
        }), k[46] = W, k[47] = $, k[48] = U) : U = k[48], k[49] !== _ || k[50] !== L || k[51] !== U ? (P = (0, t.jsx)("div", {
            style: _,
            className: L,
            children: U
        }), k[49] = _, k[50] = L, k[51] = U, k[52] = P) : P = k[52], P)
    }], 700481)
}, 46995, e => {
    "use strict";
    e.s(["capitalize", 0, function(e) {
        return e ? e.charAt(0).toUpperCase() + e.slice(1) : e
    }, "run", 0, function(e) {
        return e()
    }])
}, 887652, e => {
    "use strict";
    var t = e.i(486427),
        r = e.i(271645),
        i = e.i(737806),
        n = e.i(947414);
    e.s(["useMotionValue", 0, function(e) {
        let o = (0, n.useConstant)(() => (0, t.motionValue)(e)),
            {
                isStatic: l
            } = (0, r.useContext)(i.MotionConfigContext);
        if (l) {
            let [, t] = (0, r.useState)(e);
            (0, r.useEffect)(() => o.on("change", t), [])
        }
        return o
    }])
}, 895420, e => {
    "use strict";
    var t = e.i(958866),
        r = e.i(947414),
        i = e.i(287022),
        n = e.i(674008),
        o = e.i(887652);

    function l(e, t) {
        let r = (0, o.useMotionValue)(t()),
            l = () => r.set(t());
        return l(), (0, n.useIsomorphicLayoutEffect)(() => {
            let t = () => i.frame.preRender(l, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, i.cancelFrame)(l)
            }
        }), r
    }
    var a = e.i(486427);

    function s(e, t) {
        let i = (0, r.useConstant)(() => []);
        return l(e, () => {
            i.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++) i[t] = e[t].get();
            return t(i)
        })
    }
    e.s(["useTransform", 0, function e(i, n, o, u) {
        if ("function" == typeof i) {
            let e;
            return a.collectMotionValues.current = [], i(), e = l(a.collectMotionValues.current, i), a.collectMotionValues.current = void 0, e
        }
        if (void 0 !== o && !Array.isArray(o) && "function" != typeof n) {
            var c = i,
                f = n,
                d = o,
                h = u;
            let t = (0, r.useConstant)(() => Object.keys(d)),
                l = (0, r.useConstant)(() => ({}));
            for (let r of t) l[r] = e(c, f, d[r], h);
            return l
        }
        let m = "function" == typeof n ? n : (0, t.transform)(n, o, u),
            g = Array.isArray(i) ? s(i, m) : s([i], ([e]) => m(e)),
            p = Array.isArray(i) ? void 0 : i.accelerate;
        return p && !p.isTransformed && "function" != typeof n && Array.isArray(o) && u ? .clamp !== !1 && (g.accelerate = { ...p,
            times: n,
            keyframes: o,
            isTransformed: !0,
            ...u ? .ease ? {
                ease: u.ease
            } : {}
        }), g
    }], 895420)
}, 958866, e => {
    "use strict";
    var t = e.i(344230);
    e.s(["transform", 0, function(...e) {
        let r = !Array.isArray(e[0]),
            i = r ? 0 : -1,
            n = e[0 + i],
            o = e[1 + i],
            l = e[2 + i],
            a = e[3 + i],
            s = (0, t.interpolate)(o, l, a);
        return r ? s(n) : s
    }])
}]);