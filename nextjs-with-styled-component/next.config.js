const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");


module.exports = withPlugins([
  withTypescript,
  withImages,
  [withBundleAnalyzer, {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: './analyze/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: './analyze/client.html'
      },
    },
  }],
]);
