/*var arr = ['hello', 'world'];
var arr2 = new Array(); // var arr2 = [];
var arr3 = new Array(7)// arr3 = []; arr3.length = 7;
var arr4 = new Array(1,23,4,5,6);// arr4 = [1,23,4,5,6];
arr[0]

*/
/*var arr = new Array(10); // arr.length = 10
for(var i = 0; i < arr.length; i++){
	arr[i] = new Array(10);
}
//arr[0] == arr 
for(var i = 0; i < arr.length; i++){
	for(var j = 0; j < arr.length; j++){
		arr[i][j] = 0;
	}
}

console.log(arr);
console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[3][1]);

for(var i = 0; i < arr.length; i++){
	for(var j = 0; j < arr.length; j++){
		document.write(arr[i][j]);
		if(i == j) break;
		
	}
	document.write('<br>')
}*/
/*var arr = [];
alert(typeof(arr)); // object*/
// var a = function(){}
/*var obj = {
	name: 'Java',
	sname: 'Script',
	someKey: 'someValue',
	showName: function(){
		alert('hello');
	}
}
obj.name2 = 2;
console.log(obj['name']);
console.log(obj.sname);
console.log(obj.name2);
console.log(obj);
document.write(obj);
obj.showName();
*/

// array methods


// split  > create array from string

// var str = '1,2,3,5';
/*var str = 'Hello&world&form&server';
var arr = str.split('&', 2);// return array 2 == arr.length
console.log(arr);
var str2 = 'asdgsdfgasdasfdsfsadfad';
console.log(str2.split(''));*/
// var arr, arr1;
//join > set separator for array elements
/*
arr = [1,2,3,4,5,6];
arr1 = arr.join('|');

// concat > concatonate arrays
arr = [1,2,3,4,5,6];
var arr2 = [11,12]
arr1 = arr.concat(7,8, [9,10], arr2);

//unshift - add at the begenning
arr = [1,2,3,4,5,6];
arr1 = arr.unshift(0); // return new arr lenght;

//push - add in the end
arr = [1,2,3,4,5,6];
arr1 = arr.push(7); // return new arr lenght;

//shift - delete first
arr = [1,2,3,4,5,6];
arr1 = arr.shift(); // return deleted element;

//pop 
arr = [1,2,3,4,5,6];
arr1 = arr.pop(); // return deleted element;

//splice(A,B) - delete form Aindex Bnumber of elements
arr = [1,2,3,4,5,6];
arr1 = arr.splice(0,2); // return cutted part;
//splice(A,B, C...) C - new elements to add
// arr2 = arr.splice(4,0,7,8) // insert p
// arr2 = arr.splice(-4,0,7,8) // insert p


//slice(A,B) - from Aindex to Bindex without Bindex
arr = [1,2,3,4,5,6];
arr1 = arr.slice(0,3); // return cutted part;
arr2 = arr.slice(1,3); // return cutted part;


console.log(arr);
console.log(arr1);
console.log(arr2);
document.write(arr + '<br>');
document.write(arr1 + '<br>');

*/


var array;

//forEach(elem,i,arr) - elem - currentElement, i - currentElem index, arr - array

/*array = [1,2,4,5,6,7];

array.forEach(function(elem, i, arr){
	console.log(elem + ' - elem');
	console.log(i + ' - index');
	console.log(arr + 'array')
});

//map(elem, i, arr) > use function and return new array
array = [1,2,4,5,6,7];

var resultArr = array.map(function(elem){
	return elem*2;
})
console.log(array);
console.log(resultArr);*/

// filter(elem, i, arr) > use to filter array

/*array = [1,2,4,5,6,7];

var resultArr = array.filter(function(elem){
	return elem > 4;
})
console.log(array);
console.log(resultArr);
*/

//reduce(accum, current, i , arr)

array = [1,2,4,5,6,7];

var resultArr = array.reduce(function(accum, current){return accum+current;})
console.log(array);
console.log(resultArr);


//reduceRight(accum, current, i , arr);