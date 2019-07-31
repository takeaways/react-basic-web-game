const path = require('path');
const webpack = require('webpack');

module.exports = {
  name:'NumberBaseBall-setting',
  mode:'development', //실서비스: production
  devtool:'eval', //빠르게 : production ==> hidden-source-map;
  resolve:{extensions:['.js','.jsx']},


  entry:{
    app:['./client'],
  },//입력

  module:{
    rules:[{
      test:/.jsx?/, //js or jsx 에 적용하겠다
      loader:'babel-loader', //바벨을 적용하겠다.
      options:{
        presets:[
          ['@babel/preset-env',{
            targets:{
              browsers:['> 5% in KR'],
            }
          }],
          '@babel/preset-react'
        ],
        plugins:[
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ]
      },
    }]
  },

  plugins:[
    new webpack.LoaderOptionsPlugin({debug:true}),
  ],

  output:{
    path:path.join(__dirname,'dist'),  //__dirname은 현제 폴더
    filename:'app.js',
  }, // 출력
}
