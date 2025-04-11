// pages/About.jsx
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-16 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-3xl shadow-xl border border-green-300">

      {/* Left side - Text Section */}
      <div className="md:w-1/2 space-y-6 bg-white/80 backdrop-blur-lg p-10 rounded-xl border border-green-300 shadow-lg">
        <h2 className="text-5xl font-semibold text-green-800 font-serif tracking-wide mb-4">
          Nossa História
        </h2>
        <p className="text-lg text-gray-800 font-light leading-relaxed">
          Tudo começou como um sonho de criança nas ruas do Rio de Janeiro. Com uma máquina de costura, agulha e linha, uma ideia simples ganhou forma. Usar roupas já usadas para criar algo novo e único, cheio de estilo e personalidade...
        </p>
        <p className="text-lg text-gray-800 font-light leading-relaxed">
          Com o tempo, a visão e o propósito dessa pequena empresa ganharam proporções maiores. Nos últimos seis anos, o projeto se expandiu para o mercado europeu, especialmente em Portugal...
        </p>
        <p className="text-lg text-gray-800 font-light leading-relaxed">
          Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
        </p>
      </div>

      {/* Right side - Image Section */}
      <div className="md:w-1/2 space-y-8 flex flex-col justify-center">
        {/* First Image */}
        <div className="relative group rounded-xl overflow-hidden shadow-xl border-4 border-green-300 transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://media.istockphoto.com/id/1215739645/pt/foto/mother-in-law-teaching-daughter-in-law-how-to-use-sewing-machine.jpg?s=1024x1024&w=is&k=20&c=fHwC6lTRXMpKKTet0u8HRkhPh4JJyxt7Tf-1ZfPhDFo="
            alt="Upcycling Sewing Machine"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-green-100/30 group-hover:opacity-0 transition duration-300"></div>
        </div>

        {/* Second Image */}
        <div className="relative group rounded-xl overflow-hidden shadow-xl border-4 border-green-300 transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://media.istockphoto.com/id/1353427281/pt/foto/denim-upcycling-ideas-using-old-jeans-repurposing-jeans-reusing-old-jeans-upcycle-stuff.jpg?s=1024x1024&w=is&k=20&c=9mIoy8uQwUXaIUUzX6tMJ30fMX05kl5E8x3AB-lx3ro="
            alt="Upcycled Denim"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-green-100/30 group-hover:opacity-0 transition duration-300"></div>
        </div>
      </div>

      {/* Profile Image - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-8 border-white shadow-2xl transition-transform duration-300 transform hover:scale-110"
        />
      </div>
    </section>
  </Layout>
);

export default About;
