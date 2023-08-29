const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const pool = new pg.Pool({
  user: '',
  host: 'localhost',
  database: 'registrotest',
  password: '',
  port: 5432
});

// Ruta para el endpoint POST del formulario
app.post('/registro', async (req, res) => {
  const { nombre, email, password } = req.body;


  try {
    // Insertar los datos en la tabla registrotest
    const insertQuery = 'INSERT INTO registrotest (nombre, email, password) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [nombre, email, password]);

    res.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al insertar en la base de datos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const client = await pool.connect();
      const result = await client.query(
        'SELECT * FROM logintest WHERE st_email = $1 AND st_password = $2',
        [email, password]
      );
  
      client.release();
  
      if (result.rows.length > 0) {
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ success: false, message: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error en la base de datos:', error);
      res.status(500).json({ success: false, message: 'Error del servidor' });
    }
  });


// Puerto 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
