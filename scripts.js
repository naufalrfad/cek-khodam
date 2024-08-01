document.addEventListener('DOMContentLoaded', () => {
    const halamanAwal = document.getElementById('halaman-awal');
    const halamanInti = document.getElementById('halaman-inti');
    const cekKhodamButton = document.getElementById('cek-khodam-button');
    const backButton = document.getElementById('back-button');
    const khodamResult = document.getElementById('khodam-result');
    const namaInput = document.getElementById('nama-input');

    const khodamList = [
        "Kentang", "Kopi sachet", "Odading", "Nasi kucing", "Sate taichan", 
        "Seblak", "Nugget Geprek", "Cilok", "Cimol", "Cireng", "Cilor", "Boba", "Es kepal milo", 
        "Indomie cabe ijo", "Mie gelas", "Bakso beranak", "Keripik kaca", "Tahu bulat",
        "Tukang parkir", "Angkot", "Cincau", "Micin", "Jempol kaki", "Kucing oren",
        "Motor butut", "Sarung bantal", "Sapu lidi", "Panci gosong", "Gelas retak", "Sendok bengkok",
        "Kipas angin", "Kulkas dua pintu", "Kulkas satu pintu", "Jemuran", "Piring kaleng", "Keranjang baju",
        "Ember bocor", "Gayung bolong", "Karet gelang", "Masker kain", "Tisu gulung", 
        "Sabun cuci piring", "Sandal jepit", "Kipas sate", "Tempat tidur lipat", "Kain pel", "Sapu ijuk", 
        "Sikat gigi kumel", "Pasta gigi", "Shampo saset", "Sepatu jebol", "Kasur kapuk", "Panci prestis", 
        "Sarung tangan karet", "Cawat", "Tali jemuran", "Payung sobek", "Plastik keresek", "Botol air mineral",
        "Stik es krim", "Tutup galon", "Kursi plastik", "Meja makan", "Setrika bolong", "Blender rusak", 
        "Gantungan baju", "Rantang", "Kompor gas", "Guling", "Dakon", "Layangan doraemon", 
        "Sepeda ontel", "Becak", "Ojek online", "Koran bekas", "Paralon", "Penjepit jemuran", "Kaset rusak",
        "TV tabung", "Lem tikus", "Obeng kembang", "Kunci inggris", "Tikar RT", "Gorden Kak Jill",
        "Mobil odong-odong", "Topi sombrero", "Jengkol", "Pete", "Pecel lele", "Nasi uduk", "Bubur ayam", 
        "Kartu perdana", "Lampu petromak", "Kipas bambu", "Setrika arang", "Kompor minyak", 
        "Rice cooker", "Remote TV", "Batu akik", "Sepatu roda", "Baju batik",
        "Dompet kulit", "Peniti", "Gembok", "Kunci T", "Helm proyek", "Keripik bayam", "Senter", 
        "Baterai kering", "Tutup panci"
    ];

    function getHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    cekKhodamButton.addEventListener('click', () => {
        const nama = namaInput.value.trim();
        if (nama !== '') {
            const hash = getHash(nama);
            const khodamIndex = Math.abs(hash) % khodamList.length;
            const khodam = khodamList[khodamIndex];
            khodamResult.textContent = khodam;
            halamanAwal.classList.remove('active');
            halamanInti.classList.add('active');
        } else {
            alert('Mohon isi nama anda.');
        }
    });

    backButton.addEventListener('click', () => {
        namaInput.value = '';
        halamanInti.classList.remove('active');
        halamanAwal.classList.add('active');
    });

    // Show the first page on load
    halamanAwal.classList.add('active');
});
