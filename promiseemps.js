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

function  createEmp(emp){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            emps.push(emp);  
            const error=true;      
            if(!error){
                resolve();
            }  else{
                reject('Condition not satisfied')
            }  
        },2000)
    })
}
//when you use then predefined that means its success
// if you are using catch that mean its failure
createEmp({eno:113,ename:'Harsh' }).then(getEmps).catch(console.log('Exception'));