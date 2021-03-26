import React from 'react';
import { Switch, Route } from 'react-router';

import * as Routes from 'constants/routing';

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
import ProductPage from 'pages/ProductPage';

import NotFound from 'pages/NotFound';
import About from "pages/About";
import Pdp from "pages/Pdp";

const Router = () => (
  <Switch>
    <Route exact path={Routes.HOME} component={Home} />
    <Route path={Routes.AUTHENTICATE} component={Authenticate} />
    <Route path={Routes.SHOP} component={Shop} />
    <Route path={Routes.PRODUCT} component={ProductPage} />
    <Route path={Routes.ACCOUNT} component={RecentOrders} />
    <Route path={Routes.WISHLIST} component={WishList} />
    <Route path={Routes.ACCOUNT_DETAILS} component={AccountDetails} />
    <Route path={Routes.PAYMENT_METHODS} component={PaymentMethods} />
    <Route path={Routes.ADDRESSES} component={Addresses} />
    <Route path={Routes.ADD_CARD} component={AddNewCard} />
    <Route path={Routes.ORDER} component={OrderInfo} />
    <Route path={Routes.PRODUCT} component={Pdp} />
    <Route path={Routes.ABOUT} component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Router;

