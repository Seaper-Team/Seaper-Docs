# 是否初始化用户系统

<div class="api-info">
    <span class="get method-block">GET</span><b>/api/user/init</b><br>
    <p>查看目前用户系统是否被初始化</p>
</div>

- :key: 权限: **无**

## 请求

无

## 响应

- :ballot_box: 响应格式: **json**

### 响应参数

| 参数名 | 类型     | 简介         |
| :---: | :-----: | :----------: |
| -     | boolean | 是否已经初始化 |

### 响应示例

``` json
{
    "data": true
}
```