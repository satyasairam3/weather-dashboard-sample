
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
    'index.csr.html': {size: 570, hash: 'ed98d2765f637b0ad52cb086dece21d031d79079fe9ed028d5ec7d0e04376a20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1084, hash: '09dbdf7f585797b4ee3d19427909b8abfbd682ab4d3b13f3fa694917047a6942', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6587, hash: 'c7804e1c0d3e872f6add572d735bac08bbd344674d12983a3d20ed216f5fa985', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 2864, hash: '304f0aad943b774ef9c714599143f3003623de4d4d8f4208300a4c8b6b0f7c74', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
