const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors")


const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "Anita1994",
  database: "entrega20",
  connectionLimit: 5,
});

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1>Bienvenid@ al servidor</h1>");
});

app.get("/entrega20", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT id, nombre, actorprincipal, año, sinopsis, emisora, genero, cantcaps, link FROM series"
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Se rompió el servidor" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});


app.post("/entrega20", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
   console.log(req.body)
    const response = await conn.query(
      `INSERT INTO series(nombre, actorprincipal, año, sinopsis, emisora, genero, cantcaps, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [req.body.nombre, req.body.actorprincipal, req.body.ano, req.body.sinopsis, req.body.emisora, req.body.genero, req.body.cantcaps, req.body.link]
    );
    res.json({ id: parseInt(response.insertId), ...req.body });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Se rompió el servidor" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.put("/entrega20/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      `UPDATE series SET id=?, nombre=?, actorprincipal=?, año=?, sinopsis=?, emisora=?, genero=?, cantcaps=?, foto=?, link=? WHERE id=?`,
      [req.body.nombre, req.body.actorprincipal, req.body.año, req.body.sinopsis, req.body.emisora, req.body.genero, req.body.cantcaps, req.body.foto, req.body.link, req.params.id]
    );

    res.json({ id: req.params.id, ...req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Se rompió el servidor" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.delete("/entrega20/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("DELETE FROM series WHERE id=?", [
      req.params.id,
    ]);
    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Se rompió el servidor" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
