//filesystem
let FS = require("fs");
let buffer = FS.readFileSync("node/modules.js");
console.log("Binary data=>",buffer);
console.log("``````````````````````````````````````````````````````");
console.log(""+buffer);
// line 5 wala mei binary se string mei isiliye convert hua kyuki pehl string hai toh binary se string mei typecast hogaya 
// concatination ke karan
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><>");
console.log(buffer + "check kare string hoga ki binary");


// create
// agar file nahi hai toh create karega aur agar exist karti hai toh replace kardega sab kuch 
FS.writeFileSync("abc.txt","\nJai Mahakal");

//update
//agar file nahi hai toh create karega varna append karega sab kuch replace nahi karega 
FS.appendFileSync("abc.txt","\nJai sia ram");

// FS.mkdirSync()
