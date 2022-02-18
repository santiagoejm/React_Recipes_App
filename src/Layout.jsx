import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Recipes Searcher</h1>
        <nav>
          <input type="text" />
          <button>Search</button>
        </nav>
      </header>

      {children}
    </div>
  );
};

export default Layout;
