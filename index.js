const pgp = require("pg-promise")()
const db = pgp("postgresql://admin:mIK9DvSdNM0UFMHwTx0UBz2uQyLeIgnm@dpg-cqk3i1jqf0us73c29190-a/api_hy0l");
db.query("SELECT 1 + 1 as RESULT;").then((result) => console.log(resultado));

module.exports = db;
