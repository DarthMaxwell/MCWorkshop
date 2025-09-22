import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import InventoryPage from "../Pages/InventoryPage/InventoryPage";
import BikesPage from "../Pages/BikesPage/BikesPage";
import BikeStoragePage from "../Pages/BikeStoragePage/BikeStoragePage";
import AdminPage from "../Pages/AdminPage/AdminPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "booking", element: <BookingPage /> },
            { path: "inventory", element: <InventoryPage /> },
            { path: "bikes", element: <BikesPage /> },
            { path: "storage", element: <BikeStoragePage /> },
            { path: "admin", element: <AdminPage /> },
        ]
    }
])
