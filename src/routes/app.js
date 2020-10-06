import React from "react";
// import { useSelector } from "react-redux";
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
  // <BrowserRouter>
  //   <Redirect to={"/home"} />
  //   <Layout exact path="/movies" component={MovieList} />
  //   <Layout exact path="/movie-detail" component={MovieDetail} />
  // </BrowserRouter>
  // <Route>
  //   <Redirect to={"/home"} />
  //   <Layout exact path="/movies" component={MovieList} />
  //   <Layout exact path="/movie-detail" component={MovieDetail} />
  //   {/* <Layout exact path="/premi" component={Premi} /> */}
  // </Route>
);

// const ErrRoutes = () => <Route path="/not-found" component={NotFound} />;

// const Navigation = () => {
//   const { isLogin } = useSelector((state) => state.loginReducer);

//   return (
//     <HashRouter>
//       <Switch>
//         {isError ? <ErrRoutes /> : isLogin ? <AppRoutes /> : <AuthRoutes />}
//       </Switch>
//     </HashRouter>
//   );
// };

export default App;
