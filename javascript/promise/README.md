# Javascript中的Promise

## 释义

词语本意：许诺；允诺；（有）可能

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。

* 按照用途来解释
    - 主要用于异步计算
    - 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
    - 可以在对象之间传递和操作Promise，帮助我们处理队列

## Promise解决什么问题？

### Javascript中包含了大量的异步操作

在那个网络还不是很发达的年代，所有的前后台校验工作都需要提交给后台去完成，一旦用户填写的表单有问题，往往意味着重新填写全部表单的结果，从而导致大量的用户流失。为了改进这个用户的体验，便产生的Javascript。

可以说，Javascript这门语言就是为检查表单而生。

创造它的首要目标就是操作DOM，能够方便的从表单中读取数据，能够提示用户哪儿填写有问题，所以Javascript是一门UI语言，而UI语言造成界面冻结是大忌，所以Javascript中很多操作都是异步的。


### 同步操作

假设用户去到一家餐厅吃饭，招呼服务员拿菜单点菜，然而服务员告知：对不起，我是**同步**服务员，我要服务完前面的这一桌客户才能招呼你。

作为用户，明明那桌客户已经吃上了菜，而你只是需要菜单这个简单的小动作，服务员却要等到别人完成一个大动作完成之后才能招呼你。

即：顺序的交付的工作 `1 2 3 4`，必须按照 `1 2 3 4`的顺序执行。

### 异步操作

将耗时很长的A交付的工作交给系统之后，就去继续做B交付的工作。等到系统完成前面的工作之后，再通过回调或者事件，继续做A剩下的工作。

从观察者的角度看来，AB工作的完成顺序和交付他们的时间顺序无关，所以叫做“异步”。

### 异步操作的常见语法

- 事件监听和相应

```
document.getElementById('start').addEventListener('click', start, false); // 当用户点击了id为start的元素，会触发start函数

function start () {
    // 响应事件，进行相应操作
}

// jQuery用`.on()`也是事件监听
$("#start").on('click', start);
```

- 回调

```
$.ajax('http://www.google.com.cn', {
    success: function(result) {
        // 这里就是成功的回调处理函数了
    }
});

// 或者页面加载完毕后回调
$(function() {
    // 这里也是回调处理函数
});
```

## Promise详解

```
new Promise(
    /* 执行器 executor */
    function (resole, reject) {
        resolve(); // 数据处理完成
        reject(); // 数据处理错误
    }
).then(function A() {
    // 成功，下一步
}, function B() {
    // 失败，做相应处理
});
```

Promise是一个代理对象，它和原先要军行的操作并无关系。它通过引入一个回调，避免更多的回调。

### Promise的3种状态

- `pending` [待定] 初始化状态
- `fufilled` [实现] 操作成功
- `rejected` [被否决] 操作失败

当 promise 状态发生改变后，会触发`.then()`里的响应函数处理后续步骤。

Promise 状态一经改变，不会再变。

### 示例
#### 定时执行简单示例

```
console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then(value => {
        console.log( value + ' world');
    });
```

在控制台输出"here we go"的2秒后在输出"hello world"

#### 分两次顺序执行

```
console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
}).then( value => {
    console.log(value);
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('world');
        }, 2000);
    });
}).then(value => {
    console.log( value + ' world');
});
```
在控制台输出"here we go"的2秒后在输出"hello"，再过2秒后又会输出"world world"

#### 对已完成的Promise执行then

```
console.log('here we go');

let promise = new Promise( resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello world');
    }, 1000);
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    });
}, 3000);
```

在控制台输出"here we go"的1秒后在输出"the promise fulfilled"，再过2秒后又会输出"hello world"


### `.then()`

* `.then()` 接受两个函数作为参数，分别代表`fulfilled`和`rejected`
* `.then()`返回一个新的Promise示例，所以它可以链式调用
* 当前面的 Promise 状态改变时，`.then()`根据其最终状态，选择特定的响应函数执行
* 状态响应函数可以返回新的Promise或者其他值，如果返回新的Promise，那么下一级的`.then()`会在新的Promise状态改变之后执行；如果返回其他任何值，则会立刻执行下一级`.then()`


## Promise函数

### `Promise.all()`

批量执行，`Promise.all([p1, p2, p3, ...])`用于将多个Promise实例包装成一个新的Promise实例，返回的实例是普通的Promise；它接受一个数组作为参数，数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变。

当所有子Promise都完成，该Promise完成，返回值是全部值的数组；有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果。

### `Promise.resolve()`

返回一个`fulfilled`的Promise实例，或原始Promise实例。

* 参数为空，返回一个状态为fulfilled的Promise实例
* 参数是一个跟Promise无关的值，同上，不过fulfuilled响应函数会得到这个参数
* 参数为Promise实例，则返回该实例，不做任何修改
* 参数为thenable，立刻执行它的`.then()`

### `Promise.reject()`

返回一个rejected的Promise实例。

* 参数为空，返回一个状态为fulfilled的Promise实例
* 参数是一个跟Promise无关的值，同上，不过fulfuilled响应函数会得到这个参数
* 参数为Promise实例，则返回该实例，不做任何修改

### `Promise.rece()`

类似`Promise.all()`，区别在于它有任意一个完成就算完成。





