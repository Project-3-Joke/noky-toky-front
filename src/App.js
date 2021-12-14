import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import LogoPage from "./components/Logo";
import CartProduct from "./components/CartProduct";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import CartPage from "./pages/CartPage";
// <== IMPORT
import AnonRoute from "./components/AnonRoute"; // <== IMPORT
import UserDetailsPage from "./pages/UserDetailsPage";
import JokeFavPage from "./pages/JokeFavPage";
import JokeList from "./pages/FavJokeList";
import AddNewJoke from "./components/AddNewJoke";
import EditNewjoke from "./pages/EditNewJoke";

function App() {
  return (
    <div className="App">
      <LogoPage />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path="/user" component={UserListPage} />
        <PrivateRoute exact path="/favourite" component={JokeList} />
        <PrivateRoute exact path="/newjoke" component={AddNewJoke} />
        <PrivateRoute exact path="/favourite/:id" component={JokeFavPage} />
        <PrivateRoute exact path="/cart/:id" component={CartPage} />
        <PrivateRoute exact path="/user/:id" component={UserDetailsPage} />
        <PrivateRoute exact path="/buy/:id" component={CartProduct} />
        <PrivateRoute exact path="/edit" component={EditNewjoke} />
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
