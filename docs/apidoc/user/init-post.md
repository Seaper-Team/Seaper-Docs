# 初始化用户系统

<div class="api-info">
    <span class="post method-block">POST</span><b>/api/user/init</b><br>
    <p>只能运行一次，初始化用户系统，新建超级管理员账户</p>
</div>

- :key: 权限: **无**

## 请求

- :ballot_box: 请求格式: **application/json**
- :rocket: 请求位置: **Body**

### 请求参数

| 参数名    | 类型    | 简介     | 是否必须 |
| :------: | :----: | :------: | :----: |
| username | string | 用户名    | 是      |
| password | string | 密码(MD5) | 是      |

### 请求示例

``` json
{
    "username": "Admin",
    "password": "5d83hy2ejebd223443gebf"
}
```

## 响应

- :ballot_box: 响应格式: **json**

### 响应参数

| 参数名 | 类型   | 简介     |
| :---: | :----: | :-----: |
| -     | string | 应为 OK |

### 响应示例

``` json
{
    "data": "OK"
}
```