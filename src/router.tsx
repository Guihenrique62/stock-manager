import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemsLayout from "./pages/ItemsLayout";
import RouterLayout from "./pages/RouterLayout";
import React from "react";
import ItemsTable from "./components/ItemsTable/ItemsTable";
import CreateItems from "./components/CreateItems/CreateItems";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RouterLayout/>,
        children: [
            { index: true, element: <Dashboard/> },
            { 
                path: 'items',
                element: <ItemsLayout/>,
                children: [
                    {index: true, element: <ItemsTable/>},
                    {path: 'new', element: <CreateItems/>}
                ]
            }
        ]
    }
])

export default router