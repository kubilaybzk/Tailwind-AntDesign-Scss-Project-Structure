const withAntdLess = require("next-plugin-antd-less");
const path = require('path')



module.exports = withAntdLess({
  reactStrictMode: true,
  // You can directly change the antd less variables here
  // modifyVars: { "@primary-color": "#f200ff" },
  // Or better still you can specify a path to a file
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  
  
  sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
  trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},

  // Other Config Here...

  webpack(config) {
    config.module.rules.push({
		  test: /\.svg$/i,
		  issuer: /\.[jt]sx?$/,
		  use: ['@svgr/webpack'],
		})
    return config;
  },
});
