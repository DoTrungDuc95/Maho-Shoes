import { lazy } from "react"

const Products = lazy(() => import("./products/ProductsPage"));


export const Pages = {
    Products
}
export const RoutesString = {
    Products: '/products',

}