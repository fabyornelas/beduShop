 // ARCHIVO PRINCIPAL instalar dependencias npm install express sequelize mysql2 body-parser // npm instal nodemon para no tener que matar el servidor c/q se realiza un cambio
// funcionalidad basica 
const express = require('express');

const app = express();
//seguridad backend npm install helmet, cors para seguridad con dominios  npm install cors
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./config/db');

app.use('/v1', require('./routes'));

// const PORT = 4001;
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
try {sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}