### 这是什么？

这是[duty-machine仓库](https://github.com/duty-machine/duty-machine)所使用的匿名表单，用来在线提交需要抓取的链接。

### 这个表单如何保证提交者的匿名性？

这个表单使用[vercel](https://vercel.com/)部署，并且已公开部署记录，因此可以看到正在运行的源码。在最新的commit下可以找到vercel机器人的评论，标注了已经被部署的版本。

### 如何部署？

1. fork
2. 在 https://vercel.com/ 注册账号，并添加一个github integration。
3. 在vercel的配置里添加两个环境变量：
```
TOKEN: xxxxxxxx #你的github api token，需要有repo权限
REPO: duty-machine/duty-machine # fork后的repo名
```
4. 在vercel的build histories里点击redeploy，使配置的环境变量生效。如果不能触发部署，可以尝试添加一个commit来触发部署。
