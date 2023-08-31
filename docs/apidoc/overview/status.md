# 系统信息

<div class="api-info">
    <span class="get method-block">GET</span><b>/api/overview/status</b><br>
    <p>查看目前面板所在主机的系统信息及其运行数据</p>
</div>

- :key: 权限: **登录**

## 请求

无

## 响应

- :ballot_box: 响应格式: **json**

### 响应参数

| 参数名              | 类型    | 简介                |
| :----------------: | :----: | :-----------------: |
| -                  | object | 数据                |
| -.infomation       | object | 系统信息             |
| -.appUser          | object | 程序目前用户          |
| -.cpu              | number | CPU 占用            |
| -.ram              | number | RAM 占用            |
| -.loginSuccessTime | intger | 登录成功次数          |
| -.loginBadTime     | intger | 登录失败次数          |
| -.runTime          | intger | 程序启动的时间(时间戳) |
| -.apiReqTime       | intger | API 请求次数         |

### 响应示例

``` json
{
    "data": {
        "infomation": "Windows 11; amd64; 10.0; ",
        "appUser": "Admin",
        "cpu": 0.09,
        "ram": 0.94,
        "loginSuccessTime": 1,
        "loginBadTime": 0,
        "runTime": 18764893629,
        "apiReqTime": 5
    }
}
```