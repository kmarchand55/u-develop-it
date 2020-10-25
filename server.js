//const inputCheck = require("./utils/inputCheck");
const express = require("express");
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);


// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });



// // Create a candidate
//const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?,?,?,?)`;
//const params = [1, 'Ronald', 'Firbank', 1];

// ES5 function, not arrow function, to use this
//db.run(sql, params, function(err, result) {
//  if (err) {
//    console.log(err);
//  }
//  console.log(result, this.lastID);
//});







// app.delete('/api/party/:id', (req, res) => {
//   const sql = `DELETE FROM parties WHERE id = ?`;
//   const params = [req.params.id];
//   db.run(sql, params, function(err, result) {
//     if (err) {
//       res.status(400).json({ error: res.message });
//       return;
//     }

//     res.json({ message: 'successfully deleted', changes: this.changes });
//   });
// });



// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
