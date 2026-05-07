//Dokumentasi Beneran

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  FileCheck2,
  Globe2,
  MapPin,
  Megaphone,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wifi,
  X,
} from "lucide-react";

export default function OprecSE2026() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const recruitmentDate = useMemo(
    () => new Date("2026-05-08T08:00:00+07:00"),
    []
  );

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(recruitmentDate));
  const [isOpen, setIsOpen] = useState(new Date() >= recruitmentDate);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTimeLeft(getTimeLeft(recruitmentDate));
      setIsOpen(now >= recruitmentDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [recruitmentDate]);

  const navItems = [
    { label: "Benefit", href: "#kenapa" },
    { label: "Tahapan", href: "#tahapan" },
    { label: "Syarat", href: "#syarat" },
    { label: "Daftar", href: "#pendaftaran" },
    { label: "Pengumuman", href: "#pengumuman" },
    { label: "FAQ", href: "#faq" },
  ];

  const benefits = [
    {
      no: "01",
      icon: <BadgeCheck />,
      title: "Pengalaman Berharga",
      desc: "Terlibat langsung dalam kegiatan Sensus Ekonomi skala nasional.",
    },
    {
      no: "02",
      icon: <Globe2 />,
      title: "Kontribusi untuk Negara",
      desc: "Berperan dalam menyediakan data penting untuk pembangunan Indonesia.",
    },
    {
      no: "03",
      icon: <FileCheck2 />,
      title: "Mendapatkan Honor",
      desc: "Mendapatkan kompensasi sesuai ketentuan.",
    },
  ];

  const stages = [
    {
      no: "01",
      title: "Registrasi",
      date: "8 sampai 11 Mei 2026",
      desc: "Isi formulir pendaftaran secara online melalui link yang tersedia.",
      icon: <ClipboardCheck />,
    },
    {
      no: "02",
      title: "Seleksi Administrasi",
      date: "8 sampai 12 Mei 2026",
      desc: "Verifikasi kelengkapan dan kesesuaian dokumen peserta.",
      icon: <Users />,
    },
    {
      no: "03",
      title: "Tes Kompetensi",
      date: "13 sampai 18 Mei 2026",
      desc: "Ujian untuk mengukur kemampuan dasar dan pemahaman peserta.",
      icon: <FileCheck2 />,
    },
    {
      no: "04",
      title: "Seleksi Akhir",
      date: "15 sampai 19 Mei 2026",
      desc: "Penentuan kelulusan berdasarkan hasil tes dan kriteria lainnya.",
      icon: <BadgeCheck />,
    },
    {
      no: "05",
      title: "Submit Pakta Integritas",
      date: "20 sampai 22 Mei 2026",
      desc: "Peserta yang lulus wajib menyetujui komitmen kerja dan integritas.",
      icon: <ShieldCheck />,
    },
    {
      no: "06",
      title: "Pengumuman",
      date: "22 sampai 25 Mei 2026",
      desc: "Pengumuman melalui media sosial dan website resmi BPS Kota Jakarta Timur.",
      icon: <Megaphone />,
    },
  ];

  const generalRequirements = [
    "Bukan Aparatur Sipil Negara (ASN).",
    "Sehat jasmani dan rohani.",
    "Disiplin dan berkomitmen.",
    "Bersedia bekerja terikat kontrak.",
    "Mampu berbahasa Indonesia dengan baik serta membaca dan menulis huruf latin.",
    "Mampu berkomunikasi dengan baik.",
    "Pendidikan minimal tamat SMA, diutamakan mahasiswa atau sarjana.",
    "Berdomisili di wilayah DKI Jakarta.",
    "Bersedia mengikuti pelatihan dan lulus di atas passing grade.",
    "Diutamakan berumur 18 sampai 50 tahun saat registrasi.",
    "Memiliki atau menguasai dan dapat menggunakan tablet/smartphone.",
    "Memiliki atau menguasai dan mampu mengendarai kendaraan bermotor.",
    "Mampu bekerja sama dan berkoordinasi dengan tim, pegawai BPS, aparatur desa/kelurahan, serta pengurus SLS.",
    "Registrasi mandiri melalui aplikasi SOBAT BPS.",
  ];

  const phoneSpecs = [
    {
      icon: <Smartphone />,
      title: "Sistem Operasi",
      desc: "Android minimal versi 7 atau Nougat.",
    },
    {
      icon: <BadgeCheck />,
      title: "RAM",
      desc: "Minimal 4 GB.",
    },
    {
      icon: <FileCheck2 />,
      title: "Penyimpanan Internal",
      desc: "Minimal 32 GB ruang kosong.",
    },
    {
      icon: <MapPin />,
      title: "GPS Aktif",
      desc: "Pastikan lokasi/GPS dapat berfungsi dengan baik.",
    },
    {
      icon: <Wifi />,
      title: "Koneksi Internet",
      desc: "Memiliki koneksi internet yang stabil.",
    },
  ];

  const newRegistrantSteps = [
    "Melakukan registrasi akun melalui website SOBAT BPS pada tautan https://mitra.bps.go.id/beranda.",
    "Melakukan aktivasi akun melalui tautan yang dikirimkan ke email.",
    "Melakukan login dan melengkapi data profil, yaitu mengunggah KTP, foto terbaru, dan ijazah pada aplikasi SOBAT.",
    "Melakukan verifikasi NIK pada aplikasi SOBAT.",
    "Mendaftar pada kegiatan Rekrutmen Mitra BPS 2026, Pendaftaran Tambahan.",
  ];

  const existingRegistrantSteps = [
    "Melakukan login dan melengkapi data profil, yaitu mengunggah KTP, foto terbaru, dan ijazah pada aplikasi SOBAT.",
    "Melakukan verifikasi NIK pada aplikasi SOBAT bagi yang belum.",
    "Mendaftar pada kegiatan Rekrutmen Mitra BPS 2026, Pendaftaran Tambahan.",
  ];

  const recruitmentStats = [
    {
      label: "Kebutuhan Mitra",
      value: "1.800",
      desc: "Total target mitra yang dibutuhkan",
      icon: <Users />,
    },
    {
      label: "Sudah Mendaftar",
      value: "873",
      desc: "Jumlah pendaftar sementara",
      icon: <ClipboardCheck />,
    },
    {
      label: "Kuota Tersisa",
      value: "377",
      desc: "Sisa kebutuhan mitra",
      icon: <BadgeCheck />,
    },
  ];

  const announcements = [
    {
      title: "Pengumuman Administrasi",
      desc: "Informasi hasil seleksi administrasi calon mitra SE2026.",
      status: "Coming Soon",
    },
    {
      title: "Pengumuman Seleksi Akhir",
      desc: "Informasi peserta yang lolos tahap seleksi akhir.",
      status: "Coming Soon",
    },
    {
      title: "Pengumuman Final",
      desc: "Informasi final peserta yang dinyatakan diterima sebagai mitra.",
      status: "Coming Soon",
    },
  ];

  const faqs = [
    {
      q: "Apa itu SE2026?",
      a: "SE2026 adalah Sensus Ekonomi 2026, yaitu kegiatan pendataan ekonomi berskala nasional untuk memperoleh gambaran kondisi usaha dan aktivitas ekonomi di Indonesia.",
    },
    {
      q: "Apakah pendaftaran dipungut biaya?",
      a: "Tidak. Pendaftaran resmi tidak dipungut biaya. Abaikan informasi yang meminta pembayaran atau mengatasnamakan panitia tanpa kanal resmi.",
    },
    {
      q: "Apakah harus punya akun SOBAT BPS?",
      a: "Ya. Calon mitra perlu melakukan registrasi mandiri melalui aplikasi atau website SOBAT BPS, melengkapi profil, melakukan verifikasi NIK, dan mendaftar pada kegiatan rekrutmen yang tersedia.",
    },
    {
      q: "Apakah semua peserta wajib mengikuti pelatihan?",
      a: "Ya. Seluruh mitra wajib mengikuti pelatihan hingga dinyatakan lulus sebagai syarat menjadi mitra Sensus Ekonomi 2026.",
    },
    {
      q: "Di mana informasi resmi dapat dipantau?",
      a: "Informasi resmi dapat dipantau melalui website dan media sosial BPS Kota Jakarta Timur atau kanal resmi BPS setempat.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8f0] text-slate-950 selection:bg-orange-200 selection:text-orange-950">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-orange-300/40 blur-3xl" />
        <div className="absolute right-[-10rem] top-[12rem] h-[30rem] w-[30rem] rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-orange-100/80 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-500/15 ring-1 ring-orange-100">
              <img
                src="/Logo BPS - Horizontal.png"
                alt="Logo BPS Kota Jakarta Timur"
                className="h-9 w-9 object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-black leading-none tracking-tight text-slate-950">
                BPS Kota Jakarta Timur
              </p>
              <p className="mt-1 text-xs font-semibold text-orange-600">
                Recruitment Portal SE2026
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-orange-100 bg-white/80 p-1 shadow-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#pendaftaran"
            className="hidden items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 md:inline-flex"
          >
            Daftar <ArrowRight size={16} />
          </a>

          <button
            className="rounded-2xl border border-orange-100 bg-white p-2.5 text-slate-900 shadow-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-orange-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#pendaftaran"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-2xl bg-orange-500 px-5 py-3 text-center text-sm font-black text-white"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="relative z-10 pt-20">
        <section className="relative overflow-hidden px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm backdrop-blur">
                <Sparkles size={17} /> Open Recruitment Mitra
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                Ayo Jadi bagian dari{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Sensus Ekonomi 2026
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Segera daftarkan dirimu dan ikut berkontribusi dalam Sensus Ekonomi 2026. Siapkan akun SOBAT BPS, dokumen, dan perangkat terbaikmu.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pendaftaran"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white shadow-2xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600"
                >
                  Lihat Cara Daftar
                  <ArrowRight className="transition group-hover:translate-x-1" size={18} />
                </a>

                <a
                  href="#tahapan"
                  className="inline-flex items-center justify-center rounded-2xl border border-orange-200 bg-white/80 px-7 py-4 font-black text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-orange-300 hover:bg-white"
                >
                  Cek Tahapan
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                <MiniStat value="8 - 11 Mei 2026" label="Registrasi" />
                <MiniStat value="6" label="Tahapan Rekrutmen" />
                <MiniStat value="GRATIS" label="Biaya" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-300/60 to-amber-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-orange-900/10 backdrop-blur-2xl">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 p-6 text-white shadow-xl shadow-orange-500/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-orange-50">
                        Countdown pembukaan
                      </p>
                      <h2 className="mt-1 text-3xl font-black tracking-tight">
                        Open Recruitment
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-white/20 p-3 text-white shadow-lg backdrop-blur">
                      <Clock size={28} />
                    </div>
                  </div>

                  {isOpen ? (
                    <div className="mt-8 rounded-3xl border border-white/30 bg-white/25 p-6 text-center shadow-lg shadow-orange-700/10 backdrop-blur">
                      <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-50">
                        Pendaftaran Sudah Dibuka
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                        Silakan Daftar Sekarang
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-7 text-orange-50">
                        Klik tombol pendaftaran dan lengkapi data melalui SOBAT BPS.
                      </p>

                      <a
                        href="https://mitra.bps.go.id/beranda"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
                      >
                        Daftar Sekarang
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <HeroCountdown label="Hari" value={timeLeft.days} />
                        <HeroCountdown label="Jam" value={timeLeft.hours} />
                        <HeroCountdown label="Menit" value={timeLeft.minutes} />
                        <HeroCountdown label="Detik" value={timeLeft.seconds} />
                      </div>

                      <div className="mt-6 rounded-3xl border border-white/30 bg-white/20 p-5 backdrop-blur">
                        <p className="text-sm font-semibold leading-7 text-white">
                          Pendaftaran dibuka pada 8 Mei 2026 pukul 08.00 WIB. Pastikan data lengkap dan benar agar proses pendaftaran berjalan lancar.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* <section id="dashboard" className="px-5 pb-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[2.5rem] border border-orange-100 bg-white/85 p-6 shadow-xl shadow-orange-900/5 backdrop-blur md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-base font-black uppercase tracking-[0.25em] text-orange-600">
                    Dashboard Rekrutmen
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                    Ringkasan Pendaftaran Mitra
                  </h2>
                </div>

                <div className="rounded-full bg-orange-50 px-4 py-2 text-sm font-black text-orange-700 ring-1 ring-orange-100">
                  Update sementara
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recruitmentStats.map((item, index) => (
                  <DashboardCard key={item.label} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section> */}

        <section id="kenapa" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Kenapa harus ikut?"
              title="Kesempatan berkontribusi dalam pendataan ekonomi nasional"
              desc="Tiga nilai utama yang diperoleh calon mitra saat bergabung dalam Sensus Ekonomi 2026."
              size="large"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map((item, index) => (
                <BenefitCard key={item.no} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="tahapan" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-orange-100 bg-white/75 p-6 shadow-xl shadow-orange-900/5 backdrop-blur md:p-10">
            <SectionTitle
              eyebrow="Tahapan rekrutmen"
              title="Alur seleksi mitra SE2026"
              desc="Ikuti setiap tahap sesuai jadwal. Panitia akan melakukan verifikasi sampai pengumuman akhir."
              size="large"
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {stages.map((item) => (
                <StageCard key={item.no} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="syarat" className="px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white/80 p-6 shadow-xl shadow-orange-900/5 backdrop-blur md:p-8">
              <SectionTitle
                eyebrow="Syarat umum"
                title="Ketentuan calon mitra"
                desc="Pastikan seluruh syarat berikut sesuai dengan kondisi calon peserta sebelum mendaftar."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {generalRequirements.map((item) => (
                  <RequirementItem key={item} text={item} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white/90 p-6 text-slate-950 shadow-xl shadow-orange-900/5 backdrop-blur md:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
                    Syarat khusus
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    Perangkat HP/Smartphone
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600">
                    Pastikan perangkat yang digunakan memenuhi spesifikasi berikut.
                  </p>
                </div>

                <div className="hidden rounded-3xl bg-orange-500 p-4 text-white sm:block">
                  <Smartphone size={30} />
                </div>
              </div>

              <div className="space-y-3">
                {phoneSpecs.map((item) => (
                  <SpecCard key={item.title} item={item} />
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-orange-50 p-5 text-sm font-semibold leading-7 text-slate-700 ring-1 ring-orange-100">
                Seluruh mitra wajib mengikuti pelatihan hingga dinyatakan lulus sebagai syarat menjadi mitra Sensus Ekonomi 2026.
              </div>
            </div>
          </div>
        </section>

        <section id="pendaftaran" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              center
              eyebrow="Tata cara pendaftaran"
              title="Pilih alur sesuai status akun SOBAT BPS"
              desc="Peserta baru dan peserta yang sudah pernah terdaftar memiliki langkah yang berbeda. Ikuti alur yang sesuai agar pendaftaran tidak terhambat."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <StepGroup title="Belum pernah terdaftar di SOBAT" steps={newRegistrantSteps} />
              <StepGroup title="Sudah pernah terdaftar di SOBAT" steps={existingRegistrantSteps} />
            </div>

            <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 p-8 text-white shadow-2xl shadow-orange-500/25 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-50">
                    Action
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">
                    Mulai pendaftaran melalui SOBAT BPS
                  </h3>
                  <p className="mt-3 max-w-2xl leading-8 text-orange-50">
                    Buka SOBAT BPS dan pilih kegiatan Rekrutmen Mitra BPS 2026, Pendaftaran Tambahan.
                  </p>
                </div>

                <a
                  href="https://mitra.bps.go.id/beranda"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Buka SOBAT BPS
                  <ArrowRight className="transition group-hover:translate-x-1" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="pengumuman" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              center
              eyebrow="Pengumuman"
              title="Informasi hasil seleksi mitra SE2026"
              desc="Pantau halaman ini secara berkala untuk melihat pengumuman administrasi, seleksi akhir, dan pengumuman final."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {announcements.map((item, index) => (
                <AnnouncementCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              center
              eyebrow="FAQ"
              title="Pertanyaan umum rekrutmen"
              desc="Informasi ringkas untuk membantu calon peserta memahami proses pendaftaran."
            />

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-3xl border border-orange-100 bg-white/80 shadow-sm backdrop-blur"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-black text-slate-950">{faq.q}</span>
                    <ChevronDown
                      className={`shrink-0 text-orange-500 transition ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      size={22}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-orange-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
            <div>
              <p className="text-xl font-black text-slate-950">
                BPS Kota Jakarta Timur
              </p>
              <p className="mt-2 max-w-xl text-sm font-semibold leading-7 text-slate-600">
                Portal informasi Open Recruitment Mitra Petugas Sensus Ekonomi 2026 BPS Kota Jakarta Timur.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                Kanal Resmi
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-slate-700 md:items-end">
                <a
                  href="https://www.instagram.com/bpskotajaktim"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-orange-600"
                >
                  Instagram: @bpskotajaktim
                </a>

                <a
                  href="https://jaktimkota.bps.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-orange-600"
                >
                  Website: jaktimkota.bps.go.id
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-orange-100 pt-5 text-center text-xs font-semibold text-slate-500 md:flex md:items-center md:justify-between md:text-left">
            <p>© 2026 BPS Kota Jakarta Timur. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Sensus Ekonomi 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function getTimeLeft(targetDate) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

function SectionTitle({ eyebrow, title, desc, center = false, size = "default" }) {
  const titleSize =
    size === "large"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-3xl sm:text-4xl lg:text-5xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-base font-black uppercase tracking-[0.25em] text-orange-600">
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-black tracking-[-0.04em] text-slate-950 ${titleSize}`}>
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{desc}</p>
    </motion.div>
  );
}

function MiniStat({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-3xl border border-orange-100 bg-white/75 p-4 shadow-sm backdrop-blur"
    >
      <p className="text-xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}

function DashboardCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group rounded-[2rem] border border-orange-100 bg-gradient-to-br from-white to-orange-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-orange-600">
            {item.label}
          </p>
          <p className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">
            {item.value}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
          {React.cloneElement(item.icon, { size: 24 })}
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
        {item.desc}
      </p>
    </motion.div>
  );
}

function AnnouncementCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="block cursor-not-allowed rounded-[2rem] border border-slate-200 bg-slate-100/80 p-6 opacity-80 shadow-sm backdrop-blur"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-200 text-slate-500 shadow-sm">
          <Megaphone size={26} />
        </div>

        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-600 ring-1 ring-slate-300">
          {item.status}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black tracking-tight text-slate-500">
        {item.title}
      </h3>

      <p className="mt-3 text-sm font-semibold leading-7 text-slate-500">
        {item.desc}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-400">
        Belum Tersedia
        <ArrowRight size={17} />
      </div>
    </motion.div>
  );
}

function HeroCountdown({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/25 p-5 text-center shadow-lg shadow-orange-700/10 backdrop-blur transition hover:bg-white/30">
      <p className="text-5xl font-black tracking-[-0.05em] text-white">
        {value}
      </p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-white">
        {label}
      </p>
    </div>
  );
}

function BenefitCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/80 p-7 shadow-lg shadow-orange-900/5 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-orange-50 transition group-hover:bg-orange-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-lg shadow-orange-500/10">
          {React.cloneElement(item.icon, { size: 26 })}
        </div>

        <span className="text-5xl font-black tracking-[-0.07em] text-orange-300/70">
          {item.no}
        </span>
      </div>

      <h3 className="relative mt-7 text-xl font-black uppercase tracking-tight text-slate-950">
        {item.title}
      </h3>

      <p className="relative mt-3 text-base font-semibold leading-7 text-slate-600">
        {item.desc}
      </p>
    </motion.div>
  );
}

function StageCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10"
    >
      <div className="flex gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black text-white shadow-lg shadow-orange-500/20">
          {item.no}
        </div>

        <div className="min-w-0">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">
            {React.cloneElement(item.icon, { size: 15 })} Tahap {item.no}
          </div>

          <h3 className="text-2xl font-black tracking-tight text-slate-950">
            {item.title}
          </h3>

          <p className="mt-1 text-base font-black text-orange-600">
            {item.date}
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function RequirementItem({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex gap-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 text-sm font-semibold leading-6 text-slate-700"
    >
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <span>{text}</span>
    </motion.div>
  );
}

function SpecCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex gap-4 rounded-3xl border border-orange-100 bg-orange-50/80 p-5 transition hover:border-orange-200 hover:bg-white hover:shadow-lg hover:shadow-orange-900/5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
        {React.cloneElement(item.icon, { size: 24 })}
      </div>

      <div>
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-1 text-sm leading-7 text-slate-600">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

function StepGroup({ title, steps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-[2.5rem] border border-orange-100 bg-white/80 p-6 shadow-xl shadow-orange-900/5 backdrop-blur md:p-8"
    >
      <h3 className="inline-flex rounded-2xl bg-orange-500 px-5 py-3 text-lg font-black text-white shadow-lg shadow-orange-500/20">
        {title}
      </h3>

      <div className="mt-7 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="group grid grid-cols-[58px_1fr] items-start gap-4 rounded-3xl border border-orange-100 bg-orange-50/70 p-4 transition hover:border-orange-200 hover:bg-white hover:shadow-lg hover:shadow-orange-900/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              {String(index + 1).padStart(2, "0")}
            </div>

            <p className="pt-1 text-sm font-bold leading-7 text-slate-800">
              {step}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}