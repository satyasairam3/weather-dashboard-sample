
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/weather-dashboard-sample/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/weather-dashboard-sample/counter",
    "route": "/weather-dashboard-sample"
  },
  {
    "renderMode": 2,
    "route": "/weather-dashboard-sample/counter"
  },
  {
    "renderMode": 2,
    "route": "/weather-dashboard-sample/vatavaran"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 527, hash: '92203f3fd7127a2207f4e75ce64a2a397cc282cf20cfbbc58aa6d9435370299b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '759a910555b778c45b2253283f99675c546bb8a3ca66c725aee4126daa4b444a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 2821, hash: '844cde37f9e38c5e2e725100330f1752ff2356604075625431cd213dbec90299', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6544, hash: 'aee90a644de5f964835ee8f1edd6b38198adfcf16f009348689f89d5fe565ed4', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
