(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 557568, t => {
    "use strict";
    var e = t.i(843476),
        n = t.i(500932),
        r = t.i(27312),
        i = t.i(801335);

    function o(t) {
        let o, u, c, l, s = (0, n.c)(11),
            {
                totalSlides: a,
                className: f
            } = t,
            {
                embla: d,
                selectedIndex: p
            } = r.useSliderContext();
        return s[0] !== f ? (o = (0, i.cx)("flex items-center gap-2", f), s[0] = f, s[1] = o) : o = s[1], s[2] !== a ? (u = Array.from({
            length: a
        }), s[2] = a, s[3] = u) : u = s[3], s[4] !== d || s[5] !== p || s[6] !== u ? (c = u.map((t, n) => {
            let r = n === p;
            return (0, e.jsx)("button", {
                type: "button",
                onClick: () => d ? .scrollTo(n),
                "aria-label": `Go to slide ${n+1}`,
                className: (0, i.cx)("size-6 shrink-0 cursor-pointer bg-theme-bg-primary transition-all duration-400 ease-in-out", r ? "rounded-[50%] opacity-100" : "rounded-none opacity-30")
            }, `dot-${n}`)
        }), s[4] = d, s[5] = p, s[6] = u, s[7] = c) : c = s[7], s[8] !== o || s[9] !== c ? (l = (0, e.jsx)("div", {
            className: o,
            children: c
        }), s[8] = o, s[9] = c, s[10] = l) : l = s[10], l
    }
    t.s(["SliderDots", 0, o, "SliderDotsScrollStrip", 0, function(t) {
        let r, u, c, l = (0, n.c)(7),
            {
                totalSlides: s,
                className: a
            } = t;
        return l[0] !== a ? (r = (0, i.cx)("min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]", a), l[0] = a, l[1] = r) : r = l[1], l[2] !== s ? (u = (0, e.jsx)(o, {
            totalSlides: s,
            className: "w-max min-w-full flex-nowrap justify-between gap-2"
        }), l[2] = s, l[3] = u) : u = l[3], l[4] !== r || l[5] !== u ? (c = (0, e.jsx)("div", {
            className: r,
            children: u
        }), l[4] = r, l[5] = u, l[6] = c) : c = l[6], c
    }])
}, 27312, t => {
    "use strict";
    var e = t.i(843476),
        n = t.i(500932),
        r = t.i(271645);

    function i(t) {
        return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t)
    }

    function o(t, e) {
        let n = Object.keys(t),
            r = Object.keys(e);
        return n.length === r.length && JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && n.every(n => {
            let r = t[n],
                u = e[n];
            return "function" == typeof r ? `${r}` == `${u}` : i(r) && i(u) ? o(r, u) : r === u
        })
    }

    function u(t) {
        return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
    }

    function c(t) {
        return "number" == typeof t
    }

    function l(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "boolean" == typeof t
    }

    function a(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function f(t) {
        return Math.abs(t)
    }

    function d(t) {
        return Math.sign(t)
    }

    function p(t) {
        return x(t).map(Number)
    }

    function m(t) {
        return t[g(t)]
    }

    function g(t) {
        return Math.max(0, t.length - 1)
    }

    function h(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n)
    }

    function x(t) {
        return Object.keys(t)
    }

    function b(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
    }

    function v() {
        let t = [],
            e = {
                add: function(n, r, i, o = {
                    passive: !0
                }) {
                    let u;
                    return "addEventListener" in n ? (n.addEventListener(r, i, o), u = () => n.removeEventListener(r, i, o)) : (n.addListener(i), u = () => n.removeListener(i)), t.push(u), e
                },
                clear: function() {
                    t = t.filter(t => t())
                }
            };
        return e
    }

    function y(t = 0, e = 0) {
        let n = f(t - e);

        function r(n) {
            return n < t || n > e
        }
        return {
            length: n,
            max: e,
            min: t,
            constrain: function(n) {
                return r(n) ? n < t ? t : e : n
            },
            reachedAny: r,
            reachedMax: function(t) {
                return t > e
            },
            reachedMin: function(e) {
                return e < t
            },
            removeOffset: function(t) {
                return n ? t - n * Math.ceil((t - e) / n) : t
            }
        }
    }

    function S(t) {
        let e = t;

        function n(t) {
            return c(t) ? t : t.get()
        }
        return {
            get: function() {
                return e
            },
            set: function(t) {
                e = n(t)
            },
            add: function(t) {
                e += n(t)
            },
            subtract: function(t) {
                e -= n(t)
            }
        }
    }

    function w(t, e) {
        let n = "x" === t.scroll ? function(t) {
                return `translate3d(${t}px,0px,0px)`
            } : function(t) {
                return `translate3d(0px,${t}px,0px)`
            },
            r = e.style,
            i = null,
            o = !1;
        return {
            clear: function() {
                !o && (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
            },
            to: function(e) {
                if (o) return;
                let u = Math.round(100 * t.direction(e)) / 100;
                u !== i && (r.transform = n(u), i = u)
            },
            toggleActive: function(t) {
                o = !t
            }
        }
    }
    let E = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
    };

    function O(t, e, n) {
        let r, i, o, u, j, k, D, N, I = t.ownerDocument,
            A = I.defaultView,
            L = function(t) {
                function e(t, e) {
                    return function t(e, n) {
                        return [e, n].reduce((e, n) => (x(n).forEach(r => {
                            let i = e[r],
                                o = n[r],
                                u = a(i) && a(o);
                            e[r] = u ? t(i, o) : o
                        }), e), {})
                    }(t, e || {})
                }
                return {
                    mergeOptions: e,
                    optionsAtMedia: function(n) {
                        let r = n.breakpoints || {},
                            i = x(r).filter(e => t.matchMedia(e).matches).map(t => r[t]).reduce((t, n) => e(t, n), {});
                        return e(n, i)
                    },
                    optionsMediaQueries: function(e) {
                        return e.map(t => x(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
                    }
                }
            }(A),
            M = (N = [], {
                init: function(t, e) {
                    return (N = e.filter(({
                        options: t
                    }) => !1 !== L.optionsAtMedia(t).active)).forEach(e => e.init(t, L)), e.reduce((t, e) => Object.assign(t, {
                        [e.name]: e
                    }), {})
                },
                destroy: function() {
                    N = N.filter(t => t.destroy())
                }
            }),
            P = v(),
            F = (i = {}, o = {
                init: function(t) {
                    r = t
                },
                emit: function(t) {
                    return (i[t] || []).forEach(e => e(r, t)), o
                },
                off: function(t, e) {
                    return i[t] = (i[t] || []).filter(t => t !== e), o
                },
                on: function(t, e) {
                    return i[t] = (i[t] || []).concat([e]), o
                },
                clear: function() {
                    i = {}
                }
            }),
            {
                mergeOptions: T,
                optionsAtMedia: C,
                optionsMediaQueries: V
            } = L,
            {
                on: z,
                off: B,
                emit: H
            } = F,
            R = !1,
            $ = T(E, O.globalOptions),
            U = T($),
            q = [];

        function _(e, n) {
            R || (U = C($ = T($, e)), q = n || q, function() {
                let {
                    container: e,
                    slides: n
                } = U;
                k = (l(e) ? t.querySelector(e) : e) || t.children[0];
                let r = l(n) ? k.querySelectorAll(n) : n;
                D = [].slice.call(r || k.children)
            }(), u = function e(n) {
                let r = function(t, e, n, r, i, o, u) {
                    var a, E;
                    let O, j, k, D, N, I, A, L, M, P, F, T, C, V, {
                            align: z,
                            axis: B,
                            direction: H,
                            startIndex: R,
                            loop: $,
                            duration: U,
                            dragFree: q,
                            dragThreshold: _,
                            inViewThreshold: J,
                            slidesToScroll: K,
                            skipSnaps: X,
                            containScroll: G,
                            watchResize: Q,
                            watchSlides: Y,
                            watchDrag: W,
                            watchFocus: Z
                        } = o,
                        tt = {
                            measure: function(t) {
                                let {
                                    offsetTop: e,
                                    offsetLeft: n,
                                    offsetWidth: r,
                                    offsetHeight: i
                                } = t;
                                return {
                                    top: e,
                                    right: n + r,
                                    bottom: e + i,
                                    left: n,
                                    width: r,
                                    height: i
                                }
                            }
                        },
                        te = tt.measure(e),
                        tn = n.map(tt.measure),
                        tr = (j = "rtl" === H, D = (k = "y" === B) || !j ? 1 : -1, N = k ? "top" : j ? "right" : "left", I = k ? "bottom" : j ? "left" : "right", {
                            scroll: k ? "y" : "x",
                            cross: k ? "x" : "y",
                            startEdge: N,
                            endEdge: I,
                            measureSize: function(t) {
                                let {
                                    height: e,
                                    width: n
                                } = t;
                                return k ? e : n
                            },
                            direction: function(t) {
                                return t * D
                            }
                        }),
                        ti = tr.measureSize(te),
                        to = {
                            measure: function(t) {
                                return t / 100 * ti
                            }
                        },
                        tu = (a = z, E = ti, O = {
                            start: function() {
                                return 0
                            },
                            center: function(t) {
                                return (E - t) / 2
                            },
                            end: function(t) {
                                return E - t
                            }
                        }, {
                            measure: function(t, e) {
                                return l(a) ? O[a](t) : a(E, t, e)
                            }
                        }),
                        tc = !$ && !!G,
                        {
                            slideSizes: tl,
                            slideSizesWithGaps: ts,
                            startGap: ta,
                            endGap: tf
                        } = function(t, e, n, r, i, o) {
                            let {
                                measureSize: u,
                                startEdge: c,
                                endEdge: l
                            } = t, s = n[0] && i, a = function() {
                                if (!s) return 0;
                                let t = n[0];
                                return f(e[c] - t[c])
                            }(), d = s ? parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)) : 0, p = n.map(u), h = n.map((t, e, n) => {
                                let r = e === g(n);
                                return e ? r ? p[e] + d : n[e + 1][c] - t[c] : p[e] + a
                            }).map(f);
                            return {
                                slideSizes: p,
                                slideSizesWithGaps: h,
                                startGap: a,
                                endGap: d
                            }
                        }(tr, te, tn, n, $ || !!G, i),
                        td = function(t, e, n, r, i, o, u, l) {
                            let {
                                startEdge: s,
                                endEdge: a,
                                direction: d
                            } = t, h = c(n);
                            return {
                                groupSlides: function(t) {
                                    return h ? p(t).filter(t => t % n == 0).map(e => t.slice(e, e + n)) : t.length ? p(t).reduce((n, c, p) => {
                                        let h = m(n) || 0,
                                            x = c === g(t),
                                            b = i[s] - o[h][s],
                                            v = i[s] - o[c][a],
                                            y = r || 0 !== h ? 0 : d(u),
                                            S = f(v - (!r && x ? d(l) : 0) - (b + y));
                                        return p && S > e + 2 && n.push(c), x && n.push(t.length), n
                                    }, []).map((e, n, r) => {
                                        let i = Math.max(r[n - 1] || 0);
                                        return t.slice(i, e)
                                    }) : []
                                }
                            }
                        }(tr, ti, K, $, te, tn, ta, tf),
                        {
                            snaps: tp,
                            snapsAligned: tm
                        } = function(t, e, n, r, i) {
                            let {
                                startEdge: o,
                                endEdge: u
                            } = t, {
                                groupSlides: c
                            } = i, l = c(r).map(t => m(t)[u] - t[0][o]).map(f).map(e.measure), s = r.map(t => n[o] - t[o]).map(t => -f(t)), a = c(s).map(t => t[0]).map((t, e) => t + l[e]);
                            return {
                                snaps: s,
                                snapsAligned: a
                            }
                        }(tr, tu, te, tn, td),
                        tg = -m(tp) + m(ts),
                        {
                            snapsContained: th,
                            scrollContainLimit: tx
                        } = function(t, e, n, r) {
                            let i, o, u = y(-e + t, 0),
                                c = n.map((t, e) => {
                                    let {
                                        min: r,
                                        max: i
                                    } = u, o = u.constrain(t), c = e === g(n);
                                    return e ? c || function(t, e) {
                                        return 1 >= f(t - e)
                                    }(r, o) ? r : function(t, e) {
                                        return 1 >= f(t - e)
                                    }(i, o) ? i : o : i
                                }).map(t => parseFloat(t.toFixed(3))),
                                l = (i = c[0], o = m(c), y(c.lastIndexOf(i), c.indexOf(o) + 1));
                            return {
                                snapsContained: function() {
                                    if (e <= t + 2) return [u.max];
                                    if ("keepSnaps" === r) return c;
                                    let {
                                        min: n,
                                        max: i
                                    } = l;
                                    return c.slice(n, i)
                                }(),
                                scrollContainLimit: l
                            }
                        }(ti, tg, tm, G),
                        tb = tc ? th : tm,
                        {
                            limit: tv
                        } = (A = tb[0], {
                            limit: y($ ? A - tg : m(tb), A)
                        }),
                        ty = function t(e, n, r) {
                            let {
                                constrain: i
                            } = y(0, e), o = e + 1, u = c(n);

                            function c(t) {
                                return r ? f((o + t) % o) : i(t)
                            }

                            function l() {
                                return t(e, u, r)
                            }
                            let s = {
                                get: function() {
                                    return u
                                },
                                set: function(t) {
                                    return u = c(t), s
                                },
                                add: function(t) {
                                    return l().set(u + t)
                                },
                                clone: l
                            };
                            return s
                        }(g(tb), R, $),
                        tS = ty.clone(),
                        tw = p(n),
                        tE = function(t, e, n, r) {
                            let i = v(),
                                o = 1e3 / 60,
                                u = null,
                                c = 0,
                                l = 0;

                            function s(t) {
                                if (!l) return;
                                u || (u = t, n(), n());
                                let i = t - u;
                                for (u = t, c += i; c >= o;) n(), c -= o;
                                r(c / o), l && (l = e.requestAnimationFrame(s))
                            }

                            function a() {
                                e.cancelAnimationFrame(l), u = null, c = 0, l = 0
                            }
                            return {
                                init: function() {
                                    i.add(t, "visibilitychange", () => {
                                        t.hidden && (u = null, c = 0)
                                    })
                                },
                                destroy: function() {
                                    a(), i.clear()
                                },
                                start: function() {
                                    l || (l = e.requestAnimationFrame(s))
                                },
                                stop: a,
                                update: n,
                                render: r
                            }
                        }(r, i, () => (({
                            dragHandler: t,
                            scrollBody: e,
                            scrollBounds: n,
                            options: {
                                loop: r
                            }
                        }) => {
                            r || n.constrain(t.pointerDown()), e.seek()
                        })(tV), t => (({
                            scrollBody: t,
                            translate: e,
                            location: n,
                            offsetLocation: r,
                            previousLocation: i,
                            scrollLooper: o,
                            slideLooper: u,
                            dragHandler: c,
                            animation: l,
                            eventHandler: s,
                            scrollBounds: a,
                            options: {
                                loop: f
                            }
                        }, d) => {
                            let p = t.settled(),
                                m = !a.shouldConstrain(),
                                g = f ? p : p && m,
                                h = g && !c.pointerDown();
                            h && l.stop();
                            let x = n.get() * d + i.get() * (1 - d);
                            r.set(x), f && (o.loop(t.direction()), u.loop()), e.to(r.get()), h && s.emit("settle"), g || s.emit("scroll")
                        })(tV, t)),
                        tO = tb[ty.get()],
                        tj = S(tO),
                        tk = S(tO),
                        tD = S(tO),
                        tN = S(tO),
                        tI = function(t, e, n, r, i) {
                            let o = 0,
                                u = 0,
                                c = i,
                                l = .68,
                                s = t.get(),
                                a = 0;

                            function p(t) {
                                return c = t, g
                            }

                            function m(t) {
                                return l = t, g
                            }
                            let g = {
                                direction: function() {
                                    return u
                                },
                                duration: function() {
                                    return c
                                },
                                velocity: function() {
                                    return o
                                },
                                seek: function() {
                                    let e = r.get() - t.get(),
                                        i = 0;
                                    return c ? (n.set(t), o += e / c, o *= l, s += o, t.add(o), i = s - a) : (o = 0, n.set(r), t.set(r), i = e), u = d(i), a = s, g
                                },
                                settled: function() {
                                    return .001 > f(r.get() - e.get())
                                },
                                useBaseFriction: function() {
                                    return m(.68)
                                },
                                useBaseDuration: function() {
                                    return p(i)
                                },
                                useFriction: m,
                                useDuration: p
                            };
                            return g
                        }(tj, tD, tk, tN, U),
                        tA = function(t, e, n, r, i) {
                            let {
                                reachedAny: o,
                                removeOffset: u,
                                constrain: c
                            } = r;

                            function l(t) {
                                return t.concat().sort((t, e) => f(t) - f(e))[0]
                            }

                            function s(e, r) {
                                let i = [e, e + n, e - n];
                                if (!t) return e;
                                if (!r) return l(i);
                                let o = i.filter(t => d(t) === r);
                                return o.length ? l(o) : m(i) - n
                            }
                            return {
                                byDistance: function(n, r) {
                                    let l = i.get() + n,
                                        {
                                            index: a,
                                            distance: d
                                        } = function(n) {
                                            let r = t ? u(n) : c(n),
                                                {
                                                    index: i
                                                } = e.map((t, e) => ({
                                                    diff: s(t - r, 0),
                                                    index: e
                                                })).sort((t, e) => f(t.diff) - f(e.diff))[0];
                                            return {
                                                index: i,
                                                distance: r
                                            }
                                        }(l),
                                        p = !t && o(l);
                                    if (!r || p) return {
                                        index: a,
                                        distance: n
                                    };
                                    let m = n + s(e[a] - d, 0);
                                    return {
                                        index: a,
                                        distance: m
                                    }
                                },
                                byIndex: function(t, n) {
                                    let r = s(e[t] - i.get(), n);
                                    return {
                                        index: t,
                                        distance: r
                                    }
                                },
                                shortcut: s
                            }
                        }($, tb, tg, tv, tN),
                        tL = function(t, e, n, r, i, o, u) {
                            function c(i) {
                                let c = i.distance,
                                    l = i.index !== e.get();
                                o.add(c), c && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), l && (n.set(e.get()), e.set(i.index), u.emit("select"))
                            }
                            return {
                                distance: function(t, e) {
                                    c(i.byDistance(t, e))
                                },
                                index: function(t, n) {
                                    let r = e.clone().set(t);
                                    c(i.byIndex(r.get(), n))
                                }
                            }
                        }(tE, ty, tS, tI, tA, tN, u),
                        tM = function(t) {
                            let {
                                max: e,
                                length: n
                            } = t;
                            return {
                                get: function(t) {
                                    return n ? -((t - e) / n) : 0
                                }
                            }
                        }(tv),
                        tP = v(),
                        tF = (M = {}, P = null, F = null, T = !1, {
                            init: function() {
                                L = new IntersectionObserver(t => {
                                    T || (t.forEach(t => {
                                        M[n.indexOf(t.target)] = t
                                    }), P = null, F = null, u.emit("slidesInView"))
                                }, {
                                    root: e.parentElement,
                                    threshold: J
                                }), n.forEach(t => L.observe(t))
                            },
                            destroy: function() {
                                L && L.disconnect(), T = !0
                            },
                            get: function(t = !0) {
                                if (t && P) return P;
                                if (!t && F) return F;
                                let e = x(M).reduce((e, n) => {
                                    let r = parseInt(n),
                                        {
                                            isIntersecting: i
                                        } = M[r];
                                    return (t && i || !t && !i) && e.push(r), e
                                }, []);
                                return t && (P = e), t || (F = e), e
                            }
                        }),
                        {
                            slideRegistry: tT
                        } = function(t, e, n, r, i, o) {
                            let u, {
                                    groupSlides: c
                                } = i,
                                {
                                    min: l,
                                    max: s
                                } = r;
                            return {
                                slideRegistry: (u = c(o), 1 === n.length ? [o] : t && "keepSnaps" !== e ? u.slice(l, s).map((t, e, n) => {
                                    let r = e === g(n);
                                    return e ? r ? h(g(o) - m(n)[0] + 1, m(n)[0]) : t : h(m(n[0]) + 1)
                                }) : u)
                            }
                        }(tc, G, tb, tx, td, tw),
                        tC = function(t, e, n, r, i, o, u, l) {
                            let a = {
                                    passive: !0,
                                    capture: !0
                                },
                                f = 0;

                            function d(t) {
                                "Tab" === t.code && (f = new Date().getTime())
                            }
                            return {
                                init: function(p) {
                                    l && (o.add(document, "keydown", d, !1), e.forEach((e, d) => {
                                        o.add(e, "focus", e => {
                                            (s(l) || l(p, e)) && function(e) {
                                                if (new Date().getTime() - f > 10) return;
                                                u.emit("slideFocusStart"), t.scrollLeft = 0;
                                                let o = n.findIndex(t => t.includes(e));
                                                c(o) && (i.useDuration(0), r.index(o, 0), u.emit("slideFocus"))
                                            }(d)
                                        }, a)
                                    }))
                                }
                            }
                        }(t, n, tT, tL, tI, tP, u, Z),
                        tV = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: u,
                            containerRect: te,
                            slideRects: tn,
                            animation: tE,
                            axis: tr,
                            dragHandler: function(t, e, n, r, i, o, u, c, l, a, p, m, g, h, x, S, w, E) {
                                let {
                                    cross: O,
                                    direction: j
                                } = t, k = ["INPUT", "SELECT", "TEXTAREA"], D = {
                                    passive: !1
                                }, N = v(), I = v(), A = y(50, 225).constrain(h.measure(20)), L = {
                                    mouse: 300,
                                    touch: 400
                                }, M = {
                                    mouse: 500,
                                    touch: 600
                                }, P = x ? 43 : 25, F = !1, T = 0, C = 0, V = !1, z = !1, B = !1, H = !1;

                                function R(t) {
                                    if (!b(t, r) && t.touches.length >= 2) return $(t);
                                    let e = o.readPoint(t),
                                        n = o.readPoint(t, O),
                                        u = f(e - T),
                                        l = f(n - C);
                                    if (!z && !H && (!t.cancelable || !(z = u > l))) return $(t);
                                    let s = o.pointerMove(t);
                                    u > S && (B = !0), a.useFriction(.3).useDuration(.75), c.start(), i.add(j(s)), t.preventDefault()
                                }

                                function $(t) {
                                    var e;
                                    let n, r, i = p.byDistance(0, !1).index !== m.get(),
                                        u = o.pointerUp(t) * (x ? M : L)[H ? "mouse" : "touch"],
                                        c = (e = j(u), n = m.add(-1 * d(e)), r = p.byDistance(e, !x).distance, x || f(e) < A ? r : w && i ? .5 * r : p.byIndex(n.get(), 0).distance),
                                        s = function(t, e) {
                                            var n, r;
                                            if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                                            let i = (n = f(t), r = f(e), f(n - r));
                                            return f(i / t)
                                        }(u, c);
                                    z = !1, V = !1, I.clear(), a.useDuration(P - 10 * s).useFriction(.68 + s / 50), l.distance(c, !x), H = !1, g.emit("pointerUp")
                                }

                                function U(t) {
                                    B && (t.stopPropagation(), t.preventDefault(), B = !1)
                                }
                                return {
                                    init: function(t) {
                                        E && N.add(e, "dragstart", t => t.preventDefault(), D).add(e, "touchmove", () => void 0, D).add(e, "touchend", () => void 0).add(e, "touchstart", c).add(e, "mousedown", c).add(e, "touchcancel", $).add(e, "contextmenu", $).add(e, "click", U, !0);

                                        function c(c) {
                                            (s(E) || E(t, c)) && function(t) {
                                                let c, l = b(t, r);
                                                if ((H = l, B = x && l && !t.buttons && F, F = f(i.get() - u.get()) >= 2, !l || 0 === t.button) && (c = t.target.nodeName || "", !k.includes(c))) {
                                                    let r;
                                                    V = !0, o.pointerDown(t), a.useFriction(0).useDuration(0), i.set(u), r = H ? n : e, I.add(r, "touchmove", R, D).add(r, "touchend", $).add(r, "mousemove", R, D).add(r, "mouseup", $), T = o.readPoint(t), C = o.readPoint(t, O), g.emit("pointerDown")
                                                }
                                            }(c)
                                        }
                                    },
                                    destroy: function() {
                                        N.clear(), I.clear()
                                    },
                                    pointerDown: function() {
                                        return V
                                    }
                                }
                            }(tr, t, r, i, tN, function(t, e) {
                                let n, r;

                                function i(t) {
                                    return t.timeStamp
                                }

                                function o(n, r) {
                                    let i = r || t.scroll,
                                        o = `client${"x"===i?"X":"Y"}`;
                                    return (b(n, e) ? n : n.touches[0])[o]
                                }
                                return {
                                    pointerDown: function(t) {
                                        return n = t, r = t, o(t)
                                    },
                                    pointerMove: function(t) {
                                        let e = o(t) - o(r),
                                            u = i(t) - i(n) > 170;
                                        return r = t, u && (n = t), e
                                    },
                                    pointerUp: function(t) {
                                        if (!n || !r) return 0;
                                        let e = o(r) - o(n),
                                            u = i(t) - i(n),
                                            c = i(t) - i(r) > 170,
                                            l = e / u;
                                        return u && !c && f(l) > .1 ? l : 0
                                    },
                                    readPoint: o
                                }
                            }(tr, i), tj, tE, tL, tI, tA, ty, u, to, q, _, X, W),
                            eventStore: tP,
                            percentOfView: to,
                            index: ty,
                            indexPrevious: tS,
                            limit: tv,
                            location: tj,
                            offsetLocation: tD,
                            previousLocation: tk,
                            options: o,
                            resizeHandler: function(t, e, n, r, i, o, u) {
                                let c, l, a = [t].concat(r),
                                    d = [],
                                    p = !1;

                                function m(t) {
                                    return i.measureSize(u.measure(t))
                                }
                                return {
                                    init: function(i) {
                                        o && (l = m(t), d = r.map(m), c = new ResizeObserver(n => {
                                            (s(o) || o(i, n)) && function(n) {
                                                for (let o of n) {
                                                    if (p) return;
                                                    let n = o.target === t,
                                                        u = r.indexOf(o.target),
                                                        c = n ? l : d[u];
                                                    if (f(m(n ? t : r[u]) - c) >= .5) {
                                                        i.reInit(), e.emit("resize");
                                                        break
                                                    }
                                                }
                                            }(n)
                                        }), n.requestAnimationFrame(() => {
                                            a.forEach(t => c.observe(t))
                                        }))
                                    },
                                    destroy: function() {
                                        p = !0, c && c.disconnect()
                                    }
                                }
                            }(e, u, i, n, tr, Q, tt),
                            scrollBody: tI,
                            scrollBounds: function(t, e, n, r, i) {
                                let o = i.measure(10),
                                    u = i.measure(50),
                                    c = y(.1, .99),
                                    l = !1;

                                function s() {
                                    return !l && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
                                }
                                return {
                                    shouldConstrain: s,
                                    constrain: function(i) {
                                        if (!s()) return;
                                        let l = t.reachedMin(e.get()) ? "min" : "max",
                                            a = f(t[l] - e.get()),
                                            d = n.get() - e.get(),
                                            p = c.constrain(a / u);
                                        n.subtract(d * p), !i && f(d) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(t) {
                                        l = !t
                                    }
                                }
                            }(tv, tD, tN, tI, to),
                            scrollLooper: function(t, e, n, r) {
                                let {
                                    reachedMin: i,
                                    reachedMax: o
                                } = y(e.min + .1, e.max + .1);
                                return {
                                    loop: function(e) {
                                        if (!(1 === e ? o(n.get()) : -1 === e && i(n.get()))) return;
                                        let u = -1 * e * t;
                                        r.forEach(t => t.add(u))
                                    }
                                }
                            }(tg, tv, tD, [tj, tD, tk, tN]),
                            scrollProgress: tM,
                            scrollSnapList: tb.map(tM.get),
                            scrollSnaps: tb,
                            scrollTarget: tA,
                            scrollTo: tL,
                            slideLooper: function(t, e, n, r, i, o, u, c, l) {
                                let s = p(i),
                                    a = p(i).reverse(),
                                    f = g(m(a, u[0]), n, !1).concat(g(m(s, e - u[0] - 1), -n, !0));

                                function d(t, e) {
                                    return t.reduce((t, e) => t - i[e], e)
                                }

                                function m(t, e) {
                                    return t.reduce((t, n) => d(t, e) > 0 ? t.concat([n]) : t, [])
                                }

                                function g(i, u, s) {
                                    let a = o.map((t, n) => ({
                                        start: t - r[n] + .5 + u,
                                        end: t + e - .5 + u
                                    }));
                                    return i.map(e => {
                                        let r = s ? 0 : -n,
                                            i = s ? n : 0,
                                            o = a[e][s ? "end" : "start"];
                                        return {
                                            index: e,
                                            loopPoint: o,
                                            slideLocation: S(-1),
                                            translate: w(t, l[e]),
                                            target: () => c.get() > o ? r : i
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return f.every(({
                                            index: t
                                        }) => .1 >= d(s.filter(e => e !== t), e))
                                    },
                                    clear: function() {
                                        f.forEach(t => t.translate.clear())
                                    },
                                    loop: function() {
                                        f.forEach(t => {
                                            let {
                                                target: e,
                                                translate: n,
                                                slideLocation: r
                                            } = t, i = e();
                                            i !== r.get() && (n.to(i), r.set(i))
                                        })
                                    },
                                    loopPoints: f
                                }
                            }(tr, ti, tg, tl, ts, tp, tb, tD, n),
                            slideFocus: tC,
                            slidesHandler: (V = !1, {
                                init: function(t) {
                                    Y && (C = new MutationObserver(e => {
                                        !V && (s(Y) || Y(t, e)) && function(e) {
                                            for (let n of e)
                                                if ("childList" === n.type) {
                                                    t.reInit(), u.emit("slidesChanged");
                                                    break
                                                }
                                        }(e)
                                    })).observe(e, {
                                        childList: !0
                                    })
                                },
                                destroy: function() {
                                    C && C.disconnect(), V = !0
                                }
                            }),
                            slidesInView: tF,
                            slideIndexes: tw,
                            slideRegistry: tT,
                            slidesToScroll: td,
                            target: tN,
                            translate: w(tr, e)
                        };
                    return tV
                }(t, k, D, I, A, n, F);
                return n.loop && !r.slideLooper.canLoop() ? e(Object.assign({}, n, {
                    loop: !1
                })) : r
            }(U), V([$, ...q.map(({
                options: t
            }) => t)]).forEach(t => P.add(t, "change", J)), U.active && (u.translate.to(u.location.get()), u.animation.init(), u.slidesInView.init(), u.slideFocus.init(Q), u.eventHandler.init(Q), u.resizeHandler.init(Q), u.slidesHandler.init(Q), u.options.loop && u.slideLooper.loop(), k.offsetParent && D.length && u.dragHandler.init(Q), j = M.init(Q, q)))
        }

        function J(t, e) {
            let n = G();
            K(), _(T({
                startIndex: n
            }, t), e), F.emit("reInit")
        }

        function K() {
            u.dragHandler.destroy(), u.eventStore.clear(), u.translate.clear(), u.slideLooper.clear(), u.resizeHandler.destroy(), u.slidesHandler.destroy(), u.slidesInView.destroy(), u.animation.destroy(), M.destroy(), P.clear()
        }

        function X(t, e, n) {
            U.active && !R && (u.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : U.duration), u.scrollTo.index(t, n || 0))
        }

        function G() {
            return u.index.get()
        }
        let Q = {
            canScrollNext: function() {
                return u.index.add(1).get() !== G()
            },
            canScrollPrev: function() {
                return u.index.add(-1).get() !== G()
            },
            containerNode: function() {
                return k
            },
            internalEngine: function() {
                return u
            },
            destroy: function() {
                R || (R = !0, P.clear(), K(), F.emit("destroy"), F.clear())
            },
            off: B,
            on: z,
            emit: H,
            plugins: function() {
                return j
            },
            previousScrollSnap: function() {
                return u.indexPrevious.get()
            },
            reInit: J,
            rootNode: function() {
                return t
            },
            scrollNext: function(t) {
                X(u.index.add(1).get(), t, -1)
            },
            scrollPrev: function(t) {
                X(u.index.add(-1).get(), t, 1)
            },
            scrollProgress: function() {
                return u.scrollProgress.get(u.offsetLocation.get())
            },
            scrollSnapList: function() {
                return u.scrollSnapList
            },
            scrollTo: X,
            selectedScrollSnap: G,
            slideNodes: function() {
                return D
            },
            slidesInView: function() {
                return u.slidesInView.get()
            },
            slidesNotInView: function() {
                return u.slidesInView.get(!1)
            }
        };
        return _(e, n), setTimeout(() => F.emit("init"), 0), Q
    }

    function j(t = {}, e = []) {
        let n = (0, r.useRef)(t),
            i = (0, r.useRef)(e),
            [c, l] = (0, r.useState)(),
            [s, a] = (0, r.useState)(),
            f = (0, r.useCallback)(() => {
                c && c.reInit(n.current, i.current)
            }, [c]);
        return (0, r.useEffect)(() => {
            o(n.current, t) || (n.current = t, f())
        }, [t, f]), (0, r.useEffect)(() => {
            ! function(t, e) {
                if (t.length !== e.length) return !1;
                let n = u(t),
                    r = u(e);
                return n.every((t, e) => o(t, r[e]))
            }(i.current, e) && (i.current = e, f())
        }, [e, f]), (0, r.useEffect)(() => {
            if ("u" > typeof window && window.document && window.document.createElement && s) {
                O.globalOptions = j.globalOptions;
                let t = O(s, n.current, i.current);
                return l(t), () => t.destroy()
            }
            l(void 0)
        }, [s, l]), [a, c]
    }
    O.globalOptions = void 0, j.globalOptions = void 0;
    let k = {
        align: "start"
    };
    var D = t.i(123150),
        N = t.i(801335);
    let I = r.createContext(null);

    function A() {
        let t = r.useContext(I);
        if (!t) throw Error("useSliderContext must be used within a Slider");
        return t
    }
    t.s(["NextButton", 0, function(t) {
        let r, i, o, u, c, l, s, a = (0, n.c)(16);
        a[0] !== t ? ({
            asChild: r,
            children: i,
            className: o,
            ...u
        } = t, a[0] = t, a[1] = r, a[2] = i, a[3] = o, a[4] = u) : (r = a[1], i = a[2], o = a[3], u = a[4]);
        let f = r ? D.Slot : "button",
            {
                embla: d,
                canScrollNext: p
            } = A();
        a[5] !== d ? (c = () => d ? .scrollNext(), a[5] = d, a[6] = c) : c = a[6];
        let m = !p;
        return a[7] !== o ? (l = (0, N.cx)("cursor-pointer disabled:pointer-events-none", o), a[7] = o, a[8] = l) : l = a[8], a[9] !== f || a[10] !== i || a[11] !== u || a[12] !== c || a[13] !== m || a[14] !== l ? (s = (0, e.jsx)(f, { ...u,
            type: "button",
            "aria-label": "Next slide",
            onClick: c,
            disabled: m,
            className: l,
            children: i
        }), a[9] = f, a[10] = i, a[11] = u, a[12] = c, a[13] = m, a[14] = l, a[15] = s) : s = a[15], s
    }, "PrevButton", 0, function(t) {
        let r, i, o, u, c, l, s, a = (0, n.c)(16);
        a[0] !== t ? ({
            asChild: r,
            children: i,
            className: o,
            ...u
        } = t, a[0] = t, a[1] = r, a[2] = i, a[3] = o, a[4] = u) : (r = a[1], i = a[2], o = a[3], u = a[4]);
        let f = r ? D.Slot : "button",
            {
                embla: d,
                canScrollPrev: p
            } = A();
        a[5] !== d ? (c = () => d ? .scrollPrev(), a[5] = d, a[6] = c) : c = a[6];
        let m = !p;
        return a[7] !== o ? (l = (0, N.cx)("cursor-pointer disabled:pointer-events-none", o), a[7] = o, a[8] = l) : l = a[8], a[9] !== f || a[10] !== i || a[11] !== u || a[12] !== c || a[13] !== m || a[14] !== l ? (s = (0, e.jsx)(f, { ...u,
            type: "button",
            "aria-label": "Previous slide",
            onClick: c,
            disabled: m,
            className: l,
            children: i
        }), a[9] = f, a[10] = i, a[11] = u, a[12] = c, a[13] = m, a[14] = l, a[15] = s) : s = a[15], s
    }, "Root", 0, function(t) {
        let i, o, u, c, l, s = (0, n.c)(13),
            {
                children: a,
                className: f,
                options: d,
                plugins: p
            } = t;
        s[0] !== d ? (i = void 0 === d ? {} : d, s[0] = d, s[1] = i) : i = s[1];
        let m = i;
        s[2] !== m || s[3] !== p ? (o = {
            options: m,
            plugins: p
        }, s[2] = m, s[3] = p, s[4] = o) : o = s[4];
        let g = function(t) {
            let e, i, o, u, c, l, s = (0, n.c)(16),
                {
                    options: a,
                    plugins: f
                } = t;
            s[0] !== a ? (e = { ...k,
                ...a
            }, s[0] = a, s[1] = e) : e = s[1];
            let [d, p] = j(e, f), [m, g] = r.useState(0), [h, x] = r.useState(0);
            s[2] === Symbol.for("react.memo_cache_sentinel") ? (i = [], s[2] = i) : i = s[2];
            let [b, v] = r.useState(i), [y, S] = r.useState(!1), [w, E] = r.useState(!1);
            s[3] === Symbol.for("react.memo_cache_sentinel") ? (o = [], s[3] = o) : o = s[3];
            let [O, D] = r.useState(o);
            return s[4] !== p ? (u = () => {
                if (!p) return;
                let t = function() {
                        g(Math.max(0, Math.min(1, p ? .scrollProgress() ? ? 0)))
                    },
                    e = function() {
                        v(p ? .scrollSnapList() ? ? [])
                    },
                    n = function() {
                        x(p ? .selectedScrollSnap() ? ? 0)
                    },
                    r = function() {
                        S(p ? .canScrollPrev() ? ? !1), E(p ? .canScrollNext() ? ? !1)
                    },
                    i = function() {
                        D(p ? .slidesInView() ? ? [])
                    },
                    o = function() {
                        t(), e(), n(), r(), i()
                    },
                    u = function() {
                        n(), r(), i()
                    },
                    c = function() {
                        t(), r(), i()
                    },
                    l = function() {
                        t()
                    };
                return o(), p.on("reInit", o), p.on("scroll", c), p.on("select", u), p.on("slideFocus", l), () => {
                    p ? .off("reInit", o), p ? .off("scroll", c), p ? .off("select", u), p ? .off("slideFocus", l)
                }
            }, c = [p], s[4] = p, s[5] = u, s[6] = c) : (u = s[5], c = s[6]), r.useEffect(u, c), s[7] !== w || s[8] !== y || s[9] !== p || s[10] !== m || s[11] !== d || s[12] !== b || s[13] !== h || s[14] !== O ? (l = {
                embla: p,
                ref: d,
                progress: m,
                scrollSnaps: b,
                selectedIndex: h,
                canScrollPrev: y,
                canScrollNext: w,
                slidesInView: O
            }, s[7] = w, s[8] = y, s[9] = p, s[10] = m, s[11] = d, s[12] = b, s[13] = h, s[14] = O, s[15] = l) : l = s[15], l
        }(o);
        return s[5] !== f ? (u = (0, N.cx)("group/slider relative", f), s[5] = f, s[6] = u) : u = s[6], s[7] !== a || s[8] !== u ? (c = (0, e.jsx)("div", {
            "data-root": !0,
            className: u,
            children: a
        }), s[7] = a, s[8] = u, s[9] = c) : c = s[9], s[10] !== g || s[11] !== c ? (l = (0, e.jsx)(I.Provider, {
            value: g,
            children: c
        }), s[10] = g, s[11] = c, s[12] = l) : l = s[12], l
    }, "Slide", 0, function(t) {
        let r, i, o, u, c, l, s = (0, n.c)(12);
        s[0] !== t ? ({
            children: i,
            className: o,
            asChild: r,
            ...u
        } = t, s[0] = t, s[1] = r, s[2] = i, s[3] = o, s[4] = u) : (r = s[1], i = s[2], o = s[3], u = s[4]);
        let a = r ? D.Slot : "div";
        return s[5] !== o ? (c = (0, N.cx)("min-w-0 shrink-0 grow-0 select-none", o), s[5] = o, s[6] = c) : c = s[6], s[7] !== a || s[8] !== i || s[9] !== u || s[10] !== c ? (l = (0, e.jsx)(a, {
            "data-slide": !0,
            ...u,
            className: c,
            children: i
        }), s[7] = a, s[8] = i, s[9] = u, s[10] = c, s[11] = l) : l = s[11], l
    }, "Slides", 0, function(t) {
        let r, i, o, u, c, l, s = (0, n.c)(12);
        s[0] !== t ? ({
            children: i,
            className: o,
            asChild: r,
            ...u
        } = t, s[0] = t, s[1] = r, s[2] = i, s[3] = o, s[4] = u) : (r = s[1], i = s[2], o = s[3], u = s[4]);
        let a = r ? D.Slot : "div";
        return s[5] !== o ? (c = (0, N.cx)("flex items-stretch will-change-transform", o), s[5] = o, s[6] = c) : c = s[6], s[7] !== a || s[8] !== i || s[9] !== u || s[10] !== c ? (l = (0, e.jsx)(a, {
            "data-slides": !0,
            ...u,
            className: c,
            children: i
        }), s[7] = a, s[8] = i, s[9] = u, s[10] = c, s[11] = l) : l = s[11], l
    }, "Viewport", 0, function(t) {
        let r, i, o, u, c, l = (0, n.c)(11);
        l[0] !== t ? ({
            children: i,
            className: o,
            asChild: r,
            ...u
        } = t, l[0] = t, l[1] = r, l[2] = i, l[3] = o, l[4] = u) : (r = l[1], i = l[2], o = l[3], u = l[4]);
        let s = r ? D.Slot : "div",
            {
                ref: a
            } = A();
        return l[5] !== s || l[6] !== i || l[7] !== o || l[8] !== u || l[9] !== a ? (c = (0, e.jsx)(s, {
            "data-viewport": !0,
            ref: a,
            ...u,
            className: o,
            children: i
        }), l[5] = s, l[6] = i, l[7] = o, l[8] = u, l[9] = a, l[10] = c) : c = l[10], c
    }, "useSliderContext", 0, A], 27312)
}]);