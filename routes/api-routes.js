const path = require("path");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function(req, res) {
        noteData.push(req.body);
        res.json(true);
    });
};