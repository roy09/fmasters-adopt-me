import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from '@reach/router';
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          Adobt Me!
      </Link>

      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
