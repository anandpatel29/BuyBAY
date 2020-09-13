import React from 'react';
import './App.css';
import Home from './pages/Home'
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Upgrade from './pages/Upgrade';
import User from './pages/User';
import findingRoomate from './pages/findingRoomate';
import blogpage from './pages/Blogpage';
import blogpost from './pages/Blogpostpage';
import listing from './pages/Listing'
import properties from './pages/Property'
import processpay from './pages/Pay'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/upgrade" component={Upgrade} />
        <Route exact path="/user" component={User} />
        <Route exact path="/findroomate" component={findingRoomate} />
        <Route exact path="/blogpage" component={blogpage}/>
        <Route exact path="/blogpost" component={blogpost}/>
        <Route exact path="/listing" component={listing}/>
        <Route exact path="/property-page" component={properties}/>
        <Route exact path="/processpay" component={processpay}/>
        
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
