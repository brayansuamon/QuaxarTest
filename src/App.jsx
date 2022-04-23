import { React } from "react";
import styles from "./App.scss";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
//import Login_user from "./components/Login/login_user";
const { App_styles } = styles;
function App() {
  return (
    <div className={App_styles}>
      <Header />
      {/* <Login_user /> */}
      <Body />
    </div>
  );
}

export default App;
