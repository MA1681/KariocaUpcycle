// pages/About.jsx
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">

      {/* Left side - Text Section */}
      <div className="md:w-1/2 space-y-8 bg-gray-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6 leading-tight">About Us</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Tudo começou como um sonho de criança nas ruas de Rio de Janeiro. Com uma máquina de costura, agulha e linha, uma ideia simples ganhou forma. Usar roupas já usadas para criar algo novo e único, cheio de estilo e personalidade. Essa paixão por transformar o velho em novo começou com peças pequenas, feitas à mão, e logo foi crescendo. O que era um hobby, uma forma de dar vida nova ao que já não tinha mais utilidade, se transformou em um negócio que começou a vender suas criações pelas ruas da cidade.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Com o tempo, a visão e o propósito dessa pequena empresa ganharam proporções maiores. Nos últimos seis anos, o projeto se expandiu para o mercado europeu, especialmente em Portugal, onde a sustentabilidade e o upcycling conquistaram um público apaixonado. O conceito de transformar roupas usadas em peças incríveis foi abraçado por uma nova geração, que valoriza a economia circular e o consumo consciente.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Hoje, essa marca brasileira se tornou um grande projeto de upcycling sustentável, crescendo rapidamente e conquistando cada vez mais admiradores. Não é apenas uma empresa, é um movimento que inspira pessoas a repensarem o consumo e a darem valor ao que já existe. Com cada peça criada, a história do Rio de Janeiro se mistura com a inovação europeia, criando um futuro mais sustentável e cheio de estilo. E o melhor: esse projeto ainda está crescendo, avançando e conquistando o mundo com seu impacto positivo.
        </p>
      </div>

      {/* Right side - Image Section */}
      <div className="md:w-1/2 space-y-12 mt-6 md:mt-0 px-4">
        {/* First Image */}
        <div className="relative group mb-8">
          <img
            src="https://media.istockphoto.com/id/1215739645/pt/foto/mother-in-law-teaching-daughter-in-law-how-to-use-sewing-machine.jpg?s=1024x1024&w=is&k=20&c=fHwC6lTRXMpKKTet0u8HRkhPh4JJyxt7Tf-1ZfPhDFo="
            alt="Upcycling Sewing Machine"
            className="w-full h-64 object-cover rounded-3xl shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-3xl group-hover:opacity-0 transition duration-300 ease-in-out"></div>
        </div>

        {/* Second Image */}
        <div className="relative group">
          <img
            src="https://media.istockphoto.com/id/1353427281/pt/foto/denim-upcycling-ideas-using-old-jeans-repurposing-jeans-reusing-old-jeans-upcycle-stuff.jpg?s=1024x1024&w=is&k=20&c=9mIoy8uQwUXaIUUzX6tMJ30fMX05kl5E8x3AB-lx3ro="
            alt="Upcycled Denim"
            className="w-full h-64 object-cover rounded-3xl shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-3xl group-hover:opacity-0 transition duration-300 ease-in-out"></div>
        </div>
      </div>

    </section>
  </Layout>
);

export default About;
