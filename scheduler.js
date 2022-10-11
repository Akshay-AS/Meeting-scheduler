class Employee{
    constructor(name,role){
        this.name=name;
        this.role=role;
    }
}

var ResponsibilityLIst={
    S:"Scrum",
    G:"Grooming",
    A:"Architecture Design",
    U:"UX Design",
    P:"payroll-meeting",
    F:"Fun Activities",
    SA:"Security Analysis"
}
const m=ResponsibilityLIst;

// const roleresp={
//     SDE1:m.S,
//     SDE2:[m.S,m.G],
//     SDE3:[m.S,m.G,m.A],
//     PO:[m.G,m.U],
//     HR:[m.P,m.F],
//     TOPS:[m.S,m.G,m.SA]
// }

class Role{
    constructor(x,y){
        this.role=x;
        this.resps=y;
    }
}

var RoleList=[new Role("SDE1",[m.S]), new Role("SDE2",[m.S,m.G]),
new Role("SDE3",[m.S,m.G,m.A]), new Role("PO",[m.G,m.U]),
new Role("HR",[m.P,m.F]),new Role("TOPS",[m.S,m.G,m.SA])]

var EmployeeList=[new Employee("Zack",RoleList[5]),
new Employee("Pooja",RoleList[4]), new Employee("Athila",RoleList[3]),
new Employee("Sabari",RoleList[2]), new Employee("Azhar",RoleList[1]),
new Employee("Akshay",RoleList[0]), new Employee("Sharron",RoleList[1]),
new Employee("Fawaz",RoleList[3]), new Employee("Aysha",RoleList[0]),
new Employee("Arun",RoleList[4])];

console.log(EmployeeList);
console.log(RoleList);

function Validation(){
    let emp1=document.getElementById("emp1").value;
    let emp2=document.getElementById("emp2").value;
    if(emp1==emp2){
        alert("Select different employees");
    }

}

function EmployDropDown(){
    let emplist="";
    EmployeeList.forEach(e=>{
        emplist+=`<option value=${e.name}>${e.name}</option>`;
    })
    document.getElementById("emp1").innerHTML=emplist;
    document.getElementById("emp2").innerHTML=emplist;
    
}
EmployDropDown();
RespDropDown();


function RespDropDown(){
    let resplist="";
    for(let i in ResponsibilityLIst)
    {
        resplist+=`<option value=${i}>${ResponsibilityLIst[i]}</option>`;
    }
    document.getElementById("meeting").innerHTML=resplist;
}

function Submit(){
    Validation();
    let x=0;
    let y=0;
    let emp1=document.getElementById("emp1").value;
    let emp2=document.getElementById("emp2").value;
    let m=document.getElementById("meeting").value;
    meet=ResponsibilityLIst[m];

    e1=new Employee();
    e2=new Employee();

    for(let i in EmployeeList)
    {

        if(EmployeeList[i].name==emp1)
        {
            e1=EmployeeList[i];
        }
        if(EmployeeList[i].name==emp2)
        {
            e2=EmployeeList[i];
        }
    }
    r=e1.role.resps;
    console.log(r);

    for(let i in r)
    {
        if(r[i]==meet){
            x=1;
        }
    }
    
    z=e2.role.resps;
    console.log(z);
    for(let i in z)
    {

        if(z[i]==meet){
            y=1;
        }
    }

    if(x==1 && y==1)
    {
        document.getElementById("msg").innerHTML=`${meet} meeting can be scheduled between ${e1.name} and ${e2.name}`;
    }
    else if(x==1)
    {
        document.getElementById("msg").innerHTML=`"${e2.name} cannot enter ${meet} meeting", "${e2.name}'s role does not have the following meeting."`;
    }
    else if(y==1)
    {
        document.getElementById("msg").innerHTML=`"${e1.name} cannot enter ${meet} meeting", "${e1.name}'s role does not have the following meeting."`;
    }

}

