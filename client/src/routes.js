import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        element: <App />,
        ErrorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            }
        ]
    }
]
export default routes;