/* let pen={
    type:'ballpoint',
    color:'black',
    cost:5
};
//objectname.propertyname
//obectname['propertyname']
console.log(pen.cost);
//example
let emily={
    age:16,
    shcool:'DPS',
    class:'10th std',
    subject:['Physics','Chemistry','Biolgy','Math']
};
console.log(emily.subject[1]); */
//05 november 2020
let student={
    first: 'Muttakin',
    last: "Ahamed",
    age:  22,
    info: function(){
        return this.first+" "+this.last;
    }
};
console.log(student.first);
student.age=23;
console.log(student.age);
console.log(student.info());