(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/audience-avatar-runtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mountAudienceAvatar",
    ()=>mountAudienceAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-client] (ecmascript)");
;
;
function mountAudienceAvatar(host, variant) {
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
    renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    const person = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    scene.add(person);
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-2, 2, 2, -2, 0.1, 30);
    camera.position.set(0, 2.7, 8);
    camera.lookAt(0, 1.65, 0);
    scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphereLight"](0xffffff, 0xa6b3a4, 2.4));
    const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xfff6e9, 3.5);
    light.position.set(-3, 7, 5);
    light.castShadow = true;
    light.shadow.mapSize.set(512, 512);
    Object.assign(light.shadow.camera, {
        left: -3,
        right: 3,
        top: 5,
        bottom: -2
    });
    light.shadow.normalBias = 0.03;
    light.shadow.radius = 4;
    scene.add(light);
    const material = (color)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color,
            roughness: 0.82
        });
    const forest = material(0x16362a);
    const mint = material(0x96c7a0);
    const cream = material(0xf3ecdc);
    const dark = material(0x26352f);
    const hair = material(0x26231f);
    const skin = material([
        0xbb805c,
        0x9c6245,
        0xc68b66
    ][variant]);
    const brass = material(0xc6a66b);
    const terracotta = material(0xb66a48);
    function mesh(geometry, mat, x, y, z) {
        const part = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, mat);
        part.position.set(x, y, z);
        part.castShadow = true;
        part.receiveShadow = true;
        person.add(part);
        return part;
    }
    function box(w, h, d, mat, x, y, z, radius = 0.07) {
        return mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](w, h, d, 3, radius), mat, x, y, z);
    }
    function sphere(x, y, z, r, mat, scale = [
        1,
        1,
        1
    ]) {
        const part = mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](r, 24, 16), mat, x, y, z);
        part.scale.set(...scale);
        return part;
    }
    function limb(from, to, radius, mat) {
        const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...from);
        const b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...to);
        const direction = b.clone().sub(a);
        const part = mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](radius, Math.max(0.01, direction.length() - radius * 2), 6, 12), mat, 0, 0, 0);
        part.position.copy(a.add(b).multiplyScalar(0.5));
        part.quaternion.setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), direction.normalize());
        return part;
    }
    const jacket = variant === 0 ? mint : variant === 1 ? dark : forest;
    // Grounded stance, soft tailoring and oversized heads keep the style friendly.
    limb([
        -0.2,
        0.3,
        0
    ], [
        -0.22,
        1.28,
        0
    ], 0.15, variant === 0 ? cream : dark);
    limb([
        0.24,
        0.3,
        0.08
    ], [
        0.19,
        1.28,
        0
    ], 0.15, variant === 0 ? cream : dark);
    box(0.34, 0.19, 0.54, forest, -0.2, 0.17, 0.12);
    box(0.34, 0.19, 0.54, forest, 0.24, 0.17, 0.2);
    box(0.88, 1.05, 0.5, jacket, 0, 1.7, 0, 0.16);
    if (variant !== 1) {
        box(0.32, 0.8, 0.045, cream, 0, 1.79, 0.253, 0.02);
        const leftLapel = box(0.16, 0.63, 0.05, jacket, -0.2, 1.93, 0.29, 0.02);
        leftLapel.rotation.z = 0.24;
        const rightLapel = box(0.16, 0.63, 0.05, jacket, 0.2, 1.93, 0.29, 0.02);
        rightLapel.rotation.z = -0.24;
    }
    sphere(0, 2.28, 0, 0.16, skin, [
        0.85,
        1.25,
        0.85
    ]);
    sphere(0, 2.79, 0, 0.47, skin, [
        0.88,
        1.1,
        0.86
    ]);
    sphere(-0.4, 2.77, 0, 0.09, skin);
    sphere(0.4, 2.77, 0, 0.09, skin);
    if (variant !== 1) {
        sphere(0, 3.08, -0.05, 0.43, hair, [
            0.98,
            0.57,
            0.98
        ]);
        sphere(-0.23, 3.15, 0.17, 0.22, hair, [
            1.15,
            0.65,
            0.8
        ]);
    }
    sphere(0, 2.74, 0.4, 0.075, skin, [
        0.7,
        1,
        0.85
    ]);
    for (const x of [
        -0.15,
        0.15
    ]){
        sphere(x, 2.85, 0.37, 0.029, hair);
        box(0.1, 0.025, 0.025, hair, x, 2.96, 0.36, 0.01);
    }
    const smile = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EllipseCurve"](0, 0, 0.09, 0.04, Math.PI, Math.PI * 2, false, 0);
    const smileGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(smile.getPoints(20).map((p)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](p.x, p.y + 2.62, 0.374)));
    person.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](smileGeometry, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color: 0x754632
    })));
    if (variant === 0) {
        // Traveller: backpack, passport, and a wheeled carry-on with telescopic handle.
        box(0.75, 0.8, 0.4, forest, 0, 1.72, -0.4, 0.14);
        for (const x of [
            -0.3,
            0.3
        ])box(0.075, 0.74, 0.08, forest, x, 1.85, 0.25, 0.025);
        limb([
            -0.46,
            2.07,
            0
        ], [
            -0.61,
            1.67,
            0.17
        ], 0.13, jacket);
        limb([
            -0.61,
            1.67,
            0.17
        ], [
            -0.48,
            1.78,
            0.48
        ], 0.11, jacket);
        sphere(-0.48, 1.78, 0.48, 0.12, skin);
        const passport = box(0.27, 0.36, 0.06, forest, -0.46, 1.86, 0.55, 0.025);
        passport.rotation.z = -0.16;
        sphere(-0.46, 1.89, 0.589, 0.052, brass, [
            1,
            1,
            0.2
        ]);
        limb([
            0.46,
            2.07,
            0
        ], [
            0.76,
            1.5,
            0.03
        ], 0.13, jacket);
        sphere(0.77, 1.41, 0.03, 0.12, skin);
        box(0.65, 0.85, 0.44, terracotta, 0.85, 0.56, 0.04, 0.1);
        for (const x of [
            0.66,
            1.04
        ]){
            limb([
                x,
                0.94,
                0.04
            ], [
                x,
                1.39,
                0.04
            ], 0.021, dark);
            sphere(x, 0.12, 0.04, 0.08, dark);
        }
        box(0.42, 0.065, 0.09, forest, 0.85, 1.4, 0.04, 0.025);
        for (const x of [
            0.66,
            0.85,
            1.04
        ])box(0.025, 0.58, 0.015, cream, x, 0.58, 0.264, 0.006);
    } else if (variant === 1) {
        // Casual branded tee and bucket hat, referencing brand-board pages 13/23.
        mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.35, 0.44, 0.38, 32), forest, 0, 3.24, 0);
        mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.44, 0.59, 0.11, 32), forest, 0, 3.02, 0);
        const collar = mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.17, 0.025, 8, 24), forest, 0, 2.2, 0);
        collar.rotation.x = Math.PI / 2;
        limb([
            -0.46,
            2.07,
            0
        ], [
            -0.51,
            1.77,
            0.04
        ], 0.155, jacket);
        limb([
            -0.51,
            1.76,
            0.04
        ], [
            -0.54,
            1.35,
            0.1
        ], 0.1, skin);
        sphere(-0.54, 1.24, 0.1, 0.12, skin);
        limb([
            0.46,
            2.07,
            0
        ], [
            0.6,
            1.83,
            0.05
        ], 0.155, jacket);
        limb([
            0.6,
            1.83,
            0.05
        ], [
            0.82,
            2.08,
            0.22
        ], 0.1, skin);
        sphere(0.84, 2.17, 0.23, 0.12, skin);
        mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.085, 0.017, 8, 24), brass, 0.9, 2.04, 0.31);
        box(0.13, 0.24, 0.07, dark, 0.91, 1.86, 0.31, 0.045);
        box(0.045, 0.06, 0.01, cream, 0.91, 1.88, 0.35, 0.01);
    } else {
        // Business partner: a man in a dark suit, tie and white pocket square.
        box(0.09, 0.52, 0.04, dark, 0, 1.93, 0.29, 0.02);
        box(0.13, 0.065, 0.025, cream, 0.3, 1.94, 0.255, 0.01);
        limb([
            -0.46,
            2.06,
            0
        ], [
            -0.58,
            1.39,
            0.09
        ], 0.13, jacket);
        sphere(-0.59, 1.29, 0.09, 0.12, skin);
        box(0.23, 0.13, 0.1, brass, -0.6, 1.21, 0.09, 0.03);
        box(0.56, 0.42, 0.17, terracotta, -0.6, 0.97, 0.09, 0.04);
        box(0.065, 0.07, 0.025, brass, -0.6, 1.07, 0.19, 0.01);
        limb([
            0.46,
            2.06,
            0
        ], [
            0.61,
            1.78,
            0.08
        ], 0.13, jacket);
        limb([
            0.61,
            1.78,
            0.08
        ], [
            0.86,
            1.96,
            0.3
        ], 0.105, jacket);
        sphere(0.92, 2, 0.35, 0.13, skin, [
            1.15,
            0.65,
            1
        ]);
    }
    const floor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](20, 20), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: 0.13
    }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let disposed = false;
    let logoTexture;
    const render = ()=>{
        if (disposed) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(()=>renderer.render(scene, camera));
    };
    const resize = ()=>{
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height);
        const halfHeight = 1.95;
        camera.left = -halfHeight * width / height;
        camera.right = halfHeight * width / height;
        camera.top = halfHeight;
        camera.bottom = -halfHeight;
        camera.updateProjectionMatrix();
        render();
    };
    const reset = ()=>{
        person.rotation.y = 0;
        render();
    };
    const move = (event)=>{
        if (preference.matches || event.pointerType === "touch") return;
        const rect = host.getBoundingClientRect();
        person.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5) * 0.45;
        render();
    };
    const item = host.closest(".audience-item");
    item.addEventListener("pointermove", move);
    item.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    reset();
    resize();
    if (variant === 1) {
        logoTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load("/brand/Asset 13@4x-8.png", (texture)=>{
            if (disposed) {
                texture.dispose();
                return;
            }
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            const print = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                map: texture,
                transparent: true,
                depthWrite: false
            });
            // Use the supplied stacked product lockup without redrawing its lettering.
            mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.46, 0.46 * 667 / 1015), print, 0, 1.85, 0.257);
            mesh(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.22, 0.22 * 667 / 1015), print, 0, 3.23, 0.448);
            render();
        });
    }
    return ()=>{
        disposed = true;
        observer.disconnect();
        cancelAnimationFrame(frame);
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", reset);
        preference.removeEventListener("change", reset);
        const materials = new Set([
            forest,
            mint,
            cream,
            dark,
            hair,
            skin,
            brass,
            terracotta
        ]);
        scene.traverse((object)=>{
            if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] || object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"]) {
                object.geometry.dispose();
                (Array.isArray(object.material) ? object.material : [
                    object.material
                ]).forEach((m)=>materials.add(m));
            }
        });
        materials.forEach((m)=>m.dispose());
        logoTexture?.dispose();
        light.shadow.map?.dispose();
        renderer.dispose();
        renderer.domElement.remove();
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_audience-avatar-runtime_ts_1fkc8w8._.js.map