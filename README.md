## 个人博客服务端

- 数据存储
文章：mongodb数据库
tag：静态配置

文章描述
```
{title:'',abstract:'',tagId:'tag1',content:''}
```
标签表的存储方式
```
{ id: "tag2", name: "算法" }
```
## api说明
### 获取文章
```
/api/articles  请求方法：GET ，
```
参数说明
- page,
- pageSize,
- tagId

### 获取文章详情
```
/api/article/detail  请求方法：GET
```
参数说明
- id 文章id

### 获取所有文件（可能被废弃）
```
/api/allArticles 请求方法：GET
```

### 获取所有标签
```
api/tags/all  请求方法：GET
```

### 文章编辑
```
/api/article/edit 请求方法：POST
```

### 文章上传
```
/api/article/upload 请求方法：POST
```
参数
- title 标题
- abstract 简介
- tag 标签
- content 内容     

### key.js 私密配置
- dbkey 数据库连接参数

### 迭代计划
1.支持用户验证  
2.tag 改用数据库，支持编辑 