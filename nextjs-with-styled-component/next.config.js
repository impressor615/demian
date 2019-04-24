const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([
  withTypescript,
  withImages,
]);
