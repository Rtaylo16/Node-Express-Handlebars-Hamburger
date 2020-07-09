var orm = require("../config/orm.js");



var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },

    insertOne: function (nameburg, cb) {
        orm.insertOne(nameburg, function (result) {
            cb(result);
        });
    },

    updateOne: function (burgernmn, burgereat, cb) {
        orm.updateOne(burgereat, burgernmn, function (result) {
            cb(result);
        });

    }

};


module.exports = burger;