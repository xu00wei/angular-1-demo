这是一个angular 1的demo
==

## 目录结构如下

<pre>
.
| - - - - html
|               |- - - - template
|               |               |- - - - home        // home.html里嵌套的页面组件
|               |               |               |- - - - xxx.html
|               |
|               |- - - - xxx.html        // 路由中对应的展示页面
|               |__ __ home.html
|
|
|
| - - - - static
|               |- - - - css
|               |          |- - - - module      // 其它地方引用的css
|               |          |- - - - src             // 对应sass生成的css
|               |          |__ __ xxx.min.css      // 合并src里的css
|               |
|               |- - - - js
|               |         |- - - - module   // 其它来源的js插件
|               |         |              |- - - - angular.min.js
|               |         |              |- - - - angular-ui-router.min.js
|               |         |              |__ __ xxx.min.js
|               |         |
|               |         |- - - - src   // 各个页面的js
|               |         |           |- - - - common   //共用的组件
|               |         |           |                |- - - - app.js	// 路由设置
|               |         |           |                |__ __ xxx.js
|               |         |           | 
|               |         |           |- - - - controller
|               |         |           |- - - - directive
|               |         |           |- - - - filter
|               |         |           |__ __ service
|               |         |
|               |         |- - - - debug   // 合并了src文件夹的js,用于调试
|               |         |            |- - - - common.js
|               |         |            |- - - - controller.js
|               |         |            |- - - - service.js
|               |         |            |- - - - directive.js
|               |         |            |__ __ filter.js
|               |         |
|               |         |__ __ xxx.min.js  // js压缩文件
|               |         
|               |- - - - imgs    
|               |- - - - sass
|               |- - - - tasks                      // gulp分发管理
|               |              |- - - - css.js       // gulp对css的管理
|               |              |- - - - sass.js     // gulp对sass的管理
|               |              |__ __ script.js   //gulp对js的管理
|               |
|               |- - - - node_modules     //gulp依赖包
|               |__ __ gulpfile.js       //gulp启动文件
|
| - - - - app.html             // 页面的入口文件
| - - - - README.md
| - - - - server.js               // 小型服务器启动 --> node server.js
</pre>

## 启用服务器
- 在有server.js的路径下, 执行 ```node server```命令, 即可启动端口为5000的服务
- 该服务能读取以当前路径为根路径的文件, 如果要查看angular路由, 因该以app.html作为启动入口, 输入```http://localhost:5000/app.html#/```即可.

## 启用gulp
- 在有gulpfile.js的路径下, 输用命令``` gulp ```即可
- gulp的各监听都分发在tasks中, 可自行修改