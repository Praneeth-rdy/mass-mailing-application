require('dotenv').config({ path: './config.env' });

const express = require('express');
const errorHandler = require('./middleware/error');

const app = express();



app.use(express.json());

app.use('/app', require('./routes/main'));

// Error Handler (Should be last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5050

app.get('/', (request, response) => {
    response.send("Hello World");
});


const server = app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/`));

process.on('unhandledRejection', (error, promise) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => { process.exit(1) });
});