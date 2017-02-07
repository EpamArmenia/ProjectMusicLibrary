import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeComponent from './pages/HomeComponent';
import About from './pages/About';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound'

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomeComponent} />
        <Route path="home" component={HomeComponent} />
        <Route path="about" component={About} />
        <Route path="*" component={NotFound} />
    </Route>
)