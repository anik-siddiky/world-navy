import { createBrowserRouter, } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import ExportBase from "../Pages/ExportBase/ExportBase";
import NoticeOfOfficeClosure from "../Pages/NewsPages/NoticeOfOfficeClosure";
import NoticeOfGoldenWeek from "../Pages/NewsPages/NoticeOfGoldenWeek";
import WinterHolidayNotice from "../Pages/NewsPages/WinterHolidayNotice";

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
            {
                path: 'notice-of-office-closure',
                element: <NoticeOfOfficeClosure></NoticeOfOfficeClosure>
            },
            {
                path: "notice-of-golden-week",
                element: <NoticeOfGoldenWeek></NoticeOfGoldenWeek>
            },
            {
                path: 'winter-holiday-notice',
                element: <WinterHolidayNotice></WinterHolidayNotice>
            }
        ]
    },
]);

export default Router