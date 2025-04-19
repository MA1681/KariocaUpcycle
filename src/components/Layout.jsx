// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 p-8 bg-blue-50">{children}</main>
    <Footer />
  </div>
);

export default Layout;