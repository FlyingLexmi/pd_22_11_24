let personAge = 17;



if (personAge < 18) {
    console.log("Nepilngadīgs");
}else{
    console.log("Pilngadīgs");
}


let nameArray = ["Janis", "Anna", "Zaiga"];

for (i in nameArray){
    console.log(i);
}

function sayHello (name) {
    console.log(`labdien, + ${name}!`);
}


sayHello("Aleksandrs")