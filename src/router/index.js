import React from 'react';
import { Switch, Route } from 'react-router';

import * as Routes from '../constants/routing';

// views
import Home from 'pages/Home';
import Authenticate from 'pages/Authenticate';
import Shop from 'pages/ShopPage';
import RecentOrders from 'pages/Account/RecentOrders';
import WishList from 'pages/Account/WishList';
import AccountDetails from 'pages/Account/AccountDetails';
import PaymentMethods from 'pages/Account/PaymentMethods';
import Addresses from 'pages/Account/Addresses';
import AddNewCard from 'pages/Account/AddNewCard';
import OrderInfo from 'pages/Account/OrderInfo';

import NotFound from 'pages/NotFound';

const Router = () => (
  <Switch>
    <Route exact path={Routes.HOME} component={Home} />
    <Route exact path={Routes.AUTHENTICATE} component={Authenticate} />
    <Route exact path={Routes.SHOP} component={Shop} />

    <Route exact path={Routes.ACCOUNT} component={RecentOrders} />
    <Route exact path={Routes.WISHLIST} component={WishList} />
    <Route exact path={Routes.ACCOUNT_DETAILS} component={AccountDetails} />
    <Route exact path={Routes.PAYMENT_METHODS} component={PaymentMethods} />
    <Route exact path={Routes.ADDRESSES} component={Addresses} />
    <Route exact path={Routes.ADD_CARD} component={AddNewCard} />
    <Route exact path={Routes.ORDER} component={OrderInfo} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Router;

