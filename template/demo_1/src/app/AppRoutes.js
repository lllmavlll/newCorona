import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';


// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
// const Typography = lazy(() => import('./basic-ui/Typography'));
// const SubOrderForm  = lazy(()=> import('./screens/subOrderForm'))
const BasicTable = lazy(() => import('./tables/BasicTable'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Product = lazy(() => import('./form-elements/orderItems'));   

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));


const Login = lazy(() => import('./user-pages/Login'));

const Register1 = lazy(() => import('./user-pages/Register'));

const OrderFormView = lazy(() => import('./screens/OrderFormViews'));
const GSOView = lazy(() => import('./screens/GSOView'));
const GSIView = lazy(() => import('./screens/GSIView'));

const BoxFraming = lazy(()=> import('./screens/BoxFraming'))

const OrderForm = lazy(() => import('./form-elements/BasicElements'));

const GSreceive  = lazy(()=> import('./screens/GSreceive'))
const GSOrder  = lazy(()=> import('./screens/GSOrder'))
const GSIssuance  = lazy(()=> import('./screens/GSIssuance'))
const GSTesting  = lazy(()=> import('./screens/GSTesting'))



class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/customer-order-form/order-form" component={ OrderForm } />
          <Route path="/customer-order-form/order-form-view" component={ OrderFormView } />
          {/* <Route path="/customer-order-form/sub-order-form" component={ SubOrderForm } /> */}

          <Route path="/gold-smith/receive" component={ GSreceive } />
          <Route path="/gold-smith/order" component={ GSOrder } />
          <Route path="/gold-smith/GSOrder-view" component={ GSOView } />
          <Route path="/gold-smith/issuance-view" component={ GSIView } />
          <Route path="/gold-smith/issuance" component={ GSIssuance } />
          <Route path="/gold-smith/testing" component={ GSTesting } />

          <Route path="/box-framing" component={ BoxFraming } />

          {/* path */}
          <Route path="/product" component={ Product } /> 

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/views/order-form-view" component={ OrderFormView } />
          <Route path="/views/GSOrder-view" component={ GSOView } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/stock-transfer" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;