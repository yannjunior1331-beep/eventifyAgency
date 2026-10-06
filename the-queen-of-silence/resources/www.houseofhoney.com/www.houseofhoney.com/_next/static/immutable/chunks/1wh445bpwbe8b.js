(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 934537, e => {
    "use strict";
    var t, n, r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (t = function(e) {
            return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, n = Object.create(null), function(e) {
            return void 0 === n[e] && (n[e] = t(e)), n[e]
        });
    e.s(["default", 0, o], 934537)
}, 247984, e => {
    "use strict";
    var t = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        n = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        r = {
            0: String.fromCodePoint(n[0]),
            1: String.fromCodePoint(n[1]),
            2: String.fromCodePoint(n[2]),
            3: String.fromCodePoint(n[3])
        },
        o = [, , , , ].fill(String.fromCodePoint(n[0])).join("");
    Object.fromEntries(Object.entries(r).map(e => [e[1], +e[0]])), Object.fromEntries(Object.entries(t).map(e => e.reverse()));
    var i = `${Object.values(t).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
        a = RegExp(`[${i}]{4,}`, "gu");
    e.s(["isRecord", 0, function(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e)
    }, "stegaClean", 0, function(e) {
        var t, n;
        return e && JSON.parse({
            cleaned: (t = JSON.stringify(e)).replace(a, ""),
            encoded: (null == (n = t.match(a)) ? void 0 : n[0]) || ""
        }.cleaned)
    }, "y", 0, function(e, t, n = "auto") {
        return !0 === n || "auto" === n && (!(!Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e)) && Date.parse(e) || function(e) {
            try {
                new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(e)) ? e : `${e}${function(e){let t=JSON.stringify(e),n=new TextEncoder().encode(t),i="";for(let e=0;e<n.length;e++){let t=n[e];i+=r[t>>6&3]+r[t>>4&3]+r[t>>2&3]+r[3&t]}return o+i}(t)}`
    }])
}, 207670, e => {
    "use strict";

    function t() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
            var n, r, o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var i = t.length;
                    for (n = 0; n < i; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r)
                } else
                    for (r in t) t[r] && (o && (o += " "), o += r);
            return o
        }(e)) && (r && (r += " "), r += t);
        return r
    }
    e.s(["clsx", 0, t, "default", 0, t])
}, 464978, e => {
    "use strict";
    var t = e.i(271645),
        n = e.i(821476);
    e.s(["usePresence", 0, function(e = !0) {
        let r = (0, t.useContext)(n.PresenceContext);
        if (null === r) return [!0, null];
        let {
            isPresent: o,
            onExitComplete: i,
            register: a
        } = r, s = (0, t.useId)();
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
    var n = e.i(617218);
    let r = {
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
            for (let t in r) e[t] = {
                isEnabled: e => r[t].some(t => !!e[t])
            };
            (0, n.setFeatureDefinitions)(e), o = !0
        }(), (0, n.getFeatureDefinitions)()
    }
    e.s(["getInitializedFeatureDefinitions", 0, i], 476948), e.s(["loadFeatures", 0, function(e) {
        let t = i();
        for (let n in e) t[n] = { ...t[n],
            ...e[n]
        };
        (0, n.setFeatureDefinitions)(t)
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
    let n = (0, t.createContext)({});
    e.s(["MotionContext", 0, n], 688291);
    var r = e.i(587576),
        o = e.i(732525);

    function i(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: a,
            animate: s
        } = function(e, t) {
            if ((0, r.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: n
                } = e;
                return {
                    initial: !1 === t || (0, o.isVariantLabel)(t) ? t : void 0,
                    animate: (0, o.isVariantLabel)(n) ? n : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, t.useContext)(n));
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

    function c(e, t, n) {
        for (let r in t)(0, a.isMotionValue)(t[r]) || (0, s.isForcedMotionValue)(r, n) || (e[r] = t[r])
    }
    e.s(["createHtmlRenderState", 0, u], 886549);
    var f = e.i(181261),
        p = e.i(399951);
    let d = () => ({ ...u(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, d], 911587);
    let y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function m(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || y.has(e)
    }
    let h = e => !m(e);

    function g(e) {
        "function" == typeof e && (h = t => t.startsWith("on") ? !m(t) : e(t))
    }
    try {
        g(e.r(934537).default)
    } catch {}

    function v(e, t, n) {
        let r = {};
        for (let o in e)("values" !== o || "object" != typeof e.values) && !(0, a.isMotionValue)(e[o]) && (h(o) || !0 === n && m(o) || !t && !m(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
        return r
    }
    e.s(["filterProps", 0, v, "loadExternalIsValidProp", 0, g], 798125);
    var b = e.i(944966);
    e.s(["useRender", 0, function(e, n, r, {
        latestValues: o
    }, i, s = !1, y) {
        let m = (y ? ? (0, b.isSVGComponent)(e) ? function(e, n, r, o) {
                let i = (0, t.useMemo)(() => {
                    let t = d();
                    return (0, f.buildSVGAttrs)(t, n, (0, p.isSVGTag)(o), e.transformTemplate, e.style), { ...t.attrs,
                        style: { ...t.style
                        }
                    }
                }, [n]);
                if (e.style) {
                    let t = {};
                    c(t, e.style, e), i.style = { ...t,
                        ...i.style
                    }
                }
                return i
            } : function(e, n) {
                let r, o, i = {},
                    a = (r = e.style || {}, c(o = {}, r, e), Object.assign(o, function({
                        transformTemplate: e
                    }, n) {
                        return (0, t.useMemo)(() => {
                            let t = u();
                            return (0, l.buildHTMLStyles)(t, n, e), Object.assign({}, t.vars, t.style)
                        }, [n])
                    }(e, n)), o);
                return e.drag && !1 !== e.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = a, i
            })(n, o, i, e),
            h = v(n, "string" == typeof e, s),
            g = e !== t.Fragment ? { ...h,
                ...m,
                ref: r
            } : {},
            {
                children: S
            } = n,
            x = (0, t.useMemo)(() => (0, a.isMotionValue)(S) ? S.get() : S, [S]);
        return (0, t.createElement)(e, { ...g,
            children: x
        })
    }], 308576);
    var S = e.i(984049);
    e.s(["scrapeHTMLMotionValuesFromProps", () => S.scrapeMotionValuesFromProps], 830665)
}, 936091, e => {
    "use strict";
    var t = e.i(843476),
        n = e.i(271645),
        r = e.i(231178),
        o = e.i(648070),
        i = e.i(737806),
        a = e.i(688291),
        s = e.i(582474),
        l = e.i(308576),
        u = e.i(944966),
        c = e.i(711805),
        f = e.i(501664),
        p = e.i(476948),
        d = e.i(513565),
        y = e.i(321967),
        m = e.i(683640),
        h = e.i(535043),
        g = e.i(821476),
        v = e.i(104035),
        b = e.i(325522),
        S = e.i(674008);
    e.s(["createMotionComponent", 0, function(e, {
        forwardMotionProps: x = !1,
        type: w
    } = {}, C, M) {
        C && (0, d.loadFeatures)(C);
        let k = w ? "svg" === w : (0, u.isSVGComponent)(e),
            P = k ? f.useSVGVisualState : c.useHTMLVisualState;

        function E(u, c) {
            let f, d = { ...(0, n.useContext)(i.MotionConfigContext),
                    ...u,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, n.useContext)(r.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(u)
                },
                {
                    isStatic: y
                } = d,
                w = (0, s.useCreateMotionContext)(u),
                C = P(u, y);
            if (!y && "u" > typeof window) {
                (0, n.useContext)(o.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: n
                    } = (0, p.getInitializedFeatureDefinitions)();
                    if (!t && !n) return {};
                    let r = { ...t,
                        ...n
                    };
                    return {
                        MeasureLayout: t ? .isEnabled(e) || n ? .isEnabled(e) ? r.MeasureLayout : void 0,
                        ProjectionNode: r.ProjectionNode
                    }
                }(d);
                f = t.MeasureLayout, w.visualElement = function(e, t, r, s, l, u) {
                    let {
                        visualElement: c
                    } = (0, n.useContext)(a.MotionContext), f = (0, n.useContext)(o.LazyContext), p = (0, n.useContext)(g.PresenceContext), d = (0, n.useContext)(i.MotionConfigContext), y = d.reducedMotion, m = d.skipAnimations, x = (0, n.useRef)(null), w = (0, n.useRef)(!1);
                    s = s || f.renderer, !x.current && s && (x.current = s(e, {
                        visualState: t,
                        parent: c,
                        props: r,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: y,
                        skipAnimations: m,
                        isSVG: u
                    }), w.current && x.current && (x.current.manuallyAnimateOnMount = !0));
                    let C = x.current,
                        M = (0, n.useContext)(v.SwitchLayoutGroupContext);
                    C && !C.projection && l && ("html" === C.type || "svg" === C.type) && function(e, t, n, r) {
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
                        e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: o,
                            layout: i,
                            alwaysMeasureLayout: !!a || s && (0, b.isRefObject)(s),
                            visualElement: e,
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            crossfade: f,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c
                        })
                    }(x.current, r, l, M);
                    let k = (0, n.useRef)(!1);
                    (0, n.useInsertionEffect)(() => {
                        C && k.current && C.update(r, p)
                    });
                    let P = r[h.optimizedAppearDataAttribute],
                        E = (0, n.useRef)(!!P && "u" > typeof window && !window.MotionHandoffIsComplete ? .(P) && window.MotionHasOptimisedAnimation ? .(P));
                    return (0, S.useIsomorphicLayoutEffect)(() => {
                        w.current = !0, C && (k.current = !0, window.MotionIsMounted = !0, C.updateFeatures(), C.scheduleRenderMicrotask(), E.current && C.animationState && C.animationState.animateChanges())
                    }), (0, n.useEffect)(() => {
                        C && (!E.current && C.animationState && C.animationState.animateChanges(), E.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ? .(P)
                        }), E.current = !1), C.enteringChildren = void 0)
                    }), C
                }(e, C, d, M, t.ProjectionNode, k)
            }
            return (0, t.jsxs)(a.MotionContext.Provider, {
                value: w,
                children: [f && w.visualElement ? (0, t.jsx)(f, {
                    visualElement: w.visualElement,
                    ...d
                }) : null, (0, l.useRender)(e, u, (0, m.useMotionRef)(C, w.visualElement, c), C, y, x, k)]
            })
        }
        E.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let T = (0, n.forwardRef)(E);
        return T[y.motionComponentSymbol] = e, T
    }], 936091)
}, 711805, 501664, 321967, 683640, e => {
    "use strict";
    var t = e.i(830665),
        n = e.i(733871),
        r = e.i(587576),
        o = e.i(885983),
        i = e.i(386579),
        a = e.i(271645),
        s = e.i(688291),
        l = e.i(821476),
        u = e.i(947414);
    let c = e => (t, c) => {
        let f = (0, a.useContext)(s.MotionContext),
            p = (0, a.useContext)(l.PresenceContext),
            d = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, a, s, l) {
                return {
                    latestValues: function(e, t, a, s) {
                        let l = {},
                            u = s(e, {});
                        for (let e in u) l[e] = (0, n.resolveMotionValue)(u[e]);
                        let {
                            initial: c,
                            animate: f
                        } = e, p = (0, r.isControllingVariants)(e), d = (0, r.isVariantNode)(e);
                        t && d && !p && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === f && (f = t.animate));
                        let y = !!a && !1 === a.initial,
                            m = (y = y || !1 === c) ? f : c;
                        if (m && "boolean" != typeof m && !(0, o.isAnimationControls)(m)) {
                            let t = Array.isArray(m) ? m : [m];
                            for (let n = 0; n < t.length; n++) {
                                let r = (0, i.resolveVariantFromProps)(e, t[n]);
                                if (r) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...n
                                    } = r;
                                    for (let e in n) {
                                        let t = n[e];
                                        if (Array.isArray(t)) {
                                            let e = y ? t.length - 1 : 0;
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
            })(e, t, f, p);
        return c ? d() : (0, u.useConstant)(d)
    };
    var f = e.i(886549);
    let p = c({
        scrapeMotionValuesFromProps: t.scrapeHTMLMotionValuesFromProps,
        createRenderState: f.createHtmlRenderState
    });
    e.s(["useHTMLVisualState", 0, p], 711805);
    var d = e.i(767926),
        d = d,
        y = e.i(911587);
    let m = c({
        scrapeMotionValuesFromProps: d.scrapeMotionValuesFromProps,
        createRenderState: y.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, m], 501664);
    let h = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, h], 321967), e.s(["useMotionRef", 0, function(e, t, n) {
        let r = (0, a.useRef)(n);
        (0, a.useInsertionEffect)(() => {
            r.current = n
        });
        let o = (0, a.useRef)(null);
        return (0, a.useCallback)(n => {
            n && e.onMount ? .(n), t && (n ? t.mount(n) : t.unmount());
            let i = r.current;
            if ("function" == typeof i)
                if (n) {
                    let e = i(n);
                    "function" == typeof e && (o.current = e)
                } else o.current ? (o.current(), o.current = null) : i(n);
            else i && (i.current = n)
        }, [t])
    }], 683640)
}, 947414, e => {
    "use strict";
    var t = e.i(271645);
    e.s(["useConstant", 0, function(e) {
        let n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current
    }])
}, 674008, e => {
    "use strict";
    var t = e.i(271645);
    let n = "u" > typeof window ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicLayoutEffect", 0, n], 674008)
}, 679474, (e, t, n) => {
    "use strict";
    var r = e.r(271645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    n.c = function(e) {
        return r.H.useMemoCache(e)
    }
}, 500932, (e, t, n) => {
    "use strict";
    e.i(247167), t.exports = e.r(679474)
}, 290571, e => {
    "use strict";
    var t = function(e, n) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, n)
        },
        n = function() {
            return (n = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function r(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function o(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function i(e) {
        return this instanceof i ? (this.v = e, this) : new i(e)
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => n, "__asyncGenerator", 0, function(e, t, n) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
            a = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c)
            }
        }), r[Symbol.asyncIterator] = function() {
            return this
        }, r;

        function s(e, t) {
            o[e] && (r[e] = function(t) {
                return new Promise(function(n, r) {
                    a.push([e, t, n, r]) > 1 || l(e, t)
                })
            }, t && (r[e] = t(r[e])))
        }

        function l(e, t) {
            try {
                var n;
                (n = o[e](t)).value instanceof i ? Promise.resolve(n.value.v).then(u, c) : f(a[0][2], n)
            } catch (e) {
                f(a[0][3], e)
            }
        }

        function u(e) {
            l("next", e)
        }

        function c(e) {
            l("throw", e)
        }

        function f(e, t) {
            e(t), a.shift(), a.length && l(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = r(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function o(n) {
            t[n] = e[n] && function(t) {
                return new Promise(function(r, o) {
                    var i, a, s;
                    i = r, a = o, s = (t = e[n](t)).done, Promise.resolve(t.value).then(function(e) {
                        i({
                            value: e,
                            done: s
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, i, "__awaiter", 0, function(e, t, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, s)
            }
            l((r = r.apply(e, t || [])).next())
        })
    }, "__extends", 0, function(e, n) {
        if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }, "__generator", 0, function(e, t) {
        var n, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(s) {
            return function(l) {
                var u = [s, l];
                if (n) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                    if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                    switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return i.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            i.label++, r = u[1], u = [0];
                            continue;
                        case 7:
                            u = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                i.label = u[1];
                                break
                            }
                            if (6 === u[0] && i.label < o[1]) {
                                i.label = o[1], o = u;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(u);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    u = t.call(e, i)
                } catch (e) {
                    u = [6, e], r = 0
                } finally {
                    n = o = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, o, "__rest", 0, function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    }, "__spread", 0, function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
        return e
    }, "__spreadArray", 0, function(e, t, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
    }, "__values", 0, r])
}, 232286, 386252, e => {
    "use strict";
    var t = e.i(271645);

    function n(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
    }
    var r = "u" > typeof window ? t.useLayoutEffect : t.useEffect,
        o = new WeakMap;
    e.s(["useMergeRefs", 0, function(e, i) {
        var a, s, l, u = (a = i || null, s = function(t) {
            return e.forEach(function(e) {
                return n(e, t)
            })
        }, (l = (0, t.useState)(function() {
            return {
                value: a,
                callback: s,
                facade: {
                    get current() {
                        return l.value
                    },
                    set current(value) {
                        var e = l.value;
                        e !== value && (l.value = value, l.callback(value, e))
                    }
                }
            }
        })[0]).callback = s, l.facade);
        return r(function() {
            var t = o.get(u);
            if (t) {
                var r = new Set(t),
                    i = new Set(e),
                    a = u.current;
                r.forEach(function(e) {
                    i.has(e) || n(e, null)
                }), i.forEach(function(e) {
                    r.has(e) || n(e, a)
                })
            }
            o.set(u, e)
        }, [e]), u
    }], 232286);
    var i = e.i(290571);

    function a(e) {
        return e
    }

    function s(e, t) {
        void 0 === t && (t = a);
        var n = [],
            r = !1;
        return {
            read: function() {
                if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                    function() {
                        n = n.filter(function(e) {
                            return e !== o
                        })
                    }
            },
            assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                    var t = n;
                    n = [], t.forEach(e)
                }
                n = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                    var o = n;
                    n = [], o.forEach(e), t = n
                }
                var i = function() {
                        var n = t;
                        t = [], n.forEach(e)
                    },
                    a = function() {
                        return Promise.resolve().then(i)
                    };
                a(), n = {
                    push: function(e) {
                        t.push(e), a()
                    },
                    filter: function(e) {
                        return t = t.filter(e), n
                    }
                }
            }
        }
    }
    e.s(["createMedium", 0, function(e, t) {
        return void 0 === t && (t = a), s(e, t)
    }, "createSidecarMedium", 0, function(e) {
        void 0 === e && (e = {});
        var t = s(null);
        return t.options = (0, i.__assign)({
            async: !0,
            ssr: !1
        }, e), t
    }], 386252)
}]);