// object is just a group of keyValue pair.
// key : value(property)
// key : function(method)
let obj = {
    name: "Steve",
    lastName: "Rogers",
    address : {
        city : "Manhattan",
        state: "NY"
    },
    age : 35,
    isAvenger : true,
    movies : ["First Avenger", "Winter Soilder", "Civil War"],
    sayHi : function(){
        console.log("Jai Mahakal");
    }
};
delete obj.address
for(let key in obj){
    console.log(key,":",obj[key]);
}
console.log(obj.abc);
console.log(obj["xyz"]);
