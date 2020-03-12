
const path = require('path')
const fs = require('fs')
const htmlPlugin = require('html-webpack-plugin')
const srcRoot = path.resolve(__dirname, './src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'page')
const mainFile = 'index.js';
function fileEntry() {
      let entryMap = {}
      fs.readdirSync(pageDir).forEach((f) => {
            let fullName = path.resolve(pageDir, f)
            let stat = fs.statSync(fullName)
            let fileName = path.resolve(fullName, mainFile)
            if (stat.isDirectory() && fs.existsSync(fileName)) {
                  entryMap[f] = fileName;
            }
      })
      return entryMap
}
function gethtmlArray(entryMap) {
      let htmlArray = [];
      Object.keys(entryMap).forEach(k => {
            let fullname = path.resolve(pageDir, k)
            console.log(fullname)
            let filename = path.resolve(fullname, k + '.html')
            console.log(filename)
            if (fs.existsSync(filename)) {
                  htmlArray.push(new htmlPlugin({
                        filename: k + '.html',
                        template: filename,
                        chunks: [k]
                  }))
            }
      })
      console.log(htmlArray)
      return htmlArray

}
const entryMap = fileEntry()
const htmlArray = gethtmlArray(entryMap)
module.exports = {
      entry: entryMap,
      mode: 'development',
      devServer: {
            contentBase: devPath
      },
      output: {
            path: devPath,
            filename: '[name].min.js'
      },
      module: {
            rules: [
                  {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                        include: srcRoot
                  },
                  {
                        test: /\.scss$/,
                        use: ['style-laoder', 'css-loader', 'sass-loader'],
                        include: srcRoot
                  },
                  {
                        test: /\.(jpg|png|jpeg)$/,
                        use: 'url-loader?limit=8192',
                        include: srcRoot
                  },
                  {
                        test: /\.(js|jsx)$/,
                        use: [
                              {
                                    loader: 'babel-loader'
                              }
                        ],
                        include: srcRoot
                  }
            ]
      },
      plugins: [

      ].concat(htmlArray)
}