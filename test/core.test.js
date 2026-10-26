const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
test("renders 5 rows per line", () => {
  const a = C.render("HI", "hash", 1);
  assert.equal(a, "#   # ###\n#   #  #\n#####  #\n#   #  #\n#   # ###");
});
test("multi-line + shadow adds a row", () => {
  assert.equal(C.render("A\nB").split("\n").length, 11);
  assert.equal(C.render("A", "shadow").split("\n").length, 6);
  assert.match(C.render("A", "shadow"), /░/);
});
test("all glyphs are 5 rows of equal width", () => {
  for (const [k, g] of Object.entries(C.GLYPHS)) { assert.equal(g.length, 5, k); assert.ok(g.every((r) => r.length === g[0].length), k); }
});
test("wrappers", () => {
  assert.equal(C.wrap("ab\nc", "slash"), "// ab\n// c");
  assert.equal(C.wrap("ab\nc", "box"), "╭────╮\n│ ab │\n│ c  │\n╰────╯");
  assert.equal(C.wrap("a`b", "js"), "console.log(`\na\\`b\n`);");
  assert.ok(!C.supported("é")); assert.ok(C.supported("z"));
});
