import App from "./App"
import ErrorPage from "./ErrorPage"
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Navigate to="/step1" replace />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/:step",
        element: <App />,
        errorElement: <ErrorPage />,
    },
]

export default routes;