(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 439895, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        n = e.i(271645);

    function a(e, t) {
        if ("function" == typeof e) return e(t);
        "object" == typeof e && null !== e && "current" in e && (e.current = t)
    }
    var l = e.i(642623),
        o = e.i(812152),
        u = e.i(88771),
        i = e.i(615683),
        s = e.i(801335),
        d = e.i(205980),
        c = e.i(46454);
    e.s(["AnimatedReveal", 0, function(e) {
        let f, m, p, y, h, v, b, g = (0, r.c)(23),
            {
                ref: _,
                children: P,
                className: j,
                y: x,
                duration: O,
                animationDelay: C,
                viewport: R
            } = e,
            M = void 0 === x ? 16 : x,
            S = void 0 === O ? .8 : O,
            E = void 0 === C ? 0 : C,
            T = (0, o.useDraftMode)(),
            {
                isComplete: w
            } = (0, d.useContentReady)(),
            N = (0, u.usePrefersReducedMotion)(),
            {
                enteredForGate: F,
                vpResolved: A,
                viewportDisabled: B,
                onViewportEnter: k,
                onViewportLeave: D
            } = (0, i.useViewportEnteredForGate)(R),
            L = n.useRef(null),
            H = function(...e) {
                return (0, n.useCallback)(function(...e) {
                    let t = new Map;
                    return r => {
                        if (e.forEach(e => {
                                let n = a(e, r);
                                n && t.set(e, n)
                            }), t.size > 0) return () => {
                            e.forEach(e => {
                                let r = t.get(e);
                                r && "function" == typeof r ? r() : a(e, null)
                            }), t.clear()
                        }
                    }
                }(...e), e)
            }(_, L),
            [V, I] = n.useState(!1);
        g[0] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
            let e = L.current;
            e && I(e.parentElement ? .closest("a, button, input, select, textarea, [tabindex]") != null)
        }, m = [], g[0] = f, g[1] = m) : (f = g[0], m = g[1]), n.useLayoutEffect(f, m);
        let U = T || N,
            K = U || w && (T || F);
        g[2] !== M ? (p = {
            opacity: .001,
            y: M
        }, g[2] = M, g[3] = p) : p = g[3];
        let q = p;
        g[4] === Symbol.for("react.memo_cache_sentinel") ? (y = {
            opacity: 1,
            y: 0
        }, g[4] = y) : y = g[4];
        let z = y;
        g[5] !== E || g[6] !== S || g[7] !== U ? (h = U ? {
            duration: 0
        } : {
            duration: S,
            delay: E,
            ease: c.easeInOut
        }, g[5] = E, g[6] = S, g[7] = U, g[8] = h) : h = g[8];
        let W = h,
            X = B ? void 0 : k,
            G = B ? void 0 : D,
            $ = !K && !V || void 0;
        g[9] !== j ? (v = (0, s.cx)(j), g[9] = j, g[10] = v) : v = g[10];
        let Z = K ? z : q,
            Q = B ? K ? z : q : void 0,
            Y = B ? void 0 : K ? z : q;
        return g[11] !== P || g[12] !== H || g[13] !== G || g[14] !== $ || g[15] !== v || g[16] !== Z || g[17] !== Q || g[18] !== Y || g[19] !== X || g[20] !== W || g[21] !== A ? (b = (0, t.jsx)(l.div, {
            ref: H,
            onViewportEnter: X,
            onViewportLeave: G,
            inert: $,
            className: v,
            initial: Z,
            animate: Q,
            whileInView: Y,
            viewport: A,
            transition: W,
            children: P
        }), g[11] = P, g[12] = H, g[13] = G, g[14] = $, g[15] = v, g[16] = Z, g[17] = Q, g[18] = Y, g[19] = X, g[20] = W, g[21] = A, g[22] = b) : b = g[22], b
    }], 439895)
}, 774595, e => {
    e.v(t => Promise.all(["static/immutable/chunks/1f0umqynkdpd2.js", "static/immutable/chunks/0ytncv634v-f8.js", "static/immutable/chunks/2ct5fy8c-fpd7.js"].map(t => e.l(t))).then(() => t(895628)))
}, 728298, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(271645);

    function a(e, t, r) {
        let [a, l] = (0, n.useState)(() => ({
            tree: e,
            cacheNode: t,
            stateKey: r,
            next: null
        }));
        if (a.tree === e) return a;
        let o = {
                tree: e,
                cacheNode: t,
                stateKey: r,
                next: null
            },
            u = 1,
            i = a,
            s = o;
        for (; null !== i && u < 1;) {
            if (i.stateKey === r) {
                s.next = i.next;
                break
            } {
                u++;
                let e = {
                    tree: i.tree,
                    cacheNode: i.cacheNode,
                    stateKey: i.stateKey,
                    next: null
                };
                s.next = e, s = e
            }
            i = i.next
        }
        return l(o), o
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 347257, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(843476),
        a = e.r(8372),
        l = e.r(271645),
        o = e.r(33906),
        u = e.r(261994),
        i = e.r(15783);

    function s({
        Component: e,
        serverProvidedParams: t
    }) {
        let r, d;
        if (null !== t) r = t.searchParams, d = t.params;
        else {
            let e = (0, l.use)(a.LayoutRouterContext);
            d = null !== e ? e.parentParams : {}, r = (0, o.urlSearchParamsToParsedUrlQuery)((0, l.use)(u.SearchParamsContext))
        }
        let c = (0, i.createClientSearchParams)(r),
            f = (0, i.createClientParams)(d);
        return (0, n.jsx)(e, {
            params: f,
            searchParams: c
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 92825, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(843476),
        a = e.r(8372),
        l = e.r(271645),
        o = e.r(15783);

    function u({
        Component: e,
        slots: t,
        serverProvidedParams: r
    }) {
        let i;
        if (null !== r) i = r.params;
        else {
            let e = (0, l.use)(a.LayoutRouterContext);
            i = null !== e ? e.parentParams : {}
        }
        let s = (0, o.createClientParams)(i);
        return (0, n.jsx)(e, { ...t,
            params: s
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 768017, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function() {
            return d
        }
    });
    let n = e.r(190809),
        a = e.r(843476),
        l = n._(e.r(271645)),
        o = e.r(590373),
        u = e.r(754394),
        i = e.r(8372);
    class s extends l.default.Component {
        constructor(e) {
            super(e), this.state = {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            }
        }
        componentDidCatch() {}
        static getDerivedStateFromError(e) {
            if ((0, u.isHTTPAccessFallbackError)(e)) return {
                triggeredStatus: (0, u.getAccessFallbackHTTPStatus)(e)
            };
            throw e
        }
        static getDerivedStateFromProps(e, t) {
            return e.pathname !== t.previousPathname && t.triggeredStatus ? {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            } : {
                triggeredStatus: t.triggeredStatus,
                previousPathname: e.pathname
            }
        }
        render() {
            let {
                notFound: e,
                forbidden: t,
                unauthorized: r,
                children: n
            } = this.props, {
                triggeredStatus: l
            } = this.state, o = {
                [u.HTTPAccessErrorStatus.NOT_FOUND]: e,
                [u.HTTPAccessErrorStatus.FORBIDDEN]: t,
                [u.HTTPAccessErrorStatus.UNAUTHORIZED]: r
            };
            if (l) {
                let i = l === u.HTTPAccessErrorStatus.NOT_FOUND && e,
                    s = l === u.HTTPAccessErrorStatus.FORBIDDEN && t,
                    d = l === u.HTTPAccessErrorStatus.UNAUTHORIZED && r;
                return i || s || d ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }), !1, o[l]]
                }) : n
            }
            return n
        }
    }

    function d({
        notFound: e,
        forbidden: t,
        unauthorized: r,
        children: n
    }) {
        let u = (0, o.useUntrackedPathname)(),
            c = (0, l.useContext)(i.MissingSlotContext);
        return e || t || r ? (0, a.jsx)(s, {
            pathname: u,
            notFound: e,
            forbidden: t,
            unauthorized: r,
            missingSlots: c,
            children: n
        }) : (0, a.jsx)(a.Fragment, {
            children: n
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 722976, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        InstantValidationBoundaryContext: function() {
            return l
        },
        PlaceValidationBoundaryBelowThisLevel: function() {
            return o
        },
        RenderValidationBoundaryAtThisLevel: function() {
            return u
        },
        SlotMarker: function() {
            return i
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = null,
        o = null,
        u = null,
        i = null;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 877694, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        InstantValidationBoundaryContext: function() {
            return l.InstantValidationBoundaryContext
        },
        PlaceValidationBoundaryBelowThisLevel: function() {
            return l.PlaceValidationBoundaryBelowThisLevel
        },
        RenderValidationBoundaryAtThisLevel: function() {
            return l.RenderValidationBoundaryAtThisLevel
        },
        SlotMarker: function() {
            return l.SlotMarker
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(722976);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 339756, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        LoadingBoundaryProvider: function() {
            return C
        },
        default: function() {
            return M
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(555682),
        o = e.r(190809),
        u = e.r(843476),
        i = o._(e.r(271645)),
        s = l._(e.r(174080)),
        d = e.r(8372),
        c = e.r(201244),
        f = e.r(972383),
        m = e.r(491915),
        p = e.r(358442),
        y = e.r(768017);
    e.r(877694);
    let h = e.r(270725),
        v = e.r(728298);
    e.r(174180);
    let b = e.r(261994),
        g = e.r(33906),
        _ = e.r(595871);
    s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function P(e, t, r) {
        let n = e.getClientRects();
        if (0 === n.length) return 0;
        let a = 1 / 0;
        for (let e = 0; e < n.length; e++) {
            let t = n[e];
            t.top < a && (a = t.top)
        }
        return a >= r() && a <= t ? 1 : 2
    }
    i.default.Component;
    let j = function(e) {
        let t = i.default.useRef(null);
        return (0, i.useLayoutEffect)(() => {
            let {
                focusAndScrollRef: r,
                cacheNode: n
            } = e, a = r.forceScroll ? r.scrollRef : n.scrollRef;
            if (null === a || !a.current) return;
            let l = null,
                o = r.hashFragment;
            if (o) {
                var u;
                if (null === (l = "top" === (u = o) ? document.body : document.getElementById(u) ? ? document.getElementsByName(u)[0] ? ? null)) {
                    a.current = !1, r.onlyHashChange = !1, r.hashFragment = null;
                    return
                }
            } else l = t.current;
            if (null === l) return;
            let i = !1;
            (0, m.disableSmoothScrollDuringRouteTransition)(() => {
                let e = document.documentElement,
                    t = null,
                    r = null,
                    n = null,
                    u = () => {
                        var r, a;
                        let l, o;
                        return null === n && (r = e, a = t, n = !Number.isFinite(o = Number.parseFloat(l = getComputedStyle(r).scrollPaddingTop)) || o < 0 ? 0 : l.endsWith("px") ? o : l.endsWith("%") ? o / 100 * a : 0), n
                    };
                (o || (t = e.clientHeight, 0 !== (r = P(l, t, u)))) && ((i = !0, a.current = !1, o) ? l.scrollIntoView() : 1 !== r && (e.scrollTop = 0, 2 === P(l, t, u) && l.scrollIntoView()))
            }, {
                dontForceLayout: !0,
                onlyHashChange: r.onlyHashChange
            }), i && (r.onlyHashChange = !1, r.hashFragment = null)
        }, void 0), (0, u.jsx)(i.Fragment, {
            ref: t,
            children: e.children
        })
    };

    function x({
        children: e,
        cacheNode: t
    }) {
        let r = (0, i.useContext)(d.GlobalLayoutRouterContext);
        if (!r) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        return (0, u.jsx)(j, {
            focusAndScrollRef: r.focusAndScrollRef,
            cacheNode: t,
            children: e
        })
    }

    function O({
        tree: e,
        segmentPath: t,
        debugNameContext: r,
        cacheNode: n,
        params: a,
        url: l,
        isActive: o
    }) {
        let s, f = (0, i.useContext)(d.GlobalLayoutRouterContext);
        if ((0, i.useContext)(b.NavigationPromisesContext), !f) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        let m = null !== n ? n : (0, i.use)(c.unresolvedThenable),
            p = null !== m.prefetchRsc ? m.prefetchRsc : m.rsc,
            y = (0, i.useDeferredValue)(m.rsc, p);
        if ((0, _.isDeferredRsc)(y)) {
            let e = (0, i.use)(y);
            null === e && (0, i.use)(c.unresolvedThenable), s = e
        } else null === y && (0, i.use)(c.unresolvedThenable), s = y;
        let h = s;
        return (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
                parentTree: e,
                parentCacheNode: m,
                parentSegmentPath: t,
                parentParams: a,
                parentLoadingData: null,
                debugNameContext: r,
                url: l,
                isActive: o
            },
            children: h
        })
    }

    function C({
        loading: e,
        children: t
    }) {
        let r = (0, i.use)(d.LayoutRouterContext);
        return null === r ? t : (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
                parentTree: r.parentTree,
                parentCacheNode: r.parentCacheNode,
                parentSegmentPath: r.parentSegmentPath,
                parentParams: r.parentParams,
                parentLoadingData: e,
                debugNameContext: r.debugNameContext,
                url: r.url,
                isActive: r.isActive
            },
            children: t
        })
    }

    function R({
        name: e,
        loading: t,
        children: r
    }) {
        if (null !== t) {
            let n = t[0],
                a = t[1],
                l = t[2];
            return (0, u.jsx)(i.Suspense, {
                name: e,
                fallback: (0, u.jsxs)(u.Fragment, {
                    children: [a, l, n]
                }),
                children: r
            })
        }
        return (0, u.jsx)(u.Fragment, {
            children: r
        })
    }

    function M({
        parallelRouterKey: e,
        error: t,
        errorStyles: r,
        errorScripts: n,
        templateStyles: a,
        templateScripts: l,
        template: o,
        notFound: s,
        forbidden: m,
        unauthorized: b,
        segmentViewBoundaries: _
    }) {
        let P = (0, i.useContext)(d.LayoutRouterContext);
        if (!P) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: !1,
            configurable: !0
        });
        let {
            parentTree: j,
            parentCacheNode: C,
            parentSegmentPath: S,
            parentParams: E,
            parentLoadingData: T,
            url: w,
            isActive: N,
            debugNameContext: F
        } = P, A = j[0], B = null === S ? [e] : S.concat([A, e]), k = j[1][e], D = C.slots;
        (void 0 === k || null === D) && (0, i.use)(c.unresolvedThenable);
        let L = k[0],
            H = D[e] ? ? null,
            V = (0, h.createRouterCacheKey)(L, !0),
            I = (0, v.useRouterBFCache)(k, H, V),
            U = [];
        do {
            let e = I.tree,
                i = I.cacheNode,
                c = I.stateKey,
                h = e[0],
                v = E;
            if (Array.isArray(h)) {
                let e = h[0],
                    t = h[1],
                    r = h[2],
                    n = (0, g.getParamValueFromCacheKey)(t, r);
                null !== n && (v = { ...E,
                    [e]: n
                })
            }
            let _ = function(e) {
                    if ("/" === e) return "/";
                    if ("string" == typeof e)
                        if ("(__SLOT__)" === e) return;
                        else return e + "/";
                    return e[1] + "/"
                }(h),
                P = _ ? ? F,
                j = void 0 === _ ? void 0 : F,
                C = (0, u.jsxs)(x, {
                    cacheNode: i,
                    children: [(0, u.jsx)(f.ErrorBoundary, {
                        errorComponent: t,
                        errorStyles: r,
                        errorScripts: n,
                        children: (0, u.jsx)(R, {
                            name: j,
                            loading: T,
                            children: (0, u.jsx)(y.HTTPAccessFallbackBoundary, {
                                notFound: s,
                                forbidden: m,
                                unauthorized: b,
                                children: (0, u.jsxs)(p.RedirectBoundary, {
                                    children: [(0, u.jsx)(O, {
                                        url: w,
                                        tree: e,
                                        params: v,
                                        cacheNode: i,
                                        segmentPath: B,
                                        debugNameContext: P,
                                        isActive: N && c === V
                                    }), null]
                                })
                            })
                        })
                    }), null]
                }),
                M = (0, u.jsxs)(d.TemplateContext.Provider, {
                    value: C,
                    children: [a, l, o]
                }, c);
            U.push(M), I = I.next
        } while (null !== I) return U
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 837457, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(190809),
        a = e.r(843476),
        l = n._(e.r(271645)),
        o = e.r(8372);

    function u() {
        let e = (0, l.useContext)(o.TemplateContext);
        return (0, a.jsx)(a.Fragment, {
            children: e
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 806831, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 797689, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(806831).createRenderParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 793504, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 266996, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(793504).createRenderSearchParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 15783, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        createClientParams: function() {
            return l.createRenderParamsFromClient
        },
        createClientSearchParams: function() {
            return o.createRenderSearchParamsFromClient
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(797689),
        o = e.r(266996);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 27201, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(843476),
        a = () => "u" > typeof window ? null : (0, n.jsx)("meta", {
            name: "«nxt-icon»"
        })
}, 491915, (e, t, r) => {
    "use strict";

    function n(e, t = {}) {
        if (t.onlyHashChange) return void e();
        let r = document.documentElement;
        if ("smooth" !== r.dataset.scrollBehavior) return void e();
        let a = r.style.scrollBehavior;
        r.style.scrollBehavior = "auto", t.dontForceLayout || r.getClientRects(), e(), r.style.scrollBehavior = a
    }
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 922998, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(271645),
        a = n && "object" == typeof n && "default" in n ? n : {
            default: n
        };
    ! function(e) {
        if (!e || "u" < typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
    }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'), r.default = n.forwardRef(function({
        style: e = {},
        className: t = "",
        autoFill: r = !1,
        play: l = !0,
        pauseOnHover: o = !1,
        pauseOnClick: u = !1,
        direction: i = "left",
        speed: s = 50,
        delay: d = 0,
        loop: c = 0,
        gradient: f = !1,
        gradientColor: m = "white",
        gradientWidth: p = 200,
        onFinish: y,
        onCycleComplete: h,
        onMount: v,
        children: b
    }, g) {
        let [_, P] = n.useState(0), [j, x] = n.useState(0), [O, C] = n.useState(1), [R, M] = n.useState(!1), S = n.useRef(null), E = g || S, T = n.useRef(null), w = n.useCallback(() => {
            if (T.current && E.current) {
                let e = E.current.getBoundingClientRect(),
                    t = T.current.getBoundingClientRect(),
                    n = e.width,
                    a = t.width;
                ("up" === i || "down" === i) && (n = e.height, a = t.height), r && n && a ? C(a < n ? Math.ceil(n / a) : 1) : C(1), P(n), x(a)
            }
        }, [r, E, i]);
        n.useEffect(() => {
            if (R && (w(), T.current && E.current)) {
                let e = new ResizeObserver(() => w());
                return e.observe(E.current), e.observe(T.current), () => {
                    e && e.disconnect()
                }
            }
        }, [w, E, R]), n.useEffect(() => {
            w()
        }, [w, b]), n.useEffect(() => {
            M(!0)
        }, []), n.useEffect(() => {
            "function" == typeof v && v()
        }, []);
        let N = n.useMemo(() => r ? j * O / s : j < _ ? _ / s : j / s, [r, _, j, O, s]),
            F = n.useMemo(() => Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !l || o ? "paused" : "running",
                "--pause-on-click": !l || o && !u || u ? "paused" : "running",
                "--width": "up" === i || "down" === i ? "100vh" : "100%",
                "--transform": "up" === i ? "rotate(-90deg)" : "down" === i ? "rotate(90deg)" : "none"
            }), [e, l, o, u, i]),
            A = n.useMemo(() => ({
                "--gradient-color": m,
                "--gradient-width": "number" == typeof p ? `${p}px` : p
            }), [m, p]),
            B = n.useMemo(() => ({
                "--play": l ? "running" : "paused",
                "--direction": "left" === i ? "normal" : "reverse",
                "--duration": `${N}s`,
                "--delay": `${d}s`,
                "--iteration-count": c ? `${c}` : "infinite",
                "--min-width": r ? "auto" : "100%"
            }), [l, i, N, d, c, r]),
            k = n.useMemo(() => ({
                "--transform": "up" === i ? "rotate(90deg)" : "down" === i ? "rotate(-90deg)" : "none"
            }), [i]),
            D = n.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) => a.default.createElement(n.Fragment, {
                key: t
            }, n.Children.map(b, e => a.default.createElement("div", {
                style: k,
                className: "rfm-child"
            }, e)))), [k, b]);
        return R ? a.default.createElement("div", {
            ref: E,
            style: F,
            className: "rfm-marquee-container " + t
        }, f && a.default.createElement("div", {
            style: A,
            className: "rfm-overlay"
        }), a.default.createElement("div", {
            className: "rfm-marquee",
            style: B,
            onAnimationIteration: h,
            onAnimationEnd: y
        }, a.default.createElement("div", {
            className: "rfm-initial-child-container",
            ref: T
        }, n.Children.map(b, e => a.default.createElement("div", {
            style: k,
            className: "rfm-child"
        }, e))), D(O - 1)), a.default.createElement("div", {
            className: "rfm-marquee",
            style: B
        }, D(O))) : null
    })
}, 819358, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(500932),
        n = e.i(271645),
        a = e.i(922998);
    e.s(["Marquee", 0, function(e) {
        let l, o, u, i, s, d, c, f = (0, r.c)(14);
        f[0] !== e ? ({
            className: l,
            loader: o,
            ...u
        } = e, f[0] = e, f[1] = l, f[2] = o, f[3] = u) : (l = f[1], o = f[2], u = f[3]);
        let [m, p] = n.useState(!1);
        f[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => p(!0), f[4] = i) : i = f[4];
        let y = +!!m;
        f[5] !== y ? (s = {
            opacity: y
        }, f[5] = y, f[6] = s) : s = f[6], f[7] !== u || f[8] !== s ? (d = (0, t.jsx)(a.default, {
            className: "overflow-hidden",
            autoFill: !0,
            speed: 25,
            onMount: i,
            style: s,
            ...u
        }), f[7] = u, f[8] = s, f[9] = d) : d = f[9];
        let h = !m && o;
        return f[10] !== l || f[11] !== d || f[12] !== h ? (c = (0, t.jsxs)("div", {
            className: l,
            children: [d, h]
        }), f[10] = l, f[11] = d, f[12] = h, f[13] = c) : c = f[13], c
    }])
}]);