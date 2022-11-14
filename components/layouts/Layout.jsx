import React from "react";

function Layout({ children,styles }) {
  return <div className="w-screen">
    <div className={`${styles}`}>
      <div className="container mx-auto">
    {children}
    </div>
    </div>
    
    </div>;
}

export default Layout;
