(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 932733, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932);
    class n {
        constructor(e) {
            this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(e => e.finished))
        }
        getAll(e) {
            return this.animations[0][e]
        }
        setAll(e, t) {
            for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = t
        }
        attachTimeline(e) {
            let t = this.animations.map(t => t.attachTimeline(e));
            return () => {
                t.forEach((e, t) => {
                    e && e(), this.animations[t].stop()
                })
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(e) {
            this.setAll("time", e)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(e) {
            this.setAll("speed", e)
        }
        get state() {
            return this.getAll("state")
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            return s(this.animations, "duration")
        }
        get iterationDuration() {
            return s(this.animations, "iterationDuration")
        }
        runAll(e) {
            this.animations.forEach(t => t[e]())
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    }

    function s(e, t) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
            let s = e[n][t];
            null !== s && s > r && (r = s)
        }
        return r
    }
    class a extends n {
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
    }
    var u = e.i(133887),
        i = e.i(486427),
        l = e.i(528409),
        o = e.i(83411),
        c = e.i(515923),
        f = e.i(997307),
        d = e.i(721748),
        h = e.i(215932),
        m = e.i(783920),
        p = e.i(763074),
        g = e.i(965566),
        v = e.i(430151),
        b = e.i(893544);

    function y(e, t) {
        var r;
        let n;
        return (0, b.isEasingArray)(e) ? e[r = e.length, ((t - 0) % (n = r - 0) + n) % n + 0] : e
    }
    var M = e.i(749652);

    function w(e) {
        return "object" == typeof e && !Array.isArray(e)
    }

    function E(e, t, r, n) {
        return null == e ? [] : "string" == typeof e && w(t) ? (0, M.resolveElements)(e, r, n) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter(e => null != e) : [e]
    }

    function A(e, t, r, n) {
        return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? r : t.startsWith("<") ? Math.max(0, r + parseFloat(t.slice(1))) : n.get(t) ? ? e
    }
    var S = e.i(100706);

    function _(e, t) {
        return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
    }

    function O(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e)
    }

    function x(e, t) {
        return t[e] || (t[e] = []), t[e]
    }
    let C = e => "number" == typeof e,
        j = e => e.every(C);
    var D = e.i(768705),
        T = e.i(472094),
        k = e.i(372323),
        P = e.i(889026),
        R = e.i(836331),
        V = e.i(275737),
        I = e.i(386783),
        N = e.i(130162),
        B = e.i(617218);
    class L extends B.VisualElement {
        constructor() {
            super(...arguments), this.type = "object"
        }
        readValueFromInstance(e, t) {
            if (t in e) {
                let r = e[t];
                if ("string" == typeof r || "number" == typeof r) return r
            }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
            delete t.output[e]
        }
        measureInstanceViewportBox() {
            return (0, N.createBox)()
        }
        build(e, t) {
            Object.assign(e.output, t)
        }
        renderInstance(e, {
            output: t
        }) {
            Object.assign(e, t)
        }
        sortInstanceNodePosition() {
            return 0
        }
    }

    function F(e) {
        let t = {
                presenceContext: null,
                props: {},
                visualState: {
                    renderState: {
                        transform: {},
                        transformOrigin: {},
                        style: {},
                        vars: {},
                        attrs: {}
                    },
                    latestValues: {}
                }
            },
            r = (0, P.isSVGElement)(e) && !(0, R.isSVGSVGElement)(e) ? new V.SVGVisualElement(t) : new I.HTMLVisualElement(t);
        r.mount(e), T.visualElementStore.set(e, r)
    }

    function $(e) {
        let t = new L({
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    output: {}
                },
                latestValues: {}
            }
        });
        t.mount(e), T.visualElementStore.set(e, t)
    }

    function z(e, t, r, n) {
        let s = [];
        if ((0, o.isMotionValue)(e) || "number" == typeof e || "string" == typeof e && !w(t)) s.push((0, D.animateSingleValue)(e, w(t) && t.default || t, r && r.default || r));
        else {
            if (null == e) return s;
            let a = E(e, t, n),
                u = a.length;
            (0, g.invariant)(!!u, "No valid elements provided.", "no-valid-elements");
            for (let e = 0; e < u; e++) {
                let n = a[e],
                    i = n instanceof Element ? F : $;
                T.visualElementStore.has(n) || i(n);
                let l = T.visualElementStore.get(n),
                    o = { ...r
                    };
                "delay" in o && "function" == typeof o.delay && (o.delay = o.delay(e, u)), s.push(...(0, k.animateTarget)(l, { ...t,
                    transition: o
                }, {}))
            }
        }
        return s
    }
    let G = function(e = {}) {
        let {
            scope: t,
            reduceMotion: r,
            skipAnimations: n
        } = e;
        return function(e, s, b) {
            var M;
            let w, C = [],
                D = {};
            if (void 0 !== r && (D.reduceMotion = r), void 0 !== n && (D.skipAnimations = n), Array.isArray(e) && e.some(Array.isArray)) {
                let r, {
                    onComplete: n,
                    ...a
                } = s || {};
                "function" == typeof n && (w = n), M = { ...D,
                    ...a
                }, r = [], (function(e, {
                    defaultTransition: t = {},
                    ...r
                } = {}, n, s) {
                    let a = t.duration || .3,
                        i = new Map,
                        l = new Map,
                        b = {},
                        M = new Map,
                        w = 0,
                        C = 0,
                        D = 0;
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if ("string" == typeof i) {
                            M.set(i, C);
                            continue
                        }
                        if (!Array.isArray(i)) {
                            M.set(i.name, A(C, i.at, w, M));
                            continue
                        }
                        let [m, _, P = {}] = i;
                        void 0 !== P.at && (C = A(C, P.at, w, M));
                        let R = 0,
                            V = (e, r, n, i = 0, l = 0) => {
                                var o;
                                let m = Array.isArray(o = e) ? o : [o],
                                    {
                                        delay: b = 0,
                                        times: M = (0, c.defaultOffset)(m),
                                        type: w = t.type || "keyframes",
                                        repeat: E,
                                        repeatType: A,
                                        repeatDelay: _ = 0,
                                        ...O
                                    } = r,
                                    {
                                        ease: x = t.ease || "easeOut",
                                        duration: T
                                    } = r,
                                    k = "function" == typeof b ? b(i, l) : b,
                                    P = m.length,
                                    V = (0, f.isGenerator)(w) ? w : s ? .[w || "keyframes"];
                                if (P <= 2 && V) {
                                    let e = 100;
                                    2 === P && j(m) && (e = Math.abs(m[1] - m[0]));
                                    let r = { ...t,
                                        ...O
                                    };
                                    void 0 !== T && (r.duration = (0, p.secondsToMilliseconds)(T));
                                    let n = (0, d.createGeneratorEasing)(r, e, V);
                                    x = n.ease, T = n.duration
                                }
                                T ? ? (T = a);
                                let I = C + k;
                                1 === M.length && 0 === M[0] && (M[1] = 1);
                                let N = M.length - m.length;
                                if (N > 0 && (0, h.fillOffset)(M, N), 1 === m.length && m.unshift(null), E && (0, g.warning)(E < 20, `Sequence segments can't repeat ${E} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`), E && E < 20) {
                                    let e = T > 0 ? _ / T : 0;
                                    T = T * (E + 1) + _ * E;
                                    let t = [...m],
                                        r = [...M],
                                        n = [...x = Array.isArray(x) ? [...x] : [x]],
                                        s = "reverse" === A || "mirror" === A,
                                        a = t,
                                        u = n;
                                    s && (a = [...t].reverse(), "reverse" === A && (u = [...n].reverse().map(e => "function" == typeof e ? (0, v.reverseEasing)(e) : e)));
                                    for (let i = 0; i < E; i++) {
                                        let l = s && i % 2 == 0,
                                            o = l ? a : t,
                                            c = l ? u : n,
                                            f = (i + 1) * (1 + e);
                                        e > 0 && (m.push(m[m.length - 1]), M.push(f), x.push("linear")), m.push(...o);
                                        for (let e = 0; e < o.length; e++) M.push(r[e] + f), x.push(0 === e ? "linear" : y(c, e - 1))
                                    }! function(e, t, r = 0) {
                                        let n = t + 1 + t * r;
                                        for (let t = 0; t < e.length; t++) e[t] = e[t] / n
                                    }(M, E, e)
                                }
                                let B = I + T;
                                ! function(e, t, r, n, s, a) {
                                    for (let t = 0; t < e.length; t++) {
                                        let r = e[t];
                                        r.at > s && r.at < a && ((0, u.removeItem)(e, r), t--)
                                    }
                                    for (let u = 0; u < t.length; u++) e.push({
                                        value: t[u],
                                        at: (0, S.mixNumber)(s, a, n[u]),
                                        easing: y(r, u)
                                    })
                                }(n, m, x, M, I, B), R = Math.max(k + T, R), D = Math.max(B, D)
                            };
                        if ((0, o.isMotionValue)(m)) V(_, P, x("default", O(m, l)));
                        else {
                            let e = E(m, _, n, b),
                                t = e.length;
                            for (let r = 0; r < t; r++) {
                                let n = O(e[r], l);
                                for (let e in _) {
                                    var T, k;
                                    V(_[e], (T = P, k = e, T && T[k] ? { ...T,
                                        ...T[k]
                                    } : { ...T
                                    }), x(e, n), r, t)
                                }
                            }
                        }
                        w = C, C += R
                    }
                    return l.forEach((e, n) => {
                        for (let s in e) {
                            let a = e[s];
                            a.sort(_);
                            let u = [],
                                l = [],
                                o = [];
                            for (let e = 0; e < a.length; e++) {
                                let {
                                    at: t,
                                    value: r,
                                    easing: n
                                } = a[e];
                                u.push(r), l.push((0, m.progress)(0, D, t)), o.push(n || "easeOut")
                            }
                            0 !== l[0] && (l.unshift(0), u.unshift(u[0]), o.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), u.push(null)), i.has(n) || i.set(n, {
                                keyframes: {},
                                transition: {}
                            });
                            let c = i.get(n);
                            c.keyframes[s] = u;
                            let {
                                type: f,
                                ...d
                            } = t;
                            c.transition[s] = { ...d,
                                duration: D,
                                ease: o,
                                times: l,
                                ...r
                            }
                        }
                    }), i
                })(e.map(e => {
                    if (Array.isArray(e) && "function" == typeof e[0]) {
                        let t = e[0],
                            r = (0, i.motionValue)(0);
                        return (r.on("change", t), 1 === e.length) ? [r, [0, 1]] : 2 === e.length ? [r, [0, 1], e[1]] : [r, e[1], e[2]]
                    }
                    return e
                }), M, t, {
                    spring: l.spring
                }).forEach(({
                    keyframes: e,
                    transition: t
                }, n) => {
                    r.push(...z(n, e, t))
                }), C = r
            } else {
                let {
                    onComplete: r,
                    ...n
                } = b || {};
                "function" == typeof r && (w = r), C = z(e, s, { ...D,
                    ...n
                }, t)
            }
            let T = new a(C);
            return w && T.finished.then(w), t && (t.animations.push(T), T.finished.then(() => {
                (0, u.removeItem)(t.animations, T)
            })), T
        }
    }();
    var q = e.i(887652),
        U = e.i(895420),
        W = e.i(642623),
        K = e.i(271645),
        X = e.i(757506),
        H = e.i(610053),
        J = e.i(409918),
        Q = e.i(205980),
        Y = e.i(46995);
    let Z = [.79, .14, .15, .86],
        ee = {
            scaleLoss: .042,
            txPercent: 2.4,
            rotateDeg: -.35
        },
        et = {
            scaleGain: .072,
            rotateDeg: .45
        },
        er = (0, Y.run)(() => {
            let {
                scaleLoss: e,
                txPercent: t
            } = ee;
            return (1 - (1 - e)) / 2 * 100 + Math.abs(t) + .25
        });

    function en(e) {
        let n, s, a, u, i, l, o = (0, r.c)(15),
            {
                interval: c,
                timer: f
            } = e,
            {
                isComplete: d
            } = (0, Q.useContentReady)(),
            h = (0, q.useMotionValue)(0),
            m = K.useRef(null);
        o[0] !== c || o[1] !== d || o[2] !== h || o[3] !== f ? (n = () => {
            if (d) return function e() {
                if (f.isRunning()) {
                    let e = Math.min(f.getElapsedRunningTime() / c, 1);
                    h.set(e)
                }
                m.current = requestAnimationFrame(e)
            }(), () => {
                null !== m.current && (cancelAnimationFrame(m.current), m.current = null)
            }
        }, s = [d, f, c, h], o[0] = c, o[1] = d, o[2] = h, o[3] = f, o[4] = n, o[5] = s) : (n = o[4], s = o[5]), K.useEffect(n, s);
        let p = K.useRef(!1);
        return o[6] !== h || o[7] !== f ? (a = () => {
            let e = f.isRunning() && !f.isPaused();
            e && !p.current && h.set(0), p.current = e
        }, u = [f, h], o[6] = h, o[7] = f, o[8] = a, o[9] = u) : (a = o[8], u = o[9]), K.useEffect(a, u), o[10] !== d || o[11] !== h ? (i = d && (0, t.jsx)(W.div, {
            className: "h-full origin-left bg-theme-accent",
            style: {
                scaleX: h
            },
            transition: {
                type: "tween",
                duration: 0
            }
        }), o[10] = d, o[11] = h, o[12] = i) : i = o[12], o[13] !== i ? (l = (0, t.jsx)("div", {
            className: "absolute right-0 bottom-0 left-0 z-10 h-4 bg-theme-transparency-primary",
            children: i
        }), o[13] = i, o[14] = l) : l = o[14], l
    }

    function es(e) {
        let n, s, a, u, i, l, o, c, f = (0, r.c)(25),
            {
                children: d,
                slideIndex: h,
                currentIndex: m,
                totalSlides: p,
                transitionProgress: g
            } = e,
            v = m + 1 >= p ? 0 : m + 1,
            b = h === m ? "current" : h === v ? "next" : "hidden",
            y = (0, q.useMotionValue)(+("current" !== b)),
            M = (0, q.useMotionValue)(+("hidden" !== b)),
            w = (0, q.useMotionValue)("current" === b ? 1 : 2 * ("next" === b));
        f[0] !== y || f[1] !== m || f[2] !== v || f[3] !== M || f[4] !== h || f[5] !== g || f[6] !== w ? (n = () => {
            if (h === m) {
                y.set(0), M.set(1), w.set(1);
                return
            }
            if (h === v) {
                y.set(1 - g), M.set(1), w.set(2);
                return
            }
            y.set(1), M.set(0), w.set(0)
        }, s = [h, m, v, g, y, M, w], f[0] = y, f[1] = m, f[2] = v, f[3] = M, f[4] = h, f[5] = g, f[6] = w, f[7] = n, f[8] = s) : (n = f[7], s = f[8]), K.useEffect(n, s);
        let E = (0, U.useTransform)(y, ea);
        f[9] !== b || f[10] !== g ? (a = function(e, t) {
            if ("hidden" === e) return;
            if ("current" === e) {
                let {
                    scaleLoss: e,
                    txPercent: r,
                    rotateDeg: n
                } = ee;
                return {
                    transform: `translate3d(${-r*t}%, 0, 0) scale(${1-e*t}) rotate(${n*t}deg)`,
                    transformOrigin: "center center",
                    willChange: "transform"
                }
            }
            let {
                scaleGain: r,
                rotateDeg: n
            } = et;
            return {
                transform: `scale(${1+r*(1-t)}) rotate(${n*(1-t)}deg)`,
                transformOrigin: "left center",
                willChange: "transform"
            }
        }(b, g), f[9] = b, f[10] = g, f[11] = a) : a = f[11];
        let A = a;
        return f[12] !== E || f[13] !== M || f[14] !== w ? (u = {
            clipPath: E,
            opacity: M,
            zIndex: w
        }, f[12] = E, f[13] = M, f[14] = w, f[15] = u) : u = f[15], f[16] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            width: `calc(100% + ${2*er}%)`,
            height: `calc(100% + ${2*er}%)`
        }, f[16] = i) : i = f[16], f[17] !== d ? (l = (0, t.jsx)("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            style: i,
            children: d
        }), f[17] = d, f[18] = l) : l = f[18], f[19] !== A || f[20] !== l ? (o = (0, t.jsx)("div", {
            className: "relative size-full",
            style: A,
            children: l
        }), f[19] = A, f[20] = l, f[21] = o) : o = f[21], f[22] !== u || f[23] !== o ? (c = (0, t.jsx)(W.div, {
            className: "absolute inset-0",
            style: u,
            children: o
        }), f[22] = u, f[23] = o, f[24] = c) : c = f[24], c
    }

    function ea(e) {
        return `inset(0 0 0 ${100*e}%)`
    }
    e.s(["MediaSlideshow", 0, function({
        medias: e,
        interval: r = 4e3,
        className: n
    }) {
        let {
            isComplete: s
        } = (0, Q.useContentReady)(), [a, u] = K.useState(!1), [i, l] = K.useState(!0), [o, c] = K.useState(0), [f, d] = K.useState(!1), [h, m] = K.useState(0), p = (0, q.useMotionValue)(0), g = o + 1 >= e.length ? 0 : o + 1, [v, b] = K.useState(() => new Set([0, +(e.length > 1)]));
        K.useEffect(() => {
            b(e => {
                if (e.has(o) && e.has(g)) return e;
                let t = new Set(e);
                return t.add(o), t.add(g), t
            })
        }, [o, g]);
        let y = (0, X.useTimer)({
                delay: r
            }, () => {
                E()
            }),
            M = (0, X.useStopwatch)();
        K.useEffect(() => {
            function e() {
                l(!document.hidden)
            }
            return l(!document.hidden), document.addEventListener("visibilitychange", e), () => {
                document.removeEventListener("visibilitychange", e)
            }
        }, []), K.useEffect(() => p.on("change", e => {
            m(e)
        }), [p]);
        let w = a && i,
            E = K.useCallback(() => {
                f || (d(!0), p.set(0), y.pause(), M.pause(), G(p, 1, {
                    duration: 1.9,
                    ease: Z,
                    onComplete: () => {
                        c(t => t + 1 >= e.length ? 0 : t + 1), d(!1), p.set(0), s && w && (y.start(), M.start())
                    }
                }))
            }, [f, p, e.length, y, M, s, w]);
        return (K.useEffect(() => {
            if (!s) {
                y.stop(), M.stop();
                return
            }
            if (!w) {
                y.pause(), M.pause();
                return
            }
            y.isPaused() && y.resume(), M.isPaused() && M.resume()
        }, [s, w, y, M]), K.useEffect(() => {
            !s || !w || y.isRunning() || y.isPaused() || f || (y.start(), M.start())
        }, [s, w, y, M, f]), 0 === e.length) ? null : (0, t.jsx)(W.div, {
            className: n,
            onViewportEnter: () => u(!0),
            onViewportLeave: () => u(!1),
            children: (0, t.jsxs)("div", {
                className: "relative size-full overflow-hidden",
                children: [e.map((r, n) => (0, t.jsx)(es, {
                    slideIndex: n,
                    currentIndex: o,
                    totalSlides: e.length,
                    transitionProgress: h,
                    children: v.has(n) && (0, t.jsx)(H.InnerParallax, {
                        overflow: "30 lg:80",
                        className: "absolute inset-0",
                        children: (0, t.jsx)(J.SanityMedia, {
                            media: r,
                            loop: !0,
                            className: "size-full object-cover",
                            imageProps: 0 === n ? {
                                priority: !0,
                                loading: "eager",
                                sizes: "100vw"
                            } : {
                                priority: !1,
                                loading: "lazy",
                                sizes: "100vw"
                            },
                            videoProps: {
                                muted: !0,
                                playsInline: !0,
                                noControls: !0,
                                priority: 0 === n,
                                playing: w && (n === o || f && n === g)
                            }
                        })
                    })
                }, r.image ? ._id ? ? r.video ? ._id ? ? n)), (0, t.jsx)(en, {
                    interval: r,
                    timer: M
                })]
            })
        })
    }], 932733)
}, 140251, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.Subs = r.Subscribe = void 0;
    class n {
        static subscribe(e) {
            try {
                return e()
            } catch (e) {
                console.error(e)
            }
            return () => {}
        }
        static subscribeEvent(e, t, r) {
            return e.addListener(t, r), () => {
                e.removeListener(t, r)
            }
        }
        static subscribeDOMEvent(e, t, r, n) {
            return e.addEventListener(t, r, n), () => {
                e.removeEventListener(t, r, n)
            }
        }
        static setTimeout(e, t, ...r) {
            let n = setTimeout(e, t, r);
            return () => clearTimeout(n)
        }
        static setInterval(e, t, ...r) {
            let n = setInterval(e, t, r);
            return () => clearInterval(n)
        }
        static unsubAll(e) {
            if (Array.isArray(e)) e.forEach(e => {
                try {
                    e()
                } catch (e) {
                    console.error(e)
                }
            });
            else try {
                e()
            } catch (e) {
                console.error(e)
            }
        }
        static createCleanup(e) {
            return () => n.unsubAll(e)
        }
    }
    r.Subscribe = n, r.Subs = class {
        constructor(e = []) {
            this.list = e
        }
        subscribe(e) {
            let t = n.subscribe(e);
            return this.push(t), t
        }
        subscribeEvent(e, t, r) {
            let s = n.subscribeEvent(e, t, r);
            return this.push(s), s
        }
        subscribeDOMEvent(e, t, r) {
            let s = n.subscribeDOMEvent(e, t, r);
            return this.push(s), s
        }
        setTimeout(e, t, ...r) {
            let n = setTimeout(e, t, r),
                s = () => clearTimeout(n);
            return this.push(s), s
        }
        setInterval(e, t, ...r) {
            let n = setInterval(e, t, r),
                s = () => clearInterval(n);
            return this.push(s), s
        }
        push(e) {
            this.list.push(e)
        }
        unsubAll() {
            n.unsubAll(this.list), this.list.splice(0, this.list.length)
        }
        createCleanup() {
            return () => {
                this.unsubAll()
            }
        }
    }
}, 91820, (e, t, r) => {
    "use strict";
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.TimerRenderer = void 0;
    let s = n(e.r(271645)),
        a = e.r(140251);
    r.TimerRenderer = ({
        timer: e,
        render: t = e => s.default.createElement(s.default.Fragment, null, e.getElapsedRunningTime()),
        renderRate: r = 10
    }) => {
        let [, n] = s.default.useState(Date.now());
        return s.default.useEffect(() => {
            let e = new a.Subs;
            return e.setInterval(() => n(new Date().getTime()), r), e.createCleanup()
        }, [r]), t(e)
    }
}, 273431, (e, t, r) => {
    "use strict";
    var n = e.e && e.e.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }), Object.defineProperty(e, n, s)
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        s = e.e && e.e.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        a = e.e && e.e.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return s(t, e), t
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.useTimer = void 0;
    let u = a(e.r(271645)),
        i = e.r(140251),
        l = Number.MAX_SAFE_INTEGER;
    r.useTimer = (e = {}, t) => {
        let [r, n] = u.useState(!0), [s, a] = u.useState(Date.now()), o = u.useRef(!1), c = u.useRef(l), f = u.useRef(l), d = u.useRef(l), h = u.useRef(l), m = u.useRef(l), p = u.useRef(0), g = u.useRef(0), v = u.useMemo(() => {
            var t, r;
            let n = null != (t = e.speedMultiplier) ? t : 1,
                s = null != (r = e.delay) ? r : 0;
            return 0 === n ? 0 : n > 0 && s > 0 ? Math.max(1, Math.round(1 / n * s)) : s
        }, [e.delay, e.speedMultiplier]), b = u.useMemo(() => e.runOnce, [e.runOnce]), y = u.useMemo(() => e.fireOnStart, [e.fireOnStart]), M = u.useMemo(() => e.startImmediately, [e.startImmediately]), w = u.useCallback(() => o.current, []), E = u.useCallback(() => !w(), [w]), A = u.useCallback(() => w() && h.current !== l, [w]), S = u.useCallback(() => w() && !A(), [A, w]), _ = u.useCallback(() => v, [v]), O = u.useCallback(() => w() ? c.current : -1, [w]), x = u.useCallback(() => f.current < l && v ? f.current : -1, [v]), C = u.useCallback(() => S() && v ? d.current : -1, [S, v]), j = u.useCallback(() => A() ? h.current : -1, [A]), D = u.useCallback(() => w() && m.current < l ? m.current : -1, [w]), T = u.useCallback(() => w() ? Date.now() - c.current : 0, [w]), k = u.useCallback(() => {
            if (w())
                if (A()) return h.current - c.current - g.current;
                else return Date.now() - c.current - g.current;
            return 0
        }, [A, w]), P = u.useCallback(() => {
            let e = 0;
            return A() && (e = Date.now() - h.current), p.current + e
        }, [A]), R = u.useCallback(() => {
            let e = 0;
            return A() && (e = Date.now() - h.current), g.current + e
        }, [A]), V = u.useCallback(() => S() ? Date.now() - m.current : 0, [S]), I = u.useCallback(() => {
            let e = Date.now();
            if (w() && v) {
                if (S()) return Math.max(0, d.current - e);
                else if (A()) {
                    let e = f.current !== l ? f.current : c.current;
                    return Math.max(0, v - (h.current - e - p.current))
                }
            }
            return 0
        }, [A, S, w, v]), N = u.useCallback((e = Date.now()) => {
            let t = v ? Math.max(e, y ? e : e + v) : l;
            c.current = e, f.current = l, d.current = t, h.current = l, m.current = e, p.current = 0, g.current = 0, o.current = !0, a(Date.now())
        }, [v, y]), B = u.useCallback(() => {
            c.current = l, f.current = l, d.current = l, h.current = l, m.current = l, p.current = 0, g.current = 0, o.current = !1, a(Date.now())
        }, []), L = u.useCallback(() => {
            S() && (h.current = Date.now(), m.current = l, a(Date.now()))
        }, [S]), F = u.useCallback(() => {
            if (w() && A()) {
                let e = Date.now();
                d.current = e + I(), p.current = 0, g.current = g.current + (e - h.current), h.current = l, m.current = e, a(Date.now())
            }
        }, [w, A, I]);
        return u.useEffect(() => {
            let e = new i.Subs,
                r = () => {
                    if (v && !A()) {
                        let n = Date.now();
                        if (n >= d.current) {
                            let s = f.current !== l ? Math.max(0, Math.floor((n - d.current) / v)) : 0;
                            f.current = n, p.current = 0;
                            let a = s * v,
                                u = Math.max(n, d.current + v + a);
                            if (d.current = u, "function" == typeof t) try {
                                t(s)
                            } catch (e) {
                                console.error(e)
                            }
                            b ? B() : e.setTimeout(() => {
                                r()
                            }, Math.max(u - Date.now(), 1))
                        } else d.current < l && e.setTimeout(() => {
                            r()
                        }, Math.max(d.current - Date.now(), 1))
                    }
                };
            return r(), e.createCleanup()
        }, [t, v, A, s, b, B]), u.useEffect(() => {
            r && (n(!1), M && N())
        }, [r, M, N]), u.useMemo(() => ({
            start: N,
            stop: B,
            pause: L,
            resume: F,
            isStarted: w,
            isStopped: E,
            isRunning: S,
            isPaused: A,
            getEffectiveDelay: _,
            getStartTime: O,
            getLastFireTime: x,
            getNextFireTime: C,
            getPauseTime: j,
            getResumeTime: D,
            getRemainingTime: I,
            getElapsedStartedTime: T,
            getElapsedRunningTime: k,
            getTotalElapsedPausedTime: R,
            getPeriodElapsedPausedTime: P,
            getElapsedResumedTime: V
        }), [_, V, k, T, x, C, j, P, I, D, O, R, A, S, w, E, L, F, N, B])
    }
}, 79298, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.useDelay = void 0;
    let n = e.r(273431);
    r.useDelay = (e, t) => (0, n.useTimer)({
        delay: e,
        runOnce: !0
    }, t)
}, 170149, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.useStopwatch = void 0;
    let n = e.r(273431);
    r.useStopwatch = () => (0, n.useTimer)()
}, 858106, (e, t, r) => {
    "use strict";
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.useMomentaryBool = void 0;
    let s = n(e.r(271645)),
        a = e.r(79298);
    r.useMomentaryBool = (e, t) => {
        let [r, n] = s.default.useState(e), u = s.default.useCallback(() => n(e), [e]), i = (0, a.useDelay)(t, u);
        return [r, s.default.useCallback(() => {
            n(!e), i.start()
        }, [i, e])]
    }
}, 757506, (e, t, r) => {
    "use strict";
    var n = e.e && e.e.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }), Object.defineProperty(e, n, s)
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        s = e.e && e.e.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), s(e.r(91820), r), s(e.r(79298), r), s(e.r(170149), r), s(e.r(273431), r), s(e.r(858106), r)
}]);