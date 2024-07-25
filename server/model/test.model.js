const conn = require("../config/db-config");
exports.getTest = (callback) => {
  conn.query("select * from draft", callback);
};

exports.addTest = ({ test }, callback) => {
  conn.query("insert into draft(test) values(?)", [test], callback);
};

exports.updateTest = (id, { test }, callback) => {
  conn.query("update draft set test=? where id=?", [test, id], callback);
};

exports.deleteTest = (id, callback) => {
  conn.query("delete from draft where id=?", [id], callback);
};

exports.getById = (id, callback) => {
  conn.query("select * from draft where id = ?", [id], callback);
};
