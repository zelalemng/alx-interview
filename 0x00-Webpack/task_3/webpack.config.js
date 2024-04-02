const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	stats: {
		children: true,
		errorDetails: true,
	},
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
		assetModuleFilename: '[name][ext]',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public')
		},
		port: 8564,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'assets/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
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
