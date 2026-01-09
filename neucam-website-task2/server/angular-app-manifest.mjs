
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
    'index.csr.html': {size: 571, hash: '7fa27b0d275884075465c3b9a4344417e0aa501ca152c0c42c30d064e47c8d57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1084, hash: '52da0d8b41b3fb64a2e3885a06a38b506c80ca1da81f6db6c3714e3ce8938bce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 2865, hash: 'f3efbc11a7c1615a78dc5fb978b6fba7883dcb9b59fc2ab3d20c4f5556b5ae4e', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6588, hash: '327cdb9f54ea4b1f7d530385d94a9a8b7b2342f20e3d0ae379d0af9b6c27f100', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
