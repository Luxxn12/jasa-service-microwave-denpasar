import Head from 'next/head';

export default function HomePage() {
    const message = 'Halo, saya ingin bertanya tentang layanan servis microwave atau elektronik lainnya. Apakah bisa dibantu?'
    const phoneNumber = '6285737655537'
    const encodedMessage = encodeURIComponent(message)
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    const currentYear = new Date().getFullYear();
  return (
    <div>
      <Head>
        <title>Jasa Service Microwave - Profesional & Terpercaya</title>
        <meta name="description" content="Jasa service microwave & elektronik lainnya dengan kualitas terbaik dan teknisi berpengalaman." />
      </Head>

      {/* Hero Section ala Apple */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-900">Service Microwave & Elektronik</h1>
        <p className="mt-4 text-lg text-gray-600">Layanan perbaikan profesional untuk microwave, kulkas, TV, dan elektronik lainnya.</p>
        <a href={waUrl} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
          Hubungi Kami di WhatsApp
        </a>
      </section>

      {/* Layanan Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-10">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Microwave', 'Kulkas', 'Televisi', 'Mesin Cuci', 'AC', 'Oven'].map((item) => (
            <div key={item} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Service {item}</h3>
              <p className="mt-2 text-gray-600">Perbaikan cepat & bergaransi.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 bg-gray-200">
      <p>&copy; {currentYear} Jasa Service Microwave Denpasar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
