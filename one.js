console.log('Welcome to JavaScript browser console')

var x = 11;
{
    const x = 12;
//What is he value of x here?    
}
//What is the value of x here?

function call(a,b){
    return a * b;
}
//ES6 Standard
//saran variable will become a function
let saran=function call(a,b){
    return a*b;
}

//arrow function
const saran=(a,b)=>{return a*b;}
//or even down to this single line:
const saran=(a,b)=>a*b;

const vehicle=["Mazarati","Bentley","Benz"];
for(let v of vehicle) {
    console.log(v);
}

const vans={name: 'Honda Odyssey'};
const suvs={name: 'Honda CRV'};
const cars={name: 'Honda Civic'};

const veh = new Map();
veh.set(vans,32000);
veh.set(suvs,44000);
veh.set(cars,20000);

console.log(veh);

//Array destructing in ES6 standard
//destructure to unpack values from an array to separate variables
//(breaking a complex data structure down into a small data structure)
let veggies=['carrot','eggplant','green pepper'];
let [first,second,third] = ['mushroom','chillies',...veggies,'cilantro','potato'];
console.log(first);
console.log(second);
console.log(third);

//Swap the variable
let name1 = 'Lee';
let name2 = 'Justin';

let temp = name1;
name1 = name2;
name2 = temp;
console.log(name1,name2);
//or you can do
[name2,name1] = [name1,name2];
console.log(name1,name2);

let testnum = [2,4,1,6,12,14,7];
//print only the values greater than 7
let arr7=testnum.filter((n)=>n>7);
console.log(arr7);

//reduce it to a single value
var reducetest = arr7.reduce((sum,elem)=>sum+elem);
console.log(reducetest); //return a single value

//call a predefined function
let obj1={eno:111};
let addToThis=function(a,b,c) {
    return this.eno+a;
}

console.log(addToThis.call(obj,1));

//apply a predefined function
let arr=[1,2,3];
let addToThis1=function(a,b,c) {
    return this.eno+a+b+c;
}

let add3=(addToThis1(obj1));
console.log(add3(1,2,3));

//callback function
const emps=[
    {eno:111,ename:'Justin' },
    {eno:112,ename:'Lee' }
]

function getEmps(){
    setTimeout(()=>{
        let output='';
        emps.forEach((emp,index)=>{
            output+=`<li>${emp.ename}</li>`;
        });
        document.body.innerHTML=output;
    },1000)
}

function  createEmp(emp,callback){
    setTimeout(()=>{
        emps.push(emp);
        callback();
    },2000)
}