import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "/project/:id",
                element: <ProjectView />
            }
        ]
    }
]
export default routes;