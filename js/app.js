(() => {
  const { $, $$, copy, download, store, debounce, toast } = Prism;
  let S = { txt: "PRISM", style: "shadow", sp: 1, wrap: "none", color: "grad", ...store.get("ab:s", {}) };
  $("#styles").innerHTML = Object.keys(Core.STYLES).map((s) => `<button data-s="${s}">${s}</button>`).join("");
  const sync = () => $$("#styles button").forEach((b) => b.classList.toggle("on", b.dataset.s === S.style));
  function render() {
    store.set("ab:s", S); sync();
    const art = Core.wrap(Core.render(S.txt, S.style, +S.sp), S.wrap);
    $("#art").textContent = art; $("#art").className = `art ${S.color}`;
    const L = art.split("\n"); $("#dim").textContent = `${Math.max(...L.map((l) => [...l].length))} × ${L.length}`;
    const bad = [...new Set([...S.txt].filter((c) => !Core.supported(c)))];
    $("#warn").hidden = !bad.length; $("#warn").textContent = `Unsupported characters shown as ?: ${bad.join(" ")}`;
  }
  $("#txt").value = S.txt; $("#sp").value = S.sp; $("#wrap").value = S.wrap; $("#color").value = S.color;
  $("#txt").addEventListener("input", debounce(() => { S.txt = $("#txt").value; render(); }, 80));
  $("#sp").oninput = () => { S.sp = $("#sp").value; render(); };
  $("#wrap").onchange = () => { S.wrap = $("#wrap").value; render(); };
  $("#color").onchange = () => { S.color = $("#color").value; render(); };
  $$("#styles button").forEach((b) => (b.onclick = () => { S.style = b.dataset.s; render(); }));
  $("#copy").onclick = () => copy($("#art").textContent);
  $("#dl").onclick = () => download("banner.txt", $("#art").textContent + "\n");
  $("#png").onclick = () => {
    const L = $("#art").textContent.split("\n"), fs = 18, lh = fs * 1.15, pad = 32, c = document.createElement("canvas"), x = c.getContext("2d");
    x.font = `${fs}px "JetBrains Mono", monospace`; const w = Math.max(...L.map((l) => x.measureText(l).width));
    c.width = w + pad * 2; c.height = L.length * lh + pad * 2;
    x.fillStyle = "#05070f"; x.fillRect(0, 0, c.width, c.height); x.font = `${fs}px "JetBrains Mono", monospace`; x.textBaseline = "top";
    const cs = getComputedStyle(document.documentElement), g = x.createLinearGradient(pad, 0, pad + w, 0);
    g.addColorStop(0, cs.getPropertyValue("--accent").trim() || "#00d2ff"); g.addColorStop(1, cs.getPropertyValue("--accent-2").trim() || "#6c63ff");
    x.fillStyle = S.color === "grad" ? g : S.color === "green" ? "#3ee69a" : "#e8ecff";
    L.forEach((l, i) => x.fillText(l, pad, pad + i * lh));
    c.toBlob((b) => { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "banner.png"; a.click(); toast("PNG saved"); });
  };
  render();
})();
