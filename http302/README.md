# 测试浏览器对301/302重定向Response的缓存情况。

运行：
```
node server.js
```

测试环境：Chrome 67
得出结论基本如下：
* 假设`urlA`重定向到`urlB`，即使是301永久重定向，其在浏览器的缓存时间也会受到Response Header中`Cache-control: max-age=x`的影响，缓存过期后，访问`urlA`时将会再次发送请求到服务器，而不是取缓存直接转向`urlB`。