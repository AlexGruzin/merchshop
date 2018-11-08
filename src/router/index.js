import React from 'react';
import { Switch, Route } from 'react-router';

import * as Routes from '../constants/routing';

// views
import Home from 'pages/Home';
import Authenticate from 'pages/Authenticate';
import Shop from 'pages/ShopPage';
import NotFound from 'pages/NotFound';

const Router = () => (
  <Switch>
    <Route exact path={Routes.HOME} component={Home} />
    <Route exact path={Routes.AUTHENTICATE} component={Authenticate} />
    <Route exact path={Routes.SHOP} component={Shop} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Router;

