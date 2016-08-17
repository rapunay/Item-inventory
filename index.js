var express = require("express"),
	app = express();

app.set("port", 3000);
app.use(express.static(__dirname + "/public"));
 
app.listen(app.get("port"), function() {
	console.log("Initializing Item-inventory at port: 3000");
});
