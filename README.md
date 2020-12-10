# vue-miniQQ————基于Vue2实现的仿手机QQ单页面应用

## 项目状态

已停止更新，仅供参考。初学者直接从 Vue3 开始学习即可。

## 动图预览

gif图好像被压缩的太多了，感兴趣的可以clone后查看。

**侧边栏与个人主页**

![侧边栏与个人主页](./static/images/gif/sidebar.gif)

**滑动组件的动画效果**

![滑动删除](./static/images/gif/swipe.gif)

**进入对话框**

![与聊天机器人进行对话](./static/images/gif/dialog.gif)

**对话框信息**

![搜索功能](./static/images/gif/search.gif)

**首页Tab切换**

![首页Tab切换](./static/images/gif/ui.gif)


***


## 技术栈
*  vue-cli
*  vue2
*  vue-router
*  vuex
*  axios
*  stylus
*  webpack2
*  muse-ui

### 目录

<pre>
.
├── README.md           
├── build                 // 构建服务和webpack配置,转发聊天机器人以及ajax获取用户数据相关内容
├── config                // 项目不同环境的配置
├── dist                  // 项目build目录
├── index.html            // 项目入口文件
├── package.json          // 项目配置文件
├── mockdata.json         // 项目模拟数据
├── src
│   ├── common            // 公用的css样式
│   ├── components        // 各种组件
│   ├── router            // 存放路由的文件夹
│   ├── vuex	            // 存放Vuex的相关
│   ├── muse-ui.config.js // muse-ui单组件加载配置
│   ├── App.Vue           // 模板文件入口
│   └── main.js           // Webpack 预编译入口
├── static                // css js 和图片资源
│   

</pre>

## 构建

``` bash
# 安装
npm install
# 运行（端口8888）
npm run dev
# 发布
npm run build
```

## 调试

* 桌面： `npm run dev` 后，打开***开发者工具*** `F12`，模拟手机预览 `Ctrl+Shift+M` (Chrome)
* 移动端： `npm run dev` 后，在cmd命令行中输入ipconfig（win）获取到局域网内ip地址后，生成二维码，然后进行测试（建议微信扫二维码）