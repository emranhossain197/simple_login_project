
// let variable = "Hello I'm Emran Hossain";
// console.log(variable.slice(10, 23));
// let padStringMethod = 'Hello'; 
// // console.log(padStringMethod.padStart(5, "Hello"));
// let result = padStringMethod.padStart( 11, "Hello ");
// console.log(result);

// let massege = confirm("Are You Bangladeshi ?");
// console.log(massege);

// if(massege == true){
//    document.getElementById('demo').innerHTML= "How to Flying live in Bangladesh !";

// }else if(massege == false){
//     document.getElementById('demo').innerHTML = "How to Like in Bangladesh !"
// }


// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function miniMaxSum(arr) {
//     console.log("Hello sodium");
//    for(let i = arr; i > arr; i++){
//        console.log(i);
//    }

// }
//  miniMaxSum([1,3,5,7,9]);

//  let arr = [1,3,5,7,9];
//  for(let i= arr; i > arr; i++){
//      console.log('this is a i variable value : ');
//  };
//  for (let i = 0; i < array.length; i++) {
//      const element = array[i];

//  }


// function main() {

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
// let str = prompt('Please Enter Lover Name  !').toUpperCase();
//  if(str === "FARIYA" ){
//      document.querySelector('#demo').innerHTML = "Jowel Love you Fariya ";
//      document.getElementById('images').src = 'https://cdn.pixabay.com/photo/2018/08/03/04/36/couple-3581038_960_720.jpg'
//  }else if(str === "JOWEL" ){
//     document.querySelector('#demo').innerHTML = "Fariya Love you jowel ";
//     document.getElementById('images').src = 'https://www.unigreet.com/wp-content/uploads/2020/02/Couple-love-dp.jpg'
//  }else{
//      document.querySelector('#demo').innerHTML = 'not My Love You ';
//      document.getElementById('images').src = "https://image.shutterstock.com/image-vector/warning-sign-no-love-vector-260nw-1670141176.jpg"

//  }

// function sayHello(name){
//     return "Hello " +  name;
// }

// let result = sayHello;
// let str = result("Emran Hossain");

// console.log("Variable is Function : " + str);

// // Array 

// let arr = [1, 2, 5, 4];
// arr.push(str);
// console.log( "Array is Function :"+ arr); 
// let base1 = prompt('Please Enter The number');
// if(isNaN(base1)){
//     alert('Please Enter the valid Number !')
// }else{
//     var arr1 = base1.split('');

// }
// let array = Number(arr1.slice(0, 1));
// let array1 = Number(arr.slice(2,3));

// function base (b){
//     return function(n){
//         var result = 1;
//         for( let i = 0; i< b; i++){
//             result *= n;
//         }
//         return result;
//     }
// }
// let power = base(array)(array1);
// console.log("Root Number : " + power);
// var basepower = power(10);
// console.log(basepower);

// function add(a,b){
//     function sum(){
//         return a +b;
//     }
//     function sub(){
//         return a - b;
//     }
//     function maltipol(){
//         return a * b;

//     }
//     function div(){
//         return a / b;
//     }

//     //  return 'function is add : ' + sum() + " and " + " function is Sub : " + sub() + " and function is a Maltipol :" + maltipol() + " and function is a div : " + div();   
//     return sum() + sub() + maltipol() + div();
// }

// let result = add(15, 5);
// console.log(result);

// function names (firstName, lastName, gender){
//     var output;

//     if(gender === "Male"){
//         output = "Mr " + firstName + " " + lastName;
//     }else if(gender === "female"){
//         output = "Ms " + firstName + " " + lastName;
//     }
//     return output;

// }

// let fullName = names("Mohammed", "Emran Hossain", "female");
// console.log(fullName);

// function samthing(num){
//   return num.map(function(x){ return parseInt(x, 0)}).reduce((a, b)=> a + b);
// }
// let allResult = samthing([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, "10", 10]);
// console.log(allResult);

// let arr = [4, 1, 0, 3, 5, 8];
// function samething(a, e){
//  console.log(`Element of a : ${a} and index of : ${e}`);
// }
// arr.forEach(samething);

// function anything(){
//   return function(name){
//     return 'Welcame to '+ name;
//   }
// }

// let n = anything();
// let m = n('Emran Hossain');
// let input = prompt('Please Enter Your Name !');
// let x = n(input);
// console.log('is a prompt value : ' + x);
// console.log(m);

let userName = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementById('login');

let person = {
  "userName": "emran197",
  "password": "sodium197",
  "personal": {
    "name": "Emran Hossain",
    "live": "Brahmanbaria",
    "country": "Bangladesh",
    "email": "sodium197@gmail.com"
  }

};

function eventbutton() {
  if (userName.value === person.userName && password.value === person.password) {
    document.getElementById('valid').innerHTML = "Successful Login ";
    document.getElementById('valid').style.backgroundColor = 'DodgerBlue';
    document.getElementById('valid').style.padding = '10px';
    console.log(`Person Name is a ${person.personal.name}`);
    console.log(`Live in ${person.personal.live}`);
    console.log(`My Country is ${person.personal.country}`);
    console.log(`E-mail is : ${person.personal.email}`);
    console.log("Password is valid");
  } else {
    document.getElementById('valid').innerHTML = "Password is not valid ";
    document.getElementById('valid').style.backgroundColor = 'red';
    document.getElementById('valid').style.padding = '10px';

    console.log('password is not valid !');
  }
}

button.addEventListener('click', eventbutton);

// function hello(name) {
//     print(name);
//     print('Something Else');
// }

// function print(args) {
//     console.log(args);
// }


// hello('Twinkle Cats');

// function hello(name, print) {
//     print(name);
// }

// hello('HM Nayem', print)

// function print(args) {
//     console.log(args);
// }

// hello('HM Nayem', function(name){
//     console.log('Hello ' + name);  
// });

// hello('HM Nayem', function(name) {
//     console.log('Hi, How are you ' + name + '?');
// })

// hello('Twinkle Cats', function(name) {
//     console.log('Length of ' + name + ' is = ' +  name.length );
// })

// var me = {
//     name: 'HM Nayem',
//     age: 16,
//     email: 'hasan.m.nayem@gmail.com'
// }

// function printMySelf(person, callback) {
//     console.log('Person: ' + person.name + ' (' + person.age + ')');
//     if (person.age >= 18) {
//         callback(person.email);
//     } else {
//         console.log('You are too little...');
//     }
// }

// printMySelf(me, function(email){
//     console.log('Email sent to ' + email);
// });

// function print(data, callback1, callback2) {
//   console.log('Original Data: ' + data);
//   callback1(data);
//   callback2(data);
// }

// print('Twinkle Cats is Awesome Channel for Beginners', function(data){
//   var data = data.toUpperCase();
//   console.log('Uppercase: ' + data);

// }, function(data){
//   var data = data.toLowerCase();
//   console.log('Uppercase: ' + data);
//   console.log('Length: ' + data.length);

// });


// function anything(name){
//   print(name);
// }

// function print(name){
//   console.log('Hello ' + name);
// }

// anything('Emran Hossain ')

// var me = {
//   name: "Emran Hossain",
//   age: 22,
//   email: "sodium197@gmail.com"
// }

// function printMySelf(parson, callback){
//   console.log(`person : ${parson.name} (${parson.age})`);
//   if(parson.age >= 18){
//     callback(parson.email)
//   }else{
//     alert('ar your lettle ....')
//   }
// }

// printMySelf(me, function(email){
//   console.log(`send E-mail : ${email} `);


// });

// function greeting(msg){
//   return function (name){
//     console.log(msg + " " + name);
//   }
// }

// let hello = greeting("Good Mornning ")
// let sey = greeting('Hello ')
// hello("Emran Hossain")
// sey('Emran Hossain')
// let array2 = [1];
// let num = array2.reduce((a, b)=> Math.max(a, b));
// let num1= array2.reduce((a, b)=> Math.min(a, b))
// console.log('is the min ' + num1);
// console.log("is the Max " + num);


// let variable = 3;

// for (let i= variable; i <= variable*2; i++){
//   console.log(i);
// }

// function numbers(n) {
//   for (let i = n; i <n*2; i+= 2) {
//     console.log(i);
//   }
// }

// console.log(numbers(3));

// let num = [12, 85, 2, 42, 25, 36 , 5]
// num.sort(function(a, b){
//   return b - a
// })
// console.log(num);
let people = [
  {name : 'Emran Hossain', age: 15, country: 'Bangladesh'},
  {name : 'Rahul', age: 16, country: 'Bangladesh'},
  {name: 'Rahim', age: 15, country: 'Bangladesh'},
  {name: 'Amran ', age: 17, country: 'Bangladesh'}
]

let result1 = prompt('Enter the your age ');
people.map(result => {
  console.log(result.age == result1);
})
// let sortName = people.sort(function(a, b){
//   if(a.name > b.name){
//     return 1;
//   }else if(a.name < b.name){
//     return -1;
//   }else{
//     return 0;
//   }
// })
// console.table(sortName);

// let sortAge = people.sort((a, b)=> a.age - b.age)
// console.table( sortAge);












