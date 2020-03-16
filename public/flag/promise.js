let flag = false;
let Pro = new Promise((resolve, reject) => {
  if (flag) {
    resolve("成功");
  } else {
    reject("失败");
  }
});
Pro.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
/* 
  promise三种状态
    Pending 进行中  promise声明时为pending状态
    Fulfilled 已完成  调用执行了resolve
    Rejected 已拒绝  调用执行了reject
*/

/* 
  Promise.all([a,b,c])  所有promise都resolve或者有一个reject执行
  都resolve会返回一个按promise实例顺序的结果，不管这些promise的resove顺序

  promise实例数组一旦有一个reject， promise.all就会进入catch，并不会等待其他promise实例执行resolve或者reject, 
  但其他promise里的代码的console（event-loop）
*/

/* 
  Promise.race, 不会等待所有promise实例执行，只取决于第一个返回结果的promise实例的执行结果
*/
