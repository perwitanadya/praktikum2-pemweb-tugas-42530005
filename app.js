
const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => {
    res.status(404).send('404 - Halaman tidak ditemukan');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
});
