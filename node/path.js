// mac os inspired from linus usmei forwarded slashes use hote hai 
// lekin windows backward slash use hota hai 
// so to make it platform independed nodejs has a path module as well 

let path = require("path");

let ext = path.extname(path.join(__dirname,"abc.js"));
let name = path.basename(__dirname);
// __dirname
// __filename
path