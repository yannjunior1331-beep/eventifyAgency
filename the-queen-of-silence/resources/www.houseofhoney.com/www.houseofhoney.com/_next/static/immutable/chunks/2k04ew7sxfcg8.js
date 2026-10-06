(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 247984, t => {
    "use strict";
    var e = {
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
        r = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        n = {
            0: String.fromCodePoint(r[0]),
            1: String.fromCodePoint(r[1]),
            2: String.fromCodePoint(r[2]),
            3: String.fromCodePoint(r[3])
        },
        i = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(n).map(t => [t[1], +t[0]])), Object.fromEntries(Object.entries(e).map(t => t.reverse()));
    var o = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        s = RegExp(`[${o}]{4,}`, "gu");
    t.s(["isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(s, ""),
            encoded: (null == (r = e.match(s)) ? void 0 : r[0]) || ""
        }.cleaned)
    }, "y", 0, function(t, e, r = "auto") {
        return !0 === r || "auto" === r && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${function(t){let e=JSON.stringify(t),r=new TextEncoder().encode(e),o="";for(let t=0;t<r.length;t++){let e=r[t];o+=n[e>>6&3]+n[e>>4&3]+n[e>>2&3]+n[3&e]}return i+o}(e)}`
    }])
}, 273299, t => {
    "use strict";
    var e;
    let r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

    function n(t) {
        return `image-${t.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/, "-$1")
    }
    let i = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"],
            ["frame", "frame"]
        ],
        o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
        s = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
        a = ["format"];

    function u(t) {
        let {
            apiHost: e,
            projectId: r,
            dataset: n
        } = t, i = {
            baseUrl: (e || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn.")
        }, o = t.resource ? ? t["~experimental_resource"];
        if (o ? .type === "media-library") {
            if ("string" != typeof o.id || 0 === o.id.length) throw Error('Media library clients must include an id in "resource"');
            return { ...i,
                mediaLibraryId: o.id
            }
        }
        if (o ? .type === "canvas") {
            if ("string" != typeof o.id || 0 === o.id.length) throw Error('Canvas clients must include an id in "resource"');
            return { ...i,
                canvasId: o.id
            }
        }
        if (o ? .type === "dataset") {
            if ("string" != typeof o.id || 0 === o.id.length) throw Error('Dataset clients must include an id in "resource"');
            let [t, e] = o.id.split(".");
            if (!t || !e) throw Error('Dataset resource id must be in the format "projectId.dataset", got: ' + o.id);
            return { ...i,
                projectId: t,
                dataset: e
            }
        }
        return { ...i,
            projectId: r,
            dataset: n
        }
    }

    function l(t) {
        return t && "config" in t && "function" == typeof t.config ? u(t.config()) : t && "clientConfig" in t && "object" == typeof t.clientConfig ? u(t.clientConfig) : t || {}
    }
    class f {
        options;
        constructor(t, e) {
            this.options = t ? { ...t.options || {},
                ...e || {}
            } : { ...e || {}
            }
        }
        withOptions(t) {
            return new f(this, function(t, e) {
                let r = e.baseUrl || t.baseUrl,
                    n = {
                        baseUrl: r
                    };
                for (let t in e) e.hasOwnProperty(t) && (n[function(t) {
                    for (let e of i) {
                        let [r, n] = e;
                        if (t === r || t === n) return r
                    }
                    return t
                }(t)] = e[t]);
                return {
                    baseUrl: r,
                    ...n
                }
            }(this.options, t))
        }
        image(t) {
            return this.withOptions({
                source: t
            })
        }
        dataset(t) {
            return this.withOptions({
                dataset: t
            })
        }
        projectId(t) {
            return this.withOptions({
                projectId: t
            })
        }
        withClient(t) {
            let e = l(t),
                r = { ...this.options
                };
            return delete r.baseUrl, delete r.projectId, delete r.dataset, delete r.mediaLibraryId, delete r.canvasId, new f(null, { ...e,
                ...r
            })
        }
        bg(t) {
            return this.withOptions({
                bg: t
            })
        }
        dpr(t) {
            return this.withOptions(t && 1 !== t ? {
                dpr: t
            } : {})
        }
        width(t) {
            return this.withOptions({
                width: t
            })
        }
        height(t) {
            return this.withOptions({
                height: t
            })
        }
        focalPoint(t, e) {
            return this.withOptions({
                focalPoint: {
                    x: t,
                    y: e
                }
            })
        }
        maxWidth(t) {
            return this.withOptions({
                maxWidth: t
            })
        }
        minWidth(t) {
            return this.withOptions({
                minWidth: t
            })
        }
        maxHeight(t) {
            return this.withOptions({
                maxHeight: t
            })
        }
        minHeight(t) {
            return this.withOptions({
                minHeight: t
            })
        }
        size(t, e) {
            return this.withOptions({
                width: t,
                height: e
            })
        }
        blur(t) {
            return this.withOptions({
                blur: t
            })
        }
        sharpen(t) {
            return this.withOptions({
                sharpen: t
            })
        }
        rect(t, e, r, n) {
            return this.withOptions({
                rect: {
                    left: t,
                    top: e,
                    width: r,
                    height: n
                }
            })
        }
        format(t) {
            return this.withOptions({
                format: t
            })
        }
        invert(t) {
            return this.withOptions({
                invert: t
            })
        }
        orientation(t) {
            return this.withOptions({
                orientation: t
            })
        }
        quality(t) {
            return this.withOptions({
                quality: t
            })
        }
        forceDownload(t) {
            return this.withOptions({
                download: t
            })
        }
        flipHorizontal() {
            return this.withOptions({
                flipHorizontal: !0
            })
        }
        flipVertical() {
            return this.withOptions({
                flipVertical: !0
            })
        }
        ignoreImageParams() {
            return this.withOptions({
                ignoreImageParams: !0
            })
        }
        fit(t) {
            if (-1 === o.indexOf(t)) throw Error(`Invalid fit mode "${t}"`);
            return this.withOptions({
                fit: t
            })
        }
        crop(t) {
            if (-1 === s.indexOf(t)) throw Error(`Invalid crop mode "${t}"`);
            return this.withOptions({
                crop: t
            })
        }
        saturation(t) {
            return this.withOptions({
                saturation: t
            })
        }
        auto(t) {
            if (-1 === a.indexOf(t)) throw Error(`Invalid auto mode "${t}"`);
            return this.withOptions({
                auto: t
            })
        }
        pad(t) {
            return this.withOptions({
                pad: t
            })
        }
        vanityName(t) {
            return this.withOptions({
                vanityName: t
            })
        }
        frame(t) {
            if (1 !== t) throw Error(`Invalid frame value "${t}"`);
            return this.withOptions({
                frame: t
            })
        }
        url() {
            return function(t) {
                let e = { ...t || {}
                    },
                    o = e.source;
                delete e.source;
                let s = function(t) {
                    var e;
                    let r;
                    if (!t) return null;
                    if ("string" == typeof t && (e = t, /^https?:\/\//.test(`${e}`))) r = {
                        asset: {
                            _ref: n(t)
                        }
                    };
                    else if ("string" == typeof t) r = {
                        asset: {
                            _ref: t
                        }
                    };
                    else if (t && "string" == typeof t._ref) r = {
                        asset: t
                    };
                    else if (t && "string" == typeof t._id) r = {
                        asset: {
                            _ref: t._id || ""
                        }
                    };
                    else if (t && t.asset && "string" == typeof t.asset.url) r = {
                        asset: {
                            _ref: n(t.asset.url)
                        }
                    };
                    else {
                        if ("object" != typeof t.asset) return null;
                        r = { ...t
                        }
                    }
                    return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
                        function(t) {
                            if (t.crop && t.hotspot) return t;
                            let e = { ...t
                            };
                            return e.crop || (e.crop = {
                                left: 0,
                                top: 0,
                                bottom: 0,
                                right: 0
                            }), e.hotspot || (e.hotspot = {
                                x: .5,
                                y: .5,
                                height: 1,
                                width: 1
                            }), e
                        }(r)
                }(o);
                if (!s) {
                    if (o && "object" == typeof o && null !== o && o._upload && (!o.asset || !o.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                    throw Error(`Unable to resolve image URL from source (${JSON.stringify(o)})`)
                }
                let a = function(t) {
                        let [, e, n, i] = t.split("-");
                        if (!e || !n || !i) throw Error(`Malformed asset _ref '${t}'. Expected an id like "${r}".`);
                        let [o, s] = n.split("x"), a = +o, u = +s;
                        if (!(isFinite(a) && isFinite(u))) throw Error(`Malformed asset _ref '${t}'. Expected an id like "${r}".`);
                        return {
                            id: e,
                            width: a,
                            height: u,
                            format: i
                        }
                    }(s.asset._ref || s.asset._id || ""),
                    u = Math.round(s.crop.left * a.width),
                    l = Math.round(s.crop.top * a.height),
                    f = {
                        left: u,
                        top: l,
                        width: Math.round(a.width - s.crop.right * a.width - u),
                        height: Math.round(a.height - s.crop.bottom * a.height - l)
                    },
                    c = s.hotspot.height * a.height / 2,
                    h = s.hotspot.width * a.width / 2,
                    p = s.hotspot.x * a.width,
                    d = s.hotspot.y * a.height;
                return e.rect || e.focalPoint || e.ignoreImageParams || e.crop || (e = { ...e,
                        ... function(t, e) {
                            let r, n = e.width,
                                i = e.height;
                            if (!(n && i)) return {
                                width: n,
                                height: i,
                                rect: t.crop
                            };
                            let o = t.crop,
                                s = t.hotspot,
                                a = n / i;
                            if (o.width / o.height > a) {
                                let t = Math.round(o.height),
                                    e = Math.round(t * a),
                                    n = Math.max(0, Math.round(o.top)),
                                    i = Math.max(0, Math.round(Math.round((s.right - s.left) / 2 + s.left) - e / 2));
                                i < o.left ? i = o.left : i + e > o.left + o.width && (i = o.left + o.width - e), r = {
                                    left: i,
                                    top: n,
                                    width: e,
                                    height: t
                                }
                            } else {
                                let t = o.width,
                                    e = Math.round(t / a),
                                    n = Math.max(0, Math.round(o.left)),
                                    i = Math.max(0, Math.round(Math.round((s.bottom - s.top) / 2 + s.top) - e / 2));
                                i < o.top ? i = o.top : i + e > o.top + o.height && (i = o.top + o.height - e), r = {
                                    left: n,
                                    top: i,
                                    width: t,
                                    height: e
                                }
                            }
                            return {
                                width: n,
                                height: i,
                                rect: r
                            }
                        }({
                            crop: f,
                            hotspot: {
                                left: p - h,
                                top: d - c,
                                right: p + h,
                                bottom: d + c
                            }
                        }, e)
                    }),
                    function(t) {
                        let e, r = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                            n = t.vanityName ? `/${t.vanityName}` : "",
                            o = `${t.asset.id}-${t.asset.width}x${t.asset.height}.${t.asset.format}${n}`;
                        e = t.mediaLibraryId ? `${r}/media-libraries/${t.mediaLibraryId}/images/${o}` : t.canvasId ? `${r}/images/canvases/${t.canvasId}/${o}` : `${r}/images/${t.projectId}/${t.dataset}/${o}`;
                        let s = [];
                        if (t.rect) {
                            let {
                                left: e,
                                top: r,
                                width: n,
                                height: i
                            } = t.rect;
                            (0 !== e || 0 !== r || i !== t.asset.height || n !== t.asset.width) && s.push(`rect=${e},${r},${n},${i}`)
                        }
                        t.bg && s.push(`bg=${t.bg}`), t.focalPoint && (s.push(`fp-x=${t.focalPoint.x}`), s.push(`fp-y=${t.focalPoint.y}`));
                        let a = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                        return a && s.push(`flip=${a}`), i.forEach(e => {
                            let [r, n] = e;
                            "u" > typeof t[r] ? s.push(`${n}=${encodeURIComponent(t[r])}`) : "u" > typeof t[n] && s.push(`${n}=${encodeURIComponent(t[n])}`)
                        }), 0 === s.length ? e : `${e}?${s.join("&")}`
                    }({ ...e,
                        asset: a
                    })
            }(this.options)
        }
        toString() {
            return this.url()
        }
    }
    e = ["The default export of @sanity/image-url has been deprecated. Use the named export `createImageUrlBuilder` instead."], t.s(["createImageUrlBuilder", 0, function(t) {
        return new f(null, l(t))
    }])
}, 88653, t => {
    "use strict";
    var e = t.i(843476),
        r = t.i(271645),
        n = t.i(231178),
        i = t.i(947414),
        o = t.i(674008),
        s = t.i(821476),
        a = t.i(772846),
        u = r,
        l = t.i(737806);

    function f(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
    }
    class c extends u.Component {
        getSnapshotBeforeUpdate(t) {
            let e = this.props.childRef.current;
            if ((0, a.isHTMLElement)(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let t = e.offsetParent,
                    r = (0, a.isHTMLElement)(t) && t.offsetWidth || 0,
                    n = (0, a.isHTMLElement)(t) && t.offsetHeight || 0,
                    i = getComputedStyle(e),
                    o = this.props.sizeRef.current;
                o.height = parseFloat(i.height), o.width = parseFloat(i.width), o.top = e.offsetTop, o.left = e.offsetLeft, o.right = r - o.width - o.left, o.bottom = n - o.height - o.top, o.direction = i.direction
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function h({
        children: t,
        isPresent: n,
        anchorX: i,
        anchorY: o,
        root: s,
        pop: a
    }) {
        let p = (0, u.useId)(),
            d = (0, u.useRef)(null),
            m = (0, u.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                direction: "ltr"
            }),
            {
                nonce: g
            } = (0, u.useContext)(l.MotionConfigContext),
            y = function(...t) {
                return r.useCallback(function(...t) {
                    return e => {
                        let r = !1,
                            n = t.map(t => {
                                let n = f(t, e);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let e = 0; e < n.length; e++) {
                                let r = n[e];
                                "function" == typeof r ? r() : f(t[e], null)
                            }
                        }
                    }
                }(...t), t)
            }(d, !1 !== a ? t.props ? .ref ? ? t ? .ref : void 0);
        return (0, u.useInsertionEffect)(() => {
            let {
                width: t,
                height: e,
                top: r,
                left: u,
                right: l,
                bottom: f,
                direction: c
            } = m.current;
            if (n || !1 === a || !d.current || !t || !e) return;
            let h = "rtl" === c,
                y = "left" === i ? h ? `right: ${l}` : `left: ${u}` : h ? `left: ${u}` : `right: ${l}`,
                w = "bottom" === o ? `bottom: ${f}` : `top: ${r}`;
            d.current.dataset.motionPopId = p;
            let v = document.createElement("style");
            g && (v.nonce = g);
            let b = s ? ? document.head;
            return b.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${y}px !important;
            ${w}px !important;
          }
        `), () => {
                d.current ? .removeAttribute("data-motion-pop-id"), b.contains(v) && b.removeChild(v)
            }
        }, [n]), (0, e.jsx)(c, {
            isPresent: n,
            childRef: d,
            sizeRef: m,
            pop: a,
            children: !1 === a ? t : u.cloneElement(t, {
                ref: y
            })
        })
    }
    let p = ({
        children: t,
        initial: n,
        isPresent: a,
        onExitComplete: u,
        custom: l,
        presenceAffectsLayout: f,
        mode: c,
        anchorX: p,
        anchorY: m,
        root: g
    }) => {
        let y = (0, i.useConstant)(d),
            w = (0, r.useId)(),
            v = (0, r.useRef)(a),
            b = (0, r.useRef)(u);
        (0, o.useIsomorphicLayoutEffect)(() => {
            v.current = a, b.current = u
        });
        let x = !0,
            O = (0, r.useMemo)(() => (x = !1, {
                id: w,
                initial: n,
                isPresent: a,
                custom: l,
                onExitComplete: t => {
                    for (let e of (y.set(t, !0), y.values()))
                        if (!e) return;
                    u && u()
                },
                register: t => (y.set(t, !1), () => {
                    y.delete(t), v.current || y.size || b.current ? .()
                })
            }), [a, y, u]);
        return f && x && (O = { ...O
        }), (0, r.useMemo)(() => {
            y.forEach((t, e) => y.set(e, !1))
        }, [a]), r.useEffect(() => {
            a || y.size || !u || u()
        }, [a]), t = (0, e.jsx)(h, {
            pop: "popLayout" === c,
            isPresent: a,
            anchorX: p,
            anchorY: m,
            root: g,
            children: t
        }), (0, e.jsx)(s.PresenceContext.Provider, {
            value: O,
            children: t
        })
    };

    function d() {
        return new Map
    }
    var m = t.i(464978);
    let g = t => t.key || "";

    function y(t) {
        let e = [];
        return r.Children.forEach(t, t => {
            (0, r.isValidElement)(t) && e.push(t)
        }), e
    }
    t.s(["AnimatePresence", 0, ({
        children: t,
        custom: s,
        initial: a = !0,
        onExitComplete: u,
        presenceAffectsLayout: l = !0,
        mode: f = "sync",
        propagate: c = !1,
        anchorX: h = "left",
        anchorY: d = "top",
        root: w
    }) => {
        let [v, b] = (0, m.usePresence)(c), x = (0, r.useMemo)(() => y(t), [t]), O = c && !v ? [] : x.map(g), E = (0, r.useRef)(!0), $ = (0, r.useRef)(x), S = (0, i.useConstant)(() => new Map), _ = (0, r.useRef)(new Set), [A, I] = (0, r.useState)(x), [j, M] = (0, r.useState)(x);
        (0, o.useIsomorphicLayoutEffect)(() => {
            E.current = !1, $.current = x;
            for (let t = 0; t < j.length; t++) {
                let e = g(j[t]);
                O.includes(e) ? (S.delete(e), _.current.delete(e)) : !0 !== S.get(e) && S.set(e, !1)
            }
        }, [j, O.length, O.join("-")]);
        let C = [];
        if (x !== A) {
            let t = [...x];
            for (let e = 0; e < j.length; e++) {
                let r = j[e],
                    n = g(r);
                O.includes(n) || (t.splice(e, 0, r), C.push(r))
            }
            return "wait" === f && C.length && (t = C), M(y(t)), I(x), null
        }
        let {
            forceRender: P
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, e.jsx)(e.Fragment, {
            children: j.map(t => {
                let r = g(t),
                    n = (!c || !!v) && (x === j || O.includes(r));
                return (0, e.jsx)(p, {
                    isPresent: n,
                    initial: (!E.current || !!a) && void 0,
                    custom: s,
                    presenceAffectsLayout: l,
                    mode: f,
                    root: w,
                    onExitComplete: n ? void 0 : () => {
                        if (_.current.has(r) || !S.has(r)) return;
                        _.current.add(r), S.set(r, !0);
                        let t = !0;
                        S.forEach(e => {
                            e || (t = !1)
                        }), t && (P ? .(), M($.current), c && b ? .(), u && u())
                    },
                    anchorX: h,
                    anchorY: d,
                    children: t
                }, r)
            })
        })
    }], 88653)
}, 661327, 889026, 749652, t => {
    "use strict";
    let e, r;
    var n = t.i(642824);

    function i(t) {
        return (0, n.isObject)(t) && "ownerSVGElement" in t
    }

    function o(t, e, r) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let n = document;
            e && (n = e.current);
            let i = r ? .[t] ? ? n.querySelectorAll(t);
            return i ? Array.from(i) : []
        }
        return Array.from(t).filter(t => null != t)
    }
    t.s(["isSVGElement", 0, i], 889026), t.s(["resolveElements", 0, o], 749652);
    let s = new WeakMap,
        a = (t, e, r) => (n, o) => o && o[0] ? o[0][t + "Size"] : i(n) && "getBBox" in n ? n.getBBox()[e] : n[r],
        u = a("inline", "width", "offsetWidth"),
        l = a("block", "height", "offsetHeight");

    function f({
        target: t,
        borderBoxSize: e
    }) {
        s.get(t) ? .forEach(r => {
            r(t, {
                get width() {
                    return u(t, e)
                },
                get height() {
                    return l(t, e)
                }
            })
        })
    }

    function c(t) {
        t.forEach(f)
    }
    let h = new Set;
    t.s(["resize", 0, function(t, n) {
        let i;
        return "function" == typeof t ? (h.add(t), r || (r = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            h.forEach(e => e(t))
        }, window.addEventListener("resize", r)), () => {
            h.delete(t), h.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(c)), (i = o(t)).forEach(t => {
            let r = s.get(t);
            r || (r = new Set, s.set(t, r)), r.add(n), e ? .observe(t)
        }), () => {
            i.forEach(t => {
                let r = s.get(t);
                r ? .delete(n), r ? .size || e ? .unobserve(t)
            })
        })
    }], 661327)
}, 344230, 215932, 515923, t => {
    "use strict";
    var e = t.i(965566),
        r = t.i(476959),
        n = t.i(846791),
        i = t.i(260830),
        o = t.i(738638),
        s = t.i(783920),
        a = t.i(203163);
    t.s(["interpolate", 0, function(t, u, {
        clamp: l = !0,
        ease: f,
        mixer: c
    } = {}) {
        let h = t.length;
        if ((0, e.invariant)(h === u.length, "Both input and output ranges must be the same length", "range-length"), 1 === h) return () => u[0];
        if (2 === h && u[0] === u[1]) return () => u[1];
        let p = t[0] === t[1];
        t[0] > t[h - 1] && (t = [...t].reverse(), u = [...u].reverse());
        let d = function(t, e, r) {
                let s = [],
                    u = r || n.MotionGlobalConfig.mix || a.mix,
                    l = t.length - 1;
                for (let r = 0; r < l; r++) {
                    let n = u(t[r], t[r + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[r] || i.noop : e;
                        n = (0, o.pipe)(t, n)
                    }
                    s.push(n)
                }
                return s
            }(u, f, c),
            m = d.length,
            g = e => {
                if (p && e < t[0]) return u[0];
                let r = 0;
                if (m > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                let n = (0, s.progress)(t[r], t[r + 1], e);
                return d[r](n)
            };
        return l ? e => g((0, r.clamp)(t[0], t[h - 1], e)) : g
    }], 344230);
    var u = t.i(100706);

    function l(t, e) {
        let r = t[t.length - 1];
        for (let n = 1; n <= e; n++) {
            let i = (0, s.progress)(0, e, n);
            t.push((0, u.mixNumber)(r, 1, i))
        }
    }
    t.s(["fillOffset", 0, l], 215932), t.s(["defaultOffset", 0, function(t) {
        let e = [0];
        return l(e, t.length - 1), e
    }], 515923)
}, 772846, 642824, t => {
    "use strict";
    let e = t => "object" == typeof t && null !== t;
    t.s(["isObject", 0, e], 642824), t.s(["isHTMLElement", 0, function(t) {
        return e(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
    }], 772846)
}, 738638, 203163, t => {
    "use strict";
    let e = (...t) => t.reduce((t, e) => r => e(t(r)));
    t.s(["pipe", 0, e], 738638);
    var r = t.i(965566),
        n = t.i(19928),
        i = t.i(279444),
        o = t.i(569577),
        s = t.i(463011),
        a = t.i(22660);

    function u(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
    }
    var l = t.i(766820);

    function f(t, e) {
        return r => r > 0 ? e : t
    }
    var c = t.i(100706);
    let h = (t, e, r) => {
            let n = t * t,
                i = r * (e * e - n) + n;
            return i < 0 ? 0 : Math.sqrt(i)
        },
        p = [s.hex, l.rgba, a.hsla];

    function d(t) {
        let e = p.find(e => e.test(t));
        if ((0, r.warning)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let n = e.parse(t);
        return e === a.hsla && (n = function({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: n
        }) {
            t /= 360, r /= 100;
            let i = 0,
                o = 0,
                s = 0;
            if (e /= 100) {
                let n = r < .5 ? r * (1 + e) : r + e - r * e,
                    a = 2 * r - n;
                i = u(a, n, t + 1 / 3), o = u(a, n, t), s = u(a, n, t - 1 / 3)
            } else i = o = s = r;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n
            }
        }(n)), n
    }
    let m = (t, e) => {
            let r = d(t),
                n = d(e);
            if (!r || !n) return f(t, e);
            let i = { ...r
            };
            return t => (i.red = h(r.red, n.red, t), i.green = h(r.green, n.green, t), i.blue = h(r.blue, n.blue, t), i.alpha = (0, c.mixNumber)(r.alpha, n.alpha, t), l.rgba.transform(i))
        },
        g = new Set(["none", "hidden"]);

    function y(t, e) {
        return r => (0, c.mixNumber)(t, e, r)
    }

    function w(t) {
        return "number" == typeof t ? y : "string" == typeof t ? (0, n.isCSSVariableToken)(t) ? f : i.color.test(t) ? m : x : Array.isArray(t) ? v : "object" == typeof t ? i.color.test(t) ? m : b : f
    }

    function v(t, e) {
        let r = [...t],
            n = r.length,
            i = t.map((t, r) => w(t)(t, e[r]));
        return t => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r
        }
    }

    function b(t, e) {
        let r = { ...t,
                ...e
            },
            n = {};
        for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = w(t[i])(t[i], e[i]));
        return t => {
            for (let e in n) r[e] = n[e](t);
            return r
        }
    }
    let x = (t, n) => {
        let i = o.complex.createTransformer(n),
            s = (0, o.analyseComplexValue)(t),
            a = (0, o.analyseComplexValue)(n);
        if (!(s.indexes.var.length === a.indexes.var.length && s.indexes.color.length === a.indexes.color.length && s.indexes.number.length >= a.indexes.number.length)) return (0, r.warning)(!0, `Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), f(t, n);
        if (g.has(t) && !a.values.length || g.has(n) && !s.values.length) return g.has(t) ? e => e <= 0 ? t : n : e => e >= 1 ? n : t;
        return e(v(function(t, e) {
            let r = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let i = 0; i < e.values.length; i++) {
                let o = e.types[i],
                    s = t.indexes[o][n[o]],
                    a = t.values[s] ? ? 0;
                r[i] = a, n[o]++
            }
            return r
        }(s, a), a.values), i)
    };
    t.s(["mix", 0, function(t, e, r) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0, c.mixNumber)(t, e, r) : w(t)(t, e)
    }], 203163)
}, 783920, t => {
    "use strict";
    t.s(["progress", 0, (t, e, r) => {
        let n = e - t;
        return n ? (r - t) / n : 1
    }])
}, 290571, t => {
    "use strict";
    var e = function(t, r) {
            return (e = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            })(t, r)
        },
        r = function() {
            return (r = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

    function n(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function i(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, i, o = r.call(t),
            s = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    }

    function o(t) {
        return this instanceof o ? (this.v = t, this) : new o(t)
    }
    "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function(t, e, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(t, e || []),
            s = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, f)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function a(t, e) {
            i[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    s.push([t, e, r, n]) > 1 || u(t, e)
                })
            }, e && (n[t] = e(n[t])))
        }

        function u(t, e) {
            try {
                var r;
                (r = i[t](e)).value instanceof o ? Promise.resolve(r.value.v).then(l, f) : c(s[0][2], r)
            } catch (t) {
                c(s[0][3], t)
            }
        }

        function l(t) {
            u("next", t)
        }

        function f(t) {
            u("throw", t)
        }

        function c(t, e) {
            t(e), s.shift(), s.length && u(s[0][0], s[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = n(t), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function i(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, i) {
                    var o, s, a;
                    o = n, s = i, a = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        o({
                            value: t,
                            done: a
                        })
                    }, s)
                })
            }
        }
    }, "__await", 0, o, "__awaiter", 0, function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function s(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(s, a)
            }
            u((n = n.apply(t, e || [])).next())
        })
    }, "__extends", 0, function(t, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }, "__generator", 0, function(t, e) {
        var r, n, i, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(a) {
            return function(u) {
                var l = [a, u];
                if (r) throw TypeError("Generator is already executing.");
                for (; s && (s = 0, l[0] && (o = 0)), o;) try {
                    if (r = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                    switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                        case 0:
                        case 1:
                            i = l;
                            break;
                        case 4:
                            return o.label++, {
                                value: l[1],
                                done: !1
                            };
                        case 5:
                            o.label++, n = l[1], l = [0];
                            continue;
                        case 7:
                            l = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                o.label = l[1];
                                break
                            }
                            if (6 === l[0] && o.label < i[1]) {
                                o.label = i[1], i = l;
                                break
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2], o.ops.push(l);
                                break
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    l = e.call(t, o)
                } catch (t) {
                    l = [6, t], n = 0
                } finally {
                    r = i = 0
                }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, i, "__rest", 0, function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
        return r
    }, "__spread", 0, function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
        return t
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
        return t.concat(n || Array.prototype.slice.call(e))
    }, "__values", 0, n])
}, 232286, 386252, t => {
    "use strict";
    var e = t.i(271645);

    function r(t, e) {
        return "function" == typeof t ? t(e) : t && (t.current = e), t
    }
    var n = "u" > typeof window ? e.useLayoutEffect : e.useEffect,
        i = new WeakMap;
    t.s(["useMergeRefs", 0, function(t, o) {
        var s, a, u, l = (s = o || null, a = function(e) {
            return t.forEach(function(t) {
                return r(t, e)
            })
        }, (u = (0, e.useState)(function() {
            return {
                value: s,
                callback: a,
                facade: {
                    get current() {
                        return u.value
                    },
                    set current(value) {
                        var t = u.value;
                        t !== value && (u.value = value, u.callback(value, t))
                    }
                }
            }
        })[0]).callback = a, u.facade);
        return n(function() {
            var e = i.get(l);
            if (e) {
                var n = new Set(e),
                    o = new Set(t),
                    s = l.current;
                n.forEach(function(t) {
                    o.has(t) || r(t, null)
                }), o.forEach(function(t) {
                    n.has(t) || r(t, s)
                })
            }
            i.set(l, t)
        }, [t]), l
    }], 232286);
    var o = t.i(290571);

    function s(t) {
        return t
    }

    function a(t, e) {
        void 0 === e && (e = s);
        var r = [],
            n = !1;
        return {
            read: function() {
                if (n) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : t
            },
            useMedium: function(t) {
                var i = e(t, n);
                return r.push(i),
                    function() {
                        r = r.filter(function(t) {
                            return t !== i
                        })
                    }
            },
            assignSyncMedium: function(t) {
                for (n = !0; r.length;) {
                    var e = r;
                    r = [], e.forEach(t)
                }
                r = {
                    push: function(e) {
                        return t(e)
                    },
                    filter: function() {
                        return r
                    }
                }
            },
            assignMedium: function(t) {
                n = !0;
                var e = [];
                if (r.length) {
                    var i = r;
                    r = [], i.forEach(t), e = r
                }
                var o = function() {
                        var r = e;
                        e = [], r.forEach(t)
                    },
                    s = function() {
                        return Promise.resolve().then(o)
                    };
                s(), r = {
                    push: function(t) {
                        e.push(t), s()
                    },
                    filter: function(t) {
                        return e = e.filter(t), r
                    }
                }
            }
        }
    }
    t.s(["createMedium", 0, function(t, e) {
        return void 0 === e && (e = s), a(t, e)
    }, "createSidecarMedium", 0, function(t) {
        void 0 === t && (t = {});
        var e = a(null);
        return e.options = (0, o.__assign)({
            async: !0,
            ssr: !1
        }, t), e
    }], 386252)
}]);