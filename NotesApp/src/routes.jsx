import Bin from "./components/pages/Bin";
import Login from "./components/pages/Login";
import Note from "./components/pages/Note";
import Signup from "./components/pages/Signup";
import Tasks from "./components/pages/Tasks";

export const AutheticationRoutes = [
  {
    id: 1,
    name: "Login",
    component: Login,
    path: "/",
  },
  {
    id: 2,
    name: "Signup",
    component: Signup,
    path: "/signup",
  },
];

export const AuthenticatedRoutes = {
  id: 1,
  name: "Application",
  path: "/app",
  children: [
    {
      id: 11,
      name: "Home",
      component: Home,
      path: "/app/Home",
    },
    {
        id: 12,
        name: "Search",
        component: Search,
        path: "/app/Search",
      },
    {
        id: 13,
        name: "Notes",
        component: Note,
        path: "/app/notes",
      },
    {
      id: 14,
      name: "Tasks",
      component: Tasks,
      path: "/app/tasks",
    },
    {
        id: 15,
        name: "Archive",
        component: Archive,
        path: "/app/Archive",
      },
    {
      id: 13,
      name: "Bin",
      component: Bin,
      path: "/app/bin",
    },
  ],
};