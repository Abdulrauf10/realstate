// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  ...defaultConfig,
  transformer: {
    ...defaultConfig.transformer,
  },
  resolver: {
    ...defaultConfig.resolver,
  },
};

module.exports = withNativeWind(config, { input: './app/global.css' });
