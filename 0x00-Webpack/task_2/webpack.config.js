const path = require('path');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./js/dashboard_main.js"),
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "sass-loader", "css-loader"],
			},
			{
				test: /\.(gif|jpg|png|jp?g|svg)$/i,
				type: 'assets/resource'
			},
		],
	},
};
