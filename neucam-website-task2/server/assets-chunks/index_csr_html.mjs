export default `<!doctype html>
<html lang="en" data-beasties-container="">
<head>
  <base href="/weather-dashboard-sample/">
  <meta charset="utf-8">
  <title>NeucamWebsiteTask2</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script>
  (function () {
    const params = new URLSearchParams(window.location.search);
    const path = params.get('p');
    if (path) {
      history.replaceState(null, '', path);
    }
  })();
</script>
<link rel="stylesheet" href="styles-5INURTSO.css"></head>
<body ngcm="">
  <app-root></app-root>
<script src="polyfills-B6TNHZQ6.js" type="module"></script><script src="main-HMPUN5SO.js" type="module"></script></body>
</html>
`;