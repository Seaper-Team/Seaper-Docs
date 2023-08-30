# 初始化国际化

<div class="api-info">
    <span class="post method-block">POST</span><b>/api/lang/init</b><br>
    <p>初始化整个国际化系统，设置默认语言</p>
</div>

- :key: 权限: **无**

## 请求

- :ballot_box: 请求格式: **application/json**
- :rocket: 请求位置: **Body**

### 请求参数

| 参数名 | 类型   | 简介     | 是否必须 |
| :---: | :----: | :-----: | :----: |
| lang  | string | 语言代码 | 是      |

### 请求示例

``` json
{
    "lang": "zh_CN"
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