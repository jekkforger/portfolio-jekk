// ====== EDIT DI SINI ======
export const EMAIL = 'zakimaulana0754@gmail.com'
export const WA = '6288224844088' // nomor WhatsApp tanpa tanda +
export const CV_FILE = '/CV-Fahrizal-Mudzaqi-Maulana.pdf'
// Isi url kalau sudah punya akun. Kalau kosong, kartunya otomatis disembunyikan.
export const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', icon: 'in', url: '' },
  { key: 'github', label: 'GitHub', icon: '</>', url: '' },
  { key: 'instagram', label: 'Instagram', icon: '◎', url: '' },
]

const fields = ['Web Development', 'Frontend Development', 'UI/UX Designer', 'Technical Writer', 'Data Annotator', 'Quality Assurance']
const tech = [
  { name: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJS', 'TailwindCSS'] },
  { name: 'Backend & Database', items: ['PHP', 'Laravel', 'MySQL'] },
  { name: 'Design & Tools', items: ['Figma', 'Git', 'GitHub'] },
]

export const T = {
  id: {
    nav: { home: 'Beranda', about: 'Tentang', skills: 'Keahlian', exp: 'Pengalaman', social: 'Kontak' },
    ui: { theme: 'Ganti tema', lang: 'Ganti bahasa', footer: 'Dibuat dengan ♥ dan ReactJS' },
    hero: {
      status: '✦ Terbuka untuk peluang kerja',
      hi: 'Halo, aku',
      role: 'Web Developer',
      desc: 'Lulusan Teknik Informatika yang berpengalaman sebagai Frontend Developer, UI/UX Designer, Quality Assurance, dan Data Annotator. Teliti, analitis, dan cepat beradaptasi.',
      cv: 'Unduh CV',
      contact: 'Hubungi aku',
    },
    about: {
      title: 'Tentang Aku',
      bio: 'Lulusan Teknik Informatika dengan pengalaman sebagai Software Developer, Data Annotator, dan Quality Assurance. Aku memahami pengembangan sistem, validasi data, dan quality control untuk memastikan hasil kerja sesuai standar kualitas. Aku terbiasa bekerja teliti, analitis, dan detail-oriented dalam mengidentifikasi masalah, melakukan evaluasi, serta menjaga akurasi data dan performa sistem. Aku cepat beradaptasi dengan tools, workflow, dan lingkungan kerja yang dinamis untuk mendukung proyek berbasis teknologi dan AI.',
      eduTitle: 'Pendidikan',
      degree: 'Diploma III Teknik Informatika',
      school: 'Politeknik Negeri Bandung',
      period: '2022 - 2025',
      eduPoints: [
        'Mata kuliah relevan: Pengembangan Perangkat Lunak, Sistem Basis Data, Proyek, Dasar-dasar Pemrograman.',
        'Pengalaman praktis dalam Pengembangan Web, Desain UI/UX, dan Dokumentasi Teknis.',
        'Tugas Akhir: Pengembangan Aplikasi Pengusulan dan Laporan Perjalanan Dinas Pegawai Politeknik Negeri Bandung Berbasis Web.',
      ],
      orgTitle: 'Pengalaman Organisasi',
      orgs: [
        { role: 'Wakil Ketua Pelaksana - IKA Campus Fair', year: '2023', text: 'Mengkoordinasikan tim dan mengelola acara untuk siswa SMA di SMAN 1 Cisarua.' },
        { role: 'Ketua Divisi Seni - SENOR HIMAKOM', year: '2023 - 2024', text: 'Memimpin divisi dalam merancang dan melaksanakan program kesenian.' },
        { role: 'Wakil Ketua Pelaksana - HIMAKOM 36th Anniversary', year: '2023', text: 'Menyelenggarakan dan mengawasi perayaan tahunan dengan kolaborasi lintas divisi.' },
        { role: 'Anggota BEM Kema Polban, Departemen Kominfo', year: '2023 - 2024', text: 'Mengelola media sosial dan publikasi untuk kegiatan BEM.' },
      ],
      certTitle: 'Sertifikasi',
      certs: ['Junior Software Testing - Arutala Lab', 'Data Analyst - MySkill'],
      langTitle: 'Bahasa',
      langs: ['Indonesia', 'Inggris'],
    },
    skills: {
      title: 'Keahlian',
      fieldsTitle: 'Bidang keahlian',
      fields,
      techTitle: 'Kemampuan teknis',
      tech: [...tech, { name: 'Kualitas & Data', items: ['Quality Assurance', 'Annotasi Data'] }],
      softTitle: 'Kemampuan non teknis',
      soft: ['Komunikasi', 'Adaptasi', 'Problem-Solving', 'Kerja Sama Tim'],
    },
    exp: {
      title: 'Pengalaman Kerja',
      items: [
        { role: 'Quality Assurance (Data Annotator)', org: '', year: '2026', points: ['Melakukan quality checking terhadap hasil annotation untuk memastikan akurasi dan konsistensi data.', 'Mengidentifikasi error, mismatch, atau inkonsistensi pada dataset berdasarkan guideline.', 'Memberikan feedback dan koreksi terhadap hasil kerja annotator.', 'Memastikan dataset final memenuhi standar kualitas dan membantu menjaga quality benchmark tim.'] },
        { role: 'Data Annotator', org: '', year: '2026', points: ['Melakukan pelabelan data pada video (per frame) sesuai guideline.', 'Memastikan hasil anotasi akurat, konsisten, dan sesuai standar kualitas proyek.', 'Mengidentifikasi dan menandai data yang ambigu, tidak valid, atau perlu eskalasi.', 'Mengolah data dalam jumlah besar dengan ketelitian dan fokus tinggi.'] },
        { role: 'Quality Assurance', org: 'X Green Solution', year: '2025 - 2026', points: ['Menyusun dan mengeksekusi test case agar seluruh fitur berjalan sesuai kebutuhan dan spesifikasi.', 'Melakukan pengujian fungsional untuk mendeteksi bug dan ketidaksesuaian sistem.', 'Memastikan aplikasi responsif dan nyaman dipakai di berbagai perangkat dan ukuran layar.', 'Mendokumentasikan hasil pengujian dan melaporkan bug kepada tim pengembang.'] },
        { role: 'Frontend Developer', org: 'X Green Solution', year: '2025 - 2026', points: ['Menerjemahkan desain UI/UX ke dalam kode menggunakan ReactJS dan TailwindCSS.', 'Membuat aplikasi web yang responsif.'] },
        { role: 'UI/UX Designer', org: 'X Green Solution', year: '2025 - 2026', points: ['Menerjemahkan kebutuhan klien ke dalam desain aplikasi.', 'Mengembangkan frontend dengan ReactJS dan TailwindCSS untuk meningkatkan user experience di berbagai ukuran perangkat.'] },
        { role: 'Technical Writer (Magang)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Mendokumentasikan fungsi, kode, dan API ke dalam dokumen.', 'Memeriksa konsistensi penamaan API pada setiap tombol aplikasi.'] },
        { role: 'UI/UX Designer (Magang)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Mendesain aplikasi presensi 79 berbasis web.', 'Membuat desain aplikasi yang user friendly.'] },
        { role: 'Frontend Developer (Magang)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Mengimplementasikan desain aplikasi ke dalam kode menggunakan ReactJS.', 'Berkolaborasi dengan tim dalam mengembangkan aplikasi berbasis web.'] },
      ],
    },
    social: {
      title: 'Hubungi Aku',
      sub: 'Tulis pesan di bawah, lalu langsung masuk ke inbox email aku.',
      window: 'pesan-baru.mail',
      to: 'Kepada', name: 'Nama kamu', from: 'Email kamu', subject: 'Subjek', message: 'Pesan',
      phName: 'Nama lengkap', phFrom: 'kamu@email.com', phSubject: 'Tentang apa pesanmu?', phMsg: 'Tulis pesanmu di sini...',
      send: 'Kirim pesan', sending: 'Mengirim...',
      ok: 'Pesan terkirim! Aku akan balas secepatnya lewat email kamu.',
      err: 'Pesan gagal terkirim. Cek koneksi internet lalu coba lagi, atau kirim langsung lewat email di samping.',
      findTitle: 'Temukan aku di',
      wa: 'WhatsApp',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', exp: 'Experience', social: 'Contact' },
    ui: { theme: 'Toggle theme', lang: 'Change language', footer: 'Made with ♥ and ReactJS' },
    hero: {
      status: '✦ Open to work',
      hi: "Hi, I'm",
      role: 'Web Developer',
      desc: 'Informatics Engineering graduate with experience as a Frontend Developer, UI/UX Designer, Quality Assurance, and Data Annotator. Detail-oriented, analytical, and quick to adapt.',
      cv: 'Download CV',
      contact: 'Contact me',
    },
    about: {
      title: 'About Me',
      bio: 'Informatics Engineering graduate with experience as a Software Developer, Data Annotator, and Quality Assurance. I understand system development, data validation, and quality control to make sure the work meets the required standards. I work carefully, analytically, and with an eye for detail when identifying problems, running evaluations, and keeping data accurate and systems performing well. I adapt quickly to new tools, workflows, and dynamic work environments to support technology and AI-based projects.',
      eduTitle: 'Education',
      degree: 'Diploma III in Informatics Engineering',
      school: 'Politeknik Negeri Bandung',
      period: '2022 - 2025',
      eduPoints: [
        'Relevant courses: Software Development, Database Systems, Projects, Programming Fundamentals.',
        'Hands-on experience in Web Development, UI/UX Design, and Technical Documentation.',
        'Final project: a web-based application for submitting and reporting official business trips of Politeknik Negeri Bandung employees.',
      ],
      orgTitle: 'Organizational Experience',
      orgs: [
        { role: 'Deputy Chair - IKA Campus Fair', year: '2023', text: 'Coordinated the team and managed an event for high school students at SMAN 1 Cisarua.' },
        { role: 'Head of Arts Division - SENOR HIMAKOM', year: '2023 - 2024', text: 'Led the division in planning and running arts programs.' },
        { role: 'Deputy Chair - HIMAKOM 36th Anniversary', year: '2023', text: 'Organized and oversaw the annual celebration with cross-division collaboration.' },
        { role: 'Member, BEM Kema Polban - Communication & Information Dept.', year: '2023 - 2024', text: 'Managed social media and publications for student council activities.' },
      ],
      certTitle: 'Certifications',
      certs: ['Junior Software Testing - Arutala Lab', 'Data Analyst - MySkill'],
      langTitle: 'Languages',
      langs: ['Indonesian', 'English'],
    },
    skills: {
      title: 'Skills',
      fieldsTitle: 'Areas of expertise',
      fields,
      techTitle: 'Technical skills',
      tech: [...tech, { name: 'Quality & Data', items: ['Quality Assurance', 'Data Annotation'] }],
      softTitle: 'Soft skills',
      soft: ['Communication', 'Adaptability', 'Problem-Solving', 'Teamwork'],
    },
    exp: {
      title: 'Work Experience',
      items: [
        { role: 'Quality Assurance (Data Annotator)', org: '', year: '2026', points: ['Checked annotation results to ensure data accuracy and consistency.', 'Identified errors, mismatches, and inconsistencies in datasets based on the guidelines.', 'Gave feedback and corrections on annotators\u2019 work.', 'Made sure the final dataset met quality standards and helped maintain the team quality benchmark.'] },
        { role: 'Data Annotator', org: '', year: '2026', points: ['Labeled video data frame by frame following the guidelines.', 'Kept annotations accurate, consistent, and in line with project quality standards.', 'Flagged data that was ambiguous, invalid, or needed escalation.', 'Processed large volumes of data with high accuracy and focus.'] },
        { role: 'Quality Assurance', org: 'X Green Solution', year: '2025 - 2026', points: ['Wrote and ran test cases to confirm every feature met requirements and specifications.', 'Ran functional tests on web apps to detect bugs and system mismatches.', 'Made sure apps were responsive and usable across devices and screen sizes.', 'Documented test results and reported bugs to the developer team.'] },
        { role: 'Frontend Developer', org: 'X Green Solution', year: '2025 - 2026', points: ['Turned UI/UX designs into code using ReactJS and TailwindCSS.', 'Built responsive web applications.'] },
        { role: 'UI/UX Designer', org: 'X Green Solution', year: '2025 - 2026', points: ['Translated client needs into application designs.', 'Built frontends with ReactJS and TailwindCSS to improve user experience across device sizes.'] },
        { role: 'Technical Writer (Internship)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Documented functions, code, and APIs.', 'Checked API naming consistency across every button in the app.'] },
        { role: 'UI/UX Designer (Internship)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Designed the web-based attendance app Presensi 79.', 'Created user-friendly app designs.'] },
        { role: 'Frontend Developer (Internship)', org: 'PT Padepokan Tujuh Sembilan', year: '2024', points: ['Implemented app designs in code using ReactJS.', 'Collaborated with the team to build web-based applications.'] },
      ],
    },
    social: {
      title: 'Get in Touch',
      sub: 'Write a message below and it lands straight in my email inbox.',
      window: 'new-message.mail',
      to: 'To', name: 'Your name', from: 'Your email', subject: 'Subject', message: 'Message',
      phName: 'Full name', phFrom: 'you@email.com', phSubject: 'What is your message about?', phMsg: 'Write your message here...',
      send: 'Send message', sending: 'Sending...',
      ok: 'Message sent! I will reply to your email as soon as possible.',
      err: 'The message could not be sent. Check your connection and try again, or email me directly using the address beside the form.',
      findTitle: 'Find me on',
      wa: 'WhatsApp',
    },
  },
}

// ====== PROYEK DATA ANNOTATOR ======
export const PROJECT_IMGS = [
  '/projects/4d-odn.jpg',
  '/projects/occ.jpg',
  '/projects/4d-tfl.jpg',
  '/projects/4d-tsr.jpg',
  '/projects/2d-tsr.jpg',
]
const tags = ['4D ODN', 'OCC', '4D TFL', '4D TSR', '2D TSR']

T.id.nav.projects = 'Proyek'
T.en.nav.projects = 'Projects'
T.id.projects = {
  title: 'Proyek Annotation',
  sub: 'Proyek data annotation untuk data berkendara otonom yang pernah aku kerjakan. Klik gambar untuk memperbesar.',
  close: 'Tutup',
  items: [
    { title: 'Deteksi Objek 4D', text: 'Melabeli kendaraan, pejalan kaki, dan objek lain dengan kotak 3D (cuboid) pada point cloud LiDAR, dicocokkan dengan gambar kamera. Objek dilacak antar frame dan diberi atribut seperti status gerak dan tingkat terhalang.' },
    { title: 'Occupancy (OCC)', text: 'Memberi label kelas pada point cloud LiDAR, seperti permukaan jalan, tepi jalan, dan area lainnya, agar model bisa memahami ruang di sekitar kendaraan.' },
    { title: 'Lampu Lalu Lintas 4D', text: 'Melabeli lampu lalu lintas dengan cuboid 3D pada point cloud, menghubungkannya dengan kamera yang berbeda, dan menjaga konsistensi objek yang sama antar frame.' },
    { title: 'Rambu Lalu Lintas 4D', text: 'Melabeli rambu lalu lintas dalam ruang 3D dan memastikan satu rambu yang sama tetap punya ID yang konsisten di banyak frame dan kamera.' },
    { title: 'Rambu Lalu Lintas 2D', text: 'Melabeli rambu langsung pada gambar kamera tele dan wide, menghubungkan rambu yang sama antar kamera dan frame, serta memeriksa status validitas tiap frame.' },
  ],
}
T.en.projects = {
  title: 'Annotation Projects',
  sub: 'Data annotation projects for autonomous driving data that I have worked on. Click an image to enlarge it.',
  close: 'Close',
  items: [
    { title: '4D Object Detection', text: 'Labeled vehicles, pedestrians, and other objects with 3D cuboids on LiDAR point clouds, matched with camera images. Objects were tracked across frames and given attributes such as motion state and occlusion level.' },
    { title: 'Occupancy (OCC)', text: 'Assigned classes to LiDAR point clouds, such as road surface, curbs, and other areas, so models can understand the space around the vehicle.' },
    { title: '4D Traffic Lights', text: 'Labeled traffic lights with 3D cuboids on point clouds, linked them across different cameras, and kept the same object consistent across frames.' },
    { title: '4D Traffic Signs', text: 'Labeled traffic signs in 3D space and made sure the same sign kept a consistent ID across many frames and cameras.' },
    { title: '2D Traffic Signs', text: 'Labeled signs directly on tele and wide camera images, linked the same sign across cameras and frames, and checked the validity status of each frame.' },
  ],
}
for (const l of ['id', 'en']) T[l].projects.items.forEach((it, i) => { it.tag = tags[i] })
