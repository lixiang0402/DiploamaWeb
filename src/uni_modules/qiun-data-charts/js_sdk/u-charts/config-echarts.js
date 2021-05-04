/*
 * uCharts®
 * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
 * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */

// 通用配置项

// 主题颜色配置：如每个图表类型需要不同主题，请在对应图表类型上更改color属性
const color = ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'];

module.exports = {
	"type": ["pie", "ring", "rose", "funnel", "line", "column", "area", "radar", "gauge","candle"],
	"categories": ["line", "column", "area", "radar", "gauge", "candle"],
	"instance": {},
	"option": {},
  //以上数据请勿改动
  //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
  "formatter":{},
	"column": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'axis'
		},
		"grid": {
			"top": 30,
			"bottom": 50,
			"right": 15,
			"left": 30
		},
		"legend": {
			"bottom": 'left',
		},
		"toolbox": {
			"show": false,
		},
		"xAxis": {
			"type": 'category',
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
			"boundaryGap": true,
			"data": []
		},
		"yAxis": {
			"type": 'value',
			"axisTick": {
				"show": false,
			},
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
		},
		"seriesTemplate": {
			"name": '',
			"type": 'bar',
			"data": [],
			"barwidth": 20,
			"label": {
				"show": true,
        "color": "#666666",
				"position": 'top',
			},
		},
	},
	"line": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'axis'
		},
		"grid": {
			"top": 30,
			"bottom": 50,
			"right": 15,
			"left": 30
		},
		"legend": {
			"bottom": 'left',
		},
		"toolbox": {
			"show": false,
		},
		"xAxis": {
			"type": 'category',
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
			"boundaryGap": true,
			"data": []
		},
		"yAxis": {
			"type": 'value',
			"axisTick": {
				"show": false,
			},
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
		},
		"seriesTemplate": {
			"name": '',
			"type": 'line',
			"data": [],
			"barwidth": 20,
			"label": {
				"show": true,
        "color": "#666666",
				"position": 'top',
			},
		},
	},
	"area": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'axis'
		},
		"grid": {
			"top": 30,
			"bottom": 50,
			"right": 15,
			"left": 30
		},
		"legend": {
			"bottom": 'left',
		},
		"toolbox": {
			"show": false,
		},
		"xAxis": {
			"type": 'category',
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
			"boundaryGap": true,
			"data": []
		},
		"yAxis": {
			"type": 'value',
			"axisTick": {
				"show": false,
			},
			"axisLabel": {
				"color": '#666666'
			},
			"axisLine": {
				"lineStyle": {
					"color": '#CCCCCC'
				}
			},
		},
		"seriesTemplate": {
			"name": '',
			"type": 'line',
			"data": [],
			"areaStyle": {},
			"label": {
				"show": true,
        "color": "#666666",
				"position": 'top',
			},
		},
	},
	"pie": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'item'
		},
		"grid": {
			"top": 40,
			"bottom": 30,
			"right": 15,
			"left": 30
		},
		"legend": {
			"bottom": 'left',
		},
		"seriesTemplate": {
			"name": '',
			"type": 'pie',
			"data": [],
			"radius": '50%',
			"label": {
				"show": true,
        "color": "#666666",
				"position": 'top',
			},
		},
	},
	"ring": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'item'
		},
		"grid": {
			"top": 40,
			"bottom": 30,
			"right": 15,
			"left": 30
		},
		"legend": {
			"bottom": 'left',
		},
		"seriesTemplate": {
			"name": '',
			"type": 'pie',
			"data": [],
			"radius": ['40%', '70%'],
			"avoidLabelOverlap": false,
			"label": {
				"show": true,
        "color": "#666666",
				"position": 'top',
			},
			"labelLine": {
				"show": true
			},
		},
	},
	"rose": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'item'
		},
		"legend": {
			"top": 'bottom'
		},
		"seriesTemplate": {
			"name": '',
			"type": 'pie',
			"data": [],
			"radius": "55%",
			"center": ['50%', '50%'],
			"rosetype": 'area',
		},
	},
	"funnel": {
		"color": color,
		"title": {
			"text": ''
		},
		"tooltip": {
			"trigger": 'item',
			"formatter": "{b} : {c}%"
		},
		"legend": {
			"top": 'bottom'
		},
		"seriesTemplate": {
			"name": '',
			"type": 'funnel',
			"left": '10%',
			"top": 60,
			"bottom": 60,
			"width": '80%',
			"min": 0,
			"max": 100,
			"minSize": '0%',
			"maxSize": '100%',
			"sort": 'descending',
			"gap": 2,
			"label": {
				"show": true,
				"position": 'inside'
			},
			"labelLine": {
				"length": 10,
				"lineStyle": {
					"width": 1,
					"type": 'solid'
				}
			},
			"itemStyle": {
				"bordercolor": '#fff',
				"borderwidth": 1
			},
			"emphasis": {
				"label": {
					"fontSize": 20
				}
			},
			"data": [],
		},
	},
	"gauge": {
		"color": color,
		"tooltip": {
        "formatter": '{a} <br/>{b} : {c}%'
    },
		"seriesTemplate": {
			"name": '业务指标',
      "type": 'gauge',
      "detail": {"formatter": '{value}%'},
      "data": [{"value": 50, "name": '完成率'}]
		},
	},
	"candle": {
		"xAxis": {
			"data": []
		},
		"yAxis": {},
		"color": color,
		"title": {
			"text": ''
		},
		"dataZoom": [{
				"type": 'inside',
				"xAxisIndex": [0, 1],
				"start": 10,
				"end": 100
			},
			{
				"show": true,
				"xAxisIndex": [0, 1],
				"type": 'slider',
				"bottom": 10,
				"start": 10,
				"end": 100
			}
		],
		"seriesTemplate": {
			"name": '',
			"type": 'k',
			"data": [],
		},
	}
}
