# cookie

<!-- 描述 START -->

提供便捷的 cookie 操作。

<!-- 描述 END -->
_ _ _

<!-- 目录 START -->

+ [用法](#用法)
+ [文档](#文档)
    + [API](#api)
        + [cookie](#cookiekeyvalueoptions)
+ [联系我们](#联系我们)

<!-- 目录 END -->

_ _ _


<!-- 用法 START -->

## 用法

```javascript
// 引用具体使用的方法
import cookie from 'js/cookie';

cookie('keyname');
```
<!-- 用法 END -->

_ _ _

<!-- 文档START -->
## 文档

### API

#### cookie(key, value, options)

对cookie进行操作，根据参数传递不同可实现设置/查询/删除cookie

参数：  
- key：`String` cookie的key   
- value：`String` cookie的value。有该参数时，为设值；无时，为取值。
- options：`Object` 可定制的一些cookie信息。可选。
	- expires：`Number` 过期时间，单位：天。默认：session cookie
	- path：`String` 该cookie在什么路径下有效。默认：`/`，即当前域名
	- domain：`String` 该cookie在什么域名下有效，默认：当前域名
	- secure：`Boolean` 是否启用安全传输，启用后，该cookie值只会https请求中传输。默认：`false`
	- raw：`Boolean` 是否原值存取，若为 `false`, 则进行URI编码。默认：`false`

``` javascript
import cookie from 'js/cookie';
let options = {
	raw: true,
};

cookie('keyname'); // get
cookie('keyname', null); // delete
cookie('keyname','keyvalue'); // set
cookie('keyname','keyvalue', options); // set with custom options

```
<!-- 文档END -->
_ _ _

<!-- 联系我 START -->

## 联系我

- Author : 胡渝苹
- QQ/微信     : 425910502

<!-- 联系我 END -->