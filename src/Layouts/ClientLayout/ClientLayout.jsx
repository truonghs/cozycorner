import React from "react";
import Header from "../../partials/ClientPartials/Header/Header";

function ClientLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default ClientLayout;
