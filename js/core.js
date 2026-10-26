/* Prism ASCII Banner · core logic */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  // 5-row bitmap font, '#' = ink
  const G = {
    A: [" ### ", "#   #", "#####", "#   #", "#   #"], B: ["#### ", "#   #", "#### ", "#   #", "#### "], C: [" ####", "#    ", "#    ", "#    ", " ####"],
    D: ["#### ", "#   #", "#   #", "#   #", "#### "], E: ["#####", "#    ", "#### ", "#    ", "#####"], F: ["#####", "#    ", "#### ", "#    ", "#    "],
    G: [" ####", "#    ", "#  ##", "#   #", " ####"], H: ["#   #", "#   #", "#####", "#   #", "#   #"], I: ["###", " # ", " # ", " # ", "###"],
    J: ["  ###", "    #", "    #", "#   #", " ### "], K: ["#   #", "#  # ", "###  ", "#  # ", "#   #"], L: ["#    ", "#    ", "#    ", "#    ", "#####"],
    M: ["#   #", "## ##", "# # #", "#   #", "#   #"], N: ["#   #", "##  #", "# # #", "#  ##", "#   #"], O: [" ### ", "#   #", "#   #", "#   #", " ### "],
    P: ["#### ", "#   #", "#### ", "#    ", "#    "], Q: [" ### ", "#   #", "# # #", "#  # ", " ## #"], R: ["#### ", "#   #", "#### ", "#  # ", "#   #"],
    S: [" ####", "#    ", " ### ", "    #", "#### "], T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "], U: ["#   #", "#   #", "#   #", "#   #", " ### "],
    V: ["#   #", "#   #", "#   #", " # # ", "  #  "], W: ["#   #", "#   #", "# # #", "## ##", "#   #"], X: ["#   #", " # # ", "  #  ", " # # ", "#   #"],
    Y: ["#   #", " # # ", "  #  ", "  #  ", "  #  "], Z: ["#####", "   # ", "  #  ", " #   ", "#####"],
    0: [" ### ", "#  ##", "# # #", "##  #", " ### "], 1: [" # ", "## ", " # ", " # ", "###"], 2: ["#### ", "    #", " ### ", "#    ", "#####"],
    3: ["#### ", "    #", " ### ", "    #", "#### "], 4: ["#   #", "#   #", "#####", "    #", "    #"], 5: ["#####", "#    ", "#### ", "    #", "#### "],
    6: [" ### ", "#    ", "#### ", "#   #", " ### "], 7: ["#####", "    #", "   # ", "  #  ", "  #  "], 8: [" ### ", "#   #", " ### ", "#   #", " ### "],
    9: [" ### ", "#   #", " ####", "    #", " ### "],
    " ": ["   ", "   ", "   ", "   ", "   "], "!": ["#", "#", "#", " ", "#"], "?": ["### ", "   #", " ## ", "    ", " #  "], ".": [" ", " ", " ", " ", "#"],
    "-": ["    ", "    ", "####", "    ", "    "], _: ["    ", "    ", "    ", "    ", "####"], ":": [" ", "#", " ", "#", " "], "/": ["    #", "   # ", "  #  ", " #   ", "#    "],
    "<": ["  #", " # ", "#  ", " # ", "  #"], ">": ["#  ", " # ", "  #", " # ", "#  "], "+": ["     ", "  #  ", "#####", "  #  ", "     "], "#": [" # # ", "#####", " # # ", "#####", " # # "],
    "'": ["#", "#", " ", " ", " "], ",": ["  ", "  ", "  ", " #", "# "], "=": ["    ", "####", "    ", "####", "    "], "*": ["     ", "# # #", " ### ", "# # #", "     "],
  };
  const STYLES = {
    block: { ink: "█", gap: " " }, shade: { ink: "▓", gap: "░" }, hash: { ink: "#", gap: " " }, dots: { ink: "●", gap: " " },
    shadow: { ink: "█", gap: " ", shadow: "░" }, slim: { ink: "▀", gap: " " }, star: { ink: "*", gap: " " },
  };
  function render(text, style = "block", spacing = 1) {
    const st = STYLES[style] || STYLES.block;
    const out = [];
    for (const line of String(text).toUpperCase().split("\n")) {
      const rows = ["", "", "", "", ""];
      [...line].forEach((ch, i) => { const g = G[ch] || G["?"]; for (let r = 0; r < 5; r++) rows[r] += (i ? " ".repeat(spacing) : "") + g[r]; });
      let grid = rows.map((r) => [...r]);
      if (st.shadow) {
        const h = grid.length + 1, w = Math.max(...grid.map((r) => r.length)) + 1, sh = Array.from({ length: h }, () => Array(w).fill(" "));
        grid.forEach((r, y) => r.forEach((c, x) => { if (c === "#") sh[y + 1][x + 1] = "s"; }));
        grid.forEach((r, y) => r.forEach((c, x) => { if (c === "#") sh[y][x] = "#"; }));
        grid = sh;
      }
      out.push(...grid.map((r) => r.map((c) => (c === "#" ? st.ink : c === "s" ? st.shadow : c === " " ? (st.gap === " " ? " " : st.gap) : c)).join("").replace(/\s+$/, "")));
      out.push("");
    }
    return out.slice(0, -1).join("\n");
  }
  function wrap(art, mode = "none") {
    const L = art.split("\n");
    if (mode === "slash") return L.map((l) => `// ${l}`.trimEnd()).join("\n");
    if (mode === "hash") return L.map((l) => `# ${l}`.trimEnd()).join("\n");
    if (mode === "block") return `/*\n${L.map((l) => ` * ${l}`.trimEnd()).join("\n")}\n */`;
    if (mode === "html") return `<!--\n${art}\n-->`;
    if (mode === "box") { const w = Math.max(...L.map((l) => [...l].length)); return [`╭${"─".repeat(w + 2)}╮`, ...L.map((l) => `│ ${l}${" ".repeat(w - [...l].length)} │`), `╰${"─".repeat(w + 2)}╯`].join("\n"); }
    if (mode === "md") return "```\n" + art + "\n```";
    if (mode === "js") return `console.log(\`\n${art.replace(/[`\\$]/g, "\\$&")}\n\`);`;
    return art;
  }
  const supported = (ch) => ch.toUpperCase() in G || ch === "\n";
  return { render, wrap, STYLES, supported, GLYPHS: G };
});
