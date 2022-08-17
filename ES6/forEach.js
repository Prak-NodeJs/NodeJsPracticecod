var v = [1,2,3,4,5];

// forEach method traves through all the element in the array in acccending order and function
// inside the forEach method applies to every element in the array 

//syntaxv
// array.forEach(function(currentvalue, indexnumber, arrayelemet))

v.forEach(function (value, index){
    console.log('value ' + value + ' is on index number ' + index);
});



// 2nd example 

var  images= [
     {height: 50 , weight :60},
     {height: 0 , weight :60},
]

var arrays =[];

images.forEach(function (image){

    arrays.push((image.height)*(image.weight));

})
arrays.forEach(function (value){
    console.log(value);
})