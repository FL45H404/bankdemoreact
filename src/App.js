import "./styles.css";

import { Home } from "./Home";
import { Login } from "./Login";
import { useSelector } from "react-redux";
export default function App() {
  const login = useSelector((state) => state.login.isLogin);
  return <>{login ? <Home /> : <Login />}</>;
}
