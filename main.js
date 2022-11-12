(() => {
    "use strict";
    const t = t => document.querySelector(t),
        e = t("#image-input"),
        o = t("#image-vertical-offset"),
        a = t("#image-horizontal-offset"),
        n = t("body"),
        l = t("canvas"),
        r = t("#download-button"),
        i = {
            textOffset: t("input#text-offset"),
            text: t("input#text"),
            textColor: t("input#text-color"),
            frameColor1: t("input#frame-color-1"),
            frameColor2: t("input#frame-color-2"),
            scale: t("#image-scale")
        },
        c = 500;
    l.width = c, l.height = c;
    const s = l.getContext("2d");
    s.font = "bold 30px Open Sans, sans-serif", s.textAlign = "center", s.textBaseline = "middle";
    const u = new Image;
    u.setAttribute("crossorigin", "anonymous"), u.src = "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", u.onload = () => {
        ! function() {
            const t = 100 / (Math.min(u.height, u.width) / c);
            i.scale.value = t.toFixed(2), o.value = ((u.height * t / 100 - c) / -2).toFixed(2), a.value = ((u.width * t / 100 - c) / -2).toFixed(2)
        }(), f()
    };
    const d = t => Math.round(255 * t).toString(16);

    function f() {
        const t = i.scale.value / 100;
        s.drawImage(u, a.value, o.value, u.width * t, u.height * t),
            function() {
                const t = s.createLinearGradient(250, 500, 250, 400);
                t.addColorStop(0, i.frameColor1.value + d(1)), t.addColorStop(.15, i.frameColor1.value + d(1)), t.addColorStop(.8, i.frameColor2.value + d(1)), t.addColorStop(.9, i.frameColor2.value + d(.4)), t.addColorStop(.95, i.frameColor2.value + d(.1)), t.addColorStop(1, "rgba(0,0,0,0"), s.fillStyle = t, s.fillRect(0, c, c, -500)
            }(),
            function() {
                const t = document.createElement("canvas");
                t.width = c, t.height = c;
                const e = t.getContext("2d"),
                    n = i.scale.value / 100;
                e.drawImage(u, a.value, o.value, u.width * n, u.height * n), e.globalCompositeOperation = "destination-in", e.beginPath(), e.ract(20, 20, 150, 100), e.closePath(), e.fill(), s.drawImage(t, 0, 0, 500, 500)
            }();
        let e = i.text.value || "#EXAMPLE";
        /[\u0590-\u05FF]/.test(e) && (e = e.split("").reverse().join("")),
            function(t, e, o, a, n) {
                t.fillStyle = i.textColor.value, t.save(), t.translate(o, a);
                const l = t.measureText(e).width,
                    r = i.textOffset.value / 100,
                    c = (m * l + r) * Math.PI;
                t.rotate(c);
                const s = .86 * n,
                    u = -85e-5 * Math.PI;
                for (const [o, a] of e.split("").entries()) {
                    const e = u * t.measureText(a).width;
                    o && t.rotate(e), t.save(), t.translate(0, s), t.fillText(a, 0, 0), t.restore(), t.rotate(e)
                }
                t.restore()
            }(s, e, 250, 250, 250)
    }
    const m = 85e-5;
    const h = new FileReader;

    function p(t) {
        o.value = parseInt(o.value) + t
    }

    function g(t) {
        a.value = parseInt(a.value) + t
    }

    function v(t) {
        i.scale.value = parseInt(i.scale.value) + t
    }

    function w(t) {
        const e = new URLSearchParams(window.location.search);
        e.set(t.target.id, t.target.value), history.pushState(null, "", "?" + e.toString()), f()
    }
    e.onchange = function() {
            const t = e.files[0];
            t && (h.onload = () => {
                u.src = h.result
            }, h.readAsDataURL(t))
        }, n.addEventListener("keydown", (t => {
            "input" !== t.target.localName && ("ArrowUp" === t.code && (t.metaKey || t.ctrlKey ? v(1) : p(-2)), "ArrowDown" === t.code && (t.metaKey || t.ctrlKey ? v(-1) : p(2)), "ArrowLeft" === t.code && g(-2), "ArrowRight" === t.code && g(2), f())
        })), o.oninput = w, a.oninput = w, i.scale.oninput = w, i.frameColor1.oninput = w, i.frameColor2.oninput = w, i.text.oninput = w, i.textOffset.oninput = w, i.textColor.oninput = w, document.fonts.onloadingdone = f, r.onclick = function() {
            const t = document.createElement("a");
            t.href = l.toDataURL("image/jpg"), t.download = "linked-profile-frame.jpg", document.body.appendChild(t), t.click(), document.body.removeChild(t)
        },
        function() {
            const e = new URLSearchParams(window.location.search);
            for (const [o, a] of e) {
                const e = t(`input#${o}`);
                e && (e.value = a)
            }
        }()
})();