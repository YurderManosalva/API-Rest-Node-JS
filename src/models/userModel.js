const db = require("../config/dbConfig");

class user {
  getUsuarios(callback) {
    const sql = "select id, name, user_name, date_registry from users";
    db.query(sql, callback);
  }

  getUsuarioById(id, callback) {
    const sql =
      "select id, name, user_name, date_registry from users where id=?";
    db.query(sql, [id], callback);
  }

  postUsuario(name, user_name, date_registry, callback) {
    const sql =
      "insert into users(name, user_name, date_registry) values (?, ?, ?)";
    db.query(sql, [name, user_name, date_registry], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, result.insertId);
    });
  }

  putUsuario(id, name, user_name, date_registry, callback) {
    const sql =
      "update users set name = ?, user_name = ?, date_registry = ? where id = ?";
    db.query(sql, [name, user_name, date_registry, id], callback);
  }

  deleteUsuario(id, callback) {
    const sql = "delete from users where id = ?";
    db.query(sql, [id], callback);
  }
}

module.exports = new user();
