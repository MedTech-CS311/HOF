// Higher order functions
// function add(a, b) {
//   return a + b;
// }

// function operation(f, x, y) {
//   return f(x, y);
// }

// console.log(
//   operation(
//     function (a, b) {
//       return a / b;
//     },
//     2,
//     3
//   )
// );

// function map(f, arr) {
//   for (let index = 0; index < arr.length; index++) {
//     arr[index] = f(arr[index]);
//   }
//   return arr;
// }
// function multiplyBy2(x) {
//   return x * 2;
// }
// console.log(map(multiplyBy2, [1, 2, 3, 4, 5]));

// function filter(arr, f) {
//   var array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (f(arr[i])) {
//       array.push(arr[i]);
//     }
//   }
//   return array;
// }
// console.log(
//   filter(["hello", "world", "how", "are"], function (element) {
//     return element.length > 3;
//   })
// );

// function reduce(arr, f, acc) {
//   for (let i = 0; i < arr.length; i++) {
//     acc = f(arr[i], acc);
//   }
//   return acc;
// }
// console.log(
//   reduce(
//     [1, 2],
//     function (a, b) {
//       return a + b;
//     },
//     0
//   )
// );
// console.log(
//   reduce(
//     [1, 2],
//     function (a, b) {
//       return a * b;
//     },
//     1
//   )
// );

// function filter(context, f, init) {
// 	for (let key in context) {
// 		if(Array.isArray(context) && f(context[key])){
// 			init.push(context[key])
// 		}else if(f(context[key])){
// 			init[key] = context[key]
// 		}
// 	}
// 	return init;
// }

// setInterval(function () {
// 	console.log("hello")
// }, 2000);
// setTimeout(function() {
// 	console.log('hello later');
// }, 3000);

var obj = {
	value: 10,
	output: function () {
		setTimeout(() => {
			console.log(this.value);
		}, 3000)
	}
}
obj.output();