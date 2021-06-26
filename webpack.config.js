const { main } = require("./package.json");
const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

module.exports = {
	devtool: "inline-source-map",
	entry: main,
	mode: "production",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	plugins: [
		new ProgressBarPlugin({
			format: "  build [:bar] " + chalk.green.bold(":percent") + " (:elapsed seconds)",
			clear: false,
		}),
	],
};
