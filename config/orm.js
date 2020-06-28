var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
    var queryString = "SELECT * FROM ??"

    connection.query(queryString, [tableName], function(err, result){
    if (err) throw (err);

    cb(result);
    });
},
insertOne: function (nameburg, cb){
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"

    connection.query(queryString, [nameburg], function(err, result){
    if (err) throw (err);

    cb(result);
    });

},
updateOne: function (burgereat, burgernmn, cb) {

    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

    connection.query(queryString, [burgereat, burgernmn], function (err, result){
        if(err) throw (err);

        cb(result);
    });
}

};





module.exports = orm;