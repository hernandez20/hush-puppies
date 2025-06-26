import {createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "@/pages/NotFound";
import MainLayout from "@/layouts/MainLayout"
import ProductoView from "@/pages/ProductView";


const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <ProductoView />
        },

        {
            path: "*",
            element: <NotFound />
        }
    ]

}])
export default function AppRouter(){
    return <RouterProvider router={router} />
}