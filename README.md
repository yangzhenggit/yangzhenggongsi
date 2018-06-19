# react-simple-o2o-demo

订单评价，文档参见[这里](./docs/README.md)

//set NODE_ENV=dev && webpack-dev-server --progress --colors
//_rd/s/q ./build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors
#
"start": "NODE_ENV=dev webpack-dev-server --progress --colors",
"mock": "node --harmony ./mock/server.js",
"build": "_rd/s/q ./build NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
