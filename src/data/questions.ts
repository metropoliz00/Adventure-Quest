/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubjectData } from '../types';

export const SUBJECTS_DATA: Record<string, SubjectData> = {
  pjok: {
    id: 'pjok',
    name: 'PJOK KELAS 5 SD',
    subtitle: 'Tantangan Teori & Gerak Dasar Olahraga',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Permainan Bola Besar',
        topic: 'Sepak Bola, Voli, & Basket',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Dalam permainan sepak bola, mengoper bola kepada rekan satu tim dengan menggunakan punggung kaki atau kaki bagian dalam untuk menguasai ritme permainan disebut...',
            options: ['Passing', 'Dribbling', 'Shooting', 'Heading'],
            answer: 0,
            explanation: 'Passing adalah teknik dasar mengoper bola kepada rekan satu tim untuk membangun strategi dan membongkar pertahanan lawan.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Dalam pertandingan bola voli resmi, peran pemain di lapangan sangat bervariasi untuk pertahanan maupun serangan. Manakah posisi/peran pemain yang sah dalam satu tim bola voli? (Pilih semua yang benar)',
            options: ['Libero (Pemain Bertahan murni)', 'Tosser / Setter (Pengumpan utama)', 'Striker (Penyerang sepak bola)', 'Spiker / Smasher (Pemukul utama)'],
            answer: 0,
            correctAnswers: [0, 1, 3],
            explanation: 'Libero, Tosser/Setter, dan Spiker/Smasher adalah posisi sah dalam bola voli. Striker adalah posisi penyerang dalam olahraga sepak bola.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Dalam permainan bola basket, apabila seorang pemain melangkah lebih dari dua langkah tanpa memantulkan bola (dribbling) sambil membawa bola aktif, maka ia dianggap melakukan pelanggaran berat "Travelling". Benar atau salah?',
            options: ['Benar', 'Salah'],
            answer: 0,
            explanation: 'Travelling adalah pelanggaran membawa bola berjalan atau berlari tanpa memantulkannya ke lantai lebih dari 2 langkah.'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah induk organisasi olahraga nasional berikut ini dengan cabang olahraganya secara tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['PBSI', 'PSSI', 'PERBASI'],
            matchingRight: ['Sepak Bola', 'Bola Basket', 'Bulu Tangkis'],
            matchingPairs: { 0: 2, 1: 0, 2: 1 },
            explanation: 'PBSI mengurusi Bulu Tangkis, PSSI mengurusi Sepak Bola, dan PERBASI mengurusi Bola Basket di tingkat nasional Indonesia.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan langkah-langkah melakukan teknik dasar Menyundul Bola (Heading) yang paling aman dan efektif?',
            options: [
              'Fokus arah bola - menyundul dengan dahi - mendarat dengan lutut mengeper',
              'Menyundul dengan dahi - melompat - mendarat dengan kaki lurus',
              'Mendarat dengan lutut - fokus arah bola - menyundul dengan dahi',
              'Melompat - mendarat - baru menyundul bola dengan ubun-ubun'
            ],
            answer: 0,
            explanation: 'Langkah aman menyundul bola: bersiap/melompat fokus ke bola, sundul menggunakan dahi dibantu otot leher, lalu mendarat dengan lutut mengeper untuk menghindari cedera.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Permainan Bola Kecil',
        topic: 'Kasti, Rounders, & Bulu Tangkis',
        questions: [
          {
            id: 6,
            question: 'Permainan kasti dan rounders termasuk ke dalam kelompok permainan...',
            options: ['Bola besar', 'Bola kecil', 'Atletik', 'Senam'],
            answer: 1,
            explanation: 'Kasti dan rounders menggunakan bola berukuran kecil (seperti bola tenis) dan alat pemukul.'
          },
          {
            id: 7,
            question: 'Dalam permainan kasti, seorang penjaga lapangan yang berhasil menangkap langsung bola yang dipukul oleh pemukul akan mendapatkan nilai...',
            options: ['1 poin', '2 poin', '3 poin', '5 poin'],
            answer: 0,
            explanation: 'Menangkap bola pukulan langsung menghasilkan 1 poin bagi tim penjaga.'
          },
          {
            id: 8,
            question: 'Pukulan dalam bulu tangkis yang dilakukan dengan cepat dan menukik tajam ke area pertahanan lawan disebut...',
            options: ['Lob', 'Drop shot', 'Smash', 'Drive'],
            answer: 2,
            explanation: 'Smash adalah pukulan ofensif yang keras, cepat, dan menukik ke bawah.'
          },
          {
            id: 9,
            question: 'Alat pemukul dalam permainan tenis meja disebut...',
            options: ['Raket', 'Stik', 'Bet', 'Glove'],
            answer: 2,
            explanation: 'Alat pemukul tenis meja terbuat dari kayu yang dilapisi karet, disebut bet.'
          },
          {
            id: 10,
            question: 'Jumlah babak (inning) dalam permainan rounders biasanya dimainkan sebanyak...',
            options: ['3 inning', '5 inning', '7 inning', '9 inning'],
            answer: 2,
            explanation: 'Permainan rounders umumnya dimainkan dalam 7 inning (babak).'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Atletik (Gerak Dasar)',
        topic: 'Jalan, Lari, Lompat, Lempar',
        questions: [
          {
            id: 11,
            question: 'Nomor-nomor yang diperlombakan dalam cabang olahraga atletik meliputi...',
            options: ['Jalan, lari, lompat, lempar', 'Senam, renang, bela diri', 'Sepak bola, basket, voli', 'Kasti, rounders, tenis'],
            answer: 0,
            explanation: 'Atletik dikenal sebagai induk dari semua cabang olahraga (mother of sports) yang terdiri dari jalan, lari, lompat, dan lempar.'
          },
          {
            id: 12,
            question: 'Start yang digunakan oleh pelari estafet kedua, ketiga, dan keempat adalah...',
            options: ['Start jongkok', 'Start melayang', 'Start berdiri', 'Start duduk'],
            answer: 1,
            explanation: 'Pelari penerima tongkat (pelari 2, 3, 4) menggunakan start melayang karena menerima sambil berlari.'
          },
          {
            id: 13,
            question: 'Lari cepat (sprint) biasanya menempuh jarak...',
            options: ['100m, 200m, 400m', '800m, 1500m', '3000m, 5000m', '10.000m'],
            answer: 0,
            explanation: 'Lari sprint adalah lari jarak pendek dengan kecepatan penuh sepanjang jarak tempuh.'
          },
          {
            id: 14,
            question: 'Gaya lompat jauh di mana posisi tubuh melayang di udara seperti orang jongkok disebut...',
            options: ['Gaya menggantung', 'Gaya jongkok', 'Gaya berjalan di udara', 'Gaya dada'],
            answer: 1,
            explanation: 'Gaya jongkok (ortodoks) adalah gaya tertua dan paling mudah dipelajari dalam lompat jauh.'
          },
          {
            id: 15,
            question: 'Alat berbentuk piringan bulat yang dilemparkan dalam cabang atletik lempar adalah...',
            options: ['Lembing', 'Cakram', 'Martil', 'Peluru'],
            answer: 1,
            explanation: 'Lempar cakram menggunakan piringan kayu berbingkai besi yang dilempar sejauh mungkin.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Kebugaran Jasmani',
        topic: 'Kekuatan, Kelenturan, Kelincahan',
        questions: [
          {
            id: 16,
            question: 'Kemampuan tubuh untuk melakukan aktivitas sehari-hari tanpa mengalami kelelahan yang berarti disebut...',
            options: ['Kesehatan jasmani', 'Kebugaran jasmani', 'Kekuatan tubuh', 'Daya tahan otot'],
            answer: 1,
            explanation: 'Kebugaran jasmani adalah kesanggupan tubuh melakukan kerja fisik secara optimal.'
          },
          {
            id: 17,
            question: 'Latihan push-up bertujuan untuk melatih kekuatan otot...',
            options: ['Kaki', 'Perut', 'Dada, bahu, dan lengan', 'Punggung'],
            answer: 2,
            explanation: 'Push-up melatih otot tubuh bagian atas terutama pectoralis major, deltoid, dan triceps.'
          },
          {
            id: 18,
            question: 'Untuk mengukur kelenturan tubuh seseorang, latihan yang paling tepat dilakukan adalah...',
            options: ['Sikap kayang atau mencium lutut', 'Lari cepat 50 meter', 'Lompat tali', 'Sit-up 30 detik'],
            answer: 0,
            explanation: 'Kayang dan mencium lutut melatih fleksibilitas persendian tulang belakang dan otot paha belakang.'
          },
          {
            id: 19,
            question: 'Latihan lari bolak-balik (shuttle run) sangat bermanfaat untuk meningkatkan...',
            options: ['Kelenturan', 'Kekuatan', 'Kelincahan (agility)', 'Daya tahan jantung'],
            answer: 2,
            explanation: 'Shuttle run melatih kemampuan mengubah arah dengan cepat dan tepat tanpa kehilangan keseimbangan.'
          },
          {
            id: 20,
            question: 'Denyut nadi yang diukur saat tubuh sedang beristirahat total disebut...',
            options: ['Denyut nadi maksimal', 'Denyut nadi latihan', 'Denyut nadi istirahat', 'Denyut nadi pemulihan'],
            answer: 2,
            explanation: 'Denyut nadi istirahat diukur saat bangun tidur atau istirahat tenang, rata-rata 60-80 kali per menit.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Kesehatan & Aktivitas Air',
        topic: 'Renang, Pemanasan, & Gizi Seimbang',
        questions: [
          {
            id: 21,
            question: 'Gaya renang yang gerakannya menyerupai katak sedang berenang di air disebut...',
            options: ['Gaya bebas', 'Gaya punggung', 'Gaya dada (katak)', 'Gaya kupu-kupu'],
            answer: 2,
            explanation: 'Renang gaya dada disebut juga gaya katak karena gerakan kakinya menendang melingkar mirip katak.'
          },
          {
            id: 22,
            question: 'Sebelum melakukan aktivitas olahraga, sangat penting melakukan pemanasan (warming up) untuk...',
            options: ['Mencegah cedera otot', 'Mempercepat kelelahan', 'Membuat haus', 'Mengurangi konsentrasi'],
            answer: 0,
            explanation: 'Pemanasan mempersiapkan otot dan sendi agar lebih lentur dan siap berolahraga.'
          },
          {
            id: 23,
            question: 'Makanan sehat yang mengandung karbohidrat, protein, lemak, vitamin, mineral, dan air secara seimbang sering disebut...',
            options: ['Makanan cepat saji', 'Makanan 4 sehat 5 sempurna', 'Makanan bergizi seimbang', 'Makanan instan'],
            answer: 2,
            explanation: 'Makanan bergizi seimbang mencakup zat tenaga, zat pembangun, dan zat pengatur secara proporsional.'
          },
          {
            id: 24,
            question: 'Penyakit demam berdarah dengue (DBD) ditularkan melalui gigitan nyamuk...',
            options: ['Anopheles', 'Aedes aegypti', 'Culex', 'Mansonia'],
            answer: 1,
            explanation: 'Nyamuk Aedes aegypti aktif menggigit pada pagi dan sore hari, membawa virus dengue.'
          },
          {
            id: 25,
            question: 'Sikap guling depan (forward roll) yang benar diawali dengan posisi...',
            options: ['Berdiri atau jongkok menghadap matras', 'Berdiri membelakangi matras', 'Tidur terlentang', 'Sikap lilin'],
            answer: 0,
            explanation: 'Guling depan dilakukan dengan menaruh kedua tangan di matras dan menekuk leher untuk berguling ke depan.'
          }
        ]
      }
    ]
  },
  ipas: {
    id: 'ipas',
    name: 'IPAS KELAS 5 SD',
    subtitle: 'Petualangan Menjelajahi Warisan Budaya Indonesia',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Warisan Budaya Benda',
        topic: 'Warisan Budaya Benda (Tangible)',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Candi Borobudur didirikan pada abad ke-8 menggunakan jutaan balok batu vulkanik tanpa semen, namun tetap kokoh berdiri selama ribuan tahun. Secara klasifikasi ilmiah, mengapa candi, prasasti, dan keris dikelompokkan sebagai Warisan Budaya Benda (Tangible Cultural Heritage)?',
            options: [
              'Karena memiliki wujud fisik yang dapat disentuh, diukur, dan membutuhkan upaya konservasi material nyata',
              'Karena hanya mengandung nilai magis kuno yang tidak bisa dipahami manusia modern',
              'Karena dibuat menggunakan teknologi modern abad ke-21 yang sangat canggih',
              'Karena dapat dipindahkan ke luar negeri dengan mudah tanpa merusak nilainya'
            ],
            answer: 0,
            explanation: 'Warisan Budaya Benda (Tangible Heritage) dikelompokkan berdasarkan adanya objek fisik yang konkret, sehingga membutuhkan perawatan fisik (konservasi material) agar tidak lapuk oleh cuaca.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Situs Purbakala Sangiran diakui sebagai Warisan Dunia oleh UNESCO. Di bawah ini, manakah bukti-bukti ilmiah penting yang ditemukan di Sangiran sehingga situs ini dinilai memiliki arti luar biasa bagi perkembangan ilmu pengetahuan manusia dunia? (Pilih semua yang benar)',
            options: [
              'Fosil manusia purba Meganthropus palaeojavanicus dan Pithecanthropus erectus',
              'Fosil flora dan fauna purba seperti gajah purba Mastodon dan kerbau purba',
              'Prasasti bertuliskan huruf komputer modern dengan tanda tangan digital',
              'Artefak alat-alat batu kuno (serpih, kapak genggam) hasil buatan manusia purba'
            ],
            answer: 0,
            correctAnswers: [0, 1, 3],
            explanation: 'Situs Sangiran sangat penting karena menyimpan lebih dari 50% populasi fosil manusia purba dunia, fosil hewan purba, serta alat batu kuno yang menggambarkan rantai evolusi manusia secara utuh.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Batik merupakan mahakarya yang unik. Selembar kain batik fisik yang kita beli di toko adalah "Warisan Budaya Benda" (Tangible), sedangkan teknik membatik menggunakan canting, makna filosofis motifnya, dan ritual adat di balik pembuatannya merupakan "Warisan Budaya Tak Benda" (Intangible). Benar atau salah analisis tersebut?',
            options: ['Benar', 'Salah'],
            answer: 0,
            explanation: 'Analisis tersebut sangat tepat! Benda fisiknya (kain) adalah tangible, sedangkan keahlian membatik, tradisi lisan, dan nilai filosofis dalam motif batik adalah intangible (tak benda).'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah warisan budaya benda megah di Indonesia berikut ini dengan lokasi provinsi tempat berdirinya secara tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['Candi Borobudur', 'Jam Gadang', 'Benteng Vredeburg'],
            matchingRight: ['D.I. Yogyakarta', 'Jawa Tengah', 'Sumatera Barat'],
            matchingPairs: { 0: 1, 1: 2, 2: 0 },
            explanation: 'Candi Borobudur berada di Jawa Tengah, Jam Gadang berada di Bukittinggi (Sumatera Barat), dan Benteng Vredeburg berada di Malioboro (D.I. Yogyakarta).'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan tahapan metode ilmiah arkeologi yang benar dari awal penemuan fosil hingga siap dipamerkan di museum?',
            options: [
              'Ekskavasi -> Konservasi -> Analisis -> Disseminasi publik',
              'Disseminasi -> Ekskavasi -> Analisis -> Konservasi',
              'Konservasi -> Analisis -> Ekskavasi -> Disseminasi publik',
              'Analisis -> Konservasi -> Disseminasi -> Ekskavasi'
            ],
            answer: 0,
            explanation: 'Metode arkeologi yang logis dimulai dari Penggalian situs (Ekskavasi), Pembersihan & Pengawetan (Konservasi), Penentuan Usia & Rekonstruksi (Analisis), hingga Pameran Edukatif Museum (Disseminasi).'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Warisan Budaya Tak Benda',
        topic: 'Warisan Budaya Tak Benda (Intangible)',
        questions: [
          {
            id: 6,
            question: 'Seni kerajinan menggambar pola di atas kain menggunakan lilin (malam) hangat dan canting asli Indonesia disebut...',
            options: ['Tenun', 'Batik', 'Sulam', 'Songket'],
            answer: 1,
            explanation: 'Batik diakui UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi sejak 2009.'
          },
          {
            id: 7,
            question: 'Seni pertunjukan teater boneka kulit tradisional yang membawakan kisah epik Ramayana atau Mahabharata disebut...',
            options: ['Ludruk', 'Wayang Kulit', 'Ketoprak', 'Lenong'],
            answer: 1,
            explanation: 'Wayang Kulit dimainkan oleh seorang dalang dengan iringan musik gamelan yang sangat populer di Jawa.'
          },
          {
            id: 8,
            question: 'Alat musik tradisional berbahan bambu dari Jawa Barat yang dimainkan dengan cara digoyang agar menghasilkan nada adalah...',
            options: ['Kolintang', 'Suling', 'Sasando', 'Angklung'],
            answer: 3,
            explanation: 'Angklung adalah alat musik multitonal berbahan bambu khas suku Sunda.'
          },
          {
            id: 9,
            question: 'Sistem subak merupakan warisan budaya berupa manajemen irigasi sawah tradisional yang sangat lestari dari daerah...',
            options: ['Lombok', 'Madura', 'Bali', 'Toraja'],
            answer: 2,
            explanation: 'Subak adalah organisasi kemasyarakatan yang khusus mengatur sistem pengairan sawah di Bali secara adil.'
          },
          {
            id: 10,
            question: 'Seni bela diri tradisional asli Nusantara yang melatih keseimbangan tubuh, jiwa, dan bela diri, serta diakui UNESCO adalah...',
            options: ['Karate', 'Taekwondo', 'Pencak Silat', 'Kung Fu'],
            answer: 2,
            explanation: 'Pencak silat merupakan seni bela diri pusaka Indonesia yang sarat akan nilai-nilai budi pekerti.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Tari Daerah Indonesia',
        topic: 'Tari Daerah Indonesia',
        questions: [
          {
            id: 11,
            question: 'Tari Saman yang memiliki gerakan tepuk tangan, dada, dan paha yang sangat cepat, lincah, serta kompak berasal dari...',
            options: ['Aceh', 'Sumatera Barat', 'Sumatera Selatan', 'Bengkulu'],
            answer: 0,
            explanation: 'Tari Saman diciptakan oleh seorang ulama Aceh bernama Syekh Saman untuk menyebarkan syiar agama Islam.'
          },
          {
            id: 12,
            question: 'Tari daerah dari Bali yang ditarikan oleh puluhan pria dalam lingkaran sambil menyerukan kata "cak" secara berulang-ulang adalah...',
            options: ['Tari Pendet', 'Tari Barong', 'Tari Kecak', 'Tari Legong'],
            answer: 2,
            explanation: 'Tari Kecak menceritakan kisah Ramayana tanpa iringan alat musik melodi, murni menggunakan paduan vokal penari.'
          },
          {
            id: 13,
            question: 'Tari tradisional yang menampilkan kelihaian penari memegang piring di kedua telapak tangannya tanpa terjatuh berasal dari...',
            options: ['Riau', 'Jambi', 'Sumatera Barat', 'Sumatera Utara'],
            answer: 2,
            explanation: 'Tari Piring merupakan tari tradisional Minangkabau yang melambangkan rasa syukur atas hasil panen.'
          },
          {
            id: 14,
            question: 'Tari Jaipong merupakan tarian tradisional Sunda yang sangat dinamis, lincah, penuh keceriaan, dan populer berasal dari...',
            options: ['Banten', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah'],
            answer: 2,
            explanation: 'Jaipong diciptakan oleh seniman asal Jawa Barat, menggabungkan unsur ketuk tilu, wayang golek, dan pencak silat.'
          },
          {
            id: 15,
            question: 'Seni pertunjukan tari yang penarinya menggunakan topeng kepala singa berhiaskan bulu burung merak yang sangat besar dan berat adalah...',
            options: ['Tari Barong', 'Reog Ponorogo', 'Tari Kuda Lumping', 'Tari topeng'],
            answer: 1,
            explanation: 'Reog Ponorogo berasal dari Jawa Timur. Singobarong sebagai topeng utama ditarikan menggunakan kekuatan gigi dalang.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Lagu Daerah Indonesia',
        topic: 'Lagu Daerah Indonesia',
        questions: [
          {
            id: 16,
            question: 'Lagu daerah dari Kalimantan Selatan yang menceritakan tentang pisang yang digantung dan belum matang adalah...',
            options: ['Ampar-Ampar Pisang', 'Paris Barantai', 'Gundul Pacul', 'Apuse'],
            answer: 0,
            explanation: 'Ampar-ampar pisang secara tradisional dinyanyikan sambil membuat makanan khas dari pisang.'
          },
          {
            id: 17,
            question: 'Lagu daerah Papua yang sangat syahdu dan menceritakan tentang kisah perpisahan dengan kakek dan nenek tercinta adalah...',
            options: ['Yamko Rambe Yamko', 'Apuse', 'Sajojo', 'Soleram'],
            answer: 1,
            explanation: 'Apuse menceritakan seorang cucu yang pamit bepergian ke Teluk Doreri di Papua.'
          },
          {
            id: 18,
            question: 'Lagu anak-anak bernuansa dolanan tradisional dari Jawa Tengah yang gembira untuk menentukan tebakan batu adalah...',
            options: ['Lir-Ilir', 'Cublak-Cublak Suweng', 'Gundul Pacul', 'Suwe Ora Jamu'],
            answer: 1,
            explanation: 'Cublak-cublak suweng dinyanyikan anak-anak saat bermain tebak barang yang disembunyikan di telapak tangan.'
          },
          {
            id: 19,
            question: 'Lagu "Rasa Sayange" yang riang gembira dan diselingi pantun-pantun persahabatan serta jenaka merupakan lagu daerah...',
            options: ['Nusa Tenggara Timur', 'Sulawesi Utara', 'Maluku', 'Papua Barat'],
            answer: 2,
            explanation: 'Lagu Rasa Sayange merupakan lagu daerah Maluku yang menunjukkan rasa sayang dan keakraban antar-masyarakat.'
          },
          {
            id: 20,
            question: 'Lagu daerah Sumatera Utara yang berirama menghentak gembira dan sering ditarikan dengan tarian Tor-Tor adalah...',
            options: ['Sinanggar Tulo', 'Anju Ahu', 'Butet', 'Mariam Tomong'],
            answer: 0,
            explanation: 'Sinanggar Tulo adalah lagu daerah Batak yang riang dan mengekspresikan kegembiraan masa muda.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Pelestarian Warisan Budaya',
        topic: 'Pelestarian Warisan Budaya',
        questions: [
          {
            id: 21,
            question: 'Mengapa kita sebagai generasi muda wajib melestarikan warisan budaya yang ada di Indonesia?',
            options: ['Agar budaya asing menguasai Indonesia', 'Agar tidak punah dan tetap terjaga bagi generasi penerus', 'Agar dinilai bagus oleh guru', 'Agar mendapat banyak uang dari luar negeri'],
            answer: 1,
            explanation: 'Pelestarian budaya bertujuan agar identitas asli bangsa tidak hilang digerus zaman.'
          },
          {
            id: 22,
            question: 'Manakah tindakan nyata yang paling sederhana bagi seorang siswa sekolah dasar untuk melestarikan kebudayaan lokal?',
            options: ['Mengenakan baju batik sekolah dengan rasa bangga', 'Membiarkan orang tua saja yang mempelajari kebudayaan', 'Menonton video modern sepanjang hari', 'Menolak belajar lagu daerah'],
            answer: 0,
            explanation: 'Mengenakan batik dengan bangga membiasakan diri mencintai warisan leluhur sejak dini.'
          },
          {
            id: 23,
            question: 'Apabila ada kesenian daerah asli Indonesia yang diklaim secara sepihak oleh negara lain, langkah tepat pemerintah kita adalah...',
            options: ['Membuat perang militer', 'Mendaftarkannya ke lembaga internasional seperti UNESCO agar berpaten resmi', 'Membiarkannya saja karena merepotkan', 'Melarang kesenian itu dimainkan lagi'],
            answer: 1,
            explanation: 'Mendaftarkannya secara resmi ke UNESCO memberikan perlindungan hukum internasional bagi hak kekayaan intelektual bangsa.'
          },
          {
            id: 24,
            question: 'Sikap saling menghargai dan bersedia mempelajari tarian tradisional dari daerah lain di sekolah mencerminkan nilai...',
            options: ['Egoisme', 'Toleransi dan cinta tanah air', 'Individualisme', 'Sifat acuh tak acuh'],
            answer: 1,
            explanation: 'Mempelajari kebudayaan suku lain mempererat persatuan dan kesatuan nasional (Bhinneka Tunggal Ika).'
          },
          {
            id: 25,
            question: 'Apakah dampak buruk yang dapat timbul jika generasi muda acuh tak acuh terhadap kebudayaan bangsanya?',
            options: ['Kebudayaan lokal akan makin populer', 'Kebudayaan daerah lambat laun akan punah dan dilupakan', 'Negara lain akan membayar kita', 'Kebudayaan tersebut berubah otomatis'],
            answer: 1,
            explanation: 'Tanpa adanya regenerasi penutur atau praktisi budaya, kebudayaan tersebut akan punah dan digantikan budaya luar.'
          }
        ]
      }
    ]
  },
  pancasila: {
    id: 'pancasila',
    name: 'PENDIDIKAN PANCASILA KELAS 5',
    subtitle: 'Petualangan Menjadi Pelajar Pancasila Sejati',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Keberagaman Indonesia',
        topic: 'Keberagaman Indonesia',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Semboyan "Bhinneka Tunggal Ika" dipetik dari kitab Kakawin Sutasoma karya Mpu Tantular pada masa Majapahit. Ditinjau secara analitis, mengapa semboyan ini sangat krusial bagi fondasi NKRI yang memiliki lebih dari 1.300 suku bangsa?',
            options: [
              'Sebagai jembatan filosofis yang merekatkan perbedaan ras, suku, dan agama menjadi satu identitas nasional yang harmonis',
              'Untuk menyeragamkan semua kebudayaan daerah agar melebur menjadi satu kebudayaan tunggal saja',
              'Sebagai aturan hukum militer yang memaksa seluruh rakyat memakai bahasa daerah yang sama',
              'Untuk membatasi hubungan kerja sama internasional antarnegara kepulauan'
            ],
            answer: 0,
            explanation: 'Semboyan ini krusial karena bukan bermaksud menyeragamkan kebudayaan (asimilasi paksa), melainkan mengapresiasi keunikan tiap daerah sebagai kekayaan kolektif bangsa dalam bingkai persatuan.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Di lingkungan sekolah dasar yang multikultural, murid-murid berasal dari latar belakang daerah dan kepercayaan yang berbeda. Manakah tindakan konkret siswa yang mencerminkan pengamalan Sila ke-3 Pancasila (Persatuan Indonesia) secara kritis? (Pilih semua yang benar)',
            options: [
              'Mempelajari tarian daerah teman kelas lain dengan antusias tanpa memandang rendah asal usulnya',
              'Membentuk kelompok belajar yang hanya berisi teman-teman dari suku yang sama saja agar lebih mudah akrab',
              'Mendukung dan menghibur teman kelas yang sedang sedih atau kesulitan tanpa membeda-bedakan sukunya',
              'Saling menghargai saat teman dari keyakinan lain sedang menjalankan ibadah atau perayaan keagamaannya'
            ],
            answer: 0,
            correctAnswers: [0, 2, 3],
            explanation: 'Sila ke-3 menitikberatkan pada persatuan dan kepedulian inklusif. Membatasi kelompok belajar hanya pada suku yang sama (eksklusivisme) bertentangan dengan prinsip persatuan.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Sila pertama, "Ketuhanan Yang Maha Esa", bermakna bahwa negara menjamin kemerdekaan setiap penduduk untuk memeluk agamanya masing-masing dan beribadat menurut agamanya dan kepercayaannya itu. Maka, memaksakan suatu keyakinan agama tertentu kepada orang lain adalah tindakan yang melanggar nilai Pancasila. Benar atau salah?',
            options: ['Benar', 'Salah'],
            answer: 0,
            explanation: 'Pernyataan tersebut Benar. Sila Pertama menjamin kebebasan beragama dan melarang pemaksaan keyakinan kepada pemeluk agama lain (sesuai Pasal 29 UUD 1945).'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah peninggalan budaya dan tradisi nusantara berikut ini dengan masyarakat daerah asalnya secara tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['Rumah Adat Tongkonan', 'Upacara Pembakaran Ngaben', 'Pakaian Tradisional Pangsi'],
            matchingRight: ['Masyarakat Bali', 'Suku Sunda', 'Suku Toraja'],
            matchingPairs: { 0: 2, 1: 0, 2: 1 },
            explanation: 'Tongkonan berasal dari Suku Toraja, Ngaben adalah upacara sakral umat Hindu di Bali, dan Pangsi adalah pakaian tradisional suku Sunda.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan lingkup pengamalan nilai-nilai Pancasila yang benar mulai dari unit terkecil hingga unit terbesar?',
            options: [
              'Diri Sendiri -> Keluarga -> Sekolah -> Masyarakat -> Negara',
              'Negara -> Masyarakat -> Sekolah -> Keluarga -> Diri Sendiri',
              'Keluarga -> Sekolah -> Diri Sendiri -> Masyarakat -> Negara',
              'Sekolah -> Diri Sendiri -> Keluarga -> Negara -> Masyarakat'
            ],
            answer: 0,
            explanation: 'Urutan pengamalan nilai yang logis dimulai dari Diri Sendiri, kemudian Keluarga, Sekolah/Kelas, Masyarakat/Desa, dan terakhir lingkup Negara/Global.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Gotong Royong',
        topic: 'Gotong Royong',
        questions: [
          {
            id: 6,
            question: 'Kegiatan bekerja bersama-sama secara sukarela demi menyelesaikan kepentingan umum tanpa imbalan upah dinamakan...',
            options: ['Gotong royong', 'Simbiosis', 'Kewirausahaan', 'Pariwisata'],
            answer: 0,
            explanation: 'Gotong royong adalah ciri khas kepribadian bangsa Indonesia untuk bahu-membahu menyelesaikan pekerjaan.'
          },
          {
            id: 7,
            question: 'Manakah contoh perilaku gotong royong yang paling tepat dan bermanfaat di lingkungan sekolah?',
            options: ['Memberi contekan saat ulangan umum', 'Melaksanakan piket kebersihan kelas bersama-sama', 'Mengerjakan PR di sekolah sebelum bel berbunyi', 'Menyalin buku catatan milik teman'],
            answer: 1,
            explanation: 'Piket kelas yang dikerjakan bersama menumbuhkan rasa kebersamaan dan meringankan beban pekerjaan.'
          },
          {
            id: 8,
            question: 'Istilah adat gotong royong membersihkan makam leluhur atau memperbaiki saluran air di daerah Jawa dikenal dengan nama...',
            options: ['Gugur Gunung / Sambatan', 'Mapalus', 'Subak', 'Sasi'],
            answer: 0,
            explanation: 'Gugur gunung adalah istilah gotong royong masyarakat Jawa untuk kepentingan sosial/desa.'
          },
          {
            id: 9,
            question: 'Nilai luhur utama yang terkandung di dalam kegiatan kerja bakti memperbaiki jembatan yang rusak di desa adalah...',
            options: ['Kebanggaan kelompok', 'Persatuan, kesatuan, dan kerukunan', 'Mendapatkan pujian kepala desa', 'Menghabiskan anggaran kas desa'],
            answer: 1,
            explanation: 'Gotong royong memupuk solidaritas sosial tanpa melihat perbedaan latar belakang warga.'
          },
          {
            id: 10,
            question: 'Apakah akibat buruk yang langsung terasa jika warga suatu rukun tetangga mengabaikan gotong royong dan bersikap egois?',
            options: ['Lingkungan menjadi makin bersih', 'Tali silaturahmi putus dan sarana umum menjadi terbengkalai', 'Masyarakat memperoleh hadiah', 'Pekerjaan menjadi sangat cepat selesai'],
            answer: 1,
            explanation: 'Absennya gotong royong membuat sarana umum rusak dan memudarkan rasa kekeluargaan.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Musyawarah',
        topic: 'Musyawarah',
        questions: [
          {
            id: 11,
            question: 'Musyawarah untuk mufakat merupakan cara pengambilan keputusan bersama yang merupakan pengamalan Pancasila, khususnya sila ke...',
            options: ['Dua', 'Tiga', 'Empat', 'Lima'],
            answer: 2,
            explanation: 'Sila keempat menekankan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.'
          },
          {
            id: 12,
            question: 'Terhadap hasil keputusan bersama yang telah disepakati di dalam forum musyawarah, sikap terbaik kita adalah...',
            options: ['Melaksanakannya dengan penuh tanggung jawab dan lapang dada', 'Menolaknya dengan diam-diam', 'Hanya melaksanakan jika diawasi guru', 'Mengkritik secara terus menerus'],
            answer: 0,
            explanation: 'Setiap anggota musyawarah wajib mematuhi dan melaksanakan keputusan mufakat secara konsekuen.'
          },
          {
            id: 13,
            question: 'Apabila pendapat atau usulan yang kita sampaikan tidak dipilih di dalam keputusan akhir musyawarah kelas, kita harus...',
            options: ['Marah dan keluar dari ruangan', 'Menerima dengan ikhlas karena demi kepentingan bersama', 'Memusuhi teman yang berbeda pendapat', 'Menolak mengikuti kegiatan kelas selanjutnya'],
            answer: 1,
            explanation: 'Menghargai keputusan mayoritas merupakan cerminan kedewasaan berdemokrasi.'
          },
          {
            id: 14,
            question: 'Apakah tujuan utama dilaksanakannya musyawarah dalam kehidupan bermasyarakat?',
            options: ['Mencari pemenang dalam perdebatan', 'Mencapai kesepakatan bersama yang adil dan menguntungkan semua pihak', 'Memaksa kehendak pimpinan', 'Memilih orang yang paling pintar'],
            answer: 1,
            explanation: 'Musyawarah bertujuan menyatukan berbagai pandangan menjadi mufakat demi kemaslahatan bersama.'
          },
          {
            id: 15,
            question: 'Siapakah yang berhak dan berkewajiban untuk menyampaikan pendapat serta didengarkan suaranya dalam rapat kelas?',
            options: ['Hanya wali kelas dan ketua kelas saja', 'Seluruh murid anggota kelas tanpa membedakan', 'Hanya murid yang mendapat peringkat satu saja', 'Hanya murid laki-laki saja'],
            answer: 1,
            explanation: 'Persamaan hak bersuara berlaku bagi semua warga kelas sesuai asas keadilan dan demokrasi.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Hak dan Kewajiban',
        topic: 'Hak dan Kewajiban',
        questions: [
          {
            id: 16,
            question: 'Segala sesuatu yang harus kita laksanakan dengan sungguh-sungguh dan penuh rasa tanggung jawab dinamakan...',
            options: ['Hak', 'Kewajiban', 'Imbalan', 'Wewenang'],
            answer: 1,
            explanation: 'Kewajiban adalah keharusan bertindak sesuai hukum dan norma sosial sebelum menerima hak.'
          },
          {
            id: 17,
            question: 'Manakah di bawah ini yang merupakan hak konstitusional dan kasih sayang seorang anak ketika berada di lingkungan rumah?',
            options: ['Mendapatkan kasih sayang dan perlindungan dari orang tua', 'Membantu Ibu memasak di dapur', 'Menghabiskan uang jajan sepuasnya', 'Merapikan tempat tidur sendiri'],
            answer: 0,
            explanation: 'Kasih sayang, sandang pangan, dan perlindungan adalah hak dasar anak dari orang tua di rumah.'
          },
          {
            id: 18,
            question: 'Sebelum kita menuntut hak mendapatkan nilai rapot yang memuaskan dari bapak/ibu guru di sekolah, kewajiban kita adalah...',
            options: ['Meminta maaf terus menerus', 'Belajar dengan sungguh-sungguh dan mengerjakan tugas tepat waktu', 'Menyuap teman agar mengerjakan tugas kita', 'Hanya hadir saat ujian saja'],
            answer: 1,
            explanation: 'Pemenuhan kewajiban belajar mendahului perolehan hak penilaian prestasi akademik.'
          },
          {
            id: 19,
            question: 'Tanggung jawab untuk menjaga kebersihan, kerapian, dan ketertiban lingkungan kelas merupakan kewajiban dari...',
            options: ['Petugas piket hari itu saja', 'Guru kelas dan kepala sekolah', 'Seluruh siswa warga kelas tanpa terkecuali', 'Penjaga sekolah'],
            answer: 2,
            explanation: 'Semua siswa yang beraktivitas di kelas memikul tanggung jawab bersama menjaga kenyamanan belajar.'
          },
          {
            id: 20,
            question: 'Menaati seluruh rambu lalu lintas jalan raya dan membayar pajak secara tepat waktu merupakan contoh perwujudan...',
            options: ['Kewajiban warga negara', 'Hak warga negara', 'Kelonggaran pemerintah', 'Sanksi hukum berat'],
            answer: 0,
            explanation: 'Kewajiban warga negara membantu negara memelihara fasilitas publik dan keamanan berkendara.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Profil Pelajar Pancasila',
        topic: 'Profil Pelajar Pancasila',
        questions: [
          {
            id: 21,
            question: 'Ada berapakah dimensi utama dalam pembentukan karakter Profil Pelajar Pancasila di Kurikulum Merdeka?',
            options: ['4 dimensi', '5 dimensi', '6 dimensi', '7 dimensi'],
            answer: 2,
            explanation: 'Ada 6 dimensi: Beriman & bertakwa, Berkebinekaan global, Gotong royong, Mandiri, Bernalar kritis, dan Kreatif.'
          },
          {
            id: 22,
            question: 'Dimensi karakter yang mengajarkan kita untuk menghargai warisan budaya sendiri sekaligus terbuka berinteraksi dengan budaya bangsa lain adalah...',
            options: ['Bernalar Kritis', 'Berkebinekaan Global', 'Kreatif', 'Mandiri'],
            answer: 1,
            explanation: 'Berkebinekaan global menjaga nilai luhur bangsa sembari memiliki wawasan luas terhadap kemajemukan dunia.'
          },
          {
            id: 23,
            question: 'Ketika kita melaksanakan tugas kelompok secara aktif, rukun, saling membantu, dan berkolaborasi tanpa pamrih, kita menerapkan dimensi...',
            options: ['Gotong Royong', 'Mandiri', 'Bernalar Kritis', 'Beriman'],
            answer: 0,
            explanation: 'Kolaborasi dan kepedulian sosial merupakan inti dari dimensi gotong royong.'
          },
          {
            id: 24,
            question: 'Seorang siswa menyiapkan tas sekolah, memakai seragam sendiri, dan mandi pagi tanpa perlu diingatkan orang tuanya. Ia menunjukkan dimensi...',
            options: ['Kreatif', 'Mandiri', 'Bernalar Kritis', 'Berkebinekaan Global'],
            answer: 1,
            explanation: 'Mandiri ditandai dengan prakarsa atas diri sendiri dan kesiapan menanggung tugas pribadi.'
          },
          {
            id: 25,
            question: 'Mampu memproses informasi, menganalisis, mengevaluasi penalaran, serta mengambil keputusan yang logis merupakan perwujudan dimensi...',
            options: ['Kreatif', 'Bernalar Kritis', 'Mandiri', 'Gotong Royong'],
            answer: 1,
            explanation: 'Bernalar kritis adalah karakter siswa yang mampu berpikir objektif, sistematik, dan berdasarkan fakta.'
          }
        ]
      }
    ]
  },
  matematika: {
    id: 'matematika',
    name: 'MATEMATIKA KELAS 5 SD',
    subtitle: 'Petualangan Mengasah Logika dan Angka',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Pecahan',
        topic: 'Operasi Pecahan',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Ibu membagi loyang kue cokelat berbentuk lingkaran untuk anak-anaknya. Budi memakan 1/4 bagian kue, sedangkan Susi memakan 1/3 bagian kue dari loyang yang sama. Secara kritis, berapakah sisa kue cokelat milik Ibu sekarang?',
            options: [
              '5/12 bagian',
              '7/12 bagian',
              '2/7 bagian',
              '1/2 bagian'
            ],
            answer: 0,
            explanation: 'Total kue yang dimakan Budi dan Susi adalah 1/4 + 1/3 = 3/12 + 4/12 = 7/12 bagian. Sisa kue Ibu adalah satu loyang utuh (1) dikurangi yang dimakan: 1 - 7/12 = 12/12 - 7/12 = 5/12 bagian.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Pecahan dapat dinyatakan dalam berbagai bentuk ekuivalen (senilai), baik dalam desimal maupun pecahan biasa. Di bawah ini, manakah representasi angka yang nilainya setara/senilai dengan pecahan 3/4? (Pilih semua yang benar)',
            options: [
              '0,75 (Bentuk desimal)',
              '6/8 (Pecahan biasa belum sederhana)',
              '0,34 (Bentuk desimal pendekatan)',
              '75/100 (Bentuk pecahan per seratus / persen)'
            ],
            answer: 0,
            correctAnswers: [0, 1, 3],
            explanation: '3/4 setara dengan 0,75. Jika pembilang dan penyebut dikali 2 menjadi 6/8. Jika dijadikan persen/per seratus menjadi 75/100. 0,34 adalah salah.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Seorang siswa berpendapat: "Pecahan 2/5 nilainya pasti lebih besar dibanding 3/10 karena angka pembilang 2 dan penyebut 5 pada 2/5 lebih bersahabat daripada 3 dan 10." Benarkah metode analisis perbandingan siswa tersebut?',
            options: ['Benar', 'Salah'],
            answer: 1,
            explanation: 'Pernyataan siswa tersebut Salah secara matematis. Untuk membandingkan, samakan penyebutnya: 2/5 = 4/10. Jadi, 4/10 memang lebih besar dari 3/10, sehingga 2/5 > 3/10. Namun alasannya haruslah penyamaan penyebut (ekuivalensi), bukan karena angkanya "bersahabat".'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah nilai pecahan biasa berikut ini dengan nilai bentuk pecahan desimalnya yang tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['1/2', '1/4', '3/5'],
            matchingRight: ['0,25', '0,6', '0,5'],
            matchingPairs: { 0: 2, 1: 0, 2: 1 },
            explanation: '1/2 sama dengan 0,5; 1/4 sama dengan 0,25; dan 3/5 sama dengan 6/10 atau 0,6.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan pecahan berikut ini yang benar mulai dari nilai yang paling KECIL ke yang paling BESAR?',
            options: [
              '1/8, 1/4, 2/5, 1/2, 3/4',
              '3/4, 1/2, 2/5, 1/4, 1/8',
              '1/2, 1/4, 1/8, 2/5, 3/4',
              '1/4, 1/8, 1/2, 3/4, 2/5'
            ],
            answer: 0,
            explanation: 'Dalam bentuk desimal: 1/8 (0,125), 1/4 (0,25), 2/5 (0,4), 1/2 (0,5), dan 3/4 (0,75). Jadi urutannya adalah 1/8 < 1/4 < 2/5 < 1/2 < 3/4.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Bangun Datar',
        topic: 'Bangun Datar',
        questions: [
          {
            id: 6,
            question: 'Rumus matematika yang tepat untuk menghitung luas sebuah bangun datar persegi panjang adalah...',
            options: ['s x s', 'p x l', '2 x (p + l)', '1/2 x a x t'],
            answer: 1,
            explanation: 'Luas persegi panjang dihitung dengan mengalikan panjang (p) dan lebar (l).'
          },
          {
            id: 7,
            question: 'Sebuah segitiga siku-siku memiliki panjang alas 10 cm dan tinggi 8 cm. Luas segitiga tersebut adalah...',
            options: ['80 cm²', '40 cm²', '18 cm²', '20 cm²'],
            answer: 1,
            explanation: 'Luas segitiga = 1/2 x alas x tinggi = 1/2 x 10 cm x 8 cm = 40 cm².'
          },
          {
            id: 8,
            question: 'Hitunglah keliling sebuah bangun persegi jika panjang salah satu sisinya adalah 6 cm!',
            options: ['36 cm', '24 cm', '12 cm', '18 cm'],
            answer: 1,
            explanation: 'Keliling persegi = 4 x sisi = 4 x 6 cm = 24 cm.'
          },
          {
            id: 9,
            question: 'Bangun datar segi empat yang memiliki empat sisi sama panjang dan semua sudutnya siku-siku (90 derajat) disebut...',
            options: ['Persegi Panjang', 'Persegi', 'Belah Ketupat', 'Jajar Genjang'],
            answer: 1,
            explanation: 'Persegi memiliki 4 sisi sama panjang dan 4 sudut siku-siku. Belah ketupat tidak selalu bersudut siku-siku.'
          },
          {
            id: 10,
            question: 'Berapakah jumlah total derajat seluruh sudut dalam yang ada pada bangun datar segitiga jenis apa saja?',
            options: ['90 derajat', '180 derajat', '360 derajat', '270 derajat'],
            answer: 1,
            explanation: 'Jumlah ketiga sudut di dalam segitiga selalu menghasilkan tepat 180 derajat.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Volume Kubus & Balok',
        topic: 'Volume Kubus dan Balok',
        questions: [
          {
            id: 11,
            question: 'Apakah rumus yang paling tepat untuk menghitung volume dari bangun ruang kubus?',
            options: ['p x l x t', 's x s x s', '6 x s²', 's x s'],
            answer: 1,
            explanation: 'Volume kubus dihitung dengan memangkatkan tiga panjang rusuknya (s³ atau s x s x s).'
          },
          {
            id: 12,
            question: 'Sebuah kubus memiliki panjang rusuk (sisi) sebesar 5 cm. Hitunglah volume kubus tersebut!',
            options: ['15 cm³', '25 cm³', '125 cm³', '150 cm³'],
            answer: 2,
            explanation: 'Volume = 5 cm x 5 cm x 5 cm = 125 cm³.'
          },
          {
            id: 13,
            question: 'Sebuah balok mainan mempunyai panjang 8 cm, lebar 5 cm, dan tinggi 4 cm. Volume balok tersebut adalah...',
            options: ['160 cm³', '40 cm³', '80 cm³', '17 cm³'],
            answer: 0,
            explanation: 'Volume balok = panjang x lebar x tinggi = 8 x 5 x 4 = 160 cm³.'
          },
          {
            id: 14,
            question: 'Apabila volume sebuah wadah berbentuk kubus terisi penuh air sebanyak 64 cm³, berapakah panjang rusuk kubus tersebut?',
            options: ['3 cm', '4 cm', '6 cm', '8 cm'],
            answer: 1,
            explanation: 'Akar pangkat tiga dari 64 (³√64) adalah 4 cm, karena 4 x 4 x 4 = 64.'
          },
          {
            id: 15,
            question: 'Untuk menghitung volume balok dengan ukuran panjang (p), lebar (l), dan tinggi (t), rumus yang digunakan adalah...',
            options: ['p x l x t', 'p + l + t', '2 x (p + l + t)', 'p x l + t'],
            answer: 0,
            explanation: 'Volume balok adalah hasil kali ukuran tiga dimensi utama tersebut (p x l x t).'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Diagram Data',
        topic: 'Diagram Data',
        questions: [
          {
            id: 16,
            question: 'Sebuah bentuk visualisasi data yang menyajikan nilai menggunakan gambar lambang atau ikon tertentu disebut...',
            options: ['Diagram Batang', 'Piktogram', 'Diagram Garis', 'Tabel Angka'],
            answer: 1,
            explanation: 'Piktogram atau diagram gambar menggunakan gambar/simbol untuk mewakili kuantitas data tertentu.'
          },
          {
            id: 17,
            question: 'Dari total 20 siswa, diperoleh data: 5 siswa suka apel, 10 siswa suka pisang, dan sisanya suka jeruk. Berapa banyak siswa yang suka jeruk?',
            options: ['5 siswa', '10 siswa', '15 siswa', '3 siswa'],
            answer: 0,
            explanation: 'Siswa suka jeruk = Total - (Apel + Pisang) = 20 - (5 + 10) = 5 siswa.'
          },
          {
            id: 18,
            question: 'Jenis diagram yang menyajikan data statistik menggunakan persegi panjang (batang) tegak atau mendatar adalah...',
            options: ['Diagram Lingkaran', 'Diagram Batang', 'Piktogram', 'Diagram Garis'],
            answer: 1,
            explanation: 'Diagram batang menyajikan perbandingan data dalam bentuk ketinggian/panjang balok.'
          },
          {
            id: 19,
            question: 'Di dalam materi pengolahan data statistik, nilai yang paling sering atau paling banyak muncul dinamakan...',
            options: ['Mean (Rata-rata)', 'Median (Nilai tengah)', 'Modus', 'Rentang'],
            answer: 2,
            explanation: 'Modus adalah data dengan frekuensi kemunculan tertinggi dalam kumpulan data.'
          },
          {
            id: 20,
            question: 'Berikut data hasil panen padi desa Sukamaju (dalam ton): 12, 15, 10, 15, 18. Modus hasil panen desa tersebut adalah...',
            options: ['12 ton', '15 ton', '10 ton', '18 ton'],
            answer: 1,
            explanation: 'Nilai 15 muncul sebanyak 2 kali, paling sering dibanding angka lainnya.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Pemecahan Masalah',
        topic: 'Pemecahan Masalah',
        questions: [
          {
            id: 21,
            question: 'Ibu berbelanja ke pasar membeli 2,5 kg beras dan 1,25 kg tepung terigu. Berapakah berat total belanjaan Ibu?',
            options: ['3,5 kg', '3,75 kg', '3,25 kg', '4,0 kg'],
            answer: 1,
            explanation: 'Menjumlahkan desimal: 2,50 + 1,25 = 3,75 kg.'
          },
          {
            id: 22,
            question: 'Ayah mengendarai sepeda motor selama 2 jam penuh dengan kecepatan rata-rata 60 km/jam. Jarak yang ditempuh Ayah adalah...',
            options: ['30 km', '120 km', '80 km', '100 km'],
            answer: 1,
            explanation: 'Jarak = Kecepatan x Waktu = 60 km/jam x 2 jam = 120 km.'
          },
          {
            id: 23,
            question: 'Sebuah kolam kosong diisi air penuh selama 30 menit. Jika debit keran air adalah 10 liter/menit, berapakah volume kolam tersebut?',
            options: ['300 liter', '30 liter', '3 liter', '150 liter'],
            answer: 0,
            explanation: 'Volume = Debit x Waktu = 10 liter/menit x 30 menit = 300 liter.'
          },
          {
            id: 24,
            question: 'Jika harga 5 buah buku tulis adalah Rp 15.000, berapakah harga yang harus dibayar untuk membeli 3 buah buku tulis?',
            options: ['Rp 6.000', 'Rp 9.000', 'Rp 10.000', 'Rp 12.000'],
            answer: 1,
            explanation: 'Harga 1 buku = Rp 15.000 / 5 = Rp 3.000. Harga 3 buku = Rp 3.000 x 3 = Rp 9.000.'
          },
          {
            id: 25,
            question: 'Selisih umur Kakak dan Adik adalah 4 tahun. Apabila saat ini umur Kakak adalah 12 tahun, berapakah umur Adik?',
            options: ['16 tahun', '8 tahun', '6 tahun', '10 tahun'],
            answer: 1,
            explanation: 'Adik lebih muda dari Kakak, sehingga umur Adik = 12 - 4 = 8 tahun.'
          }
        ]
      }
    ]
  },
  bahasa_indonesia: {
    id: 'bahasa_indonesia',
    name: 'BAHASA INDONESIA KELAS 5',
    subtitle: 'Petualangan Menjelajahi Kata dan Makna',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Ide Pokok',
        topic: 'Ide Pokok Paragraf',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Bacalah paragraf berikut secara saksama:\n"Limbah plastik sekali pakai di wilayah pesisir Indonesia berada pada tingkat yang mengkhawatirkan. Menurut laporan riset kelautan, tumpukan sampah ini tidak hanya merusak keindahan pantai, tetapi juga meracuni biota laut akibat mikroplastik yang tertelan oleh ikan. Sinergi masif antara regulasi pemerintah dan kesadaran konsumsi masyarakat menjadi satu-satunya jalan keluar untuk menekan polusi ini."\nDitinjau secara kritis, apakah ide pokok paragraf di atas?',
            options: [
              'Kondisi limbah plastik di pesisir Indonesia sangat mengkhawatirkan dan merusak ekosistem kelautan',
              'Mikroplastik adalah jenis racun berbahaya bagi kesehatan pencernaan manusia',
              'Pemerintah Indonesia telah meluncurkan regulasi ketat mengenai denda pembuangan sampah',
              'Ikan-ikan di laut senang memakan sampah plastik yang terapung di permukaan pantai'
            ],
            answer: 0,
            explanation: 'Ide pokok terletak pada inti kalimat utama di awal paragraf (deduktif), yaitu mengenai keprihatinan atas tingginya polusi limbah plastik di pesisir Indonesia dan dampak destruktifnya bagi ekosistem.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Sebuah paragraf akademis yang ideal harus memenuhi asas kepaduan (koherensi) dan kesatuan (kohesi). Manakah di bawah ini yang merupakan fungsi dan ciri dari kalimat penjelas (pendukung) yang sahih di dalam paragraf? (Pilih semua yang benar)',
            options: [
              'Menguraikan gagasan utama dengan menyajikan data empiris, contoh kasus, atau alasan logis',
              'Memperkenalkan ide pokok baru yang sama sekali berbeda dan tidak berhubungan dengan kalimat utama',
              'Menggunakan konjungsi (kata hubung) yang tepat untuk memelihara alur logika antarkalimat',
              'Menjelaskan rincian spesifik guna mendukung argumen utama agar lebih meyakinkan pembaca'
            ],
            answer: 0,
            correctAnswers: [0, 2, 3],
            explanation: 'Kalimat penjelas harus mendukung satu gagasan utama tunggal dalam paragraf. Memasukkan ide pokok baru yang tidak relevan akan merusak kesatuan (kohesi) paragraf.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Dalam penulisan esai, Paragraf Deduktif didefinisikan sebagai paragraf yang menaruh ide pokoknya di akhir sebagai kesimpulan, sedangkan Paragraf Induktif menaruh ide pokoknya di awal paragraf sebagai pengantar umum. Benar atau salah pernyataan tersebut?',
            options: ['Benar', 'Salah'],
            answer: 1,
            explanation: 'Pernyataan tersebut Salah. Definisi tersebut tertukar! Paragraf Deduktif menaruh gagasan utama di awal (umum ke khusus), sedangkan Induktif menaruh gagasan utama di akhir (khusus ke umum).'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah jenis paragraf berdasarkan letak kalimat utamanya berikut ini dengan penjelasannya secara tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['Paragraf Deduktif', 'Paragraf Induktif', 'Paragraf Campuran'],
            matchingRight: ['Kalimat utama di akhir paragraf', 'Kalimat utama di awal dan di akhir paragraf', 'Kalimat utama di awal paragraf'],
            matchingPairs: { 0: 2, 1: 0, 2: 1 },
            explanation: 'Deduktif meletakkan kalimat utama di awal, Induktif meletakkan kalimat utama di akhir, dan Campuran (deduktif-induktif) meletakkannya di awal dan akhir.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Urutan langkah-langkah yang benar dalam menyusun ringkasan (sinopsis) teks yang baik adalah...',
            options: [
              'Membaca teks utuh -> Mencatat ide pokok -> Menulis dengan bahasa sendiri -> Menyunting ejaan',
              'Menyunting ejaan -> Mencatat ide pokok -> Membaca teks utuh -> Menulis dengan bahasa sendiri',
              'Mencatat ide pokok -> Membaca teks utuh -> Menyunting ejaan -> Menulis dengan bahasa sendiri',
              'Menulis dengan bahasa sendiri -> Membaca teks utuh -> Mencatat ide pokok -> Menyunting ejaan'
            ],
            answer: 0,
            explanation: 'Langkah meringkas yang benar adalah: Membaca teks secara utuh, Mencatat ide pokok, Merekonstruksi dengan bahasa sendiri, lalu Membandingkan & Menyunting ejaan.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Informasi Penting',
        topic: 'Informasi Penting',
        questions: [
          {
            id: 6,
            question: 'Untuk menanyakan "alasan, latar belakang, atau penyebab" terjadinya suatu peristiwa dalam teks, kata tanya yang digunakan adalah...',
            options: ['Kapan', 'Di mana', 'Mengapa', 'Siapa'],
            answer: 2,
            explanation: 'Kata tanya "Mengapa" selalu membutuhkan jawaban berupa alasan yang biasanya diawali kata "karena" atau "sebab".'
          },
          {
            id: 7,
            question: 'Kata tanya yang paling tepat digunakan untuk menggali informasi mengenai "lokasi, tempat, atau arah" suatu kejadian adalah...',
            options: ['Kapan', 'Di mana', 'Bagaimana', 'Berapa'],
            answer: 1,
            explanation: '"Di mana" digunakan untuk menanyakan tempat keberadaan, kedatangan, atau penempatan.'
          },
          {
            id: 8,
            question: 'Dalam membaca pemahaman, kata tanya "Bagaimana" digunakan untuk menanyakan informasi terkait...',
            options: ['Waktu kejadian perkara', 'Orang yang terlibat', 'Cara, keadaan, atau proses terjadinya peristiwa', 'Jumlah objek benda'],
            answer: 2,
            explanation: '"Bagaimana" menanyakan kejelasan tentang cara, mutu, atau keadaan suatu hal.'
          },
          {
            id: 9,
            question: 'Metode membaca cepat untuk menemukan informasi tertentu secara spesifik (seperti nomor telepon atau kata kunci) disebut...',
            options: ['Skimming (Membaca sekilas)', 'Scanning (Membaca memindai)', 'Membaca nyaring', 'Membaca indah'],
            answer: 1,
            explanation: 'Scanning dilakukan dengan cara langsung melompat ke bagian teks tertentu untuk mencari informasi spesifik.'
          },
          {
            id: 10,
            question: 'Jenis tulisan atau teks yang dibuat berdasarkan fakta-fakta nyata, peristiwa sejarah, atau keadaan ilmiah yang sebenarnya disebut...',
            options: ['Teks Fiksi', 'Teks Dongeng', 'Teks Nonfiksi', 'Teks Cerpen'],
            answer: 2,
            explanation: 'Nonfiksi menyajikan kebenaran objektif dan fakta nyata, bukan rekaan imajinasi penulis.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Iklan',
        topic: 'Iklan',
        questions: [
          {
            id: 11,
            question: 'Media komunikasi yang berisi pesan persuasif untuk mendorong, membujuk, atau mempromosikan barang/jasa kepada pembaca disebut...',
            options: ['Pengumuman kelas', 'Iklan', 'Dongeng fabel', 'Surat pribadi'],
            answer: 1,
            explanation: 'Iklan bertujuan menarik perhatian audiens agar membeli atau menggunakan apa yang ditawarkan.'
          },
          {
            id: 12,
            question: 'Jenis bahasa yang wajib digunakan dalam penulisan sebuah teks iklan agar pembaca merasa tertarik adalah...',
            options: ['Bahasa ilmiah yang kaku', 'Persuasif (bersifat membujuk) dan komunikatif', 'Bahasa rahasia atau bersandi', 'Bahasa daerah kuno'],
            answer: 1,
            explanation: 'Bahasa persuasif memudahkan penyampaian pesan rayuan yang halus agar pembaca terpengaruh.'
          },
          {
            id: 13,
            question: 'Kalimat iklan: "Ayo, gunakan air secukupnya demi kelestarian bumi kita!" Kalimat tersebut termasuk contoh iklan jenis...',
            options: ['Iklan Niaga / Penawaran barang', 'Iklan Layanan Masyarakat', 'Iklan Keluarga', 'Iklan lowongan kerja'],
            answer: 1,
            explanation: 'Iklan layanan masyarakat dibuat untuk memberikan himbauan atau sosialisasi sosial demi kebaikan bersama.'
          },
          {
            id: 14,
            question: 'Bagian teks iklan berupa kalimat singkat, padat, dan sangat mudah diingat oleh pembaca yang mencirikan identitas produk disebut...',
            options: ['Subjudul', 'Alamat produsen', 'Slogan', 'Daftar harga'],
            answer: 2,
            explanation: 'Slogan dirancang menarik dan puitis agar melekat kuat di ingatan masyarakat konsumen.'
          },
          {
            id: 15,
            question: 'Iklan yang disebarkan melalui perantara televisi, media radio streaming, atau halaman web internet dikategorikan sebagai...',
            options: ['Iklan Media Cetak', 'Iklan Baris', 'Iklan Elektronik', 'Iklan Reklame Baliho'],
            answer: 2,
            explanation: 'Iklan elektronik menggunakan alat pemancar sinyal digital/elektronik dalam penyebarannya.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Surat Elektronik (Surel)',
        topic: 'Surat Elektronik',
        questions: [
          {
            id: 16,
            question: 'Surat elektronik merupakan surat modern yang dikirim digital melalui internet. Dalam bahasa Inggris dikenal dengan nama...',
            options: ['Web Chat', 'E-mail (Electronic Mail)', 'Social Media', 'Short Message Service'],
            answer: 1,
            explanation: 'E-mail singkatan dari Electronic Mail, dikirim menggunakan alamat surat digital unik.'
          },
          {
            id: 17,
            question: 'Bagian atau kolom pada surat surel yang digunakan untuk mengisikan "judul, pokok surat, atau perihal pesan" adalah...',
            options: ['Cc (Carbon Copy)', 'Subject / Perihal', 'Attachment / Lampiran', 'Signature'],
            answer: 1,
            explanation: 'Subject memudahkan penerima memahami garis besar maksud surel sebelum membukanya.'
          },
          {
            id: 18,
            question: 'Untuk mengirim surel tembusan ke banyak orang secara rahasia tanpa penerima utama mengetahui alamat penerima tembusan tersebut, digunakan...',
            options: ['Cc', 'Bcc (Blind Carbon Copy)', 'To / Penerima', 'Draft'],
            answer: 1,
            explanation: 'Bcc menyembunyikan alamat surel penerima lain dari pandangan penerima lainnya.'
          },
          {
            id: 19,
            question: 'Tombol utama yang harus diklik oleh pengirim agar surat elektronik yang sudah selesai ditulis meluncur ke alamat tujuan adalah...',
            options: ['Send (Kirim)', 'Delete (Hapus)', 'Save Draft', 'Spam'],
            answer: 0,
            explanation: 'Send atau Kirim adalah tombol eksekusi akhir pengiriman surel.'
          },
          {
            id: 20,
            question: 'Simbol atau ikon berbentuk klip kertas (paperclip) di dalam surel berfungsi untuk melampirkan berkas, disebut dengan...',
            options: ['Emoji', 'Attachment (Lampiran berkas)', 'Link Web', 'Filter gambar'],
            answer: 1,
            explanation: 'Attachment atau Lampiran digunakan untuk menyisipkan dokumen, foto, atau video ke dalam surel.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Teks Eksplanasi',
        topic: 'Teks Eksplanasi',
        questions: [
          {
            id: 21,
            question: 'Jenis teks nonfiksi ilmiah yang memaparkan proses terjadinya fenomena alam, sosial, ilmu pengetahuan, atau budaya secara runtut disebut...',
            options: ['Teks Narasi', 'Teks Eksplanasi', 'Teks Prosedur', 'Teks Negosiasi'],
            answer: 1,
            explanation: 'Teks eksplanasi menjawab pertanyaan "mengapa" dan "bagaimana" suatu fenomena bisa terjadi.'
          },
          {
            id: 22,
            question: 'Urutan kerangka struktur penulisan teks eksplanasi yang tepat adalah terdiri dari...',
            options: ['Pernyataan umum, deret penjelas (sebab-akibat), dan kesimpulan / interpretasi', 'Orientasi, komplikasi, dan resolusi', 'Tujuan, alat bahan, dan langkah-langkah kerja', 'Tesis, argumentasi, dan penegasan ulang'],
            answer: 0,
            explanation: 'Teks eksplanasi diawali gambaran umum, lalu sebab-akibat terperinci, dan ditutup dengan kesimpulan penutup.'
          },
          {
            id: 23,
            question: 'Manakah topik fenomena alam di bawah ini yang paling cocok dibahas menggunakan struktur teks eksplanasi ilmiah?',
            options: ['Kisah kancil mencuri ketimun', 'Proses terbentuknya pelangi di langit setelah hujan', 'Langkah menyeduh mie instan yang lezat', 'Cerita liburan keluarga ke kebun binatang'],
            answer: 1,
            explanation: 'Proses terbentuknya pelangi merupakan fenomena alam fisika-optik yang dapat diterangkan secara ilmiah.'
          },
          {
            id: 24,
            question: 'Teks eksplanasi selalu menyajikan peristiwa apa adanya tanpa ditambah opini subjektif khayalan penulis, sehingga bersifat...',
            options: ['Faktual (berdasarkan fakta nyata)', 'Fiktif imajinatif', 'Rahasia negara', 'Bahasa puitis majas'],
            answer: 0,
            explanation: 'Informasi yang termuat di dalam teks eksplanasi wajib didasarkan pada kebenaran fakta ilmiah.'
          },
          {
            id: 25,
            question: 'Di bawah ini, manakah kata penghubung (konjungsi) kausalitas yang menandakan hubungan sebab-akibat dalam teks eksplanasi?',
            options: ['Dan, lalu, kemudian', 'Sehingga, karena, oleh karena itu, sebab', 'Atau, melainkan', 'Mungkin, barangkali'],
            answer: 1,
            explanation: 'Konjungsi kausalitas menghubungkan kalimat yang menyatakan hubungan sebab dan akibat peristiwa.'
          }
        ]
      }
    ]
  },
  pai: {
    id: 'pai',
    name: 'PAI KELAS 5 SD',
    subtitle: 'Pendidikan Agama Islam & Budi Pekerti',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Memahami Surah Al-Ma\'un',
        topic: 'Surah Al-Ma\'un & Kandungannya',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Surah Al-Ma\'un secara revolusioner membongkar paradox keberagaman: seseorang yang melakukan ritual ibadah shalat formal namun dapat tetap dikategorikan "celaka" (Wail) dan "mendustakan agama". Secara analitis, mengapa pelaku shalat tersebut dinyatakan celaka menurut Surah Al-Ma\'un?',
            options: [
              'Karena shalat mereka dilakukan secara lalai (tidak meresapi maknanya), diiringi sifat riya (ingin dipuji), dan mengabaikan solidaritas sosial kepada sesama',
              'Karena mereka membaca ayat Al-Quran dengan pelafalan dialek luar negeri',
              'Karena mereka tidak mengenakan pakaian berwarna putih sutra saat shalat berjamaah',
              'Karena mereka berdoa meminta kesuksesan duniawi dalam sujud terakhir'
            ],
            answer: 0,
            explanation: 'Sesuai ayat 4-7, kecelakaan ditujukan bagi mushallin (orang yang shalat) yang lalai dari esensi shalatnya, berbuat riya, serta bersikap kikir/enggan menolong sesama dengan barang-barang yang berguna.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Surah Al-Ma\'un memberikan potret konkret mengenai ciri-ciri pendusta agama (yakni orang yang menyimpang dari hakikat ketulusan iman). Manakah di bawah ini yang merupakan tindakan-tindakan nyata yang dicap sebagai "mendustakan agama" berdasarkan teks surah tersebut? (Pilih semua yang benar)',
            options: [
              'Bertindak sewenang-wenang, membenci, atau menelantarkan hak emosional/materi anak yatim',
              'Tidak memiliki kepedulian sosial untuk menganjurkan gerakan memberi makan orang-orang miskin',
              'Melakukan ibadah shalat semata-mata demi pencitraan sosial agar dinilai saleh oleh orang lain (riya)',
              'Membeli barang-barang kebutuhan pokok yang diproduksi oleh produsen non-muslim'
            ],
            answer: 0,
            correctAnswers: [0, 1, 2],
            explanation: 'Ciri pendusta agama dalam Al-Ma\'un adalah menghardik anak yatim (ayat 2), tidak menganjurkan memberi makan orang miskin (ayat 3), dan berbuat shalat dengan riya (ayat 5-6). Membeli barang dari non-muslim tidak dilarang.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Seseorang berargumen: "Saya sudah menyumbang uang yang banyak untuk panti asuhan anak yatim secara online. Oleh karena itu, sah-sah saja jika saya memarahi mereka secara kasar di depan umum karena secara finansial kebutuhan mereka sudah saya penuhi." Benarkah argumen ini jika ditinjau dari nilai moral pelarangan "menghardik anak yatim"?',
            options: ['Benar', 'Salah'],
            answer: 1,
            explanation: 'Pernyataan tersebut Salah. Menghardik (yadu\'\'u) tidak hanya berupa pengabaian materi, melainkan juga kekerasan verbal, psikologis, emosional, dan perlakuan kasar yang merendahkan martabat kemanusiaan mereka.'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah potongan lafadz ayat Surah Al-Ma\'un berikut ini dengan makna kandungannya secara tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['Yadu\'\'ul-yatim', 'Al-ladzina hum yura\'un', 'Wayamna\'unal-ma\'un'],
            matchingRight: ['Orang-orang yang berbuat riya / pamer', 'Enggan memberikan bantuan barang berguna', 'Menghardik dan menolak anak yatim'],
            matchingPairs: { 0: 2, 1: 0, 2: 1 },
            explanation: 'Yadu\'\'ul-yatim artinya menghardik anak yatim; hum yura\'un artinya orang yang berbuat riya; dan yamna\'unal-ma\'un artinya enggan menolong dengan barang yang berguna.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan awal ayat Surah Al-Ma\'un yang benar dari ayat 1 sampai ayat 3?',
            options: [
              'Ara\'aital-ladzi... -> Fadhalikal-ladzi... -> Wa la yahudh-dhu...',
              'Fadhalikal-ladzi... -> Ara\'aital-ladzi... -> Wa la yahudh-dhu...',
              'Wa la yahudh-dhu... -> Fadhalikal-ladzi... -> Ara\'aital-ladzi...',
              'Ara\'aital-ladzi... -> Wa la yahudh-dhu... -> Fadhalikal-ladzi...'
            ],
            answer: 0,
            explanation: 'Urutan ayat Surah Al-Ma\'un dimulai dari: (1) Ara\'aital-ladzi yukadzdzibu bid-din, (2) Fadhalikal-ladzi yadu\'\'ul-yatim, (3) Wa la yahudh-dhu \'ala tha\'amil-miskin.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Asmaul Husna',
        topic: 'Mengenal Nama-Nama Allah yang Indah',
        questions: [
          {
            id: 6,
            question: 'Asmaul Husna Al-Mumit memiliki arti bahwa Allah Maha...',
            options: ['Mematikan', 'Menghidupkan', 'Berdiri Sendiri', 'Maha Esa'],
            answer: 0,
            explanation: 'Al-Mumit artinya Allah Yang Maha Mematikan semua makhluk-Nya.'
          },
          {
            id: 7,
            question: 'Allah SWT tidak membutuhkan bantuan siapa pun dalam mengurus alam semesta karena Dia bersifat Al-Qayyum, yang artinya Maha...',
            options: ['Mandiri / Berdiri Sendiri', 'Mendengar', 'Melihat', 'Bijaksana'],
            answer: 0,
            explanation: 'Al-Qayyum artinya Yang Maha Berdiri Sendiri atau Mandiri.'
          },
          {
            id: 8,
            question: 'Asmaul husna yang menunjukkan bahwa Allah Maha Menghidupkan adalah...',
            options: ['Al-Hayyu', 'Al-Mumit', 'Al-Ahad', 'Al-Qayyum'],
            answer: 0,
            explanation: 'Al-Hayyu artinya Yang Maha Hidup (atau Maha Menghidupkan).'
          },
          {
            id: 9,
            question: 'Keyakinan bahwa Allah itu tunggal dan tidak ada sekutu bagi-Nya adalah arti dari Al-Ahad, yaitu Maha...',
            options: ['Esa', 'Kuat', 'Adil', 'Pengasih'],
            answer: 0,
            explanation: 'Al-Ahad artinya Maha Esa atau Maha Tunggal.'
          },
          {
            id: 10,
            question: 'Berapakah jumlah Asmaul Husna yang wajib kita ketahui secara umum?',
            options: ['99', '25', '114', '50'],
            answer: 0,
            explanation: 'Jumlah nama-nama baik Allah (Asmaul Husna) yang tercatat dalam Al-Qur\'an adalah 99 nama.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Saling Menghargai dalam Keragaman',
        topic: 'Ukhuwah & Toleransi',
        questions: [
          {
            id: 11,
            question: 'Allah menciptakan manusia berbeda suku dan bangsa agar saling...',
            options: ['Mengenal (Ta\'aruf)', 'Memusuhi', 'Berlomba mencari kekayaan', 'Menjauhi satu sama lain'],
            answer: 0,
            explanation: 'Dalam Surah Al-Hujurat ayat 13, manusia diciptakan berbangsa-bangsa dan bersuku-suku agar saling mengenal.'
          },
          {
            id: 12,
            question: 'Sikap menghormati perbedaan agama, ras, dan budaya antar sesama disebut...',
            options: ['Toleransi (Tasamuh)', 'Tolong-menolong (Ta\'awun)', 'Jujur (Siddiq)', 'Adil (\'Adl)'],
            answer: 0,
            explanation: 'Toleransi atau Tasamuh adalah sikap saling menghargai dan menghormati perbedaan.'
          },
          {
            id: 13,
            question: 'Jika ada teman yang berbeda agama sedang beribadah, sikap kita yang benar adalah...',
            options: ['Menghormatinya dan tidak mengganggunya', 'Mengajaknya bermain dengan paksa', 'Menertawakannya', 'Melarangnya beribadah'],
            answer: 0,
            explanation: 'Menghormati kebebasan beribadah pemeluk agama lain adalah wujud kerukunan umat beragama.'
          },
          {
            id: 14,
            question: 'Persaudaraan yang didasarkan pada kesamaan iman dan agama disebut...',
            options: ['Ukhuwah Islamiyah', 'Ukhuwah Wathaniyah', 'Ukhuwah Basyariyah', 'Ukhuwah Insaniyah'],
            answer: 0,
            explanation: 'Ukhuwah Islamiyah adalah persaudaraan sesama umat Islam.'
          },
          {
            id: 15,
            question: 'Contoh perilaku menghargai lingkungan sekitar di lingkungan sekolah adalah...',
            options: ['Membuang sampah pada tempatnya', 'Mencoret-coret meja kelas', 'Merusak tanaman taman sekolah', 'Membiarkan air keran mengalir sia-sia'],
            answer: 0,
            explanation: 'Menjaga kebersihan sekolah dengan membuang sampah di tempat sampah merupakan wujud menjaga ciptaan Allah.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Kisah Teladan Nabi dan Rasul',
        topic: 'Nabi Ulul \'Azmi',
        questions: [
          {
            id: 16,
            question: 'Gelar khusus yang diberikan kepada nabi yang memiliki ketabahan luar biasa dalam berdakwah disebut...',
            options: ['Ulul \'Azmi', 'Khulafaur Rasyidin', 'Uswatun Hasanah', 'Khatamul Anbiya'],
            answer: 0,
            explanation: 'Ulul \'Azmi adalah gelar bagi para rasul yang memiliki keteguhan dan kesabaran yang luar biasa.'
          },
          {
            id: 17,
            question: 'Manakah di antara rasul berikut yang termasuk golongan rasul Ulul \'Azmi?',
            options: ['Nabi Nuh AS', 'Nabi Adam AS', 'Nabi Sulaiman AS', 'Nabi Yusuf AS'],
            answer: 0,
            explanation: 'Ada 5 Rasul Ulul \'Azmi, disingkat MIMIN: Muhammad SAW, Ibrahim AS, Musa AS, Isa AS, dan Nuh AS.'
          },
          {
            id: 18,
            question: 'Mukjizat Nabi Musa AS yang sangat terkenal saat dikejar oleh bala tentara Firaun adalah...',
            options: ['Membelah Laut Merah dengan tongkatnya', 'Membuat perahu besar di atas bukit', 'Tidak hangus dibakar api', 'Dapat berbicara dengan hewan'],
            answer: 0,
            explanation: 'Nabi Musa dianugerahi mukjizat membelah Laut Merah dengan tongkatnya atas izin Allah.'
          },
          {
            id: 19,
            question: 'Nabi Ibrahim AS diberikan mukjizat berupa...',
            options: ['Tidak terbakar oleh kobaran api Raja Namrud', 'Dapat menghidupkan orang mati', 'Memiliki kerajaan yang sangat luas', 'Suara yang sangat merdu'],
            answer: 0,
            explanation: 'Nabi Ibrahim diselamatkan Allah dari api unggun raksasa Raja Namrud tanpa terluka sedikit pun.'
          },
          {
            id: 20,
            question: 'Siapakah Nabi terakhir yang diutus Allah sebagai penutup para nabi dan rasul?',
            options: ['Nabi Muhammad SAW', 'Nabi Isa AS', 'Nabi Musa AS', 'Nabi Adam AS'],
            answer: 0,
            explanation: 'Nabi Muhammad SAW adalah penutup para nabi (Khatamul Anbiya) dan pembawa risalah Islam yang sempurna.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Ibadah Haji dan Kurban',
        topic: 'Rukun Islam ke-5 & Syiar Kurban',
        questions: [
          {
            id: 21,
            question: 'Hukum melaksanakan ibadah haji bagi umat Islam yang mampu secara fisik dan finansial adalah...',
            options: ['Wajib sekali seumur hidup', 'Sunnah Muakkad', 'Mubah', 'Fardhu Kifayah'],
            answer: 0,
            explanation: 'Melaksanakan ibadah haji hukumnya wajib sekali seumur hidup bagi setiap muslim yang sudah mampu (istitha\'ah).'
          },
          {
            id: 22,
            question: 'Mengelilingi Ka\'bah sebanyak tujuh kali dalam rangkaian ibadah haji disebut...',
            options: ['Thawaf', 'Sa\'i', 'Wukuf', 'Ihram'],
            answer: 0,
            explanation: 'Thawaf adalah kegiatan mengelilingi Ka\'bah sebanyak 7 kali putaran dengan posisi Ka\'bah di sebelah kiri.'
          },
          {
            id: 23,
            question: 'Ibadah kurban dilaksanakan setiap tahun pada bulan Hijriah...',
            options: ['Dzulhijjah', 'Ramadhan', 'Syawal', 'Muharram'],
            answer: 0,
            explanation: 'Kurban dilaksanakan pada hari raya Idul Adha dan hari Tasyrik di bulan Dzulhijjah.'
          },
          {
            id: 24,
            question: 'Lari-lari kecil antara bukit Shafa dan Marwah dalam rangkaian ibadah haji disebut...',
            options: ['Sa\'i', 'Wukuf', 'Thawaf', 'Mabit'],
            answer: 0,
            explanation: 'Sa\'i adalah rukun haji berupa lari-lari kecil antara bukit Shafa dan Marwah, mengenang perjuangan Siti Hajar mencari air untuk Ismail.'
          },
          {
            id: 25,
            question: 'Hewan berikut ini yang sah digunakan untuk berkurban di Indonesia adalah...',
            options: ['Sapi, kambing, domba, dan kerbau', 'Ayam, bebek, dan burung', 'Kuda dan kelinci', 'Ikan hias dan kucing'],
            answer: 0,
            explanation: 'Hewan kurban (An\'am) adalah hewan ternak berkuku genap seperti kambing, domba, sapi, kerbau, dan unta.'
          }
        ]
      }
    ]
  },
  bahasa_inggris: {
    id: 'bahasa_inggris',
    name: 'BAHASA INGGRIS KELAS 5 SD',
    subtitle: 'English Language Interactive Challenges',
    levels: [
      {
        id: 1,
        title: 'Pos 1: What Are You Doing?',
        topic: 'Present Continuous Activities',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Read the following scenario carefully:\n"Daniel is wearing an apron in the kitchen. There is a sweet aroma of warm vanilla dough coming from the oven, and some white flour is on his cheeks."\nBased on these analytical context clues, what is Daniel doing right now?',
            options: [
              'He is baking some cookies.',
              'He is repairing a broken chair.',
              'He is sleeping in the classroom.',
              'He is washing his dirty bicycle.'
            ],
            answer: 0,
            explanation: 'The context clues "apron", "kitchen", "sweet aroma of warm vanilla dough", and "oven" clearly lead to the logical deduction of "baking some cookies".'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'In English grammar, the Present Continuous Tense represents actions happening right now. Which of the following sentences are grammatically correct? (Pilih semua yang benar)',
            options: [
              'The students are discussing their science project in the library.',
              'My mother is baking a delicious chocolate cake in the kitchen.',
              'The cat are chasing a small mouse under the table.',
              'I am writing an English essay about my hometown.'
            ],
            answer: 0,
            correctAnswers: [0, 1, 3],
            explanation: '"The cat" is singular, so it should use "is", not "are" (e.g., "The cat is chasing"). The other sentences use appropriate subject-verb agreement (are for students, is for mother, am for I).'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'An English learner says: "The sentence \'My brother and I is playing video games in the living room\' is correct because \'I\' always matches with \'is\' in singular form." True or False is their explanation?',
            options: ['True', 'False'],
            answer: 1,
            explanation: 'The explanation is False. "My brother and I" makes a compound plural subject (equivalent to "We"), so it must use the plural helping verb "are" (i.e., "My brother and I are playing...").'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Match the active English action verbs with their most logical and suitable direct objects!',
            options: [],
            answer: 0,
            matchingLeft: ['Sweeping', 'Watering', 'Mopping'],
            matchingRight: ['the dry plants in the garden', 'the dusty floor with a broom', 'the dirty glass window'],
            matchingPairs: { 0: 1, 1: 0, 2: 2 },
            explanation: '"Sweeping" is paired with "dusty floor" (menyapu), "Watering" with "dry plants" (menyiram), and "Mopping" is suitable for cleaning the "dirty glass window" (atau membersihkan kaca).'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'What is the correct sentence order for: "studying - are - Our smart students - together in the classroom - English grammar"?',
            options: [
              'Our smart students are studying English grammar together in the classroom.',
              'English grammar are studying our smart students together in the classroom.',
              'Our smart students studying are English grammar together in the classroom.',
              'Together in the classroom studying are English grammar our smart students.'
            ],
            answer: 0,
            explanation: 'The correct Present Continuous structure is: Subject (Our smart students) + are + Verb-ing (studying) + Object (English grammar) + Adverb (together in the classroom).'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: How Much Is It?',
        topic: 'Prices, Numbers, and Shopping',
        questions: [
          {
            id: 6,
            question: 'How do you say "Rp 15.000" in English?',
            options: ['Fifteen thousand rupiahs', 'Fifty thousand rupiahs', 'Five thousand rupiahs', 'Fifteen hundred rupiahs'],
            answer: 0,
            explanation: '15 is fifteen, and thousand is ribu.'
          },
          {
            id: 7,
            question: 'If a pen costs Rp 3.000 and you buy two pens, how much do you pay?',
            options: ['Six thousand rupiahs', 'Three thousand rupiahs', 'Nine thousand rupiahs', 'Five thousand rupiahs'],
            answer: 0,
            explanation: 'Two pens cost 2 x Rp 3.000 = Rp 6.000 (six thousand rupiahs).'
          },
          {
            id: 8,
            question: 'Complete the question to ask about price: "... is this t-shirt?" - "It is fifty thousand rupiahs."',
            options: ['How much', 'How many', 'How old', 'How far'],
            answer: 0,
            explanation: '"How much" is used to ask for the price or cost of an item.'
          },
          {
            id: 9,
            question: 'What do we use to buy goods at the market or canteen?',
            options: ['Money', 'Paper', 'Leaves', 'Sticker'],
            answer: 0,
            explanation: 'We use "money" (uang) as the official tool of exchange.'
          },
          {
            id: 10,
            question: 'Translate: "I buy a bowl of meatball in the canteen."',
            options: ['Saya membeli semangkuk bakso di kantin.', 'Saya makan sepiring nasi di dapur.', 'Saya minum segelas teh di kelas.', 'Saya menjual mie ayam di pasar.'],
            answer: 0,
            explanation: '"A bowl of meatball" means semangkuk bakso, and "buy" means membeli.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Health & Parts of Body',
        topic: 'Body parts and common symptoms',
        questions: [
          {
            id: 11,
            question: 'What part of our body do we use to see beautiful scenery?',
            options: ['Eyes', 'Ears', 'Nose', 'Hands'],
            answer: 0,
            explanation: 'We see with our "eyes" (mata).'
          },
          {
            id: 12,
            question: 'If you have a toothache, which doctor should you visit?',
            options: ['Dentist', 'Surgeon', 'Vet', 'Pediatrician'],
            answer: 0,
            explanation: '"Dentist" is dokter gigi, who treats toothaches.'
          },
          {
            id: 13,
            question: 'What is "sakit kepala" in English?',
            options: ['Headache', 'Stomachache', 'Earache', 'Sore throat'],
            answer: 0,
            explanation: '"Head" is kepala, and "ache" means sakit, combined into "headache" (sakit kepala).'
          },
          {
            id: 14,
            question: 'Which body part is inside our mouth and helps us taste food?',
            options: ['Tongue', 'Lips', 'Cheeks', 'Forehead'],
            answer: 0,
            explanation: '"Tongue" (lidah) is the organ of taste.'
          },
          {
            id: 15,
            question: 'Complete: "Wash your ... before eating to stay healthy!"',
            options: ['hands', 'hair', 'shoes', 'bag'],
            answer: 0,
            explanation: 'We should wash our "hands" (tangan) before eating to prevent bacteria from entering.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: My House & School Rooms',
        topic: 'Rooms and prepositions',
        questions: [
          {
            id: 16,
            question: 'Where does your mother usually cook fried rice?',
            options: ['In the kitchen', 'In the bathroom', 'In the garage', 'In the bedroom'],
            answer: 0,
            explanation: '"Kitchen" is dapur, the room used for cooking.'
          },
          {
            id: 17,
            question: 'A room in school where students can borrow and read books is...',
            options: ['Library', 'Canteen', 'Principal room', 'Laboratory'],
            answer: 0,
            explanation: '"Library" is perpustakaan.'
          },
          {
            id: 18,
            question: 'Where do you sleep at night after a busy day?',
            options: ['Bedroom', 'Living room', 'Garden', 'Terrace'],
            answer: 0,
            explanation: '"Bedroom" (kamar tidur) is used for sleeping and resting.'
          },
          {
            id: 19,
            question: 'What is the preposition for "di bawah"?',
            options: ['Under', 'On', 'In', 'Between'],
            answer: 0,
            explanation: '"Under" means di bawah. (e.g. The cat is under the table).'
          },
          {
            id: 20,
            question: 'What is the English word for "lemari pakaian"?',
            options: ['Wardrobe', 'Sofa', 'Stove', 'Mirror'],
            answer: 0,
            explanation: '"Wardrobe" or "cupboard" is used for clothes storage.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Animals and Their Foods',
        topic: 'Animals classification and eating habits',
        questions: [
          {
            id: 21,
            question: 'What does a cow eat as its primary food?',
            options: ['Grass', 'Meat', 'Fish', 'Insects'],
            answer: 0,
            explanation: 'Cows are herbivores and eat "grass" (rumput).'
          },
          {
            id: 22,
            question: 'Which animal is known for having a very long neck to reach leaves in tall trees?',
            options: ['Giraffe', 'Elephant', 'Lion', 'Monkey'],
            answer: 0,
            explanation: '"Giraffe" (jerapah) has a signature long neck.'
          },
          {
            id: 23,
            question: 'Which animal is a bird but cannot fly, and is excellent at swimming in cold snow?',
            options: ['Penguin', 'Eagle', 'Sparrow', 'Parrot'],
            answer: 0,
            explanation: '"Penguin" is a flightless bird adapted to swimming in sub-zero habitats.'
          },
          {
            id: 24,
            question: 'What animal produces milk, has black and white spots, and says "moo"?',
            options: ['Cow', 'Goat', 'Horse', 'Rabbit'],
            answer: 0,
            explanation: 'A cow (sapi) produces milk and makes the "moo" sound.'
          },
          {
            id: 25,
            question: 'An animal that lives in water, breathes with gills, and has scales is a...',
            options: ['Fish', 'Frog', 'Crocodile', 'Snake'],
            answer: 0,
            explanation: '"Fish" (ikan) lives in water, has scales, and breathes using gills.'
          }
        ]
      }
    ]
  },
  bahasa_jawa: {
    id: 'bahasa_jawa',
    name: 'BAHASA JAWA KELAS 5 SD',
    subtitle: 'Piwulang Basa Jawa Timur & Sastra Jawa',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Crita Tokoh Wayang Pandhawa',
        topic: 'Silsilah lan Watak Pandhawa',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Raden Werkudara utawa Bima nduweni watak jujur, kendhel, lan blaka suta (ora seneng lamis). Miturut paugeran sastra wayang, Werkudara ora tau gelem guneman nggunakake basa krama marang sapa wae (tansah nganggo basa ngoko). Nanging, ana telung paraga suci sing ndadekake Werkudara gelem basa krama alus. Sapa wae paraga suci kasebut?',
            options: [
              'Dewa Ruci (gurune), Begawan Drona, lan Ibu Kunti (ibune)',
              'Prabu Duryudana, Patih Sengkuni, lan Aswatama',
              'Prabu Kresna, Raden Gatotkaca, lan Abimanyu',
              'Dewa Indra, Arjuna, lan Nakula-Sadewa'
            ],
            answer: 0,
            explanation: 'Saking mulyane watak jujur lan kurmat marang guru lan wong tuwa, Raden Werkudara mung gelem basa krama marang Dewa Ruci (perlambang sejatining urip), Begawan Drona (gurune), lan Ibu Kunti (ibu kandunge).'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Silsilah Pandhawa iku asale saka Prabu Pandu Dewanata nanging lair saka rong ibu sing beda (Dewi Kunti lan Dewi Madrim). Sapa wae paraga Pandhawa sing lair saka rahim Ibu Dewi Kunti? (Pilih kabeh sing bener)',
            options: [
              'Raden Puntadewa (Yudhistira)',
              'Raden Werkudara (Bima)',
              'Raden Janaka (Arjuna)',
              'Raden Nakula lan Sadewa'
            ],
            answer: 0,
            correctAnswers: [0, 1, 2],
            explanation: 'Putra Pandhawa sing lair saka Dewi Kunti yaiku Puntadewa, Werkudara, lan Arjuna (kadhang diarani Kuntadi/Kuntaputra). Dene Nakula lan Sadewa lair saka Dewi Madrim.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Satriya panengah Pandhawa (putra nomer telu) yaiku Raden Arjuna kang nduweni rupa bagus lan trampil manah. Dene Nakula lan Sadewa iku putra kembar sing pinter nambani lelara lan ngopeni jaran. Bener utawa luput silsilah kasebut?',
            options: ['Bener', 'Luput'],
            answer: 0,
            explanation: 'Pernyataan kasebut Bener. Arjuna iku panengah (nomer 3), lan Nakula-Sadewa iku kembar (nomer 4 lan 5) kang nduweni keahlian khusus nambani penyakit lan ngrawat jaran.'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah para ksatria Pandhawa ing ngisor iki karo gaman utawa pusaka sekti sing diduweni kanthi trep!',
            options: [],
            answer: 0,
            matchingLeft: ['Raden Puntadewa', 'Raden Werkudara', 'Raden Arjuna'],
            matchingRight: ['Panah Pasupati', 'Kitab Jamus Kalimasada', 'Kuku Pancanaka'],
            matchingPairs: { 0: 1, 1: 2, 2: 0 },
            explanation: 'Puntadewa nduweni Jamus Kalimasada (pusaka perdamaian), Werkudara nduweni Kuku Pancanaka (senjata fisik sekti), lan Arjuna nduweni Panah Pasupati (senjata panah akurat).'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Urutan sedulur Pandhawa wiwit saka sing paling tuwa (Mbarep) nganti sing paling enom (Ragil) sing bener yaiku...',
            options: [
              'Puntadewa - Werkudara - Arjuna - Nakula - Sadewa',
              'Arjuna - Puntadewa - Werkudara - Nakula - Sadewa',
              'Werkudara - Arjuna - Puntadewa - Nakula - Sadewa',
              'Puntadewa - Arjuna - Werkudara - Sadewa - Nakula'
            ],
            answer: 0,
            explanation: 'Sedulur Pandhawa cacahe lima, urutane yaiku: (1) Puntadewa, (2) Werkudara, (3) Arjuna, (4) Nakula, lan (5) Sadewa.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Unggah-ungguh Basa',
        topic: 'Basa Ngoko lan Krama',
        questions: [
          {
            id: 6,
            question: 'Basa krama alus sing bener kanggo tembung "mangan" yaiku...',
            options: ['Dahar', 'Nedha', 'Mbadhog', 'Nguntal'],
            answer: 0,
            explanation: 'Mangan krama aluse yaiku "dahar" (kanggo wong tuwa/sing dihormati), yen kanggo awake dhewe nganggo "nedha".'
          },
          {
            id: 7,
            question: 'Basa ngoko sing digunakake karo kanca sing wis akrab banget arane...',
            options: ['Ngoko Lugu', 'Ngoko Alus', 'Krama Lugu', 'Krama Alus'],
            answer: 0,
            explanation: 'Ngoko lugu digunakake kanggo pacelathon karo kanca padha umur utawa sing luwih enom.'
          },
          {
            id: 8,
            question: 'Ukara "Bapak saweg sare" tegese ing basa Indonesia yaiku...',
            options: ['Bapak sedang tidur', 'Bapak sedang makan', 'Bapak baru pulang', 'Bapak sedang mandi'],
            answer: 0,
            explanation: 'Sare tegese tidur (turu), dadi "Bapak saweg sare" artine "Bapak sedang tidur".'
          },
          {
            id: 9,
            question: 'Basa krama aluse tembung "lunga" yaiku...',
            options: ['Tindak', 'Kesah', 'Mlebu', 'Metu'],
            answer: 0,
            explanation: 'Lunga krama aluse yaiku "tindak" (kanggo wong liya), kesah yaiku krama lugu.'
          },
          {
            id: 10,
            question: 'Yen awake dhewe matur utawa ngomong marang Ibu Guru, kudu nggunakake basa...',
            options: ['Krama Alus', 'Ngoko Lugu', 'Basa Gaul', 'Ngoko Alus'],
            answer: 0,
            explanation: 'Matur marang guru utawa wong sing luwih tuwa wajib nggunakake basa Krama Alus minangka rasa kurmat.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Aksara Jawa',
        topic: 'Mengenal Sandhangan Aksara Jawa',
        questions: [
          {
            id: 11,
            question: 'Sandhangan aksara Jawa sing gunane kanggo menehi swara "i" yaiku...',
            options: ['Wulu', 'Suku', 'Taling', 'Pepet'],
            answer: 0,
            explanation: 'Wulu awujud bunderan cilik ing ndhuwur aksara kanggo swara "i".'
          },
          {
            id: 12,
            question: 'Kanggo menehi swara "u" ing aksara Jawa, kita nggunakake sandhangan...',
            options: ['Suku', 'Wulu', 'Pepet', 'Taling-tarung'],
            answer: 0,
            explanation: 'Suku ditulis ing ngisor aksara kanggo ngowahi swara dadi "u".'
          },
          {
            id: 13,
            question: 'Sandhangan pepet digunakake kanggo ngasilake swara...',
            options: ['e (kaya ing tembung "sega")', 'e (kaya ing tembung "sate")', 'o (kaya ing tembung "loro")', 'a (kaya ing tembung "bapa")'],
            answer: 0,
            explanation: 'Pepet menehi swara "e" pepet (lemah/sedang) kaya ing tembung sega, krasa, teka.'
          },
          {
            id: 14,
            question: 'Sandhangan taling-tarung digunakake kanggo ngasilake swara...',
            options: ['o', 'u', 'i', 'e'],
            answer: 0,
            explanation: 'Taling-tarung diapitake ing aksara kanggo ngasilake swara "o".'
          },
          {
            id: 15,
            question: 'Cacahe aksara Jawa legena (aksara dhasar) iku ana...',
            options: ['Rong puluh (20)', 'Selawe (25)', 'Rolasan (12)', 'Sepuluh (10)'],
            answer: 0,
            explanation: 'Aksara Jawa legena ana 20 aksara, wiwit saka Ha-Na-Ca-Ra-Ka nganti Ma-Ga-Ba-Tha-Nga.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Tembang Macapat',
        topic: 'Tembang Pocung lan Aturan Macapat',
        questions: [
          {
            id: 16,
            question: 'Cacahe gatra (baris) saben sapada (bait) ing tembang macapat diarani...',
            options: ['Guru Gatra', 'Guru Wilangan', 'Guru Lagu', 'Guru Karakter'],
            answer: 0,
            explanation: 'Guru Gatra yaiku jumlah larik/baris ing saben bait tembang.'
          },
          {
            id: 17,
            question: 'Dene guru lagu yaiku tibaning swara vokal ing...',
            options: ['Pungkasaning gatra (akhir baris)', 'Purwaning gatra (awal baris)', 'Tengahing gatra', 'Saben suku kata'],
            answer: 0,
            explanation: 'Guru lagu yaiku tibaning swara vokal (a, i, u, e, o) ing pungkasan/akhir gatra.'
          },
          {
            id: 18,
            question: 'Tembang macapat Pocung nduweni guru gatra cacahing...',
            options: ['Papat (4) baris', 'Lima (5) baris', 'Enem (6) baris', 'Pitu (7) baris'],
            answer: 0,
            explanation: 'Tembang Pocung nduweni 4 gatra/baris.'
          },
          {
            id: 19,
            question: 'Tembang macapat sing biasane ngemot tebak-tebakan utawa bedhekan sing asring ditembangkan bocah-bocah yaiku...',
            options: ['Pocung', 'Kinanthi', 'Sinom', 'Asmaradana'],
            answer: 0,
            explanation: 'Pocung nduweni watak kendho tanpa greget, asring digunakake kanggo bedhekan utawa teka-teki.'
          },
          {
            id: 20,
            question: 'Cacahe suku kata saben sagatra (baris) diarani...',
            options: ['Guru Wilangan', 'Guru Gatra', 'Guru Lagu', 'Guru Tembang'],
            answer: 0,
            explanation: 'Guru Wilangan yaiku jumlah suku kata (kecapan) saben baris.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Tradisi Budaya Jawa Timur',
        topic: 'Kesenian lan Kabudayan Lokal',
        questions: [
          {
            id: 21,
            question: 'Kesenian rakyat sing asale saka Ponorogo sing nganggo topeng sirah singa mawa wulu merak raksasa arane...',
            options: ['Reog Ponorogo', 'Ludruk', 'Jaranan', 'Wayang Kulit'],
            answer: 0,
            explanation: 'Reog Ponorogo minangka salah sawijining kesenian asli Jawa Timur sing misuwur ing donya.'
          },
          {
            id: 22,
            question: 'Dolanan tradisional sing migunakake kayu dawa lan cilik sing dipukul lan dicungkil arane...',
            options: ['Bentengan / Gatrik', 'Egrang', 'Dakonan / Congklak', 'Gasing'],
            answer: 0,
            explanation: 'Dolanan gatrik utawa patil lele nggunakake rong wilah kayu kanggo dipukul lan dicungkil.'
          },
          {
            id: 23,
            question: 'Kesenian teater tradisional khas Jawa Timur sing paragane kabeh nganggo basa Jawa ngoko-krama lan ana dhagelan (lawakan) arane...',
            options: ['Ludruk', 'Ketoprak', 'Lenong', 'Ketoprak'],
            answer: 0,
            explanation: 'Ludruk minangka drama tradisional asli Jawa Timur, beda karo ketoprak sing asring nyritakake sejarah kraton.'
          },
          {
            id: 24,
            question: 'Lagu daerah "Rek Ayo Rek" nyritakake babagan mlaku-mlaku ing kutha...',
            options: ['Surabaya', 'Malang', 'Tuban', 'Banyuwangi'],
            answer: 0,
            explanation: 'Lagu "Rek Ayo Rek" iku lagu daerah khas Surabaya ngenani mlaku-mlaku ing Tunjungan.'
          },
          {
            id: 25,
            question: 'Yen dolanan egrang, bocah-bocah butuh ketrampilan apa sing paling utama?',
            options: ['Kaseimbangan awak', 'Kacepetan mlayu', 'Kakuwatan untu', 'Ketajaman mripat'],
            answer: 0,
            explanation: 'Dolanan egrang nggunakake rong pring dhuwur, dadi butuh kaseimbangan (keseimbangan) awak sing dhuwur.'
          }
        ]
      }
    ]
  },
  seni_rupa: {
    id: 'seni_rupa',
    name: 'SENI RUPA KELAS 5 SD',
    subtitle: 'Eksplorasi Kreativitas Seni Visual Nusantara',
    levels: [
      {
        id: 1,
        title: 'Pos 1: Unsur-Unsur Seni Rupa',
        topic: 'Garis, Warna, Bidang, & Tekstur',
        questions: [
          {
            id: 1,
            type: 'pilihan_ganda',
            question: 'Warna memiliki pengaruh psikologis, optis, dan estetis yang sangat kuat dalam sebuah karya lukis. Secara mendasar, mengapa warna Merah, Kuning, dan Biru dikategorikan sebagai Warna Primer (Warna Pokok)?',
            options: [
              'Karena warna-warna tersebut merupakan warna asli/murni yang tidak dapat dihasilkan dari pencampuran warna lain',
              'Karena hanya warna-warna tersebut yang disukai oleh para kritikus seni lukis dunia',
              'Karena warna tersebut paling cepat pudar saat terkena sinar matahari secara langsung',
              'Keempat warna tersebut hanya dapat dilihat dengan jelas di bawah sinar lampu ultraviolet'
            ],
            answer: 0,
            explanation: 'Warna primer adalah pigmen dasar asli yang tidak bisa dibuat dari campuran warna apa pun. Sebaliknya, warna primer menjadi bahan dasar bagi pembentukan warna sekunder dan tersier.'
          },
          {
            id: 2,
            type: 'pilihan_ganda_kompleks',
            question: 'Tekstur dalam seni rupa dibedakan menjadi dua jenis, yaitu tekstur nyata (nilai rabaan kulit sama dengan penglihatan mata) dan tekstur semu/maya (kesan rabaan berbeda dengan penglihatan). Manakah di bawah ini yang tergolong dalam contoh Tekstur Semu (Virtual Texture)? (Pilih semua yang benar)',
            options: [
              'Lukisan dinding batu retak-retak yang digambar sangat mirip aslinya di atas kanvas kain yang sangat halus',
              'Permukaan vas bunga dari tanah liat bakar yang sengaja ditempeli pasir pantai yang kasar nyata',
              'Gambar guratan serat kayu jati bergelombang di atas kertas karton yang licin menggunakan pensil arang',
              'Lukisan bulu kucing yang tampak lembut mengembang di atas permukaan papan kayu datar yang keras'
            ],
            answer: 0,
            correctAnswers: [0, 2, 3],
            explanation: 'Tekstur semu adalah ilusi visual di mana mata melihat permukaan itu kasar, berbulu, atau berurat kayu, namun saat disentuh fisiknya terasa halus/licin. Menempelkan pasir adalah contoh tekstur nyata.'
          },
          {
            id: 3,
            type: 'benar_salah',
            question: 'Dalam komposisi seni rupa, garis horizontal (mendatar) secara psikologis memberikan kesan ketenangan, kedamaian, kepasifan, dan keluasan, sedangkan garis vertikal (tegak) memberikan kesan kekokohan, keagungan, kestabilan, dan kekuatan spiritual. Benar atau salah interpretasi psikologis tersebut?',
            options: ['Benar', 'Salah'],
            answer: 0,
            explanation: 'Pernyataan tersebut Benar. Garis horizontal meniru garis cakrawala yang tenang dan pasif, sedangkan garis vertikal menggambarkan tiang atau gedung tinggi yang melambangkan kemegahan dan kestabilan.'
          },
          {
            id: 4,
            type: 'menjodohkan',
            question: 'Jodohkanlah kombinasi pencampuran dua warna primer berikut ini dengan hasil warna sekundernya yang tepat!',
            options: [],
            answer: 0,
            matchingLeft: ['Merah + Kuning', 'Kuning + Biru', 'Biru + Merah'],
            matchingRight: ['Ungu (Violet)', 'Jingga (Orange)', 'Hijau'],
            matchingPairs: { 0: 1, 1: 2, 2: 0 },
            explanation: 'Merah + Kuning menghasilkan Jingga; Kuning + Biru menghasilkan Hijau; dan Biru + Merah menghasilkan Ungu.'
          },
          {
            id: 5,
            type: 'pilihan_ganda',
            question: 'Manakah urutan tingkatan pembentukan warna yang benar dalam seni rupa?',
            options: [
              'Warna Primer -> Warna Sekunder -> Warna Tersier -> Warna Netral',
              'Warna Netral -> Warna Primer -> Warna Sekunder -> Warna Tersier',
              'Warna Sekunder -> Warna Primer -> Warna Tersier -> Warna Netral',
              'Warna Primer -> Warna Tersier -> Warna Sekunder -> Warna Netral'
            ],
            answer: 0,
            explanation: 'Hierarki warna dimulai dari Warna Primer (dasar), kemudian Warna Sekunder (campuran primer), Warna Tersier (campuran primer + sekunder), dan Warna Netral.'
          }
        ]
      },
      {
        id: 2,
        title: 'Pos 2: Menggambar Perspektif',
        topic: 'Satu Titik Hilang',
        questions: [
          {
            id: 6,
            question: 'Menggambar objek sesuai pandangan mata kita di mana benda yang jauh terlihat lebih kecil disebut menggambar...',
            options: ['Perspektif', 'Ilustrasi', 'Ekspresi', 'Dekoratif'],
            answer: 0,
            explanation: 'Menggambar perspektif menghasilkan kesan ruang tiga dimensi berdasarkan keterbatasan mata memandang.'
          },
          {
            id: 7,
            question: 'Titik dalam menggambar perspektif tempat bertemunya garis-garis sejajar dan benda tampak menghilang disebut...',
            options: ['Titik Hilang (Vanishing Point)', 'Titik Tengah', 'Titik Koordinat', 'Titik Horizon'],
            answer: 0,
            explanation: 'Titik hilang adalah batas terjauh pandangan mata di mana benda tampak lenyap/menghilang.'
          },
          {
            id: 8,
            question: 'Garis mendatar yang memisahkan langit dan bumi/laut pada gambar perspektif dinamakan garis...',
            options: ['Horizon (Cakrawala)', 'Vertikal', 'Diagonal', 'Garis Semu'],
            answer: 0,
            explanation: 'Garis horizon adalah garis batas mata memandang, seolah memisahkan langit dan permukaan bumi.'
          },
          {
            id: 9,
            question: 'Dalam gambar perspektif satu titik hilang, benda yang letaknya paling dekat dengan mata akan terlihat...',
            options: ['Paling besar', 'Paling kecil', 'Paling kabur', 'Sama saja dengan yang jauh'],
            answer: 0,
            explanation: 'Hukum perspektif menyatakan benda yang makin dekat dengan pengamat terlihat makin besar dan jelas.'
          },
          {
            id: 10,
            question: 'Objek pemandangan yang sangat cocok digambar menggunakan teknik perspektif satu titik hilang adalah...',
            options: ['Rel kereta api yang lurus panjang', 'Sebuah mangkok berisi buah', 'Potret wajah teman sekelas', 'Kupu-kupu terbang bebas'],
            answer: 0,
            explanation: 'Rel kereta api yang lurus memiliki garis-garis sejajar menuju satu titik di kejauhan, sangat ideal untuk satu titik hilang.'
          }
        ]
      },
      {
        id: 3,
        title: 'Pos 3: Ragam Hias Nusantara',
        topic: 'Batik & Motif Hias Daerah',
        questions: [
          {
            id: 11,
            question: 'Alat khusus dari tembaga yang digunakan untuk melukis lilin/malam dalam membatik tradisional disebut...',
            options: ['Canting', 'Kuas', 'Pahat', 'Sudip'],
            answer: 0,
            explanation: 'Canting adalah alat tradisional membatik berisi lilin cair untuk membuat motif di atas kain.'
          },
          {
            id: 12,
            question: 'Motif batik berbentuk menyerupai huruf S yang saling jalin-menjalin tanpa putus melambangkan kesinambungan adalah motif...',
            options: ['Parang', 'Kawung', 'Mega Mendung', 'Sido Mukti'],
            answer: 0,
            explanation: 'Batik Parang dicirikan oleh baris miring menyerupai huruf S berombak melambangkan kekuasaan dan kontinuitas.'
          },
          {
            id: 13,
            question: 'Batik Mega Mendung yang terkenal dengan bentuk awan berlapis-lapis merupakan batik khas daerah...',
            options: ['Cirebon', 'Solo', 'Yogyakarta', 'Pekalongan'],
            answer: 0,
            explanation: 'Batik Mega Mendung berasal dari Cirebon, didominasi warna biru berbentuk awan bergradasi.'
          },
          {
            id: 14,
            question: 'Motif hias nusantara yang berbentuk menyerupai manusia dinamakan motif...',
            options: ['Figuratif', 'Geometris', 'Fauna', 'Flora'],
            answer: 0,
            explanation: 'Motif figuratif menggunakan manusia sebagai objek stilirisasi gambar ragam hias.'
          },
          {
            id: 15,
            question: 'Bahan lilin khusus yang digunakan untuk merintangi warna dalam pembuatan batik tulis disebut...',
            options: ['Malam', 'Parafin', 'Pewarna Wantex', 'Kanji'],
            answer: 0,
            explanation: 'Malam adalah lilin rintangan untuk menghalangi pewarna meresap ke serat kain batik.'
          }
        ]
      },
      {
        id: 4,
        title: 'Pos 4: Karya Seni Rupa 3 Dimensi',
        topic: 'Patung & Kerajinan',
        questions: [
          {
            id: 16,
            question: 'Karya seni rupa tiga dimensi (3D) memiliki keunikan dibanding karya dua dimensi (2D) karena memiliki unsur...',
            options: ['Panjang, lebar, dan volume/tinggi', 'Hanya panjang dan lebar', 'Hanya warna dan garis', 'Hanya dapat dilihat dari depan saja'],
            answer: 0,
            explanation: 'Karya seni rupa 3D memiliki volume/ruang sehingga dapat diamati dari segala arah.'
          },
          {
            id: 17,
            question: 'Contoh benda seni rupa tiga dimensi yang memiliki fungsi guna sekaligus estetis adalah...',
            options: ['Guci keramik tempat bunga', 'Lukisan pemandangan sawah', 'Foto wisuda keluarga', 'Kaligrafi kertas di dinding'],
            answer: 0,
            explanation: 'Guci keramik memiliki volume (3D) dan fungsi guna sebagai vas bunga, serta fungsi keindahan.'
          },
          {
            id: 18,
            question: 'Bahan lunak yang sangat populer dan mudah dibentuk oleh anak-anak untuk membuat model patung mainan adalah...',
            options: ['Plastisin / Clay', 'Kayu jati', 'Batu marmer', 'Semen dan pasir'],
            answer: 0,
            explanation: 'Plastisin adalah bahan plastis/lunak buatan yang sangat asyik dibentuk-bentuk.'
          },
          {
            id: 19,
            question: 'Teknik membuat karya seni dengan cara menganyam bahan tipis lentur seperti bambu atau pita plastik disebut...',
            options: ['Menganyam', 'Memahat', 'Mengecor', 'Menyablon'],
            answer: 0,
            explanation: 'Menganyam adalah menumpang-tindihkan jalur bambu, rotan, atau plastik menjadi struktur wadah.'
          },
          {
            id: 20,
            question: 'Alat pahat dan pemukul kayu digunakan untuk membuat patung dengan bahan keras berupa...',
            options: ['Kayu atau batu', 'Lilin atau bubur kertas', 'Plastisin atau tanah liat', 'Logam kuningan cair'],
            answer: 0,
            explanation: 'Memahat menggunakan pahat kayu/batu untuk membuang bagian bahan yang tidak digunakan secara mekanis.'
          }
        ]
      },
      {
        id: 5,
        title: 'Pos 5: Apresiasi Seni dan Pameran',
        topic: 'Menilai Karya Seni',
        questions: [
          {
            id: 21,
            question: 'Kegiatan memamerkan hasil karya seni rupa siswa di sekolah kepada orang tua dan pengunjung disebut...',
            options: ['Pameran Seni Sekolah', 'Lomba Menggambar', 'Bazaar Makanan', 'Pentas Musik'],
            answer: 0,
            explanation: 'Pameran Seni rupa di sekolah adalah sarana mengomunikasikan karya siswa kepada publik.'
          },
          {
            id: 22,
            question: 'Sikap menghargai, menikmati, menilai, dan menghayati suatu karya seni rupa secara objektif disebut...',
            options: ['Apresiasi Seni', 'Kreasi Seni', 'Koleksi Seni', 'Imajinasi Seni'],
            answer: 0,
            explanation: 'Apresiasi seni adalah aktivitas memahami, menikmati, dan memberi penghargaan terhadap nilai karya seni.'
          },
          {
            id: 23,
            question: 'Siapakah orang yang bertugas menata dan mengatur tata letak karya pameran agar indah dipandang?',
            options: ['Kurator / Panitia Tata Pamer', 'Sastrawan', 'Kamerawan', 'Direktur Sekolah'],
            answer: 0,
            explanation: 'Kurator atau seksi dekorasi/tata ruang bertanggung jawab atas tata letak karya agar estetis dan rapi.'
          },
          {
            id: 24,
            question: 'Buku yang disediakan panitia pameran bagi pengunjung untuk memberikan saran, kritik, dan kesan dinamakan...',
            options: ['Buku Kesan dan Pesan (Buku Tamu)', 'Buku Gambar', 'Buku Pelajaran', 'Buku Tabungan'],
            answer: 0,
            explanation: 'Buku kesan dan pesan/buku tamu digunakan untuk mencatat kehadiran serta umpan balik dari pengunjung pameran.'
          },
          {
            id: 25,
            question: 'Tujuan utama melakukan pameran seni di sekolah adalah untuk...',
            options: ['Meningkatkan rasa percaya diri siswa dan apresiasi karya', 'Mencari keuntungan uang sebanyak-banyaknya', 'Membuat kelas menjadi berantakan', 'Membanding-bandingkan kepintaran murid secara negatif'],
            answer: 0,
            explanation: 'Pameran sekolah melatih kepercayaan diri siswa menampilkan karyanya serta memupuk budaya apresiasi positif.'
          }
        ]
      }
    ]
  }
};

// Programmatically expand each subject's levels to 10
Object.keys(SUBJECTS_DATA).forEach((subjKey) => {
  const subj = SUBJECTS_DATA[subjKey];
  const originalLevels = subj.levels;
  if (originalLevels && originalLevels.length === 5) {
    // We need 5 more levels (id 6 to 10)
    const extraLevelsConfig = [
      { id: 6, title: 'Pos 6: Gelanggang Tangkas', topic: 'Kombinasi Pemahaman Dasar', mixFrom: [0, 1] },
      { id: 7, title: 'Pos 7: Lintasan Juara', topic: 'Kecepatan & Logika Berpikir', mixFrom: [2, 3] },
      { id: 8, title: 'Pos 8: Labirin Taktis', topic: 'Tantangan Kemampuan Penalaran', mixFrom: [1, 4] },
      { id: 9, title: 'Pos 9: Arena Pendekar', topic: 'Eksplorasi Pemecahan Masalah', mixFrom: [0, 2, 3] },
      { id: 10, title: 'Pos 10: Puncak Master Prestasi', topic: 'Ujian Akhir Master Petualang', mixFrom: [0, 1, 2, 3, 4] },
    ];

    extraLevelsConfig.forEach((config) => {
      // Gather all questions from source levels
      let sourceQuestions: any[] = [];
      config.mixFrom.forEach((levelIdx) => {
        if (originalLevels[levelIdx]) {
          sourceQuestions = [...sourceQuestions, ...originalLevels[levelIdx].questions];
        }
      });

      // Shuffle and pick 5 questions
      const shuffledQuestions = [...sourceQuestions].sort(() => Math.random() - 0.5);
      const chosenQuestions = shuffledQuestions.slice(0, 5).map((q, idx) => ({
        ...q,
        id: config.id * 100 + idx, // Ensure unique IDs
      }));

      originalLevels.push({
        id: config.id,
        title: config.title,
        topic: config.topic,
        questions: chosenQuestions,
      });
    });
  }
});

