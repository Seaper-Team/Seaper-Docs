# 获取语言列表

<div class="api-info">
    <span class="get method-block">GET</span><b>/api/lang/list</b><br>
    <p>获取 Seaper 所有已加载的语言信息，用于前端获取语言列表</p>
</div>

- :key: 权限: **无**

## 请求

无

## 响应

- :ballot_box: 响应格式: **json**

### 响应参数

| 参数名    | 类型    | 简介    |
| :------: | :----: | :-----: |
| -        | array[object]  | 语言列表 |
| -[].code | string | 语言代码 |
| -[].name | string | 语言名称 |

### 响应示例

``` json
{
    "data": [
        {
            "code": "zh_CN",
            "name": "Seaper 语言 - 简体中文"
        },
    ]
}
```