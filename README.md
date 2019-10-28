### 个人博客服务端
数据存储在mongodb数据库中
所有文章在数据库中数据存储方式是：
```javascript
    [
        {title:'',abstract:'',tagId:'tag1',content:''},
        {title:'',abstract:'',tagId:'tag2',content:''},
        ...
    ]
```
标签表的存储方式
```javascript
    var tag_list = [
        {
                id: "tag1",
                name: "数据结构"
            },
            {
                id: "tag2",
                name: "算法"
            },
            {
                id: "tag3",
                name: "javascript"
            },
            {
                id: "tag4",
                name: "webpack"
            }
            ...
        
    ]
```
#### 路由设计


|   路径          | 方法  | get参数 |        post 参数           |       备注       |
|:--------------:| :---:| :------:| :---------------------:   | :---------------|
| /api/articles          | get  |  page,pageSize,tagId   |                           |   渲染首页页面     |
| api/article/detail  | get  |  id     |                           |  渲染阅读更多页面  |
|  /api/tags/all' | get  |      |                           |      渲染标签分类页     |




#### key.js 私密配置
- dbkey 数据库连接参数