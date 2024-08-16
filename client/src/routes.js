import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

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
                element: <ProjectDetail />
            }
        ]
    }
]
export default routes;