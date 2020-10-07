import React from "react";
import { Route, 
  HashRouter,
  Redirect 
} from "react-router-dom";

import { Layout } from '../components'

import {
  MovieList,
  MovieDetail,
} from "../pages";


const App = () => (
  <HashRouter>
    <Route>
      <Redirect to={"/movies"} />
      <Layout exact path="/movies" component={MovieList} />
      <Layout exact path="/movie-detail" component={MovieDetail} />
    </Route>
  </HashRouter>
);

export default App;
