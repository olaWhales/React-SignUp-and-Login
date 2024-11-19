import Login from "../auth/Login"
import SignUp from "../auth/SignUp"
import Booklist from "../component/bookList";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/booklist",
    element: <Booklist />,
  },
];

export default routes;




