### 个人博客服务端

#### 路由设计

|   路径          | 方法  | get参数 |        post 参数           |       备注       |
|:--------------:| :---:| :------:| :---------------------:   | :---------------|
| /home          | get  |  page   |                           |   渲染首页页面     |
| //home/detail  | get  |  id     |                           |  渲染阅读更多页面  |
|  /tag/classify | get  |  tag    |                           |  渲染标签分类页     |
|  /all          | get  |         |                           |  渲染后台数据管理页 |
|  /upload       |      |         | title,abstract,tag,file   |  处理上传数据页面 |


#### key.js 私密配置
- dbkey 数据库连接参数