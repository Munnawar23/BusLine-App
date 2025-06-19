const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const baseConfig = getDefaultConfig(__dirname);

// Modify assetExts and sourceExts to handle `.svg`
baseConfig.resolver.assetExts = baseConfig.resolver.assetExts.filter(ext => ext !== 'svg');
baseConfig.resolver.sourceExts = [...baseConfig.resolver.sourceExts, 'svg'];

// Add SVG transformer
baseConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// You can also add more custom config here
const customConfig = {
  // Add any other overrides if needed
};

const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap with NativeWind
module.exports = withNativeWind(mergedConfig, {
  input: './global.css', // Make sure this file exists
});
