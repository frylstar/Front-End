# FAQ

## FormData

**`FormData`** 接口提供了一种表示表单数据的键值对 `key/value` 的构造方式，并且可以轻松的将数据通过[`XMLHttpRequest.send()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send) 方法发送出去，本接口和此方法都相当简单直接。如果送出时的编码类型被设为 `"multipart/form-data"`，它会使用和表单一样的格式。

如果你想构建一个简单的`GET`请求，并且通过[`<form>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)的形式带有查询参数，可以将它直接传递给[`URLSearchParams`](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)。

**实现了 `FormData` 接口的对象可以直接在[`for...of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)结构中使用，而不需要调用[`entries()`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/entries) : `for (var p of myFormData)` 的作用和 `for (var p of myFormData.entries())` 是相同的。**

[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData) 接口的`append()` 方法 会添加一个新值到 `FormData` 对象内的一个已存在的键中，如果键不存在则会添加该键。

[`FormData.set`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/set) 和 `append()` 的区别在于，如果指定的键已经存在， [`FormData.set`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/set) 会使用新值覆盖已有的值，而 `append()` 会把新值添加到已有值集合的后面。

`has()`方法会返回一个布尔值，表示该[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)对象是否含有某个key 。

[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData) 接口的 `delete()` 方法会从 `FormData` 对象中删除指定键，即 key，和它对应的值，即 value。

[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)的`get()方法用于返回FormData对象中和指定的键关联的第一个值，如果你想要返回和指定键关联的全部值，那么可以使用`[`getAll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/getAll)方法。

`getAll()`方法会返回该 [`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData) 对象指定 key 的所有值。

直接打印是看不到的。因为外界访问不到，你使用`append`方法后，对应的键值对就已经添加到表单里面了，你在控制台看到的是`FormData原型`，存储的数据没有以对象属性的方式体现。

```javascript
// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// 输出所有的 key
for (var key of formData.keys()) {
   console.log(key);
}

// Display the key/value pairs
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
// 执行结果
// key1, value1
// key2, value2

//显示值
for (var value of formData.values()) {
   console.log(value);
}
// 结果为
// value1
// value2
```



## 浏览器不能自动播放？

最好的证明浏览器不能自动播放声音的case就是qq音乐的这个弹出框，必须点击一下才可以播放。

**`HTMLMediaElement.play()`** 方法会尝试播放媒体。这个方法返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当媒体成功开始播放时被解决（resolved）。当播放因为任何原因失败时，这个 promise 被拒绝（rejected）。（详见MDN文档）

如果 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 被设置为不允许自动或脚本驱动的媒体播放，调用 `play()` 会导致返回的 promise 被立即以 `NotAllowedError` 拒绝。

```javascript
let myAuto = document.getElementById('myaudio')
const autoPromise = myAuto.play()
autoPromise.then(() => {
	// do something
}).catch(() => {
  // 打开弹框并提示由于您的浏览器设置，无法自动播放，请手动点击播放。
	this.allowVoiceModal = true 
})
```

> 率先搜到了这个stackoverflow 上的高分答案
>
> [https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome](https://link.zhihu.com/?target=https%3A//stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome)
>
> 无奈我试了第一种不work，第二种也不work。虽然内心嘀咕这么多人vote不应该不work啊，一看回答的时间，18年，可能chrome更新了policy答案失效了吧，就去搜了搜别的答案。
>
> [https://olafwempe.com/how-to-enable-audio-and-video-autoplay-with-sound-in-chrome-and-other-browsers-in-2019/](https://link.zhihu.com/?target=https%3A//olafwempe.com/how-to-enable-audio-and-video-autoplay-with-sound-in-chrome-and-other-browsers-in-2019/)
>
> 虽然是博客的时间是2019，虽然它的solution跟上边stackoverflow的方案二一样，但是我还是耐着性子读了读，上边有[https://olafwempe.com/biography/](https://link.zhihu.com/?target=https%3A//olafwempe.com/biography/)点开竟然真的能播放。it‘s amazing
>
> 但是我发现尽管点击该**链接进去可以播放**，但是进到了该页面刷新浏览器重新reload页面并不会自动播放，这点跟我们的需求不符。我们的原始需求是**希望轮询到返回值的状态异常时候主动发出声响。可能页面打开后一直放着，没有任何的交互。**
>
> 尽管都失败了，但是如果客户说我们这个应用就是要发声，“**我的浏览器，我为什么做不了主**“，很有道理。
>
> 在浏览器的设置里 chrome://settings/content/sound 默认都是屏蔽的，可以设置白名单，有趣的是[全球1000个最可信的视频网址可以默认自动播放](https://link.zhihu.com/?target=https%3A//blog.google/products/chrome/improving-autoplay-chrome/)，其他[设备浏览器设置](https://link.zhihu.com/?target=https%3A//beebom.com/how-disable-autoplay-videos-on-chrome-firefox-edge/)放在在这里。设置打开后，随你控制。
>
> [https://www.w3.org/TR/permissions-policy/#document-policies](https://link.zhihu.com/?target=https%3A//www.w3.org/TR/permissions-policy/%23document-policies) 这个网址上说可以申请权限，但是浏览器哪怕是谷歌高版本都是部分支持。（太坑了）



