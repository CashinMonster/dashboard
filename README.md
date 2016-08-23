# dashboard
折线图，功能图
第三方（highCharts）

### 采用highcharts插件来实现dashboard，可以点击[这里](http://www.hcharts.cn/download)下载

+ 使用方法
```
1.引入jquery和highcharts的js文件
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>

	</head>
	<body>
		<div id="container" style="min-width:400px;height:400px"></div>
	</body>
		<script type="text/javascript" src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
		<script type="text/javascript">
			// js代码
		</script>
	</html>

2.编写js代码
```
以基础折线图为例

	$(function () {
	    $('#container').highcharts({
	    	<!-- 标题 -->
	        title: {
	            text: 'Monthly Average Temperature',
	            x: -20 //center
	        },
	        subtitle: {
	            text: 'Source: WorldClimate.com',
	            x: -20
	        },
	        <!-- x轴 -->
	        xAxis: {
	            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	        },
	        <!-- y轴 -->
	        yAxis: {
	            title: {
	                text: 'Temperature (°C)'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: 'Tokyo',
	            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	        }, {
	            name: 'New York',
	            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
	        }, {
	            name: 'Berlin',
	            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
	        }, {
	            name: 'London',
	            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	        }]
	    });
	});

###生成如下折线图

<img src="img/123.png" style="width:80%;margin-left: 10%;">
