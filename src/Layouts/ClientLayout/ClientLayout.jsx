import React from "react";
import Header from "../../partials/ClientPartials/Header/Header";
import Footer from "@/partials/ClientPartials/Footer/Footer";

function ClientLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default ClientLayout;
