var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？');
  process.exit(1);
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url ;
  var queryString = '';
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) };
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个小可爱发请求过来啦！路径（带查询参数）为：' + pathWithQuery);

  if (path === '/'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(`
    <!DOCTYPE html>
    <head>
      <link rel="stylesheet" href="/x">
    </head>
    <body>
    <h1>欢迎小可爱</h1>
    <hr>
    <div>
    <p>送给小可爱一首叫《小可爱》的歌。《小可爱》是张志远作词、作曲，爱朵女孩演唱的一首歌。</p>
    <h3>歌曲歌词</h3>
    <p>我的小可爱 今天有没有乖</p>
    <p>我的小可爱 皇冠给你带</p>
    <p>你一笑起来 像鲜花儿盛开</p>
    <p>我的小可爱 你闪闪惹人爱</p>
    <p>你说我们喵星人 就是这么拽</p>
    <p>我的小可爱 虽然脾气有点坏</p>
    <p>只要有你在 寂寞被打败</p>
    <p>你就是是我的小可爱</p>
    <p>你的心我总猜不明白</p>
    <p>玩游戏输了不许耍赖</p>
    <p>乖乖到我到我怀里来</p>
    <p>你就是是我的小可爱</p>
    <p>时间啊可别过得太快</p>
    <p>我会用心来认真灌溉</p>
    <p>等你这朵这朵花儿开</p>
    <p>我的小可爱 今天有没有乖</p>
    <p>你的小脑袋 想法总奇奇怪怪</p>
    <p>我的小可爱 皇冠给你带</p>
    <p>你一笑起来 像鲜花儿盛开</p>
    <p>我的小可爱 你闪闪惹人爱</p>
    <p>你说我们喵星人 就是这么拽</p>
    <p>我的小可爱 虽然脾气有点坏</p>
    <p>只要有你在 寂寞被打败</p>
    <p>你就是是我的小可爱</p>
    <p>你的心我总猜不明白</p>
    <p>玩游戏输了不许耍赖</p>
    <p>乖乖到我到我怀里来</p>
    <p>你就是是我的小可爱</p>
    <p>时间啊可别过得太快</p>
    <p>我会用心来认真灌溉</p>
    <p>等你这朵这朵花儿开</p>
    <p>My sweet</p>
    <p>The only one that I need</p>
    <p>Forever's less than enough</p>
    <p>Imagine all that we'd be</p>
    <p>My head I think too much of</p>
    <p>Everything that you do</p>
    <p>Cause you're the only boy</p>
    <p>I Wanna be here with you</p>
    <p>你就是是我的小可爱</p>
    <p>你的心我总猜不明白</p>
    <p>玩游戏输了不许耍赖</p>
    <p>乖乖到我到我怀里来</p>
    <p>你就是是我的小可爱</p>
    <p>时间啊可别过得太快</p>
    <p>我会用心来认真灌溉</p>
    <p>等你这朵这朵花儿开</p>
    <p>你的小脑袋 想法总奇奇怪怪</p>
    </div>
    </body>
    `);
    response.end();
  }else if(path === '/x'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css;charset=utf-8');
    response.write(`body{color:red;}`);
    response.write(`p{color:grey;}`);
    response.write(`h3{color:green;}`);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(`你输入的路径不存在对应的内容`);
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port);
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port);

