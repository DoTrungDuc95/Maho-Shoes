import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import withLayout from '../components/HOC/withLayout/withLayout';
import ProductsLayout from '../layouts/ProductsLayout/ProductsLayout';
import PageNotFound from './PageNotFound/PageNotFound';
import { Pages, RoutesString } from './routesString';
import CustomSpinner from '../components/CustomSpinner/CustomSpinner';

export default function Routes() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route
          path={RoutesString.Home}
          exact
          component={() => (
            <Suspense fallback={<CustomSpinner />}>
              <Pages.Home />
            </Suspense>
          )}
        />
        <Route
          path={RoutesString.Products}
          exact
          component={withLayout(ProductsLayout, () => (
            <Suspense fallback={<CustomSpinner />}>
              <Pages.Products />
            </Suspense>
          ))}
        />
        <Route key={'page-not-found'} path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
