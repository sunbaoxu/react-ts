This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

1、npm install -g create-react-app

2、npx create-react-app react-typescript-demo --typescript 

3、yarn eject

4、 rm -rm node_modules

5、cnpm i

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`

### Can't resolve 'react-router-dom'

cnpm i react-router-dom --save-dev

### 懒加载

cnpm i loadable-components --save-dev

###  scss全局变量
cnpm i sass-resources-loader --save-dev

webpack.config.js   447

.concat([
  {
    loader: "sass-resources-loader",
    options: {
      resources: path.join(__dirname, "../src/assets/css/${name}.scss")
    }
  }
])

###  爬虫限制  robots.txt

必须在根目录下，没有这个文件代表没有爬虫限制
https://www.robotstxt.org/robotstxt.html

### 取消map文件   -- 定位问题位置，生产不需要

根目录新建 .env.production 
GENERATE_SOURCEMAP= 'false'

###  区分环境
cnpm install --save-dev  dotenv-cli

dotenv -e .env.testA  node scripts/build.js




