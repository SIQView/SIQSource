var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDatabase.db');
//CreateDatabase();
//GetAllDataFromDatabase();
//InsertRows("Suraj2, SSSSSS");
//GetAllDataFromDatabase();
console.log("____________________");
GetDataFromDatabase();
//DeleteRows("Suraj");
CloseDatabase();
function CreateDatabase()
{
	db.serialize(function() {
	  db.run("CREATE TABLE IF NOT EXISTS NAME (userName TEXT PRIMARY, password TEXT)");

	  var stmt = db.prepare("INSERT INTO NAME VALUES (?,?)");
	  stmt.run("SampleName, SampPasswd ");
	  stmt.finalize();

/* 	  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
		  console.log(row.id + ": " + row.info);
	  }); */
	});
}

function InsertRows(userName, password) {
    console.log("insertRows Ipsum i");
    db.serialize(function() {

	var stmt = db.prepare("INSERT userName INTO NAME VALUES (?,?)");
		  stmt.run(userName,password);
	  stmt.finalize();

	});
}

function DeleteRows(userName) {
    console.log("insertRows for name i");
    db.serialize(function() {
	  
	  var stmt = db.run("DELETE FROM NAME");
	  stmt.run();
	  stmt.finalize();

	});
}
function GetAllDataFromDatabase()
{
	db.serialize(function() {

	  db.each("SELECT rowid, userName FROM NAME", function(err, row) {
		  console.log(row.rowid + ": " + row.userName);
		  console.log("error >> "+err);
	  });
	});	
}

function GetDataFromDatabase()
{
	db.serialize(function() {

	  db.each("SELECT rowid, password FROM NAME", function(err, row) {
		  console.log(row.rowid + ": " + row.password);
		  console.log("error >> "+err);
	  });
	});	
}

function CloseDatabase()
{
	db.close();
}
