const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./api-routes")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});
