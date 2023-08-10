import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemsLayout from "./pages/ItemsLayout";
import RouterLayout from "./pages/RouterLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RouterLayout/>,
        children: [
            { index: true, element: <Dashboard/> },
            { path: 'items', element: <ItemsLayout/>}
        ]
    }
])

export default router