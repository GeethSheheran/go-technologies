(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/audience-avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudienceAvatar",
    ()=>AudienceAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AudienceAvatar({ variant }) {
    _s();
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudienceAvatar.useEffect": ()=>{
            const element = host.current;
            if (!element) return;
            let disposed = false;
            let cleanup;
            const observer = new IntersectionObserver({
                "AudienceAvatar.useEffect": ([entry])=>{
                    if (!entry.isIntersecting) return;
                    observer.disconnect();
                    __turbopack_context__.A("[project]/src/components/audience-avatar-runtime.ts [app-client] (ecmascript, async loader)").then({
                        "AudienceAvatar.useEffect": ({ mountAudienceAvatar })=>{
                            if (!disposed) cleanup = mountAudienceAvatar(element, variant);
                        }
                    }["AudienceAvatar.useEffect"]).catch({
                        "AudienceAvatar.useEffect": ()=>{
                            if (!disposed) element.dataset.render = "unavailable";
                        }
                    }["AudienceAvatar.useEffect"]);
                }
            }["AudienceAvatar.useEffect"], {
                rootMargin: "200px"
            });
            observer.observe(element);
            return ({
                "AudienceAvatar.useEffect": ()=>{
                    disposed = true;
                    observer.disconnect();
                    cleanup?.();
                }
            })["AudienceAvatar.useEffect"];
        }
    }["AudienceAvatar.useEffect"], [
        variant
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: host,
        className: "audience-avatar",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/audience-avatar.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
_s(AudienceAvatar, "eevCoz5tRJ37P7IVnp9ZnNpPBs4=");
_c = AudienceAvatar;
var _c;
__turbopack_context__.k.register(_c, "AudienceAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/audience-router.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudienceRouter",
    ()=>AudienceRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$audience$2d$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/audience-avatar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AudienceRouter() {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "audience-router container",
        "aria-labelledby": "router-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "router-heading",
                "data-reveal": true,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].router.title
            }, void 0, false, {
                fileName: "[project]/src/components/audience-router.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "audience-links",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].router.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "audience-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$audience$2d$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudienceAvatar"], {
                                variant: index
                            }, void 0, false, {
                                fileName: "[project]/src/components/audience-router.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                className: "audience-link",
                                tabIndex: 0,
                                href: item.href,
                                whileHover: reduced ? undefined : {
                                    y: -6
                                },
                                whileTap: reduced ? undefined : {
                                    scale: 0.99
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/audience-router.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/audience-router.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "audience-action",
                                        children: [
                                            item.action,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                                diagonal: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/audience-router.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/audience-router.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/audience-router.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.title, true, {
                        fileName: "[project]/src/components/audience-router.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/audience-router.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/audience-router.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(AudienceRouter, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = AudienceRouter;
var _c;
__turbopack_context__.k.register(_c, "AudienceRouter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/brand-splash.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "artwork": "brand-splash-module__Fquwkq__artwork",
  "copyright": "brand-splash-module__Fquwkq__copyright",
  "fail-open": "brand-splash-module__Fquwkq__fail-open",
  "splash": "brand-splash-module__Fquwkq__splash",
});
}),
"[project]/src/components/brand-splash.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandSplash",
    ()=>BrandSplash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$splash$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/brand-splash.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BrandSplash({ children }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "BrandSplash.useLayoutEffect": ()=>{
            const overlay = root.current;
            const site = document.getElementById("site-content");
            if (!overlay || !site) return;
            const previousOverflow = document.body.style.overflow;
            const previousInert = site.inert;
            const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
            let complete = false;
            let timeline;
            const release = {
                "BrandSplash.useLayoutEffect.release": ()=>{
                    document.body.style.overflow = previousOverflow;
                    site.inert = previousInert;
                }
            }["BrandSplash.useLayoutEffect.release"];
            const finish = {
                "BrandSplash.useLayoutEffect.finish": ()=>{
                    if (complete) return;
                    complete = true;
                    timeline?.kill();
                    overlay.hidden = true;
                    release();
                    window.dispatchEvent(new Event("gotech:intro-complete"));
                }
            }["BrandSplash.useLayoutEffect.finish"];
            const onKey = {
                "BrandSplash.useLayoutEffect.onKey": (event)=>{
                    // Keyboard visitors can continue straight into the page without a delay.
                    if (event.key === "Escape" || event.key === "Tab") finish();
                }
            }["BrandSplash.useLayoutEffect.onKey"];
            const onPreference = {
                "BrandSplash.useLayoutEffect.onPreference": ()=>{
                    if (preference.matches) finish();
                }
            }["BrandSplash.useLayoutEffect.onPreference"];
            overlay.hidden = false;
            site.inert = true;
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKey);
            preference.addEventListener("change", onPreference);
            // Never let a decorative intro hold the site behind an overlay.
            const deadline = window.setTimeout(finish, 4500);
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "BrandSplash.useLayoutEffect.context": ()=>{
                    const strokes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("[data-go-stroke]");
                    timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        onComplete: finish
                    });
                    if (preference.matches || window.location.hash) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set("[data-go-complete]", {
                            opacity: 1
                        });
                        timeline.to(overlay, {
                            opacity: 0,
                            duration: 0.15
                        });
                        return;
                    }
                    strokes.forEach({
                        "BrandSplash.useLayoutEffect.context": (stroke)=>{
                            const length = stroke.getTotalLength();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(stroke, {
                                strokeDasharray: length,
                                strokeDashoffset: length
                            });
                        }
                    }["BrandSplash.useLayoutEffect.context"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set("[data-go-symbol]", {
                        x: 835,
                        scale: 1.2,
                        svgOrigin: "208 91"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set("[data-logo-letter]", {
                        y: 65,
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set("[data-logo-tm]", {
                        opacity: 0
                    });
                    timeline.to(strokes[0], {
                        strokeDashoffset: 0,
                        duration: 0.85,
                        ease: "power2.inOut"
                    }, 0.08).to(strokes[2], {
                        strokeDashoffset: 0,
                        duration: 0.7,
                        ease: "power2.inOut"
                    }, 0.2).to(strokes[1], {
                        strokeDashoffset: 0,
                        duration: 0.38,
                        ease: "power3.out"
                    }, 0.62).to("[data-go-complete]", {
                        opacity: 1,
                        duration: 0.12
                    }, 0.94).to("[data-go-symbol]", {
                        x: 0,
                        scale: 1,
                        duration: 0.85,
                        ease: "power3.inOut"
                    }, 1.12).to("[data-logo-letter]", {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.034,
                        ease: "power3.out"
                    }, 1.42).to("[data-logo-tm]", {
                        opacity: 1,
                        duration: 0.25
                    }, 2.08).to(overlay, {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut"
                    }, 2.65);
                }
            }["BrandSplash.useLayoutEffect.context"], overlay);
            return ({
                "BrandSplash.useLayoutEffect": ()=>{
                    window.clearTimeout(deadline);
                    window.removeEventListener("keydown", onKey);
                    preference.removeEventListener("change", onPreference);
                    context.revert();
                    release();
                }
            })["BrandSplash.useLayoutEffect"];
        }
    }["BrandSplash.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: root,
                className: `brand-splash ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$splash$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splash}`,
                "aria-hidden": "true",
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$splash$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artwork,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand-splash.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$splash$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyright,
                        children: "© 2026 Go Technologies. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand-splash.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/brand-splash.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: ".brand-splash { display: none !important; }"
                }, void 0, false, {
                    fileName: "[project]/src/components/brand-splash.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/brand-splash.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/brand-splash.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(BrandSplash, "YoCL37H/5OPo/CtGoUCx0iIgIUI=");
_c = BrandSplash;
var _c;
__turbopack_context__.k.register(_c, "BrandSplash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/brand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>Action,
    "Arrow",
    ()=>Arrow,
    "Brand",
    ()=>Brand,
    "GoMark",
    ()=>GoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function Brand({ product = false, light = false }) {
    const asset = product ? light ? "Asset 15@4x-8.png" : "Asset 14@4x-8.png" : light ? "Asset 9@4x-8.png" : "Asset 8@4x-8.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `brand ${product ? "brand--product" : ""} ${light ? "brand--light" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: `/brand/${asset}`,
            width: product ? 3586 : 5215,
            height: product ? 585 : 563,
            alt: product ? "GoChauffeur" : "Go Technologies",
            unoptimized: true,
            loading: light || product ? "lazy" : "eager"
        }, void 0, false, {
            fileName: "[project]/src/components/brand.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Brand;
function GoMark({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `go-mark ${className}`,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/brand.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c1 = GoMark;
function Arrow({ diagonal = false, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `arrow ${className}`,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: diagonal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 19 19 5M5 5h14v14"
        }, void 0, false, {
            fileName: "[project]/src/components/brand.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h16m-7-7 7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/src/components/brand.tsx",
            lineNumber: 56,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c2 = Arrow;
function Action({ children, href, secondary = false, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: `action ${secondary ? "action--secondary" : ""} ${className}`,
        href: href,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/brand.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "action-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                    diagonal: true
                }, void 0, false, {
                    fileName: "[project]/src/components/brand.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/brand.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/brand.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c3 = Action;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Brand");
__turbopack_context__.k.register(_c1, "GoMark");
__turbopack_context__.k.register(_c2, "Arrow");
__turbopack_context__.k.register(_c3, "Action");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cookie-notice.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accept": "cookie-notice-module__0rQT-G__accept",
  "actions": "cookie-notice-module__0rQT-G__actions",
  "copy": "cookie-notice-module__0rQT-G__copy",
  "decline": "cookie-notice-module__0rQT-G__decline",
  "notice": "cookie-notice-module__0rQT-G__notice",
});
}),
"[project]/src/components/cookie-notice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieNotice",
    ()=>CookieNotice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/cookie-notice.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const storageKey = "gotech:cookie-notice:v1";
const choiceEvent = "gotech:cookie-notice-choice";
let dismissedThisVisit = false;
function subscribe(onChange) {
    window.addEventListener("storage", onChange);
    window.addEventListener(choiceEvent, onChange);
    window.addEventListener("gotech:intro-complete", onChange);
    return ()=>{
        window.removeEventListener("storage", onChange);
        window.removeEventListener(choiceEvent, onChange);
        window.removeEventListener("gotech:intro-complete", onChange);
    };
}
function isVisible() {
    if (dismissedThisVisit) return false;
    try {
        const choice = localStorage.getItem(storageKey);
        if (choice === "accepted" || choice === "declined") return false;
    } catch  {
    // The notice still works for this visit when browser storage is unavailable.
    }
    return !document.querySelector(".brand-splash:not([hidden])");
}
const serverSnapshot = ()=>false;
function CookieNotice() {
    _s();
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, isVisible, serverSnapshot);
    function choose(choice) {
        dismissedThisVisit = true;
        try {
            localStorage.setItem(storageKey, choice);
        } catch  {
        // Keep the notice dismissed even if the browser blocks persistence.
        }
        window.dispatchEvent(new Event(choiceEvent));
    }
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notice,
        "aria-labelledby": "cookie-notice-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "section-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dot",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cookie-notice.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    "Privacy matters"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cookie-notice.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "cookie-notice-title",
                children: "Cookies & your privacy"
            }, void 0, false, {
                fileName: "[project]/src/components/cookie-notice.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
                children: [
                    "Learn how cookies and similar technologies may be used on this site in our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cookies",
                        children: "Cookie Policy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cookie-notice.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cookie-notice.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accept,
                        type: "button",
                        onClick: ()=>choose("accepted"),
                        children: "Accept"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cookie-notice.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cookie$2d$notice$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decline,
                        type: "button",
                        onClick: ()=>choose("declined"),
                        children: "Decline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cookie-notice.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cookie-notice.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cookie-notice.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(CookieNotice, "L5KBDBU5uMf+rpGwqmCIMSXNjqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = CookieNotice;
var _c;
__turbopack_context__.k.register(_c, "CookieNotice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const links = [
    [
        "Home",
        "#home"
    ],
    [
        "About",
        "#about"
    ],
    [
        "GoChauffeur",
        "#gochauffeur"
    ],
    [
        "Partnerships",
        "#partnerships"
    ],
    [
        "Contact",
        "#contact"
    ]
];
function Header({ homePath = "" }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!open) return;
            const previous = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const background = Array.from(document.querySelectorAll("main, footer"));
            const inertBefore = background.map({
                "Header.useEffect.inertBefore": (el)=>el.inert
            }["Header.useEffect.inertBefore"]);
            background.forEach({
                "Header.useEffect": (el)=>{
                    el.inert = true;
                }
            }["Header.useEffect"]);
            const first = menuRef.current?.querySelector("a");
            first?.focus();
            function handleKey(e) {
                if (e.key === "Escape") {
                    setOpen(false);
                    triggerRef.current?.focus();
                }
                if (e.key === "Tab") {
                    const items = [
                        triggerRef.current,
                        ...Array.from(menuRef.current?.querySelectorAll("a") ?? [])
                    ].filter(Boolean);
                    const first = items[0], last = items[items.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                    if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
            const wide = window.matchMedia("(min-width: 901px)");
            const closeOnWide = {
                "Header.useEffect.closeOnWide": ()=>{
                    if (wide.matches) setOpen(false);
                }
            }["Header.useEffect.closeOnWide"];
            wide.addEventListener("change", closeOnWide);
            document.addEventListener("keydown", handleKey);
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = previous;
                    background.forEach({
                        "Header.useEffect": (el, i)=>{
                            el.inert = inertBefore[i];
                        }
                    }["Header.useEffect"]);
                    document.removeEventListener("keydown", handleKey);
                    wide.removeEventListener("change", closeOnWide);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header ${open ? "is-open" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `${homePath}#home`,
                        className: "brand-link",
                        "aria-label": "Go Technologies home",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brand"], {}, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        "aria-label": "Main navigation",
                        children: links.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `${homePath}${href}`,
                                children: label
                            }, href, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "header-contact",
                        href: `${homePath}#contact`,
                        "aria-label": "Contact Go Technologies",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                            diagonal: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: triggerRef,
                        className: "menu-trigger",
                        "aria-label": open ? "Close navigation" : "Open navigation",
                        "aria-expanded": open,
                        "aria-controls": "mobile-navigation",
                        onClick: ()=>setOpen(!open),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: menuRef,
                    id: "mobile-navigation",
                    className: "mobile-navigation",
                    initial: {
                        opacity: 0,
                        y: reduced ? 0 : -12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: reduced ? 0 : -8
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Mobile navigation",
                        children: links.map(([label, href], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: `${homePath}${href}`,
                                initial: {
                                    opacity: 0,
                                    x: reduced ? 0 : -12
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: reduced ? 0 : i * 0.035
                                },
                                onClick: ()=>setOpen(false),
                                children: [
                                    label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                        diagonal: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, href, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-progress",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Header, "B9mZVDagcEMWqa3G9oK4SMdLhA4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/journey-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyPreview",
    ()=>JourneyPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function JourneyPreview({ active }) {
    _s();
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(active);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPreview.useEffect": ()=>{
            selection.current = active;
            controller.current?.select(active);
        }
    }["JourneyPreview.useEffect"], [
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPreview.useEffect": ()=>{
            const element = host.current;
            if (!element) return;
            let disposed = false;
            const observer = new IntersectionObserver({
                "JourneyPreview.useEffect": ([entry])=>{
                    if (!entry.isIntersecting) return;
                    observer.disconnect();
                    __turbopack_context__.A("[project]/src/components/journey-preview-runtime.ts [app-client] (ecmascript, async loader)").then({
                        "JourneyPreview.useEffect": ({ mountJourneyPreview })=>{
                            if (disposed) return;
                            controller.current = mountJourneyPreview(element);
                            controller.current.select(selection.current);
                        }
                    }["JourneyPreview.useEffect"]).catch({
                        "JourneyPreview.useEffect": ()=>{
                            if (!disposed) element.dataset.ready = "false";
                        }
                    }["JourneyPreview.useEffect"]);
                }
            }["JourneyPreview.useEffect"], {
                rootMargin: "250px"
            });
            observer.observe(element);
            return ({
                "JourneyPreview.useEffect": ()=>{
                    disposed = true;
                    observer.disconnect();
                    controller.current?.dispose();
                    controller.current = null;
                }
            })["JourneyPreview.useEffect"];
        }
    }["JourneyPreview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: host,
        className: "journey-model-preview",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/journey-preview.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(JourneyPreview, "BnJZ4s4HQtEgUhV6SSgv5V/fJ+o=");
_c = JourneyPreview;
var _c;
__turbopack_context__.k.register(_c, "JourneyPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/journey-world.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "journey-world-module__4xb4rG__canvas",
  "fallback": "journey-world-module__4xb4rG__fallback",
  "world": "journey-world-module__4xb4rG__world",
});
}),
"[project]/src/components/journey-world.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyWorld",
    ()=>JourneyWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$world$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/journey-world.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function JourneyWorld() {
    _s();
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyWorld.useEffect": ()=>{
            const element = host.current;
            if (!element) return;
            let disposed = false;
            const observer = new IntersectionObserver({
                "JourneyWorld.useEffect": ([entry])=>{
                    if (!entry.isIntersecting) return;
                    observer.disconnect();
                    // Load the live scene only as its hero container approaches the viewport.
                    __turbopack_context__.A("[project]/src/components/journey-world-runtime.ts [app-client] (ecmascript, async loader)").then({
                        "JourneyWorld.useEffect": ({ mountJourneyWorld })=>{
                            if (disposed) return;
                            controller.current = mountJourneyWorld(element);
                        }
                    }["JourneyWorld.useEffect"]).catch({
                        "JourneyWorld.useEffect": ()=>{
                            if (!disposed) element.dataset.render = "fallback";
                        }
                    }["JourneyWorld.useEffect"]);
                }
            }["JourneyWorld.useEffect"], {
                rootMargin: "400px"
            });
            observer.observe(element);
            return ({
                "JourneyWorld.useEffect": ()=>{
                    disposed = true;
                    observer.disconnect();
                    controller.current?.dispose();
                    controller.current = null;
                }
            })["JourneyWorld.useEffect"];
        }
    }["JourneyWorld.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$world$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].world,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: host,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$world$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
            "data-render": "loading",
            role: "img",
            "aria-label": "Interactive Sri Lankan landscape with an airport, Lotus Tower, white domed stupa, Sigiriya-inspired rock, tea-covered hills with a waterfall, coconut palms and coast.",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$world$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallback,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/sri-lanka-sigiriya.webp",
                    alt: "",
                    fill: true,
                    sizes: "100vw"
                }, void 0, false, {
                    fileName: "[project]/src/components/journey-world.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/journey-world.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/journey-world.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/journey-world.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(JourneyWorld, "7ZdAteYkndCm8GTkJnvQkiHCc70=");
_c = JourneyWorld;
var _c;
__turbopack_context__.k.register(_c, "JourneyWorld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/journeys.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Journeys",
    ()=>Journeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/journey-preview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const scenes = [
    {
        image: "sri-lanka-airport-arrival",
        alt: "Airport pickup with a terminal, plane, traveller with luggage and chauffeur car",
        position: "50% 50%"
    },
    {
        image: "tangalle-coast",
        alt: "A car travelling between a home and a hotel along a connecting road",
        position: "55% 50%"
    },
    {
        image: "sri-lanka-tourist",
        alt: "A day journey with a hotel, traveller, clock and chauffeur car",
        position: "45% 50%"
    },
    {
        image: "sigiriya-mist",
        alt: "A multi-day touring scene with tea hills, a stupa, coast and Sigiriya-inspired rock",
        position: "50% 60%"
    },
    {
        image: "sri-lanka-sigiriya",
        alt: "A flexible itinerary map with destination pins, alternative routes and a planning screen",
        position: "50% 50%"
    }
];
function Journeys() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const buttons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    function selectWithKeyboard(event, index) {
        const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
        if (!direction && event.key !== "Home" && event.key !== "End") return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? scenes.length - 1 : (index + direction + scenes.length) % scenes.length;
        setActive(next);
        buttons.current[next]?.focus();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "journey-explorer container section-space",
        id: "journeys",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journey-explorer-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        id: "journey-heading",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].product.journeysTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/journeys.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "journey-direction",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                            diagonal: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/journeys.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/journeys.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/journeys.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journey-explorer-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-image-stack",
                        children: [
                            scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "journey-scene",
                                    role: "tabpanel",
                                    id: `journey-panel-${index}`,
                                    "aria-labelledby": `journey-tab-${index}`,
                                    initial: false,
                                    animate: {
                                        opacity: active === index ? 1 : 0,
                                        transform: active === index ? "scale(1)" : "scale(1.045)"
                                    },
                                    transition: {
                                        duration: reduceMotion ? 0 : 0.55,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    "aria-hidden": active !== index,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: `/images/${scene.image}.webp`,
                                            alt: "",
                                            fill: true,
                                            sizes: "(max-width: 900px) 100vw, 52vw",
                                            style: {
                                                objectPosition: scene.position
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/journeys.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: scene.alt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/journeys.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, scene.image + index, true, {
                                    fileName: "[project]/src/components/journeys.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$journey$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JourneyPreview"], {
                                active: active
                            }, void 0, false, {
                                fileName: "[project]/src/components/journeys.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "journey-image-label",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].product.journeys[active]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journeys.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                        diagonal: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journeys.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/journeys.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/journeys.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-options",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "tablist",
                                "aria-labelledby": "journey-heading",
                                "aria-orientation": "vertical",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].product.journeys.map((journey, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: `journey-tab-${index}`,
                                        role: "tab",
                                        "aria-selected": index === active,
                                        "aria-controls": `journey-panel-${index}`,
                                        tabIndex: index === active ? 0 : -1,
                                        ref: (element)=>{
                                            buttons.current[index] = element;
                                        },
                                        onClick: ()=>setActive(index),
                                        onKeyDown: (event)=>selectWithKeyboard(event, index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "journey-option-dot",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/journeys.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: journey
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/journeys.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                                diagonal: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/journeys.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, journey, true, {
                                        fileName: "[project]/src/components/journeys.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/journeys.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "journey-contact",
                                href: `mailto:hello@gotechnologies.lk?subject=${encodeURIComponent(`GoChauffeur - ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].product.journeys[active]}`)}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].actions.contact
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journeys.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {}, void 0, false, {
                                        fileName: "[project]/src/components/journeys.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/journeys.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/journeys.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/journeys.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/journeys.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Journeys, "waHg5ux+ao+fILrRZ5lqX+vX0rg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Journeys;
var _c;
__turbopack_context__.k.register(_c, "Journeys");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/motion-system.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionSystem",
    ()=>MotionSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$story$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/story-motion.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MotionSystem() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MotionSystem.useLayoutEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
            mm.add("(prefers-reduced-motion: no-preference)", {
                "MotionSystem.useLayoutEffect": ()=>{
                    const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                        duration: 1.05,
                        smoothWheel: true,
                        anchors: {
                            offset: -90
                        },
                        prevent: {
                            "MotionSystem.useLayoutEffect": (node)=>document.body.style.overflow === "hidden" || node.closest("[data-lenis-prevent]") !== null
                        }["MotionSystem.useLayoutEffect"]
                    });
                    lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
                    const tick = {
                        "MotionSystem.useLayoutEffect.tick": (time)=>lenis.raf(time * 1000)
                    }["MotionSystem.useLayoutEffect.tick"];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tick);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
                    const intro = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        paused: !!document.querySelector(".brand-splash:not([hidden])"),
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    const startIntro = {
                        "MotionSystem.useLayoutEffect.startIntro": ()=>{
                            intro.play();
                        }
                    }["MotionSystem.useLayoutEffect.startIntro"];
                    window.addEventListener("gotech:intro-complete", startIntro);
                    intro.from(".hero-line > span", {
                        yPercent: 110,
                        rotate: 2,
                        duration: 1.15,
                        stagger: 0.12
                    }).fromTo(".hero-support > *", {
                        y: 16,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        clearProps: "transform,opacity"
                    }, 0.35).from(".hero-visual", {
                        opacity: 0,
                        y: 35,
                        duration: 1
                    }, 0.3);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".scroll-progress", {
                        scaleX: 1,
                        ease: "none",
                        scrollTrigger: {
                            start: 0,
                            end: "max",
                            scrub: 0.2
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("[data-reveal]").forEach({
                        "MotionSystem.useLayoutEffect": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                y: 26,
                                opacity: 0,
                                duration: 0.7,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 92%",
                                    once: true
                                }
                            });
                        }
                    }["MotionSystem.useLayoutEffect"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("[data-parallax]").forEach({
                        "MotionSystem.useLayoutEffect": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                                yPercent: -6,
                                scale: 1.12
                            }, {
                                yPercent: 6,
                                scale: 1.12,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: el.parentElement,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true
                                }
                            });
                        }
                    }["MotionSystem.useLayoutEffect"]);
                    const refresh = {
                        "MotionSystem.useLayoutEffect.refresh": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                    }["MotionSystem.useLayoutEffect.refresh"];
                    let disposed = false;
                    document.fonts.ready.then({
                        "MotionSystem.useLayoutEffect": ()=>{
                            if (!disposed) refresh();
                        }
                    }["MotionSystem.useLayoutEffect"]);
                    window.addEventListener("load", refresh);
                    return ({
                        "MotionSystem.useLayoutEffect": ()=>{
                            disposed = true;
                            window.removeEventListener("load", refresh);
                            window.removeEventListener("gotech:intro-complete", startIntro);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tick);
                            lenis.destroy();
                        }
                    })["MotionSystem.useLayoutEffect"];
                }
            }["MotionSystem.useLayoutEffect"]);
            mm.add({
                desktop: "(min-width: 901px)",
                mobile: "(max-width: 900px)",
                motion: "(prefers-reduced-motion: no-preference)"
            }, {
                "MotionSystem.useLayoutEffect": (context)=>{
                    if (!context.conditions?.motion) return;
                    const desktop = context.conditions.desktop;
                    const visual = document.querySelector(".hero-visual");
                    const reveal = {
                        progress: 0
                    };
                    const syncScene = {
                        "MotionSystem.useLayoutEffect.syncScene": ()=>{
                            if (visual) visual.dataset.reveal = String(reveal.progress);
                            window.dispatchEvent(new CustomEvent("gotech:hero-reveal", {
                                detail: reveal.progress
                            }));
                        }
                    }["MotionSystem.useLayoutEffect.syncScene"];
                    const hero = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        onUpdate: syncScene,
                        scrollTrigger: {
                            trigger: ".hero-visual-wrap",
                            start: desktop ? "top 100px" : "top 65%",
                            end: desktop ? "+=420" : "top 10%",
                            scrub: desktop ? 1 : 0.5,
                            pin: !!desktop,
                            anticipatePin: desktop ? 1 : 0
                        }
                    });
                    hero.to(reveal, {
                        progress: 1,
                        duration: 1,
                        ease: "none"
                    }, 0).to(".hero-stencil", {
                        scale: 3.6,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.in"
                    }, 0).to(".hero-model-backdrop", {
                        opacity: 0,
                        duration: 0.65,
                        ease: "power1.inOut"
                    }, 0.25).fromTo(".hero-photo-caption", {
                        y: 24,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power2.out"
                    }, 0.65);
                    syncScene();
                }
            }["MotionSystem.useLayoutEffect"]);
            mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", {
                "MotionSystem.useLayoutEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$story$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoryMotion"])();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".reveal-word").forEach({
                        "MotionSystem.useLayoutEffect": (word, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(word, {
                                opacity: 0.6
                            }, {
                                opacity: 1,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: ".about-title",
                                    start: `top ${85 - i * 1.8}%`,
                                    end: `top ${66 - i * 1.8}%`,
                                    scrub: true
                                }
                            });
                        }
                    }["MotionSystem.useLayoutEffect"]);
                }
            }["MotionSystem.useLayoutEffect"]);
            return ({
                "MotionSystem.useLayoutEffect": ()=>mm.revert()
            })["MotionSystem.useLayoutEffect"];
        }
    }["MotionSystem.useLayoutEffect"], []);
    return null;
}
_s(MotionSystem, "n7/vCynhJvM+pLkyL2DMQUF0odM=");
_c = MotionSystem;
var _c;
__turbopack_context__.k.register(_c, "MotionSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/story-motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStoryMotion",
    ()=>createStoryMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
function createStoryMotion() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".principles-motion-mark", {
        xPercent: -4,
        rotation: -8
    }, {
        xPercent: 4,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".principles-mark-window",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".product-frame img", {
        scale: 1.12,
        yPercent: -3
    }, {
        scale: 1,
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".product-story-audiences",
            start: "top bottom",
            end: "bottom 20%",
            scrub: 0.7
        }
    });
    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".principle-row");
    rows.forEach((row)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(row, {
            y: 20,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 65%",
                scrub: 0.5
            }
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".closing-copy p", {
        y: 18,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".closing-copy",
            start: "top 85%",
            once: true
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Client copy from GoTechnologies Website Content Revised v2.pdf, with the
 * 13 wording changes in Fashion Designers Title and Body New.pdf (13 October 2026).
 * Layout line breaks are normalized; long dashes replaced with commas at the owner's request. */ __turbopack_context__.s([
    "copy",
    ()=>copy,
    "destinations",
    ()=>destinations
]);
const copy = {
    hero: {
        title: "Everything begins with Go.",
        subtitle: "Technology for journeys that matter.",
        body: "Go Technologies builds digital products that simplify travel and mobility, connecting people, services and experiences, starting with GoChauffeur.",
        signature: "Built in Sri Lanka. Designed for the world."
    },
    about: {
        title: "Building technology around the way the world moves.",
        paragraphs: [
            "Go Technologies builds digital products around the way people move, travel and experience the world.",
            "We combine technology, thoughtful product design and an understanding of real-world conditions to make fragmented experiences easier to coordinate.",
            "We begin with travel and mobility through GoChauffeur, while building Go Technologies with room to grow beyond a single platform."
        ],
        motto: "Built to Move. Made to Connect."
    },
    product: {
        title: "Meet GoChauffeur.",
        body: "GoChauffeur is a digital booking platform connecting travellers with professional chauffeurs for private journeys across Sri Lanka, from airport transfers and day trips to flexible, multi-day travel experiences.",
        travellerTitle: "Your journey, thoughtfully handled.",
        travellerBody: "From airport transfers and point-to-point travel to day journeys and multi-day trips, GoChauffeur helps travellers plan private journeys with greater clarity.",
        chauffeurTitle: "Drive with GoChauffeur.",
        chauffeurBody: "Join a mobility platform designed to connect professional chauffeurs with travellers seeking private journeys across Sri Lanka.",
        journeysTitle: "What travellers can plan",
        journeys: [
            "Airport transfers",
            "Point-to-point travel",
            "Full-day chauffeur service",
            "Multi-day chauffeur journeys",
            "Flexible trip planning"
        ]
    },
    principles: {
        title: "Technology that feels human.",
        subtitle: "The best technology does not demand attention. It removes friction.",
        items: [
            {
                title: "Designed around people",
                body: "We start with real needs and real conditions, not features for their own sake."
            },
            {
                title: "Built to connect",
                body: "We bring people, services and technology into one clearer experience."
            },
            {
                title: "Made for movement",
                body: "We design technology for real-world journeys, making movement and coordination simpler beyond the screen."
            },
            {
                title: "Ready for what is next",
                body: "We build with the ability to grow across products, categories and borders."
            }
        ]
    },
    vision: {
        title: "Starting with mobility. Building what comes next.",
        subtitle: "GoChauffeur is our first product, not the limit of our ambition.",
        paragraphs: [
            "Go Technologies is working towards a connected ecosystem of digital products that simplify travel, mobility and everyday experiences, from discovering destinations to accessing services along the way.",
            "Our journey begins in Sri Lanka, where unique travel needs and real-world challenges offer opportunities to build practical, meaningful solutions.",
            "Our ambition is to take what we learn here and develop products that can serve people and businesses across borders."
        ],
        signature: "Sri Lankan beginnings. Global possibilities."
    },
    partnerships: {
        title: "Better journeys are built together.",
        body: "We believe meaningful innovation happens through collaboration. Go Technologies welcomes partnerships with businesses, service providers and technology innovators who share our vision of making travel and mobility more connected, accessible and seamless.",
        items: [
            {
                title: "Technology partners",
                body: "Collaborate on integrations and technologies that enhance our products and services."
            },
            {
                title: "Travel and hospitality businesses",
                body: "Explore opportunities to connect travellers with accommodation, experiences and complementary travel services."
            },
            {
                title: "Mobility partners",
                body: "Work with us to develop reliable, flexible and accessible chauffeur-led travel experiences."
            },
            {
                title: "Strategic partners",
                body: "Explore opportunities to develop new products, enter markets and create lasting value together."
            }
        ]
    },
    router: {
        title: "Where do you want to Go next?",
        items: [
            {
                title: "I'M TRAVELLING",
                body: "Discover private chauffeur-led journeys with GoChauffeur.",
                action: "EXPLORE",
                href: "#travellers"
            },
            {
                title: "I'M A CHAUFFEUR",
                body: "Explore opportunities to join the GoChauffeur platform.",
                action: "REGISTER",
                href: "#chauffeurs"
            },
            {
                title: "I WANT TO WORK WITH GO",
                body: "Explore partnership opportunities with Go Technologies.",
                action: "PARTNER",
                href: "#partnerships"
            }
        ]
    },
    closing: {
        title: "Everything begins with Go.",
        lines: [
            "One idea can become a product.",
            "One product can become an ecosystem.",
            "And one journey can lead somewhere completely new."
        ],
        body: "We are starting in Sri Lanka. We are building for what comes next.",
        question: "Where does Go go next?"
    },
    actions: {
        explore: "EXPLORE GOCHAUFFEUR",
        discover: "DISCOVER GO TECHNOLOGIES",
        register: "REGISTER AS A CHAUFFEUR",
        partner: "PARTNER WITH GO",
        contact: "START A CONVERSATION"
    }
};
const destinations = {
    explore: "#journeys",
    register: "mailto:hello@gotechnologies.lk?subject=GoChauffeur%20chauffeur%20registration",
    partner: "mailto:hello@gotechnologies.lk?subject=Go%20Technologies%20partnership",
    contact: "mailto:hello@gotechnologies.lk"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0qcdegp._.js.map