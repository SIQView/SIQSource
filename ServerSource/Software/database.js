var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDatabase.db');
//CreateDatabase();
//GetAllDataFromDatabase();
//InsertRows("Suraj");
//GetAllDataFromDatabase();
//DeleteRows("Suraj");
//CloseDatabase();
exports.CreateDatabase = function()
{
	db.serialize(function() {
	  db.run("CREATE TABLE IF NOT EXISTS NAME (userName TEXT)");

	  var stmt = db.prepare("INSERT INTO NAME VALUES (?)");
	  stmt.run("SampleName ");
	  stmt.finalize();

/* 	  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
		  console.log(row.id + ": " + row.info);
	  }); */
	});
}

exports.InsertRows = function(userName) {
    console.log("insertRows Ipsum i");
    db.serialize(function() {
	  

	  var stmt = db.prepare("INSERT INTO NAME VALUES (?)");
		  stmt.run(userName);
	  stmt.finalize();

	});
}

function DeleteRows(userName) {
    console.log("insertRows Ipsum i");
    db.serialize(function() {
	  

	  var stmt = db.run("DELETE FROM NAME");
	  stmt.run();
	  stmt.finalize();

	});
}
exports.GetAllDataFromDatabase = function()
{
	db.serialize(function() {

	  db.each("SELECT rowid, userName FROM NAME", function(err, row) {
		  console.log(row.rowid + ": " + row.userName);
		  console.log("error >> "+err);
	  });
	});	
}
exports.CloseDatabase = function()
{
	db.close();
}
