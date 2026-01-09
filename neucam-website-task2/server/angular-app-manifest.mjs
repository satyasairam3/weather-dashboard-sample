
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
    'index.csr.html': {size: 737, hash: 'b6cbe72c29c595b16187ba135bdf64a8808ff7c395efb69bf52ca681f17de594', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: 'e2ca369ef19fc6325a32739caf6932855cef86e281522cb8bdf168bef8e1e916', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vatavaran/index.html': {size: 6754, hash: '5d7c6794760a1c9e47319b65f4dc37692e1c89b7bceb0052c10e44f9fa18be9e', text: () => import('./assets-chunks/vatavaran_index_html.mjs').then(m => m.default)},
    'counter/index.html': {size: 3034, hash: '70339b20f9aeabd4f23a7ca9e745e4c6990ed72022aabf36bc9de85af65bd170', text: () => import('./assets-chunks/counter_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
