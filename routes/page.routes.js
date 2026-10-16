
const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller');

router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/katalog', pageController.katalog);
router.get('/tambah', pageController.halamanTambah);
router.post('/tambah', pageController.tambahBuku);

module.exports = router;
