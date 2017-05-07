// Below code about stores 5 different Employee objects in an array, Using for in loop & display in console.
var result = "";
var myObj = {
    "employees": [
        {"name" : "John", "age" : 30, "salary" : 40000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560037},
        {"name" : "Raj", "age" : 20, "salary" : 10000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560027 },
        {"name" : "Mack","age" : 40, "salary" : 43000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560001 },
        {"name" : "Aryan", "age" : 24, "salary" : 21000, "city" : "Chennai", "state" : "Tamilnadu", "pincode" : 55 },
        {"name" : "Venkataramana", "age" : 50, "salary" : 41000, "city" : "Chennai", "state" : "Tamilnadu", "pincode" : 120 }
    ]
}
for (var i in myObj.employees) {
    result += myObj.employees[i].name + "\n";
    result += myObj.employees[i].age + "\n";
    result += myObj.employees[i].salary + "\n";
    result += myObj.employees[i].city + "\n";
    result += myObj.employees[i].state + "\n";
    result += myObj.employees[i].pincode + "\n \n";
     
}
console.log(result);