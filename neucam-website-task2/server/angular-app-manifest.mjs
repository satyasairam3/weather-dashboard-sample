
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
    'index.csr.html': {size: 737, hash: '38629d7b9dcdc75b8e86276d3f09655ebd93e33460558fff7bfa5d1a373f95a4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: 'bd56fc72614a632e0bf6b2d3d0760005a9b37029def82c6ad6d9a880f674a582', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 3031, hash: 'aad5ae306b97f5c0048dfa422b6d11f83eca83085a02da1901f30b594d989cdc', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6754, hash: '3fbf1382167458bd0cd6e598a870c5af62ace9a55971b2e8c001d0ae407e9756', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
