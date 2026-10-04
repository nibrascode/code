// Avtomatik: node scripts/build-itbooks.mjs. Hər hissə yalnız lazım olanda dinamik yüklənir.
export const SHARD = 300;
export const LOADERS = [
  () => import("./books/b_0.js"),
  () => import("./books/b_1.js"),
  () => import("./books/b_2.js"),
  () => import("./books/b_3.js"),
  () => import("./books/b_4.js"),
  () => import("./books/b_5.js"),
  () => import("./books/b_6.js"),
  () => import("./books/b_7.js"),
  () => import("./books/b_8.js"),
];
