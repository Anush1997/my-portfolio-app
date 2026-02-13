
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Anush1997.github.io/my-portfolio-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10119, hash: '361a922103e4bcb8dfd11b5c2e20f926d4ef416f534f81313f34a6e12f457382', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10111, hash: '6ccf6c19a4f2e7097d9d9b77f165c0a563bb095a9d4d3635a0ab45efd908dd5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57651, hash: 'e72586d11b73122755d8658de37070bbcf4d1de63830e9299320ecdfaa226ed1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ANC62DLG.css': {size: 1939, hash: '13wpxG3Hy6U', text: () => import('./assets-chunks/styles-ANC62DLG_css.mjs').then(m => m.default)}
  },
};
