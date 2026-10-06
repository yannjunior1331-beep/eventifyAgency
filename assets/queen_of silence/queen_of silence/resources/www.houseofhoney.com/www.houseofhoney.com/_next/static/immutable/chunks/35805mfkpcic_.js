(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 439895, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645);

    function n(e, t) {
        if ("function" == typeof e) return e(t);
        "object" == typeof e && null !== e && "current" in e && (e.current = t)
    }
    var i = e.i(642623),
        l = e.i(812152),
        s = e.i(88771),
        o = e.i(615683),
        c = e.i(801335),
        u = e.i(205980),
        d = e.i(46454);
    e.s(["AnimatedReveal", 0, function(e) {
        let m, p, f, h, x, g, v, y = (0, a.c)(23),
            {
                ref: b,
                children: j,
                className: w,
                y: N,
                duration: S,
                animationDelay: _,
                viewport: k
            } = e,
            I = void 0 === N ? 16 : N,
            E = void 0 === S ? .8 : S,
            P = void 0 === _ ? 0 : _,
            A = (0, l.useDraftMode)(),
            {
                isComplete: C
            } = (0, u.useContentReady)(),
            T = (0, s.usePrefersReducedMotion)(),
            {
                enteredForGate: z,
                vpResolved: L,
                viewportDisabled: R,
                onViewportEnter: M,
                onViewportLeave: D
            } = (0, o.useViewportEnteredForGate)(k),
            O = r.useRef(null),
            B = function(...e) {
                return (0, r.useCallback)(function(...e) {
                    let t = new Map;
                    return a => {
                        if (e.forEach(e => {
                                let r = n(e, a);
                                r && t.set(e, r)
                            }), t.size > 0) return () => {
                            e.forEach(e => {
                                let a = t.get(e);
                                a && "function" == typeof a ? a() : n(e, null)
                            }), t.clear()
                        }
                    }
                }(...e), e)
            }(b, O),
            [V, G] = r.useState(!1);
        y[0] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
            let e = O.current;
            e && G(e.parentElement ? .closest("a, button, input, select, textarea, [tabindex]") != null)
        }, p = [], y[0] = m, y[1] = p) : (m = y[0], p = y[1]), r.useLayoutEffect(m, p);
        let F = A || T,
            $ = F || C && (A || z);
        y[2] !== I ? (f = {
            opacity: .001,
            y: I
        }, y[2] = I, y[3] = f) : f = y[3];
        let U = f;
        y[4] === Symbol.for("react.memo_cache_sentinel") ? (h = {
            opacity: 1,
            y: 0
        }, y[4] = h) : h = y[4];
        let X = h;
        y[5] !== P || y[6] !== E || y[7] !== F ? (x = F ? {
            duration: 0
        } : {
            duration: E,
            delay: P,
            ease: d.easeInOut
        }, y[5] = P, y[6] = E, y[7] = F, y[8] = x) : x = y[8];
        let q = x,
            H = R ? void 0 : M,
            K = R ? void 0 : D,
            W = !$ && !V || void 0;
        y[9] !== w ? (g = (0, c.cx)(w), y[9] = w, y[10] = g) : g = y[10];
        let Z = $ ? X : U,
            Y = R ? $ ? X : U : void 0,
            J = R ? void 0 : $ ? X : U;
        return y[11] !== j || y[12] !== B || y[13] !== K || y[14] !== W || y[15] !== g || y[16] !== Z || y[17] !== Y || y[18] !== J || y[19] !== H || y[20] !== q || y[21] !== L ? (v = (0, t.jsx)(i.div, {
            ref: B,
            onViewportEnter: H,
            onViewportLeave: K,
            inert: W,
            className: g,
            initial: Z,
            animate: Y,
            whileInView: J,
            viewport: L,
            transition: q,
            children: j
        }), y[11] = j, y[12] = B, y[13] = K, y[14] = W, y[15] = g, y[16] = Z, y[17] = Y, y[18] = J, y[19] = H, y[20] = q, y[21] = L, y[22] = v) : v = y[22], v
    }], 439895)
}, 319352, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(88653),
        n = e.i(624006),
        i = e.i(642623),
        l = e.i(247984),
        s = e.i(271645),
        o = e.i(407194),
        c = e.i(610053),
        u = e.i(374684),
        d = e.i(409918),
        m = e.i(801335),
        p = e.i(527897);

    function f(e) {
        let r, n = (0, a.c)(64),
            {
                href: i,
                title: l,
                issueNumber: s,
                publishedAt: f,
                media: h,
                variant: x,
                className: g,
                mediaRatio: v
            } = e,
            y = void 0 === x ? "default" : x,
            b = void 0 === v ? "1/1" : v;
        n[0] !== f ? (r = f ? (0, p.formatDate)(f) : void 0, n[0] = f, n[1] = r) : r = n[1];
        let j = r;
        if ("default" === y) {
            let e, a, r, p, f, x, v, y, w, N, S, _, k, I, E;
            n[2] !== g ? (e = (0, m.cx)("group/item block", g), n[2] = g, n[3] = e) : e = n[3], n[4] !== b ? (a = {
                aspectRatio: b
            }, n[4] = b, n[5] = a) : a = n[5], n[6] !== b ? (r = {
                aspectRatio: b
            }, n[6] = b, n[7] = r) : r = n[7], n[8] === Symbol.for("react.memo_cache_sentinel") ? (p = {
                muted: !0,
                playsInline: !0,
                noControls: !0
            }, f = {
                sizes: "100vw lg:50vw"
            }, n[8] = p, n[9] = f) : (p = n[8], f = n[9]), n[10] !== h || n[11] !== b ? (x = (0, t.jsx)(d.SanityMedia, {
                media: h,
                aspectRatio: b,
                autoPlay: "in-view",
                loop: !0,
                videoProps: p,
                imageProps: f,
                className: "size-full scale-100 object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
            }), n[10] = h, n[11] = b, n[12] = x) : x = n[12], n[13] !== r || n[14] !== x ? (v = (0, t.jsx)(c.InnerParallax, {
                overflow: "30 lg:80",
                style: r,
                children: x
            }), n[13] = r, n[14] = x, n[15] = v) : v = n[15], n[16] !== v || n[17] !== a ? (y = (0, t.jsx)("div", {
                className: "relative",
                style: a,
                children: v
            }), n[16] = v, n[17] = a, n[18] = y) : y = n[18];
            let P = s ? ? "";
            return n[19] !== P ? (w = (0, t.jsx)("p", {
                className: "row-span-2 text-body-30-normal uppercase opacity-70",
                children: P
            }), n[19] = P, n[20] = w) : w = n[20], n[21] !== j ? (N = j && (0, t.jsx)("p", {
                className: "col-start-2 text-body-30-normal opacity-70",
                children: j
            }), n[21] = j, n[22] = N) : N = n[22], n[23] !== l ? (S = l && (0, t.jsx)("h3", {
                className: "line-clamp-3 font-noe-text text-title-10 uppercase",
                children: (0, t.jsx)(o.AnimatedText, {
                    children: l
                })
            }), n[23] = l, n[24] = S) : S = n[24], n[25] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, t.jsx)("p", {
                className: "text-subtitle-20-normal opacity-60 transition-opacity duration-400 ease-in-out group-hover/item:opacity-100",
                children: "Read more"
            }), n[25] = _) : _ = n[25], n[26] !== S ? (k = (0, t.jsxs)("div", {
                className: "col-start-2 row-start-2 flex flex-col gap-8",
                children: [S, _]
            }), n[26] = S, n[27] = k) : k = n[27], n[28] !== w || n[29] !== N || n[30] !== k ? (I = (0, t.jsx)("div", {
                className: "flex flex-col gap-16 px-16 pt-16 pb-56 lg:pb-96",
                children: (0, t.jsxs)("div", {
                    className: "grid grid-cols-[auto_1fr] gap-x-24 gap-y-24 border-current/30 border-t pt-24",
                    children: [w, N, k]
                })
            }), n[28] = w, n[29] = N, n[30] = k, n[31] = I) : I = n[31], n[32] !== i || n[33] !== y || n[34] !== I || n[35] !== e ? (E = (0, t.jsxs)(u.Link, {
                href: i,
                className: e,
                children: [y, I]
            }), n[32] = i, n[33] = y, n[34] = I, n[35] = e, n[36] = E) : E = n[36], E
        }
        if ("featured" === y) {
            let e, a, r, p, f, x, v, y, b, w, N, S, _;
            n[37] !== g ? (e = (0, m.cx)("group/item relative isolate flex min-h-[70svh] flex-col px-8 py-24 lg:min-h-svh lg:px-24", g), n[37] = g, n[38] = e) : e = n[38], n[39] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("div", {
                className: "absolute inset-0 -z-1 bg-base-dark-brown/50"
            }), n[39] = a) : a = n[39], n[40] === Symbol.for("react.memo_cache_sentinel") ? (r = {
                muted: !0,
                playsInline: !0,
                noControls: !0
            }, p = {
                sizes: "100vw lg:50vw"
            }, n[40] = r, n[41] = p) : (r = n[40], p = n[41]), n[42] !== h ? (f = (0, t.jsx)(c.InnerParallax, {
                overflow: "30 lg:80",
                className: "absolute inset-0 -z-2",
                children: (0, t.jsx)(d.SanityMedia, {
                    media: h,
                    autoPlay: "in-view",
                    loop: !0,
                    videoProps: r,
                    imageProps: p,
                    className: "size-full scale-100 object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
                })
            }), n[42] = h, n[43] = f) : f = n[43];
            let k = s ? ? "";
            return n[44] !== k ? (x = (0, t.jsx)("p", {
                className: "row-span-2 text-body-30-normal uppercase opacity-70",
                children: k
            }), n[44] = k, n[45] = x) : x = n[45], n[46] !== j ? (v = j && (0, t.jsx)("p", {
                className: "col-start-2 text-body-30-normal opacity-70",
                children: j
            }), n[46] = j, n[47] = v) : v = n[47], n[48] !== x || n[49] !== v ? (y = (0, t.jsxs)("div", {
                className: "contents",
                children: [x, v]
            }), n[48] = x, n[49] = v, n[50] = y) : y = n[50], n[51] !== l ? (b = l && (0, t.jsx)("h3", {
                className: "line-clamp-5 font-noe-text text-title-20 uppercase",
                children: (0, t.jsx)(o.AnimatedText, {
                    children: l
                })
            }), n[51] = l, n[52] = b) : b = n[52], n[53] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, t.jsx)("p", {
                className: "text-subtitle-20-normal opacity-70 transition-opacity duration-400 ease-in-out group-hover/item:opacity-100",
                children: "Read more"
            }), n[53] = w) : w = n[53], n[54] !== b ? (N = (0, t.jsxs)("div", {
                className: "col-start-2 row-start-2 flex flex-col justify-end gap-8",
                children: [b, w]
            }), n[54] = b, n[55] = N) : N = n[55], n[56] !== y || n[57] !== N ? (S = (0, t.jsxs)("div", {
                className: "grid flex-1 grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-24 gap-y-24 border-current/30 border-t pt-24",
                children: [y, N]
            }), n[56] = y, n[57] = N, n[58] = S) : S = n[58], n[59] !== i || n[60] !== S || n[61] !== e || n[62] !== f ? (_ = (0, t.jsxs)(u.Link, {
                href: i,
                className: e,
                children: [a, f, S]
            }), n[59] = i, n[60] = S, n[61] = e, n[62] = f, n[63] = _) : _ = n[63], _
        }
        return null
    }
    var h = e.i(477952),
        x = e.i(471671),
        g = e.i(46454);

    function v(e) {
        let r, n, i, s, o = (0, a.c)(12),
            {
                children: c,
                isActive: u,
                onClick: d,
                variant: p,
                className: f
            } = e,
            h = void 0 !== u && u,
            g = "dark" === (0, l.stegaClean)(void 0 === p ? "light" : p) ? h ? "text-body-20-strong text-theme-text-primary" : "text-body-20-normal text-theme-text-primary/50 hover:text-theme-text-primary" : h ? "text-body-20-strong text-theme-text-secondary" : "text-body-20-normal text-theme-text-secondary/50 hover:text-theme-text-secondary";
        return o[0] !== f || o[1] !== g ? (r = (0, m.cx)("group/filter flex h-32 cursor-pointer items-center gap-8 text-left transition-colors duration-400 ease-in-out", g, f), o[0] = f, o[1] = g, o[2] = r) : r = o[2], o[3] !== h ? (n = h ? (0, t.jsx)(x.Icon, {
            name: "close",
            className: "size-8"
        }) : (0, t.jsx)("span", {
            className: "block size-6 bg-current transition-all duration-400 ease-in-out group-hover/filter:rounded-[50%]"
        }), o[3] = h, o[4] = n) : n = o[4], o[5] !== c ? (i = (0, t.jsx)("span", {
            children: c
        }), o[5] = c, o[6] = i) : i = o[6], o[7] !== d || o[8] !== r || o[9] !== n || o[10] !== i ? (s = (0, t.jsxs)("button", {
            className: r,
            onClick: d,
            type: "button",
            children: [n, i]
        }), o[7] = d, o[8] = r, o[9] = n, o[10] = i, o[11] = s) : s = o[11], s
    }

    function y(e, a) {
        let r = 0 === a;
        return (0, t.jsx)(i.div, {
            className: (0, m.cx)(r ? "col-span-full" : "col-span-full lg:col-span-4"),
            layout: !0,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .6,
                ease: g.easeInOut
            },
            children: (0, t.jsx)(f, {
                href: e.uri,
                title: e.title,
                publishedAt: e.publishedAt,
                issueNumber: e.issueNumber,
                media: e.media,
                variant: r ? "featured" : "default",
                className: (0, m.cx)(!r && "text-theme-text-secondary")
            })
        }, e.key)
    }

    function b(e) {
        return e + 7
    }

    function j(e) {
        return e._id
    }
    e.s(["ArticleGrid", 0, function(e) {
        let i, o, c, u, d, p, f, g, w, N, S, _, k, I, E, P, A, C = (0, a.c)(51),
            {
                showFilters: T,
                items: z,
                categories: L,
                variant: R
            } = e,
            M = void 0 === R ? "light" : R;
        C[0] !== M ? (i = (0, l.stegaClean)(M), C[0] = M, C[1] = i) : i = C[1];
        let D = i;
        C[2] === Symbol.for("react.memo_cache_sentinel") ? (o = [], C[2] = o) : o = C[2];
        let [O, B] = s.useState(o), [V, G] = s.useState(7);
        e: {
            let e;
            if (!z) {
                let e;
                C[3] === Symbol.for("react.memo_cache_sentinel") ? (e = [], C[3] = e) : e = C[3], c = e;
                break e
            }
            if (0 === O.length) {
                c = z;
                break e
            }
            if (C[4] !== z || C[5] !== O) {
                let t;
                C[7] !== O ? (t = e => {
                    if ("reference" !== e.type) return !0;
                    let t = e.categories ? .map(j) ? ? [];
                    return O.every(e => t.includes(e))
                }, C[7] = O, C[8] = t) : t = C[8], e = z.filter(t), C[4] = z, C[5] = O, C[6] = e
            } else e = C[6];c = e
        }
        let F = c;
        if (C[9] !== L || C[10] !== D || C[11] !== F || C[12] !== O || C[13] !== T || C[14] !== M || C[15] !== V) {
            let e, a, i = F.slice(0, V);
            f = F.length > V, C[25] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                B(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e]), G(7)
            }, C[25] = e) : e = C[25];
            let l = e;
            C[26] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                G(b)
            }, C[26] = a) : a = C[26], p = a, S = "relative z-10", C[27] !== L || C[28] !== D || C[29] !== O || C[30] !== T || C[31] !== M ? (_ = T && L && L.length > 0 && (0, t.jsxs)("div", {
                className: "grid grid-cols-[auto_1fr] items-center gap-24 py-24 lg:grid-cols-3 lg:gap-8",
                children: [(0, t.jsx)("div", {
                    className: (0, m.cx)("relative z-10 shrink-0 whitespace-nowrap text-body-20-normal", "dark" === D ? "text-theme-text-primary" : "text-theme-text-secondary"),
                    children: "Filter by"
                }), (0, t.jsx)("div", {
                    className: "scrollbar-invisible -mr-8 flex items-center gap-16 overflow-x-auto lg:col-span-2 lg:mr-0",
                    children: L.map(e => (0, t.jsx)(v, {
                        variant: M,
                        isActive: O.includes(e._id),
                        onClick: () => l(e._id),
                        className: "last:mr-8",
                        children: e.name
                    }, e._id))
                })]
            }), C[27] = L, C[28] = D, C[29] = O, C[30] = T, C[31] = M, C[32] = _) : _ = C[32], d = n.LayoutGroup, N = "grid grid-cols-1 gap-8 lg:grid-cols-12", u = r.AnimatePresence, g = "popLayout", w = i.map(y), C[9] = L, C[10] = D, C[11] = F, C[12] = O, C[13] = T, C[14] = M, C[15] = V, C[16] = u, C[17] = d, C[18] = p, C[19] = f, C[20] = g, C[21] = w, C[22] = N, C[23] = S, C[24] = _
        } else u = C[16], d = C[17], p = C[18], f = C[19], g = C[20], w = C[21], N = C[22], S = C[23], _ = C[24];
        return C[33] !== u || C[34] !== g || C[35] !== w ? (k = (0, t.jsx)(u, {
            mode: g,
            children: w
        }), C[33] = u, C[34] = g, C[35] = w, C[36] = k) : k = C[36], C[37] !== k || C[38] !== N ? (I = (0, t.jsx)("div", {
            className: N,
            children: k
        }), C[37] = k, C[38] = N, C[39] = I) : I = C[39], C[40] !== d || C[41] !== I ? (E = (0, t.jsx)(d, {
            children: I
        }), C[40] = d, C[41] = I, C[42] = E) : E = C[42], C[43] !== p || C[44] !== f ? (P = f && (0, t.jsx)(h.Button, {
            onClick: p,
            className: "mt-8 w-full",
            rightIcon: (0, t.jsx)(x.Icon, {
                name: "load",
                className: "size-16"
            }),
            children: "Load More"
        }), C[43] = p, C[44] = f, C[45] = P) : P = C[45], C[46] !== E || C[47] !== P || C[48] !== S || C[49] !== _ ? (A = (0, t.jsxs)("div", {
            className: S,
            children: [_, E, P]
        }), C[46] = E, C[47] = P, C[48] = S, C[49] = _, C[50] = A) : A = C[50], A
    }], 319352)
}, 508798, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(407194),
        n = e.i(477952),
        i = e.i(610053),
        l = e.i(895743),
        s = e.i(919848),
        o = e.i(801335);
    e.s(["Banner", 0, function(e) {
        let c, u, d, m, p, f, h, x, g, v, y, b, j = (0, a.c)(35),
            {
                image: w,
                layout: N,
                eyebrow: S,
                headline: _,
                cta: k,
                className: I
            } = e;
        j[0] !== I ? (c = (0, o.cx)("relative isolate px-8 py-96 lg:py-102", I), j[0] = I, j[1] = c) : c = j[1], j[2] !== w ? (u = (0, t.jsx)(i.InnerParallax, {
            overflow: "30 lg:80",
            className: "absolute inset-0",
            children: (0, t.jsx)(s.SanityImage, {
                image: w,
                className: "size-full object-cover"
            })
        }), j[2] = w, j[3] = u) : u = j[3];
        let E = "full" === N && "lg:col-span-10 lg:col-start-2",
            P = "compact" === N && "lg:col-span-6 lg:col-start-4";
        j[4] !== E || j[5] !== P ? (d = (0, o.cx)("gap-8 bg-theme-bg-secondary p-16 text-theme-text-secondary", E, P), j[4] = E, j[5] = P, j[6] = d) : d = j[6], j[7] !== S || j[8] !== N ? (m = S && (0, t.jsx)("p", {
            className: (0, o.cx)("flex-1 text-body-30-normal uppercase", "compact" === N && "text-center"),
            children: S
        }), j[7] = S, j[8] = N, j[9] = m) : m = j[9], j[10] !== w || j[11] !== N ? (p = "full" === N && (0, t.jsx)(s.SanityImage, {
            image: w,
            aspectRatio: "4/5",
            width: 112
        }), j[10] = w, j[11] = N, j[12] = p) : p = j[12], j[13] !== m || j[14] !== p ? (f = (0, t.jsxs)("div", {
            className: "flex",
            children: [m, p]
        }), j[13] = m, j[14] = p, j[15] = f) : f = j[15];
        let A = "full" === N && "mt-50 gap-24",
            C = "compact" === N && "mt-48 gap-48 text-center lg:mt-96 lg:gap-96";
        return j[16] !== C || j[17] !== A ? (h = (0, o.cx)("flex flex-col", A, C), j[16] = C, j[17] = A, j[18] = h) : h = j[18], j[19] !== _ ? (x = _ && (0, t.jsx)("h2", {
            className: "whitespace-pre-line font-noe-text text-title-20 uppercase",
            children: (0, t.jsx)(r.AnimatedText, {
                children: _
            })
        }), j[19] = _, j[20] = x) : x = j[20], j[21] !== k ? (g = k ? .href && (0, t.jsx)(n.Button, {
            className: "w-full",
            neutral: !0,
            asChild: !0,
            rightIcon: (0, t.jsx)(l.SanityLinkIcon, {
                link: k,
                className: "size-16"
            }),
            children: (0, t.jsx)(l.SanityLink, {
                link: k,
                children: k.text
            })
        }), j[21] = k, j[22] = g) : g = j[22], j[23] !== h || j[24] !== x || j[25] !== g ? (v = (0, t.jsxs)("div", {
            className: h,
            children: [x, g]
        }), j[23] = h, j[24] = x, j[25] = g, j[26] = v) : v = j[26], j[27] !== v || j[28] !== d || j[29] !== f ? (y = (0, t.jsx)("div", {
            className: "relative z-20 grid grid-cols-1 gap-16 lg:grid-cols-12",
            children: (0, t.jsxs)("div", {
                className: d,
                children: [f, v]
            })
        }), j[27] = v, j[28] = d, j[29] = f, j[30] = y) : y = j[30], j[31] !== c || j[32] !== y || j[33] !== u ? (b = (0, t.jsxs)("div", {
            className: c,
            children: [u, y]
        }), j[31] = c, j[32] = y, j[33] = u, j[34] = b) : b = j[34], b
    }])
}, 455071, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645),
        n = e.i(887652);
    e.i(486427);
    var i = e.i(83352),
        l = e.i(83411),
        s = e.i(287022);

    function o(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var c = e.i(737806),
        u = e.i(895420);

    function d(e, t = {}) {
        return function(e, t = {}) {
            let {
                isStatic: a
            } = (0, r.useContext)(c.MotionConfigContext), d = () => (0, l.isMotionValue)(e) ? e.get() : e;
            if (a) return (0, u.useTransform)(d);
            let m = (0, n.useMotionValue)(d());
            return (0, r.useInsertionEffect)(() => (function(e, t, a = {}) {
                let r, n = e.get(),
                    c = null,
                    u = n,
                    d = "string" == typeof n ? n.replace(/[\d.-]/g, "") : void 0,
                    m = () => {
                        c && (c.stop(), c = null), e.animation = void 0
                    },
                    p = () => {
                        (() => {
                            let t = o(e.get()),
                                n = o(u);
                            if (t === n) return m();
                            let l = c ? c.getGeneratorVelocity() : e.getVelocity();
                            m(), c = new i.JSAnimation({
                                keyframes: [t, n],
                                velocity: l,
                                type: "spring",
                                restDelta: .001,
                                restSpeed: .01,
                                ...a,
                                onUpdate: r
                            })
                        })(), e.animation = c ? ? void 0, e.events.animationStart ? .notify(), c ? .then(() => {
                            e.animation = void 0, e.events.animationComplete ? .notify()
                        })
                    };
                if (e.attach((e, t) => {
                        u = e, r = e => {
                            var a, r;
                            return t((a = e, (r = d) ? a + r : a))
                        }, s.frame.postRender(p)
                    }, m), (0, l.isMotionValue)(t)) {
                    let r = !0 === a.skipInitialAnimation,
                        n = t.on("change", t => {
                            var a, n, i, l;
                            r ? (r = !1, e.jump((a = t, (n = d) ? a + n : a), !1)) : e.set((i = t, (l = d) ? i + l : i))
                        }),
                        i = e.on("destroy", n);
                    return () => {
                        n(), i()
                    }
                }
                return m
            })(m, e, t), [m, JSON.stringify(t)]), m
        }(e, {
            type: "spring",
            ...t
        })
    }
    var m = e.i(642623),
        p = e.i(537836);
    let f = (0, e.i(770703).default)(() => e.A(575382).then(e => e.RivePlayer), {
            loadableGenerated: {
                modules: [124265]
            },
            ssr: !1
        }),
        h = new Map;

    function x(e) {
        let n, i, l, s, o, c, u, d, m = (0, a.c)(13);
        m[0] !== e ? ({
            src: l,
            fallback: n,
            ...i
        } = e, m[0] = e, m[1] = n, m[2] = i, m[3] = l) : (n = m[1], i = m[2], l = m[3]);
        let [p, x] = r.useState(!1), [g, v] = r.useState(null);
        return (m[4] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
            x(!0)
        }, o = [], m[4] = s, m[5] = o) : (s = m[4], o = m[5]), r.useEffect(s, o), m[6] !== p || m[7] !== l ? (c = () => {
            if (!l || !p) return;
            let e = !1;
            return (function(e) {
                if (h.has(e)) return h.get(e);
                let t = fetch(e).then(e => e.arrayBuffer()).catch(t => {
                    throw h.delete(e), t
                });
                return h.set(e, t), t
            })(l).then(t => {
                e || v(t)
            }).catch(() => {
                e || v(null)
            }), () => {
                e = !0
            }
        }, u = [l, p], m[6] = p, m[7] = l, m[8] = c, m[9] = u) : (c = m[8], u = m[9]), r.useEffect(c, u), l && p) ? g ? (m[10] !== g || m[11] !== i ? (d = (0, t.jsx)(f, {
            buffer: g,
            ...i
        }), m[10] = g, m[11] = i, m[12] = d) : d = m[12], d) : n || null : null
    }
    var g = e.i(801335);
    e.s(["Cursor", 0, function(e) {
        var i, l;
        let s, o, c, u, f, h, v, y, b, j = (0, a.c)(17),
            {
                className: w
            } = e,
            N = (0, n.useMotionValue)(0),
            S = (0, n.useMotionValue)(0),
            _ = (0, p.useIsTouchDevice)(),
            [k, I] = r.useState(!1);
        j[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
            damping: 35,
            stiffness: 120
        }, j[0] = s) : s = j[0];
        let E = s,
            P = d(N, E),
            A = d(S, E);
        if (j[1] !== N || j[2] !== S ? (o = e => {
                N.set(e.clientX + 40), S.set(e.clientY + 40), I(!0)
            }, j[1] = N, j[2] = S, j[3] = o) : o = j[3], i = "mousemove", l = o, b = (0, r.useEffectEvent)(l), (0, r.useEffect)(() => (window.addEventListener(i, b, void 0), () => window.removeEventListener(i, b, void 0)), [i]), _) return null;
        j[4] !== w ? (c = (0, g.cx)("pointer-events-none fixed z-9999 size-40 -translate-x-1/2 -translate-y-1/2", w), j[4] = w, j[5] = c) : c = j[5], j[6] !== P || j[7] !== A ? (u = {
            x: P,
            y: A
        }, j[6] = P, j[7] = A, j[8] = u) : u = j[8], j[9] === Symbol.for("react.memo_cache_sentinel") ? (f = {
            opacity: 0
        }, j[9] = f) : f = j[9];
        let C = +!!k;
        return j[10] !== C ? (h = {
            opacity: C
        }, j[10] = C, j[11] = h) : h = j[11], j[12] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, t.jsx)(x, {
            src: "/bee.riv",
            autoplay: !0
        }), j[12] = v) : v = j[12], j[13] !== c || j[14] !== u || j[15] !== h ? (y = (0, t.jsx)(m.div, {
            className: c,
            style: u,
            initial: f,
            animate: h,
            children: v
        }), j[13] = c, j[14] = u, j[15] = h, j[16] = y) : y = j[16], y
    }], 455071)
}, 656689, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(790815),
        n = e.i(522016),
        i = e.i(618566),
        l = e.i(271645),
        s = e.i(471671),
        o = e.i(871393),
        c = e.i(801335),
        u = e.i(46454);
    let d = "data-lightbox-wait";

    function m(e) {
        let t, r, n, s = (0, a.c)(6),
            {
                onChange: o
            } = e,
            c = (0, i.useSearchParams)();
        s[0] !== c ? (t = c.toString(), s[0] = c, s[1] = t) : t = s[1];
        let u = t;
        return s[2] !== o || s[3] !== u ? (r = () => {
            o(u)
        }, n = [u, o], s[2] = o, s[3] = u, s[4] = r, s[5] = n) : (r = s[4], n = s[5]), l.useEffect(r, n), null
    }
    e.s(["LightboxLink", 0, function(e) {
        let p, f, h, x, g, v, y, b, j, w, N, S, _, k, I, E, P, A, C, T, z, L, R, M, D, O = (0, a.c)(48);
        O[0] !== e ? ({
            sectionKey: b,
            index: h,
            onMouseEnter: g,
            onMouseLeave: v,
            onClick: x,
            children: p,
            className: f,
            ...y
        } = e, O[0] = e, O[1] = p, O[2] = f, O[3] = h, O[4] = x, O[5] = g, O[6] = v, O[7] = y, O[8] = b) : (p = O[1], f = O[2], h = O[3], x = O[4], g = O[5], v = O[6], y = O[7], b = O[8]);
        let B = (0, i.usePathname)(),
            [V, G] = l.useState(""),
            F = l.useRef(void 0),
            $ = l.useRef(!1),
            U = l.useRef(void 0),
            [X, q] = l.useState(!1),
            [H, K] = l.useState(!1);
        if (O[9] !== h || O[10] !== V || O[11] !== b) {
            let e = new URLSearchParams(V);
            e.set(o.LIGHTBOX_SECTION_PARAM, b), e.set(o.LIGHTBOX_INDEX_PARAM, String(h)), j = e.toString(), O[9] = h, O[10] = V, O[11] = b, O[12] = j
        } else j = O[12];
        let W = j,
            Z = W ? `${B}?${W}` : B;
        O[13] === Symbol.for("react.memo_cache_sentinel") ? (w = () => () => {
            clearTimeout(F.current), clearTimeout(U.current), $.current && ($.current = !1, document.documentElement.removeAttribute(d))
        }, N = [], O[13] = w, O[14] = N) : (w = O[13], N = O[14]), l.useEffect(w, N), O[15] !== h || O[16] !== V || O[17] !== b ? (S = () => {
            if (!$.current) return;
            let e = new URLSearchParams(V),
                t = e.get(o.LIGHTBOX_SECTION_PARAM),
                a = e.get(o.LIGHTBOX_INDEX_PARAM);
            t === b && a === String(h) && (clearTimeout(U.current), $.current = !1, document.documentElement.removeAttribute(d))
        }, _ = [V, b, h], O[15] = h, O[16] = V, O[17] = b, O[18] = S, O[19] = _) : (S = O[18], _ = O[19]), l.useEffect(S, _), O[20] !== h || O[21] !== x || O[22] !== b ? (k = e => {
            let t;
            if (x ? .(e), e.defaultPrevented || (t = e.currentTarget.getAttribute("target")) && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || 1 === e.nativeEvent.button) return;
            let a = new URLSearchParams(window.location.search),
                r = a.get(o.LIGHTBOX_SECTION_PARAM),
                n = a.get(o.LIGHTBOX_INDEX_PARAM);
            (r !== b || n !== String(h)) && (clearTimeout(U.current), $.current = !0, document.documentElement.setAttribute(d, ""), U.current = setTimeout(() => {
                $.current && ($.current = !1, document.documentElement.removeAttribute(d))
            }, 5e3))
        }, O[20] = h, O[21] = x, O[22] = b, O[23] = k) : k = O[23], O[24] !== g ? (I = e => {
            g ? .(e), q(!0)
        }, O[24] = g, O[25] = I) : I = O[25], O[26] !== v ? (E = e => {
            v ? .(e), q(!1)
        }, O[26] = v, O[27] = E) : E = O[27], O[28] !== f ? (P = (0, c.cx)("relative isolate", f), O[28] = f, O[29] = P) : P = O[29], O[30] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, t.jsx)(l.Suspense, {
            fallback: null,
            children: (0, t.jsx)(m, {
                onChange: G
            })
        }), O[30] = A) : A = O[30];
        let Y = +!!(X || H);
        return O[31] !== Y ? (C = {
            opacity: Y
        }, O[31] = Y, O[32] = C) : C = O[32], O[33] === Symbol.for("react.memo_cache_sentinel") ? (T = {
            duration: .35,
            ease: u.easeInOut
        }, z = () => {
            clearTimeout(F.current), K(!0), F.current = setTimeout(() => {
                K(!1)
            }, 2e3)
        }, L = () => {
            clearTimeout(F.current), K(!1)
        }, R = (0, t.jsx)(s.Icon, {
            name: "expand",
            className: "size-16 text-base-cream"
        }), O[33] = T, O[34] = z, O[35] = L, O[36] = R) : (T = O[33], z = O[34], L = O[35], R = O[36]), O[37] !== C ? (M = (0, t.jsx)(r.span, {
            className: "pointer-events-none absolute top-16 right-16 z-1 flex size-32 items-center justify-center bg-base-cream/30",
            initial: !1,
            animate: C,
            transition: T,
            onViewportEnter: z,
            onViewportLeave: L,
            children: R
        }), O[37] = C, O[38] = M) : M = O[38], O[39] !== p || O[40] !== Z || O[41] !== y || O[42] !== M || O[43] !== k || O[44] !== I || O[45] !== E || O[46] !== P ? (D = (0, t.jsxs)(n.default, { ...y,
            href: Z,
            scroll: !1,
            prefetch: !0,
            onClick: k,
            onMouseEnter: I,
            onMouseLeave: E,
            className: P,
            children: [A, M, p]
        }), O[39] = p, O[40] = Z, O[41] = y, O[42] = M, O[43] = k, O[44] = I, O[45] = E, O[46] = P, O[47] = D) : D = O[47], D
    }])
}, 494204, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645),
        n = e.i(477952),
        i = e.i(471671);
    e.s(["LoadMoreList", 0, function(e) {
        let l, s, o, c, u, d = (0, a.c)(16),
            {
                children: m,
                initialCount: p,
                incrementBy: f
            } = e,
            h = void 0 === p ? 10 : p,
            x = void 0 === f ? 10 : f,
            g = r.Children.toArray(m),
            v = g.length;
        d[0] !== h || d[1] !== v ? (l = () => Math.min(h, v), d[0] = h, d[1] = v, d[2] = l) : l = d[2];
        let [y, b] = r.useState(l);
        if (d[3] !== b || d[4] !== v ? (s = () => {
                b(e => Math.min(e, v))
            }, d[3] = b, d[4] = v, d[5] = s) : s = d[5], d[6] !== v ? (o = [v], d[6] = v, d[7] = o) : o = d[7], r.useEffect(s, o), 0 === v) return null;
        let j = g.slice(0, y),
            w = y < v;
        return d[8] !== w || d[9] !== x || d[10] !== b || d[11] !== v ? (c = w && (0, t.jsx)(n.Button, {
            type: "button",
            className: "w-full",
            rightIcon: (0, t.jsx)(i.Icon, {
                name: "arrow-down"
            }),
            onClick: () => {
                b(e => Math.min(e + x, v))
            },
            children: "Load more"
        }), d[8] = w, d[9] = x, d[10] = b, d[11] = v, d[12] = c) : c = d[12], d[13] !== c || d[14] !== j ? (u = (0, t.jsxs)(t.Fragment, {
            children: [j, c]
        }), d[13] = c, d[14] = j, d[15] = u) : u = d[15], u
    }])
}, 120201, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(642623),
        n = e.i(271645),
        i = e.i(919848),
        l = e.i(801335),
        s = e.i(46454);
    let o = {
            hidden: {
                y: "100%"
            },
            active: {
                y: 0
            },
            previous: {
                y: 0
            }
        },
        c = {
            hidden: {
                scale: 1
            },
            active: {
                scale: 1
            },
            previous: {
                scale: .9
            }
        },
        u = {
            duration: 1.2,
            ease: s.easeInOut
        };
    e.s(["LogoTicker", 0, function(e) {
        let s, d, m, p, f, h = (0, a.c)(22),
            {
                logos: x,
                className: g
            } = e,
            v = x.length,
            [y, b] = n.useState(0);
        if (h[0] !== v ? (s = () => {
                if (v < 2) return;
                let e = setInterval(() => {
                    b(e => (e + 1) % v)
                }, 3500);
                return () => clearInterval(e)
            }, d = [v], h[0] = v, h[1] = s, h[2] = d) : (s = h[1], d = h[2]), n.useEffect(s, d), 0 === v) return null;
        if (1 === v) {
            let e, a, r, n = x[0];
            return n ? ._id ? (h[3] !== g ? (e = (0, l.cx)("relative flex aspect-[0.8] w-full max-w-172 items-center justify-center overflow-hidden bg-base-cream lg:max-w-252", g), h[3] = g, h[4] = e) : e = h[4], h[5] !== n ? (a = (0, t.jsx)(i.SanityImage, {
                image: n,
                width: 300,
                className: "size-full object-contain"
            }), h[5] = n, h[6] = a) : a = h[6], h[7] !== e || h[8] !== a ? (r = (0, t.jsx)("div", {
                className: e,
                children: a
            }), h[7] = e, h[8] = a, h[9] = r) : r = h[9], r) : null
        }
        if (h[10] !== g ? (m = (0, l.cx)("relative aspect-[0.8] w-full max-w-172 overflow-hidden bg-base-cream lg:max-w-252", g), h[10] = g, h[11] = m) : m = h[11], h[12] !== y || h[13] !== x || h[14] !== v) {
            let e;
            h[16] !== y || h[17] !== v ? (e = (e, a) => {
                let n = a === y ? "active" : a === (y - 1 + v) % v ? "previous" : "hidden",
                    l = +("active" === n),
                    s = 0 === a && "active" === n;
                return (0, t.jsx)(r.div, {
                    variants: o,
                    initial: !s && "hidden",
                    animate: n,
                    transition: u,
                    style: {
                        zIndex: l
                    },
                    className: "absolute inset-0 overflow-hidden",
                    children: (0, t.jsx)(r.div, {
                        variants: c,
                        initial: !s && "hidden",
                        animate: n,
                        transition: u,
                        className: "absolute inset-0 flex items-center justify-center bg-base-cream p-24",
                        children: e._id ? (0, t.jsx)(i.SanityImage, {
                            image: e,
                            width: 300,
                            className: "size-full object-contain"
                        }) : null
                    })
                }, `${e._id??"logo"}-${a}`)
            }, h[16] = y, h[17] = v, h[18] = e) : e = h[18], p = x.map(e), h[12] = y, h[13] = x, h[14] = v, h[15] = p
        } else p = h[15];
        return h[19] !== m || h[20] !== p ? (f = (0, t.jsx)("div", {
            className: m,
            children: p
        }), h[19] = m, h[20] = p, h[21] = f) : f = h[21], f
    }])
}, 425249, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(618566),
        n = e.i(271645);
    let i = {
        " ": "space",
        ArrowLeft: "arrowleft",
        ArrowRight: "arrowright",
        ArrowUp: "arrowup",
        ArrowDown: "arrowdown",
        Escape: "escape",
        Esc: "escape",
        esc: "escape",
        Enter: "enter",
        Tab: "tab",
        Backspace: "backspace",
        Delete: "delete",
        Insert: "insert",
        Home: "home",
        End: "end",
        PageUp: "pageup",
        PageDown: "pagedown",
        "+": "plus",
        "-": "minus",
        "*": "asterisk",
        "/": "slash"
    };

    function l(e) {
        let t = e.replace("Key", "").toLowerCase();
        return i[e] || t
    }
    var s = e.i(326999),
        o = e.i(471671),
        c = e.i(557568),
        u = e.i(27312),
        d = e.i(409918),
        m = e.i(801335);

    function p(e) {
        let t, r = (0, a.c)(3),
            {
                enabled: i
            } = e,
            {
                embla: s
            } = u.useSliderContext();
        return r[0] !== s || r[1] !== i ? (t = i ? [
            ["ArrowLeft", () => s ? .scrollPrev()],
            ["ArrowRight", () => s ? .scrollNext()]
        ] : [], r[0] = s, r[1] = i, r[2] = t) : t = r[2], ! function(e, t = ["INPUT", "TEXTAREA", "SELECT"], a = !1) {
            let r = (0, n.useEffectEvent)(r => {
                e.forEach(([e, n, i = {
                    preventDefault: !0,
                    usePhysicalKeys: !1
                }]) => {
                    var s;
                    (s = i.usePhysicalKeys, t => {
                        let a, r, n, i;
                        return function(e, t, a) {
                            let {
                                alt: r,
                                ctrl: n,
                                meta: i,
                                mod: s,
                                shift: o,
                                key: c
                            } = e, {
                                altKey: u,
                                ctrlKey: d,
                                metaKey: m,
                                shiftKey: p,
                                key: f,
                                code: h
                            } = t;
                            if (r !== u) return !1;
                            if (s) {
                                if (!d && !m) return !1
                            } else if (n !== d || i !== m) return !1;
                            return o === p && !!c && (a ? l(h) === l(c) : l(f ? ? h) === l(c))
                        }((r = {
                            alt: (a = e.toLowerCase().split("+").map(e => e.trim())).includes("alt"),
                            ctrl: a.includes("ctrl"),
                            meta: a.includes("meta"),
                            mod: a.includes("mod"),
                            shift: a.includes("shift")
                        }, n = ["alt", "ctrl", "meta", "shift", "mod"], i = a.find(e => !n.includes(e)), { ...r,
                            key: "[plus]" === i ? "+" : i
                        }), t, s)
                    })(r) && function(e, t, a = !1) {
                        return !(e.target instanceof HTMLElement) || (a ? !t.includes(e.target.tagName) : !e.target.isContentEditable && !t.includes(e.target.tagName))
                    }(r, t, a) && (i.preventDefault && r.preventDefault(), n(r))
                })
            });
            (0, n.useEffect)(() => (document.documentElement.addEventListener("keydown", r), () => document.documentElement.removeEventListener("keydown", r)), [])
        }(t), null
    }

    function f(e) {
        let r, n, i, l, f, h, x, g, v, y, b, j, w, N, S, _ = (0, a.c)(33),
            {
                medias: k,
                open: I,
                initialIndex: E,
                onOpenChangeAction: P,
                onCloseAnimationEndAction: A
            } = e,
            C = void 0 === E ? 0 : E;
        e: {
            if (0 === k.length || C < 0) {
                r = 0;
                break e
            }
            if (C >= k.length) {
                r = k.length - 1;
                break e
            }
            r = C
        }
        let T = r;
        if (0 === k.length) return null;
        _[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(s.Overlay, {
            "data-lenis-prevent": !0,
            className: "fixed inset-0 z-20 bg-theme-bg-primary data-[state='closed']:animate-fade-out data-[state='open']:animate-fade-in"
        }), _[0] = n) : n = _[0], _[1] !== A ? (i = e => {
            e.target !== e.currentTarget || "closed" === e.currentTarget.getAttribute("data-state") && A ? .()
        }, _[1] = A, _[2] = i) : i = _[2], _[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(s.Title, {
            className: "sr-only",
            children: "Media Lightbox"
        }), f = (0, t.jsx)(s.Description, {
            className: "sr-only",
            children: "Browse media in fullscreen slider"
        }), _[3] = l, _[4] = f) : (l = _[3], f = _[4]), _[5] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, m.cx)("group/close flex h-32 cursor-pointer items-center justify-center gap-8 border-b border-l px-4 text-center font-noe-text text-menu-item uppercase transition-colors duration-400 ease-in-out lg:border-r lg:border-l-0", "bg-theme-bg-secondary text-theme-text-secondary hover:bg-theme-transparency-secondary"), _[5] = h) : h = _[5], _[6] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, t.jsx)("div", {
            className: "absolute top-0 right-0 z-10 bg-theme-bg-secondary lg:right-auto lg:left-0",
            children: (0, t.jsxs)(s.Close, {
                className: h,
                children: [(0, t.jsx)("span", {
                    className: "flex size-24 items-center justify-center bg-current/20 transition-colors duration-400 ease-in-out group-hover/close:bg-theme-accent",
                    children: (0, t.jsx)(o.Icon, {
                        name: "close",
                        className: "size-12"
                    })
                }), (0, t.jsx)("span", {
                    className: "hidden pr-4 lg:block",
                    children: "Close"
                })]
            })
        }), _[6] = x) : x = _[6];
        let z = `${T}-${k.length}`;
        if (_[7] !== T ? (g = {
                align: "start",
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                startIndex: T
            }, _[7] = T, _[8] = g) : g = _[8], _[9] !== I ? (v = (0, t.jsx)(p, {
                enabled: I
            }), _[9] = I, _[10] = v) : v = _[10], _[11] !== k || _[12] !== T) {
            let e;
            _[14] !== T ? (e = (e, a) => {
                let r = a === T;
                return (0, t.jsx)(u.Slide, {
                    className: "h-full flex-[0_0_calc((100%-(var(--slides-per-view)-1)*var(--gap))/var(--slides-per-view))]",
                    children: (0, t.jsx)("div", {
                        className: "flex size-full min-h-0 items-center justify-center",
                        children: (0, t.jsx)(d.SanityMedia, {
                            autoPlay: !0,
                            loop: !0,
                            media: e.media,
                            imageProps: r ? {
                                priority: !0,
                                loading: "eager"
                            } : void 0,
                            videoProps: {
                                muted: !0,
                                playsInline: !0,
                                noControls: !0,
                                objectFit: "contain"
                            },
                            className: "size-full object-contain"
                        })
                    })
                }, e.key)
            }, _[14] = T, _[15] = e) : e = _[15], y = k.map(e), _[11] = k, _[12] = T, _[13] = y
        } else y = _[13];
        return _[16] !== y ? (b = (0, t.jsx)(u.Viewport, {
            className: "h-full overflow-hidden [--gap:--spacing(4)] [--slides-per-view:1]",
            children: (0, t.jsx)(u.Slides, {
                className: "h-full gap-(--gap)",
                children: y
            })
        }), _[16] = y, _[17] = b) : b = _[17], _[18] !== k.length ? (j = k.length > 1 && (0, t.jsxs)("div", {
            className: "flex h-40 min-w-0 items-center gap-8 bg-theme-bg-secondary px-8",
            children: [(0, t.jsx)(c.SliderDotsScrollStrip, {
                totalSlides: k.length
            }), (0, t.jsxs)("div", {
                className: "flex shrink-0 items-center gap-4",
                children: [(0, t.jsx)(u.PrevButton, {
                    className: "flex size-24 items-center justify-center bg-theme-accent text-base-dark-brown transition-all duration-400 ease-in-out hover:bg-theme-bg-secondary hover:text-theme-text-secondary disabled:opacity-30",
                    children: (0, t.jsx)(o.Icon, {
                        name: "arrow-left"
                    })
                }), (0, t.jsx)(u.NextButton, {
                    className: "flex size-24 items-center justify-center bg-theme-accent text-base-dark-brown transition-all duration-400 ease-in-out hover:bg-theme-bg-secondary hover:text-theme-text-secondary disabled:opacity-30",
                    children: (0, t.jsx)(o.Icon, {
                        name: "arrow-right"
                    })
                })]
            })]
        }), _[18] = k.length, _[19] = j) : j = _[19], _[20] !== g || _[21] !== v || _[22] !== b || _[23] !== j || _[24] !== z ? (w = (0, t.jsx)("div", {
            className: "min-h-0 flex-1",
            children: (0, t.jsxs)(u.Root, {
                options: g,
                className: "flex h-full flex-col",
                children: [v, b, j]
            }, z)
        }), _[20] = g, _[21] = v, _[22] = b, _[23] = j, _[24] = z, _[25] = w) : w = _[25], _[26] !== w || _[27] !== i ? (N = (0, t.jsxs)(s.Portal, {
            children: [n, (0, t.jsxs)(s.Content, {
                "data-lenis-prevent": !0,
                className: "fixed inset-0 isolate z-20 flex flex-col overflow-hidden outline-none data-[state='closed']:animate-fade-out data-[state='open']:animate-fade-in",
                onAnimationEnd: i,
                children: [l, f, x, w]
            })]
        }), _[26] = w, _[27] = i, _[28] = N) : N = _[28], _[29] !== P || _[30] !== I || _[31] !== N ? (S = (0, t.jsx)(s.Root, {
            open: I,
            onOpenChange: P,
            children: N
        }), _[29] = P, _[30] = I, _[31] = N, _[32] = S) : S = _[32], S
    }
    var h = e.i(871393);
    e.s(["MediaLightboxRoute", 0, function(e) {
        let i, l, s, o, c, u, d = (0, a.c)(18),
            {
                medias: m,
                initialIndex: p,
                sectionKey: x
            } = e,
            g = (0, r.useRouter)(),
            v = (0, r.usePathname)(),
            y = (0, r.useSearchParams)(),
            [b, j] = n.useState(!1);
        d[0] !== y ? (i = y.get(h.LIGHTBOX_SECTION_PARAM), d[0] = y, d[1] = i) : i = d[1];
        let w = i === x,
            N = w && !b;
        return (d[2] !== w ? (l = () => {
            w || j(!1)
        }, s = [w], d[2] = w, d[3] = l, d[4] = s) : (l = d[3], s = d[4]), n.useEffect(l, s), 0 !== m.length && (w || b)) ? (d[5] !== b || d[6] !== v || d[7] !== g || d[8] !== y ? (o = () => {
            if (!b) return;
            let e = new URLSearchParams(y.toString());
            e.delete(h.LIGHTBOX_SECTION_PARAM), e.delete(h.LIGHTBOX_INDEX_PARAM);
            let t = e.toString();
            t ? g.replace(`${v}?${t}`, {
                scroll: !1
            }) : g.replace(v, {
                scroll: !1
            })
        }, d[5] = b, d[6] = v, d[7] = g, d[8] = y, d[9] = o) : o = d[9], d[10] !== w ? (c = e => {
            e ? j(!1) : w && j(!0)
        }, d[10] = w, d[11] = c) : c = d[11], d[12] !== p || d[13] !== N || d[14] !== m || d[15] !== o || d[16] !== c ? (u = (0, t.jsx)(f, {
            medias: m,
            open: N,
            initialIndex: p,
            onCloseAnimationEndAction: o,
            onOpenChangeAction: c
        }), d[12] = p, d[13] = N, d[14] = m, d[15] = o, d[16] = c, d[17] = u) : u = d[17], u) : null
    }], 425249)
}, 392457, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(88653),
        n = e.i(624006),
        i = e.i(642623),
        l = e.i(247984),
        s = e.i(271645),
        o = e.i(471671),
        c = e.i(610053),
        u = e.i(374684),
        d = e.i(627590),
        m = e.i(409918),
        p = e.i(801335),
        f = e.i(46995);

    function h(e) {
        let r, n, i, l, s, o, h = (0, a.c)(18),
            {
                href: x,
                isPasswordProtected: g,
                media: v,
                title: y,
                coordinates: b,
                className: j
            } = e,
            w = !!y || !!b;
        return h[0] !== j ? (r = (0, p.cx)("group/item relative isolate block overflow-hidden", j), h[0] = j, h[1] = r) : r = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
            aspectRatio: "4/5"
        }, h[2] = n) : n = h[2], h[3] !== g || h[4] !== v ? (i = (0, f.run)(() => {
            if (g) {
                if (v ? .type === "image" && v.image ? .lqip) return (0, t.jsxs)("div", {
                    className: "relative isolate size-full",
                    children: [(0, t.jsx)("div", {
                        className: "absolute inset-0 z-10 bg-base-dark-brown/20 backdrop-blur-xl"
                    }), (0, t.jsx)("div", {
                        style: {
                            backgroundImage: `url(${v.image.lqip})`
                        },
                        className: "size-full scale-100 bg-cover object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
                    })]
                });
                if (v ? .type === "video" && v.video ? .thumbTime && v.video ? .playbackId) {
                    let e = (0, d.buildPosterUrl)({
                        playbackId: v.video.playbackId,
                        time: v.video.thumbTime,
                        width: 20
                    });
                    return (0, t.jsxs)("div", {
                        className: "relative isolate size-full",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-0 z-10 bg-base-dark-brown/20 backdrop-blur-xl"
                        }), (0, t.jsx)("div", {
                            style: {
                                backgroundImage: `url(${e})`
                            },
                            className: "size-full scale-100 bg-cover object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
                        })]
                    })
                }
            }
            return (0, t.jsx)(m.SanityMedia, {
                media: v,
                aspectRatio: "4/5",
                imageProps: {
                    sizes: "100vw lg:33vw"
                },
                loop: !0,
                autoPlay: "in-view",
                videoProps: {
                    muted: !0,
                    playsInline: !0,
                    noControls: !0
                },
                className: "size-full scale-100 object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
            })
        }), h[3] = g, h[4] = v, h[5] = i) : i = h[5], h[6] !== i ? (l = (0, t.jsx)(c.InnerParallax, {
            overflow: "30 lg:80",
            style: n,
            children: (0, t.jsx)("div", {
                className: "relative size-full",
                children: i
            })
        }), h[6] = i, h[7] = l) : l = h[7], h[8] !== b || h[9] !== g || h[10] !== w || h[11] !== y ? (s = w && (0, t.jsxs)("div", {
            className: "flex flex-col gap-8 bg-theme-bg-secondary pt-16 text-theme-text-secondary",
            children: [(0, t.jsx)("h3", {
                className: "truncate text-body-30-normal",
                children: y
            }), (0, f.run)(() => g ? (0, t.jsx)("p", {
                className: "truncate text-body-20-normal opacity-60",
                children: "Password Protected"
            }) : b ? (0, t.jsx)("p", {
                className: "truncate text-body-20-normal opacity-60",
                children: b
            }) : void 0)]
        }), h[8] = b, h[9] = g, h[10] = w, h[11] = y, h[12] = s) : s = h[12], h[13] !== x || h[14] !== r || h[15] !== l || h[16] !== s ? (o = (0, t.jsxs)(u.Link, {
            href: x,
            className: r,
            children: [l, s]
        }), h[13] = x, h[14] = r, h[15] = l, h[16] = s, h[17] = o) : o = h[17], o
    }
    var x = e.i(407194);

    function g(e) {
        let r, n, i, l, s, o, c, u = (0, a.c)(14),
            {
                eyebrow: d,
                title: m,
                className: f
            } = e;
        return u[0] !== f ? (r = (0, p.cx)("flex aspect-4/5 flex-col items-center justify-between gap-16 bg-theme-bg-secondary px-24 py-96 text-theme-text-secondary lg:px-88", f), u[0] = f, u[1] = r) : r = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("span", {
            className: "block size-8 bg-theme-accent"
        }), u[2] = n) : n = u[2], u[3] !== d ? (i = d && (0, t.jsx)("p", {
            className: "text-center text-body-30-normal uppercase",
            children: (0, t.jsx)(x.AnimatedText, {
                children: d
            })
        }), u[3] = d, u[4] = i) : i = u[4], u[5] !== m ? (l = (0, t.jsx)("h3", {
            className: "text-center font-noe-text text-title-10 uppercase",
            children: (0, t.jsx)(x.AnimatedText, {
                children: m
            })
        }), u[5] = m, u[6] = l) : l = u[6], u[7] !== i || u[8] !== l ? (s = (0, t.jsxs)("div", {
            className: "flex flex-col gap-24",
            children: [i, l]
        }), u[7] = i, u[8] = l, u[9] = s) : s = u[9], u[10] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("span", {
            className: "block size-8 bg-theme-accent"
        }), u[10] = o) : o = u[10], u[11] !== r || u[12] !== s ? (c = (0, t.jsxs)("div", {
            className: r,
            children: [n, s, o]
        }), u[11] = r, u[12] = s, u[13] = c) : c = u[13], c
    }
    var v = e.i(46454);

    function y(e) {
        let r, n, i, s, c = (0, a.c)(12),
            {
                children: u,
                isActive: d,
                onClick: m,
                variant: f,
                className: h
            } = e,
            x = void 0 !== d && d,
            g = "dark" === (0, l.stegaClean)(void 0 === f ? "light" : f) ? x ? "text-body-20-strong text-theme-text-primary" : "text-body-20-normal text-theme-text-primary/50 hover:text-theme-text-primary" : x ? "text-body-20-strong text-theme-text-secondary" : "text-body-20-normal text-theme-text-secondary/50 hover:text-theme-text-secondary";
        return c[0] !== h || c[1] !== g ? (r = (0, p.cx)("group/filter flex h-32 cursor-pointer items-center gap-8 text-left transition-colors duration-400 ease-in-out", g, h), c[0] = h, c[1] = g, c[2] = r) : r = c[2], c[3] !== x ? (n = x ? (0, t.jsx)(o.Icon, {
            name: "close",
            className: "size-8"
        }) : (0, t.jsx)("span", {
            className: "block size-6 bg-current transition-all duration-400 ease-in-out group-hover/filter:rounded-[50%]"
        }), c[3] = x, c[4] = n) : n = c[4], c[5] !== u ? (i = (0, t.jsx)("span", {
            children: u
        }), c[5] = u, c[6] = i) : i = c[6], c[7] !== m || c[8] !== r || c[9] !== n || c[10] !== i ? (s = (0, t.jsxs)("button", {
            className: r,
            onClick: m,
            type: "button",
            children: [n, i]
        }), c[7] = m, c[8] = r, c[9] = n, c[10] = i, c[11] = s) : s = c[11], s
    }

    function b(e) {
        if ("reference" === e.type) return (0, t.jsx)(i.div, {
            layout: !0,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .6,
                ease: v.easeInOut
            },
            children: (0, t.jsx)(h, {
                href: e.uri,
                isPasswordProtected: e.isPasswordProtected,
                media: e.media,
                title: e.title,
                coordinates: e.coordinates,
                className: "size-full"
            })
        }, e.key);
        if ("card" === e.type) {
            if ("title" === e.layout && e.title) return (0, t.jsx)(i.div, {
                layout: !0,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .6,
                    ease: v.easeInOut
                },
                children: (0, t.jsx)(g, {
                    title: e.title
                })
            }, e.key);
            if ("empty" === e.layout) return (0, t.jsx)(i.div, {
                layout: !0,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .6,
                    ease: v.easeInOut
                },
                className: "hidden items-center justify-center lg:flex",
                children: (0, t.jsx)("span", {
                    className: "block size-8 bg-theme-accent"
                })
            }, e.key)
        }
        return null
    }

    function j(e) {
        return e._id
    }
    e.s(["ProjectGrid", 0, function(e) {
        let i, o, c, u, d, m, f, h, x = (0, a.c)(23),
            {
                showFilters: g,
                items: v,
                categories: w,
                variant: N
            } = e,
            S = void 0 === N ? "light" : N;
        x[0] !== S ? (i = (0, l.stegaClean)(S), x[0] = S, x[1] = i) : i = x[1];
        let _ = i;
        x[2] === Symbol.for("react.memo_cache_sentinel") ? (o = [], x[2] = o) : o = x[2];
        let [k, I] = s.useState(o);
        e: {
            let e;
            if (!v) {
                let e;
                x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = [], x[3] = e) : e = x[3], c = e;
                break e
            }
            if (0 === k.length) {
                c = v;
                break e
            }
            if (x[4] !== v || x[5] !== k) {
                let t;
                x[7] !== k ? (t = e => {
                    if ("reference" !== e.type) return !0;
                    let t = e.categories ? .map(j) ? ? [];
                    return k.every(e => t.includes(e))
                }, x[7] = k, x[8] = t) : t = x[8], e = v.filter(t), x[4] = v, x[5] = k, x[6] = e
            } else e = x[6];c = e
        }
        let E = c;
        x[9] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
            I(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
        }, x[9] = u) : u = x[9];
        let P = u;
        return x[10] !== w || x[11] !== _ || x[12] !== k || x[13] !== g || x[14] !== S ? (d = g && w && w.length > 0 && (0, t.jsxs)("div", {
            className: "grid grid-cols-[auto_1fr] items-center gap-24 py-24 lg:grid-cols-3 lg:gap-8",
            children: [(0, t.jsx)("div", {
                className: (0, p.cx)("shrink-0 whitespace-nowrap text-body-20-normal", "dark" === _ ? "text-theme-text-primary" : "text-theme-text-secondary"),
                children: "Filter by"
            }), (0, t.jsx)("div", {
                className: "scrollbar-invisible -mr-8 flex items-center gap-16 overflow-x-auto lg:col-span-2 lg:mr-0",
                children: w.map(e => (0, t.jsx)(y, {
                    variant: S,
                    isActive: k.includes(e._id),
                    onClick: () => P(e._id),
                    className: "last:mr-8",
                    children: e.name
                }, e._id))
            })]
        }), x[10] = w, x[11] = _, x[12] = k, x[13] = g, x[14] = S, x[15] = d) : d = x[15], x[16] !== E ? (m = E.map(b), x[16] = E, x[17] = m) : m = x[17], x[18] !== m ? (f = (0, t.jsx)(n.LayoutGroup, {
            children: (0, t.jsx)("div", {
                className: "grid grid-cols-1 gap-y-60 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-96",
                children: (0, t.jsx)(r.AnimatePresence, {
                    mode: "popLayout",
                    children: m
                })
            })
        }), x[18] = m, x[19] = f) : f = x[19], x[20] !== d || x[21] !== f ? (h = (0, t.jsxs)("div", {
            className: "relative z-10",
            children: [d, f]
        }), x[20] = d, x[21] = f, x[22] = h) : h = x[22], h
    }], 392457)
}, 311721, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(88653),
        n = e.i(624006),
        i = e.i(642623),
        l = e.i(247984),
        s = e.i(271645),
        o = e.i(471671),
        c = e.i(407194),
        u = e.i(610053),
        d = e.i(374684),
        m = e.i(409918),
        p = e.i(801335),
        f = e.i(527897);

    function h(e) {
        let r, n, i, l, s, o, h, x, g, v, y = (0, a.c)(25),
            {
                href: b,
                title: j,
                issueNumber: w,
                publishedAt: N,
                media: S,
                thumbnailStyle: _,
                className: k
            } = e;
        y[0] !== N ? (r = N ? (0, f.formatDate)(N) : void 0, y[0] = N, y[1] = r) : r = y[1];
        let I = r;
        return y[2] !== k ? (n = (0, p.cx)("group/item relative isolate block min-h-[70svh] p-8 py-(--image-text-spacing-y) text-white [--image-text-spacing-y:--spacing(96)] lg:min-h-svh", k), y[2] = k, y[3] = n) : n = y[3], y[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("div", {
            className: "absolute inset-0 -z-1 bg-base-dark-brown/50"
        }), y[4] = i) : i = y[4], y[5] !== S || y[6] !== _ ? (l = "media" === _ && (0, t.jsx)(u.InnerParallax, {
            overflow: "30 lg:80",
            className: "absolute inset-0 -z-2",
            children: (0, t.jsx)(m.SanityMedia, {
                media: S,
                aspectRatio: "1/1",
                loop: !0,
                autoPlay: "in-view",
                videoProps: {
                    muted: !0,
                    playsInline: !0,
                    noControls: !0
                },
                imageProps: {
                    sizes: "100vw lg:50vw"
                },
                className: "size-full scale-100 object-cover transition-all duration-600 ease-in-out group-hover/item:scale-100 lg:scale-[1.02]"
            })
        }), y[5] = S, y[6] = _, y[7] = l) : l = y[7], y[8] !== w ? (s = w && (0, t.jsx)("p", {
            className: "text-body-30-normal uppercase opacity-70",
            children: (0, t.jsx)(c.AnimatedText, {
                children: w
            })
        }), y[8] = w, y[9] = s) : s = y[9], y[10] !== I ? (o = I && (0, t.jsx)("p", {
            className: "col-start-2 text-body-30-normal lg:col-start-auto",
            children: (0, t.jsx)(c.AnimatedText, {
                animationDelay: .1,
                children: I
            })
        }), y[10] = I, y[11] = o) : o = y[11], y[12] !== s || y[13] !== o ? (h = (0, t.jsxs)("div", {
            className: "contents lg:col-span-4 lg:flex lg:items-center lg:gap-24",
            children: [s, o]
        }), y[12] = s, y[13] = o, y[14] = h) : h = y[14], y[15] !== j ? (x = (0, t.jsx)("div", {
            className: "col-start-2 row-start-2 lg:col-span-8 lg:col-start-5 lg:row-start-2",
            children: (0, t.jsx)("h3", {
                className: "font-noe-text text-title-10 uppercase",
                children: (0, t.jsx)(c.AnimatedText, {
                    animationDelay: .2,
                    children: j
                })
            })
        }), y[15] = j, y[16] = x) : x = y[16], y[17] !== h || y[18] !== x ? (g = (0, t.jsx)("div", {
            className: "sticky top-(--image-text-spacing-y) w-full border-theme-transparency-primary border-t pt-24",
            children: (0, t.jsxs)("div", {
                className: "grid grid-cols-[auto_1fr] gap-x-24 gap-y-24 lg:grid-cols-12 lg:gap-x-24 lg:gap-y-24",
                children: [h, x]
            })
        }), y[17] = h, y[18] = x, y[19] = g) : g = y[19], y[20] !== b || y[21] !== n || y[22] !== l || y[23] !== g ? (v = (0, t.jsxs)(d.Link, {
            href: b,
            className: n,
            children: [i, l, g]
        }), y[20] = b, y[21] = n, y[22] = l, y[23] = g, y[24] = v) : v = y[24], v
    }
    var x = e.i(46454);

    function g(e) {
        let r, n, i, s, c = (0, a.c)(12),
            {
                children: u,
                isActive: d,
                onClick: m,
                variant: f,
                className: h
            } = e,
            x = void 0 !== d && d,
            g = "dark" === (0, l.stegaClean)(void 0 === f ? "light" : f) ? x ? "text-body-20-strong text-theme-text-primary" : "text-body-20-normal text-theme-text-primary/50 hover:text-theme-text-primary" : x ? "text-body-20-strong text-theme-text-secondary" : "text-body-20-normal text-theme-text-secondary/50 hover:text-theme-text-secondary";
        return c[0] !== h || c[1] !== g ? (r = (0, p.cx)("group/filter flex h-32 cursor-pointer items-center gap-8 text-left transition-colors duration-400 ease-in-out", g, h), c[0] = h, c[1] = g, c[2] = r) : r = c[2], c[3] !== x ? (n = x ? (0, t.jsx)(o.Icon, {
            name: "close",
            className: "size-8"
        }) : (0, t.jsx)("span", {
            className: "block size-6 bg-current transition-all duration-400 ease-in-out group-hover/filter:rounded-[50%]"
        }), c[3] = x, c[4] = n) : n = c[4], c[5] !== u ? (i = (0, t.jsx)("span", {
            children: u
        }), c[5] = u, c[6] = i) : i = c[6], c[7] !== m || c[8] !== r || c[9] !== n || c[10] !== i ? (s = (0, t.jsxs)("button", {
            className: r,
            onClick: m,
            type: "button",
            children: [n, i]
        }), c[7] = m, c[8] = r, c[9] = n, c[10] = i, c[11] = s) : s = c[11], s
    }

    function v(e) {
        return e._id
    }
    e.s(["StoryGrid", 0, function(e) {
        let o, c, u, d, m, f, y, b, j = (0, a.c)(24),
            {
                showFilters: w,
                items: N,
                categories: S,
                variant: _
            } = e,
            k = void 0 === _ ? "light" : _;
        j[0] !== k ? (o = (0, l.stegaClean)(k), j[0] = k, j[1] = o) : o = j[1];
        let I = o;
        j[2] === Symbol.for("react.memo_cache_sentinel") ? (c = [], j[2] = c) : c = j[2];
        let [E, P] = s.useState(c);
        e: {
            let e;
            if (!N) {
                let e;
                j[3] === Symbol.for("react.memo_cache_sentinel") ? (e = [], j[3] = e) : e = j[3], u = e;
                break e
            }
            if (0 === E.length) {
                u = N;
                break e
            }
            if (j[4] !== N || j[5] !== E) {
                let t;
                j[7] !== E ? (t = e => {
                    if ("reference" !== e.type) return !0;
                    let t = e.categories ? .map(v) ? ? [];
                    return E.every(e => t.includes(e))
                }, j[7] = E, j[8] = t) : t = j[8], e = N.filter(t), j[4] = N, j[5] = E, j[6] = e
            } else e = j[6];u = e
        }
        let A = u;
        j[9] === Symbol.for("react.memo_cache_sentinel") ? (d = e => {
            P(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
        }, j[9] = d) : d = j[9];
        let C = d;
        if (j[10] !== S || j[11] !== I || j[12] !== E || j[13] !== w || j[14] !== k ? (m = w && S && S.length > 0 && (0, t.jsxs)("div", {
                className: "grid grid-cols-[auto_1fr] items-center gap-24 py-24 lg:grid-cols-3 lg:gap-8",
                children: [(0, t.jsx)("div", {
                    className: (0, p.cx)("shrink-0 whitespace-nowrap text-body-20-normal", "dark" === I ? "text-theme-text-primary" : "text-theme-text-secondary"),
                    children: "Filter by"
                }), (0, t.jsx)("div", {
                    className: "scrollbar-invisible -mr-8 flex items-center gap-16 overflow-x-auto lg:col-span-2 lg:mr-0",
                    children: S.map(e => (0, t.jsx)(g, {
                        variant: k,
                        isActive: E.includes(e._id),
                        onClick: () => C(e._id),
                        className: "last:mr-8",
                        children: e.name
                    }, e._id))
                })]
            }), j[10] = S, j[11] = I, j[12] = E, j[13] = w, j[14] = k, j[15] = m) : m = j[15], j[16] !== A) {
            let e;
            j[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (e, a) => {
                let r;
                return (0, t.jsx)(i.div, {
                    className: 0 == (r = a % 5) ? "lg:col-span-full" : 1 === r || 2 === r ? "lg:col-span-6" : 3 === r ? "lg:col-span-4" : "lg:col-span-8",
                    layout: !0,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .6,
                        ease: x.easeInOut
                    },
                    children: (0, t.jsx)(h, {
                        className: "relative z-10 size-full",
                        href: e.uri,
                        issueNumber: e.issueNumber,
                        publishedAt: e.publishedAt,
                        media: e.media,
                        thumbnailStyle: e.thumbnailStyle,
                        title: e.title
                    })
                }, e.key)
            }, j[18] = e) : e = j[18], f = A.map(e), j[16] = A, j[17] = f
        } else f = j[17];
        return j[19] !== f ? (y = (0, t.jsx)(n.LayoutGroup, {
            children: (0, t.jsx)("div", {
                className: "grid grid-cols-1 gap-8 lg:grid-cols-12",
                children: (0, t.jsx)(r.AnimatePresence, {
                    mode: "popLayout",
                    children: f
                })
            })
        }), j[19] = f, j[20] = y) : y = j[20], j[21] !== m || j[22] !== y ? (b = (0, t.jsxs)("div", {
            className: "relative z-10",
            children: [m, y]
        }), j[21] = m, j[22] = y, j[23] = b) : b = j[23], b
    }], 311721)
}, 235272, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645),
        n = e.i(407194),
        i = e.i(471671),
        l = e.i(610053),
        s = e.i(627590),
        o = e.i(919848),
        c = e.i(700481),
        u = e.i(46995);
    e.s(["VideoPlayer", 0, function(e) {
        let d, m, p = (0, a.c)(8),
            {
                title: f,
                video: h,
                videoCover: x
            } = e,
            [g, v] = r.useState(!1);
        p[0] !== h || p[1] !== x ? (d = (0, u.run)(() => {
            if (x ? ._id) return (0, t.jsx)(o.SanityImage, {
                image: x,
                className: "absolute inset-0 size-full object-cover"
            });
            if (h ? .playbackId) {
                let e = (0, s.buildPosterUrl)({
                    playbackId: h.playbackId,
                    time: h.thumbTime
                });
                return (0, t.jsx)("img", {
                    src: e,
                    alt: "",
                    className: "absolute inset-0 size-full object-cover"
                })
            }
        }), p[0] = h, p[1] = x, p[2] = d) : d = p[2];
        let y = d;
        return p[3] !== y || p[4] !== g || p[5] !== f || p[6] !== h ? (m = (0, t.jsx)("div", {
            className: "relative isolate h-svh w-full",
            children: g ? (0, t.jsx)(c.SanityVideo, {
                video: h,
                className: "size-full",
                autoPlay: !0,
                muted: !1
            }) : (0, t.jsxs)("button", {
                "aria-label": "Play video",
                type: "button",
                className: "absolute inset-0 isolate flex cursor-pointer text-left",
                onClick: () => v(!0),
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 z-10 bg-base-dark-brown/50"
                }), (0, t.jsx)(l.InnerParallax, {
                    overflow: "30 lg:80",
                    className: "absolute inset-0",
                    children: y
                }), (0, t.jsx)("div", {
                    className: "relative z-20 size-full px-8 py-240 lg:py-320",
                    children: (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between gap-x-200 border-theme-transparency-primary border-t pt-24 text-white lg:sticky lg:top-320 lg:flex-row",
                        children: [f && (0, t.jsx)("p", {
                            className: "text-body-30-normal uppercase",
                            children: (0, t.jsx)(n.AnimatedText, {
                                children: f
                            })
                        }), (0, t.jsxs)("div", {
                            className: "mt-24 flex items-center justify-end gap-8",
                            children: [(0, t.jsx)("p", {
                                className: "font-noe-text text-title-10 uppercase",
                                children: (0, t.jsx)(n.AnimatedText, {
                                    animationDelay: .1,
                                    children: "Watch Video"
                                })
                            }), (0, t.jsx)("div", {
                                className: "flex size-32 items-center justify-center bg-theme-transparency-primary",
                                children: (0, t.jsx)(i.Icon, {
                                    name: "play",
                                    className: "size-24"
                                })
                            })]
                        })]
                    })
                })]
            })
        }), p[3] = y, p[4] = g, p[5] = f, p[6] = h, p[7] = m) : m = p[7], m
    }])
}, 47686, e => {
    "use strict";
    var t = e.i(271645);
    let a = 'meta[name="viewport"]',
        r = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1";
    e.s(["useIosViewportZoomGuard", 0, function() {
        let e = t.useRef(void 0),
            n = t.useRef(!1),
            i = t.useRef(null),
            l = t.useCallback(() => {
                let t = document.head.querySelector(a);
                if (n.current) {
                    t ? .remove(), n.current = !1, e.current = void 0;
                    return
                }
                if (!t || void 0 === e.current) return;
                let r = e.current;
                e.current = void 0, null === r ? t.removeAttribute("content") : (t.setAttribute("content", r), t.content = r)
            }, []),
            s = t.useCallback(() => {
                let t = document.head.querySelector(a);
                if (!t) {
                    (t = document.createElement("meta")).setAttribute("name", "viewport"), t.setAttribute("content", r), t.content = r, document.head.appendChild(t), n.current = !0;
                    return
                }
                void 0 === e.current && (e.current = t.getAttribute("content")), t.setAttribute("content", r), t.content = r
            }, []),
            o = t.useCallback(() => {
                null !== i.current && (window.clearTimeout(i.current), i.current = null), s()
            }, [s]),
            c = t.useCallback(() => {
                o()
            }, [o]),
            u = t.useCallback(() => {
                o()
            }, [o]),
            d = t.useCallback(() => {
                i.current = window.setTimeout(() => {
                    i.current = null, l()
                }, 0)
            }, [l]);
        return t.useEffect(() => () => {
            null !== i.current && window.clearTimeout(i.current), l()
        }, [l]), t.useMemo(() => ({
            onFocus: c,
            onBlur: d,
            onTouchStart: u
        }), [d, c, u])
    }])
}, 974273, e => {
    e.v(t => Promise.all(["static/immutable/chunks/3ej7b_yqu_0de.js"].map(t => e.l(t))).then(() => t(490090)))
}, 871393, e => {
    "use strict";
    e.s(["LIGHTBOX_INDEX_PARAM", 0, "index", "LIGHTBOX_SECTION_PARAM", 0, "lightbox"])
}, 531554, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645),
        n = e.i(477952),
        i = e.i(47686),
        l = e.i(801335);

    function s(e) {
        let n, s, o, c, u, d, m, p, f, h, x, g, v, y, b, j = (0, a.c)(37);
        j[0] !== e ? ({
            error: s,
            className: n,
            onFocus: c,
            onBlur: o,
            onTouchStart: u,
            ...d
        } = e, j[0] = e, j[1] = n, j[2] = s, j[3] = o, j[4] = c, j[5] = u, j[6] = d) : (n = j[1], s = j[2], o = j[3], c = j[4], u = j[5], d = j[6]);
        let w = r.useId(),
            N = (0, i.useIosViewportZoomGuard)();
        j[7] !== n ? (m = (0, l.cx)("relative isolate", n), j[7] = n, j[8] = m) : m = j[8], j[9] !== w || j[10] !== d.placeholder ? (p = (0, t.jsx)("label", {
            htmlFor: w,
            className: "sr-only",
            suppressHydrationWarning: !0,
            children: d.placeholder
        }), j[9] = w, j[10] = d.placeholder, j[11] = p) : p = j[11], j[12] !== s ? (f = s && (0, t.jsx)("span", {
            className: "pointer-events-none absolute top-0 right-0 bg-error/10 px-4 text-error text-error-caption",
            children: s
        }), j[12] = s, j[13] = f) : f = j[13], j[14] !== N || j[15] !== c ? (h = e => {
            N.onFocus(), c ? .(e)
        }, j[14] = N, j[15] = c, j[16] = h) : h = j[16], j[17] !== N || j[18] !== o ? (x = e => {
            N.onBlur(), o ? .(e)
        }, j[17] = N, j[18] = o, j[19] = x) : x = j[19], j[20] !== N || j[21] !== u ? (g = e => {
            N.onTouchStart(), u ? .(e)
        }, j[20] = N, j[21] = u, j[22] = g) : g = j[22];
        let S = s ? "border-error text-error placeholder-error" : "border-transparent placeholder-theme-text-secondary/50";
        return j[23] !== S ? (v = (0, l.cx)("block h-54 w-full appearance-none border-transparent border-b bg-white/10 p-16 text-body-20-normal text-theme-text-secondary outline-none disabled:opacity-50", "transition-colors duration-400 ease-in-out", "placeholder:text-theme-text-secondary/80 placeholder:transition-colors placeholder:duration-400 placeholder:ease-in-out", "focus:border-theme-accent", "hover:placeholder-theme-text-secondary focus:placeholder-theme-text-secondary", S), j[23] = S, j[24] = v) : v = j[24], j[25] !== w || j[26] !== d || j[27] !== h || j[28] !== x || j[29] !== g || j[30] !== v ? (y = (0, t.jsx)("input", {
            id: w,
            suppressHydrationWarning: !0,
            onFocus: h,
            onBlur: x,
            onTouchStart: g,
            className: v,
            ...d
        }), j[25] = w, j[26] = d, j[27] = h, j[28] = x, j[29] = g, j[30] = v, j[31] = y) : y = j[31], j[32] !== m || j[33] !== p || j[34] !== f || j[35] !== y ? (b = (0, t.jsxs)("div", {
            className: m,
            children: [p, f, y]
        }), j[32] = m, j[33] = p, j[34] = f, j[35] = y, j[36] = b) : b = j[36], b
    }

    function o(e) {
        let n, s, o, c, u, d, m, p, f, h, x, g, v, y, b, j = (0, a.c)(37);
        j[0] !== e ? ({
            error: s,
            className: n,
            onFocus: c,
            onBlur: o,
            onTouchStart: u,
            ...d
        } = e, j[0] = e, j[1] = n, j[2] = s, j[3] = o, j[4] = c, j[5] = u, j[6] = d) : (n = j[1], s = j[2], o = j[3], c = j[4], u = j[5], d = j[6]);
        let w = r.useId(),
            N = (0, i.useIosViewportZoomGuard)();
        j[7] !== n ? (m = (0, l.cx)("relative isolate", n), j[7] = n, j[8] = m) : m = j[8], j[9] !== w || j[10] !== d.placeholder ? (p = (0, t.jsx)("label", {
            htmlFor: w,
            className: "sr-only",
            suppressHydrationWarning: !0,
            children: d.placeholder
        }), j[9] = w, j[10] = d.placeholder, j[11] = p) : p = j[11], j[12] !== s ? (f = s && (0, t.jsx)("span", {
            className: "pointer-events-none absolute top-0 right-0 bg-error/10 px-4 text-error text-error-caption",
            children: s
        }), j[12] = s, j[13] = f) : f = j[13], j[14] !== N || j[15] !== c ? (h = e => {
            N.onFocus(), c ? .(e)
        }, j[14] = N, j[15] = c, j[16] = h) : h = j[16], j[17] !== N || j[18] !== o ? (x = e => {
            N.onBlur(), o ? .(e)
        }, j[17] = N, j[18] = o, j[19] = x) : x = j[19], j[20] !== N || j[21] !== u ? (g = e => {
            N.onTouchStart(), u ? .(e)
        }, j[20] = N, j[21] = u, j[22] = g) : g = j[22];
        let S = s ? "border-error text-error placeholder-error" : "border-transparent";
        return j[23] !== S ? (v = (0, l.cx)("block w-full appearance-none border-transparent border-b bg-white/10 p-16 text-body-20-normal text-theme-text-secondary outline-none disabled:opacity-50", "transition-colors duration-400 ease-in-out", "placeholder:text-theme-text-secondary/80 placeholder:transition-colors placeholder:duration-400 placeholder:ease-in-out", "focus:border-theme-accent", "hover:placeholder-theme-text-secondary focus:placeholder-theme-text-secondary", S), j[23] = S, j[24] = v) : v = j[24], j[25] !== w || j[26] !== d || j[27] !== h || j[28] !== x || j[29] !== g || j[30] !== v ? (y = (0, t.jsx)("textarea", {
            id: w,
            suppressHydrationWarning: !0,
            onFocus: h,
            onBlur: x,
            onTouchStart: g,
            className: v,
            ...d
        }), j[25] = w, j[26] = d, j[27] = h, j[28] = x, j[29] = g, j[30] = v, j[31] = y) : y = j[31], j[32] !== m || j[33] !== p || j[34] !== f || j[35] !== y ? (b = (0, t.jsxs)("div", {
            className: m,
            children: [p, f, y]
        }), j[32] = m, j[33] = p, j[34] = f, j[35] = y, j[36] = b) : b = j[36], b
    }
    var c = e.i(471671),
        u = e.i(95187);
    let d = (0, u.createServerReference)("70e16f10114662afa30e0fd70cb373409c2244ebb4", u.callServer, void 0, u.findSourceMapURL, "submitContactForm"),
        m = "website";

    function p() {
        let e, r = (0, a.c)(1);
        return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("input", {
            type: "text",
            name: m,
            autoComplete: "off",
            tabIndex: -1,
            "aria-hidden": "true",
            className: "pointer-events-none absolute -left-[9999px] -z-10 h-px w-px overflow-hidden opacity-0"
        }), r[0] = e) : e = r[0], e
    }
    var f = e.i(317195);
    let h = null,
        x = {
            success: !1,
            error: "",
            fieldErrors: {}
        };

    function g() {
        return null
    }
    e.s(["ContactForm", 0, function(i) {
        let u, v, y, b, j, w, N, S, _, k, I, E, P, A, C, T, z, L = (0, a.c)(57),
            {
                className: R,
                success: M,
                formType: D
            } = i;
        L[0] !== D ? (u = d.bind(null, D), L[0] = D, L[1] = u) : u = L[1];
        let [O, B, V] = r.useActionState(u, x), G = r.useRef(null), [F, $] = r.useState(!1), [U, X] = r.useState(null), [q, H] = r.useState(null);
        L[2] === Symbol.for("react.memo_cache_sentinel") ? (v = {
            formRef: G,
            debug: f.IS_DEV
        }, L[2] = v) : v = L[2];
        let {
            checkSpam: K,
            enhanceFormData: W,
            reset: Z
        } = function({
            honeypotField: e = m,
            honeypotDuration: t = 2e3,
            formRef: a,
            debug: n = !1
        } = {}) {
            let i = r.useRef(Date.now()),
                [l, s] = r.useState(!1);
            r.useEffect(() => {
                let r = () => {
                        n && console.log("[Spam Prevention] User interaction detected"), s(!0)
                    },
                    i = ["keydown", "mousemove", "touchstart", "click"],
                    l = a ? .current ? ? document;
                for (let s of (n && console.log("[Spam Prevention] Initialized", {
                        honeypotField: e,
                        honeypotDuration: t,
                        target: a ? .current ? "form" : "document"
                    }), i)) l.addEventListener(s, r, {
                    once: !0
                });
                return () => {
                    for (let e of i) l.removeEventListener(e, r)
                }
            }, [a, n, e, t]);
            let o = r.useCallback(a => {
                    let r = Date.now() - i.current,
                        s = r < t,
                        o = a.querySelector(`[name="${e}"]`),
                        c = !!o ? .value ? .trim(),
                        u = !l;
                    return (n && console.log("[Spam Prevention] Spam check:", {
                        fillTime: `${r}ms`,
                        isTooFast: s,
                        hasHoneypotValue: c,
                        honeypotValue: o ? .value || "(empty)",
                        noInteraction: u
                    }), c) ? {
                        isSpam: !0,
                        reason: "honeypot_filled",
                        message: "Invalid submission detected. Please refresh the page and try again."
                    } : s ? {
                        isSpam: !0,
                        reason: "too_fast",
                        message: "Please take your time filling out the form. Form submissions are processed after a brief delay."
                    } : u ? {
                        isSpam: !0,
                        reason: "no_interaction",
                        message: "Please interact with the form fields before submitting. Click or type in the fields to continue."
                    } : {
                        isSpam: !1
                    }
                }, [e, t, l, n]),
                c = r.useCallback(() => ({
                    hasInteraction: l,
                    fillTime: Date.now() - i.current,
                    startTime: i.current
                }), [l]);
            return {
                checkSpam: o,
                getMetadata: c,
                enhanceFormData: r.useCallback(e => {
                    let t = Date.now() - i.current;
                    return e.append("_submissionTime", String(t)), n && console.log("[Spam Prevention] Enhanced form data with submission time:", `${t}ms`), e
                }, [n]),
                reset: r.useCallback(() => {
                    i.current = Date.now(), s(!1);
                    let e = () => {
                            n && console.log("[Spam Prevention] User interaction detected"), s(!0)
                        },
                        t = a ? .current ? ? document;
                    for (let a of ["keydown", "mousemove", "touchstart", "click"]) t.addEventListener(a, e, {
                        once: !0
                    });
                    n && console.log("[Spam Prevention] Reset - timing and interaction tracking restarted")
                }, [a, n])
            }
        }(v);
        L[3] !== O.success ? (y = () => {
            O.success && ($(!0), X(null))
        }, b = [O.success], L[3] = O.success, L[4] = y, L[5] = b) : (y = L[4], b = L[5]), r.useEffect(y, b), L[6] !== K || L[7] !== W ? (j = t => {
            t.preventDefault();
            let a = G.current;
            if (!a) return;
            let n = new FormData(a);
            (async () => {
                let t = await (h ? ? = e.A(182852)).then(e => {
                    let {
                        readContactFormValues: t,
                        validateContactForm: a
                    } = e;
                    return a(t(n))
                }).catch(g);
                if (t && !t.ok) return H(t.fieldErrors);
                H(null);
                let i = K(a);
                if (i.isSpam) {
                    f.IS_DEV && console.warn("[Contact Form] Spam detected - submission blocked", {
                        reason: i.reason
                    }), X(i.message);
                    return
                }
                W(n), X(null), r.startTransition(() => {
                    B(n)
                })
            })()
        }, L[6] = K, L[7] = W, L[8] = j) : j = L[8];
        let Y = j,
            J = V || F,
            Q = O.success ? void 0 : O.values,
            ee = q ? ? (O.success ? void 0 : O.fieldErrors);
        if (F) {
            let e, a, r;
            return L[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(c.Icon, {
                name: "arrow-right"
            }), L[9] = e) : e = L[9], L[10] !== Z ? (a = (0, t.jsx)(n.Button, {
                rightIcon: e,
                onClick: () => {
                    $(!1), G.current ? .reset(), Z()
                },
                className: "mt-24 w-full [--color-theme-bg-primary:var(--color-base-dark-brown)] [--color-theme-text-primary:var(--color-base-blush-pink)] [--color-theme-text-secondary:var(--color-base-dark-brown)] lg:mt-16",
                children: "New Message"
            }), L[10] = Z, L[11] = a) : a = L[11], L[12] !== M || L[13] !== a ? (r = (0, t.jsxs)("div", {
                children: [M, a]
            }), L[12] = M, L[13] = a, L[14] = r) : r = L[14], r
        }
        L[15] !== R ? (w = (0, l.cx)("flex flex-col gap-4 lg:gap-8", R), L[15] = R, L[16] = w) : w = L[16], L[17] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, t.jsx)(p, {}), L[17] = N) : N = L[17];
        let et = ee ? .fullName,
            ea = Q ? .fullName,
            er = !!ee ? .fullName;
        L[18] !== J || L[19] !== er || L[20] !== et || L[21] !== ea ? (S = (0, t.jsx)(s, {
            name: "fullName",
            error: et,
            placeholder: "Your Name *",
            defaultValue: ea,
            disabled: J,
            required: !0,
            "aria-invalid": er
        }), L[18] = J, L[19] = er, L[20] = et, L[21] = ea, L[22] = S) : S = L[22];
        let en = ee ? .email,
            ei = Q ? .email,
            el = !!ee ? .email;
        L[23] !== J || L[24] !== en || L[25] !== ei || L[26] !== el ? (_ = (0, t.jsx)(s, {
            name: "email",
            error: en,
            placeholder: "Your Email *",
            defaultValue: ei,
            disabled: J,
            required: !0,
            "aria-invalid": el
        }), L[23] = J, L[24] = en, L[25] = ei, L[26] = el, L[27] = _) : _ = L[27];
        let es = ee ? .message,
            eo = Q ? .message,
            ec = !!ee ? .message;
        L[28] !== J || L[29] !== es || L[30] !== eo || L[31] !== ec ? (k = (0, t.jsx)(o, {
            name: "message",
            error: es,
            placeholder: "Your Message *",
            defaultValue: eo,
            disabled: J,
            required: !0,
            "aria-invalid": ec,
            rows: 5
        }), L[28] = J, L[29] = es, L[30] = eo, L[31] = ec, L[32] = k) : k = L[32], L[33] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, t.jsx)(c.Icon, {
            name: "arrow-right"
        }), L[33] = I) : I = L[33];
        let eu = V ? "Sending..." : "Send Message";
        return L[34] !== J || L[35] !== eu ? (E = (0, t.jsx)(n.Button, {
            type: "submit",
            disabled: J,
            rightIcon: I,
            className: "mt-12 w-full [--color-theme-bg-primary:var(--color-base-dark-brown)] [--color-theme-text-primary:var(--color-base-blush-pink)] [--color-theme-text-secondary:var(--color-base-dark-brown)] lg:mt-16",
            children: eu
        }), L[34] = J, L[35] = eu, L[36] = E) : E = L[36], L[37] !== F ? (P = F && (0, t.jsx)("p", {
            children: "Thank you! Your message has been sent successfully."
        }), L[37] = F, L[38] = P) : P = L[38], L[39] !== U ? (A = U && (0, t.jsx)("p", {
            className: "mt-4 text-body-20-normal text-error lg:mt-8",
            children: U
        }), L[39] = U, L[40] = A) : A = L[40], L[41] !== U || L[42] !== O.error || L[43] !== O.success ? (C = !O.success && O.error && !U && (0, t.jsx)("p", {
            className: "mt-4 text-body-20-normal text-error lg:mt-8",
            children: O.error
        }), L[41] = U, L[42] = O.error, L[43] = O.success, L[44] = C) : C = L[44], L[45] !== E || L[46] !== P || L[47] !== A || L[48] !== C ? (T = (0, t.jsxs)("div", {
            className: "w-full",
            children: [E, P, A, C]
        }), L[45] = E, L[46] = P, L[47] = A, L[48] = C, L[49] = T) : T = L[49], L[50] !== Y || L[51] !== S || L[52] !== _ || L[53] !== k || L[54] !== T || L[55] !== w ? (z = (0, t.jsxs)("form", {
            ref: G,
            action: B,
            onSubmit: Y,
            className: w,
            noValidate: !0,
            children: [N, S, _, k, T]
        }), L[50] = Y, L[51] = S, L[52] = _, L[53] = k, L[54] = T, L[55] = w, L[56] = z) : z = L[56], z
    }], 531554)
}, 182852, e => {
    e.v(t => Promise.all(["static/immutable/chunks/0se-2pinvjiru.js", "static/immutable/chunks/3mkqodiyf9hg9.js", "static/immutable/chunks/1lnne3ygbafop.js"].map(t => e.l(t))).then(() => t(163192)))
}, 575382, e => {
    e.v(t => Promise.all(["static/immutable/chunks/1_0h_sh_-f5wc.js"].map(t => e.l(t))).then(() => t(124265)))
}, 409918, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(919848),
        n = e.i(574660),
        i = e.i(700481);
    e.s(["SanityMedia", 0, function(e) {
        let l, s, o, c, u, d, m, p, f, h = (0, a.c)(28);
        h[0] !== e ? ({
            media: o,
            loop: s,
            autoPlay: l,
            imageProps: u,
            videoProps: d,
            ...c
        } = e, h[0] = e, h[1] = l, h[2] = s, h[3] = o, h[4] = c, h[5] = u, h[6] = d) : (l = h[1], s = h[2], o = h[3], c = h[4], u = h[5], d = h[6]), h[7] !== u ? (m = void 0 === u ? {} : u, h[7] = u, h[8] = m) : m = h[8];
        let x = m;
        h[9] !== d ? (p = void 0 === d ? {} : d, h[9] = d, h[10] = p) : p = h[10];
        let g = p;
        if (!o) return null;
        let {
            type: v,
            image: y,
            video: b,
            videoCover: j,
            videoOptions: w,
            aspectRatio: N
        } = o;
        h[11] !== N || h[12] !== c ? (f = {
            aspectRatio: N,
            ...c
        }, h[11] = N, h[12] = c, h[13] = f) : f = h[13];
        let S = f;
        switch (v) {
            case "image":
                {
                    let e;
                    return h[14] !== S || h[15] !== y || h[16] !== x ? (e = (0, t.jsx)(r.SanityImage, {
                        image: y,
                        ...S,
                        ...x
                    }), h[14] = S, h[15] = y, h[16] = x, h[17] = e) : e = h[17],
                    e
                }
            case "video":
                {
                    let e, a;h[18] !== j ? (e = j ? ._id ? (0, n.getImageSrc)(j, {}) : void 0, h[18] = j, h[19] = e) : e = h[19];
                    let r = e;
                    return h[20] !== l || h[21] !== S || h[22] !== s || h[23] !== r || h[24] !== b || h[25] !== w || h[26] !== g ? (a = (0, t.jsx)(i.SanityVideo, {
                        video: b,
                        poster: r,
                        loop: s,
                        autoPlay: l,
                        ...S,
                        ...w,
                        ...g
                    }), h[20] = l, h[21] = S, h[22] = s, h[23] = r, h[24] = b, h[25] = w, h[26] = g, h[27] = a) : a = h[27],
                    a
                }
            default:
                return console.warn(`Unsupported media type: ${v}`), null
        }
    }])
}, 317195, e => {
    "use strict";
    e.i(247167), e.s(["IS_DEV", 0, !1])
}, 527897, e => {
    "use strict";
    e.s(["formatDate", 0, function(e) {
        if (!e) return;
        let t = "string" == typeof e ? new Date(/^\d{4}-\d{2}-\d{2}$/.test(e) ? `${e}T12:00:00Z` : e) : e;
        if (Number.isNaN(t.getTime())) return;
        let a = new Intl.DateTimeFormat("en-US", {
                timeZone: "America/Los_Angeles",
                day: "2-digit",
                month: "short",
                year: "2-digit"
            }),
            r = a.formatToParts(t),
            n = r.find(e => "day" === e.type) ? .value,
            i = r.find(e => "month" === e.type) ? .value,
            l = r.find(e => "year" === e.type) ? .value;
        return n && i && l ? `${n} \xb7 ${i.toUpperCase()} \xb7 ${l}` : a.format(t).toUpperCase()
    }])
}, 624006, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(271645),
        r = e.i(231178);
    let n = (0, a.createContext)(null);
    var i = e.i(287022),
        l = e.i(674008);
    let s = e => !e.isLayoutDirty && e.willUpdate(!1);
    e.s(["LayoutGroup", 0, ({
        children: e,
        id: o,
        inherit: c = !0
    }) => {
        let u = (0, a.useContext)(r.LayoutGroupContext),
            d = (0, a.useContext)(n),
            [m, p] = function() {
                let e, t = (e = (0, a.useRef)(!1), (0, l.useIsomorphicLayoutEffect)(() => (e.current = !0, () => {
                        e.current = !1
                    }), []), e),
                    [r, n] = (0, a.useState)(0),
                    s = (0, a.useCallback)(() => {
                        t.current && n(r + 1)
                    }, [r]);
                return [(0, a.useCallback)(() => i.frame.postRender(s), [s]), r]
            }(),
            f = (0, a.useRef)(null),
            h = u.id || d;
        if (null === f.current) {
            let e, t, a, r;
            (!0 == (!0 === (r = c)) || "id" === r) && h && (o = o ? h + "-" + o : h), f.current = {
                id: o,
                group: !0 === c && u.group || (e = new Set, t = new WeakMap, {
                    add: r => {
                        e.add(r), t.set(r, r.addEventListener("willUpdate", a))
                    },
                    remove: r => {
                        e.delete(r);
                        let n = t.get(r);
                        n && (n(), t.delete(r)), a()
                    },
                    dirty: a = () => e.forEach(s)
                })
            }
        }
        let x = (0, a.useMemo)(() => ({ ...f.current,
            forceRender: m
        }), [p]);
        return (0, t.jsx)(r.LayoutGroupContext.Provider, {
            value: x,
            children: e
        })
    }], 624006)
}, 922998, (e, t, a) => {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = e.r(271645),
        n = r && "object" == typeof r && "default" in r ? r : {
            default: r
        };
    ! function(e) {
        if (!e || "u" < typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
    }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'), a.default = r.forwardRef(function({
        style: e = {},
        className: t = "",
        autoFill: a = !1,
        play: i = !0,
        pauseOnHover: l = !1,
        pauseOnClick: s = !1,
        direction: o = "left",
        speed: c = 50,
        delay: u = 0,
        loop: d = 0,
        gradient: m = !1,
        gradientColor: p = "white",
        gradientWidth: f = 200,
        onFinish: h,
        onCycleComplete: x,
        onMount: g,
        children: v
    }, y) {
        let [b, j] = r.useState(0), [w, N] = r.useState(0), [S, _] = r.useState(1), [k, I] = r.useState(!1), E = r.useRef(null), P = y || E, A = r.useRef(null), C = r.useCallback(() => {
            if (A.current && P.current) {
                let e = P.current.getBoundingClientRect(),
                    t = A.current.getBoundingClientRect(),
                    r = e.width,
                    n = t.width;
                ("up" === o || "down" === o) && (r = e.height, n = t.height), a && r && n ? _(n < r ? Math.ceil(r / n) : 1) : _(1), j(r), N(n)
            }
        }, [a, P, o]);
        r.useEffect(() => {
            if (k && (C(), A.current && P.current)) {
                let e = new ResizeObserver(() => C());
                return e.observe(P.current), e.observe(A.current), () => {
                    e && e.disconnect()
                }
            }
        }, [C, P, k]), r.useEffect(() => {
            C()
        }, [C, v]), r.useEffect(() => {
            I(!0)
        }, []), r.useEffect(() => {
            "function" == typeof g && g()
        }, []);
        let T = r.useMemo(() => a ? w * S / c : w < b ? b / c : w / c, [a, b, w, S, c]),
            z = r.useMemo(() => Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !i || l ? "paused" : "running",
                "--pause-on-click": !i || l && !s || s ? "paused" : "running",
                "--width": "up" === o || "down" === o ? "100vh" : "100%",
                "--transform": "up" === o ? "rotate(-90deg)" : "down" === o ? "rotate(90deg)" : "none"
            }), [e, i, l, s, o]),
            L = r.useMemo(() => ({
                "--gradient-color": p,
                "--gradient-width": "number" == typeof f ? `${f}px` : f
            }), [p, f]),
            R = r.useMemo(() => ({
                "--play": i ? "running" : "paused",
                "--direction": "left" === o ? "normal" : "reverse",
                "--duration": `${T}s`,
                "--delay": `${u}s`,
                "--iteration-count": d ? `${d}` : "infinite",
                "--min-width": a ? "auto" : "100%"
            }), [i, o, T, u, d, a]),
            M = r.useMemo(() => ({
                "--transform": "up" === o ? "rotate(90deg)" : "down" === o ? "rotate(-90deg)" : "none"
            }), [o]),
            D = r.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) => n.default.createElement(r.Fragment, {
                key: t
            }, r.Children.map(v, e => n.default.createElement("div", {
                style: M,
                className: "rfm-child"
            }, e)))), [M, v]);
        return k ? n.default.createElement("div", {
            ref: P,
            style: z,
            className: "rfm-marquee-container " + t
        }, m && n.default.createElement("div", {
            style: L,
            className: "rfm-overlay"
        }), n.default.createElement("div", {
            className: "rfm-marquee",
            style: R,
            onAnimationIteration: x,
            onAnimationEnd: h
        }, n.default.createElement("div", {
            className: "rfm-initial-child-container",
            ref: A
        }, r.Children.map(v, e => n.default.createElement("div", {
            style: M,
            className: "rfm-child"
        }, e))), D(S - 1)), n.default.createElement("div", {
            className: "rfm-marquee",
            style: R
        }, D(S))) : null
    })
}, 819358, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(500932),
        r = e.i(271645),
        n = e.i(922998);
    e.s(["Marquee", 0, function(e) {
        let i, l, s, o, c, u, d, m = (0, a.c)(14);
        m[0] !== e ? ({
            className: i,
            loader: l,
            ...s
        } = e, m[0] = e, m[1] = i, m[2] = l, m[3] = s) : (i = m[1], l = m[2], s = m[3]);
        let [p, f] = r.useState(!1);
        m[4] === Symbol.for("react.memo_cache_sentinel") ? (o = () => f(!0), m[4] = o) : o = m[4];
        let h = +!!p;
        m[5] !== h ? (c = {
            opacity: h
        }, m[5] = h, m[6] = c) : c = m[6], m[7] !== s || m[8] !== c ? (u = (0, t.jsx)(n.default, {
            className: "overflow-hidden",
            autoFill: !0,
            speed: 25,
            onMount: o,
            style: c,
            ...s
        }), m[7] = s, m[8] = c, m[9] = u) : u = m[9];
        let x = !p && l;
        return m[10] !== i || m[11] !== u || m[12] !== x ? (d = (0, t.jsxs)("div", {
            className: i,
            children: [u, x]
        }), m[10] = i, m[11] = u, m[12] = x, m[13] = d) : d = m[13], d
    }])
}]);