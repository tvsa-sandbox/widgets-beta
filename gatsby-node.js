/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
// const iltorb = require('iltorb');
const glob = require('glob');
const ImageminWebP = require('imagemin-webp');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.onPostBuild = () =>
  new Promise((resolve, reject) => {
    try {
      const publicPath = path.join(__dirname, 'public');
      const options = { nodir: true };
      const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css|*.svg)`, options);
      gzippable.forEach((file) => {
        const content = fs.readFileSync(file);
        const zipped = zlib.gzipSync(content);
        fs.writeFileSync(`${file}.gz`, zipped);

        // const brotlied = iltorb.compressSync(content);
        // fs.writeFileSync(`${file}.br`, brotlied);
        imagemin([`${publicPath}/static/*.{jpg,png}`], '`${publicPath}/static/aspect', {
		use: [
			imageminWebp({quality: 50})
		]
      });
    } catch (e) {
      reject(new Error('onPostBuild: Could not compress the files'));
    }

    resolve();
  });
