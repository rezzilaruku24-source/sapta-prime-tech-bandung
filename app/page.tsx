export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>SAPTA PRIME TECH</h1>
      <h3>Jasa Service & Instal Ulang Laptop/PC Bandung</h3>

      <hr />

      <h2>💻 INSTAL ULANG</h2>
      <p>Windows Only – Rp 50.000</p>
      <p>Windows + Driver – Rp 75.000</p>
      <p>Windows + Driver + Office – Rp 100.000</p>
      <p>Instal Game / Aplikasi – Mulai 20.000</p>

      <h2>🧹 SERVICE</h2>
      <p>Cleaning + Thermal Paste – Rp 100.000</p>
      <p>Jasa Pasang SSD / RAM – Rp 50.000</p>
      <p>Service Keyboard – Mulai 200.000</p>
      <p>Service Hardware Lainnya – Menyesuaikan</p>

      <h2>🔍 CEK</h2>
      <p>Gratis (Jika lanjut service)</p>

      <h2>🚗 JASA PANGGILAN</h2>
      <p>Mulai 20.000</p>

      <hr />

      <h3>📍 Alamat</h3>
      <p>
        Kavling Sadang Sari Asri Blok E No 1<br />
        Kel. Andir, Kec. Baleendah<br />
        Kab. Bandung – Jawa Barat
      </p>

      <h3>📲 WhatsApp</h3>
      <a href="https://wa.me/6281222229455" target="_blank">
        Klik Chat WhatsApp
      </a><a
  href="https://wa.me/6281222229455"
  target="_blank"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
>
  Chat WhatsApp
</a>export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">SAPTA PRIME TECH</h1>
          <p className="mt-1 text-lg">Jasa Service & Instal Ulang Laptop/PC Bandung</p>
        </div>
      </header>

      {/* LAYANAN */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">💻 Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Instal Ulang</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Windows Only – Rp 50.000</li>
              <li>Windows + Driver – Rp 75.000</li>
              <li>Windows + Driver + Office – Rp 100.000</li>
              <li>Instal Game / Aplikasi – Mulai 20.000</li>
            </ul>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Service</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cleaning + Thermal Paste – Rp 100.000</li>
              <li>Jasa Pasang SSD / RAM – Rp 50.000</li>
              <li>Service Keyboard – Mulai 200.000</li>
              <li>Service Hardware Lainnya – Menyesuaikan</li>
            </ul>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Cek</h3>
            <p className="text-gray-700">Gratis (Jika lanjut service)</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Jasa Panggilan</h3>
            <p className="text-gray-700">Mulai 20.000</p>
          </div>
        </div>
      </section>

      {/* KENAPA PILIH KAMI */}
      <section className="bg-blue-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">⭐ Kenapa Pilih Kami</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cepat & Tepat Waktu</li>
            <li>Aman & Bergaransi</li>
            <li>Bisa Panggilan ke Rumah / Kantor</li>
            <li>Harga Terjangkau</li>
          </ul>
        </div>
      </section>

      {/* FORM BOOKING */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">📩 Booking Service</h2>
        <form
          action="https://wa.me/6281222229455?text="
          method="get"
          target="_blank"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as any;
            const name = form.name.value;
            const phone = form.phone.value;
            const service = form.service.value;
            const message = form.message.value;
            const text = `Halo Sapta Prime Tech,%0ANama: ${name}%0ANo HP: ${phone}%0ALayanan: ${service}%0AMessage: ${message}`;
            window.open(`https://wa.me/6281222229455?text=${text}`, "_blank");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Nomor HP"
            className="w-full border p-3 rounded"
            required
          />
          <select
            name="service"
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Pilih Layanan</option>
            <option value="Instal Ulang">Instal Ulang</option>
            <option value="Service">Service</option>
            <option value="Cek">Cek</option>
            <option value="Jasa Panggilan">Jasa Panggilan</option>
          </select>
          <textarea
            name="message"
            placeholder="Pesan / Detail Layanan"
            className="w-full border p-3 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>📍 Kavling Sadang Sari Asri Blok E No 1, Kel. Andir, Kec. Baleendah, Kab. Bandung</p>
          <p>📲 WhatsApp: <a href="https://wa.me/6281222229455" className="underline">081222229455</a></p>
        </div>
      </footer>

      {/* TOMBOL WHATSAPP MENGAMBANG */}
      <a
        href="https://wa.me/6281222229455"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        Chat WhatsApp
      </a>
    </main>
  );
}
    </main>
  );
}