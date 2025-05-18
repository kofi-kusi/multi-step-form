import App from "./App"
import ErrorPage from "./ErrorPage"

const routes = [
    {
        path: "/:step",
        element: <App />,
        errorElement: <ErrorPage />
    },
]

export default routes;