import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Header/Navibar';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from './Components/Main/Home';
import {Blog} from './Components/Main/Blog';
import {NewPost} from './Components/Main/NewPost';

function App() {
  return (
    <div>
      <Router>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
      </Router>
      <Footer /> 

    </div>
  );
}

export default App;
