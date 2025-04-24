import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col relative">
    <Header />
    <main className="flex-1 pt-32 px-4 sm:px-8 bg-blue-50 relative z-10">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/1553167687/photo/recycle-reuse-repurpose-upcycle-upgrade-concept-new-life-to-old-things-make-your-own-clothes.jpg?s=612x612&w=0&k=20&c=wS0ePRcrKmH7rsqQZ0pKRaPQSm9Sp3jGORrvTodKm6s=')" }}
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
