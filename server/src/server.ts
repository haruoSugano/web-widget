import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.send('Hello world')
});

app.listen(3333, () => {
    console.log('HTTP server running');
});