const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//api routes
app.use('/api/quotes', require('./routes/routes'));

app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});