// pages/About.jsx
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-center gap-12">
      
      {/* LEFT - Nossa História */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white/90 backdrop-blur-md border border-blue-200 shadow-2xl rounded-3xl p-8 md:p-10 lg:p-20">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-800 font-bold mb-6 text-center lg:text-left drop-shadow">
            Nossa História
          </h2>
          <div className="space-y-5 text-blue-900 text-lg leading-relaxed font-light">
            <p>
              Tudo começou como um sonho de criança nas ruas do Rio de Janeiro. Com uma máquina de costura, agulha e linha, uma ideia simples ganhou forma.
            </p>
            <p>
              Com o tempo, a visão e o propósito dessa pequena empresa ganharam proporções maiores. Nos últimos seis anos, o projeto se expandiu para o mercado europeu, especialmente em Portugal...
            </p>
            <p>
              Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores...
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - Photos */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-blue-100 hover:scale-105 transition duration-300">
          <img
            src="https://media.istockphoto.com/id/1215739645/pt/foto/mother-in-law-teaching-daughter-in-law-how-to-use-sewing-machine.jpg?s=1024x1024&w=is&k=20&c=fHwC6lTRXMpKKTet0u8HRkhPh4JJyxt7Tf-1ZfPhDFo="
            alt="Upcycling Sewing"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-blue-100 hover:scale-105 transition duration-300">
          <img
            src="https://media.istockphoto.com/id/1353427281/pt/foto/denim-upcycling-ideas-using-old-jeans-repurposing-jeans-reusing-old-jeans-upcycle-stuff.jpg?s=1024x1024&w=is&k=20&c=9mIoy8uQwUXaIUUzX6tMJ30fMX05kl5E8x3AB-lx3ro="
            alt="Upcycled Jeans"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
