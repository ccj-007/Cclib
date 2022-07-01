const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  babelExclude,
  overrideDevServer,
} = require('customize-cra');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';
const { addBabelPreset } = require('customize-cra');

const addCompression = () => (config) => {
  if (isEnvProduction) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        test: /\.(css|js)$/,
        // 只处理比1kb大的资源
        threshold: 1024,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9,
      }),
    );
  }

  return config;
};

// 查看打包后各包大小
const addAnalyzer = () => (config) => {
  if (process.env.ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};

module.exports = {
  webpack: override(
    // emotion css props support
    addBabelPreset('@emotion/babel-preset-css-prop'),
    fixBabelImports('import', [
      {
        libraryName: '@material-ui/core',
        libraryDirectory: 'esm',
        camel2DashComponentName: false,
      },
    ]),
    addCompression(),
    addAnalyzer(),
    addWebpackPlugin(
      // 终端进度条显示
      new ProgressBarPlugin(),
    ),
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
      ['@page']: path.resolve(__dirname, 'src/page'),
    }),
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      modifyVars: {
        '@primary-color': '#1DA57A',
      },
      cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
      cssModules: {
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      },
    }),
    babelExclude([path.resolve('src/service')]), //排除后端代码
  ),
};
