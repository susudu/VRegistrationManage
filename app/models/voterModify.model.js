const sql = require("./db.js");
// constructor
const Modify = function(modify) {
  this.fname = modify.fname;
  this.lname = modify.lname;
  this.dob = modify.dob;
  this.age = modify.age;
  this.gender = modify.gender;
  this.ssn = modify.ssn;
  this.house_no = modify.house_no;
  this.street_name = modify.street_name;
  this.city = modify.city;
  this.mobile_no = modify.mobile_no;
  this.rdate = modify.rdate;
  this.vstatus = modify.vstatus;
};

Modify.updateBySSN = (ssn, modify, result) => {
  sql.query(
    "UPDATE user SET fname = ?, lname = ?, dob = ?, age = ?, gender = ?, ssn = ?, house_no = ?, street_name = ?, city = ?, mobile_no = ?, rdate = ?, vstatus = ? WHERE ssn = ?",
    [modify.fname, modify.lname, modify.dob, modify.age, modify.gender, modify.ssn, modify.house_no, modify.street_name, modify.city, modify.mobile_no, modify.rdate, modify.vstatus, ssn],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found voter with the ssn
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated voter: ", { ssn: ssn, ...modify });
      result(null, { ssn: ssn, ...modify });
    }
  );
};
Modify.remove = (ssn, result) => {
  sql.query("DELETE FROM user WHERE ssn = ?", ssn, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found voter with the ssn
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted voter with ssn: ", ssn);
    result(null, res);
  });
};
Modify.removeAll = result => {
  sql.query("DELETE FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} voters`);
    result(null, res);
  });
};
module.exports = Modify;