const path = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	stats: {
		children: true,
		errorDetails: true,
	},
	entry: {
		header: './header/header.js',
		body: './body/body.js',
		footer: './footer/footer.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	devServer: {
		static: path.resolve(__dirname, 'public'),
		port: 8564,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWenpackPlugin({
			template: './public/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
			},
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devtool: 'inline-source-map',
};
