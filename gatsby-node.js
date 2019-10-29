/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * imagemin-webp docs: https://github.com/imagemin/imagemin-webp
 */

// You can delete this file if you're not using it

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const glob = require("glob");
const ImageminWebP = require("imagemin-webp");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");

const publicPath = path.join(__dirname, "public");

exports.onPostBuild = () => new Promise((resolve, reject) => {
    try {
        const options = { nodir: true };
        const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css|*.svg)`, options);
        gzippable.forEach((file) => {
            const content = fs.readFileSync(file);
            const zipped = zlib.gzipSync(content);
            fs.writeFileSync(`${file}.gz`, zipped);
        });
    } catch (e) {
        reject(new Error("onPostBuild: Could not compress the files"));
    } resolve();
});

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: "./public/static/aspect-ratio-images/**/**",
                to: `${publicPath}/static/aspect-ratio-images/webp/[name].webp`,
            }]),
            new ImageminPlugin({
                plugins: [ImageminWebP({ quality: 50 })],
            }),
        ],
    });
};
