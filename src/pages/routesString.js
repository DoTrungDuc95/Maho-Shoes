import { lazy } from "react"

const Home = lazy(() => import("./home/HomePage"));
const Products = lazy(() => import("./products/ProductsPage"));

export const Pages = {
    Products,
    Home
}

export const RoutesString = {
    Products: '/products',
    Home: '/'
}