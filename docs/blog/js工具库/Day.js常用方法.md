---
title: Day.js常用方法
createTime: 2024/12/28 23:44:55
permalink: /article/hiahv34a/
tags:
    - js
---

# dayjs时间单位及缩写

|单位	|缩写	|描述|
|-|-|-|
|week	|w|周|
|day	|d|星期(星期日0，星期六6)|
|month	|M|月份(0-11)|
|year	|y	|年|
|hour	|h|小时|
|minute	|m	|分钟|
|second	|s|秒|
|millisecond|ms|毫秒|
		
	
# 一、初始化日期 / 时间
```js
dayjs().format('YYYY-MM-DD');		// 初始化日期
dayjs().format('YYYY-MM-DD HH:mm:ss');  // 初始化日期时间
```
# 二、格式化日期 / 时间
```js
dayjs(date).format('YYYY-MM-DD');	   // 初始化日期
dayjs(date).format('YYYY-MM-DD HH:mm:ss'); // 初始化日期时间

```

# 三、加减日期时间
```js
dayjs().add(7, 'day').format('YYYY-MM-DD');   // 当前日期加上7天
dayjs().add(1, 'month').format('YYYY-MM-DD');   // 当前日期加上一月
dayjs().add(1, 'year').format('YYYY-MM-DD');   // 当前日期加上一年

dayjs().subtract(1, 'day').format('YYYY-MM-DD');   // 当前日期减去1天
dayjs().subtract(1, 'month').format('YYYY-MM-DD');   // 当前日期减去1月
dayjs().subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss');   // 当前时间减去2小时

```
# 四、获取某月某年的第一天/最后一天
```js
dayjs().startOf('month').format('YYYY-MM-DD') // 当前月的第一天
dayjs().startOf('year').format('YYYY-MM-DD')  // 当前年的第一天

dayjs().endOf('month').format('YYYY-MM-DD')  // 当前月的最后一天
dayjs().endOf('year').format('YYYY-MM-DD')   // 当前年的最后一天
```
# 五、获取两个日期之间的天数的差值
```js
dayjs('2023-05-01').diff('2024-10-01', 'day')
```
