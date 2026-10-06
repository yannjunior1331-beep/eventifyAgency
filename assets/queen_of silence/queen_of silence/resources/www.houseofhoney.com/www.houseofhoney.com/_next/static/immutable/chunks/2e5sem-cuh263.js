(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 112726, e => {
    "use strict";
    e.s(["screens", 0, {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    }])
}, 934537, e => {
    "use strict";
    var t, r, n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (t = function(e) {
            return n.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, r = Object.create(null), function(e) {
            return void 0 === r[e] && (r[e] = t(e)), r[e]
        });
    e.s(["default", 0, o], 934537)
}, 820783, e => {
    "use strict";
    var t = e.i(271645),
        r = Object.defineProperty,
        n = (e, t) => r(e, "name", {
            value: t,
            configurable: !0
        });

    function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function i(...e) {
        return t => {
            let r = !1,
                n = e.map(e => {
                    let n = o(e, t);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let t = 0; t < n.length; t++) {
                    let r = n[t];
                    "function" == typeof r ? r() : o(e[t], null)
                }
            }
        }
    }

    function a(...e) {
        return t.useCallback(i(...e), e)
    }
    n(o, "setRef"), n(i, "composeRefs"), n(a, "useComposedRefs"), e.s(["composeRefs", 0, i, "useComposedRefs", 0, a])
}, 207670, e => {
    "use strict";

    function t() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
            var r, n, o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var i = t.length;
                    for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                } else
                    for (n in t) t[n] && (o && (o += " "), o += n);
            return o
        }(e)) && (n && (n += " "), n += t);
        return n
    }
    e.s(["clsx", 0, t, "default", 0, t])
}, 464978, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(821476);
    e.s(["usePresence", 0, function(e = !0) {
        let n = (0, t.useContext)(r.PresenceContext);
        if (null === n) return [!0, null];
        let {
            isPresent: o,
            onExitComplete: i,
            register: a
        } = n, s = (0, t.useId)();
        (0, t.useEffect)(() => {
            if (e) return a(s)
        }, [e]);
        let l = (0, t.useCallback)(() => e && i && i(s), [s, i, e]);
        return !o && i ? [!1, l] : [!0]
    }])
}, 648070, 476948, 513565, e => {
    "use strict";
    let t = (0, e.i(271645).createContext)({
        strict: !1
    });
    e.s(["LazyContext", 0, t], 648070);
    var r = e.i(617218);
    let n = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        o = !1;

    function i() {
        return ! function() {
            if (o) return;
            let e = {};
            for (let t in n) e[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            };
            (0, r.setFeatureDefinitions)(e), o = !0
        }(), (0, r.getFeatureDefinitions)()
    }
    e.s(["getInitializedFeatureDefinitions", 0, i], 476948), e.s(["loadFeatures", 0, function(e) {
        let t = i();
        for (let r in e) t[r] = { ...t[r],
            ...e[r]
        };
        (0, r.setFeatureDefinitions)(t)
    }], 513565)
}, 737806, e => {
    "use strict";
    let t = (0, e.i(271645).createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
    e.s(["MotionConfigContext", 0, t])
}, 688291, 582474, 886549, 911587, 798125, 308576, 830665, e => {
    "use strict";
    var t = e.i(271645);
    let r = (0, t.createContext)({});
    e.s(["MotionContext", 0, r], 688291);
    var n = e.i(587576),
        o = e.i(732525);

    function i(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: a,
            animate: s
        } = function(e, t) {
            if ((0, n.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: r
                } = e;
                return {
                    initial: !1 === t || (0, o.isVariantLabel)(t) ? t : void 0,
                    animate: (0, o.isVariantLabel)(r) ? r : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, t.useContext)(r));
        return (0, t.useMemo)(() => ({
            initial: a,
            animate: s
        }), [i(a), i(s)])
    }], 582474);
    var a = e.i(83411),
        s = e.i(130789),
        l = e.i(544947);
    let u = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function c(e, t, r) {
        for (let n in t)(0, a.isMotionValue)(t[n]) || (0, s.isForcedMotionValue)(n, r) || (e[n] = t[n])
    }
    e.s(["createHtmlRenderState", 0, u], 886549);
    var f = e.i(181261),
        d = e.i(399951);
    let p = () => ({ ...u(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, p], 911587);
    let m = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function y(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || m.has(e)
    }
    let g = e => !y(e);

    function h(e) {
        "function" == typeof e && (g = t => t.startsWith("on") ? !y(t) : e(t))
    }
    try {
        h(e.r(934537).default)
    } catch {}

    function v(e, t, r) {
        let n = {};
        for (let o in e)("values" !== o || "object" != typeof e.values) && !(0, a.isMotionValue)(e[o]) && (g(o) || !0 === r && y(o) || !t && !y(o) || e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
        return n
    }
    e.s(["filterProps", 0, v, "loadExternalIsValidProp", 0, h], 798125);
    var b = e.i(944966);
    e.s(["useRender", 0, function(e, r, n, {
        latestValues: o
    }, i, s = !1, m) {
        let y = (m ? ? (0, b.isSVGComponent)(e) ? function(e, r, n, o) {
                let i = (0, t.useMemo)(() => {
                    let t = p();
                    return (0, f.buildSVGAttrs)(t, r, (0, d.isSVGTag)(o), e.transformTemplate, e.style), { ...t.attrs,
                        style: { ...t.style
                        }
                    }
                }, [r]);
                if (e.style) {
                    let t = {};
                    c(t, e.style, e), i.style = { ...t,
                        ...i.style
                    }
                }
                return i
            } : function(e, r) {
                let n, o, i = {},
                    a = (n = e.style || {}, c(o = {}, n, e), Object.assign(o, function({
                        transformTemplate: e
                    }, r) {
                        return (0, t.useMemo)(() => {
                            let t = u();
                            return (0, l.buildHTMLStyles)(t, r, e), Object.assign({}, t.vars, t.style)
                        }, [r])
                    }(e, r)), o);
                return e.drag && !1 !== e.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = a, i
            })(r, o, i, e),
            g = v(r, "string" == typeof e, s),
            h = e !== t.Fragment ? { ...g,
                ...y,
                ref: n
            } : {},
            {
                children: C
            } = r,
            S = (0, t.useMemo)(() => (0, a.isMotionValue)(C) ? C.get() : C, [C]);
        return (0, t.createElement)(e, { ...h,
            children: S
        })
    }], 308576);
    var C = e.i(984049);
    e.s(["scrapeHTMLMotionValuesFromProps", () => C.scrapeMotionValuesFromProps], 830665)
}, 936091, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(231178),
        o = e.i(648070),
        i = e.i(737806),
        a = e.i(688291),
        s = e.i(582474),
        l = e.i(308576),
        u = e.i(944966),
        c = e.i(711805),
        f = e.i(501664),
        d = e.i(476948),
        p = e.i(513565),
        m = e.i(321967),
        y = e.i(683640),
        g = e.i(535043),
        h = e.i(821476),
        v = e.i(104035),
        b = e.i(325522),
        C = e.i(674008);
    e.s(["createMotionComponent", 0, function(e, {
        forwardMotionProps: S = !1,
        type: x
    } = {}, P, M) {
        P && (0, p.loadFeatures)(P);
        let w = x ? "svg" === x : (0, u.isSVGComponent)(e),
            E = w ? f.useSVGVisualState : c.useHTMLVisualState;

        function T(u, c) {
            let f, p = { ...(0, r.useContext)(i.MotionConfigContext),
                    ...u,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, r.useContext)(n.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(u)
                },
                {
                    isStatic: m
                } = p,
                x = (0, s.useCreateMotionContext)(u),
                P = E(u, m);
            if (!m && "u" > typeof window) {
                (0, r.useContext)(o.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: r
                    } = (0, d.getInitializedFeatureDefinitions)();
                    if (!t && !r) return {};
                    let n = { ...t,
                        ...r
                    };
                    return {
                        MeasureLayout: t ? .isEnabled(e) || r ? .isEnabled(e) ? n.MeasureLayout : void 0,
                        ProjectionNode: n.ProjectionNode
                    }
                }(p);
                f = t.MeasureLayout, x.visualElement = function(e, t, n, s, l, u) {
                    let {
                        visualElement: c
                    } = (0, r.useContext)(a.MotionContext), f = (0, r.useContext)(o.LazyContext), d = (0, r.useContext)(h.PresenceContext), p = (0, r.useContext)(i.MotionConfigContext), m = p.reducedMotion, y = p.skipAnimations, S = (0, r.useRef)(null), x = (0, r.useRef)(!1);
                    s = s || f.renderer, !S.current && s && (S.current = s(e, {
                        visualState: t,
                        parent: c,
                        props: n,
                        presenceContext: d,
                        blockInitialAnimation: !!d && !1 === d.initial,
                        reducedMotionConfig: m,
                        skipAnimations: y,
                        isSVG: u
                    }), x.current && S.current && (S.current.manuallyAnimateOnMount = !0));
                    let P = S.current,
                        M = (0, r.useContext)(v.SwitchLayoutGroupContext);
                    P && !P.projection && l && ("html" === P.type || "svg" === P.type) && function(e, t, r, n) {
                        let {
                            layoutId: o,
                            layout: i,
                            drag: a,
                            dragConstraints: s,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c,
                            layoutCrossfade: f
                        } = t;
                        e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: o,
                            layout: i,
                            alwaysMeasureLayout: !!a || s && (0, b.isRefObject)(s),
                            visualElement: e,
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: n,
                            crossfade: f,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c
                        })
                    }(S.current, n, l, M);
                    let w = (0, r.useRef)(!1);
                    (0, r.useInsertionEffect)(() => {
                        P && w.current && P.update(n, d)
                    });
                    let E = n[g.optimizedAppearDataAttribute],
                        T = (0, r.useRef)(!!E && "u" > typeof window && !window.MotionHandoffIsComplete ? .(E) && window.MotionHasOptimisedAnimation ? .(E));
                    return (0, C.useIsomorphicLayoutEffect)(() => {
                        x.current = !0, P && (w.current = !0, window.MotionIsMounted = !0, P.updateFeatures(), P.scheduleRenderMicrotask(), T.current && P.animationState && P.animationState.animateChanges())
                    }), (0, r.useEffect)(() => {
                        P && (!T.current && P.animationState && P.animationState.animateChanges(), T.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ? .(E)
                        }), T.current = !1), P.enteringChildren = void 0)
                    }), P
                }(e, P, p, M, t.ProjectionNode, w)
            }
            return (0, t.jsxs)(a.MotionContext.Provider, {
                value: x,
                children: [f && x.visualElement ? (0, t.jsx)(f, {
                    visualElement: x.visualElement,
                    ...p
                }) : null, (0, l.useRender)(e, u, (0, y.useMotionRef)(P, x.visualElement, c), P, m, S, w)]
            })
        }
        T.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let k = (0, r.forwardRef)(T);
        return k[m.motionComponentSymbol] = e, k
    }], 936091)
}, 806928, e => {
    "use strict";
    var t = e.i(936091);

    function r(e, r) {
        return (0, t.createMotionComponent)(e, r)
    }
    let n = r("div"),
        o = r("li"),
        i = r("nav"),
        a = r("span"),
        s = r("ul");
    e.s(["MotionDiv", 0, n, "MotionLi", 0, o, "MotionNav", 0, i, "MotionSpan", 0, a, "MotionUl", 0, s], 806928)
}, 642623, e => {
    "use strict";
    var t = e.i(806928);
    e.s(["div", () => t.MotionDiv])
}, 790815, e => {
    "use strict";
    var t = e.i(806928);
    e.s(["span", () => t.MotionSpan])
}, 711805, 501664, 321967, 683640, e => {
    "use strict";
    var t = e.i(830665),
        r = e.i(733871),
        n = e.i(587576),
        o = e.i(885983),
        i = e.i(386579),
        a = e.i(271645),
        s = e.i(688291),
        l = e.i(821476),
        u = e.i(947414);
    let c = e => (t, c) => {
        let f = (0, a.useContext)(s.MotionContext),
            d = (0, a.useContext)(l.PresenceContext),
            p = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, a, s, l) {
                return {
                    latestValues: function(e, t, a, s) {
                        let l = {},
                            u = s(e, {});
                        for (let e in u) l[e] = (0, r.resolveMotionValue)(u[e]);
                        let {
                            initial: c,
                            animate: f
                        } = e, d = (0, n.isControllingVariants)(e), p = (0, n.isVariantNode)(e);
                        t && p && !d && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === f && (f = t.animate));
                        let m = !!a && !1 === a.initial,
                            y = (m = m || !1 === c) ? f : c;
                        if (y && "boolean" != typeof y && !(0, o.isAnimationControls)(y)) {
                            let t = Array.isArray(y) ? y : [y];
                            for (let r = 0; r < t.length; r++) {
                                let n = (0, i.resolveVariantFromProps)(e, t[r]);
                                if (n) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...r
                                    } = n;
                                    for (let e in r) {
                                        let t = r[e];
                                        if (Array.isArray(t)) {
                                            let e = m ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (l[e] = t)
                                    }
                                    for (let t in e) l[t] = e[t]
                                }
                            }
                        }
                        return l
                    }(a, s, l, e),
                    renderState: t()
                }
            })(e, t, f, d);
        return c ? p() : (0, u.useConstant)(p)
    };
    var f = e.i(886549);
    let d = c({
        scrapeMotionValuesFromProps: t.scrapeHTMLMotionValuesFromProps,
        createRenderState: f.createHtmlRenderState
    });
    e.s(["useHTMLVisualState", 0, d], 711805);
    var p = e.i(767926),
        p = p,
        m = e.i(911587);
    let y = c({
        scrapeMotionValuesFromProps: p.scrapeMotionValuesFromProps,
        createRenderState: m.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, y], 501664);
    let g = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, g], 321967), e.s(["useMotionRef", 0, function(e, t, r) {
        let n = (0, a.useRef)(r);
        (0, a.useInsertionEffect)(() => {
            n.current = r
        });
        let o = (0, a.useRef)(null);
        return (0, a.useCallback)(r => {
            r && e.onMount ? .(r), t && (r ? t.mount(r) : t.unmount());
            let i = n.current;
            if ("function" == typeof i)
                if (r) {
                    let e = i(r);
                    "function" == typeof e && (o.current = e)
                } else o.current ? (o.current(), o.current = null) : i(r);
            else i && (i.current = r)
        }, [t])
    }], 683640)
}, 947414, e => {
    "use strict";
    var t = e.i(271645);
    e.s(["useConstant", 0, function(e) {
        let r = (0, t.useRef)(null);
        return null === r.current && (r.current = e()), r.current
    }])
}, 674008, e => {
    "use strict";
    var t = e.i(271645);
    let r = "u" > typeof window ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicLayoutEffect", 0, r], 674008)
}, 870455, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(770703),
        n = e.i(271645);
    let o = (0, r.default)(() => e.A(774595), {
        ssr: !1
    });
    e.s(["SanityLive", 0, function(e) {
        let [r, i] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
            (0, n.startTransition)(() => i(!0))
        }, []), r) ? (0, t.jsx)(o, { ...e
        }) : null
    }])
}, 522016, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(190809),
        a = e.r(843476),
        s = i._(e.r(271645)),
        l = e.r(195057),
        u = e.r(8372),
        c = e.r(818581),
        f = e.r(718967),
        d = e.r(405550),
        p = e.r(388540),
        m = e.r(91949),
        y = e.r(573668),
        g = e.r(509396);

    function h(t) {
        var r;
        let n, o, i, [h, b] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
            C = (0, s.useRef)(null),
            {
                href: S,
                as: x,
                children: P,
                prefetch: M = null,
                passHref: w,
                replace: E,
                shallow: T,
                scroll: k,
                onClick: R,
                onMouseEnter: O,
                onTouchStart: j,
                legacyBehavior: _ = !1,
                onNavigate: A,
                transitionTypes: L,
                ref: I,
                unstable_dynamicOnHover: V,
                ...N
            } = t;
        n = P, _ && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let F = s.default.useContext(u.AppRouterContext),
            D = !1 !== M,
            U = !1 === M ? "none" : !0 === M ? "full" : "auto",
            H = "none" !== U ? "auto" === U ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
            $ = "string" == typeof(r = x || S) ? r : (0, l.formatUrl)(r);
        if (_) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = s.default.Children.only(n)
        }
        let z = _ ? o && "object" == typeof o && o.ref : I,
            B, W = s.default.useCallback(e => (null !== F && (C.current = (0, m.mountLinkInstance)(e, $, F, H, D, b, B)), () => {
                C.current && ((0, m.unmountLinkForCurrentNavigation)(C.current), C.current = null), (0, m.unmountPrefetchableInstance)(e)
            }), [D, $, F, H, b, B]),
            G = {
                ref: (0, c.useMergedRef)(W, z),
                onClick(t) {
                    _ || "function" != typeof R || R(t), _ && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !F || t.defaultPrevented || function(t, r, n, o, i, a, l, u = "none") {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: f
                            } = t.currentTarget;
                            if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, y.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(699781);
                            s.default.startTransition(() => {
                                d(r, o ? "replace" : "push", !1 === i ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, l, u)
                            })
                        }
                    }(t, $, C, E, k, A, L, U)
                },
                onMouseEnter(e) {
                    _ || "function" != typeof O || O(e), _ && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), F && D && (0, m.onNavigationIntent)(e.currentTarget, !0 === V)
                },
                onTouchStart: function(e) {
                    _ || "function" != typeof j || j(e), _ && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), F && D && (0, m.onNavigationIntent)(e.currentTarget, !0 === V)
                }
            };
        return (0, f.isAbsoluteUrl)($) ? G.href = $ : _ && !w && ("a" !== o.type || "href" in o.props) || (G.href = (0, d.addBasePath)($)), i = _ ? s.default.cloneElement(o, G) : (0, a.jsx)("a", { ...N,
            ...G,
            children: n
        }), (0, a.jsx)(v.Provider, {
            value: h,
            children: i
        })
    }
    let v = (0, s.createContext)(m.IDLE_LINK_STATUS),
        b = () => (0, s.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(271645);

    function o(e, t) {
        let r = (0, n.useRef)(null),
            o = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (r.current = i(e, n)), t && (o.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 679474, (e, t, r) => {
    "use strict";
    var n = e.r(271645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    r.c = function(e) {
        return n.H.useMemoCache(e)
    }
}, 500932, (e, t, r) => {
    "use strict";
    e.i(247167), t.exports = e.r(679474)
}, 90317, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        bindSnapshot: function() {
            return u
        },
        createAsyncLocalStorage: function() {
            return l
        },
        createSnapshot: function() {
            return c
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class a {
        disable() {
            throw i
        }
        getStore() {}
        run() {
            throw i
        }
        exit() {
            throw i
        }
        enterWith() {
            throw i
        }
        static bind(e) {
            return e
        }
    }
    let s = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

    function l() {
        return s ? new s : new a
    }

    function u(e) {
        return s ? s.bind(e) : a.bind(e)
    }

    function c() {
        return s ? s.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}, 242344, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (0, e.r(90317).createAsyncLocalStorage)()
}, 563599, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return n.workAsyncStorageInstance
        }
    });
    let n = e.r(242344)
}, 309885, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 667585, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(132061);

    function o({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 869093, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(843476),
        o = e.r(271645),
        i = e.r(667585),
        a = e.r(652157);

    function s(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let l = {
            loader: () => Promise.resolve(s(() => null)),
            loading: null,
            ssr: !0
        },
        u = function(e) {
            let t = { ...l,
                    ...e
                },
                r = (0, o.lazy)(() => t.loader().then(s)),
                u = t.loading;

            function c(e) {
                let s = u ? (0, n.jsx)(u, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    l = !t.ssr || !!t.loading,
                    c = l ? o.Suspense : o.Fragment,
                    f = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(a.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, { ...e
                        })]
                    }) : (0, n.jsx)(i.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, { ...e
                        })
                    });
                return (0, n.jsx)(c, { ...l ? {
                        fallback: s
                    } : {},
                    children: f
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 770703, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(555682)._(e.r(869093));

    function o(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let o = { ...r,
            ...t
        };
        return (0, n.default)({ ...o,
            modules: o.loadableGenerated ? .modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 652157, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(843476),
        o = e.r(174080),
        i = e.r(563599),
        a = e.r(309885),
        s = e.r(543369);

    function l({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = i.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let u = (0, s.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,a.encodeURIPath)(e)}${u}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, o.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(718967),
        o = e.r(652817);

    function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 998183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return i
        },
        urlQueryToSearchParams: function() {
            return s
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function i(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function a(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function s(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, a(e));
            else t.set(r, a(n));
        return t
    }

    function l(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 195057, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return s
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(190809)._(e.r(998183)),
        a = /https?|ftp|gopher|file/;

    function s(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", s = e.hash || "", l = e.query || "", u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (u += ":" + e.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
        let c = e.search || l && `?${l}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), s && "#" !== s[0] && (s = "#" + s), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${u}${o}${c}${s}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return s(e)
    }
}, 718967, (e, t, r) => {
    "use strict";
    e.i(247167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return h
        },
        MiddlewareNotFoundError: function() {
            return S
        },
        MissingStaticPage: function() {
            return C
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return y
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return l
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return m
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return x
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => {
            let t = e.charCodeAt(0);
            return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && s.test(e)
        };

    function u() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = u();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let y = "u" > typeof performance,
        g = y && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class h extends Error {}
    class v extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class C extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class S extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function x(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 618566, (e, t, r) => {
    t.exports = e.r(976562)
}]);