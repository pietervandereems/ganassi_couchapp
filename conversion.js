/*Globals require*/

"use strict";

// Libraries
var cradle = require("cradle");
var sqlite3 = require("sqlite3");

// local variables
var config = {
    iris: {
    },
    sqlite: {
        database: "/home/pietere/Development/Ganassi/lessen.ganassi.nl/Content/Database/ganassi.db"
    }
};

var db = new sqlite3.Database(config.sqlite.database, function (inErr, inResult) {
    if (inErr) {
        console.log("Error opening database", inErr);
    } else {
        console.log("Database opened", inResult);
        db.each("SELECT * FROM ganassi_liedjes", function (inErr, inRow) {
            console.log(inRow);
        }, function (inErr, inResult) {
            console.log("Database each done", inErr, inResult);
            db.close();
        });
    }
});
