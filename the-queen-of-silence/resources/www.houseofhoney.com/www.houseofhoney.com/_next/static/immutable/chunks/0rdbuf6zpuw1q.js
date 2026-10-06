(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 407194, e => {
    "use strict";
    var t = e.i(843476),
        n = e.i(500932),
        r = e.i(271645),
        i = e.i(464978),
        a = e.i(790815),
        l = e.i(642623),
        s = e.i(812152);
    let o = e => (e.start + e.end) / 2,
        c = (e, t) => o(e) > t.start + 2 && o(e) < t.end - 2,
        u = new Set(["block", "list-item", "flow-root", "table-cell", "table-caption"]),
        d = new Set(["inline", "contents"]),
        f = ["text-decoration-line", "text-decoration-style", "text-decoration-color", "text-decoration-thickness", "text-underline-offset", "text-decoration-skip-ink"],
        m = f.map(e => `${e}:inherit`).join(";"),
        p = {
            lines: "line",
            words: "word",
            chars: "char"
        },
        h = /(?:^|;)float:(?!none)/,
        g = ["font-size", "font-weight", "font-style", "font-family", "font-variant", "line-height", "letter-spacing", "color", "text-transform", "text-shadow"],
        x = ["font-size", "font-weight", "font-style", "font-family", "font-variant", "line-height", "letter-spacing", "word-spacing", "color", "text-transform", "text-shadow", "text-decoration-line", "text-decoration-color", "text-decoration-style", "background-color"],
        y = {
            float: "none",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-bottom": "0px",
            "margin-left": "0px",
            "padding-top": "0px",
            "padding-right": "0px",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "vertical-align": "baseline",
            "background-color": "rgba(0, 0, 0, 0)"
        },
        w = "u" > typeof Intl && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
            granularity: "word"
        }) : null,
        b = w ? new Intl.Segmenter(void 0, {
            granularity: "grapheme"
        }) : null,
        v = new WeakMap;

    function* k(e) {
        if (b) {
            for (let t of b.segment(e)) yield {
                index: t.index,
                length: t.segment.length
            };
            return
        }
        let t = 0;
        for (let n of Array.from(e)) yield {
            index: t,
            length: n.length
        }, t += n.length
    }
    let E = e => Array.prototype.indexOf.call(e.parentNode ? .childNodes ? ? [], e),
        C = e => e instanceof Text && !e.data.trim();

    function M(e, t) {
        let n = t.kinds.get(e);
        if (void 0 !== n) return n;
        let r = function(e, t) {
            if (e instanceof HTMLElement && !e.checkVisibility()) return "hidden";
            let n = getComputedStyle(e);
            return (t.displays.set(e, n.display), "none" !== n.getPropertyValue("float")) ? "float" : t.ignore && e.matches(t.ignore) || !e.textContent ? .trim() ? "atom" : d.has(n.display) ? "inline" : e.tagName.includes("-") || "list-item" === n.display && "inside" === n.listStylePosition ? "atom" : u.has(n.display) ? "block" : "atom"
        }(e, t);
        return t.kinds.set(e, r), r
    }

    function S(e, t, n) {
        let r = document.createElement(e);
        return t.created.set(r, n), r
    }
    let N = e => e ? `;inline-size:${e}px` : "";

    function T(e, t) {
        let n = S("span", t, `display:inline-block;inline-size:${e}px`);
        return n.textContent = "-", n
    }

    function A(e, t) {
        let n = t.mask.get(e);
        if (!n) return "clip-path:inset(0)";
        let r = `calc(${n} * -1)`;
        return t.vertical ? `clip-path:inset(0 ${r})` : `clip-path:inset(${r} 0)`
    }

    function P(e, t, n, r, i) {
        let a = S(t, i, n);
        return e.replaceWith(a), a.append(e), r.masks.push(a), a
    }

    function L(e) {
        return "before" in e ? {
            node: e.before.parentNode,
            offset: E(e.before)
        } : {
            node: e.text,
            offset: e.offset
        }
    }
    var $ = e.i(88771),
        R = e.i(615683),
        F = e.i(801335),
        V = e.i(205980);
    let _ = [{
            translate: "0 8px",
            opacity: 0
        }, {
            translate: "0 0",
            opacity: 1
        }],
        W = [{
            translate: "0 0",
            opacity: 1
        }, {
            translate: "0 -8px",
            opacity: 0
        }],
        j = 10,
        B = {
            opacity: .001
        },
        I = {
            opacity: 0
        };

    function H(e) {
        return "lines" === e || "words" === e || "chars" === e
    }

    function O(e) {
        e.removeAttribute("role"), e.removeAttribute("aria-label")
    }
    e.s(["AnimatedText", 0, function({
        children: e,
        className: u,
        staggerDelay: d = .08,
        duration: b = .8,
        animationDelay: z = 0,
        as: D = "span",
        splitSelector: G,
        split: q = "lines",
        ignore: K,
        mask: U = !1,
        reveal: X,
        manual: J = !1,
        ref: Q,
        viewport: Y,
        exit: Z
    }) {
        let ee = (0, s.useDraftMode)(),
            et = (0, $.usePrefersReducedMotion)(),
            en = function() {
                let e, t, i = (0, n.c)(2),
                    [a, l] = r.useState(!1);
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                    if ("loaded" === document.fonts.status) return void l(!0);
                    let e = !1;
                    return document.fonts.ready.then(() => {
                        e || l(!0)
                    }), () => {
                        e = !0
                    }
                }, t = [], i[0] = e, i[1] = t) : (e = i[0], t = i[1]), r.useEffect(e, t), a
            }(),
            er = (0, V.useContentReady)().isComplete,
            [ei, ea] = (0, i.usePresence)(),
            {
                enteredForGate: el,
                vpResolved: es,
                viewportDisabled: eo,
                onViewportEnter: ec,
                onViewportLeave: eu
            } = (0, R.useViewportEnteredForGate)(!J && Y),
            ed = r.useRef(null),
            ef = r.useRef(null),
            em = r.useRef(null),
            ep = r.useRef(null),
            eh = r.useRef(!1),
            eg = r.useRef(0),
            [ex, ey] = r.useState(!1),
            ew = !et && !ee,
            eb = ew && en,
            ev = !ew || er && el && en,
            ek = !1 === U ? "none" : [U].flat().join(" "),
            eE = r.useCallback(() => {
                let e = ed.current;
                if (!e) return null;
                ef.current ? .revert(), O(e), ef.current = function(e, {
                    splitSelector: t,
                    split: n,
                    mask: r,
                    ignore: i
                }) {
                    let a = t ? Array.from(e.querySelectorAll(t)) : [],
                        l = a.length > 0 ? a : [e],
                        s = performance.now(),
                        u = Object.fromEntries(r.map(e => [e, "0.25em"])),
                        d = l.map(e => (function(e, t = {}) {
                            let n = e instanceof HTMLElement ? [e] : Array.from(new Set(e));
                            for (let e of n) v.get(e) ? .revert();
                            let r = n.map(e => {
                                var n;
                                let r, i, a, l;
                                return r = e.innerHTML, i = e.getAttribute("data-split"), {
                                    split: {
                                        lines: [],
                                        words: [],
                                        chars: [],
                                        masks: [],
                                        revert: () => {
                                            for (let t of (e.innerHTML = r, null === i ? e.removeAttribute("data-split") : e.setAttribute("data-split", i), ["lines", "words", "chars"])) e.style.removeProperty(`--${t}`);
                                            for (let t of f) e.style.removeProperty(t);
                                            v.delete(e)
                                        }
                                    },
                                    context: l = {
                                        target: e,
                                        wrapWords: (a = new Set(t.type ? ? ["lines"])).has("words") || a.has("chars"),
                                        wrapChars: a.has("chars"),
                                        mask: void 0 === (n = t.mask) ? new Map : new Map("string" == typeof n || Array.isArray(n) ? [n].flat().map(e => [e, ""]) : Object.entries(n).filter(e => !!e[1])),
                                        vertical: /^(vertical|sideways)/.test(getComputedStyle(e).writingMode),
                                        ignore: t.ignore,
                                        kinds: new Map,
                                        displays: new Map,
                                        decorations: new Map,
                                        inheritors: new Set,
                                        targetDecoration: null,
                                        created: new Map,
                                        originals: new Set(e.querySelectorAll("*")),
                                        firstLetters: [],
                                        firstLines: [],
                                        hyphens: []
                                    },
                                    items: function e(t, n) {
                                        let r = Array.from(t.childNodes),
                                            i = [],
                                            a = -1,
                                            l = e => {
                                                if (a >= 0) {
                                                    let r = function(e, t, n, r) {
                                                        var i, a, l, s, u;
                                                        let d, m, p, b, v, E, S, N, T = Array.from(e.childNodes).slice(t, n);
                                                        if (T.every(C)) return null;
                                                        let A = getComputedStyle(e),
                                                            P = "justify" === A.textAlign,
                                                            L = "0px" !== A.textIndent,
                                                            {
                                                                along: $,
                                                                across: R
                                                            } = (d = (i = A).writingMode.startsWith("vertical") || i.writingMode.startsWith("sideways"), m = "rtl" === i.direction, p = i.writingMode.endsWith("-rl"), b = (e, t) => t ? {
                                                                start: e.left,
                                                                end: e.right
                                                            } : {
                                                                start: e.top,
                                                                end: e.bottom
                                                            }, v = (e, t) => t ? {
                                                                start: -e.right,
                                                                end: -e.left
                                                            } : {
                                                                start: -e.bottom,
                                                                end: -e.top
                                                            }, d ? {
                                                                along: e => m ? v(e, !1) : b(e, !1),
                                                                across: e => p ? v(e, !0) : b(e, !0)
                                                            } : {
                                                                along: e => m ? v(e, !0) : b(e, !0),
                                                                across: e => b(e, !1)
                                                            }),
                                                            F = document.createRange(),
                                                            V = [],
                                                            _ = [],
                                                            W = [],
                                                            j = null,
                                                            B = [],
                                                            I = null,
                                                            H = 0 === t ? (a = e, l = A, E = getComputedStyle(a, "::first-letter"), S = (e, t) => E.getPropertyValue(e) !== t, [...g.filter(e => S(e, l.getPropertyValue(e))), ...Object.keys(y).filter(e => S(e, y[e]))].map(e => `${e}:${E.getPropertyValue(e)}`).join(";")) : "",
                                                            O = h.test(H),
                                                            z = "" !== H,
                                                            D = null,
                                                            G = (e, t, n) => {
                                                                let r = D && D.node === e ? D : null;
                                                                return F.setStart(e, r ? Math.max(t, r.from) - r.by : t), F.setEnd(e, r ? n - r.by : n), F.getClientRects()
                                                            },
                                                            q = (e, t) => {
                                                                if (0 !== e.width || 0 !== e.height) {
                                                                    if (I) {
                                                                        let n = R(e),
                                                                            r = R(I),
                                                                            i = o(n) >= r.end - 2,
                                                                            a = o(n) <= r.start + 2,
                                                                            l = n.start > r.start + 2 && $(e).start < $(I).start - 1;
                                                                        (i || a || l) && (V.push(t), W.push(R(e).start))
                                                                    } else j = R(e).start;
                                                                    I = e
                                                                }
                                                            },
                                                            K = e => {
                                                                let t = [];
                                                                for (let n of Array.from(e)) {
                                                                    let e = $(n),
                                                                        r = R(n);
                                                                    if (e.start === e.end) continue;
                                                                    let i = t.find(e => c(r, R(e.rect)));
                                                                    i ? (i.start = Math.min(i.start, e.start), i.end = Math.max(i.end, e.end)) : t.push({
                                                                        rect: n,
                                                                        start: e.start,
                                                                        end: e.end
                                                                    })
                                                                }
                                                                return t
                                                            },
                                                            U = (t, n) => {
                                                                let i = n.index,
                                                                    a = i + n.length,
                                                                    l = 0;
                                                                if (z) {
                                                                    z = !1;
                                                                    let e = k(t.data.slice(i, a)).next().value;
                                                                    if (e) {
                                                                        let r = G(t, i, t.data.length).length;
                                                                        G(t, i + e.length, t.data.length).length === r && (D = {
                                                                            node: t,
                                                                            from: i + e.length,
                                                                            by: e.length
                                                                        }), e.length < n.length && (O || D) && (l = e.length)
                                                                    }
                                                                }
                                                                let s = K(G(t, i + l, a));
                                                                if (0 === s.length) return;
                                                                if (l && !O) {
                                                                    let t = $(e.getBoundingClientRect()).start;
                                                                    s[0].start = ["paddingInlineStart", "borderInlineStartWidth", "textIndent"].reduce((e, t) => e + Number.parseFloat(A[t]), t)
                                                                }
                                                                if (n.first = s[0], n.last = s[s.length - 1], 1 === s.length) {
                                                                    if (n.rect = s[0].rect, n.size = s[0].end - s[0].start, r.wrapChars) {
                                                                        let e = [];
                                                                        for (let n of k(t.data.slice(i, a))) {
                                                                            if (n.index < l) {
                                                                                e.push(O ? NaN : s[0].start);
                                                                                continue
                                                                            }
                                                                            let r = G(t, i + n.index, i + n.index + n.length)[0];
                                                                            e.push(r ? $(r).start : NaN)
                                                                        }
                                                                        n.graphemeSizes = e.map((t, n) => {
                                                                            let r = n + 1 < e.length ? e[n + 1] : s[0].end;
                                                                            return Number.isNaN(t) || Number.isNaN(r) ? 0 : Math.max(0, r - t)
                                                                        })
                                                                    }
                                                                    q(s[0].rect, {
                                                                        text: t,
                                                                        offset: i,
                                                                        fragment: null
                                                                    });
                                                                    return
                                                                }
                                                                let o = Array.from(k(t.data.slice(i, a))),
                                                                    c = e => {
                                                                        let n = o[e - 1];
                                                                        return K(G(t, i, i + n.index + n.length)).length
                                                                    };
                                                                q(s[0].rect, {
                                                                    text: t,
                                                                    offset: i,
                                                                    fragment: null
                                                                });
                                                                let u = 0;
                                                                for (let e = 1; e < s.length; e += 1) {
                                                                    let n = u + 1,
                                                                        r = o.length;
                                                                    for (; n < r;) {
                                                                        let t = n + r >> 1;
                                                                        c(t) > e ? r = t : n = t + 1
                                                                    }
                                                                    let a = n - 1;
                                                                    if (a <= u || a >= o.length) break;
                                                                    V.push({
                                                                        text: t,
                                                                        offset: i + o[a].index,
                                                                        fragment: {
                                                                            start: i + o[u].index,
                                                                            extent: s[e - 1].end - s[e - 1].start,
                                                                            next: s[e].end - s[e].start
                                                                        }
                                                                    }), W.push(R(s[e].rect).start), u = a
                                                                }
                                                                I = s[s.length - 1].rect
                                                            },
                                                            X = e => {
                                                                if (e instanceof Text) {
                                                                    let t = {
                                                                        node: e,
                                                                        words: Array.from(function*(e) {
                                                                            if (!w) {
                                                                                for (let t of e.matchAll(/\S+/g)) yield {
                                                                                    index: t.index,
                                                                                    length: t[0].length
                                                                                };
                                                                                return
                                                                            }
                                                                            let t = null,
                                                                                n = !1;
                                                                            for (let r of w.segment(e)) {
                                                                                let e = !r.segment.trim(),
                                                                                    i = !0 === r.isWordLike;
                                                                                (e || t && i && n) && (t && (yield t), t = null), e || (t = t ? {
                                                                                    index: t.index,
                                                                                    length: t.length + r.segment.length
                                                                                } : {
                                                                                    index: r.index,
                                                                                    length: r.segment.length
                                                                                }), n = !e && i
                                                                            }
                                                                            t && (yield t)
                                                                        }(e.data)),
                                                                        decorated: !!r.wrapWords && !!e.parentElement && function(e, t) {
                                                                            let n = function e(t, n) {
                                                                                let r = n.decorations.get(t);
                                                                                if (void 0 !== r) return r;
                                                                                let i = null;
                                                                                return t instanceof HTMLElement && ("none" !== getComputedStyle(t).textDecorationLine ? i = t : t.parentElement && (i = e(t.parentElement, n))), n.decorations.set(t, i), i
                                                                            }(e, t);
                                                                            if (!n) return !1;
                                                                            for (let r = e; r instanceof HTMLElement && r !== n && r !== t.target && t.target.contains(r); r = r.parentElement) t.inheritors.add(r);
                                                                            if (!t.target.contains(n) && !t.targetDecoration) {
                                                                                let e = getComputedStyle(n);
                                                                                t.targetDecoration = f.map(t => `${t}:${e.getPropertyValue(t)}`)
                                                                            }
                                                                            return !0
                                                                        }(e.parentElement, r)
                                                                    };
                                                                    for (let n of t.words) U(e, n);
                                                                    t.words.forEach((e, n) => {
                                                                        let r = t.words[n + 1];
                                                                        !(!e.last || !r ? .first || Math.abs(R(e.last.rect).start - R(r.first.rect).start) > 2) && (e.index + e.length === r.index ? e.rect && e.first && (e.size = r.first.start - e.first.start) : e.gap = r.first.start - e.last.end)
                                                                    }), t.words.length > 0 && _.push({
                                                                        text: t
                                                                    });
                                                                    return
                                                                }
                                                                if (!(e instanceof Element) || "BR" === e.tagName) return;
                                                                let t = M(e, r);
                                                                if ("hidden" === t) return;
                                                                if ("float" === t) {
                                                                    if (e instanceof HTMLElement) {
                                                                        let t = Number.parseFloat(getComputedStyle(e).marginBlockStart) || 0;
                                                                        B.push({
                                                                            node: e,
                                                                            top: R(e.getBoundingClientRect()).start - t
                                                                        })
                                                                    }
                                                                    return
                                                                }
                                                                if ("inline" === t) {
                                                                    for (let t of Array.from(e.childNodes)) X(t);
                                                                    return
                                                                }
                                                                let n = e.getBoundingClientRect();
                                                                (0 !== n.width || 0 !== n.height) && (z = !1, q(n, {
                                                                    before: e
                                                                }), e instanceof HTMLElement && !(r.ignore && e.matches(r.ignore)) && _.push({
                                                                    atom: e
                                                                }))
                                                            };
                                                        for (let e of T) X(e);
                                                        if (0 === _.length) return null;
                                                        let J = [j ? ? NaN, ...W];
                                                        _.forEach((t, n) => {
                                                            let i = _[n + 1];
                                                            if (!("text" in t) || !i || !("text" in i)) return;
                                                            let a = t.text,
                                                                l = i.text,
                                                                s = a.words[a.words.length - 1] ? .last,
                                                                o = l.words[0] ? .first;
                                                            if (!s || !o || Math.abs(R(s.rect).start - R(o.rect).start) > 2) return;
                                                            let c = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                                                            c.currentNode = a.node;
                                                            for (let e = c.nextNode(); e && e !== l.node; e = c.nextNode())
                                                                if (e instanceof Text ? e.data.trim() : "inline" !== M(e, r)) return;
                                                            let u = o.start - s.end,
                                                                d = a.words[a.words.length - 1],
                                                                f = l.words[0],
                                                                m = f.index > 0 && !l.node.data.slice(0, f.index).trim(),
                                                                p = d.index + d.length < a.node.data.length && !a.node.data.slice(d.index + d.length).trim();
                                                            m ? (l.leadGap = u, a.trailGap = p ? 0 : void 0) : p && (a.trailGap = u)
                                                        });
                                                        let Q = _[0];
                                                        return {
                                                            container: e,
                                                            from: t,
                                                            firstLetter: H && Q && "text" in Q && Q.text.words.length > 0 ? {
                                                                declarations: [H, (() => {
                                                                    let n = _[0];
                                                                    if (0 !== t || !n || !("text" in n) || !n.text.words[0] ? .rect || !O) return "";
                                                                    let r = getComputedStyle(e, "::first-letter"),
                                                                        i = n.text.words[0],
                                                                        a = k(n.text.node.data.slice(i.index, i.index + i.length)).next().value;
                                                                    if (!a || a.length >= i.length) return "";
                                                                    let l = G(n.text.node, i.index + a.length, i.index + i.length)[0],
                                                                        s = e.getBoundingClientRect();
                                                                    if (!l) return "";
                                                                    let o = $(s).start + Number.parseFloat(A.paddingInlineStart) + Number.parseFloat(A.borderInlineStartWidth),
                                                                        u = R(s).start + Number.parseFloat(A.paddingBlockStart) + Number.parseFloat(A.borderBlockStartWidth),
                                                                        d = $(l).start - o,
                                                                        f = [];
                                                                    for (let e of _)
                                                                        if ("text" in e)
                                                                            for (let t of e.text.words) {
                                                                                if (!t.rect) continue;
                                                                                let e = t === i ? l : t.rect,
                                                                                    n = R(e),
                                                                                    r = f.find(e => c(n, e));
                                                                                r ? (r.start = Math.min(r.start, n.start), r.end = Math.max(r.end, n.end), r.along = Math.min(r.along, $(e).start - o)) : f.push({
                                                                                    start: n.start,
                                                                                    end: n.end,
                                                                                    along: $(e).start - o
                                                                                })
                                                                            }
                                                                    let m = 0;
                                                                    for (; m < f.length && f[m].along >= d - 1;) m += 1;
                                                                    let p = d - Number.parseFloat(r.marginLeft) - Number.parseFloat(r.marginRight),
                                                                        h = [`width:${p}px`];
                                                                    if (m > 0 && m < f.length) {
                                                                        let e = (f[m - 1].end + f[m].start) / 2;
                                                                        h.push(`height:${e-u-Number.parseFloat(r.marginTop)}px`)
                                                                    }
                                                                    return h.join(";")
                                                                })()].filter(Boolean).join(";")
                                                            } : null,
                                                            firstLine: 0 === t ? (s = e, u = A, N = getComputedStyle(s, "::first-line"), x.filter(e => N.getPropertyValue(e) !== u.getPropertyValue(e)).map(e => `${e}:${N.getPropertyValue(e)}`).join(";")) : "",
                                                            firstRowEnd: (() => {
                                                                let e = _.flatMap(e => "text" in e ? e.text.words : []),
                                                                    t = e.find(e => e.first) ? .first;
                                                                if (!t) return NaN;
                                                                let n = -1 / 0;
                                                                for (let r of e) r.first && 2 >= Math.abs(R(r.first.rect).start - R(t.rect).start) && (n = Math.max(n, r.first.end));
                                                                return n
                                                            })(),
                                                            anchor: e.childNodes[n] ? ? null,
                                                            starts: V,
                                                            pieces: _,
                                                            floats: B.map(e => {
                                                                var t;
                                                                let n;
                                                                return {
                                                                    node: e.node,
                                                                    line: (t = e.top, n = 0, J.forEach((e, r) => {
                                                                        Math.abs(e - t) <= Math.abs(J[n] - t) && (n = r)
                                                                    }), n)
                                                                }
                                                            }),
                                                            along: $,
                                                            justify: P,
                                                            indent: L,
                                                            sink: {
                                                                lines: [],
                                                                words: [],
                                                                chars: [],
                                                                masks: []
                                                            }
                                                        }
                                                    }(t, a, e, n);
                                                    r && i.push({
                                                        run: r
                                                    }), a = -1
                                                }
                                            };
                                        return r.forEach((t, r) => {
                                            let s, o, c = t instanceof Element ? t : null,
                                                u = c && "BR" !== c.tagName ? M(c, n) : "inline";
                                            if (c && "inline" !== u && "float" !== u && (void 0 === (s = n.displays.get(c)) && (s = getComputedStyle(c).display, n.displays.set(c, s)), !(o = s).startsWith("inline") && "contents" !== o && "ruby" !== o)) {
                                                l(r), "block" === u && c instanceof HTMLElement && i.push({
                                                    block: c,
                                                    items: e(c, n)
                                                });
                                                return
                                            }
                                            a < 0 && (a = r)
                                        }), l(r.length), i
                                    }(e, l)
                                }
                            });
                            for (let e of r) ! function e(t, n, r) {
                                for (let e of [...t].reverse()) "run" in e && function(e, t) {
                                    let n, {
                                            container: r,
                                            sink: i
                                        } = e,
                                        a = [];
                                    if (t.wrapWords) {
                                        let r = new Map;
                                        for (let n of e.pieces)
                                            if ("text" in n) {
                                                let l = new Map;
                                                for (let t of e.starts) "text" in t && t.text === n.text.node && l.set(t.offset, t);
                                                for (let [e, s] of function(e, t, n, r, i) {
                                                        let a = document.createDocumentFragment(),
                                                            l = new Map,
                                                            s = e.decorated ? `;${m}` : "",
                                                            o = e.node.data,
                                                            c = 0,
                                                            u = (e, c, u, d) => {
                                                                let f = e === d.index && c === d.index + d.length,
                                                                    m = t.get(e),
                                                                    p = f ? d.size : u && "text" in u && u.fragment ? u.fragment.extent : m && "text" in m && m.fragment ? m.fragment.next : void 0,
                                                                    h = S("span", i, `display:inline-block;position:relative${N(p)}${s}`);
                                                                h.textContent = o.slice(e, c), a.append(h), n.words.push(h), i.wrapChars && function(e, t, n, r, i) {
                                                                    let a = e.textContent ? ? "",
                                                                        l = 0;
                                                                    for (let s of (e.textContent = "", k(a))) {
                                                                        let o = n ? .[l],
                                                                            c = S("span", i, `display:inline-block;position:relative${N(o)}${t}`);
                                                                        l += 1, c.textContent = a.slice(s.index, s.index + s.length), e.append(c), r.chars.push(c), i.mask.has("chars") && P(c, "span", `display:inline-block;position:relative;${A("chars",i)}${t}`, r, i)
                                                                    }
                                                                }(h, s, f ? d.graphemeSizes : void 0, n, i), u && "text" in u && u.fragment && r.push({
                                                                    fragment: u.fragment,
                                                                    unit: h,
                                                                    line: -1
                                                                });
                                                                let g = i.mask.has("words") ? P(h, "span", `display:inline-block;position:relative;${A("words",i)}${s}`, n, i) : h,
                                                                    x = t.get(e);
                                                                x && l.set(x, g)
                                                            },
                                                            d = null,
                                                            f = (e, t) => {
                                                                let n = S("span", i, `display:inline-block;inline-size:${t}px`);
                                                                n.textContent = e, a.append(n)
                                                            };
                                                        for (let n of e.words) {
                                                            if (n.index > c) {
                                                                let t = o.slice(c, n.index),
                                                                    r = d ? d.gap : e.leadGap;
                                                                void 0 === r || t.trim() ? a.append(t) : f(t, r)
                                                            }
                                                            let r = n.index + n.length,
                                                                i = n.index;
                                                            for (let e = n.index + 1; e < r; e += 1) {
                                                                let r = t.get(e);
                                                                r && "text" in r && (u(i, e, r, n), i = e)
                                                            }
                                                            u(i, r, null, n), c = r, d = n
                                                        }
                                                        if (c < o.length) {
                                                            let t = o.slice(c);
                                                            void 0 === e.trailGap || t.trim() ? a.append(t) : f(t, e.trailGap)
                                                        }
                                                        return e.node.replaceWith(a), l
                                                    }(n.text, l, i, a, t)) r.set(e, s)
                                            } else i.words.push(n.atom), t.wrapChars && i.chars.push(n.atom);
                                        n = e.starts.map(e => {
                                            let t = r.get(e);
                                            return t ? {
                                                node: t.parentNode,
                                                offset: E(t)
                                            } : L(e)
                                        })
                                    } else n = e.starts.map(L), e.starts.forEach((e, t) => {
                                        "text" in e && e.fragment && a.push({
                                            fragment: e.fragment,
                                            unit: null,
                                            line: t
                                        })
                                    });
                                    let l = [{
                                            node: r,
                                            offset: e.from
                                        }, ...n.map(e => (function(e, t) {
                                            let {
                                                node: n,
                                                offset: r
                                            } = e;
                                            for (; n !== t;) {
                                                let e = n.parentNode;
                                                if (!e) break;
                                                if (n instanceof Text) {
                                                    if (r > 0) break
                                                } else if (!Array.from(n.childNodes).slice(0, r).every(C)) break;
                                                r = E(n), n = e
                                            }
                                            return {
                                                node: n,
                                                offset: r
                                            }
                                        })(e, r))],
                                        s = [],
                                        o = document.createRange(),
                                        c = () => e.anchor ? E(e.anchor) : r.childNodes.length;
                                    for (let e = l.length - 1; e >= 0; e -= 1) o.setStart(l[e].node, l[e].offset), o.setEnd(r, c()), s[e] = o.extractContents();
                                    let u = t.wrapWords ? ";text-wrap:nowrap" : "";
                                    for (let {
                                            node: n,
                                            line: a
                                        } of (s.forEach((n, a) => {
                                            let l = e.justify && a < s.length - 1 ? ";text-align-last:justify" : "",
                                                o = e.indent && a > 0 ? ";text-indent:0" : "",
                                                c = e.firstLine && 0 === a ? `;${e.firstLine}` : "",
                                                d = S("div", t, `display:block;position:relative${u}${l}${o}${c}`);
                                            d.setAttribute("translate", "no"), d.append(n);
                                            for (let e of Array.from(d.querySelectorAll("*")).reverse()) !(t.originals.has(e) || t.created.has(e)) && (0 !== e.children.length || e.textContent ? .trim() || e.remove());
                                            r.insertBefore(d, e.anchor), i.lines.push(d), t.mask.has("lines") && P(d, "div", `display:block;position:relative;${A("lines",t)}`, i, t)
                                        }), e.floats)) {
                                        let e = i.lines[Math.min(a, i.lines.length - 1)];
                                        for (; e.parentNode && e.parentNode !== r;) e = e.parentNode;
                                        r.insertBefore(n, e)
                                    }
                                    for (let n of a) t.hyphens.push({
                                        pending: n,
                                        run: e
                                    });
                                    e.firstLetter && i.lines[0] && t.firstLetters.push({
                                        line: i.lines[0],
                                        firstLetter: e.firstLetter
                                    }), e.firstLine && i.lines[0] && Number.isFinite(e.firstRowEnd) && t.firstLines.push({
                                        line: i.lines[0],
                                        declarations: e.firstLine,
                                        end: e.firstRowEnd,
                                        along: e.along
                                    })
                                }(e.run, r);
                                for (let i of t) "run" in i ? (n.lines.push(...i.run.sink.lines), n.words.push(...i.run.sink.words), n.chars.push(...i.run.sink.chars), n.masks.push(...i.run.sink.masks)) : e(i.items, n, r)
                            }(e.items, e.split, e.context);
                            for (let e of r)
                                for (let {
                                        pending: t,
                                        run: n
                                    } of e.context.hyphens) ! function(e, t, n) {
                                    let {
                                        along: r
                                    } = t;
                                    if (e.unit) {
                                        let t = document.createRange(),
                                            i = 1 / 0,
                                            a = -1 / 0;
                                        for (let n of (t.selectNodeContents(e.unit), Array.from(t.getClientRects()))) {
                                            let e = r(n);
                                            i = Math.min(i, e.start), a = Math.max(a, e.end)
                                        }
                                        let l = e.fragment.extent - (a - i);
                                        l > 1 && e.unit.append(T(l, n));
                                        return
                                    }
                                    let i = t.sink.lines[e.line],
                                        a = i ? document.createTreeWalker(i, NodeFilter.SHOW_TEXT) : null,
                                        l = null;
                                    for (; a ? .nextNode();) a.currentNode.data.trim() && (l = a.currentNode);
                                    if (!l) return;
                                    let s = document.createRange();
                                    s.setStart(l, Math.max(0, l.data.search(/\S+\s*$/))), s.setEnd(l, l.data.length);
                                    let o = 1 / 0,
                                        c = -1 / 0;
                                    for (let e of Array.from(s.getClientRects())) {
                                        let t = r(e);
                                        o = Math.min(o, t.start), c = Math.max(c, t.end)
                                    }
                                    let u = e.fragment.extent - (c - o);
                                    u > 1 && l.after(T(u, n))
                                }(t, n, e.context);
                            for (let e of r) {
                                for (let {
                                        line: t,
                                        firstLetter: n
                                    } of e.context.firstLetters) ! function(e, t, n, r) {
                                    let i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
                                        a = i.nextNode();
                                    for (; a instanceof Text && !a.data.trim();) a = i.nextNode();
                                    if (!(a instanceof Text)) return;
                                    let l = a.data.search(/\S/),
                                        s = a.parentElement,
                                        o = h.test(t.declarations),
                                        c = s && r.created.has(s) && n.chars.includes(s) ? s : null;
                                    if (c && !o) return r.created.set(c, `${r.created.get(c)};${t.declarations}`);
                                    let u = k(a.data.slice(l)).next().value;
                                    if (!u) return;
                                    let d = document.createRange(),
                                        f = document.createElement("span");
                                    if (d.setStart(a, l), d.setEnd(a, l + u.length), d.surroundContents(f), f.style.cssText = `display:inline-block;${t.declarations}`, !o) return;
                                    let m = f;
                                    for (; m.parentElement && m.parentElement !== e && r.created.has(m.parentElement);) m = m.parentElement;
                                    let p = m === f ? f.nextSibling : m,
                                        g = document.createElement("span"),
                                        x = e;
                                    for (; x.parentElement && r.created.has(x.parentElement);) x = x.parentElement;
                                    if (g.style.display = "inline-block", x.parentNode ? .insertBefore(f, x), e.insertBefore(g, p), c) {
                                        let e = c.parentElement,
                                            t = e && r.created.has(e) && n.masks.includes(e) ? e : c;
                                        t.remove(), r.created.delete(c), n.chars.splice(n.chars.indexOf(c), 1), t !== c && (r.created.delete(t), n.masks.splice(n.masks.indexOf(t), 1))
                                    }
                                }(t, n, e.split, e.context);
                                ! function(e, t, n) {
                                    let r = ["lines", "words", "chars"],
                                        i = new Map,
                                        a = (e, t) => {
                                            let n = i.get(e);
                                            n ? n.push(t) : i.set(e, [t])
                                        };
                                    for (let i of r) n.target.style.setProperty(`--${i}`, String(e[i].length)), e[i].forEach((e, n) => {
                                        e.setAttribute(`data-${p[i]}`, String(n)), a(e, `--${p[i]}:${n}`), t.classes ? .[i] && e.classList.add(t.classes[i])
                                    });
                                    for (let [r, a] of (e.masks.forEach((e, n) => {
                                            e.setAttribute("data-mask", String(n)), t.classes ? .mask && e.classList.add(t.classes.mask)
                                        }), n.created)) r.style.cssText = [a, ...i.get(r) ? ? []].join(";");
                                    for (let [e, t] of i)
                                        if (!n.created.has(e))
                                            for (let n of t) {
                                                let [t, r] = n.split(":");
                                                e.style.setProperty(t, r)
                                            }
                                    for (let e of n.inheritors)
                                        for (let t of f) e.style.setProperty(t, "inherit");
                                    if (n.targetDecoration)
                                        for (let e of n.targetDecoration) {
                                            let [t, r] = e.split(/:(.*)/s);
                                            n.target.style.setProperty(t, r)
                                        }
                                    n.target.setAttribute("data-split", r.filter(t => e[t].length > 0).join(" "))
                                }(e.split, t, e.context)
                            }
                            for (let e of r) {
                                for (let t of e.context.firstLines) ! function(e) {
                                    let t = () => {
                                        let t = document.createRange(),
                                            n = -1 / 0;
                                        for (let r of (t.selectNodeContents(e.line), Array.from(t.getClientRects()))) n = Math.max(n, e.along(r).end);
                                        return .5 >= Math.abs(n - e.end)
                                    };
                                    if (!t()) {
                                        for (let n of ["text-transform", "letter-spacing", "word-spacing", "font-weight"])
                                            if (e.line.style.getPropertyValue(n) && (e.line.style.removeProperty(n), t())) return;
                                        for (let t of e.declarations.split(";")) e.line.style.removeProperty(t.split(":")[0])
                                    }
                                }(t);
                                v.set(e.context.target, e.split)
                            }
                            return e instanceof HTMLElement ? r[0].split : r.map(e => e.split)
                        })(e, {
                            type: [n],
                            mask: u,
                            ignore: i
                        })),
                        b = d.flatMap(e => e.lines),
                        $ = new Map(d.flatMap(e => e.masks.map(e => [e, e.style.clipPath])));
                    return performance.measure("animated-text:split", {
                        start: s,
                        detail: {
                            lines: b.length
                        }
                    }), {
                        units: d.flatMap(e => e[n]),
                        lines: b,
                        width: e.offsetWidth,
                        setMasksClipped: e => {
                            for (let t of d)
                                for (let n of t.masks) n.style.clipPath = e ? $.get(n) ? ? "inset(0)" : "none"
                        },
                        revert: () => {
                            for (let e of d) e.revert()
                        }
                    }
                }(e, {
                    splitSelector: G,
                    split: q,
                    mask: "none" === ek ? [] : ek.split(" ").filter(H),
                    ignore: K
                });
                var t = ef.current;
                if ("lines" !== q)
                    for (let n of (e.setAttribute("role", "text"), e.setAttribute("aria-label", (e.textContent ? ? "").replace(/\s+/g, " ").trim()), t.units)) n.setAttribute("aria-hidden", "true");
                return ef.current
            }, [G, q, ek, K]),
            eC = r.useCallback(() => {
                ef.current ? .revert(), ef.current = null, ed.current && O(ed.current)
            }, []),
            eM = r.useCallback((e, t, n = 0) => {
                eh.current = !1, e.setMasksClipped(!0);
                let r = e.units.map((e, n) => e.animate(_, {
                    duration: 1e3 * b,
                    delay: 1e3 * t + n * d * 1e3,
                    easing: "ease-out",
                    fill: "backwards"
                }));
                for (let e of r) e.currentTime = n;
                em.current = r, Promise.all(r.map(e => e.finished)).then(() => {
                    em.current === r && (eh.current = !0, e.setMasksClipped(!1))
                }).catch(() => {})
            }, [b, d]),
            eS = r.useCallback(() => {
                for (let e of em.current ? ? []) e.cancel();
                em.current = null, eh.current = !1
            }, []);
        r.useEffect(() => {
            let e = ed.current;
            if (J || !e || !ev || (ey(!0), !eb)) return;
            let t = eE();
            if (t) return "css" === X ? e.setAttribute("data-revealed", "") : t.units.length > 0 ? eM(t, z) : t.setMasksClipped(!1), () => {
                eS(), e.removeAttribute("data-revealed"), eC()
            }
        }, [z, eb, eE, ev, J, eM, X, eC, eS]), r.useEffect(() => {
            if (ei) return;
            let e = ef.current;
            if (eS(), et || !e || 0 === e.units.length) return void ea ? .();
            e.setMasksClipped(!0);
            let t = e.units.map((e, t) => e.animate(W, {
                duration: .35 * b * 1e3,
                delay: t * d * 500,
                easing: "ease-in",
                fill: "forwards"
            }));
            return Promise.all(t.map(e => e.finished)).then(() => {
                ea ? .()
            }).catch(() => {}), () => {
                for (let e of t) e.cancel()
            }
        }, [b, ei, et, ea, d, eS]);
        let eN = function(e) {
            let t, {
                    delay: n,
                    flushOnUnmount: i,
                    leading: a,
                    maxWait: l
                } = {
                    delay: 200,
                    flushOnUnmount: !1,
                    leading: !1,
                    maxWait: void 0
                },
                s = (t = (0, r.useRef)(e), (0, r.useEffect)(() => {
                    t.current = e
                }), (0, r.useMemo)(() => (...e) => t.current ? .(...e), [])),
                o = (0, r.useRef)(0),
                c = (0, r.useRef)(0),
                u = (0, r.useRef)(null),
                d = (0, r.useMemo)(() => {
                    let e = Object.assign((...t) => {
                        window.clearTimeout(o.current), u.current = t;
                        let r = e._isFirstCall;

                        function i() {
                            window.clearTimeout(o.current), window.clearTimeout(c.current), o.current = 0, c.current = 0, e._isFirstCall = !0, e._hasPendingCallback = !1
                        }

                        function d() {
                            void 0 !== l && 0 === c.current && (c.current = window.setTimeout(() => {
                                if (0 !== o.current) {
                                    let e = u.current;
                                    i(), s(...e)
                                }
                            }, l))
                        }
                        if (e._isFirstCall = !1, a && r) {
                            s(...t), e.flush = () => {
                                0 !== o.current && (i(), s(...t))
                            }, e.cancel = () => {
                                i()
                            }, o.current = window.setTimeout(() => {
                                i()
                            }, n), d();
                            return
                        }
                        if (a && !r) {
                            e._hasPendingCallback = !0, e.flush = () => {
                                0 !== o.current && (i(), s(...t))
                            }, e.cancel = () => {
                                i()
                            }, o.current = window.setTimeout(() => {
                                i()
                            }, n), d();
                            return
                        }
                        e._hasPendingCallback = !0;
                        let f = () => {
                            0 !== o.current && (i(), s(...t))
                        };
                        e.flush = f, e.cancel = () => {
                            i()
                        }, o.current = window.setTimeout(f, n), d()
                    }, {
                        flush: () => {},
                        cancel: () => {},
                        isPending: () => e._hasPendingCallback,
                        _isFirstCall: !0,
                        _hasPendingCallback: !1
                    });
                    return e
                }, [s, n, a, l]);
            return (0, r.useEffect)(() => () => {
                i ? d.flush() : d.cancel()
            }, [d, i]), d
        }(() => {
            let e = ed.current,
                t = ef.current;
            if (J || !e || !t || e.offsetWidth === t.width) return;
            let n = em.current && !eh.current ? Number(em.current[0] ? .currentTime ? ? 0) : null;
            eS();
            let r = eE();
            if (r) {
                if (null === n || "css" === X) return void r.setMasksClipped(!1);
                eM(r, z, n)
            }
        });
        r.useEffect(() => {
            let e = ed.current;
            if (J || !e) return;
            let t = new ResizeObserver(eN);
            return t.observe(e), document.fonts.addEventListener("loadingdone", eN), () => {
                t.disconnect(), document.fonts.removeEventListener("loadingdone", eN), eN.cancel()
            }
        }, [J, eN]);
        let eT = r.useCallback((e, t = j) => {
                cancelAnimationFrame(eg.current);
                let n = ed.current;
                if (n) {
                    if ("function" != typeof n.checkVisibility || n.checkVisibility()) return void e();
                    t > 0 && (eg.current = requestAnimationFrame(() => eT(e, t - 1)))
                }
            }, []),
            eA = r.useCallback(() => {
                let e = ed.current,
                    t = ef.current;
                return e && t && e.offsetWidth === t.width ? t : eb ? eE() : null
            }, [eb, eE]);
        r.useImperativeHandle(Q, () => ({
            prepare: () => {
                eT(() => {
                    eA()
                })
            },
            show: () => {
                let e = ed.current;
                e && (ep.current ? .cancel(), ep.current = null, e.style.opacity = "1", eT(() => {
                    let e = eA();
                    e && 0 !== e.units.length && (eS(), eM(e, 0))
                }))
            },
            hide: () => {
                let e = ed.current;
                e && (cancelAnimationFrame(eg.current), ep.current ? .cancel(), ep.current = e.animate([{
                    opacity: 0
                }], {
                    duration: 180 * !et,
                    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                    fill: "forwards"
                }))
            }
        }), [eA, eM, et, eS, eT]), r.useEffect(() => () => {
            cancelAnimationFrame(eg.current), eS(), ep.current ? .cancel(), ep.current = null, eC()
        }, [eC, eS]);
        let eP = {
            onViewportEnter: eo ? void 0 : ec,
            onViewportLeave: eo ? void 0 : eu,
            onFocus: () => ef.current ? .setMasksClipped(!1),
            viewport: es,
            style: J ? I : ee || ex ? void 0 : B,
            exit: ew ? void 0 : Z,
            className: (0, F.cx)("div" === D ? "block w-full" : "inline-block", u)
        };
        return "div" === D ? (0, t.jsx)(l.div, {
            ref: ed,
            ...eP,
            children: e
        }) : (0, t.jsx)(a.span, {
            ref: ed,
            ...eP,
            children: e
        })
    }], 407194)
}, 812152, e => {
    "use strict";
    var t = e.i(843476),
        n = e.i(500932),
        r = e.i(271645);
    let i = r.createContext(null);
    e.s(["DraftModeProvider", 0, function(e) {
        let r, a = (0, n.c)(3),
            {
                isDraft: l,
                children: s
            } = e;
        return a[0] !== s || a[1] !== l ? (r = (0, t.jsx)(i.Provider, {
            value: l,
            children: s
        }), a[0] = s, a[1] = l, a[2] = r) : r = a[2], r
    }, "useDraftMode", 0, function() {
        let e = r.useContext(i);
        if (null === e) throw Error("useDraftMode must be used within a DraftModeProvider");
        return e
    }])
}, 88771, e => {
    "use strict";
    var t = e.i(271645);
    let n = "(prefers-reduced-motion: reduce)";

    function r(e) {
        let t = window.matchMedia(n);
        return t.addEventListener("change", e), () => {
            t.removeEventListener("change", e)
        }
    }

    function i() {
        return window.matchMedia(n).matches
    }

    function a() {
        return !1
    }
    e.s(["usePrefersReducedMotion", 0, function() {
        return t.useSyncExternalStore(r, i, a)
    }])
}, 615683, e => {
    "use strict";
    var t = e.i(271645);
    let n = {
        margin: "0px 0px -10% 0px",
        once: !0
    };
    e.s(["useViewportEnteredForGate", 0, function(e) {
        let r = t.useMemo(() => !1 !== e && (void 0 === e ? n : e), [e]),
            i = !1 === e,
            [a, l] = t.useState(!1),
            s = t.useCallback(() => l(!0), []),
            o = t.useCallback(() => {
                "object" == typeof r && null !== r && !1 === r.once && l(!1)
            }, [r]);
        return {
            enteredForGate: i || a,
            vpResolved: r,
            viewportDisabled: i,
            onViewportEnter: s,
            onViewportLeave: o
        }
    }], 615683)
}, 33323, e => {
    "use strict";
    var t = e.i(843476),
        n = e.i(500932),
        r = e.i(271645);
    let i = r.createContext(null);
    e.s(["SiteIntroProvider", 0, function(e) {
        let a, l, s, o = (0, n.c)(6),
            {
                children: c
            } = e,
            [u, d] = r.useState(!1);
        o[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
            d(!0)
        }, o[0] = a) : a = o[0];
        let f = a;
        o[1] !== u ? (l = {
            isSiteIntroComplete: u,
            markSiteIntroComplete: f
        }, o[1] = u, o[2] = l) : l = o[2];
        let m = l;
        return o[3] !== c || o[4] !== m ? (s = (0, t.jsx)(i.Provider, {
            value: m,
            children: c
        }), o[3] = c, o[4] = m, o[5] = s) : s = o[5], s
    }, "useSiteIntro", 0, function() {
        let e = r.useContext(i);
        if (!e) throw Error("useSiteIntro must be used within a SiteIntroProvider");
        return e
    }])
}, 205980, e => {
    "use strict";
    var t = e.i(271645),
        n = e.i(33323),
        r = e.i(351105);
    e.s(["useContentReady", 0, function() {
        let e = (0, r.useViewTransition)(),
            {
                isSiteIntroComplete: i
            } = (0, n.useSiteIntro)(),
            a = e.isViewTransitionSettled && i,
            l = t.useRef(a);
        return a && (l.current = !0), {
            isComplete: l.current
        }
    }])
}, 351105, e => {
    "use strict";
    var t = e.i(843476),
        n = e.i(500932),
        r = e.i(271645);
    let i = r.createContext(null);
    async function a(e) {
        let t = () => e.finished.catch(() => void 0);
        try {
            await e.ready
        } catch {
            return t()
        }
        let n = document.getAnimations().find(e => e.effect instanceof KeyframeEffect && "::view-transition-new(root)" === e.effect.pseudoElement);
        if (!n) return t();
        let r = n.effect ? .getComputedTiming().duration,
            i = n.currentTime;
        if ("number" != typeof r || "number" != typeof i) return t();
        let a = Math.max(0, .6 * r - i);
        await new Promise(e => setTimeout(e, a))
    }

    function l() {
        document.documentElement.removeAttribute("data-vt-loading")
    }

    function s(e) {
        return !e || e
    }

    function o(e) {
        return !e || e
    }

    function c(e) {
        return !e || e
    }

    function u(e) {
        return !e && e
    }

    function d(e) {
        return !e && e
    }
    e.s(["ViewTransitionProvider", 0, function(e) {
        let f, m, p, h, g, x, y, w, b, v, k, E = (0, n.c)(16),
            {
                children: C
            } = e,
            [M, S] = r.useState(!0),
            [N, T] = r.useState(!0);
        E[0] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
            S(d), T(u)
        }, E[0] = f) : f = E[0];
        let A = f;
        E[1] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
            T(c)
        }, E[1] = m) : m = E[1];
        let P = m;
        E[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
            S(o), T(s)
        }, E[2] = p) : p = E[2];
        let L = p;
        E[3] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
            let e = e => {
                e.persisted && L()
            };
            return window.addEventListener("pageshow", e), () => {
                window.removeEventListener("pageshow", e)
            }
        }, g = [L], E[3] = h, E[4] = g) : (h = E[3], g = E[4]), r.useEffect(h, g), E[5] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
            if (!("startViewTransition" in document)) return;
            let e = document.startViewTransition.bind(document);
            return document.startViewTransition = (...t) => {
                A();
                let n = e(...t);
                return a(n).then(() => {
                    P()
                }), n.finished.finally(() => {
                    L()
                }), n
            }, () => {
                document.startViewTransition = e
            }
        }, y = [L, A, P], E[5] = x, E[6] = y) : (x = E[5], y = E[6]), r.useEffect(x, y), E[7] !== M ? (w = () => {
            if (!("startViewTransition" in document)) return;
            let e = !M;
            return document.documentElement.toggleAttribute("data-vt-loading", e), l
        }, b = [M], E[7] = M, E[8] = w, E[9] = b) : (w = E[8], b = E[9]), r.useLayoutEffect(w, b), E[10] !== M || E[11] !== N ? (v = {
            isViewTransitionComplete: M,
            isViewTransitionSettled: N
        }, E[10] = M, E[11] = N, E[12] = v) : v = E[12];
        let $ = v;
        return E[13] !== C || E[14] !== $ ? (k = (0, t.jsx)(i.Provider, {
            value: $,
            children: C
        }), E[13] = C, E[14] = $, E[15] = k) : k = E[15], k
    }, "useViewTransition", 0, function() {
        let e = r.useContext(i);
        if (!e) throw Error("useViewTransition must be used within a ViewTransitionProvider");
        return e
    }])
}]);