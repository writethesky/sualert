#sualert

sualert 是一个vue的弹窗插件，支持定义弹窗内部的内容选项等

## 依赖 
`vue`

## 使用步骤

### CommonJs 方式

##### javascript代码

```
import sualert from 'sualert';
Vue.use(sualert);
vm.$refs.two.show();
```
##### HTML代码

`<sualert ref="one" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二' }]" v-on:ok="ok"></sualert>`


#### 完整代码示例


##### javascript

```
import Vue from 'vue';
import sualert from 'sualert';
Vue.use(sualert);


var vm = new Vue({
  el: '#app',
  data: {},
    methods: {
        ok(items){
            console.log(items);
        }
    }
});

vm.$refs.two.show();
```
##### html

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <div  id="app">
            <sualert ref="one" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二' }]" v-on:ok="ok"></sualert>
            <sualert ref="two" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二', type: 'select', options: [{text: '哈哈', value: 1}]}]" v-on:ok="ok"></sualert>

        </div>
    </body>
</html>
```

### 传统方式

1.引入vue.min.js 文件

2.引入sualert.min.js 文件

3.在html中输入如下标签 `<sualert ref="one" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二' }]" v-on:ok="ok"></sualert>`

4.use 插件

#### 完整代码示例

```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
</head>
<body>
<div id="app">
    <sualert ref="one" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二' }]" v-on:ok="ok"></sualert> 
    <sualert ref="two" title="弹窗插件" :styles="{fontSize: '1em'}" :items="[{name: '选项一'},{name: '选项二', type: 'select', options: [{text: '哈哈', value: 1}]}]" v-on:ok="ok"></sualert>
</div>
<script type="text/javascript" src="vue.min.js"></script>
<script type="text/javascript" src="../dist/sualert.min.js"></script>
<script type="text/javascript">
    Vue.use(sualert.default);
    var vm = new Vue({
      el: '#app',
      data: {a: 111},
        methods: {
            ok(items){
                console.log(items);
            }
        }
    });
vm.$refs.one.show();
</script>
</body>
</html>
```

### 参数详解

|参数名|数据类型|说明|
|--|--|--|
|rel|string|标志|
|title|string|弹窗标题|
|styles|object|基础样式|
|items|array|弹窗内容项目|

#### style参数详解
|参数名|数据类型|默认|说明|
|--|--|--|--|
|fontSize|string|16px|基础字体大小。可以使用em、rem等单位，基础字体大小决定弹窗的大小，字号越大，弹窗越大|
|itemLeftWidth|string|5em|内容项左侧的长度|
|itemLeftTextWidth|string|4em|内容项左侧文字部分（不包括“：”）的长度|
|top|string|4em|弹窗距屏幕顶端的距离|
|display|string|none|弹窗默认显示隐藏，none：隐藏，block：显示，如果设置位none，可以通过js api 来使其显示|

#### items参数详解
|参数名|数据类型|说明|
|--|--|--|
|name|string|内容项名称|
|type|string|内容项类型，默认为 input文本输入框，select：select下拉框, password: 密码输入框|
|options|array|当type=select时，options为select的option选项配置|

#### options参数详解
|参数名|数据类型|说明|
|--|--|--|
|text|string|显示的文字|
|value|all|值|

### 事件详解
|事件名|触发时机|返回值|说明|
|--|--|--|--|
|ok|当用户点击 保存 按钮时|items|对象为完整的items数组，数组内的每个对象，增加了一个 value属性，该属性为用户输入的值、或选中的值|
|changed|当用户改变了item的值|index、items|index:为被改变的item在items中的索引，items:同上|





