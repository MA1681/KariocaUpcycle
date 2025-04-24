import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col relative">
    <Header />
    <main className="flex-1 pt-20 px-4 sm:px-8 bg-blue-50 relative z-10">
      {/* Background image with full coverage and no quality loss */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://denimshine.com/wp-content/uploads/2022/05/tailored-denim-jeans-1024x682.jpg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* This wrapper now includes top padding to create space below Header */}
      <div className="relative z-20">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
