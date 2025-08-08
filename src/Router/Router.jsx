import { createBrowserRouter, } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import ExportBase from "../Pages/ExportBase/ExportBase";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>
            },
            {
                path: 'company-profile',
                element: <CompanyProfile></CompanyProfile>
            },
            {
                path: 'export-base',
                element: <ExportBase></ExportBase>
            },
            
        ]
    },
]);

export default Router