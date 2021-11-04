import { Restaurant } from "@material-ui/icons";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage"
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchRestaurantsPage from "../pages/SearchRestaurantsPage/SearchRestaurantsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";



const Router = () =>
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/cartPage">
                    <CartPage/>
                </Route>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/signUp">
                    <SignUpPage/>
                </Route>
                <Route exact path="/adress">
                    <RegisterAdressPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path= "/profile/">
                    <ProfilePage/>
                </Route>
                <Route exact path= "/restaurant/">
                    <RestaurantPage/>
                </Route>
                <Route exact path= "/search">
                    <SearchRestaurantsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router