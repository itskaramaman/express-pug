const express =  require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send("<h1>Hello Pug</h1>");
});
app.listen(3000, ()=>console.log("Server running on port"));
