const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// simple route
app.get("/api/categories/get", (req, res) => {
  db.query("SELECT * FROM categorie", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error fetching data from database" });
      return;
    }
    res.json(result);
  });
});

app.get("/api/categories/:id/subcategories", (req, res) => {
  const categoryId = req.params.id;

  db.query(
      "SELECT * FROM subcategorie WHERE id_categorie = ?",
      categoryId,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: "Error fetching data from database" });
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
      }
  );
});


// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
