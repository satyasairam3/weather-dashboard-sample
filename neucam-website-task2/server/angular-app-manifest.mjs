
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
    'index.csr.html': {size: 527, hash: '2c66f2e9007d99b3e21d36dc89c9cef33f812e5b5d2ce7269b586e1b346cb089', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '2af422f93d6b8a17e72fd828850d8b76c2f8da447f8f6fbc5151ae568922220f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 2821, hash: '5e1f2dcdba6f1b54711d2252ec38966932f8d5eaac23fa76f2fbc817c7266c8d', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6544, hash: '905e0dc2e96ebb18d46ab81a0428f3ff99949e8612c21cef705b0cc6d0e1875b', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
