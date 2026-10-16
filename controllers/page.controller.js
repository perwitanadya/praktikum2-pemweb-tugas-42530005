
const buku = [
    {
        judul: 'I Have Loved You Since We Were 18',
        penulis: 'Nayay Perwita',
        tahun: 2007,
        kategori: 'Novel'
    },
    {
        judul: 'Bumi dan Manusia',
        penulis: 'Aditya Pratama',
        tahun: 2019,
        kategori: 'Sosial dan Pendidikan'
    },
    {
        judul: 'Ada Apa Dengan Indonesia',
        penulis: 'Diandra Maharani',
        tahun: 2021,
        kategori: 'Pendidikan dan Kebangsaan'
    },
    {
        judul: 'Filosofi Teras',
        penulis: 'Henry Manampiring',
        tahun: 2018,
        kategori: 'Pengembangan Diri'
    },
    {
        judul: 'To Be Loved and To Be In Love',
        penulis: 'Dewa Pratama',
        tahun: 2022,
        kategori: 'Novel Romantis'
    },
    {
        judul: 'Sastra Inggris',
        penulis: 'Raka Wijaya',
        tahun: 2020,
        kategori: 'Pendidikan Bahasa dan Sastra Inggris'
    },
    {
        judul: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        tahun: 2005,
        kategori: 'Novel Pendidikan'
    },
    {
        judul: 'Atomic Habits',
        penulis: 'James Clear',
        tahun: 2018,
        kategori: 'Pengembangan Diri'
    }
];

exports.home = (req, res) => {
    res.render('home', {
        judul: 'Katalog Perpustakaan',
        jumlahBuku: buku.length
    });
};

exports.about = (req, res) => {
    res.render('about');
};

exports.katalog = (req, res) => {
    console.log('=== KATALOG CONTROLLER AKTIF ===');
    console.log('Jumlah buku saat halaman dibuka:', buku.length);
    console.log('Judul:', buku.map(item => item.judul));

    res.render('katalog', { buku });
};

exports.halamanTambah = (req, res) => {
    res.render('tambah');
};

exports.tambahBuku = (req, res) => {
    const dataBuku = {
        judul: req.body.judul,
        penulis: req.body.penulis,
        tahun: Number(req.body.tahun),
        kategori: req.body.kategori
    };

    console.log('Data buku yang diterima:', dataBuku);

    buku.push(dataBuku);

    res.redirect('/katalog');
};
