import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeComponent from './pages/HomeComponent';
import About from './pages/About';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Register from './components/RegisterComponent'

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomeComponent} />
        <Route path="home" component={HomeComponent} />
        <Route path="about" component={About} />
        <Route path="signin" component={SignIn} />
        <Route path="register" component={Register} />
        <Route path="*" component={NotFound} />
    </Route>
)