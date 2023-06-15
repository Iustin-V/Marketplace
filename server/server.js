const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 3002;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
      res.setHeader("Content-Type", "application/json");
      res.json(result);
    }
  );
});
app.get("/api/listings/:id", (req, res) => {
  const subcategoryId = req.params.id;

  db.query(
    "SELECT * FROM anunt WHERE id_subcategorie = ?",
    subcategoryId,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching data from database" });
        return;
      }
      result.forEach((listing) => {
        listing.imagine = Buffer.from(listing.imagine).toString("base64");
      });
      res.setHeader("Content-Type", "application/json");
      res.json(result);
    }
  );
});
app.get("/api/listing/:id", (req, res) => {
  const subcategoryId = req.params.id;

  db.query(
    "SELECT * FROM anunt WHERE id = ?",
    subcategoryId,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching data from database" });
        return;
      }
      result.forEach((listing) => {
        listing.imagine = Buffer.from(listing.imagine).toString("base64");
      });
      res.setHeader("Content-Type", "application/json");
      res.json(result);
    }
  );
});

app.get("/api/search/:id", (req, res) => {
  const searchTerm = req.params.id;
  const query = `%${searchTerm}%`;
  db.query(
    "SELECT * FROM anunt WHERE titlu LIKE ? OR descriere LIKE ?",
    [query, query],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching data from database" });
        return;
      }
      result.forEach((listing) => {
        listing.imagine = Buffer.from(listing.imagine).toString("base64");
      });
      res.setHeader("Content-Type", "application/json");
      res.json(result);
    }
  );
});

app.post("/api/register", (req, res) => {
  const { mail, parola } = req.body;
  const saltRounds = 10;
  bcrypt.hash(parola, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error hashing password" });
      return;
    }
    db.query(
      "INSERT INTO utilizator ( mail, parola) VALUES (?, ?)",
      [ mail,  hashedPassword],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: "Error inserting user into database" });
          return;
        }
        res.status(200).json({ message: "User registered successfully" });
      }
    );
  });
});

app.post("/api/login", (req, res) => {
    const { mail, parola } = req.body;
    db.query(
        "SELECT * FROM utilizator WHERE mail = ?",
        mail,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error fetching user data from database" });
                return;
            }
            if (result.length === 0) {
                res.status(401).json({ error: "Invalid credentials" });
                return;
            }
            const user = result[0];
            bcrypt.compare(parola, user.parola, (err, isMatch) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error comparing passwords" });
                    return;
                }
                if (!isMatch) {
                    res.status(401).json({ error: "Invalid credentials" });
                    return;
                }
                const payload = { id: user.id };
                const options = { expiresIn: "1h" };
                const secretKey = "secretkey";
                jwt.sign(payload, secretKey, options, (err, token) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ error: "Error signing token" });
                        return;
                    }
                    res.status(200).json({ token });
                });
            });
        }
    );
});

app.post('/api/anunt', async (req, res) => {
    const { titlu, descriere, data, id_subcategorie, imagine ,localitate,judet} = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const options = { expiresIn: "1h" };
    const secretKey = "secretkey";

    const decoded = await jwt.verify(token, secretKey, options);

    const id_user = decoded.id;

    const base64Image = imagine.replace(/^data:image\/\w+;base64,/, '');
    const binaryImage = Buffer.from(base64Image, 'base64');
    const query = `
    INSERT INTO anunt (titlu, descriere, data, id_subcategorie, id_user, imagine, localitate, judet)
    VALUES (?, ?, ?, ?, ?, ?,?,?)
  `;

    const values = [titlu, descriere, data, id_subcategorie, id_user, binaryImage,localitate, judet];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error inserting anunt into the database' });
            return;
        }

        res.status(201).json({ message: 'Anunt created successfully', id: result.insertId });
    });


});

app.get('/api/listing-user/:id', async (req, res) => {
        const requested_user_id = req.params.id;

        const query = `
    SELECT p.telefon, u.mail
    FROM profil p
    JOIN utilizator u ON p.user_id = u.id
    WHERE p.user_id = ?
  `;

        db.query(query, [requested_user_id], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error fetching data from database' });
            }

            if (result.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { telefon, mail } = result[0];
            res.json({ telefon, mail });
        });
    });

app.get("/api/profile", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const options = { expiresIn: "1h" };
        const secretKey = "secretkey";

        const decoded = await jwt.verify(token, secretKey, options);

        const user_id = decoded.id;
        db.query("SELECT * FROM profil WHERE user_id=?", user_id, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error fetching data from database" });
                return;
            }
            result.forEach((profile) => {
                profile.poza_profil = Buffer.from(profile.poza_profil).toString(
                    "base64"
                );
                profile.poza_cover = Buffer.from(profile.poza_cover).toString("base64");
            });

            res.json(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error signing token" });
    }
});
app.post("/api/create-profile", async (req, res) => {
    const {
        nume,
        prenume,
        data_nasterii,
        oras,
        telefon,
        tara,
        poza_profil,
        poza_cover,
        descriere,
    } = req.body;
    const base64PozaProfil = poza_profil.replace(/^data:image\/\w+;base64,/, "");
    const binaryPozaProfil = Buffer.from(base64PozaProfil, "base64");
    const base64PozaCover = poza_cover.replace(/^data:image\/\w+;base64,/, "");
    const binaryPozaCover = Buffer.from(base64PozaCover, "base64");

    const token = req.headers.authorization.split(" ")[1];
    const options = { expiresIn: "1h" };
    const secretKey = "secretkey";

    const decoded = await jwt.verify(token, secretKey, options);

    const user_id = decoded.id;

    const query = `
    INSERT INTO profil (   nume,
                          prenume,
                          data_nasterii,
                          oras,
                           telefon,
                          tara,
                          user_id,
                          poza_profil,
                          poza_cover,
                          descriere)
    VALUES (?, ?, ?, ?, ?,?, ?,?,?,?)
  `;

    const values = [
        nume,
        prenume,
        data_nasterii,
        oras,
        telefon,
        tara,
        user_id,
        binaryPozaProfil,
        binaryPozaCover,
        descriere,
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res
                .status(500)
                .json({ error: "Error inserting profil into the database" });
            return;
        }

        res
            .status(201)
            .json({ message: "Profil created successfully", id: result.insertId });
    });
});

app.delete("/api/delete-account", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const options = { expiresIn: "1h" };
    const secretKey = "secretkey";

    jwt.verify(token, secretKey, options, (err, decoded) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error decoding token" });
            return;
        }

        const user_id = decoded.id;
        db.query("DELETE FROM anunt WHERE id_user=?", user_id, (err, result) => {
            if (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ error: "Error deleting user posts from database" });
                return;
            }
        });
        db.query("DELETE FROM profil WHERE user_id=?", user_id, (err, result) => {
            if (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ error: "Error deleting user profile from database" });
                return;
            }
        });

        db.query("DELETE FROM utilizator WHERE id=?", user_id, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error deleting user from database" });
                return;
            }
        });
        res.status(200).json({ message: "User account deleted successfully" });
    });
});

app.get("/api/get-listings", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const options = { expiresIn: "1h" };
        const secretKey = "secretkey";

        const decoded = await jwt.verify(token, secretKey, options);

        const user_id = decoded.id;
        db.query("SELECT * FROM anunt WHERE id_user=?", user_id, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error fetching data from database" });
                return;
            }
            result.forEach((listing) => {
                listing.imagine = Buffer.from(listing.imagine).toString("base64");
            });

            res.json(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error signing token" });
    }
});


app.delete("/api/delete-post", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const postId = req.headers.body;
    const options = { expiresIn: "1h" };
    const secretKey = "secretkey";

    jwt.verify(token, secretKey, options, (err, decoded) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error decoding token" });
            return;
        }

        const user_id = decoded.id;
        db.query(
            "DELETE FROM anunt WHERE id=? and id_user=?",
            [postId, user_id],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res
                        .status(500)
                        .json({ error: "Error deleting user posts from database" });
                    return;
                }
            }
        );

        res.status(200).json({ message: "User account deleted successfully" });
    });
});
app.put("/api/edit-post", async (req, res) => {
    try {
        const { titlu,descriere, imagine, id } = req.body;

        const base64Imagine = imagine.replace(/^data:image\/\w+;base64,/, "");
        const binaryImagine = Buffer.from(base64Imagine, "base64");

        const token = req.headers.authorization.split(" ")[1];
        const options = { expiresIn: "1h" };
        const secretKey = "secretkey";

        const decoded = await jwt.verify(token, secretKey, options);

        const user_id = decoded.id;

        const updateQuery = `
      UPDATE anunt
      SET titlu=?,descriere=?, imagine=?
      WHERE id=? and  id_user = ? 
    `;

        const values = [titlu,descriere, binaryImagine, id, user_id];

        db.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                res
                    .status(500)
                    .json({ error: "Error updating profil into the database" });
                return;
            }

            res
                .status(200)
                .json({ message: "Profil updated successfully", id: user_id });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating profil into the database" });
    }
});
app.put("/api/edit-profile", async (req, res) => {
    try {
        const {
            nume,
            prenume,
            data_nasterii,
            oras,
            tara,
            poza_profil,
            poza_cover,
            descriere,
        } = req.body;

        const base64PozaProfil = poza_profil.replace(
            /^data:image\/\w+;base64,/,
            ""
        );
        const binaryPozaProfil = Buffer.from(base64PozaProfil, "base64");
        const base64PozaCover = poza_cover.replace(/^data:image\/\w+;base64,/, "");
        const binaryPozaCover = Buffer.from(base64PozaCover, "base64");

        const token = req.headers.authorization.split(" ")[1];
        const options = { expiresIn: "1h" };
        const secretKey = "secretkey";

        const decoded = await jwt.verify(token, secretKey, options);

        const user_id = decoded.id;

        const updateQuery = `
      UPDATE profil
      SET nume = ?, prenume = ?, data_nasterii = ?, oras = ?, tara = ?, poza_profil = ?, poza_cover = ?, descriere = ?
      WHERE user_id = ?
    `;

        const values = [
            nume,
            prenume,
            data_nasterii,
            oras,
            tara,
            binaryPozaProfil,
            binaryPozaCover,
            descriere,
            user_id,
        ];

        db.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                res
                    .status(500)
                    .json({ error: "Error updating profil into the database" });
                return;
            }

            res
                .status(200)
                .json({ message: "Profil updated successfully", id: user_id });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating profil into the database" });
    }
});
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
