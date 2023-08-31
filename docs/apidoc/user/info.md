# 获取登录用户信息

<div class="api-info">
    <span class="get method-block">GET</span><b>/api/user/info</b><br>
    <p>获取目前登录用户的用户信息</p>
</div>

- :key: 权限: **user.info**

## 请求

无

## 响应

- :ballot_box: 响应格式: **json**

### 响应参数

| 参数名          | 类型           | 简介           |
| :------------: | :-----------: | :------------: |
| -              | object        | 数据           |
| -.uuid         | uuid          | UUID           |
| -.userName     | string        | 用户名          |
| -.registerTime | intger        | 注册时间(时间戳) |
| -.permission   | array[string] | 用户权限        |

### 响应示例

``` json
{
    "data": {
        "uuid": "289a892d-58c7-4d18-a08c-3a915b5fbc21",
        "username": "Admin",
        "registerTime": 1688179221465,
        "permissions": [
            "*"
        ]
    }
}
```