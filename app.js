const express = require('express');
const app = express();
app.use(express.json());

const librosRouter = require('./routes/libros');

const errorHandler = require('./middlewares/errorHandler');

app
    .use('/libros', librosRouter)
    .use(errorHandler);

app.listen(3000, () => {
    console.log('servidor iniciado en el puerto 3000');
});

