import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import withLayout from '../components/HOC/withLayout/withLayout'
import ProductsLayout from '../layouts/ProductsLayout/ProductsLayout'
import { Pages, RoutesString } from './routesString'

export default function Routes() {
    return (
        <ErrorBoundary>
            <Switch>
                <Route
                    path={RoutesString.Products}
                    exact={true}
                    component={withLayout(ProductsLayout, () => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Pages.Products />
                        </Suspense>
                    ))}
                />
            </Switch>

        </ErrorBoundary>
    )
}
