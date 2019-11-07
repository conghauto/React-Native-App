/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/assets/fonts/'], // stays the same
  //   commands: require('./path-to-commands.js'), // formerly "plugin", returns an array of commands
};

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
