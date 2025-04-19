// pages/About.jsx
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <section
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-20 gap-16"
      style={{
        background: "linear-gradient(135deg, #e0f2ff, #f0faff)",
      }}
    >

      {/* LEFT – Nossa História */}
      <div className="md:w-1/2 relative">
        <div className="bg-white/80 backdrop-blur-md border border-blue-200 shadow-xl rounded-3xl p-10 md:p-14 transition-all duration-500 hover:scale-105">
          <h2 className="text-5xl font-serif text-blue-800 font-bold mb-6 drop-shadow-lg">
            Nossa História
          </h2>
          <p className="text-lg text-blue-900 leading-relaxed mb-5 font-light">
            Tudo começou como um sonho de criança nas ruas do Rio de Janeiro. Com uma máquina de costura, agulha e linha, uma ideia simples ganhou forma.
          </p>
          <p className="text-lg text-blue-900 leading-relaxed mb-5 font-light">
            Com o tempo, a visão e o propósito dessa pequena empresa ganharam proporções maiores. Nos últimos seis anos, o projeto se expandiu para o mercado europeu, especialmente em Portugal...
          </p>
          <p className="text-lg text-blue-900 leading-relaxed font-light">
            Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
          </p>
          <p className="text-lg text-blue-900 leading-relaxed font-light">
            Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
          </p>
          <p className="text-lg text-blue-900 leading-relaxed font-light">
            Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
          </p>
          <p className="text-lg text-blue-900 leading-relaxed font-light">
            Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
          </p>
         
          
        </div>
      </div>

      {/* RIGHT – Floating Upcycling Images */}
      <div className="md:w-1/2 flex flex-col gap-10">
        <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 border-4 border-blue-100">
          <img
            src="https://media.istockphoto.com/id/1215739645/pt/foto/mother-in-law-teaching-daughter-in-law-how-to-use-sewing-machine.jpg?s=1024x1024&w=is&k=20&c=fHwC6lTRXMpKKTet0u8HRkhPh4JJyxt7Tf-1ZfPhDFo="
            alt="Upcycling Sewing"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 border-4 border-blue-100">
          <img
            src="https://media.istockphoto.com/id/1353427281/pt/foto/denim-upcycling-ideas-using-old-jeans-repurposing-jeans-reusing-old-jeans-upcycle-stuff.jpg?s=1024x1024&w=is&k=20&c=9mIoy8uQwUXaIUUzX6tMJ30fMX05kl5E8x3AB-lx3ro="
            alt="Upcycled Jeans"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Floating Profile Image */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-2xl hover:scale-110 transition duration-300"
        />
      </div>
    </section>
  </Layout>
);

export default About;
