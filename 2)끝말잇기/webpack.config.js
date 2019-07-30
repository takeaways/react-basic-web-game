const path = require('path');

module.exports = {
  name:'WordRelay-setting',
  mode:'development', //실서비스: production
  devtool:'eval', //빠르게
  resolve:{extensions:['.js','.jsx']},


  entry:{
    app:['./client'],
  },//입력

  module:{
    rules:[{
      test:/.jsx?/, //js or jsx 에 적용하겠다
      loader:'babel-loader', //바벨을 적용하겠다.
      options:{
        presets:['@babel/preset-env', '@babel/preset-react'],
        plugins:['@babel/plugin-proposal-class-properties']
      },
    }]
  },

  output:{
    path:path.join(__dirname,'dist'),  //__dirname은 현제 폴더
    filename:'app.js',
  }, // 출력
}
